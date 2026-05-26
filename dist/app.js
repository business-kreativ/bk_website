(() => {
  const { useState } = React;
  const TWEAK_DEFAULTS = (
    /*EDITMODE-BEGIN*/
    {
      "heroVariant": "A",
      "promiseVariant": "A",
      "ctaVariant": "A",
      "accent": "#F7934A",
      "accent2": "#EC5BB8"
    }
  );
  function App() {
    const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
    React.useEffect(() => {
      document.documentElement.style.setProperty("--accent", tweaks.accent);
      document.documentElement.style.setProperty("--accent-2", tweaks.accent2);
      const h = tweaks.accent.replace("#", "");
      const r = parseInt(h.substring(0, 2), 16);
      const g = parseInt(h.substring(2, 4), 16);
      const b = parseInt(h.substring(4, 6), 16);
      document.documentElement.style.setProperty("--accent-soft", `rgba(${r}, ${g}, ${b}, 0.10)`);
    }, [tweaks.accent, tweaks.accent2]);
    const accent = tweaks.accent;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, { accent }), /* @__PURE__ */ React.createElement(Hero, { variant: tweaks.heroVariant, accent }), /* @__PURE__ */ React.createElement(Team, { accent }), /* @__PURE__ */ React.createElement(Problem, { accent }), /* @__PURE__ */ React.createElement(Solution, { accent }), /* @__PURE__ */ React.createElement(Benefits, { accent, promiseVariant: tweaks.promiseVariant }), /* @__PURE__ */ React.createElement(Services, { accent }), /* @__PURE__ */ React.createElement(Trust, { accent }), /* @__PURE__ */ React.createElement(Scenarios, { accent }), /* @__PURE__ */ React.createElement(Logos, { accent }), /* @__PURE__ */ React.createElement(CTA, { accent, ctaVariant: tweaks.ctaVariant }), /* @__PURE__ */ React.createElement(Footer, { accent }), /* @__PURE__ */ React.createElement(TweaksPanel, { title: "Tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { title: "Copy-Varianten" }, /* @__PURE__ */ React.createElement(
      TweakRadio,
      {
        label: "Hero",
        value: tweaks.heroVariant,
        onChange: (v) => setTweak("heroVariant", v),
        options: [
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" }
        ]
      }
    ), /* @__PURE__ */ React.createElement(
      TweakRadio,
      {
        label: "Versprechen",
        value: tweaks.promiseVariant,
        onChange: (v) => setTweak("promiseVariant", v),
        options: [
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" }
        ]
      }
    ), /* @__PURE__ */ React.createElement(
      TweakRadio,
      {
        label: "CTA",
        value: tweaks.ctaVariant,
        onChange: (v) => setTweak("ctaVariant", v),
        options: [
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" }
        ]
      }
    )), /* @__PURE__ */ React.createElement(TweakSection, { title: "Akzentfarben" }, /* @__PURE__ */ React.createElement(
      TweakColor,
      {
        label: "Prim\xE4r (Orange)",
        value: tweaks.accent,
        onChange: (v) => setTweak("accent", v)
      }
    ), /* @__PURE__ */ React.createElement(
      TweakColor,
      {
        label: "Sekund\xE4r (Pink)",
        value: tweaks.accent2,
        onChange: (v) => setTweak("accent2", v)
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#888", marginTop: 4 } }, "Brand-Presets:"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, [
      ["#F7934A", "#EC5BB8"],
      ["#FF5A36", "#F4D44D"],
      ["#EC5BB8", "#F4D44D"],
      ["#000000", "#F7934A"]
    ].map(([a, b], i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => {
      setTweak("accent", a);
      setTweak("accent2", b);
    }, style: {
      width: 40,
      height: 24,
      borderRadius: 6,
      background: `linear-gradient(135deg, ${a}, ${b})`,
      border: tweaks.accent === a && tweaks.accent2 === b ? "2px solid #000" : "1px solid #ccc",
      cursor: "pointer",
      padding: 0
    } }))))));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
