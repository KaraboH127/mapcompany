# Map Company – React + Vite + Tailwind CSS v4

A full refactor of the Map Company website into a modern React application.

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| Font Awesome | 6.5 | Icons (CDN) |
| Google Fonts | — | Playfair Display, Barlow, Barlow Condensed |

---

## Project Structure

```
map-company/
├── index.html                     App shell
├── vite.config.js                 Vite + Tailwind plugin
├── src/
│   ├── main.jsx                   React entry point
│   ├── index.css                  Tailwind @import + @theme variables
│   ├── App.jsx                    Root component
│   └── components/
│       ├── ImagePlaceholder.jsx   Swap src="" for real images
│       ├── Topbar.jsx
│       ├── Navbar.jsx             Desktop nav + mobile drawer
│       ├── Hero.jsx
│       ├── CompanyProfile.jsx
│       ├── Architectural.jsx
│       ├── Engineering.jsx
│       ├── ProjectManagement.jsx
│       ├── WhyChooseUs.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build -> dist/
npm run preview   # Preview production build
```

---

## Adding Real Images

Every image slot has a TODO comment. Two patterns used:

### ImagePlaceholder component
```jsx
// Replace:
<ImagePlaceholder src="" alt="Riversdale House" aspectRatio="aspect-[4/3]" />

// With:
<img src="/images/riversdale-one.jpg" alt="Riversdale House"
     className="w-full aspect-[4/3] object-cover block" />
```

Place image files in public/images/ — Vite serves them at /images/filename.jpg

### Hero background
In Hero.jsx, replace the dark div with:
```jsx
<img src="/images/hero-bg.jpg" alt=""
     className="absolute inset-0 w-full h-full object-cover opacity-35" />
```

---

## Tailwind Custom Colors

Defined in src/index.css via @theme:
  --color-gold: #c9a84c
  --color-dark: #111214
  --color-dark2: #1a1c20
  --color-dark3: #22252b
  --color-mid: #2e3138
  --color-text-muted: #888c96

Use as: text-gold, bg-dark2, border-mid, etc.
