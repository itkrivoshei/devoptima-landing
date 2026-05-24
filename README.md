# DevOptima Landing Page

[![Deploy to GitHub Pages](https://img.shields.io/github/actions/workflow/status/itkrivoshei/devoptima-landing/deploy.yml?branch=master&style=flat-square&label=deploy)](https://github.com/itkrivoshei/devoptima-landing/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-222?style=flat-square&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/devoptima-landing/)
[![License: MIT](https://img.shields.io/github/license/itkrivoshei/devoptima-landing?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18-20232a?style=flat-square&logo=react&logoColor=61dafb)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](tsconfig.json)

Responsive DevOps service landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Tech stack

- React 18
- TypeScript 5
- Vite 7
- Tailwind CSS 3
- GitHub Actions
- GitHub Pages

## Scope

- Static landing page UI
- Responsive section layout
- Public SVG assets
- TypeScript verification
- GitHub Pages deployment workflow

## Requirements

- Node.js 22 or newer
- npm

The repository includes `.nvmrc` for Node version alignment.

## Installation

```bash
git clone https://github.com/itkrivoshei/devoptima-landing.git
cd devoptima-landing
nvm use
npm install
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run typecheck` | Run TypeScript checks |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run verify` | Run typecheck and production build |

## Deployment

The site is deployed to GitHub Pages from the `master` branch using `.github/workflows/deploy.yml`.

Live site:

```text
https://itkrivoshei.github.io/devoptima-landing/
```

Workflow summary:

```text
push to master
→ npm install
→ npm run verify
→ upload dist artifact
→ deploy to GitHub Pages
```

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

This project is licensed under the [MIT License](LICENSE).
