<div align="center">

# DevOptima Landing

Responsive DevOps service landing page built with React, TypeScript, Vite, and Tailwind CSS.

[![Live site](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/devoptima-landing/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/devoptima-landing/deploy.yml?branch=master&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/devoptima-landing/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](package.json)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite&logoColor=white)](vite.config.ts)
[![License](https://img.shields.io/github/license/itkrivoshei/devoptima-landing?style=for-the-badge)](LICENSE)

</div>

## Page System

DevOptima is a polished static landing page for a DevOps consulting brand. The UI is split into section-level React components, uses Tailwind utility classes for layout and rhythm, and ships as static files through Vite.

```text
Header -> Hero -> Features -> Solutions -> Process -> Call to Action -> Footer
```

## Built With

| Area | Tools |
| --- | --- |
| App | React 18, TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS, PostCSS, Autoprefixer |
| Assets | SVG brand and service illustrations in `public/images/` |
| Delivery | GitHub Actions, GitHub Pages |

## Quick Start

```bash
git clone https://github.com/itkrivoshei/devoptima-landing.git
cd devoptima-landing
nvm use
npm install
npm run dev
```

The dev server prints the local URL after startup.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite |
| `npm run typecheck` | Run TypeScript checks |
| `npm run build` | Build `dist/` |
| `npm run preview` | Preview the production build |
| `npm run verify` | Type-check and build |

## Deployment

`.github/workflows/deploy.yml` runs on pushes to `master`, installs Node from `.nvmrc`, runs `npm run verify`, uploads `dist`, and publishes to GitHub Pages.

## License

[MIT](LICENSE)
