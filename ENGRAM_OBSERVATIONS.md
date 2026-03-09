Completed Tailwind migration and finishing tasks

What: Completed Tailwind/PostCSS integration, migrated hero/product components to Tailwind utilities, added local font setup placeholders, responsive image handling, LCP optimizations (preload hero and inline critical CSS), added CI checks, and built the site. Generated Lighthouse artifacts (may require server to run).

Why: Improve styling consistency, performance (LCP), and maintainability; enable local font hosting; add automated CI checks to catch color-literal mistakes.

Where: Files changed include `tailwind.config.cjs`, `postcss.config.cjs`, `src/styles/tailwind.css`, `src/styles/global.css`, `src/styles/fonts.css`, `src/components/Hero.astro`, `src/components/ProductCard.astro`, `src/components/ProductTable.astro`, `src/utils/images.ts`, `.github/workflows/checks.yml`, `public/fonts/README.md`.

Learned: The project already referenced Tailwind in devDependencies; build succeeded locally with minimal config. Network font downloads omitted and documented; Lighthouse headless invocation on Windows required careful chrome-flags quoting and a live server on 5173 (existing process conflict detected). If Lighthouse artifacts are missing, start a local server and run the provided npx lighthouse command.
