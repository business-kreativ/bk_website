// CTA — supports your 3 CTA variants + closing section copy
const CTA_VARIANTS = {
  A: {
    title: 'Kostenlose Potenzialanalyse anfordern',
    body: 'Sie erhalten eine konkrete Einschätzung, wo in Ihren Prozessen Automatisierung sinnvoll ist – inklusive erster Lösungsansätze.',
    button: 'Potenzialanalyse anfordern',
  },
  B: {
    title: 'Jetzt Effizienzpotenziale identifizieren',
    body: 'In wenigen Schritten zeigen wir Ihnen, wo Zeit und Ressourcen verloren gehen – und wie Sie diese automatisieren können.',
    button: 'Effizienzpotenziale prüfen',
  },
  C: {
    title: 'Potenzialanalyse starten',
    body: 'Lassen Sie uns Ihre Prozesse effizient machen. Wenn Sie manuelle Arbeit reduzieren, Fehler vermeiden und klare Systeme schaffen wollen, ist der nächste Schritt einfach.',
    button: 'Potenzialanalyse anfordern',
  },
};

function CTA({ accent, ctaVariant }) {
  const v = CTA_VARIANTS[ctaVariant] || CTA_VARIANTS.A;

  return (
    <section id="cta" className="lp-section" style={{ background: 'var(--bg)', padding: '96px 32px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{
          background: '#0e1116', color: '#fff',
          borderRadius: 18, padding: '64px 56px',
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56,
          position: 'relative', overflow: 'hidden',
        }} className="lp-cta-block">
          {/* bg accent */}
          <div style={{
            position: 'absolute', top: -120, right: -120, width: 380, height: 380,
            background: `radial-gradient(circle, rgba(255,122,26,0.18), transparent 70%)`,
            pointerEvents: 'none',
          }} />

          {/* LEFT */}
          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18 }}>
              Nächster Schritt
            </div>
            <h2 className="lp-section-h2" style={{ margin: 0, fontSize: 'clamp(32px, 3.2vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600, marginBottom: 22 }}>
              {v.title}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', margin: 0, marginBottom: 32, maxWidth: 480 }}>
              {v.body}
            </p>

            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Konkrete Einschätzung Ihrer 3 wichtigsten Prozesse',
                'Realistische Aufwandsschätzung – ohne Verkaufsgespräch',
                '30 Minuten Ihrer Zeit. Kostenlos. Unverbindlich.',
              ].map((line, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
                  <Icon.check style={{ width: 16, height: 16, color: accent, flexShrink: 0, marginTop: 2 }} />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — form */}
          <form onSubmit={(e) => e.preventDefault()} style={{
            background: '#fff', color: 'var(--ink)',
            borderRadius: 12, padding: 28,
            display: 'flex', flexDirection: 'column', gap: 14,
            position: 'relative',
          }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Potenzialanalyse anfordern</div>

            <Field label="Name" placeholder="Vor- und Nachname" />
            <Field label="Unternehmen" placeholder="Firma" />
            <Field label="E-Mail" placeholder="name@firma.de" type="email" />
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)', marginBottom: 6 }}>Wo verlieren Sie aktuell am meisten Zeit?</div>
              <textarea rows="3" placeholder="z. B. Auftragsabwicklung, doppelte Dateneingabe, ..." style={{
                width: '100%', resize: 'none', fontFamily: 'inherit',
                border: '1px solid var(--line)', borderRadius: 8,
                padding: '10px 12px', fontSize: 14, color: 'var(--ink)',
                outline: 'none',
              }} />
            </div>

            <a href="anfrage.html" style={{
              marginTop: 6,
              background: accent, color: '#fff', border: 0,
              padding: '14px 18px', borderRadius: 10,
              fontWeight: 500, fontSize: 15,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}>
              {v.button}
              <Icon.arrow style={{ width: 16, height: 16 }} />
            </a>

            <div style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 4 }}>
              Antwort innerhalb von 24 Stunden. Keine Newsletter.
            </div>
          </form>
        </div>

        {/* closing line — your "7. Abschluss" */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--ink-2)' }}>
            Lassen Sie uns Ihre Prozesse <span style={{ color: accent, fontWeight: 600 }}>effizient machen.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)', marginBottom: 6 }}>{label}</div>
      <input type={type} placeholder={placeholder} style={{
        width: '100%', fontFamily: 'inherit',
        border: '1px solid var(--line)', borderRadius: 8,
        padding: '10px 12px', fontSize: 14, color: 'var(--ink)',
        outline: 'none',
      }} />
    </div>
  );
}

window.CTA = CTA;
