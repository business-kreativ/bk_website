(() => {
  function Problem({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    const pains = [
      { icon: "clock", label: tx("problem.pain.1.label"), desc: tx("problem.pain.1.desc"), stat: "~2,4 h", statLabel: tx("problem.pain.1.stat_label") },
      { icon: "warn", label: tx("problem.pain.2.label"), desc: tx("problem.pain.2.desc"), stat: "8 %", statLabel: tx("problem.pain.2.stat_label") },
      { icon: "eye", label: tx("problem.pain.3.label"), desc: tx("problem.pain.3.desc"), stat: "0", statLabel: tx("problem.pain.3.stat_label") }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "problem", className: "lp-section", style: { background: "linear-gradient(135deg, #f1ebe4 0%, #fbf8f4 100%)", padding: "96px 32px", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-section-bignum", style: {
      position: "absolute",
      top: 60,
      right: -40,
      fontFamily: "Geist Mono, monospace",
      fontSize: 280,
      fontWeight: 700,
      color: "rgba(14,17,22,0.06)",
      lineHeight: 1,
      pointerEvents: "none"
    } }, "03"), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1240, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-problem-grid", style: { display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-not-sticky-sm", style: { position: "sticky", top: 100 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { color: accent, fontWeight: 600 } }, "03"), /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 1, background: accent } }), tx("problem.eyebrow")), /* @__PURE__ */ React.createElement("h2", { className: "lp-section-h2", style: { margin: 0, fontSize: "clamp(34px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 600 } }, tx("problem.h2.1"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--muted)" } }, tx("problem.h2.2"))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 24, fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 460 } }, tx("problem.sub")), /* @__PURE__ */ React.createElement("a", { href: "/prozess-check", style: {
      marginTop: 18,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
      color: "#fff",
      padding: "12px 16px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      textDecoration: "none",
      boxShadow: "0 12px 30px rgba(236, 91, 184, 0.26)"
    } }, tx("problem.cta"), /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 14, height: 14 } })), /* @__PURE__ */ React.createElement(TimeLeakCard, { accent }), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 20,
      background: "#0e1116",
      color: "#fff",
      borderRadius: 12,
      padding: "22px 24px",
      maxWidth: 460,
      position: "relative",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 } }, tx("problem.result.label")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 500, lineHeight: 1.4, display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(Icon.trend, { style: { width: 22, height: 22, color: accent, transform: "scaleY(-1)", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { dangerouslySetInnerHTML: { __html: tx("problem.result.html") } })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, pains.map((p, i) => {
      const I = Icon[p.icon];
      return /* @__PURE__ */ React.createElement("div", { key: i, className: "lp-problem-card", style: {
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: "24px 26px",
        display: "grid",
        gridTemplateColumns: "46px 1fr auto",
        gap: 20,
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
      } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: accent } }), /* @__PURE__ */ React.createElement("div", { style: {
        width: 46,
        height: 46,
        borderRadius: 10,
        background: "var(--accent-soft)",
        display: "grid",
        placeItems: "center",
        color: accent
      } }, /* @__PURE__ */ React.createElement(I, { style: { width: 22, height: 22 } })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" } }, p.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "var(--muted)", marginTop: 6, lineHeight: 1.55 } }, p.desc)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", borderLeft: "1px solid var(--line)", paddingLeft: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 22, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" } }, p.stat), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--muted)", marginTop: 4, maxWidth: 110, lineHeight: 1.3 } }, p.statLabel)));
    }), /* @__PURE__ */ React.createElement("div", { style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: "24px 26px",
      marginTop: 4,
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em" } }, tx("problem.chaos.title")), /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--bad)", fontFamily: "Geist Mono, monospace" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--bad)" } }), tx("problem.chaos.status"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, [
      [tx("problem.chip.1"), "excel"],
      [tx("problem.chip.2"), "whatsapp"],
      [tx("problem.chip.3"), "mail"],
      [tx("problem.chip.4"), "paper"],
      [tx("problem.chip.5"), "phone"],
      [tx("problem.chip.6"), "folder"],
      [tx("problem.chip.7"), "copy"],
      [tx("problem.chip.8"), "chat"],
      [tx("problem.chip.9"), "doc"]
    ].map(([label, icon], i) => {
      const I = Icon[icon];
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: 100,
        padding: "8px 14px",
        fontSize: 13,
        color: "var(--ink-2)"
      } }, /* @__PURE__ */ React.createElement(I, { style: { width: 14, height: 14, color: "var(--muted)" } }), label);
    })))))));
  }
  function TimeLeakCard({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    const items = [
      { label: tx("problem.timeleak.1"), value: 28 },
      { label: tx("problem.timeleak.2"), value: 22 },
      { label: tx("problem.timeleak.3"), value: 18 },
      { label: tx("problem.timeleak.4"), value: 14 },
      { label: tx("problem.timeleak.5"), value: 18 }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 32,
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: "20px 22px",
      maxWidth: 460
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600 } }, tx("problem.timeleak.title")), /* @__PURE__ */ React.createElement(Icon.search, { style: { width: 14, height: 14, color: "var(--muted)" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, items.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "grid", gridTemplateColumns: "120px 1fr 32px", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-2)" } }, it.label), /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: "var(--line-2)", borderRadius: 100, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${it.value * 3}%`, height: "100%", background: accent, borderRadius: 100 } })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Geist Mono, monospace", fontSize: 11, color: "var(--muted)", textAlign: "right" } }, it.value, "%")))));
  }
  window.Problem = Problem;
})();
