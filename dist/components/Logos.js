(() => {
  function Logos({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    return /* @__PURE__ */ React.createElement("section", { style: { background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-logos-wrap", style: { maxWidth: 1240, margin: "0 auto", padding: "32px 32px" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-logos-title", style: { fontSize: 12, color: "var(--muted)", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Geist Mono, monospace", marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 12, justifyContent: "center", width: "100%" } }, /* @__PURE__ */ React.createElement("span", { className: "lp-logos-title-line", style: { width: 32, height: 1, background: "var(--line)" } }), tx("logos.title"), /* @__PURE__ */ React.createElement("span", { className: "lp-logos-title-line", style: { width: 32, height: 1, background: "var(--line)" } })), /* @__PURE__ */ React.createElement("p", { style: { margin: "-12px auto 24px", textAlign: "center", color: "var(--muted)", fontSize: 14 } }, tx("logos.sub")), /* @__PURE__ */ React.createElement("div", { className: "lp-logos-grid", style: { display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 16, alignItems: "center", justifyItems: "center" } }, /* @__PURE__ */ React.createElement(Logo, { name: "Shopify", color: "#7AB55C" }), /* @__PURE__ */ React.createElement(Logo, { name: "Microsoft 365", color: "#0078D4" }), /* @__PURE__ */ React.createElement(Logo, { name: "WooCommerce", color: "#7F54B3" }), /* @__PURE__ */ React.createElement(Logo, { name: "WordPress", color: "#21759B" }), /* @__PURE__ */ React.createElement(Logo, { name: "DATEV", color: "#005CA9" }), /* @__PURE__ */ React.createElement(Logo, { name: "Odoo", color: "#714B67" }), /* @__PURE__ */ React.createElement(Logo, { name: "lexoffice", color: "#EE7F00" }), /* @__PURE__ */ React.createElement(Logo, { name: "HubSpot", color: "#FF7A59" }))));
  }
  function Logo({ name, color }) {
    return /* @__PURE__ */ React.createElement("div", { className: "lp-logo-item", style: { display: "flex", alignItems: "center", gap: 8, opacity: 0.85 } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: color
    } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Geist, sans-serif", fontWeight: 600, fontSize: 14, color: "#444", letterSpacing: "-0.01em" } }, name));
  }
  window.Logos = Logos;
})();
