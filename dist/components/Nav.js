(() => {
  function Nav({ accent }) {
    const [open, setOpen] = React.useState(false);
    const tx = (key) => window.t ? window.t(key) : key;
    React.useEffect(() => {
      if (!open) return;
      const onKey = (e) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }, [open]);
    const links = [
      { href: "#problem", label: tx("nav.problem") },
      { href: "#loesung", label: tx("nav.loesung") },
      { href: "#leistungen", label: tx("nav.leistungen") },
      { href: "#ablauf", label: tx("nav.ablauf") },
      { href: "#kontakt", label: tx("nav.kontakt") }
    ];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", { style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(14,17,22,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      color: "#fff"
    } }, /* @__PURE__ */ React.createElement("div", { className: "lp-nav-inner", style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "12px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    } }, /* @__PURE__ */ React.createElement("a", { href: "index.html", style: { display: "flex", alignItems: "center", gap: 12, fontWeight: 600, letterSpacing: "-0.01em" } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: "#fff",
      display: "grid",
      placeItems: "center",
      padding: 4,
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo_bk.png", alt: "bk", style: { width: "100%", height: "100%", objectFit: "contain" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15 } }, "business-kreativ")), /* @__PURE__ */ React.createElement("div", { className: "lp-nav-links", style: { display: "flex", alignItems: "center", gap: 28, fontSize: 14 } }, links.map((l) => /* @__PURE__ */ React.createElement("a", { key: l.href, href: l.href, style: { color: "rgba(255,255,255,0.75)" } }, l.label)), /* @__PURE__ */ React.createElement("span", { "data-bk-lang-widget": "dark", style: { display: "inline-flex" } }), /* @__PURE__ */ React.createElement("a", { href: "/prozess-check", style: {
      background: "linear-gradient(135deg, #7C4A25 0%, #762E5C 100%)",
      color: "#fff",
      padding: "9px 16px",
      borderRadius: 8,
      fontWeight: 500,
      fontSize: 14,
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    } }, tx("nav.cta"), /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 14, height: 14 } }))), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "lp-nav-burger",
        onClick: () => setOpen(true),
        "aria-label": tx("nav.menu_open"),
        style: {
          display: "none",
          background: "transparent",
          border: 0,
          padding: 8,
          color: "#fff",
          cursor: "pointer"
        }
      },
      /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M4 7h16M4 12h16M4 17h16" }))
    ))), open && /* @__PURE__ */ React.createElement("div", { className: "lp-nav-drawer", style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "#0e1116",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "20px 24px",
      animation: "lp-fade-in 0.18s ease"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("a", { href: "index.html", onClick: () => setOpen(false), style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 36, height: 36, borderRadius: 8, background: "#fff", padding: 3, display: "grid", placeItems: "center" } }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo_bk.png", alt: "bk", style: { width: "100%", height: "100%", objectFit: "contain" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15, fontWeight: 600 } }, "business-kreativ")), /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(false), "aria-label": tx("nav.menu_close"), style: {
      background: "transparent",
      border: 0,
      color: "#fff",
      padding: 8,
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12M18 6L6 18" })))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 } }, links.map((l, i) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: l.href,
        href: l.href,
        onClick: () => setOpen(false),
        style: {
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          padding: "14px 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          color: "#fff"
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: accent, marginRight: 14, verticalAlign: "middle" } }, "0", i + 1),
      l.label
    ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("span", { "data-bk-lang-widget": "dark" })), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "/prozess-check",
        onClick: () => setOpen(false),
        style: {
          background: "linear-gradient(135deg, #7C4A25 0%, #762E5C 100%)",
          color: "#fff",
          padding: "18px 22px",
          borderRadius: 12,
          fontWeight: 500,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginBottom: 12
        }
      },
      tx("nav.cta"),
      /* @__PURE__ */ React.createElement(Icon.arrow, { style: { width: 16, height: 16 } })
    )), /* @__PURE__ */ React.createElement("style", null, `
        @keyframes lp-fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1024px) {
          .lp-nav-burger { display: inline-flex !important; align-items: center; justify-content: center; }
        }
      `));
  }
  window.Nav = Nav;
})();
