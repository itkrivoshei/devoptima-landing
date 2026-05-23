# DevOptima Landing Page

[![Deploy to GitHub Pages](https://github.com/itkrivoshei/devoptima-landing/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/itkrivoshei/devoptima-landing/actions/workflows/deploy.yml)

Responsive landing page built with React, TypeScript, Vite and Tailwind CSS.

- **Live:** https://itkrivoshei.github.io/devoptima-landing/
- **Workflow:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Node.js:** [`22`](.nvmrc)

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Commands

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server |
| `npm run typecheck` | Run TypeScript checks |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |

## CI/CD

The site is deployed with GitHub Actions.

```text
push to master
→ install dependencies
→ run production build
→ upload dist artifact
→ deploy to GitHub Pages
```

Deployment details:

| Item | Value |
| --- | --- |
| Workflow | `.github/workflows/deploy.yml` |
| Trigger | `push` to `master`, manual `workflow_dispatch` |
| Runner | `ubuntu-latest` |
| Node.js | `22` |
| Build output | `dist/` |
| Hosting | GitHub Pages |
| Secrets | Not required |

## Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── CallToActionSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProcessSection.tsx
│   │   └── SolutionsSection.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Local Setup

```bash
git clone https://github.com/itkrivoshei/devoptima-landing.git
cd devoptima-landing
nvm use
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## License

[MIT](LICENSE)
