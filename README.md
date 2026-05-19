# DevOptima Landing Page

A responsive landing page built with **React**, **TypeScript**, and **Tailwind CSS**.

This project is part of my software engineering portfolio and demonstrates frontend delivery, reusable component structure, production build setup, and deployment through GitHub Pages.

## Live Demo

[View deployed project](https://itkrivoshei.github.io/devoptima-landing/)

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Create React App
- GitHub Actions
- GitHub Pages

## Project Highlights

- Built a modern responsive landing page with reusable React components.
- Structured the UI into clear sections: header, hero, features, solutions, testimonials, call to action, and footer.
- Used TypeScript for safer component development and better maintainability.
- Styled the application with Tailwind CSS utility classes.
- Configured a production build for static hosting.
- Added a GitHub Actions workflow for automated deployment to GitHub Pages.

## Project Structure

```bash
devoptima-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── images/
│   │   ├── code-image.svg
│   │   ├── dashboard-metrics.svg
│   │   ├── github-logo.svg
│   │   ├── icon-ci-cd.svg
│   │   ├── icon-cloud-solutions.svg
│   │   ├── icon-devops-transformation.svg
│   │   ├── linkedin-logo.svg
│   │   └── logoDevOptima.svg
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── CallToActionSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SolutionsSection.tsx
│   │   └── TestimonialsSection.tsx
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Components

| Component | Purpose |
|---|---|
| `Header.tsx` | Navigation and brand header |
| `HeroSection.tsx` | Main landing section and call to action |
| `FeaturesSection.tsx` | Product and service feature overview |
| `SolutionsSection.tsx` | Solution-focused content section |
| `TestimonialsSection.tsx` | Customer testimonial layout |
| `CallToActionSection.tsx` | Conversion-focused CTA block |
| `Footer.tsx` | Footer links and page ending |

## Getting Started

### Clone the repository

```bash
git clone https://github.com/itkrivoshei/devoptima-landing.git
cd devoptima-landing
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

The application will run locally at:

```bash
http://localhost:3000
```

### Create a production build

```bash
npm run build
```

## Deployment

The project is deployed as a static site using **GitHub Pages**.

Deployment is automated with **GitHub Actions**.

```bash
push to master
→ install dependencies
→ build React app
→ upload production build
→ deploy to GitHub Pages
```

The deployment workflow is stored in:

```bash
.github/workflows/deploy.yml
```

## What This Project Shows

This project demonstrates:

- frontend application structure
- TypeScript-based React development
- reusable component architecture
- responsive UI implementation
- Tailwind CSS styling workflow
- production build process
- static hosting with GitHub Pages
- basic CI/CD deployment automation

## License

This project is open source and available under the MIT License.
