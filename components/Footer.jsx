function Footer({ accent }) {
  return (
    <footer id="kontakt" className="lp-section" style={{ background: '#0e1116', color: '#fff', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="lp-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="lp-footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 36, height: 36, borderRadius: 8, background: '#fff', padding: 3, display: 'grid', placeItems: 'center' }}>
                <img src="assets/logo_bk.png" alt="bk" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </span>
              <span style={{ fontSize: 16, fontWeight: 600 }}>business-kreativ</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0, maxWidth: 360 }}>
              Wir verwandeln manuelle Prozesse in effiziente, skalierbare Systeme – für mittelständische Unternehmen.
            </p>
          </div>

          <FooterCol title="Leistungen" links={['Prozessautomatisierung', 'Individuelle Software', 'IT-Optimierung', 'Web & E-Commerce']} />
          <FooterCol title="Unternehmen" links={['Über uns', 'Ablauf', 'Praxisbeispiele', 'Kontakt']} />
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Kontakt</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
              <a href="mailto:hallo@business-kreativ.com" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon.mail style={{ width: 14, height: 14, color: accent }} />
                hallo@business-kreativ.com
              </a>
              <a href="tel:+4900000000" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon.phone style={{ width: 14, height: 14, color: accent }} />
                +49 (0) 000 000 00
              </a>
            </div>
          </div>
        </div>

        <div className="lp-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 16 }}>
          <span>© 2026 business-kreativ.com — Alle Rechte vorbehalten.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
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
