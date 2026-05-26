(() => {
  function Team({ accent }) {
    const tx = (key) => window.t ? window.t(key) : key;
    const people = [
      {
        name: "Cansu",
        role: tx("team.cansu.role"),
        desc: tx("team.cansu.desc"),
        bullets: [tx("team.cansu.b1"), tx("team.cansu.b2"), tx("team.cansu.b3")]
      },
      {
        name: "Anton",
        role: tx("team.anton.role"),
        desc: tx("team.anton.desc"),
        bullets: [tx("team.anton.b1"), tx("team.anton.b2"), tx("team.anton.b3")]
      }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "team", className: "lp-section", style: {
      background: "linear-gradient(180deg, #fff 0%, #f3eee8 100%)",
      borderTop: "1px solid var(--line)",
      padding: "64px 32px",
      position: "relative",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 980, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { className: "lp-team-head lp-2col-md", style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "end",
      marginBottom: 32
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: 14,
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    } }, /* @__PURE__ */ React.createElement("span", { style: { color: accent, fontWeight: 600 } }, "02"), /* @__PURE__ */ React.createElement("span", { style: { width: 20, height: 1, background: accent } }), tx("team.eyebrow")), /* @__PURE__ */ React.createElement("h2", { className: "lp-section-h2", style: {
      margin: 0,
      fontSize: "clamp(26px, 2.6vw, 36px)",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      fontWeight: 700
    } }, tx("team.h2.1"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--muted)" } }, tx("team.h2.2")))), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 380 } }, /* @__PURE__ */ React.createElement("p", { style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--ink-2)"
    } }, /* @__PURE__ */ React.createElement("strong", { style: { display: "block", color: "var(--ink)", marginBottom: 8 } }, tx("team.intro.strong")), tx("team.intro.body")))), /* @__PURE__ */ React.createElement("div", { className: "lp-team-photo-wrap", style: {
      position: "relative",
      background: "linear-gradient(180deg, #fff 0%, #fff 60%, var(--bg) 100%)",
      borderRadius: 18,
      border: "1px solid var(--line)",
      padding: "0 0 0",
      overflow: "visible"
    } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", className: "lp-team-decor", style: {
      position: "absolute",
      top: 18,
      right: 24,
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 110,
      fontWeight: 700,
      color: "rgba(0,0,0,0.07)",
      lineHeight: 1,
      pointerEvents: "none",
      zIndex: 0
    } }, "02"), /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "Design ohne Titel (18).png",
        alt: tx("team.eyebrow") + ": Cansu & Anton",
        className: "lp-team-photo",
        style: {
          display: "block",
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          position: "relative",
          zIndex: 1
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "lp-team-labels", style: {
      position: "relative",
      zIndex: 2,
      marginTop: -8,
      padding: "0 18px 20px",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12
    } }, people.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "lp-team-name-card", style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 10,
      padding: "13px 14px",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: "-0.01em"
    } }, p.name), /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 12,
      color: "var(--muted)",
      marginTop: 1
    } }, p.role), /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 11,
      color: "var(--muted)",
      lineHeight: 1.35,
      marginTop: 6,
      maxWidth: 330
    } }, p.desc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 } }, p.bullets.map((bullet) => /* @__PURE__ */ React.createElement("span", { key: bullet, style: {
      fontSize: 10,
      color: accent,
      background: "var(--accent-soft)",
      borderRadius: 100,
      padding: "4px 8px",
      fontWeight: 600
    } }, bullet)))), /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 10,
      color: accent,
      background: "var(--accent-soft)",
      padding: "4px 8px",
      borderRadius: 100,
      letterSpacing: "0.04em"
    } }, "0", i + 1))))), /* @__PURE__ */ React.createElement("div", { style: {
      margin: "22px auto 0",
      background: "#0e1116",
      color: "#fff",
      borderRadius: 14,
      padding: "22px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 18,
      flexWrap: "wrap"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.35 }, dangerouslySetInnerHTML: { __html: tx("team.claim.html") } }), /* @__PURE__ */ React.createElement("a", { href: "/prozess-check", style: {
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
      flexShrink: 0
    } }, tx("team.cta"), /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 14, height: 14 } })))));
  }
  window.Team = Team;
})();
