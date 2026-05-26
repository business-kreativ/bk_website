const WEBHOOK_TIMEOUT_MS = 8000;

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

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'business-kreativ-quiz-webhook/1.0',
      },
      body: JSON.stringify({
        ...payload,
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
