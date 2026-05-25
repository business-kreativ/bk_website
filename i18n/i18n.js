(function () {
  'use strict';

  const SUPPORTED = ['de', 'en', 'ru', 'uk', 'tr'];
  const STORAGE_KEY = 'bk_lang';
  const ATTR_TEXT = 'data-i18n';
  const ATTR_HTML = 'data-i18n-html';
  const ATTR_ATTRS = 'data-i18n-attr';
  const ATTR_PARTIAL = 'data-i18n-part';

  function detectLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (e) {}
    const nav = (navigator.language || 'de').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : 'de';
  }

  function dict() {
    return (window.I18N && window.I18N[window.BK_LANG]) || (window.I18N && window.I18N.de) || {};
  }

  function fallbackDict() {
    return (window.I18N && window.I18N.de) || {};
  }

  function translate(key) {
    if (!key) return '';
    const d = dict();
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    const f = fallbackDict();
    if (Object.prototype.hasOwnProperty.call(f, key)) return f[key];
    return '__' + key + '__';
  }
  window.t = translate;

  function applyTo(node) {
    if (!node || node.nodeType !== 1) return;

    const textKey = node.getAttribute(ATTR_TEXT);
    if (textKey) node.textContent = translate(textKey);

    const htmlKey = node.getAttribute(ATTR_HTML);
    if (htmlKey) node.innerHTML = translate(htmlKey);

    const attrMap = node.getAttribute(ATTR_ATTRS);
    if (attrMap) {
      attrMap.split(',').forEach((pair) => {
        const parts = pair.split(':');
        if (parts.length !== 2) return;
        const attr = parts[0].trim();
        const key = parts[1].trim();
        if (attr && key) node.setAttribute(attr, translate(key));
      });
    }
  }

  function applyAll(root) {
    const scope = root || document;
    if (scope.nodeType === 1 && (scope.hasAttribute(ATTR_TEXT) || scope.hasAttribute(ATTR_HTML) || scope.hasAttribute(ATTR_ATTRS))) {
      applyTo(scope);
    }
    const list = scope.querySelectorAll('[' + ATTR_TEXT + '],[' + ATTR_HTML + '],[' + ATTR_ATTRS + ']');
    list.forEach(applyTo);
  }
  window.applyI18n = applyAll;

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    if (window.BK_LANG === lang) {
      closeLangMenus();
      return;
    }
    window.BK_LANG = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    syncLangControls(lang);
    location.reload();
  }
  window.setBkLang = setLang;

  const LANG_LABELS = {
    de: 'Deutsch',
    en: 'English',
    ru: 'Русский',
    uk: 'Українська',
    tr: 'Türkçe',
  };

  function closeLangMenus() {
    document.querySelectorAll('.lang-menu.open').forEach((menu) => {
      menu.classList.remove('open');
    });
    document.querySelectorAll('.lang-btn[aria-expanded="true"]').forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  function syncLangControls(lang) {
    document.querySelectorAll('.lang-current').forEach((node) => {
      node.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('[data-lang]').forEach((node) => {
      node.classList.toggle('active', node.getAttribute('data-lang') === lang);
      node.classList.toggle('is-active', node.getAttribute('data-lang') === lang);
    });
  }

  function isFooterWidget(mount) {
    return Boolean(mount.closest('footer, .site-footer'));
  }

  function renderWidget(mount, options) {
    if (!mount) return;
    mount.innerHTML = '';

    if (isFooterWidget(mount)) {
      const wrap = document.createElement('span');
      wrap.className = 'footer-lang';
      SUPPORTED.forEach((code, index) => {
        if (index > 0) {
          const sep = document.createElement('span');
          sep.className = 'footer-lang-sep';
          sep.textContent = '·';
          wrap.appendChild(sep);
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'footer-lang-opt' + (code === window.BK_LANG ? ' active' : '');
        btn.setAttribute('data-lang', code);
        btn.setAttribute('aria-label', 'Sprache: ' + code.toUpperCase());
        btn.textContent = code.toUpperCase();
        btn.addEventListener('click', () => setLang(code));
        wrap.appendChild(btn);
      });
      mount.appendChild(wrap);
      return;
    }

    const wrap = document.createElement('div');
    wrap.className = 'lang-switch';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-btn';
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span class="lang-current">' + window.BK_LANG.toUpperCase() + '</span><svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.55;"><path d="M6 9l6 6 6-6"/></svg>';
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const menu = wrap.querySelector('.lang-menu');
      const nextOpen = !menu.classList.contains('open');
      closeLangMenus();
      if (nextOpen) {
        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    const menu = document.createElement('div');
    menu.className = 'lang-menu';
    menu.setAttribute('role', 'menu');
    menu.addEventListener('click', (event) => event.stopPropagation());

    SUPPORTED.forEach((code) => {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'lang-option' + (code === window.BK_LANG ? ' active' : '');
      option.setAttribute('data-lang', code);
      option.setAttribute('role', 'menuitem');
      option.textContent = code.toUpperCase() + '  ·  ' + (LANG_LABELS[code] || code.toUpperCase());
      option.addEventListener('click', () => setLang(code));
      menu.appendChild(option);
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    mount.appendChild(wrap);
  }
  window.renderBkLangWidget = renderWidget;

  function mountAllWidgets() {
    const nodes = document.querySelectorAll('[data-bk-lang-widget]');
    nodes.forEach((node) => {
      const variant = node.getAttribute('data-bk-lang-widget') || 'dark';
      renderWidget(node, { variant });
    });
  }

  function injectStyles() {
    if (document.getElementById('bk-lang-style')) return;
    const css = `
      .lang-switch { position: relative; display: inline-flex; align-items: center; }
      .lang-btn {
        display: inline-flex; align-items: center; gap: 5px;
        background: transparent; border: 0;
        color: rgba(255,255,255,0.5);
        padding: 4px 0;
        font-family: 'JetBrains Mono', 'Geist Mono', ui-monospace, monospace;
        font-size: 12px; font-weight: 500;
        letter-spacing: 0.08em;
        cursor: pointer;
        transition: color 180ms ease;
      }
      .lang-btn:hover,
      .lang-btn[aria-expanded="true"] { color: #fff; }
      .lang-menu {
        position: absolute; top: calc(100% + 10px); right: 0;
        background: #fff; color: #1A1A1A;
        border: 1px solid #E5E2DD;
        border-radius: 8px;
        padding: 4px;
        min-width: 152px;
        box-shadow: 0 12px 32px -16px rgba(0,0,0,0.35);
        display: none;
        flex-direction: column;
        z-index: 60;
      }
      .lang-menu.open { display: flex; }
      .lang-option {
        background: transparent; border: 0;
        padding: 8px 12px; border-radius: 5px;
        font-family: 'JetBrains Mono', 'Geist Mono', ui-monospace, monospace;
        font-size: 12px; color: #2A2A2A;
        cursor: pointer; text-align: left;
        letter-spacing: 0.04em;
        transition: background 150ms ease, color 150ms ease;
      }
      .lang-option:hover { background: #F4F2EE; }
      .lang-option.active { color: #C46A28; }
      .footer-lang { display: inline-flex; align-items: center; gap: 4px; }
      .footer-lang-opt {
        background: transparent; border: 0;
        font-family: 'JetBrains Mono', 'Geist Mono', ui-monospace, monospace;
        font-size: 11px; color: #6b6b6b;
        letter-spacing: 0.06em;
        padding: 2px 4px; cursor: pointer;
        transition: color 150ms ease;
      }
      .footer-lang-opt:hover { color: #d7d0c8; }
      .footer-lang-opt.active { color: #C46A28; }
      .footer-lang-sep { color: #6b6b6b; opacity: 0.4; font-size: 11px; }
      @media (max-width: 720px) {
        .lang-menu { left: 0; right: auto; }
        .lang-btn { font-size: 11px; }
        .footer-lang-opt,
        .footer-lang-sep { font-size: 10px; }
      }
    `;
    const tag = document.createElement('style');
    tag.id = 'bk-lang-style';
    tag.textContent = css;
    document.head.appendChild(tag);
  }

  // Set language synchronously so React components get translated strings on first render
  window.BK_LANG = detectLang();
  try { document.documentElement.setAttribute('lang', window.BK_LANG); } catch (e) {}

  function init() {
    document.documentElement.setAttribute('lang', window.BK_LANG);
    injectStyles();
    applyAll();
    mountAllWidgets();
    document.addEventListener('click', closeLangMenus);

    const obs = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          applyAll(n);
          const widgetSlots = n.querySelectorAll && n.querySelectorAll('[data-bk-lang-widget]');
          if (widgetSlots && widgetSlots.length) {
            widgetSlots.forEach((slot) => {
              const variant = slot.getAttribute('data-bk-lang-widget') || 'dark';
              renderWidget(slot, { variant });
            });
          }
          if (n.hasAttribute && n.hasAttribute('data-bk-lang-widget')) {
            const variant = n.getAttribute('data-bk-lang-widget') || 'dark';
            renderWidget(n, { variant });
          }
        });
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
