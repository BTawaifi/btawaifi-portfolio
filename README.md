# Boutros Tawaifi: portfolio

Live site: https://btawaifi-portfolio.vercel.app

A single-page portfolio for a senior full-stack engineer: impact figures, engineering toolkit, experience,
certifications, selected projects and contact details. Client work is shown without client names, using mock data or
cropped screenshots.

## Stack

React 18, TypeScript, Vite, React Bootstrap, Framer Motion, React Router (hash routing). Fonts and icons are bundled;
there is no back end.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check, then build to ./build
npm run preview  # serve the production build locally
```

`npm audit` reports no known vulnerabilities at the time of writing.

## Deploy

Pushes to `main` build on Vercel (`npm run build`, output directory `build`).
