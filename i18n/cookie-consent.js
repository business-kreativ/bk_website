(function () {
  'use strict';

  const GA_ID = 'G-RCFBG7FBP1';
  const STORAGE_KEY = 'bk_cookie_choice';
  const ACCEPTED = 'accept';
  const DECLINED = 'decline';
  const GA_COOKIE_NAMES = ['_ga', '_gid', '_gat', '_ga_RCFBG7FBP1'];

  window['ga-disable-' + GA_ID] = true;

  function tx(key, fallback) {
    if (window.t) {
      const value = window.t(key);
      if (value && value !== '__' + key + '__') return value;
    }
    return fallback;
  }

  function getChoice() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function setChoice(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch (error) {}
  }

  function getCookieDomains() {
    const host = window.location.hostname;
    const domains = ['', host];
    const parts = host.split('.');

    if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.'));
    if (host.startsWith('www.')) domains.push('.' + host.slice(4));

    return Array.from(new Set(domains));
  }

  function deleteCookie(name) {
    const expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
    const paths = ['/', window.location.pathname || '/'];

    getCookieDomains().forEach((domain) => {
      paths.forEach((path) => {
        document.cookie = name + '=; expires=' + expires + '; path=' + path + (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
      });
    });
  }

  function deleteAnalyticsCookies() {
    GA_COOKIE_NAMES.forEach(deleteCookie);
  }

  function loadAnalytics() {
    window['ga-disable-' + GA_ID] = false;
    if (window.__bkGaLoaded) {
      if (window.gtag) window.gtag('config', GA_ID, { anonymize_ip: true });
      return;
    }
    window.__bkGaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(script);
  }

  function disableAnalytics() {
    window['ga-disable-' + GA_ID] = true;
    deleteAnalyticsCookies();
  }

  function injectStyles() {
    if (document.getElementById('bk-cookie-style')) return;

    const style = document.createElement('style');
    style.id = 'bk-cookie-style';
    style.textContent = `
      .cookie-banner {
        position: fixed; bottom: 20px; left: 20px; right: 20px;
        z-index: 9999;
        background: #0e1116; color: #fff;
        border-radius: 14px;
        box-shadow: 0 20px 60px -20px rgba(0,0,0,0.5);
        padding: 20px 24px;
        transform: translateY(140%);
        opacity: 0;
        transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease;
        max-width: 760px; margin: 0 auto;
      }
      .cookie-banner.show { transform: translateY(0); opacity: 1; }
      .cookie-inner {
        display: flex; align-items: center; justify-content: space-between;
        gap: 20px; flex-wrap: wrap;
      }
      .cookie-text {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 14px; line-height: 1.5;
        color: rgba(255,255,255,0.78);
        flex: 1; min-width: 260px;
      }
      .cookie-text strong { color: #fff; font-weight: 600; margin-right: 6px; }
      .cookie-text a {
        color: #F7934A; text-decoration: none;
        border-bottom: 1px solid rgba(247,147,74,0.4);
        padding-bottom: 1px; margin-left: 4px;
      }
      .cookie-text a:hover { border-color: #F7934A; }
      .cookie-actions { display: flex; gap: 8px; flex-shrink: 0; }
      .cookie-btn {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 13px; font-weight: 500;
        padding: 10px 18px; border-radius: 8px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 180ms ease;
        display: inline-flex; align-items: center; gap: 8px;
      }
      .cookie-btn-ghost {
        background: transparent; color: rgba(255,255,255,0.6);
        border-color: rgba(255,255,255,0.15);
      }
      .cookie-btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.35); }
      .cookie-btn-primary { background: #F7934A; color: #fff; }
      .cookie-btn-primary:hover { background: #C46A28; }
      .cookie-settings-btn {
        position: fixed; left: 18px; bottom: 18px; z-index: 9998;
        background: rgba(14,17,22,0.88); color: rgba(255,255,255,0.72);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 999px; padding: 7px 11px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10px; letter-spacing: 0.06em;
        cursor: pointer; opacity: 0; pointer-events: none;
        transition: opacity 180ms ease, color 180ms ease, border-color 180ms ease;
      }
      .cookie-settings-btn.show { opacity: 1; pointer-events: auto; }
      .cookie-settings-btn:hover { color: #fff; border-color: rgba(247,147,74,0.55); }
      @media (max-width: 600px) {
        .cookie-banner { left: 12px; right: 12px; bottom: 12px; padding: 18px 18px 16px; border-radius: 12px; }
        .cookie-inner { flex-direction: column; align-items: stretch; gap: 14px; }
        .cookie-actions { width: 100%; }
        .cookie-btn { flex: 1; justify-content: center; }
        .cookie-settings-btn { left: 12px; bottom: 12px; }
      }
    `;
    document.head.appendChild(style);
  }

  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', tx('cookie.aria', 'Cookie-Einstellungen'));
    banner.innerHTML = `
      <div class="cookie-inner">
        <div class="cookie-text">
          <strong>${tx('cookie.title', 'Cookies &amp; Privatsphäre.')}</strong>
          ${tx('cookie.text', 'Wir nutzen Google Analytics nur nach Ihrer Zustimmung. Sie können Ihre Auswahl jederzeit ändern.')}
          <a href="datenschutz.html">${tx('cookie.more', 'Mehr über Datenschutz erfahren')}</a>
        </div>
        <div class="cookie-actions">
          <button type="button" class="cookie-btn cookie-btn-ghost" data-choice="${DECLINED}">${tx('cookie.decline', 'Ablehnen')}</button>
          <button type="button" class="cookie-btn cookie-btn-primary" data-choice="${ACCEPTED}">
            ${tx('cookie.accept', 'Akzeptieren')}
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    `;

    banner.querySelectorAll('[data-choice]').forEach((button) => {
      button.addEventListener('click', () => applyChoice(button.dataset.choice));
    });

    return banner;
  }

  function createSettingsButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cookie-settings-btn';
    button.textContent = tx('cookie.settings', 'Cookies');
    button.addEventListener('click', () => showBanner(true));
    return button;
  }

  function showBanner(immediate) {
    const banner = document.getElementById('cookie-banner') || createBanner();
    const settings = document.getElementById('cookie-settings-btn');

    if (!banner.parentNode) document.body.appendChild(banner);
    if (settings) settings.classList.remove('show');

    setTimeout(() => banner.classList.add('show'), immediate ? 0 : 800);
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    const settings = document.getElementById('cookie-settings-btn');

    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 500);
    }
    if (settings) setTimeout(() => settings.classList.add('show'), 520);
  }

  function applyChoice(choice) {
    setChoice(choice);

    if (choice === ACCEPTED) loadAnalytics();
    else disableAnalytics();

    hideBanner();
  }

  function init() {
    injectStyles();

    const settings = createSettingsButton();
    settings.id = 'cookie-settings-btn';
    document.body.appendChild(settings);

    const choice = getChoice();
    if (choice === ACCEPTED) {
      loadAnalytics();
      settings.classList.add('show');
      return;
    }

    if (choice === DECLINED) {
      disableAnalytics();
      settings.classList.add('show');
      return;
    }

    showBanner(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
