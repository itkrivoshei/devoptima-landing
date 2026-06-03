<div align="center">

# DevOptima Landing

Responsive DevOps service landing page built with React, TypeScript, Vite, and Tailwind CSS.

[![Live site](https://img.shields.io/badge/live-site-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/devoptima-landing/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/devoptima-landing/deploy.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/devoptima-landing/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18-20232a?style=for-the-badge&logo=react&logoColor=61dafb&labelColor=0f172a)](package.json)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite&logoColor=white&labelColor=0f172a)](vite.config.ts)
[![License](https://img.shields.io/github/license/itkrivoshei/devoptima-landing?style=for-the-badge&labelColor=0f172a)](LICENSE)

</div>

## Page System

DevOptima is a static landing page for a DevOps consulting brand. The UI is split into section-level React components, styled with Tailwind CSS, and shipped as static files through Vite and GitHub Pages.

```text
Header -> Hero -> Features -> Solutions -> Process -> Call to Action -> Footer
```

## Tech Stack

| Area     | Tools                                                                                                                                        |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| App      | [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)                                                                |
| Build    | [Vite 7](https://vite.dev/)                                                                                                                  |
| Styling  | [Tailwind CSS](https://tailwindcss.com/), PostCSS, Autoprefixer                                                                              |
| Assets   | SVG brand and service illustrations in [`public/images/`](public/images/)                                                                    |
| Delivery | [GitHub Actions](https://github.com/itkrivoshei/devoptima-landing/actions), [GitHub Pages](https://itkrivoshei.github.io/devoptima-landing/) |

## Quick Start

```bash
git clone https://github.com/itkrivoshei/devoptima-landing.git
cd devoptima-landing

# If you use nvm, this reads .nvmrc and selects the project Node.js version.
nvm use

npm install
npm run dev
```

The dev server prints the local URL after startup.

## Commands

Scripts are defined in [`package.json`](package.json).

| Command             | Purpose                      |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start Vite locally           |
| `npm run typecheck` | Run TypeScript checks        |
| `npm run build`     | Build `dist/`                |
| `npm run preview`   | Preview the production build |
| `npm run verify`    | Type-check and build         |

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on pushes to [`main`](https://github.com/itkrivoshei/devoptima-landing/tree/main), installs Node from [`.nvmrc`](.nvmrc), runs `npm run verify`, uploads `dist`, and publishes the site to [GitHub Pages](https://itkrivoshei.github.io/devoptima-landing/).

## License

[MIT](LICENSE)
