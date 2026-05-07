# sample-pages

Apple-design-language inspired GitHub Pages sample. Static HTML / CSS / JS — no build step.

**Live:** https://junho85.github.io/sample-pages/

## Stack

- Plain HTML5
- One CSS file with the full design-token system (colors, spacing, typography, radii)
- One small ES module for the floating sticky bar + smooth-scroll offset

## Design language

A deliberate study of the Apple homepage / store grammar:

- Single Action Blue (`#0066cc`) accent — no second color
- Alternating full-bleed light / parchment / near-black tiles as the section divider
- SF Pro Display + SF Pro Text via system stack, Inter as documented fallback
- The single drop-shadow in the system is reserved for product imagery
- 17px body type, negative letter-spacing on display sizes

## Structure

```
.
├── index.html
├── assets/
│   ├── styles.css
│   └── script.js
└── .nojekyll
```

## Local preview

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

GitHub Pages → Settings → Pages → Deploy from branch → `main` / `/ (root)`.
