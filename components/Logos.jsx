// LOGOS v2 — actual styled wordmark logos with brand-ish colors
function Logos({ accent }) {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="lp-logos-wrap" style={{ maxWidth: 1240, margin: '0 auto', padding: '32px 32px' }}>
        <div className="lp-logos-title" style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Geist Mono, monospace', marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 12, justifyContent: 'center', width: '100%' }}>
          <span className="lp-logos-title-line" style={{ width: 32, height: 1, background: 'var(--line)' }} />
          Wir verbinden Ihre bestehenden Systeme
          <span className="lp-logos-title-line" style={{ width: 32, height: 1, background: 'var(--line)' }} />
        </div>
        <div className="lp-logos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 16, alignItems: 'center', justifyItems: 'center' }}>
          <Logo name="Shopify" color="#7AB55C" />
          <Logo name="Microsoft 365" color="#0078D4" />
          <Logo name="WooCommerce" color="#7F54B3" />
          <Logo name="WordPress" color="#21759B" />
          <Logo name="DATEV" color="#005CA9" />
          <Logo name="Odoo" color="#714B67" />
          <Logo name="lexoffice" color="#EE7F00" />
          <Logo name="HubSpot" color="#FF7A59" />
        </div>
      </div>
    </section>
  );
}

function Logo({ name, color }) {
  return (
    <div className="lp-logo-item" style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.85 }}>
      <span style={{
        width: 10, height: 10, borderRadius: 3, background: color,
      }} />
      <span style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600, fontSize: 14, color: '#444', letterSpacing: '-0.01em' }}>
        {name}
      </span>
    </div>
  );
}
window.Logos = Logos;
