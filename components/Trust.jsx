// TRUST v2 — visual stepper with icons, progress dots, calendar/document/cog/cycle illustrations
function Trust({ accent }) {
  const steps = [
    { n: '01', icon: 'phone', title: 'Kostenlose Potenzialanalyse', body: 'In einem 30-minütigen Gespräch verstehen wir Ihre wichtigsten Abläufe und identifizieren konkrete Automatisierungs­potenziale.', meta: '30 min · kostenlos · unverbindlich', tag: 'Gespräch' },
    { n: '02', icon: 'doc', title: 'Konkrete Lösungsvorschläge', body: 'Sie erhalten eine schriftliche Einschätzung mit den 3 wirkungsvollsten Hebeln – inklusive Aufwandsschätzung und realistischem Zeitplan.', meta: 'innerhalb von 5 Werktagen', tag: 'Analyse' },
    { n: '03', icon: 'cog', title: 'Schrittweise Umsetzung', body: 'Wir starten mit dem Prozess, der am schnellsten Wirkung zeigt. Kein Big Bang, kein unnötiges Risiko.', meta: 'erste Ergebnisse in 2–4 Wochen', tag: 'Umsetzung' },
    { n: '04', icon: 'shield', title: 'Begleitung & Optimierung', body: 'Wir bleiben dran, bis es im Alltag sauber läuft – und passen Systeme an, wenn Ihr Unternehmen wächst.', meta: 'auf Wunsch laufende Betreuung', tag: 'Support' },
  ];

  return (
    <section id="ablauf" className="lp-section" style={{ background: 'linear-gradient(180deg, #f2ece5 0%, #fbf8f4 100%)', padding: '96px 32px', borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      <div className="lp-section-bignum" style={{ position: 'absolute', top: 60, right: -40, fontFamily: 'Geist Mono, monospace', fontSize: 280, fontWeight: 700, color: 'rgba(14,17,22,0.06)', lineHeight: 1, pointerEvents: 'none' }}>07</div>

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: accent, fontWeight: 600 }}>07</span>
            <span style={{ width: 24, height: 1, background: accent }} />
            So arbeiten wir
          </div>
          <h2 className="lp-section-h2" style={{ margin: 0, fontSize: 'clamp(34px, 3.4vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600, maxWidth: 740, marginInline: 'auto' }}>
            Vier klare Schritte – <br />
            <span style={{ color: 'var(--muted)' }}>vom ersten Gespräch bis zum laufenden System.</span>
          </h2>
        </div>

        <div className="lp-trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, position: 'relative' }}>
          {/* connecting dashed line */}
          <svg style={{ position: 'absolute', top: 30, left: '12.5%', width: '75%', height: 2, zIndex: 0 }} preserveAspectRatio="none" viewBox="0 0 100 2">
            <line x1="0" y1="1" x2="100" y2="1" stroke={accent} strokeWidth="0.5" strokeDasharray="2 1.5" opacity="0.5" />
          </svg>

          {steps.map((s, i) => {
            const I = Icon[s.icon];
            return (
              <div key={i} style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  background: '#fff', border: `1.5px solid ${accent}`,
                  display: 'grid', placeItems: 'center', marginBottom: 18,
                  position: 'relative',
                }}>
                  <I style={{ width: 22, height: 22, color: accent }} />
                  <span style={{
                    position: 'absolute', top: -6, right: -6,
                    background: accent, color: '#fff',
                    width: 22, height: 22, borderRadius: '50%',
                    display: 'grid', placeItems: 'center',
                    fontFamily: 'Geist Mono, monospace', fontSize: 11, fontWeight: 600,
                  }}>{s.n}</span>
                </div>
                <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.tag}</div>
                <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.55, marginBottom: 12 }}>{s.body}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', background: '#fff', border: '1px solid var(--line)', borderRadius: 100, fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ink-2)' }}>
                  <Icon.clock style={{ width: 11, height: 11, color: accent }} />
                  {s.meta}
                </div>
              </div>
            );
          })}
        </div>

        {/* trust badges */}
        <div className="trust-badges" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { icon: 'shield', label: 'DSGVO-konform', sub: 'Hosting in DE/EU' },
            { icon: 'check', label: 'Festpreis-Garantie', sub: 'keine Überraschungen' },
            { icon: 'doc', label: 'Volle Dokumentation', sub: 'auch ohne uns wartbar' },
            { icon: 'user', label: 'Persönlich erreichbar', sub: 'kein Ticket-Pingpong' },
          ].map((b, i) => {
            const I = Icon[b.icon];
            return (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 10, padding: '16px 18px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-soft)', color: accent, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <I style={{ width: 16, height: 16 }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{b.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{b.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .trust-badges { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
window.Trust = Trust;
