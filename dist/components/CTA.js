(() => {
  function CTA({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    return /* @__PURE__ */ React.createElement("section", { id: "cta", className: "lp-section", style: { background: "var(--bg)", padding: "96px 32px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1240, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "#0e1116",
      color: "#fff",
      borderRadius: 18,
      padding: "64px 56px",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      position: "relative",
      overflow: "hidden"
    }, className: "lp-cta-block" }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: -120,
      right: -120,
      width: 380,
      height: 380,
      background: `radial-gradient(circle, rgba(255,122,26,0.18), transparent 70%)`,
      pointerEvents: "none"
    } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Geist Mono, monospace", fontSize: 12, color: accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 18 } }, tx("cta.eyebrow")), /* @__PURE__ */ React.createElement("h2", { className: "lp-section-h2", style: { margin: 0, fontSize: "clamp(32px, 3.2vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 600, marginBottom: 22 } }, tx("cta.title")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", margin: 0, marginBottom: 32, maxWidth: 480 } }, tx("cta.body")), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 } }, [
      tx("cta.bullet.1"),
      tx("cta.bullet.2"),
      tx("cta.bullet.3")
    ].map((line, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "rgba(255,255,255,0.9)" } }, /* @__PURE__ */ React.createElement(Icon.check, { style: { width: 16, height: 16, color: accent, flexShrink: 0, marginTop: 2 } }), line)))), /* @__PURE__ */ React.createElement("form", { "data-bk-lead-form": "homepage_cta", style: {
      background: "#fff",
      color: "var(--ink)",
      borderRadius: 12,
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600, marginBottom: 4 } }, tx("cta.form.title")), /* @__PURE__ */ React.createElement(Field, { name: "name", label: tx("cta.form.name"), placeholder: tx("cta.form.name_ph"), required: true }), /* @__PURE__ */ React.createElement(Field, { name: "company", label: tx("cta.form.company"), placeholder: tx("cta.form.company_ph"), required: true }), /* @__PURE__ */ React.createElement(Field, { name: "email", label: tx("cta.form.email"), placeholder: tx("cta.form.email_ph"), type: "email", required: true }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500, color: "var(--ink-2)", marginBottom: 6 } }, tx("cta.form.q")), /* @__PURE__ */ React.createElement("textarea", { name: "message", rows: "3", placeholder: tx("cta.form.q_ph"), style: {
      width: "100%",
      resize: "none",
      fontFamily: "inherit",
      border: "1px solid var(--line)",
      borderRadius: 8,
      padding: "10px 12px",
      fontSize: 14,
      color: "var(--ink)",
      outline: "none"
    } })), /* @__PURE__ */ React.createElement("button", { type: "submit", style: {
      marginTop: 6,
      background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
      color: "#fff",
      border: 0,
      padding: "14px 18px",
      borderRadius: 10,
      fontWeight: 500,
      fontSize: 15,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    } }, tx("cta.form.button"), /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 16, height: 16 } })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 4 } }, tx("cta.form.note")))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginTop: 56 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink-2)" }, dangerouslySetInnerHTML: { __html: tx("cta.closing.html") } }))));
  }
  function Field({ name, label, placeholder, type = "text", required = false }) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500, color: "var(--ink-2)", marginBottom: 6 } }, label), /* @__PURE__ */ React.createElement("input", { name, type, placeholder, required, style: {
      width: "100%",
      fontFamily: "inherit",
      border: "1px solid var(--line)",
      borderRadius: 8,
      padding: "10px 12px",
      fontSize: 14,
      color: "var(--ink)",
      outline: "none"
    } }));
  }
  window.CTA = CTA;
})();
