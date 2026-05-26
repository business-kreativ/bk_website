(function () {
  'use strict';

  const SITE_KEY = '0x4AAAAAADWjlUD4dCQrRf7O';
  const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  const TIMEOUT_MS = 12000;

  let scriptPromise = null;
  let widgetId = null;
  let pending = null;

  function ensureContainer() {
    let container = document.getElementById('bk-turnstile');
    if (container) return container;

    container = document.createElement('div');
    container.id = 'bk-turnstile';
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.bottom = '0';
    container.style.width = '1px';
    container.style.height = '1px';
    container.style.overflow = 'hidden';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);
    return container;
  }

  function loadTurnstile() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (scriptPromise) return scriptPromise;

    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => window.turnstile ? resolve(window.turnstile) : reject(new Error('Turnstile unavailable'));
      script.onerror = () => reject(new Error('Turnstile script failed'));
      document.head.appendChild(script);
    });

    return scriptPromise;
  }

  function renderWidget(turnstile, action) {
    if (widgetId !== null) {
      turnstile.reset(widgetId);
      return widgetId;
    }

    widgetId = turnstile.render(ensureContainer(), {
      sitekey: SITE_KEY,
      size: 'invisible',
      execution: 'execute',
      action: action || 'submit',
      callback: (token) => {
        if (!pending) return;
        pending.resolve(token);
        pending = null;
      },
      'error-callback': () => {
        if (!pending) return;
        pending.reject(new Error('Turnstile challenge failed'));
        pending = null;
      },
      'expired-callback': () => {
        if (!pending) return;
        pending.reject(new Error('Turnstile token expired'));
        pending = null;
      },
    });

    return widgetId;
  }

  window.getBkTurnstileToken = function getBkTurnstileToken(action) {
    if (pending) pending.reject(new Error('Turnstile request superseded'));

    return loadTurnstile().then((turnstile) => new Promise((resolve, reject) => {
      const id = renderWidget(turnstile, action);
      const timeout = setTimeout(() => {
        if (!pending) return;
        pending.reject(new Error('Turnstile timed out'));
        pending = null;
      }, TIMEOUT_MS);

      pending = {
        resolve: (token) => {
          clearTimeout(timeout);
          resolve(token);
        },
        reject: (error) => {
          clearTimeout(timeout);
          reject(error);
        },
      };

      turnstile.execute(id);
    }));
  };
})();
