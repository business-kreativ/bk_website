const WEBHOOK_TIMEOUT_MS = 8000;
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error('Payload too large'));
        request.destroy();
      }
    });

    request.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error('Invalid JSON payload'));
      }
    });

    request.on('error', reject);
  });
}

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
}

async function verifyTurnstile(token, request, expectedAction) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: false, statusCode: 500, error: 'TURNSTILE_SECRET_KEY is not configured' };
  }

  if (!token) {
    return { ok: false, statusCode: 400, error: 'Turnstile token is missing' };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
  if (ip) body.set('remoteip', String(ip).split(',')[0].trim());

  try {
    const verifyResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    const result = await verifyResponse.json();
    if (!result.success) {
      return {
        ok: false,
        statusCode: 400,
        error: 'Turnstile verification failed',
        codes: result['error-codes'] || [],
      };
    }

    if (expectedAction && result.action && result.action !== expectedAction) {
      return { ok: false, statusCode: 400, error: 'Turnstile action mismatch' };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, statusCode: 502, error: 'Turnstile verification unavailable' };
  }
}

module.exports = async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== 'POST') {
    sendJson(response, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  const webhookUrl = process.env.QUIZ_WEBHOOK_URL;
  if (!webhookUrl) {
    sendJson(response, 500, { ok: false, error: 'QUIZ_WEBHOOK_URL is not configured' });
    return;
  }

  let payload;
  try {
    payload = await readJsonBody(request);
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message });
    return;
  }

  const turnstile = await verifyTurnstile(payload.turnstileToken, request, payload.turnstileAction);
  if (!turnstile.ok) {
    sendJson(response, turnstile.statusCode, {
      ok: false,
      error: turnstile.error,
      codes: turnstile.codes,
    });
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'business-kreativ-webhook/1.0',
      },
      body: JSON.stringify({
        ...payload,
        turnstileToken: undefined,
        receivedAt: new Date().toISOString(),
        request: {
          ip: request.headers['x-forwarded-for'] || request.socket.remoteAddress || null,
          referer: request.headers.referer || null,
        },
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!webhookResponse.ok) {
      sendJson(response, 502, {
        ok: false,
        error: 'Webhook request failed',
        status: webhookResponse.status,
      });
      return;
    }

    sendJson(response, 200, { ok: true });
  } catch (error) {
    clearTimeout(timeout);
    sendJson(response, 502, { ok: false, error: 'Webhook request failed' });
  }
};
