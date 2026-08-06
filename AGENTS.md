# AGENTS.md — Tab Garden Landing Page

This document guides AI coding agents working in this repository.

## Project Overview

Tab Garden landing page — a bilingual (zh/en) Astro 7 + Tailwind 4 + React 19 site deployed on Cloudflare Pages.

- Site: https://tabgarden.pages.dev
- Default locale: zh (no URL prefix)
- Secondary locale: en (`/en` prefix)
- Build output: `dist/` (not committed)

## Commands

```bash
npm install      # install deps (Node.js >= 22.12)
npm run dev      # dev server at localhost:4321
npm run build    # build to dist/
npm run check    # astro check (TypeScript type checking)
npm run preview  # preview build locally
```

Always run before committing:

```bash
npm run check
npm run build
```

## Internationalization (i18n)

### Architecture

- `src/i18n/ui.ts`: flat dotted-key dictionary for zh + en, plus typed FAQ items and changelog releases.
- `src/i18n/utils.ts`: `Lang` type, `getLangFromUrl(url)`, `useTranslations(lang)` → `t(key)`, `getLocalizedPath(path, lang)`, `getAltLangPath(pathname, currentLang)`.

### Rules

- **Never hardcode user-facing text in components.** Add a key to `ui.ts` for both `zh` and `en`, then use `t("key")`.
- **Components auto-detect language** from `Astro.url` — no need to pass `lang` as a prop (except for React client components like `HeroTabsDemo.tsx` which receive `lang` as a prop).
- **Pages come in pairs**: zh in `src/pages/`, en in `src/pages/en/`. Both share the same component set.
- **Anchor links** (`#features`, `#why`, etc.) stay the same across languages — they reference section IDs on the current page.
- **Internal page links** must use `getLocalizedPath("/faq", lang)` etc. so they point to the right language version.
- **Language switcher** uses `getAltLangPath(pathname, lang)` to compute the alternate language URL.

### Adding a new page

1. Create `src/pages/<name>.astro` (zh).
2. Create `src/pages/en/<name>.astro` (en) — adjust imports to `../../`.
3. Add page-specific translation keys to `ui.ts` for both languages.
4. Update `Footer.astro` and `Navbar.astro` links if needed.
5. Add the page to the sitemap (automatic via `@astrojs/sitemap`).

### React components

React client components (`client:load`) cannot use Astro's `Astro.url`. Pass `lang` as a prop and import `dictionaries` from `ui.ts` directly:

```tsx
import { dictionaries, type Lang } from "../i18n/ui";
const dict = dictionaries[lang];
```

## Layout & SEO

`src/layouts/Layout.astro` handles:

- `<html lang>` based on detected language
- hreflang link tags (zh-CN, en-US, x-default)
- canonical URL (localized)
- Open Graph tags (locale switches between zh_CN / en_US)
- JSON-LD: WebSite, WebPage, SoftwareApplication, FAQPage (all bilingual)
- Default og image: `/og-image.png`

## Deployment

Deployed on Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- No environment variables needed
- Project name: `tabgarden` → `tabgarden.pages.dev`

## Code Style

- TypeScript strict mode (no `any` unless unavoidable).
- Tailwind classes in existing style — do not change the visual design.
- User-facing text in zh (Chinese) and en (English) — keep both natural and accurate.
- Do not use `innerHTML` to render user or remote data.
- Keep `.astro` frontmatter with `---` syntax.

## CI

`.github/workflows/ci.yml` runs on PR and push to `main`/`dev`:

1. `npm ci`
2. `npm run check`
3. `npm run build`
4. Upload `dist/` artifact (7-day retention)

CI does not deploy — Cloudflare Pages handles deployment natively.
