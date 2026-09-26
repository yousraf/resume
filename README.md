# Yousra Fettach - CV

A single-page CV/resume site, built with React, TypeScript, and Tailwind CSS.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [react-icons](https://react-icons.github.io/react-icons/) for the social/contact icons

## Structure

- `src/data.ts` - all content (links, experience, education, publications, honors, teaching, skills)
- `src/components/Header.tsx` - name, tagline, bio, social links
- `src/components/Section.tsx` - labeled section wrapper used across the page
- `src/components/Timeline.tsx` - timeline list with collapsible entry descriptions
- `src/components/Skills.tsx` - skills list
- `src/App.tsx` - composes the sections into the page layout

To update the content, edit `src/data.ts` (and the bio paragraphs directly in `Header.tsx`).

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run lint      # run ESLint
npm run preview   # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (requires **Settings → Pages → Source → GitHub Actions** to be enabled on the repo).
