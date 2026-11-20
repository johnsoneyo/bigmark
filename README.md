# BIG-MARK IT Consult – Website

Static bilingual site built with React, TypeScript, Vite and Tailwind CSS 4. German is the default language (`/`), English lives at `/en/`. Legal pages: `/impressum/`, `/datenschutz/`.

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # output in dist/
npm run lint     # type check
```

## Content

Localized business content is maintained in `src/content.ts`. React routes and shared page components live in `src/react/App.tsx`. The contact form posts to Web3Forms.

## Deployment

Pushes to `main` build the site and publish `dist/` to the `gh-pages` branch (see `.github/workflows/deploy-gh-pages.yml`). The domain is set in `public/CNAME`.

## Origin and license

Started from the MIT-licensed NULLTRACE theme; see [LICENSE](LICENSE).
