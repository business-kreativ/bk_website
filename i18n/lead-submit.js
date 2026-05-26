(function () {
  'use strict';

  const ENDPOINT = '/api/quiz-webhook';

  function tx(key, fallback) {
    if (window.t) {
      const value = window.t(key);
      if (value && value !== '__' + key + '__') return value;
    }
    return fallback;
  }

  function collectFormData(form) {
    const data = {};
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = Array.isArray(data[key]) ? data[key].concat(value) : [data[key], value];
      } else {
        data[key] = value;
      }
    }

    form.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      if (!input.name) return;
      if (!Object.prototype.hasOwnProperty.call(data, input.name)) data[input.name] = false;
      if (input.checked && input.value === 'on') data[input.name] = true;
    });

    return data;
  }

  function validate(form) {
    const missing = Array.from(form.querySelectorAll('[required]')).filter((element) => {
      if (element.type === 'checkbox') return !element.checked;
      return !String(element.value || '').trim();
    });

    form.querySelectorAll('[required]').forEach((element) => {
      element.style.borderColor = '';
    });

    if (!missing.length) return true;

    missing.forEach((element) => {
      element.style.borderColor = '#c4453a';
    });
    missing[0].focus();
    return false;
  }

  function setStatus(form, message, isError) {
    let status = form.querySelector('[data-bk-form-status]');
    if (!status) {
      status = document.createElement('div');
      status.setAttribute('data-bk-form-status', '');
      status.style.fontSize = '13px';
      status.style.lineHeight = '1.45';
      status.style.marginTop = '4px';
      form.appendChild(status);
    }

    status.textContent = message;
    status.style.color = isError ? '#c4453a' : '#1f8a4c';
  }

  function getContact(data) {
    return {
      firstName: data.vorname || data.firstName || data.name || '',
      lastName: data.nachname || data.lastName || '',
      name: data.name || [data.vorname, data.nachname].filter(Boolean).join(' '),
      email: data.email || '',
      phone: data.telefon || data.phone || '',
      company: data.firma || data.company || '',
    };
  }

  async function submitForm(form) {
    if (!validate(form)) return;

    const button = form.querySelector('[type="submit"]');
    const data = collectFormData(form);

    if (button) {
      button.disabled = true;
      button.style.opacity = '0.72';
      button.setAttribute('aria-busy', 'true');
    }
    setStatus(form, tx('lead.sending', 'Wird gesendet...'), false);

    try {
      const turnstileToken = window.getBkTurnstileToken
        ? await window.getBkTurnstileToken('lead_submit')
        : '';
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: form.dataset.bkLeadForm || 'business-kreativ-lead',
          submittedAt: new Date().toISOString(),
          language: window.BK_LANG || document.documentElement.lang || 'de',
          page: {
            href: window.location.href,
            path: window.location.pathname,
            userAgent: navigator.userAgent,
          },
          contact: getContact(data),
          form: data,
          turnstileToken,
          turnstileAction: 'lead_submit',
        }),
      });

      if (!response.ok) throw new Error('Webhook request failed');

      if (form.id === 'anfrageForm') {
        const state = document.querySelector('.form-state');
        const success = document.getElementById('successState');
        const card = document.getElementById('formCard');
        if (state) state.style.display = 'none';
        if (success) success.classList.add('show');
        if (card) card.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        form.reset();
        setStatus(form, tx('lead.success', 'Danke, Ihre Anfrage wurde gesendet.'), false);
      }
    } catch (error) {
      console.warn('Lead webhook failed', error);
      setStatus(form, tx('lead.error', 'Das Senden hat nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.'), true);
    } finally {
      if (button) {
        button.disabled = false;
        button.style.opacity = '';
        button.removeAttribute('aria-busy');
      }
    }
  }

  document.addEventListener('submit', (event) => {
    const form = event.target.closest('form[data-bk-lead-form]');
    if (!form) return;
    event.preventDefault();
    submitForm(form);
  });

  document.addEventListener('input', (event) => {
    if (event.target.matches('input, textarea, select')) event.target.style.borderColor = '';
  });
  document.addEventListener('change', (event) => {
    if (event.target.matches('input, textarea, select')) event.target.style.borderColor = '';
  });
})();
