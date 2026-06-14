# Changelog

All notable changes to NULLTRACE will be documented in this file.

This project follows a simple versioned changelog format inspired by Keep a Changelog.

## [0.1.0] - 2026-06-14

Initial public theme release.

### Added

- Astro 6 single-page portfolio theme for cybersecurity professionals
- Dark terminal-inspired visual system with JetBrains Mono and Inter
- Responsive fixed navigation with `./NULLTRACE` branding
- Full-screen mobile menu with accessible dialog semantics
- Hero section with animated entrance, blinking terminal cursor, and primary CTAs
- Services section for penetration testing, incident response, security auditing, and infrastructure security
- Methodology section with a four-step engagement flow
- Terminal-style `/opt/tools` inventory with grouped security tooling
- Project highlights section for anonymized security case studies
- Contact form shell with labelled email and message fields
- Footer with email, GitHub, and LinkedIn links
- Tailwind CSS 4 styling via the Vite plugin
- React-powered interactive navigation and motion effects
- Lucide icons for terminal/security interface details
- SVG favicon

### Accessibility

- Server-rendered content for no-JS readability
- Skip link for keyboard users
- Visible focus states
- Labelled primary navigation and mobile menu
- Escape-to-close behavior for the mobile menu
- Body scroll lock while the mobile menu is open
- Semantic sections, articles, ordered lists, and grouped tool inventory rows
- Form labels, autocomplete, required fields, and helper text
- Decorative UI elements marked with `aria-hidden`
- Reduced-motion CSS fallback
- No-JS fallback for animated content that would otherwise render hidden

### SEO

- Canonical URL support through Astro `site`
- Meta title and description
- Robots and keyword metadata
- Open Graph tags
- Twitter card tags
- JSON-LD structured data for a professional security service
- Theme color metadata

### Documentation

- Added MIT license
- Added setup, publishing, SEO, accessibility, and content notes to README
- Added publishing checklist for replacing placeholder domain, email, social links, copy, and form handling

### Notes

- Demo values such as `https://nulltrace.example`, `hello@nulltrace.security`, and placeholder social URLs must be replaced before production use.
- Contact form handling is intentionally left as a shell so theme users can wire it to their preferred provider.
