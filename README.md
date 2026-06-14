# NULLTRACE - Astro Security Consultant Theme

[![NULLTRACE theme preview](./public/preview.webp)](https://nulltrace.example/)

[![Astro 6](https://img.shields.io/badge/Astro-6-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Configured-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-84cc16?style=for-the-badge)](./LICENSE)

**Preview:** [nulltrace.example](https://nulltrace.example/)

NULLTRACE is a dark, terminal-inspired Astro theme for security consultants, penetration testers, incident response specialists, and boutique cybersecurity studios.

It is built as a single-page landing portfolio with strong technical atmosphere, accessible navigation, crawlable content, and production-ready SEO defaults.

## Features

- Terminal-inspired landing page for cybersecurity professionals
- Responsive fixed header with full-screen mobile menu
- Hero section with animated intro, terminal cursor, and clear CTAs
- Services section for penetration testing, incident response, auditing, and infrastructure security
- Methodology timeline for explaining engagement flow
- Terminal-style `/opt/tools` inventory instead of generic tool cards
- Project/case-study highlights
- Contact form shell ready to connect to your preferred backend
- Accessible skip link, focus states, landmarks, labels, and reduced-motion fallbacks
- Server-rendered Astro output for better SEO and no-JS readability
- Open Graph, Twitter, canonical, robots, theme color, and JSON-LD structured data defaults
- SVG favicon included
- Tailwind CSS 4 styling through the Vite plugin
- React islands for interactive navigation and motion

## Tech Stack

- Astro 6
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Type-check the project:

```bash
npm run lint
```

## Theme Setup

Before publishing, update the project-specific values:

- `site` in `astro.config.mjs`
- SEO title, description, canonical behavior, and JSON-LD in `src/pages/index.astro`
- Brand name, contact email, social links, services, projects, and footer links in `src/App.tsx`
- Tool inventory content in `src/components/Toolstack.tsx`
- Methodology steps in `src/components/Methodology.tsx`
- Contact form handling in the contact section
- `public/favicon.svg` if you want a custom brand mark

The current placeholder production URL is:

```txt
https://nulltrace.example
```

Replace it with your real deployment domain before publishing.

## SEO

The theme includes:

- Server-rendered page content
- Canonical URL
- Meta title and description
- Keyword meta
- Robots meta
- Open Graph tags
- Twitter card tags
- JSON-LD structured data for a professional service
- Theme color
- SVG favicon
- No-JS visibility fallback for animated content

Main SEO files:

- `src/pages/index.astro`
- `astro.config.mjs`
- `public/favicon.svg`

## Accessibility

The theme includes:

- Semantic `header`, `main`, `section`, `article`, `footer`, and labelled navigation
- Skip link for keyboard users
- Visible focus rings
- Mobile menu dialog semantics with `aria-expanded`, `aria-controls`, and Escape-to-close behavior
- Body scroll lock while the mobile menu is open
- Labelled contact form fields with autocomplete and required states
- Decorative UI elements marked with `aria-hidden`
- Reduced-motion CSS support
- No-JS fallback so animated SSR content remains visible

## Content Notes

The included copy is starter/demo content. Replace it with real services, project summaries, tools, contact details, and social profiles before publishing.

The contact form currently prevents default submission and is intended as a theme shell. Connect it to your preferred form provider, server action, or API endpoint.

## Project Structure

```txt
src/
  App.tsx
  index.css
  pages/
    index.astro
  components/
    Methodology.tsx
    Toolstack.tsx
public/
  favicon.svg
  preview.webp
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release notes.

## Publishing Checklist

- Replace `https://nulltrace.example` with your real domain
- Replace `hello@nulltrace.security`
- Replace GitHub and LinkedIn placeholder URLs
- Connect or remove the contact form
- Update demo projects and services
- Update structured data to match the real business/person
- Run `npm run lint`
- Run `npm run build`
- Run `npm audit --omit=dev`

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
