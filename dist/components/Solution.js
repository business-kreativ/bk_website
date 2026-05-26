(() => {
  function Solution({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    const points = [
      { label: tx("solution.pillar.1.label"), icon: "workflow", sub: tx("solution.pillar.1.sub") },
      { label: tx("solution.pillar.2.label"), icon: "bolt", sub: tx("solution.pillar.2.sub") },
      { label: tx("solution.pillar.3.label"), icon: "plug", sub: tx("solution.pillar.3.sub") }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "loesung", className: "lp-section", style: { background: "linear-gradient(180deg, #fff 0%, #f7f2ec 100%)", padding: "96px 32px", borderTop: "1px solid var(--line)", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-section-bignum", style: {
      position: "absolute",
      top: 60,
      left: -40,
      fontFamily: "Geist Mono, monospace",
      fontSize: 280,
      fontWeight: 700,
      color: "rgba(14,17,22,0.06)",
      lineHeight: 1,
      pointerEvents: "none"
    } }, "04"), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1240, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 56 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { color: accent, fontWeight: 600 } }, "04"), /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 1, background: accent } }), tx("solution.eyebrow")), /* @__PURE__ */ React.createElement("h2", { className: "lp-section-h2", style: { margin: 0, fontSize: "clamp(34px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 600, maxWidth: 820, marginInline: "auto" } }, tx("solution.h2.1"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: accent } }, tx("solution.h2.2"))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 22, fontSize: 17, lineHeight: 1.6, color: "var(--muted)", maxWidth: 640, marginInline: "auto" } }, tx("solution.sub"))), /* @__PURE__ */ React.createElement(BeforeAfterFlow, { accent }), /* @__PURE__ */ React.createElement(SystemHub, { accent }), /* @__PURE__ */ React.createElement("div", { className: "lp-solution-pillars", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 32 } }, points.map((p, i) => {
      const I = Icon[p.icon];
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        background: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: "24px 26px"
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: 8, background: "#fff", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: accent } }, /* @__PURE__ */ React.createElement(I, { style: { width: 18, height: 18 } })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em" } }, "0", i + 1)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, lineHeight: 1.35, marginBottom: 6 } }, p.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--muted)", lineHeight: 1.5 } }, p.sub));
    })), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 32,
      background: "#0e1116",
      color: "#fff",
      borderRadius: 14,
      padding: "32px 36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      position: "relative",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 60, top: "50%", transform: "translateY(-50%)", opacity: 0.08 } }, /* @__PURE__ */ React.createElement(Icon.bolt, { style: { width: 140, height: 140, color: accent } })), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 } }, tx("solution.goal.eyebrow")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }, dangerouslySetInnerHTML: { __html: tx("solution.goal.html") } })), /* @__PURE__ */ React.createElement("a", { href: "/prozess-check", style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: 8,
      fontWeight: 500,
      fontSize: 14
    } }, tx("solution.goal.cta"), /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 14, height: 14 } })))));
  }
  function BeforeAfterFlow({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    return /* @__PURE__ */ React.createElement("div", { className: "lp-flow-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: "var(--bad)", textTransform: "uppercase", letterSpacing: "0.08em", display: "inline-flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(Icon.x, { style: { width: 12, height: 12 } }), tx("solution.before")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--muted)", fontFamily: "Geist Mono, monospace" } }, tx("solution.before.meta"))), /* @__PURE__ */ React.createElement(FlowStep, { n: "1", icon: "mail", label: tx("solution.before.1.label"), sub: tx("solution.before.1.sub"), bad: true }), /* @__PURE__ */ React.createElement(Connector, { bad: true }), /* @__PURE__ */ React.createElement(FlowStep, { n: "2", icon: "excel", label: tx("solution.before.2.label"), sub: tx("solution.before.2.sub"), bad: true }), /* @__PURE__ */ React.createElement(Connector, { bad: true }), /* @__PURE__ */ React.createElement(FlowStep, { n: "3", icon: "whatsapp", label: tx("solution.before.3.label"), sub: tx("solution.before.3.sub"), bad: true }), /* @__PURE__ */ React.createElement(Connector, { bad: true }), /* @__PURE__ */ React.createElement(FlowStep, { n: "4", icon: "folder", label: tx("solution.before.4.label"), sub: tx("solution.before.4.sub"), bad: true }), /* @__PURE__ */ React.createElement(Connector, { bad: true }), /* @__PURE__ */ React.createElement(FlowStep, { n: "5", icon: "phone", label: tx("solution.before.5.label"), sub: tx("solution.before.5.sub"), bad: true }), /* @__PURE__ */ React.createElement(Connector, { bad: true }), /* @__PURE__ */ React.createElement(FlowStep, { n: "6", icon: "paper", label: tx("solution.before.6.label"), sub: tx("solution.before.6.sub"), bad: true })), /* @__PURE__ */ React.createElement("div", { style: { background: "#0e1116", color: "#fff", borderRadius: 14, padding: 24, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: accent, textTransform: "uppercase", letterSpacing: "0.08em", display: "inline-flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(Icon.check, { style: { width: 12, height: 12 } }), tx("solution.after")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "rgba(255,255,255,0.55)", fontFamily: "Geist Mono, monospace" } }, tx("solution.after.meta"))), /* @__PURE__ */ React.createElement(FlowStep, { n: "1", icon: "bolt", label: tx("solution.after.1.label"), sub: tx("solution.after.1.sub"), dark: true, accent }), /* @__PURE__ */ React.createElement(Connector, { accent }), /* @__PURE__ */ React.createElement(FlowStep, { n: "2", icon: "plug", label: tx("solution.after.2.label"), sub: tx("solution.after.2.sub"), dark: true, accent }), /* @__PURE__ */ React.createElement(Connector, { accent }), /* @__PURE__ */ React.createElement(FlowStep, { n: "3", icon: "chat", label: tx("solution.after.3.label"), sub: tx("solution.after.3.sub"), dark: true, accent }), /* @__PURE__ */ React.createElement(Connector, { accent }), /* @__PURE__ */ React.createElement(FlowStep, { n: "4", icon: "grid", label: tx("solution.after.4.label"), sub: tx("solution.after.4.sub"), dark: true, accent, live: true })));
  }
  function FlowStep({ n, icon, label, sub, bad, dark, accent, live }) {
    const I = icon ? Icon[icon] : null;
    const bgColor = dark ? "rgba(255,255,255,0.04)" : "#fff";
    const borderColor = dark ? "rgba(255,255,255,0.08)" : "var(--line)";
    const textColor = dark ? "#fff" : "var(--ink)";
    const subColor = dark ? "rgba(255,255,255,0.5)" : "var(--muted)";
    const numBg = bad ? "rgba(196,69,58,0.1)" : dark ? "rgba(255,122,26,0.18)" : "var(--accent-soft)";
    const numColor = bad ? "var(--bad)" : accent;
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: bgColor,
      border: `1px solid ${borderColor}`,
      borderRadius: 8,
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
      gap: 12
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      background: numBg,
      color: numColor,
      display: "grid",
      placeItems: "center",
      fontFamily: "Geist Mono, monospace",
      fontSize: 12,
      fontWeight: 600,
      flexShrink: 0
    } }, n), I && /* @__PURE__ */ React.createElement(I, { style: { width: 16, height: 16, color: bad ? "var(--bad)" : dark ? "rgba(255,255,255,0.7)" : accent, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, color: textColor } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: subColor, marginTop: 1 } }, sub)), live && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Geist Mono, monospace", fontSize: 10, color: accent, textTransform: "uppercase", letterSpacing: "0.06em" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: accent, animation: "pulse 1.6s ease-in-out infinite" } }), "live"));
  }
  function Connector({ bad, accent }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-start", paddingLeft: 12, height: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { background: bad ? "rgba(196,69,58,0.3)" : accent || "rgba(255,255,255,0.18)", height: 26, width: "2px" } }));
  }
  function SystemHub({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    const tools = [
      { name: "Shop", icon: "cog", angle: 0 },
      { name: "CRM", icon: "user", angle: 60 },
      { name: "Buchhaltung", icon: "euro", angle: 120 },
      { name: "Lager", icon: "grid", angle: 180 },
      { name: "E-Mail", icon: "mail", angle: 240 },
      { name: "Dashboard", icon: "eye", angle: 300 }
    ];
    const cx = 50, cy = 50, r = 38;
    return /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 32,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 14,
      padding: "40px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 48,
      alignItems: "center"
    }, className: "lp-systemhub" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 } }, tx("solution.hub.eyebrow")), /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 14 } }, tx("solution.hub.h3")), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 15, color: "var(--muted)", lineHeight: 1.6, marginBottom: 22 } }, tx("solution.hub.body")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, [
      tx("solution.hub.line.1"),
      tx("solution.hub.line.2"),
      tx("solution.hub.line.3")
    ].map(
      (line, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--ink-2)" } }, /* @__PURE__ */ React.createElement(Icon.check, { style: { width: 14, height: 14, color: accent, flexShrink: 0, marginTop: 2 } }), line)
    ))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", placeItems: "center" } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100", style: { width: "100%", maxWidth: 380, height: "auto" } }, /* @__PURE__ */ React.createElement("circle", { cx, cy, r, fill: "none", stroke: "var(--line)", strokeWidth: "0.4", strokeDasharray: "1 1" }), tools.map((t, i) => {
      const rad = t.angle * Math.PI / 180;
      const x = cx + r * Math.cos(rad);
      const y = cy + r * Math.sin(rad);
      return /* @__PURE__ */ React.createElement("line", { key: i, x1: cx, y1: cy, x2: x, y2: y, stroke: accent, strokeWidth: "0.3", strokeDasharray: "0.8 0.8", opacity: "0.5" });
    }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: "9", fill: "#0e1116" }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: "9", fill: "none", stroke: accent, strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy + 0.5, textAnchor: "middle", dominantBaseline: "middle", fill: "#fff", fontSize: "3", fontFamily: "Geist Mono, monospace", fontWeight: "600" }, "SYSTEM"), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy + 4, textAnchor: "middle", dominantBaseline: "middle", fill: accent, fontSize: "2.2", fontFamily: "Geist Mono, monospace" }, "CORE"), tools.map((t, i) => {
      const rad = t.angle * Math.PI / 180;
      const x = cx + r * Math.cos(rad);
      const y = cy + r * Math.sin(rad);
      return /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("circle", { cx: x, cy: y, r: "7", fill: "#fff", stroke: "var(--line)", strokeWidth: "0.4" }), /* @__PURE__ */ React.createElement("text", { x, y: y + 0.5, textAnchor: "middle", dominantBaseline: "middle", fill: "var(--ink)", fontSize: "2.2", fontFamily: "Geist, sans-serif", fontWeight: "600" }, t.name));
    }))));
  }
  window.Solution = Solution;
})();
