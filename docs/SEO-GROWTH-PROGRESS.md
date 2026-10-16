# SEO / GEO / AEO growth project — progress log

Brief: `seo.md` (lead SEO/GEO/AEO strategist for Saudi Arabia: research → strategy → implement → validate → document).
Started 2026-10-16. Branch: `wip/seo-growth` (local work-in-progress commits; merge to `main` when validated).

## Status at last save (2026-10-16)

### Done
1. **Research (complete)** — `docs/research/`:
   - `competitors.md`: who ranks for EN/AR Saudi queries; directories own English SERPs, marketplaces/platform blogs own Arabic;
     gaps: store + ERPNext + ZATCA integration (uncontested), English Salla/Zid pages, Arabic ERPNext/ZATCA, current ZATCA wave tracker,
     migration guides, honest cost guides, B2B e-commerce.
   - `demand-and-market.md`: Saudi autocomplete proxy demand (no volumes), ZATCA Wave 25 verified in Umm Al-Qura gazette
     (Decision 1448-99-238, 24 Jul 2026: VAT-able revenue > SAR 187,500 in any of 2022–2025, obligation from 1 Feb 2027);
     top-15 opportunities; city pages only Riyadh/Jeddah/Eastern Province later with real substance; Arabic carries merchant demand.
   - `geo-aeo.md`: AI search ≈ SEO; llms.txt not used by engines; FAQ rich results gone (2026-05-07); doorway policy; tracking plan; off-site plan.
2. **Lead tracking (complete, builds)**: `lib/analytics.js`, `components/analytics/Analytics.js` (GA4 + Consent Mode v2 + consent bar,
   only when `NEXT_PUBLIC_GA_ID` set; delegated whatsapp/phone/email click events), first-touch attribution (UTM, referrer, AI referrer,
   landing page) sent with enquiries; contact form `form_start`/`generate_lead` events + "How did you hear about us?" (incl. AI assistant);
   API forwards `attribution` + `heard` to the webhook.
3. **Landing-page system (built, awaiting content)**: `data/landing/SCHEMA.md` (format + content rules), `data/landing/index.js` (registry),
   `components/landing/LandingPage.js` + `RichText.js`, routes `app/(site)/[landing]/page.js`, `app/(site)/guides/[slug]/page.js`,
   guides hub `app/(site)/guides/page.js`; `lib/seo.js` gained per-page dates, `articleSchema`, `landingServiceSchema`;
   sitemap, llms.txt, robots (named AI/search bots), nav (Guides replaces Process), footer columns, service-page "Specialist pages" spokes;
   landing CSS appended to `app/motion.css`.
4. **Content written (6 of 8)** in `data/landing/`: zatca-e-invoicing, ecommerce-erp-zatca-integration, erpnext-vs-odoo-saudi-arabia,
   salla-store-development, zid-store-development, shopify-development-saudi-arabia.
   Still being written by a writer agent: `salla-vs-zid-vs-shopify.js`, `ecommerce-website-cost-saudi-arabia.js`
   (if missing on resume: write them per SCHEMA.md, or temporarily remove their imports from `data/landing/index.js`).
5. **Arabic restructure (in progress)**: English routes moved into route group `app/(site)/` (URLs unchanged; relative imports rewritten);
   `app/global-not-found.js` added + `experimental.globalNotFound` in `next.config.mjs`.

### State at pause (user hit usage limit, 2026-10-16)
- Writer agents were STOPPED before finishing. Missing files: `data/landing/salla-vs-zid-vs-shopify.js`,
  `data/landing/ecommerce-website-cost-saudi-arabia.js`, and all of `data/landing-ar/` (ecommerce-store-design, salla-store-design,
  zatca-e-invoicing). Re-run writers using the same briefs (see SCHEMA.md + research docs), or remove the two guide imports
  from `data/landing/index.js` to build without them.
- `lib/i18n.js` created (en/ar UI strings: Arabic nav, form labels, service labels, heard-about options, landing labels, footer).
  NOT yet wired: Contact.js, Header.js, Footer.js and LandingPage.js still use hard-coded English; they need a `locale` prop reading `ui[locale]`.
- Not yet created: `app/(ar)/ar/layout.js`, `app/(ar)/ar/page.js`, `app/(ar)/ar/[slug]/page.js`, RTL CSS (letter-spacing:0 for Arabic
  headings, Arabic-capable font stack, mirrored arrows), hreflang alternates in `buildMetadata`, `inLanguage` param in schema helpers.
- Build NOT verified since the route-group move. Dev server is stopped.

### Next steps (in order)
1. Ensure all 8 landing files exist → `npx next build` → fix errors → screenshot-check pages (headless Chrome script in scratchpad: `shoot.mjs`).
2. Arabic section: `app/(ar)/ar/layout.js` (html `lang="ar-SA" dir="rtl"`, Arabic header/footer, same CSS + RTL overrides),
   Arabic contact form strings, pages: `/ar` (hub), `/ar/ecommerce-store-design` (تصميم متجر إلكتروني + pricing approach),
   `/ar/salla-store-design` (تصميم متجر سلة), `/ar/zatca-e-invoicing` (الفوترة الإلكترونية المرحلة الثانية / الربط والتكامل).
   Native Saudi phrasing, not translation; flag for native review. Add hreflang `alternates.languages` both ways + sitemap alternates.
3. Validate: build, lint, screenshots desktop/mobile, JSON-LD sanity, sitemap/robots/llms output, 404s.
4. Update `docs/SEO-STRATEGY.md`: strategy rationale, keyword map, page inventory, 30/60/90-day roadmap, measurement setup,
   owner actions (GBP, Bing WMT, Saudi Business Center, Salla/Zid partner listings, Clutch/GoodFirms, confirm facts flagged by writers).
5. Commit and (when the user asks) push/merge to `main`.

### Facts flagged by writers for owner confirmation
- Salla Pro price (SAR 299/mo) from a third-party summary only; Salla site blocked automated access — verify salla.com/pricing; VAT inclusion.
- Zid pricing VAT inclusion; Tap Apple Pay on Shopify article is ~2.5 years old.
- Never claim Salla/Zid/Shopify/Frappe partner status, ZATCA approval, clients or prices until real.
