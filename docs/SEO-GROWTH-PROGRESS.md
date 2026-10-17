# SEO / GEO / AEO growth project — progress log

Brief: `seo.md`. Strategy, roadmap and owner actions: `docs/SEO-STRATEGY.md`. Research: `docs/research/`.
Started 2026-10-16. Branch: `wip/seo-growth` (local commits, not pushed). Merge to `main` when the owner approves.

## Status (2026-10-17): build steps complete

1. **Research**: done (`docs/research/competitors.md`, `demand-and-market.md`, `geo-aeo.md`).
2. **Lead tracking**: done (GA4 + Consent Mode v2, lead events, first-touch and AI-referrer attribution, "How did you hear about us?").
3. **English specialist pages**: all 8 in `data/landing/`, rendered by one template.
4. **Arabic section**: `/ar` hub plus `/ar/ecommerce-store-design`, `/ar/salla-store-design` and `/ar/zatca-e-invoicing` (`data/landing-ar/`),
   an RTL root layout (`app/(ar)/ar/`) and `app/rtl.css`. Header, footer, form, landing template, CTA and consent bar take a `locale` prop
   (strings in `lib/i18n.js`). hreflang pairs live in `lib/alternates.js`.
5. **Validation (2026-10-17)**: `next build` passes (51 routes); ESLint 0 errors (11 existing style warnings on data-file default exports).
   Every page checked for horizontal overflow at phone width; screenshots checked for desktop and mobile in both languages.
   JSON-LD types and `inLanguage` verified; sitemap (24 URLs with hreflang), robots and llms.txt checked; unknown URLs return 404.
6. **Strategy document**: rewritten with the rationale, page and keyword map, measurement, the 30/60/90-day roadmap and owner actions.

## Issues found and fixed during validation
- RTL pages rendered blank: the form honeypot sat at `left:-10000px`, which RTL makes scrollable. `rtl.css` moves it right.
- Pages with data tables overflowed phone screens in both languages: `.case-section>div{min-width:0}` in `motion.css`.
- Windows/OneDrive: `next build` fails with `EINVAL readlink` if `.next` is stale or the server is running. Stop the server and `rm -rf .next`.

## Known limitations
- `/ar/<unknown>` serves the bilingual global 404 (English with an Arabic link), not the Arabic `not-found.js`.
- Arabic pages need a native Saudi reviewer before launch.
- Facts flagged for owner confirmation are listed in `docs/SEO-STRATEGY.md` §7.

## Next (owner)
Follow `docs/SEO-STRATEGY.md` §6–7: merge and deploy, set environment variables, verify GSC/Bing, create listings, get the Arabic reviewed.
