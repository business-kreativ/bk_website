(() => {
  function HeroVisual({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    return /* @__PURE__ */ React.createElement("div", { className: "lp-hero-visual", style: {
      position: "relative",
      background: "#14181f",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 14,
      padding: "28px 28px 22px",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { className: "lp-hero-header-bar", style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22, fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "Geist Mono, monospace", letterSpacing: "0.04em", textTransform: "uppercase" } }, /* @__PURE__ */ React.createElement("span", null, tx("hero.before")), /* @__PURE__ */ React.createElement("span", null, tx("hero.after"))), /* @__PURE__ */ React.createElement("div", { className: "lp-hero-visual-grid", style: { display: "grid", gridTemplateColumns: "1fr 28px 1fr", gap: 0, alignItems: "stretch" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-hero-chaos", style: { position: "relative", height: 280, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("span", { className: "lp-mobile-label lp-mobile-label-before", style: { position: "absolute", top: 0, left: 0, fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "Geist Mono, monospace", letterSpacing: "0.04em", textTransform: "uppercase", zIndex: 2 } }, tx("hero.before")), /* @__PURE__ */ React.createElement("div", { className: "lp-chaos-desktop", style: { position: "absolute", inset: 0 } }, /* @__PURE__ */ React.createElement(ChaosNode, { top: 8, left: 4, label: tx("hero.chaos.excel"), icon: "excel", rot: -6 }), /* @__PURE__ */ React.createElement(ChaosNode, { top: 62, left: "42%", label: tx("hero.chaos.whatsapp"), icon: "whatsapp", rot: 4 }), /* @__PURE__ */ React.createElement(ChaosNode, { top: 130, left: 2, label: tx("hero.chaos.mail"), icon: "mail", rot: -3 }), /* @__PURE__ */ React.createElement(ChaosNode, { top: 185, left: "30%", label: tx("hero.chaos.paper"), icon: "paper", rot: 6 }), /* @__PURE__ */ React.createElement(ChaosNode, { top: 20, left: "58%", label: tx("hero.chaos.folder"), icon: "folder", rot: 2 }), /* @__PURE__ */ React.createElement(ChaosNode, { top: 220, left: "62%", label: tx("hero.chaos.phone"), icon: "phone", rot: -5 }), /* @__PURE__ */ React.createElement("svg", { style: { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("g", { stroke: "rgba(255,255,255,0.14)", strokeWidth: "1", fill: "none", strokeDasharray: "3 3" }, /* @__PURE__ */ React.createElement("path", { d: "M 50 30 Q 120 80 180 50" }), /* @__PURE__ */ React.createElement("path", { d: "M 90 90 Q 30 130 50 170" }), /* @__PURE__ */ React.createElement("path", { d: "M 90 90 Q 160 110 180 240" }), /* @__PURE__ */ React.createElement("path", { d: "M 50 170 Q 120 200 100 220" }), /* @__PURE__ */ React.createElement("path", { d: "M 180 50 Q 100 130 100 220" }), /* @__PURE__ */ React.createElement("path", { d: "M 180 240 Q 80 230 50 170" })))), /* @__PURE__ */ React.createElement("div", { className: "lp-chaos-mobile", style: {
      display: "none",
      flexWrap: "wrap",
      gap: 8,
      position: "relative",
      zIndex: 1
    } }, [
      [tx("hero.chaos.excel"), "excel"],
      [tx("hero.chaos.whatsapp"), "whatsapp"],
      [tx("hero.chaos.mail"), "mail"],
      [tx("hero.chaos.paper"), "paper"],
      [tx("hero.chaos.folder"), "folder"],
      [tx("hero.chaos.phone"), "phone"],
      [tx("hero.chaos.note"), "copy"],
      [tx("hero.chaos.chat"), "chat"]
    ].map(([label, icon], i) => {
      const I = Icon[icon];
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#1d222a",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 100,
        padding: "8px 14px",
        color: "rgba(255,255,255,0.85)",
        fontSize: 13
      } }, /* @__PURE__ */ React.createElement(I, { style: { width: 14, height: 14, color: "rgba(255,255,255,0.55)" } }), label);
    }))), /* @__PURE__ */ React.createElement("div", { className: "lp-hero-visual-arrow", style: { display: "grid", placeItems: "center", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: accent,
      color: "#fff",
      display: "grid",
      placeItems: "center",
      boxShadow: `0 0 0 6px rgba(255,122,26,0.12)`
    } }, /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 16, height: 16 } }))), /* @__PURE__ */ React.createElement("div", { className: "lp-hero-flow", style: { position: "relative", height: 280, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 0, padding: "4px 30px", width: "100%", maxWidth: 320, justifySelf: "start" } }, /* @__PURE__ */ React.createElement("span", { className: "lp-mobile-label lp-mobile-label-after", style: { position: "absolute", top: -22, left: 0, fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "Geist Mono, monospace", letterSpacing: "0.04em", textTransform: "uppercase", zIndex: 2 } }, tx("hero.after")), /* @__PURE__ */ React.createElement(FlowNode, { label: tx("hero.flow.1.label"), sub: tx("hero.flow.1.sub"), status: "done", accent }), /* @__PURE__ */ React.createElement(FlowConnector, null), /* @__PURE__ */ React.createElement(FlowNode, { label: tx("hero.flow.2.label"), sub: tx("hero.flow.2.sub"), status: "done", accent }), /* @__PURE__ */ React.createElement(FlowConnector, null), /* @__PURE__ */ React.createElement(FlowNode, { label: tx("hero.flow.3.label"), sub: tx("hero.flow.3.sub"), status: "live", accent }))), /* @__PURE__ */ React.createElement("div", { className: "lp-hero-metrics", style: {
      marginTop: 22,
      paddingTop: 18,
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    } }, /* @__PURE__ */ React.createElement(Metric, { label: tx("hero.metric.steps"), before: "14", after: "2", accent }), /* @__PURE__ */ React.createElement(Metric, { label: tx("hero.metric.time"), before: "42 min", after: "3 min", accent }), /* @__PURE__ */ React.createElement(Metric, { label: tx("hero.metric.errors"), before: "8 %", after: "<1 %", accent })));
  }
  function ChaosNode({ top, left, label, icon, rot }) {
    const I = Icon[icon];
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top,
      left,
      transform: `rotate(${rot}deg)`,
      background: "#1d222a",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "rgba(255,255,255,0.85)",
      fontSize: 12,
      boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
      borderStyle: "solid",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderImage: "initial",
      borderWidth: "0.625px 0.625px 0.625px 0.825px",
      padding: "8px 11px 8px 9px"
    } }, /* @__PURE__ */ React.createElement(I, { style: { width: 14, height: 14, color: "rgba(255,255,255,0.6)" } }), /* @__PURE__ */ React.createElement("span", null, label));
  }
  function FlowNode({ label, sub, status, accent }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 8,
      padding: "10px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "lp-flow-label", style: { color: "#fff", fontSize: 13, fontWeight: 500 } }, label), /* @__PURE__ */ React.createElement("div", { className: "lp-flow-sub", style: { color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 2 } }, sub)), status === "done" && /* @__PURE__ */ React.createElement("div", { style: { width: 18, height: 18, borderRadius: "50%", background: "rgba(31,138,76,0.2)", color: "#4ade80", display: "grid", placeItems: "center" } }, /* @__PURE__ */ React.createElement(Icon.check, { style: { width: 12, height: 12 } })), status === "live" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: accent, fontFamily: "Geist Mono, monospace", textTransform: "uppercase", letterSpacing: "0.05em" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: accent, animation: "pulse 1.6s ease-in-out infinite" } }), "live"));
  }
  function FlowConnector() {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 14, background: "rgba(255,255,255,0.15)" } }));
  }
  function Metric({ label, before, after, accent }) {
    return /* @__PURE__ */ React.createElement("div", { style: { width: "125.781px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "Geist Mono, monospace" } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8, marginTop: 6, fontFamily: "Geist Mono, monospace" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "line-through" } }, before), /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 11, height: 11, color: "rgba(255,255,255,0.4)" } }), /* @__PURE__ */ React.createElement("span", { style: { color: accent, fontWeight: 600, fontSize: "14px" } }, after)));
  }
  function Hero({ variant, accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    const headlineLines = [
      { text: tx("hero.h1.1"), muted: false },
      { text: tx("hero.h1.2"), muted: false },
      { text: tx("hero.h1.3"), muted: false }
    ];
    return /* @__PURE__ */ React.createElement("section", { style: {
      background: "var(--dark)",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
      maskImage: "radial-gradient(ellipse at 30% 40%, #000 30%, transparent 75%)",
      WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, #000 30%, transparent 75%)",
      pointerEvents: "none"
    } }), /* @__PURE__ */ React.createElement("div", { className: "lp-hero-orbit", style: { position: "absolute", top: 80, right: -180, width: 420, height: 420, border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "50%", pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { className: "lp-hero-orbit", style: { position: "absolute", top: 160, right: -100, width: 260, height: 260, border: "1px dashed rgba(255,122,26,0.1)", borderRadius: "50%", pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { className: "hero-grid lp-hero-grid", style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "72px 32px 88px",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: 56,
      alignItems: "center",
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: 100,
      fontSize: 12,
      color: "rgba(255,255,255,0.7)",
      fontFamily: "Geist Mono, monospace",
      letterSpacing: "0.02em",
      marginBottom: 24
    } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: accent } }), tx("hero.eyebrow")), /* @__PURE__ */ React.createElement("h1", { className: "lp-hero-h1", style: {
      margin: 0,
      fontSize: "clamp(40px, 5vw, 64px)",
      lineHeight: 1.05,
      letterSpacing: "-0.025em",
      fontWeight: 600
    } }, headlineLines.map(
      (line, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: {
        display: "block",
        color: line.muted ? "rgba(255,255,255,0.45)" : "#fff"
      } }, line.text)
    )), /* @__PURE__ */ React.createElement("p", { className: "lp-hero-sub", style: {
      margin: "28px 0 36px",
      fontSize: 17,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.7)",
      maxWidth: 520
    } }, tx("hero.sub")), /* @__PURE__ */ React.createElement("div", { className: "lp-hero-cta-row", style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("a", { href: "/prozess-check", style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 0,
      background: "linear-gradient(135deg, #7C4A25 0%, #762E5C 100%)",
      color: "#fff",
      borderRadius: 10,
      padding: "4px 4px 4px 20px",
      fontWeight: 500,
      fontSize: 15
    } }, tx("hero.cta"), /* @__PURE__ */ React.createElement("span", { style: {
      marginLeft: 14,
      width: 36,
      height: 36,
      borderRadius: 7,
      background: "rgba(255,255,255,0.18)",
      color: "#fff",
      display: "grid",
      placeItems: "center"
    } }, /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 16, height: 16 } }))), /* @__PURE__ */ React.createElement("a", { href: "#loesung", style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 18px",
      color: "rgba(255,255,255,0.85)",
      fontSize: 14,
      fontWeight: 500
    } }, tx("hero.cta2"), /* @__PURE__ */ React.createElement(Icon.chevron, { style: { width: 14, height: 14 } }))), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 44,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      gap: 28,
      flexWrap: "wrap",
      fontSize: 13,
      color: "rgba(255,255,255,0.6)"
    } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Icon.check, { style: { width: 14, height: 14, color: accent } }), tx("hero.trust.1")), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Icon.check, { style: { width: 14, height: 14, color: accent } }), tx("hero.trust.2")), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Icon.check, { style: { width: 14, height: 14, color: accent } }), tx("hero.trust.3")))), /* @__PURE__ */ React.createElement(HeroVisual, { accent })), /* @__PURE__ */ React.createElement("style", null, `
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        .bk-accent { color: var(--accent, #F7934A); }
      `));
  }
  window.Hero = Hero;
})();
