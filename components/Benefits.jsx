// BENEFITS — i18n
function Benefits({ accent }) {
  const tx = (key) => (window.t ? window.t(key) : key);
  const benefits = [
    { icon: 'clock', kpi: tx('benefits.1.kpi'), label: tx('benefits.1.label'), desc: tx('benefits.1.desc'), viz: 'time' },
    { icon: 'shield', kpi: tx('benefits.2.kpi'), label: tx('benefits.2.label'), desc: tx('benefits.2.desc'), viz: 'error' },
    { icon: 'workflow', kpi: tx('benefits.3.kpi'), label: tx('benefits.3.label'), desc: tx('benefits.3.desc'), viz: 'process' },
    { icon: 'eye', kpi: tx('benefits.4.kpi'), label: tx('benefits.4.label'), desc: tx('benefits.4.desc'), viz: 'overview' },
  ];

  return (
    <section className="lp-section" style={{ background: 'linear-gradient(135deg, #efe8df 0%, #faf8f6 100%)', padding: '96px 32px', borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      <div className="lp-section-bignum" style={{ position: 'absolute', top: 60, right: -40, fontFamily: 'Geist Mono, monospace', fontSize: 280, fontWeight: 700, color: 'rgba(14,17,22,0.06)', lineHeight: 1, pointerEvents: 'none' }}>05</div>

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div className="lp-2col-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: accent, fontWeight: 600 }}>05</span>
              <span style={{ width: 24, height: 1, background: accent }} />
              {tx('benefits.eyebrow')}
            </div>
            <h2 className="lp-section-h2" style={{ margin: 0, fontSize: 'clamp(34px, 3.4vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600 }}>{tx('benefits.title')}</h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480 }}>{tx('benefits.body')}</p>
        </div>

        <div className="lp-benefits-grid lp-4col-md" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {benefits.map((b, i) => {
            const I = Icon[b.icon];
            return (
              <div key={i} style={{ background: '#fff', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 280 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: 'var(--accent-soft)', display: 'grid', placeItems: 'center', color: accent }}>
                    <I style={{ width: 18, height: 18 }} />
                  </div>
                  <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{b.kpi}</span>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 6 }}>{b.label}</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.55 }}>{b.desc}</div>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <BenefitViz kind={b.viz} accent={accent} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="lp-savings-strip" style={{ marginTop: 32, background: '#0e1116', color: '#fff', borderRadius: 14, padding: '32px 36px', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 24, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{tx('benefits.savings.eyebrow')}</div>
            <div style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: tx('benefits.savings.html') }} />
          </div>
          <SavingMetric icon="clock" label={tx('benefits.savings.1.label')} value={tx('benefits.savings.1.value')} sub={tx('benefits.savings.1.sub')} accent={accent} />
          <SavingMetric icon="euro" label={tx('benefits.savings.2.label')} value={tx('benefits.savings.2.value')} sub={tx('benefits.savings.2.sub')} accent={accent} />
          <SavingMetric icon="trend" label={tx('benefits.savings.3.label')} value={tx('benefits.savings.3.value')} sub={tx('benefits.savings.3.sub')} accent={accent} />
        </div>
      </div>
    </section>
  );
}

function SavingMetric({ icon, label, value, sub, accent }) {
  const I = Icon[icon];
  return (
    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Geist Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
        <I style={{ width: 12, height: 12, color: accent }} />
        {label}
      </div>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 24, fontWeight: 600, color: accent, letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{sub}</div>
    </div>
  );
}

function BenefitViz({ kind, accent }) {
  const tx = (key) => (window.t ? window.t(key) : key);
  if (kind === 'time') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, fontFamily: 'Geist Mono, monospace' }}>
          <span style={{ color: 'var(--bad)', width: 48 }}>{tx('benefits.viz.before')}</span>
          <div style={{ flex: 1, height: 6, background: 'var(--line-2)', borderRadius: 100 }}>
            <div style={{ width: '95%', height: '100%', background: 'var(--bad)', opacity: 0.6, borderRadius: 100 }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, fontFamily: 'Geist Mono, monospace' }}>
          <span style={{ color: accent, width: 48 }}>{tx('benefits.viz.after')}</span>
          <div style={{ flex: 1, height: 6, background: 'var(--line-2)', borderRadius: 100 }}>
            <div style={{ width: '28%', height: '100%', background: accent, borderRadius: 100 }} />
          </div>
        </div>
      </div>
    );
  }
  if (kind === 'error') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 3 }}>
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} style={{
            aspectRatio: '1', borderRadius: 2,
            background: i === 17 ? 'var(--bad)' : accent,
            opacity: i === 17 ? 1 : 0.7,
          }} />
        ))}
      </div>
    );
  }
  if (kind === 'process') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {[1,2,3,4].map(n => (
          <React.Fragment key={n}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-soft)', color: accent, display: 'grid', placeItems: 'center', fontFamily: 'Geist Mono, monospace', fontSize: 10, fontWeight: 600 }}>{n}</div>
            {n < 4 && <div style={{ flex: 1, height: 1, background: accent, opacity: 0.4 }} />}
          </React.Fragment>
        ))}
        <Icon.check style={{ width: 14, height: 14, color: accent, marginLeft: 4 }} />
      </div>
    );
  }
  if (kind === 'overview') {
    return (
      <svg viewBox="0 0 100 24" style={{ width: '100%', height: 28 }}>
        <polyline points="0,18 12,14 24,16 36,10 48,12 60,7 72,9 84,4 96,6" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="96" cy="6" r="2" fill={accent} />
      </svg>
    );
  }
  return null;
}

window.Benefits = Benefits;
