// HERO — supports 3 copy variants from your text (A/B/C)
const HERO_VARIANTS = {
  A: {
    eyebrow: 'Prozessautomatisierung für den Mittelstand',
    headline: [
    { text: 'Automatisieren Sie', muted: false },
    { text: 'Ihre Prozesse.', muted: false },
    { text: 'Reduzieren Sie', muted: true },
    { text: 'manuelle Arbeit.', muted: true },
    { text: 'Skalieren Sie', muted: true },
    { text: 'Ihr Unternehmen.', muted: true }],

    sub: 'Wir identifizieren ineffiziente Abläufe und verwandeln sie in automatisierte, skalierbare Systeme – messbar, strukturiert und nachhaltig.',
    cta: 'Potenzialanalyse anfordern'
  },
  B: {
    eyebrow: 'Prozessautomatisierung für den Mittelstand',
    headline: [
    { text: 'Ihr Unternehmen', muted: false },
    { text: 'funktioniert –', muted: false },
    { text: 'aber ineffizient?', muted: true }],

    sub: 'Wir ersetzen manuelle Abläufe, Insellösungen und Chaos durch klare, automatisierte Prozesse. Weniger Aufwand. Weniger Fehler. Mehr Output.',
    cta: 'Potenzialanalyse starten'
  },
  C: {
    eyebrow: 'Prozessautomatisierung für den Mittelstand',
    headline: [
    { text: 'Weniger', muted: false },
    { text: 'manuelle Arbeit.', muted: false },
    { text: 'Klare Prozesse.', muted: true },
    { text: 'Messbar mehr', muted: true },
    { text: 'Effizienz.', muted: true }],

    sub: 'Wir analysieren Ihre Abläufe und automatisieren genau dort, wo Zeit und Geld verloren gehen.',
    cta: 'Jetzt Potenzial prüfen'
  }
};

// Visualization: chaos → structured workflow.
// Left side = scattered, messy nodes; Right side = clean linear flow.
function HeroVisual({ accent }) {
  return (
    <div className="lp-hero-visual" style={{
      position: 'relative',
      background: '#14181f',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 14,
      padding: '28px 28px 22px',
      overflow: 'hidden'
    }}>
      {/* Header bar (desktop) */}
      <div className="lp-hero-header-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        <span>Vorher · manuell &amp; verteilt</span>
        <span>Nachher · automatisiert</span>
      </div>

      <div className="lp-hero-visual-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 28px 1fr', gap: 0, alignItems: 'stretch' }}>
        {/* ===== LEFT: chaos ===== */}
        <div className="lp-hero-chaos" style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
          {/* Mobile-only inline label */}
          <span className="lp-mobile-label" style={{ position: 'absolute', top: 0, left: 0, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em', textTransform: 'uppercase', zIndex: 2 }}>
            Vorher · verteilt
          </span>

          {/* Desktop: scattered absolute layout */}
          <div className="lp-chaos-desktop" style={{ position: 'absolute', inset: 0 }}>
            <ChaosNode top={8} left={4} label="Excel" icon="excel" rot={-6} />
            <ChaosNode top={62} left={'42%'} label="WhatsApp" icon="whatsapp" rot={4} />
            <ChaosNode top={130} left={2} label="E-Mail" icon="mail" rot={-3} />
            <ChaosNode top={185} left={'30%'} label="Papier" icon="paper" rot={6} />
            <ChaosNode top={20} left={'58%'} label="Ordner" icon="folder" rot={2} />
            <ChaosNode top={220} left={'62%'} label="Telefon" icon="phone" rot={-5} />

            {/* tangled SVG lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <g stroke="rgba(255,255,255,0.14)" strokeWidth="1" fill="none" strokeDasharray="3 3">
                <path d="M 50 30 Q 120 80 180 50" />
                <path d="M 90 90 Q 30 130 50 170" />
                <path d="M 90 90 Q 160 110 180 240" />
                <path d="M 50 170 Q 120 200 100 220" />
                <path d="M 180 50 Q 100 130 100 220" />
                <path d="M 180 240 Q 80 230 50 170" />
              </g>
            </svg>
          </div>

          {/* Mobile: tidy wrapped chip cluster */}
          <div className="lp-chaos-mobile" style={{
            display: 'none',
            flexWrap: 'wrap', gap: 8,
            position: 'relative', zIndex: 1,
          }}>
            {[
              ['Excel', 'excel'],
              ['WhatsApp', 'whatsapp'],
              ['E-Mail', 'mail'],
              ['Papier', 'paper'],
              ['Ordner', 'folder'],
              ['Telefon', 'phone'],
              ['Notiz', 'copy'],
              ['Chat', 'chat'],
            ].map(([label, icon], i) => {
              const I = Icon[icon];
              return (
                <div key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#1d222a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 100,
                  padding: '8px 14px',
                  color: 'rgba(255,255,255,0.85)', fontSize: 13,
                }}>
                  <I style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.55)' }} />
                  {label}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== ARROW ===== */}
        <div className="lp-hero-visual-arrow" style={{ display: 'grid', placeItems: 'center', position: 'relative' }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: accent, color: '#fff',
            display: 'grid', placeItems: 'center',
            boxShadow: `0 0 0 6px rgba(255,122,26,0.12)`
          }}>
            <Icon.arrow style={{ width: 16, height: 16 }} />
          </div>
        </div>

        {/* ===== RIGHT: structured ===== */}
        <div className="lp-hero-flow" style={{ position: 'relative', height: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: "4px 0" }}>
          <span className="lp-mobile-label" style={{ position: 'absolute', top: -22, left: 0, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em', textTransform: 'uppercase', zIndex: 2 }}>
            Nachher · automatisiert
          </span>
          <FlowNode label="Auftrag erfasst" sub="automatisch" status="done" accent={accent} />
          <FlowConnector />
          <FlowNode label="Daten verteilt" sub="an alle Systeme" status="done" accent={accent} />
          <FlowConnector />
          <FlowNode label="Status sichtbar" sub="für das Team" status="live" accent={accent} />
        </div>
      </div>

      {/* footer metric strip */}
      <div className="lp-hero-metrics" style={{
        marginTop: 22, paddingTop: 18,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18
      }}>
        <Metric label="Manuelle Schritte" before="14" after="2" accent={accent} />
        <Metric label="Bearbeitungszeit" before="42 min" after="3 min" accent={accent} />
        <Metric label="Fehlerquote" before="8%" after="<1%" accent={accent} />
      </div>
    </div>);

}

function ChaosNode({ top, left, label, icon, rot }) {
  const I = Icon[icon];
  return (
    <div style={{
      position: 'absolute', top, left,
      transform: `rotate(${rot}deg)`,
      background: '#1d222a',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 8,

      display: 'flex', alignItems: 'center', gap: 8,
      color: 'rgba(255,255,255,0.85)', fontSize: 12,
      boxShadow: '0 4px 14px rgba(0,0,0,0.3)', borderStyle: "solid", borderColor: "rgba(255, 255, 255, 0.1)", borderImage: "initial", borderWidth: "0.625px 0.625px 0.625px 0.825px", padding: "8px 11px 8px 9px"
    }}>
      <I style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.6)' }} />
      <span>{label}</span>
    </div>);

}

function FlowNode({ label, sub, status, accent }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 8,
      padding: '10px 14px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div>
        <div style={{ color: '#fff', fontSize: 13, fontWeight: 500 }}>{label}</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 2 }}>{sub}</div>
      </div>
      {status === 'done' &&
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(31,138,76,0.2)', color: '#4ade80', display: 'grid', placeItems: 'center' }}>
          <Icon.check style={{ width: 12, height: 12 }} />
        </div>
      }
      {status === 'live' &&
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: accent, fontFamily: 'Geist Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, animation: 'pulse 1.6s ease-in-out infinite' }} />
          live
        </div>
      }
    </div>);

}

function FlowConnector() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
    </div>);

}

function Metric({ label, before, after, accent }) {
  return (
    <div style={{ width: "125.781px" }}>
      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Geist Mono, monospace' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6, fontFamily: 'Geist Mono, monospace' }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'line-through' }}>{before}</span>
        <Icon.arrow style={{ width: 11, height: 11, color: 'rgba(255,255,255,0.4)' }} />
        <span style={{ color: accent, fontWeight: 600, fontSize: "14px" }}>{after}</span>
      </div>
    </div>);

}

function Hero({ variant, accent }) {
  const v = HERO_VARIANTS[variant] || HERO_VARIANTS.A;

  return (
    <section style={{
      background: 'var(--dark)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* subtle grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at 30% 40%, #000 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, #000 30%, transparent 75%)',
        pointerEvents: 'none'
      }} />

      {/* floating orbit accents */}
      <div className="lp-hero-orbit" style={{ position: 'absolute', top: 80, right: -180, width: 420, height: 420, border: '1px dashed rgba(255,255,255,0.06)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div className="lp-hero-orbit" style={{ position: 'absolute', top: 160, right: -100, width: 260, height: 260, border: '1px dashed rgba(255,122,26,0.1)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="hero-grid lp-hero-grid" style={{
        maxWidth: 1240, margin: '0 auto',
        padding: '72px 32px 88px',
        display: 'grid', gridTemplateColumns: '1.05fr 1fr',
        gap: 56, alignItems: 'center',
        position: 'relative'
      }}>
        {/* LEFT: copy */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 100,
            fontSize: 12, color: 'rgba(255,255,255,0.7)',
            fontFamily: 'Geist Mono, monospace', letterSpacing: '0.02em',
            marginBottom: 24
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
            {v.eyebrow}
          </div>

          <h1 className="lp-hero-h1" style={{
            margin: 0,
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 600
          }}>
            {v.headline.map((line, i) =>
            <span key={i} style={{
              display: 'block',
              color: line.muted ? 'rgba(255,255,255,0.45)' : '#fff'
            }}>{line.text}</span>
            )}
          </h1>

          <p className="lp-hero-sub" style={{
            margin: '28px 0 36px',
            fontSize: 17, lineHeight: 1.6,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 520
          }}>{v.sub}</p>

          <div className="lp-hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href="#cta" style={{
              display: 'inline-flex', alignItems: 'center', gap: 0,
              background: '#fff',
              color: '#0e1116',
              borderRadius: 10,
              padding: '4px 4px 4px 20px',
              fontWeight: 500, fontSize: 15
            }}>
              {v.cta}
              <span style={{
                marginLeft: 14,
                width: 36, height: 36, borderRadius: 7,
                background: accent, color: '#fff',
                display: 'grid', placeItems: 'center'
              }}>
                <Icon.arrow style={{ width: 16, height: 16 }} />
              </span>
            </a>
            <a href="#loesung" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 18px',
              color: 'rgba(255,255,255,0.85)',
              fontSize: 14, fontWeight: 500
            }}>
              So arbeiten wir
              <Icon.chevron style={{ width: 14, height: 14 }} />
            </a>
          </div>

          {/* trust line */}
          <div style={{
            marginTop: 44, paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', gap: 28, flexWrap: 'wrap',
            fontSize: 13, color: 'rgba(255,255,255,0.6)'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon.check style={{ width: 14, height: 14, color: accent }} />
              Kostenlose Erstanalyse
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon.check style={{ width: 14, height: 14, color: accent }} />
              Antwort innerhalb von 24 h
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon.check style={{ width: 14, height: 14, color: accent }} />
              Keine Vertragsbindung
            </span>
          </div>
        </div>

        {/* RIGHT: visualization */}
        <HeroVisual accent={accent} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>);

}
window.Hero = Hero;