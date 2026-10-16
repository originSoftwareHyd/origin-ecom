# Origin Ecommerce: Saudi SEO, GEO & AEO Strategy

Last updated: 2026-10-16. Owner: marketing / web team.

## 1. Positioning

The site keeps the competitor's business model (a full-service digital partner for Saudi organisations covering AI, web, apps, ERP and digital marketing) and leads with the commerce angle implied by the brand name.

**Entity statement (keep identical everywhere: site, Google Business Profile, LinkedIn, directories):**

> Origin Ecommerce is a digital commerce and technology partner for businesses in Saudi Arabia, delivering e-commerce development, Arabic–English websites, mobile apps, ERPNext with ZATCA e-invoicing, AI automation, and SEO and performance marketing.

**Differentiation gap found during research:** the competitor's site does not mention Salla, Zid, Shopify or ZATCA. Origin Ecommerce targets these high-intent, Saudi-specific topics directly.

## 2. Keyword map

Search volumes were **not** measured: no keyword tool (Semrush, Ahrefs, Google Keyword Planner) was available while this was built. The map rests on Saudi search intent and SERP observation, so validate it with Keyword Planner (location: Saudi Arabia, languages: Arabic + English) before reprioritising.

| Page | Primary (EN) | Secondary (EN) | Arabic variants (shown on page / in schema) | Intent |
|---|---|---|---|---|
| `/` | e-commerce company Saudi Arabia | digital agency Riyadh, e-commerce web & AI solutions KSA | — | Commercial / navigational |
| `/services/ecommerce-development` | e-commerce website development Saudi Arabia | Salla store design, Zid store setup, Shopify developer KSA, online store Riyadh | تصميم متجر إلكتروني · برمجة متاجر إلكترونية · تصميم متجر سلة · متجر زد | Commercial |
| `/services/web-development` | website design company Saudi Arabia | web design Riyadh, bilingual website development, corporate website KSA | تصميم مواقع إلكترونية · شركة تصميم مواقع في الرياض | Commercial |
| `/services/mobile-app-development` | mobile app development company Saudi Arabia | Flutter app developer Riyadh, iOS Android app KSA | برمجة تطبيقات الجوال · شركة برمجة تطبيقات في الرياض | Commercial |
| `/services/erp-solutions` | ERPNext Saudi Arabia | ZATCA e-invoicing integration, ZATCA Phase 2 ERP, ERP implementation KSA | نظام ERP · الفوترة الإلكترونية · الربط مع هيئة الزكاة والضريبة والجمارك | Commercial + informational |
| `/services/digital-marketing` | SEO agency Saudi Arabia | Arabic SEO, Snapchat ads agency, digital marketing Riyadh, GEO / AI search optimisation | شركة تسويق إلكتروني · تحسين محركات البحث (سيو) · إعلانات سناب شات | Commercial |
| `/services/ai-solutions` | AI solutions Saudi Arabia | Arabic chatbot, WhatsApp AI assistant, business automation KSA | حلول الذكاء الاصطناعي · شات بوت عربي · أتمتة الأعمال | Commercial |
| `/services/software-development` | custom software development Saudi Arabia | software company Riyadh, custom portal development | برمجة أنظمة مخصصة · شركة برمجة في الرياض | Commercial |
| `/website-consulting` | free website consultation Saudi Arabia | e-commerce consultation KSA | — | Transactional |

**Question keywords targeted by FAQs (AEO):** "which e-commerce platform is best in Saudi Arabia", "Salla vs Zid vs Shopify", "how much does a website cost in Saudi Arabia", "what is ZATCA phase 2", "is ERPNext suitable for Saudi companies", "do I need a CR to sell online in Saudi Arabia", "which ad platforms work best in Saudi Arabia", "can a chatbot reply in Arabic on WhatsApp".

**Local modifiers used naturally (not stuffed):** Riyadh, Jeddah, Dammam, Al Khobar, Jubail, Makkah, Madinah, Eastern Province. City landing pages were deliberately **not** created: without a real office or local proof in each city they would be thin doorway pages. Add them only with genuine local content (an address, team, clients or events).

## 3. What was implemented

**Technical SEO**
- Unique title (≤ ~65 chars incl. brand), meta description (≤ 160 chars) and self-referencing canonical on every route (`lib/seo.js → buildMetadata`).
- `metadataBase`, Open Graph/Twitter cards, a generated 1200×630 OG image for the site and one per service.
- `sitemap.xml` (indexable canonical URLs only), `robots.txt` (blocks `/api/`, allows search and AI crawlers), `manifest.webmanifest`, SVG favicon, and a 512 px raster logo at `/logo.png` for Organization schema.
- `noindex, follow` on form-only pages (`/website-development-details-form`, `/digital-marketing-inquiry`) and on the solution blueprints (`/portfolio/*`) until real case studies exist (`businessConfig.indexBlueprints`).
- `lang="en-SA"`, `og:locale en_SA`, one `<h1>` per page, a logical H2/H3 hierarchy, `dynamicParams = false` on dynamic routes so unknown slugs return a real 404, security headers, and `X-Powered-By` removed.
- Core Web Vitals: every page is statically pre-rendered, there are no web fonts or render-blocking images (system font stack), and the first-load JS of about 102–124 kB is unchanged by this work.

**Structured data (JSON-LD `@graph`)**
- Site-wide: `Organization` (switches to `ProfessionalService` once a street address is configured) and `WebSite`.
- Home: `WebPage`, `ItemList` of services, `FAQPage`.
- Services index: `CollectionPage`, `BreadcrumbList`, `ItemList`, `FAQPage`.
- Each service: `WebPage`, `BreadcrumbList`, `Service` (with Arabic `alternateName`s and an `OfferCatalog`), `FAQPage`.
- Contact: `ContactPage` + `BreadcrumbList`. Consultation page: `WebPage`, `BreadcrumbList`, `FAQPage`.
- Note: Google limits FAQ rich results to government and health sites, so FAQPage markup won't produce FAQ snippets for this site. It's kept because it gives answer engines and AI assistants unambiguous question/answer pairs.

**GEO (generative engines)**
- One canonical entity description reused across visible copy, schema, the footer and `/llms.txt`.
- `/llms.txt` is generated from the same data as the pages, so facts can't drift.
- `knowsAbout`, `areaServed` (country + cities) and Arabic service names in schema strengthen entity and topic associations.
- Factual, citable statements with dates where relevant (e.g. ZATCA Phase 1 since 4 December 2021); no unverifiable numbers.

**AEO (answer engines)**
- Answer-first FAQ blocks (39 Q&As across home, services, each service and consultation) as server-rendered `<details>`, mirrored exactly in FAQPage schema.
- Each service has a definitional intro paragraph suitable for featured snippets, plus scannable lists (offerings, process, Saudi-market factors).

**Conversion**
- CTAs now name the outcome: "Book a Free Consultation", "Plan my online store", "Book an ERP & ZATCA assessment", "Get my free consultation".
- The contact form captures company, phone/WhatsApp and the service of interest, and pre-selects the service on landing pages. A honeypot field blocks spam.
- Until the API is configured, submitting opens a pre-filled email instead of showing a dead "not connected" message.
- WhatsApp CTAs appear automatically once `NEXT_PUBLIC_WHATSAPP_NUMBER` is set.
- Consultation CTA blocks close every service, services index, blueprint and landing page.

## 4. Launch checklist (requires owner action; NOT done in code)

1. **NAP data**: set the real domain, email, phone, WhatsApp, legal name, CR/VAT numbers and address (`.env.example` / `config/business.config.js`). The default email `hello@originecommerce.com` and domain are placeholders.
2. **Confirm claims the copy relies on**: the free first consultation, Arabic-language service capability (`businessConfig.languages`), and the platforms/integrations listed (Salla, Zid, Shopify, WooCommerce, ERPNext, ZATCA, WhatsApp Business Platform). Remove anything the team can't deliver.
3. **Contact form delivery**: set `NEXT_PUBLIC_ENABLE_CONTACT_FORM=true`, `NEXT_PUBLIC_API_BASE_URL=/api` and `CONTACT_WEBHOOK_URL` (CRM, Make/Zapier, email service), then send a test enquiry end to end.
4. **Google Search Console & Bing Webmaster Tools**: verify the domain (or set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`), submit `/sitemap.xml`, and inspect key URLs.
5. **Analytics**: no analytics is installed. Add GA4 (or similar) with conversion events for form submits, `mailto:`, `tel:` and WhatsApp clicks, plus a consent mechanism appropriate under PDPL.
6. **Google Business Profile**: create or claim it with the same name, phone and category ("Website designer" / "Internet marketing service" / "Software company"), then add its URL to `NEXT_PUBLIC_SOCIAL_PROFILES`.
7. **Structured data validation**: run production URLs through Google's Rich Results Test and validator.schema.org after deployment.
8. **Lighthouse / PageSpeed Insights**: run on the production domain (mobile). Field data (CrUX) appears only once traffic accrues.
9. **Real proof**: replace the solution blueprints with client-approved case studies (named clients, verified metrics, testimonials), then set `indexBlueprints: true`. Add review/award/partner badges (e.g. Salla or Zid partner status) only when they are real.
10. **Arabic site (future)**: the Arabic terms used now are standard Saudi search phrases. A full Arabic version (`/ar/...` with hreflang) is the biggest remaining organic opportunity, but it needs native copywriting and review; machine translation shouldn't be used.
11. **Keyword validation**: confirm volumes and difficulty in Keyword Planner or Semrush for Saudi Arabia and adjust the map above.
