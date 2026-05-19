# business-kreativ.com - Static Export

Doppelklick auf `index.html` öffnet die Landing Page. Funktioniert offline.

## Seiten
- `index.html`        - Landing Page (Hauptseite)
- `anfrage.html`      - Kontaktformular / Potenzialanalyse
- `impressum.html`    - Impressum
- `datenschutz.html`  - Datenschutzerklaerung

## Dateien
- `app.jsx`           - React-App-Wiring (Sektionen, Tweaks)
- `tweaks-panel.jsx`  - Tweaks-Panel-Helpers
- `components/`       - Einzelne Sektionen (Hero, Team, Problem, ...)
- `assets/`           - Logo, Team-Foto

## Hosting
Einfach den ganzen Ordner auf jeden statischen Webhoster werfen
(Netlify, Vercel, Hetzner, IONOS, etc.). `index.html` ist die Startdatei.

## Lokal starten

```bash
npm run dev
```

Danach im Browser oeffnen:

```text
http://127.0.0.1:8080/
```

## Vercel

Das Projekt ist fuer Vercel als statische Website vorbereitet:

- Root Directory: `.`
- Framework Preset: `Other`
- Build Command: leer lassen
- Output Directory: leer lassen

Vercel deployed direkt die Dateien aus dem Repository-Root. Durch `cleanUrls`
funktionieren die Unterseiten auch als `/anfrage`, `/impressum` und
`/datenschutz`.
