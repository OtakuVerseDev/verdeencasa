Completed Tailwind migration and finishing tasks

What: Completed Tailwind/PostCSS integration, migrated hero/product components to Tailwind utilities, added local font setup placeholders, responsive image handling, LCP optimizations (preload hero and inline critical CSS), added CI checks, and built the site. Generated Lighthouse artifacts (may require server to run).

Why: Improve styling consistency, performance (LCP), and maintainability; enable local font hosting; add automated CI checks to catch color-literal mistakes.

Where: Files changed include `tailwind.config.cjs`, `postcss.config.cjs`, `src/styles/tailwind.css`, `src/styles/global.css`, `src/styles/fonts.css`, `src/components/Hero.astro`, `src/components/ProductCard.astro`, `src/components/ProductTable.astro`, `src/utils/images.ts`, `.github/workflows/checks.yml`, `public/fonts/README.md`.

Learned: The project already referenced Tailwind in devDependencies; build succeeded locally with minimal config. Network font downloads omitted and documented; Lighthouse headless invocation on Windows required careful chrome-flags quoting and a live server on 5173 (existing process conflict detected). If Lighthouse artifacts are missing, start a local server and run the provided npx lighthouse command.

Update (this session):
- Added a served fonts stylesheet at `public/styles/fonts.css` so `GET /styles/fonts.css` returns 200; this avoids the previous 404 when the stylesheet lived under `src/` only.
- Removed the small 800x420 srcset variants from `src/components/Hero.astro` to avoid referencing assets that were not present in `public/og`.
- Removed the non-standard `importance="high"` attribute from the hero image preload in `src/layouts/BaseLayout.astro` to silence TypeScript/LSP warnings and keep standards-compliant markup.

Where changed:
- `public/styles/fonts.css` (new) — contains `@font-face` rules that point at `/fonts/Inter-Variable.woff2` and `/fonts/PlayfairDisplay-Regular.woff2`.
- `src/components/Hero.astro` — removed 800w srcset entries.
- `src/layouts/BaseLayout.astro` — adjusted font/style preload lines and removed `importance` on image preload.

Next steps (recommended):
1. Download the actual font files into `public/fonts/` (see `public/fonts/README.md`) so the `@font-face` rules work and no font 404s appear.
2. Rebuild (`npm run build`) and run Lighthouse again against a local server (`npm run preview` or `astro dev`) to verify no 404s remain.
3. Optional: remove or reconcile `src/styles/fonts.css` (it's still present) to avoid duplicate font rules; either import it into the build or delete it if `public/styles/fonts.css` is the source of truth.
