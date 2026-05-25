// SCENARIOS — i18n
function Scenarios({ accent }) {
  const tx = (key) => (window.t ? window.t(key) : key);
  const cases = [
    {
      tag: tx('scenarios.1.tag'), icon: 'doc',
      title: tx('scenarios.1.title'),
      before: tx('scenarios.1.before'),
      after: tx('scenarios.1.after'),
      saved: '3,5 h', savedSub: tx('scenarios.1.saved_sub'),
      icons: ['mail', 'doc', 'check'],
    },
    {
      tag: tx('scenarios.2.tag'), icon: 'cog',
      title: tx('scenarios.2.title'),
      before: tx('scenarios.2.before'),
      after: tx('scenarios.2.after'),
      saved: '12 h', savedSub: tx('scenarios.2.saved_sub'),
      icons: ['paper', 'workflow', 'eye'],
    },
    {
      tag: tx('scenarios.3.tag'), icon: 'grid',
      title: tx('scenarios.3.title'),
      before: tx('scenarios.3.before'),
      after: tx('scenarios.3.after'),
      saved: '<1%', savedSub: tx('scenarios.3.saved_sub'),
      icons: ['cog', 'plug', 'bolt'],
    },
  ];

  return (
    <section className="lp-section" style={{ background: '#fff', padding: '96px 32px', borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      <div className="lp-section-bignum" style={{ position: 'absolute', top: 60, left: -40, fontFamily: 'Geist Mono, monospace', fontSize: 280, fontWeight: 700, color: 'rgba(14,17,22,0.055)', lineHeight: 1, pointerEvents: 'none' }}>08</div>

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div className="lp-2col-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600 }}>08</span>
              <span style={{ width: 24, height: 1, background: accent }} />
              {tx('scenarios.eyebrow')}
            </div>
            <h2 className="lp-section-h2" style={{ margin: 0, fontSize: 'clamp(32px, 3.2vw, 42px)', lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 600 }}>
              {tx('scenarios.h2.1')} <br />
              <span style={{ color: accent }}>{tx('scenarios.h2.2')}</span>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', margin: 0, maxWidth: 460 }}>
            {tx('scenarios.sub')}
          </p>
        </div>

        <div className="lp-scen-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {cases.map((c, i) => {
            const HeadI = Icon[c.icon];
            return (
              <div key={i} style={{
                background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 12,
                padding: 26, display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Geist Mono, monospace', fontSize: 11, color: accent, background: 'var(--accent-soft)', padding: '4px 10px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    <HeadI style={{ width: 12, height: 12 }} />
                    {c.tag}
                  </div>
                  <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--muted)' }}>0{i+1}</span>
                </div>

                <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 18 }}>{c.title}</div>

                <div className="lp-scen-mini" style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid var(--line)', borderRadius: 8, padding: '10px 14px', marginBottom: 16 }}>
                  {c.icons.map((ic, j) => {
                    const I = Icon[ic];
                    return (
                      <React.Fragment key={j}>
                        <div style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--accent-soft)', color: accent, display: 'grid', placeItems: 'center' }}>
                          <I style={{ width: 14, height: 14 }} />
                        </div>
                        {j < c.icons.length - 1 && <Icon.arrow style={{ width: 12, height: 12, color: 'var(--muted)' }} />}
                      </React.Fragment>
                    );
                  })}
                  <span style={{ marginLeft: 'auto', fontFamily: 'Geist Mono, monospace', fontSize: 10, color: accent, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tx('scenarios.auto')}</span>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: 'var(--bad)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <Icon.x style={{ width: 10, height: 10 }} />
                    {tx('scenarios.before')}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{c.before}</div>
                </div>

                <div style={{ height: 1, background: 'var(--line)', margin: '6px 0 14px' }} />

                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <Icon.check style={{ width: 10, height: 10 }} />
                    {tx('scenarios.after')}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{c.after}</div>
                </div>

                <div style={{
                  marginTop: 'auto',
                  background: '#0e1116', color: '#fff',
                  borderRadius: 8, padding: '14px 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon.trend style={{ width: 14, height: 14, color: accent }} />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{tx('scenarios.saved')}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'Geist Mono, monospace', fontWeight: 600, color: accent, fontSize: 16 }}>{c.saved}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginLeft: 6 }}>{c.savedSub}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Scenarios = Scenarios;
