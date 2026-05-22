// SERVICES — your exact copy from section 5
function Services({ accent }) {
  const services = [
    {
      n: '01',
      icon: 'grid',
      title: 'Individuelle Software & Systeme',
      body: 'Wir entwickeln Anwendungen, Dashboards und Tools, die Prozesse vereinfachen und Transparenz schaffen – exakt abgestimmt auf Ihre Abläufe.',
      bullets: ['Dashboards mit Live-Daten', 'Interne Tools statt Excel', 'Schnittstellen zu Ihren Systemen'],
    },
    {
      n: '02',
      icon: 'bolt',
      title: 'Prozessautomatisierung',
      body: 'Wir automatisieren wiederkehrende Aufgaben, Datenflüsse und Schnittstellen.',
      bullets: ['weniger manuelle Arbeit', 'schnellere Abläufe', 'geringere Fehlerquote'],
      featured: true,
    },
    {
      n: '03',
      icon: 'plug',
      title: 'IT- & Systemoptimierung',
      body: 'Wir analysieren bestehende Tools und Strukturen und sorgen dafür, dass Systeme effizient zusammenspielen.',
      bullets: ['System-Audit', 'Tool-Konsolidierung', 'saubere Datenbasis'],
    },
    {
      n: '04',
      icon: 'cog',
      title: 'Web & E-Commerce',
      body: 'Websites und Shops, die nicht isoliert funktionieren, sondern direkt in Ihre Prozesse integriert sind.',
      bullets: ['Anbindung an Lager & Buchhaltung', 'automatisierte Bestellabwicklung', 'verlässliche Performance'],
    },
    {
      n: '05',
      icon: 'doc',
      title: 'Dokumentation & Transparenz',
      body: 'Klare, nachvollziehbare Dokumentation Ihrer Prozesse und Systeme – damit Abläufe langfristig wartbar und skalierbar bleiben.',
      bullets: ['Prozesslandkarte', 'Übergabe-Dokumente', 'wartbare Systeme'],
    },
  ];

  return (
    <section id="leistungen" className="lp-section" style={{ background: '#fff', padding: '96px 32px', borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      <div className="lp-section-bignum" style={{ position: 'absolute', top: 60, left: -40, fontFamily: 'Geist Mono, monospace', fontSize: 280, fontWeight: 700, color: 'rgba(14,17,22,0.055)', lineHeight: 1, pointerEvents: 'none' }}>04</div>
      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 48, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18 }}>
              <span style={{ color: accent }}>04</span>  &nbsp;Leistungen
            </div>
            <h2 className="lp-section-h2" style={{ margin: 0, fontSize: 'clamp(34px, 3.4vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600, maxWidth: 640 }}>
              Fünf Felder. Ein Ziel: <br />
              <span style={{ color: 'var(--muted)' }}>Ihre Prozesse laufen wie ein System.</span>
            </h2>
          </div>
        </div>

        <div className="lp-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
          {services.map((s, i) => {
            const I = Icon[s.icon];
            const span = s.featured ? 3 : (i === 0 ? 3 : 2);
            const isDark = s.featured;
            return (
              <div key={i} className="lp-service-card" style={{
                gridColumn: `span ${span}`,
                background: isDark ? '#0e1116' : 'var(--bg)',
                color: isDark ? '#fff' : 'var(--ink)',
                border: isDark ? 'none' : '1px solid var(--line)',
                borderRadius: 12,
                padding: '28px 28px 26px',
                display: 'flex', flexDirection: 'column',
                minHeight: 230,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: isDark ? 'rgba(255,122,26,0.18)' : 'var(--accent-soft)',
                    color: accent,
                    display: 'grid', placeItems: 'center',
                  }}>
                    <I style={{ width: 18, height: 18 }} />
                  </div>
                  <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: isDark ? 'rgba(255,255,255,0.4)' : 'var(--muted)', letterSpacing: '0.06em' }}>
                    {s.n}
                  </span>
                </div>

                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 10 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--muted)', lineHeight: 1.55, marginBottom: 18 }}>{s.body}</div>

                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
                  {s.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: isDark ? 'rgba(255,255,255,0.85)' : 'var(--ink-2)' }}>
                      <Icon.check style={{ width: 14, height: 14, color: accent, flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
