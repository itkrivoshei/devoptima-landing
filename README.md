# DevOptima Landing

Responsive static landing page built with React, TypeScript, and Tailwind CSS.

## Live Demo

[View demo](https://itkrivoshei.github.io/devoptima-landing/)

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Create React App
- GitHub Actions
- GitHub Pages

## Features

- Responsive landing page layout
- Reusable React components
- Static assets served from `public/images`
- Production build for GitHub Pages
- Automated deployment workflow

## Run Locally

```bash
git clone https://github.com/itkrivoshei/devoptima-landing.git
cd devoptima-landing
npm install
npm start
```

The app runs at:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Test

```bash
npm test -- --watchAll=false
```

## Deployment

The project deploys to GitHub Pages through:

```text
.github/workflows/deploy.yml
```

On every push to `master`, GitHub Actions installs dependencies, runs tests, builds the app, and publishes the static build.

## License

MIT License.