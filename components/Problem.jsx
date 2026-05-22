// PROBLEM v2 — adds: animated chaos cluster + dashboard mockup showing "where time leaks"
function Problem({ accent }) {
  const pains = [
    { icon: 'clock', label: 'Zeitverlust im Tagesgeschäft', desc: 'Routineaufgaben, die jeden Tag manuell erledigt werden – obwohl sie automatisierbar wären.', stat: '~2,4 h', statLabel: 'pro Tag/Mitarbeiter' },
    { icon: 'warn', label: 'Fehleranfällige Abläufe', desc: 'Doppelt eingegebene Daten, übersehene Schritte, Tippfehler – die später Geld kosten.', stat: '8%', statLabel: 'durchschnittliche Fehlerquote' },
    { icon: 'eye', label: 'Fehlende Transparenz', desc: 'Keiner weiß, wo ein Auftrag steht, wer was macht oder welche Zahl aktuell stimmt.', stat: '0', statLabel: 'einheitliche Quelle' },
  ];

  return (
    <section id="problem" className="lp-section" style={{ background: 'linear-gradient(135deg, #f1ebe4 0%, #fbf8f4 100%)', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
      {/* decorative side number */}
      <div className="lp-section-bignum" style={{
        position: 'absolute', top: 60, right: -40,
        fontFamily: 'Geist Mono, monospace',
        fontSize: 280, fontWeight: 700,
        color: 'rgba(14,17,22,0.06)',
        lineHeight: 1, pointerEvents: 'none',
      }}>01</div>

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div className="lp-problem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          {/* LEFT */}
          <div className="lp-not-sticky-sm" style={{ position: 'sticky', top: 100 }}>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600 }}>01</span>
              <span style={{ width: 24, height: 1, background: accent }} />
              Das Problem
            </div>
            <h2 className="lp-section-h2" style={{ margin: 0, fontSize: 'clamp(34px, 3.6vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600 }}>
              Ihr Unternehmen läuft – <br />
              <span style={{ color: 'var(--muted)' }}>aber es kostet unnötig Ressourcen.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 460 }}>
              Manuelle Prozesse, doppelte Arbeit und nicht verbundene Systeme führen zu:
            </p>

            {/* Time leak dashboard mockup */}
            <TimeLeakCard accent={accent} />

            {/* Bottom result box */}
            <div style={{
              marginTop: 20,
              background: '#0e1116', color: '#fff',
              borderRadius: 12, padding: '22px 24px',
              maxWidth: 460,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
                Das Ergebnis
              </div>
              <div style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Icon.trend style={{ width: 22, height: 22, color: accent, transform: 'scaleY(-1)', flexShrink: 0 }} />
                Wachstum wird gebremst, <span style={{ color: accent }}>statt unterstützt.</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {pains.map((p, i) => {
              const I = Icon[p.icon];
              return (
                <div key={i} className="lp-problem-card" style={{
                  background: '#fff', border: '1px solid var(--line)', borderRadius: 12,
                  padding: '24px 26px',
                  display: 'grid', gridTemplateColumns: '46px 1fr auto', gap: 20,
                  alignItems: 'center',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Accent stripe */}
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: accent }} />
                  <div style={{
                    width: 46, height: 46, borderRadius: 10,
                    background: 'var(--accent-soft)',
                    display: 'grid', placeItems: 'center', color: accent,
                  }}>
                    <I style={{ width: 22, height: 22 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>{p.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 6, lineHeight: 1.55 }}>{p.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right', borderLeft: '1px solid var(--line)', paddingLeft: 20 }}>
                    <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 22, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em' }}>{p.stat}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, maxWidth: 110, lineHeight: 1.3 }}>{p.statLabel}</div>
                  </div>
                </div>
              );
            })}

            {/* Chaos chips card */}
            <div style={{
              background: '#fff', border: '1px solid var(--line)', borderRadius: 12,
              padding: '24px 26px', marginTop: 4, position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  So sieht der Alltag oft aus
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--bad)', fontFamily: 'Geist Mono, monospace' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--bad)' }} />
                  unverbunden
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[
                  ['Excel-Liste #4', 'excel'],
                  ['WhatsApp-Gruppe', 'whatsapp'],
                  ['Mail von Lieferant', 'mail'],
                  ['Notiz auf Papier', 'paper'],
                  ['Anruf vom Kunden', 'phone'],
                  ['Ordner auf Server', 'folder'],
                  ['Doppelt erfasst', 'copy'],
                  ['"Hat das schon wer gemacht?"', 'chat'],
                ].map(([label, icon], i) => {
                  const I = Icon[icon];
                  return (
                    <div key={i} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'var(--bg)', border: '1px solid var(--line)',
                      borderRadius: 100, padding: '8px 14px',
                      fontSize: 13, color: 'var(--ink-2)',
                    }}>
                      <I style={{ width: 14, height: 14, color: 'var(--muted)' }} />
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mini dashboard: "Wo geht die Zeit verloren?"
function TimeLeakCard({ accent }) {
  const items = [
    { label: 'Auftragserfassung', value: 28 },
    { label: 'Datenübertragung', value: 22 },
    { label: 'Status-Nachfragen', value: 18 },
    { label: 'Berichte erstellen', value: 14 },
    { label: 'Sonstiges', value: 18 },
  ];
  return (
    <div style={{
      marginTop: 32,
      background: '#fff', border: '1px solid var(--line)', borderRadius: 12,
      padding: '20px 22px', maxWidth: 460,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>Wo geht die Zeit verloren?</div>
        <Icon.search style={{ width: 14, height: 14, color: 'var(--muted)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 32px', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: 'var(--ink-2)' }}>{it.label}</span>
            <div style={{ height: 6, background: 'var(--line-2)', borderRadius: 100, overflow: 'hidden' }}>
              <div style={{ width: `${it.value * 3}%`, height: '100%', background: accent, borderRadius: 100 }} />
            </div>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--muted)', textAlign: 'right' }}>{it.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.Problem = Problem;
