// SERVICES — i18n
function Services({ accent }) {
  const tx = (key) => (window.t ? window.t(key) : key);
  const services = [
    {
      n: '01', icon: 'grid',
      title: tx('services.1.title'),
      body: tx('services.1.body'),
      bullets: [tx('services.1.b1'), tx('services.1.b2'), tx('services.1.b3')],
    },
    {
      n: '02', icon: 'bolt',
      title: tx('services.2.title'),
      body: tx('services.2.body'),
      bullets: [tx('services.2.b1'), tx('services.2.b2'), tx('services.2.b3')],
      featured: true,
    },
    {
      n: '03', icon: 'plug',
      title: tx('services.3.title'),
      body: tx('services.3.body'),
      bullets: [tx('services.3.b1'), tx('services.3.b2'), tx('services.3.b3')],
    },
    {
      n: '04', icon: 'cog',
      title: tx('services.4.title'),
      body: tx('services.4.body'),
      bullets: [tx('services.4.b1'), tx('services.4.b2'), tx('services.4.b3')],
    },
    {
      n: '05', icon: 'doc',
      title: tx('services.5.title'),
      body: tx('services.5.body'),
      bullets: [tx('services.5.b1'), tx('services.5.b2'), tx('services.5.b3')],
    },
  ];

  return (
    <section id="leistungen" className="lp-section" style={{ background: '#fff', padding: '96px 32px 56px', borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      <div className="lp-section-bignum" style={{ position: 'absolute', top: 60, left: -40, fontFamily: 'Geist Mono, monospace', fontSize: 280, fontWeight: 700, color: 'rgba(14,17,22,0.055)', lineHeight: 1, pointerEvents: 'none' }}>06</div>
      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 48, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18 }}>
              <span style={{ color: accent }}>06</span>  &nbsp;{tx('services.eyebrow')}
            </div>
            <h2 className="lp-section-h2" style={{ margin: 0, fontSize: 'clamp(34px, 3.4vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600, maxWidth: 640 }}>
              {tx('services.h2.1')} <br />
              <span style={{ color: 'var(--muted)' }}>{tx('services.h2.2')}</span>
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

        <div className="lp-services-cta" style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          <a href="/prozess-check" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
            color: '#fff',
            padding: '13px 18px',
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 12px 30px rgba(236, 91, 184, 0.26)',
          }}>
            {tx('services.cta')}
            <Icon.arrow style={{ width: 15, height: 15 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
