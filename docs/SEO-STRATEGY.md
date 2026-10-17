# Origin Ecommerce: Saudi SEO, GEO & AEO Strategy

Last updated: 2026-10-17. Owner: marketing / web team.
Research behind every decision here: `docs/research/` (competitors, demand and market, GEO/AEO). Build log: `docs/SEO-GROWTH-PROGRESS.md`.

## 1. Positioning

Origin Ecommerce is a full-service digital partner for Saudi organisations, and its commercial lead is **e-commerce connected to the back office**: the store, the ERP and ZATCA e-invoicing as one system.

**Entity statement (keep identical everywhere: site, Google Business Profile, LinkedIn, directories, partner profiles):**

> Origin Ecommerce is a digital commerce and technology partner for businesses in Saudi Arabia, delivering e-commerce development, Arabic–English websites, mobile apps, ERPNext with ZATCA e-invoicing, AI automation, and SEO and performance marketing.

## 2. Strategy: what we chose, and why

The research changed the obvious plan ("rank the homepage for *web design Riyadh*") in four ways:

1. **Generic head terms are not winnable soon.** English "best e-commerce company in Saudi Arabia"-type queries are held by directories (GoodFirms, Clutch/The Manifest, TechBehemoths) and listicles, not agency sites. We compete for them **off-site** (listings and reviews), not with pages.
2. **Win specific, high-intent, under-served topics instead.** The gaps the research found are where buyers are close to a decision and competitors are thin or stale:
   - **Store + ERP + ZATCA integration**: no Saudi agency page covers it well. This is our sharpest differentiator.
   - **ZATCA Phase 2, Wave 25**: SAR 187,500 threshold from 1 Feb 2027, verified in the Umm Al-Qura gazette. It reaches micro-businesses for the first time, and competitor wave tables are out of date.
   - **English Salla, Zid and Shopify pages** for brands entering the Kingdom and English-speaking finance and e-commerce teams.
   - **Honest, sourced decision guides** (platform comparison, cost, ERPNext vs Odoo), which both search engines and AI assistants cite.
3. **Arabic carries merchant demand.** تصميم متجر سلة and سعر تصميم متجر search terms are dominated by freelance marketplaces and thin blogs. We built a native Arabic section rather than translating, starting with the three highest-intent topics.
4. **AI search is still mostly search.** Google says there is no special optimisation for AI Overviews; ChatGPT, Copilot and Perplexity retrieve from web indexes. So we did the fundamentals well: crawlable answer-first pages, dated sources, consistent entity data, Bing indexing. We added no gimmicks, and we never promise AI citations or rankings.

**What we deliberately did not do:**
- **City pages:** without a local office or proof they would be doorway pages; Riyadh, Jeddah and Eastern Province come later, with real content.
- **Programmatic city × industry pages:** Sendan's thin versions rank today, but they carry policy risk.
- **FAQ rich-result chasing:** FAQ rich results are gone for most sites. FAQ schema is kept only because it gives answer engines clean question–answer pairs.

## 3. Page inventory and keyword map

Search volumes were **not** measured; no keyword tool was available. Priorities rest on autocomplete demand, SERP observation and commercial intent (`docs/research/demand-and-market.md`). Validate with Keyword Planner (Saudi Arabia, Arabic + English) before reprioritising.

### New specialist pages (built in this project)

| URL | Primary keyword | Language | Intent | Paired page (hreflang) |
|---|---|---|---|---|
| `/zatca-e-invoicing` | zatca phase 2 integration | EN | Commercial | `/ar/zatca-e-invoicing` |
| `/ecommerce-erp-zatca-integration` | store + ERP + ZATCA integration | EN | Commercial | none |
| `/salla-store-development` | salla store design | EN | Commercial | `/ar/salla-store-design` |
| `/zid-store-development` | zid store design | EN | Commercial | none |
| `/shopify-development-saudi-arabia` | shopify development agency in saudi arabia | EN | Commercial | none |
| `/guides/salla-vs-zid-vs-shopify` | salla vs zid vs shopify | EN | Comparison | none |
| `/guides/ecommerce-website-cost-saudi-arabia` | ecommerce website cost in saudi arabia | EN | Price research | none |
| `/guides/erpnext-vs-odoo-saudi-arabia` | erpnext vs odoo | EN | Comparison | none |
| `/ar` | (Arabic home) | AR | Navigational | `/` |
| `/ar/ecommerce-store-design` | تصميم متجر إلكتروني · سعر تصميم متجر الكتروني | AR | Commercial + price | `/services/ecommerce-development` |
| `/ar/salla-store-design` | تصميم متجر سلة · سعر تصميم متجر سلة | AR | Commercial | `/salla-store-development` |
| `/ar/zatca-e-invoicing` | الفاتورة الالكترونية المرحلة الثانية · مرحلة الربط والتكامل | AR | Commercial | `/zatca-e-invoicing` |

Secondary keywords and Arabic variants for each page live in its data file (`data/landing/*.js`, `data/landing-ar/*.js`, fields `secondaryKeywords` and `arabicTerms`). Those files are the keyword map of record.

### Existing pages (unchanged targets)

| URL | Primary (EN) | Intent |
|---|---|---|
| `/` | e-commerce company Saudi Arabia | Commercial / navigational |
| `/services/ecommerce-development` | e-commerce website development Saudi Arabia | Commercial |
| `/services/web-development` | website design company Saudi Arabia | Commercial |
| `/services/mobile-app-development` | mobile app development company Saudi Arabia | Commercial |
| `/services/erp-solutions` | ERPNext Saudi Arabia | Commercial + informational |
| `/services/digital-marketing` | SEO agency Saudi Arabia | Commercial |
| `/services/ai-solutions` | AI solutions Saudi Arabia | Commercial |
| `/services/software-development` | custom software development Saudi Arabia | Commercial |
| `/website-consulting` | free website consultation Saudi Arabia | Transactional |

**Internal linking:** service pages link to their specialist pages ("Specialist pages" spokes), and the footer and Guides hub link to every new page. Each specialist page links to 2–4 related pages. Arabic pages link to each other and, marked "(بالإنجليزية)", to English pages that have no Arabic equivalent yet.

## 4. What is implemented

**Content system**
- One data-driven template (`components/landing/LandingPage.js`) for every specialist page and guide, in both languages; format and content rules are in `data/landing/SCHEMA.md`.
- Content rules enforced in every page: no invented clients, results, partner status or "ZATCA-approved" claims. We publish no prices of our own; market prices appear only when attributed and dated. Every fact about law, deadlines, platforms or fees links to a dated source shown on the page.
- Visible "updated" date per page, which also drives `dateModified`.

**Arabic section (`/ar`)**
- Separate root layout: `lang="ar-SA" dir="rtl"`, IBM Plex Sans Arabic (self-hosted by Next.js at build time), and `app/rtl.css` overrides (no letter-spacing, which breaks Arabic letter joining; mirrored alignment and arrows; taller line-height).
- Native Arabic copy for Saudi searchers, not machine translation. Technical ZATCA terms keep the English abbreviation in brackets (CSID, OTP, Clearance/Reporting), because finance and IT teams search with both.
- Arabic header, footer, contact form and consent bar; enquiry values stay in English so CRM reports are consistent.
- hreflang `en-SA` / `ar-SA` / `x-default`, declared once in `lib/alternates.js` and output in page metadata and `sitemap.xml`. The header language switch goes to the equivalent page, or to the other language's home page when there isn't one.

**Technical SEO and structured data**
- Unique titles, descriptions and self-referencing canonicals (`lib/seo.js → buildMetadata`), Open Graph with the correct locale, `sitemap.xml` (24 URLs, hreflang alternates), `robots.txt` naming search and AI crawlers, and `/llms.txt` generated from page data (including the Arabic pages).
- JSON-LD: `Organization` + `WebSite` (in-language `en-SA` and `ar-SA`) site-wide. Service pages carry `WebPage`, `BreadcrumbList`, `Service` (Arabic `alternateName`s) and `FAQPage`. Guides carry `Article` (with `citation` URLs to the sources). `inLanguage` is set per page.
- Every page is statically pre-rendered. Unknown URLs return a real 404.
- Fixed in this round: on phones, any page with a data table was wider than the screen (the grid column could not shrink). Tables now scroll inside their own box.

**Lead tracking**
- GA4 with Consent Mode v2 and a consent bar (PDPL). It loads only when `NEXT_PUBLIC_GA_ID` is set.
- Events: `generate_lead` (form, with `service`, `heard_about` and `method`), `form_start`, `whatsapp_click`, `phone_click` and `email_click`, captured site-wide.
- First-touch attribution (UTM, gclid, referrer, **AI-assistant referrer**, landing page) is stored on first visit and sent with every enquiry, plus a "How did you hear about us?" field with an AI-assistant option.

## 5. Measurement

| Question | Where to look | Notes |
|---|---|---|
| Are leads coming from organic search? | CRM, using the attribution fields on each enquiry | The source of truth: qualified leads and won revenue by first-touch source. |
| Which pages generate enquiries? | GA4 `generate_lead` and `whatsapp_click` by `page_path` | Mark both as key events in GA4. |
| Are we visible for target topics? | Google Search Console Performance, filtered by page and query | Track impressions and average position per specialist page. Also check the Arabic pages separately (filter `/ar/`). |
| Are AI assistants sending visitors? | GA4 custom channel group "AI assistants" (regex in `docs/research/geo-aeo.md` §5.1), `ai_referrer` on leads, self-reported "AI assistant" | AI Overviews and AI Mode clicks show as google / organic and can't be separated. |
| Are AI assistants citing us? | Bing Webmaster Tools AI Performance report; GSC Generative AI report (impressions only); monthly prompt panel | Prompt panel: about 30 fixed prompts (EN + AR) run three times each in ChatGPT, Perplexity, Gemini, AI Mode and Copilot. Log mentions, cited URLs and competitors cited. |

KPIs, in priority order: **qualified leads and won revenue from organic and AI sources**, then lead conversion rate per page, then impressions and position for each specialist page's primary keyword, then AI citations from the prompt panel.

## 6. 30/60/90-day roadmap

Dates assume the site goes live in late October 2026. Wave 25's 1 February 2027 deadline sets the urgency for ZATCA work.

**Days 0–30: launch and get indexed (owner-led)**
- Merge `wip/seo-growth` to `main` and deploy. Set the business details, `NEXT_PUBLIC_GA_ID`, the contact webhook and WhatsApp number (section 7).
- Verify Google Search Console and Bing Webmaster Tools, submit the sitemap, and request indexing for the 12 new URLs. Enable IndexNow in Bing.
- Create and verify the Google Business Profile, Bing Places and Apple Business Connect with the exact entity statement.
- Join the Salla and Zid partner programmes as a service provider, and list fixed-price packages where the platform requires them.
- Have a native Saudi Arabic speaker review the three Arabic pages.
- Start the monthly prompt panel; the first run is the baseline.

**Days 31–60: authority and the ZATCA window**
- Clutch and GoodFirms profiles, then ask the first 3–5 real clients for verified reviews.
- ZATCA Wave 25 outreach: LinkedIn posts and accountant/VAT-adviser partnerships linking to `/zatca-e-invoicing` and `/ar/zatca-e-invoicing`. Demand peaks before 1 February 2027.
- Add Arabic versions of the next highest-value pages: Zid store design (تصميم متجر زد), store + ERP integration, and the cost guide (تكلفة تصميم متجر إلكتروني).
- Review GSC queries per page and rewrite titles and intros where impressions are high but CTR is low.

**Days 61–90: proof and expansion**
- Publish the first client-approved case study (named client, verified metrics), then set `indexBlueprints: true`.
- B2B ordering portal page (ERPNext price lists, credit terms, ZATCA clearance), which the research identified as uncontested.
- Migration guides (Salla → Shopify, WooCommerce → Salla), an Arabic version of the platform comparison, and a mobile app cost page with SAR ranges.
- Consider Riyadh and Jeddah pages **only** with real local substance.
- Second prompt panel and GSC review; reprioritise from real data and retire anything that isn't earning impressions.

## 7. Actions only the owner can take

1. **Business details (NAP):** real domain, email, phone, WhatsApp, legal name, CR and VAT numbers and address (`.env.example` / `config/business.config.js`). The domain is a placeholder; enquiries go to `info@originsoftwares.com`.
2. **Contact delivery:** `NEXT_PUBLIC_ENABLE_CONTACT_FORM=true`, `NEXT_PUBLIC_API_BASE_URL=/api` and `CONTACT_WEBHOOK_URL`, then a test enquiry end to end in each language.
3. **Analytics:** set `NEXT_PUBLIC_GA_ID`, mark `generate_lead`, `whatsapp_click` and `phone_click` as key events, and create the "AI assistants" channel group.
4. **Search consoles:** Google Search Console and Bing Webmaster Tools (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`), with the sitemap submitted.
5. **Listings:** Google Business Profile, Bing Places, Apple Business Connect, Salla Partners, Zid Partners, Clutch and GoodFirms. Use UTM-tagged website links (e.g. `?utm_source=google&utm_medium=organic&utm_campaign=gbp`). Add each profile URL to `NEXT_PUBLIC_SOCIAL_PROFILES` for Organization `sameAs`.
6. **Native Arabic review** of `/ar`, `/ar/ecommerce-store-design`, `/ar/salla-store-design` and `/ar/zatca-e-invoicing`.
7. **Confirm the facts the pages rely on** (writers could not verify these from primary sources):
   - Salla Pro price (SAR 299/month) comes from a third-party summary; salla.com blocked automated access. Confirm at salla.com/pricing, including VAT.
   - Whether Zid's published prices include VAT.
   - Wave 23 dates are from EY's summary; ZATCA's own page couldn't be retrieved.
   - The Tap Payments Apple Pay on Shopify support article is about 2.5 years old.
   - Market price ranges on the cost guide and Arabic store page come from other providers' blogs (Masar Digital, Mersal, Apptunix). Recheck them every six months.
8. **Never add** partner badges (Salla, Zid, Shopify, Frappe), "ZATCA-approved", client logos, reviews or prices until they are real.
9. **Keyword validation:** Keyword Planner or Semrush for Saudi Arabia, then adjust section 3.
10. **After deployment:** Rich Results Test and validator.schema.org on production URLs, and PageSpeed Insights (mobile) on the home page, one specialist page and one Arabic page.
