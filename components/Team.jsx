// TEAM v6 — full-bleed team photo as a "header" section
// Headline + photo with name labels aligned beneath each person
function Team({ accent }) {
  const people = [
    { name: 'Cansu', role: 'Media Expertin' },
    { name: 'Anton', role: 'IT & Tech Experte' },
  ];

  return (
    <section id="team" className="lp-section" style={{
      background: 'linear-gradient(180deg, #fff 0%, #f3eee8 100%)',
      borderTop: '1px solid var(--line)',
      padding: '64px 32px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div className="lp-team-head lp-2col-md" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'end',
          marginBottom: 32,
        }}>
          <div>
            <div className="mono" style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, color: 'var(--muted)',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              marginBottom: 14,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ color: accent, fontWeight: 600 }}>00</span>
              <span style={{ width: 20, height: 1, background: accent }} />
              Das Team
            </div>
            <h2 className="lp-section-h2" style={{
              margin: 0,
              fontSize: 'clamp(26px, 2.6vw, 36px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 700,
            }}>
              Zwei Köpfe.<br/>
              <span style={{ color: 'var(--muted)' }}>Ein klares Ziel.</span>
            </h2>
          </div>

          <div style={{ maxWidth: 380 }}>
            <p style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.55,
              color: 'var(--ink-2)',
            }}>
              Media und Tech, vereint in einem Team, das Ihre Prozesse von Anfang bis Ende versteht und automatisiert.
            </p>
            <a href="anfrage.html" style={{
              marginTop: 18,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
              color: '#fff',
              padding: '12px 16px',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 12px 30px rgba(236, 91, 184, 0.26)',
            }}>
              Zeig mir meine Chancen
              <Icon.arrow style={{ width: 14, height: 14 }} />
            </a>
          </div>
        </div>

        {/* Photo + labels */}
        <div className="lp-team-photo-wrap" style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #fff 0%, #fff 60%, var(--bg) 100%)',
          borderRadius: 18,
          border: '1px solid var(--line)',
          padding: '0 0 0',
          overflow: 'visible',
        }}>
          {/* Decorative big number behind photo */}
          <div aria-hidden="true" className="lp-team-decor" style={{
            position: 'absolute',
            top: 18, right: 24,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 110, fontWeight: 700,
            color: 'rgba(0,0,0,0.07)',
            lineHeight: 1, pointerEvents: 'none',
            zIndex: 0,
          }}>03</div>

          <img
            src="Design ohne Titel (18).png"
            alt="Das Team: Cansu und Anton"
            className="lp-team-photo"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              position: 'relative',
              zIndex: 1,
            }}
          />

          {/* Name labels aligned with each person */}
          <div className="lp-team-labels" style={{
            position: 'relative',
            zIndex: 2,
            marginTop: -8,
            padding: '0 18px 20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}>
            {people.map((p, i) => (
              <div key={i} className="lp-team-name-card" style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 10,
                padding: '11px 14px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 10,
              }}>
                <div>
                  <div style={{
                    fontSize: 15, fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}>{p.name}</div>
                  <div style={{
                    fontSize: 12, color: 'var(--muted)',
                    marginTop: 1,
                  }}>{p.role}</div>
                </div>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10, color: accent,
                  background: 'var(--accent-soft)',
                  padding: '4px 8px', borderRadius: 100,
                  letterSpacing: '0.04em',
                }}>0{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Team = Team;
