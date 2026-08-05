# Tab Garden Landing Page

The official landing page for **Tab Garden** — a local-first browser tab manager extension that uses a virtual board to group, snooze, sync, and clean up tabs without ever touching the browser's native tab bar.

Built with **Astro 7**, **Tailwind CSS 4**, and **React 19**. Deployed on **Cloudflare Pages** at [tabgarden.pages.dev](https://tabgarden.pages.dev).

## Features

- Bilingual (Chinese / English) with automatic language detection from URL
- Full SEO: hreflang, JSON-LD (WebSite, WebPage, SoftwareApplication, FAQPage), sitemap
- GEO assets: `llms.txt`, `robots.txt`
- Dark mode support
- No tracking, no analytics, no cookies

## Local Development

```bash
npm install      # install dependencies (requires Node.js >= 22.12)
npm run dev      # start dev server at localhost:4321
```

## Build

```bash
npm run build    # build production site to dist/
npm run preview  # preview the build locally
npm run check    # run astro check (TypeScript type checking)
```

## Cloudflare Pages Deployment

This site is deployed on Cloudflare Pages with automatic builds from Git.

### Setup

1. Go to [Cloudflare Pages](https://pages.cloudflare.com) and create a new project.
2. Connect the GitHub repository.
3. Configure the build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 22 (set `NODE_VERSION=22` environment variable if needed)
   - **Environment variables**: none required
4. Set the project name to `tabgarden` to get the `tabgarden.pages.dev` domain.
5. Deploy. Cloudflare will automatically build on every push.

### Custom Domain

After deployment, bind a custom domain in the Cloudflare Pages dashboard. Update `astro.config.mjs` `site` and the canonical/hreflang URLs accordingly.

## Project Structure

```text
tab-manager-landing/
├── .github/workflows/
│   └── ci.yml                    # PR/push CI: type check + build + artifact
├── public/
│   ├── favicon.svg / .ico
│   ├── og-image.svg
│   ├── llms.txt                   # LLM-friendly product summary
│   └── robots.txt
├── src/
│   ├── components/                # Astro + React UI components
│   │   ├── Navbar.astro           # nav + language switcher
│   │   ├── Hero.astro
│   │   ├── HeroTabsDemo.tsx       # React animated demo (accepts lang prop)
│   │   ├── Features.astro
│   │   ├── FeatureCard.astro
│   │   ├── PainPoint.astro
│   │   ├── WhyGarden.astro
│   │   ├── HowItWorks.astro
│   │   ├── Privacy.astro          # homepage privacy section
│   │   ├── CTA.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   └── Icon.astro
│   ├── i18n/
│   │   ├── ui.ts                  # bilingual dictionary (zh/en) + FAQ/changelog data
│   │   └── utils.ts               # Lang type, getLangFromUrl, useTranslations, getLocalizedPath
│   ├── layouts/
│   │   └── Layout.astro           # SEO, hreflang, JSON-LD, og tags
│   ├── pages/
│   │   ├── index.astro            # zh homepage (route: /)
│   │   ├── faq.astro              # zh FAQ (route: /faq)
│   │   ├── changelog.astro        # zh changelog (route: /changelog)
│   │   ├── privacy.astro          # zh privacy policy (route: /privacy)
│   │   ├── terms.astro            # zh terms of service (route: /terms)
│   │   └── en/
│   │       ├── index.astro        # en homepage (route: /en)
│   │       ├── faq.astro          # en FAQ (route: /en/faq)
│   │       ├── changelog.astro    # en changelog (route: /en/changelog)
│   │       ├── privacy.astro      # en privacy policy (route: /en/privacy)
│   │       └── terms.astro        # en terms of service (route: /en/terms)
│   └── styles/
│       └── global.css             # Tailwind 4 + theme colors
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Internationalization (i18n)

The site supports Chinese (default, no URL prefix) and English (`/en` prefix).

- **Dictionary**: All copy lives in `src/i18n/ui.ts` as flat dotted keys (`hero.title`, `nav.features`, etc.) for both `zh` and `en`.
- **Structured data**: FAQ items and changelog releases are exported as typed arrays indexed by language.
- **Detection**: `getLangFromUrl(url)` checks if the pathname starts with `/en/`.
- **Translation**: `useTranslations(lang)` returns a `t(key)` function that looks up the dictionary.
- **Path localization**: `getLocalizedPath(path, lang)` prepends `/en` for English routes.
- **Language switcher**: The navbar computes the alternate language path and links to it.
- **Components**: Every component auto-detects the language from `Astro.url` — no prop drilling required.

### Adding a new translation key

1. Add the key to both `zh` and `en` objects in `src/i18n/ui.ts`.
2. Use `t("your.key")` in any component.

### Adding a new page

1. Create the zh version in `src/pages/`.
2. Create the en version in `src/pages/en/` (adjust import paths with `../../`).
3. Both pages auto-detect language — just use `getLangFromUrl` and `useTranslations`.

## Tech Stack

| Tool | Version |
|---|---|
| Astro | 7.x |
| Tailwind CSS | 4.x |
| React | 19.x |
| @astrojs/react | 6.x |
| @astrojs/sitemap | 3.x |

## License

© Tab Garden. All rights reserved.
