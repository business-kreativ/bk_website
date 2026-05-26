(() => {
  function Trust({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    const steps = [
      { n: "01", icon: "phone", title: tx("trust.1.title"), body: tx("trust.1.body"), meta: tx("trust.1.meta"), tag: tx("trust.1.tag") },
      { n: "02", icon: "doc", title: tx("trust.2.title"), body: tx("trust.2.body"), meta: tx("trust.2.meta"), tag: tx("trust.2.tag") },
      { n: "03", icon: "cog", title: tx("trust.3.title"), body: tx("trust.3.body"), meta: tx("trust.3.meta"), tag: tx("trust.3.tag") },
      { n: "04", icon: "shield", title: tx("trust.4.title"), body: tx("trust.4.body"), meta: tx("trust.4.meta"), tag: tx("trust.4.tag") }
    ];
    const badges = [
      { icon: "shield", label: tx("trust.badge.1.label"), sub: tx("trust.badge.1.sub") },
      { icon: "check", label: tx("trust.badge.2.label"), sub: tx("trust.badge.2.sub") },
      { icon: "doc", label: tx("trust.badge.3.label"), sub: tx("trust.badge.3.sub") },
      { icon: "user", label: tx("trust.badge.4.label"), sub: tx("trust.badge.4.sub") }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "ablauf", className: "lp-section", style: { background: "linear-gradient(180deg, #f2ece5 0%, #fbf8f4 100%)", padding: "96px 32px", borderTop: "1px solid var(--line)", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-section-bignum", style: { position: "absolute", top: 60, right: -40, fontFamily: "Geist Mono, monospace", fontSize: 280, fontWeight: 700, color: "rgba(14,17,22,0.06)", lineHeight: 1, pointerEvents: "none" } }, "07"), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1240, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 56 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { color: accent, fontWeight: 600 } }, "07"), /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 1, background: accent } }), tx("trust.eyebrow")), /* @__PURE__ */ React.createElement("h2", { className: "lp-section-h2", style: { margin: 0, fontSize: "clamp(34px, 3.4vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 600, maxWidth: 740, marginInline: "auto" } }, tx("trust.h2.1"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--muted)" } }, tx("trust.h2.2")))), /* @__PURE__ */ React.createElement("div", { className: "lp-trust-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, position: "relative" } }, /* @__PURE__ */ React.createElement("svg", { style: { position: "absolute", top: 30, left: "12.5%", width: "75%", height: 2, zIndex: 0 }, preserveAspectRatio: "none", viewBox: "0 0 100 2" }, /* @__PURE__ */ React.createElement("line", { x1: "0", y1: "1", x2: "100", y2: "1", stroke: accent, strokeWidth: "0.5", strokeDasharray: "2 1.5", opacity: "0.5" })), steps.map((s, i) => {
      const I = Icon[s.icon];
      return /* @__PURE__ */ React.createElement("div", { key: i, style: { position: "relative", zIndex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: {
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#fff",
        border: `1.5px solid ${accent}`,
        display: "grid",
        placeItems: "center",
        marginBottom: 18,
        position: "relative"
      } }, /* @__PURE__ */ React.createElement(I, { style: { width: 22, height: 22, color: accent } }), /* @__PURE__ */ React.createElement("span", { style: {
        position: "absolute",
        top: -6,
        right: -6,
        background: accent,
        color: "#fff",
        width: 22,
        height: 22,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        fontFamily: "Geist Mono, monospace",
        fontSize: 11,
        fontWeight: 600
      } }, s.n)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 10, color: accent, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 } }, s.tag), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 8 } }, s.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "var(--muted)", lineHeight: 1.55, marginBottom: 12 } }, s.body), /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", background: "#fff", border: "1px solid var(--line)", borderRadius: 100, fontFamily: "Geist Mono, monospace", fontSize: 11, color: "var(--ink-2)" } }, /* @__PURE__ */ React.createElement(Icon.clock, { style: { width: 11, height: 11, color: accent } }), s.meta));
    })), /* @__PURE__ */ React.createElement("div", { className: "trust-badges", style: { marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 } }, badges.map((b, i) => {
      const I = Icon[b.icon];
      return /* @__PURE__ */ React.createElement("div", { key: i, style: { background: "#fff", border: "1px solid var(--line)", borderRadius: 10, padding: "16px 18px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 32, height: 32, borderRadius: 8, background: "var(--accent-soft)", color: accent, display: "grid", placeItems: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(I, { style: { width: 16, height: 16 } })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600 } }, b.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--muted)", marginTop: 2 } }, b.sub)));
    }))), /* @__PURE__ */ React.createElement("style", null, `
        @media (max-width: 1000px) {
          .trust-badges { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `));
  }
  window.Trust = Trust;
})();
