function Footer({ accent }) {
  const tx = (key) => (window.t ? window.t(key) : key);

  return (
    <footer id="kontakt" className="lp-section" style={{ background: '#0e1116', color: '#fff', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="lp-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="lp-footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 36, height: 36, borderRadius: 8, background: '#fff', padding: 3, display: 'grid', placeItems: 'center' }}>
                <img src="assets/logo_bk-small.webp" alt="bk" width="180" height="180" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </span>
              <span style={{ fontSize: 16, fontWeight: 600 }}>business-kreativ</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0, maxWidth: 360 }}>
              {tx('footer.tagline')}
            </p>
          </div>

          <FooterCol title={tx('footer.col.services')} links={[
            tx('footer.services.automation'),
            tx('footer.services.software'),
            tx('footer.services.it'),
            tx('footer.services.web'),
          ]} />
          <FooterCol title={tx('footer.col.company')} links={[
            tx('footer.company.about'),
            tx('footer.company.process'),
            tx('footer.company.cases'),
            tx('footer.company.contact'),
          ]} />
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>{tx('footer.col.contact')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
              <a href="mailto:info@business-kreativ.com" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon.mail style={{ width: 14, height: 14, color: accent }} />
                info@business-kreativ.com
              </a>
              <a href="tel:+4923255945387" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon.phone style={{ width: 14, height: 14, color: accent }} />
                02325 5945387
              </a>
            </div>
          </div>
        </div>

        <div className="lp-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 16 }}>
          <span>{tx('footer.copyright')}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
            <a href="impressum.html">{tx('footer.legal.impressum')}</a>
            <a href="datenschutz.html">{tx('footer.legal.datenschutz')}</a>
            <span data-bk-lang-widget="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l, i) => (
          <a key={i} href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{l}</a>
        ))}
      </div>
    </div>
  );
}

window.Footer = Footer;
