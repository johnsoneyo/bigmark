# BIG-MARK IT Consult – Website

Static site built with [Astro](https://astro.build) and Tailwind CSS 4. German is the default language (`/`), English lives at `/en/`. Legal pages: `/impressum/`, `/datenschutz/`.

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # output in dist/
npm run lint     # type check
```

## Content

All texts, navigation, team and SEO data are in `src/config/site.ts` (one block per language). Project cards are hidden while `projects` is empty. The contact form posts to Web3Forms; the access key is also in `site.ts`.

## Deployment

Pushes to `main` build the site and publish `dist/` to the `gh-pages` branch (see `.github/workflows/deploy-gh-pages.yml`). The domain is set in `public/CNAME`.

## Origin and license

Started from the MIT-licensed NULLTRACE Astro theme; see [LICENSE](LICENSE).
