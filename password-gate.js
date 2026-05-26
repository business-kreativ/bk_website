(function () {
  const PASSWORD = 'business-kreativ';
  const STORAGE_KEY = 'bk_site_unlocked';

  function isUnlocked() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch (error) {
      return false;
    }
  }

  function unlock() {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (error) {
      // If storage is unavailable, unlock only for the current page lifecycle.
    }
    document.documentElement.classList.remove('bk-password-locked');
    const gate = document.getElementById('bk-password-gate');
    if (gate) gate.remove();
  }

  function createGate() {
    if (isUnlocked()) {
      unlock();
      return;
    }

    const gate = document.createElement('div');
    gate.id = 'bk-password-gate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-modal', 'true');
    gate.setAttribute('aria-labelledby', 'bk-password-title');
    gate.innerHTML = [
      '<div class="bk-password-card">',
      '<div class="bk-password-brand"><span class="bk-password-logo"><img src="assets/logo_bk-small.webp" alt="bk"></span><span>business-kreativ</span></div>',
      '<div class="bk-password-eyebrow">Geschützter Bereich</div>',
      '<h1 id="bk-password-title">Passwort eingeben.</h1>',
      '<p>Diese Website ist aktuell nur mit Passwort erreichbar.</p>',
      '<form id="bk-password-form">',
      '<input id="bk-password-input" type="password" autocomplete="current-password" placeholder="Passwort" aria-label="Passwort">',
      '<button type="submit">Website öffnen</button>',
      '</form>',
      '<div id="bk-password-error" class="bk-password-error" aria-live="polite"></div>',
      '</div>',
    ].join('');

    document.body.appendChild(gate);

    const form = document.getElementById('bk-password-form');
    const input = document.getElementById('bk-password-input');
    const error = document.getElementById('bk-password-error');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (input.value === PASSWORD) {
        unlock();
        return;
      }
      error.textContent = 'Passwort ist nicht korrekt.';
      input.value = '';
      input.focus();
    });

    input.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createGate);
  } else {
    createGate();
  }
})();
