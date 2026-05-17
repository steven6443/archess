# Arch Essentials

Marketing site for [Arch Essentials](https://archessbrands.com) — an LA-based e-commerce brand focused on simplicity, efficiency, and sustainability.

## Stack

- HTML5 + CSS3 (no build step required)
- [Bootstrap 5.3.2](https://getbootstrap.com/) — responsive grid and utilities
- [Font Awesome 6.4.2](https://fontawesome.com/) — icons
- [WOW.js](https://wowjs.uk/) — scroll-triggered animations

## Project structure

```
├── index.html              # Main page
├── assets/
│   ├── css/
│   │   └── style.css       # All custom styles and animation keyframes
│   └── files/
│       ├── Arch-logo.png
│       ├── arch.png
│       ├── intro_bg.jpg
│       ├── mobile_bg.jpg
│       └── wow.min.js
└── CNAME                   # GitHub Pages custom domain
```

## Development

No build tools required. Open `index.html` directly in a browser or serve it with any static file server:

```bash
npx serve .
```

## Deployment

The site is hosted on GitHub Pages. Pushing to `main` deploys automatically to [archessbrands.com](https://archessbrands.com).
