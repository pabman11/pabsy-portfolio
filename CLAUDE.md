# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production (outputs to ./dist/)
npm run preview    # Preview the production build locally
```

There are no lint or test scripts configured.

## Architecture

**Astro 5 portfolio** deployed to **Cloudflare Pages** via the `@astrojs/cloudflare` adapter. The site is statically generated at build time.

### Key integrations
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` (Vite plugin, not PostCSS). Theme tokens are defined in `src/styles/global.css` using `@theme {}`.
- **MDX** — blog content with image optimization via `astro:assets`.
- **Sitemap + RSS** — auto-generated at `/sitemap-index.xml` and `/rss.xml`.

### Path alias
`@/*` resolves to `src/*` (defined in `tsconfig.json`).

### Content collection — blog
Posts live in `src/content/blog/` as `.mdx` files. Schema defined in `src/content/config.ts`:
```
title, draft (boolean), pubDate (string), description, cover (image), coverAlt, tags
```

**Draft system**: Posts with `draft: true` are hidden unless the env var `ASTRO_SHOW_DRAFTS=true` is set. This is checked via `import.meta.env.ASTRO_SHOW_DRAFTS` in `src/pages/index.astro` and `src/pages/blog/[slug].astro`. The `wrangler.jsonc` sets this to `"true"` for the `staging.pabsy.dev` environment and `"false"` for production.

### Layout hierarchy
```
BaseHead.astro      ← <head> metadata + global CSS + Umami analytics
BaseLayout.astro    ← full-page shell (Header + main slot + Footer)
BlogPostLayout.astro ← wraps BaseLayout, adds cover image, title, date, tags, and prose styles
```

### Design tokens (defined in `src/styles/global.css`)
- `--color-primary`: `#FF6B35` (orange)
- `--color-primary-dark`: `#E55A2B`
- Font: Inter (self-hosted via `@fontsource/inter`)
- Utility classes: `.btn-primary`, `.btn-outline`

### Deployment
Configured in `wrangler.jsonc`. Two named environments:
- `staging` → `staging.pabsy.dev` (drafts visible)
- `production` → `pabsy.dev` (drafts hidden)

Deploy with `wrangler deploy` after `npm run build`.
