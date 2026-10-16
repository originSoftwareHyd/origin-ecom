# Origin Ecommerce: Search Demand and Market Research (KSA)

Prepared: 2026-10-16. Goal: decide which landing pages to build first, ranked by how likely they are to bring **paying clients**, not traffic.

## How to read this report

Each item carries one of three labels:

- **[VERIFIED]**: fact taken from a primary or authoritative source. The URL is given, with the source date where it was available.
- **[PROXY]**: observed signal, not a volume measurement. Most of these are live Google autocomplete results collected on 2026-10-16 from `suggestqueries.google.com` with `gl=sa`, and `hl=ar` or `hl=en`. A suggestion appearing means the query is searched often enough to be suggested. An empty result means low or no demand for that exact string. Neither tells you volume, CPC or difficulty.
- **[HYPOTHESIS]**: strategic inference to be validated.

No search volumes, CPCs or difficulty scores appear anywhere in this document. **Everything marked [PROXY] must be validated in Google Keyword Planner (location: Saudi Arabia, languages: Arabic + English), Semrush/Ahrefs (SA database), and later in Google Search Console.**

---

## 1. Market facts that create search demand

### 1.1 ZATCA e-invoicing Phase 2 (Integration). This is the most time-sensitive demand driver.

**[VERIFIED] Wave 25 decision (official gazette).** ZATCA Administrative Decision No. 1448-99-238 was dated 7/2/1448 AH (24 July 2026) and published in Umm Al-Qura.
- It obliges VAT-registered persons whose revenue subject to VAT exceeded **SAR 187,500** to integrate their e-invoicing systems with ZATCA (FATOORA).
- The obligation applies **"بداية من تاريخ 1/2/2027م"**, i.e. from **1 February 2027**.
- Source: https://www.uqn.gov.sa/decisions-and-regulations/4001455. Press coverage of the same announcement, dated 24 Jul 2026: https://www.al-jazirahonline.com/2026/07/24/524149/ and https://slaati.com/2026/07/24/p2853674.html
- Reference years per press and aggregators: revenue above the threshold in **any of 2022, 2023, 2024 or 2025**.
- Note: the gazette wording is "starting from". Many vendors describe 1 Feb 2027 as a "deadline". Either way, the date is about 3.5 months from today.
- SAR 187,500 is the **voluntary** VAT registration threshold, so this wave is the first to reach voluntarily registered micro-businesses. That point comes from secondary sources (e.g. https://nizamics.sa/en/blog/zatca-wave-25-deadline, https://www.vatupdate.com/2026/08/05/ksa-zatca-announces-e-invoicing-readiness-for-wave-25/).

**[VERIFIED] General rules.**
- Phase 1 (Generation) has been enforceable since 4 Dec 2021.
- Phase 2 (Integration) has been enforceable since 1 Jan 2023, in waves.
- ZATCA notifies targeted taxpayers **at least six months in advance**.
- Source: https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx (the official wave table did not render when fetched).

**Recent waves.** All rows except Wave 25 are compiled by https://amalerp.com/sa/zatca-e-invoicing-phase-2. They are consistent with KPMG's report on Wave 21 (https://kpmg.com/us/en/taxnewsflash/news/2025/03/tnf-saudi-arabia-e-invoicing-requirement-extended-to-21st-group-of-taxpayers-from-november-30-2025.html) and with multiple vendor sources.

| Wave | VAT-able revenue above | Reference years | Announced | Integration date |
|---|---|---|---|---|
| 21 | SAR 1,250,000 | 2022/23/24 | 28 Feb 2025 | 30 Nov 2025 |
| 22 | SAR 1,000,000 | 2022/23/24 | 21 Mar 2025 | 31 Dec 2025 |
| 23 | SAR 750,000 | 2022/23/24 | 27 Jun 2025 | 31 Mar 2026 |
| 24 | SAR 375,000 | 2022/23/24 | 26 Sep 2025 | **30 Jun 2026 (passed)** |
| **25** | **SAR 187,500** | **2022/23/24/25** | **24 Jul 2026** | **1 Feb 2027** (gazette-verified) |

- **No Wave 26 has been announced.** One aggregator says it re-checked as of 4 Oct 2026. Below SAR 187,500 there is no VAT registration, so **Wave 25 is very likely the final wave of the size-based rollout** [HYPOTHESIS].
- **Penalty context.** The Minister of Finance extended the "Cancellation of Fines and Exemption of Financial Penalties" initiative by six months from 1 July 2026, to **31 Dec 2026**. ZATCA's announcement reportedly **excludes Article 45 fines**, which is where e-invoicing violations sit.
  - Sources: https://x.com/Zatca_sa/article/2071638474151600397, https://invoiceq.com/en/zatca-updates/zatca-extends-penalty-exemption-until-31-december-2026/, https://fatorli.com/en/zatca-fines
  - Some vendors (Qoyod, Analytix) read it differently. Confirm against the ZATCA text before using it in copy.
- **Demand implications [HYPOTHESIS]:**
  - Wave 25 brings in thousands of small VAT registrants with a hard date in Feb 2027. Most will buy cheap SaaS such as Qoyod, Wafeq, Foodics or Daftra. The agency-grade buyers are a smaller group:
    1. Businesses running **custom or legacy systems, WooCommerce, Odoo Community or in-house POS** that need an integration built.
    2. Businesses that want to move to a real ERP (ERPNext) at the same time.
    3. Laggards from Waves 21–24 who are already late.
  - Demand will peak Nov 2026 to Feb 2027 and then fall away. **ZATCA pages are a "build now" priority, not evergreen.** Post-deadline, they should pivot to "ZATCA-compliant ERP / fix failed integrations / audit".

### 1.2 E-commerce market and platforms

- **[VERIFIED] mada e-commerce spend (SAMA data via SPA and Saudi Gazette).** These figures cover mada card payments only and exclude credit cards.
  - Q1 2025 exceeded SAR 69bn, up 56% YoY: https://www.spa.gov.sa/en/N2351771
  - Q3 2025 was about SAR 88.3bn.
  - **October 2025 was a monthly record of SAR 30.7bn**: https://www.spa.gov.sa/en/w2475139 and https://saudigazette.com.sa/article/657678
- **[VERIFIED] E-payments were 85% of retail payments in 2025**, up from 79% in 2024, with 14.6bn electronic transactions (SAMA, 2026): https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1139.aspx
- **[VERIFIED] Business formation.**
  - 1.68m active commercial registrations at the end of Q1 2025: Riyadh ~569k (34%), Makkah region ~357k (22%), Eastern Province ~263k (16%).
  - New CRs in Q1 2025 were ~154.6k: Riyadh 60,016, Makkah 26,349, Eastern 24,778.
  - In Q3 2025 the Eastern Province (21,524) overtook Makkah (19,376).
  - Sources: https://www.argaam.com/en/article/articledetail/id/1803831 and https://en.sharikatmubasher.com/media-hub/news/21511431/saudi-commerce-ministry-grants-over-128k-registers-in-q3-25?lang=en
- **Platforms.** No official 2026 merchant counts are published, so the figures below are unreliable:
  - Salla: "68,000+ active merchants" and "USD 13.3bn cumulative GMV" (Crunchbase profile). Investcorp says "100k+" (https://www.investcorp.com/portfolio/salla/). Pre-IPO coverage in 2024 said "80k+".
  - Zid: "12,000+ active merchants" in 2024 (Arab News, https://www.arabnews.com/node/2584723/business-economy).
  - AfterShip store tracking for SA: Salla ~44% of tracked stores, Zid ~12.6% (https://www.aftership.com/ecommerce/statistics/regions/sa). Shopify and WooCommerce hold the remainder.
  - Treat all of these as **directional only**. Salla is clearly the dominant SMB platform, with Zid second.
- **[VERIFIED] Shopify Payments availability.** Not confirmed from Shopify's own documentation. Vendors state that Shopify Payments is unavailable in KSA, so merchants rely on Moyasar, Tap, HyperPay and similar gateways. **[PROXY]** Autocomplete shows "shopify saudi arabia payment gateway", "shopify saudi national address" and "بوابات الدفع شوبيفاي السعودية", which points to recurring setup pain. That pain is a service opportunity.

### 1.3 Legal requirements for online stores

- **[VERIFIED] Registration route.**
  - Since **29 March 2023**, the Ministry of Commerce requires e-stores to register and get documented through the **Saudi Business Center "Business Platform" (business.sa)** instead of Maroof: https://mc.gov.sa/en/mediacenter/News/Pages/29-03-23-02.aspx and https://saudigazette.com.sa/article/631184
  - Requirements: a CR or a valid professional certificate (freelance document), plus a commercial bank account.
- **[VERIFIED] E-Commerce Law (2019) obligations.**
  - Stores must display: name, address, contact channels and CR number.
  - Pre-contract terms must show the price including taxes and fees, delivery and warranty.
  - Invoices must be itemised.
  - Penalties run up to SAR 1m plus suspension or blocking.
  - Sources: https://saudipedia.com/en/e-commerce-law-in-saudi-arabia, https://cms.law/en/sau/legal-updates/saudi-arabia-implements-its-new-e-commerce-law, Salla's own obligations page https://help.salla.sa/en/article/merchant-ecommerce-obligations/g0cbvwqncrfmptexs580y6f7
- **[PROXY] Strong autocomplete in Arabic** on documentation and licensing:
  - توثيق متجر الكتروني منصة الاعمال
  - توثيق متجر سلة في منصة الاعمال
  - المركز السعودي للاعمال توثيق التجارة الالكترونية
  - وثيقة العمل الحر متجر الكتروني
  - كيف اطلع السجل التجاري حق متجر الكتروني
- These are informational queries from people about to launch. They suit **guide content that funnels into a store-build offer**, not landing pages.

### 1.4 Payments and BNPL

- **[VERIFIED] mada is the backbone** of e-commerce card payments (SAMA figures above).
  - ~94% of in-store card transactions are NFC/contactless, according to SAMA data reported by Arab News: https://www.arabnews.com/node/2604150/amp
  - Google Pay with mada was announced in April 2025, per secondary reporting.
  - Apple Pay share is not published. No figure found.
- **[VERIFIED] BNPL licensing.**
  - SAMA licensed **Tamara Finance** for consumer finance/BNPL in **March 2025**: https://sharikatmubasher.com/media-hub/news/21472234/Tamara-Finance-gets-nod-to-provide-consumer-finance,-BNPL-services
  - SAMA licensed **Tabby Finance** around **Nov 2025**: https://sharikatmubasher.com/media-hub/news/21516597/tabby-finance-secures-sama-license-for-bnpl-services
  - The BNPL minimum capital figure (SAR 5m) is unverified.
- **[PROXY] Integration demand is visible.**
  - English: tabby integration with woocommerce / shopify / odoo; tamara integration laravel; tabby and tamara integration
  - Arabic: تفعيل تابي وتمارا في سلة; تفعيل تابي وتمارا للمؤسسات; بوابة دفع سعودية; بوابة دفع إلكتروني بدون سجل تجاري
  - On Salla and Zid this is a one-click app. **The paid opportunity is on WooCommerce, Shopify and custom builds** [HYPOTHESIS].

### 1.5 PDPL (Personal Data Protection Law)

- **[VERIFIED] Timeline.**
  - In force 14 Sep 2023, with a one-year grace period that ended **14 Sep 2024**. SDAIA published the Implementing Regulations on 7 Sep 2023: https://www.clydeco.com/en/insights/2023/09/saudi-arabia-issues-implementing-regulations and https://www.hsfkramer.com/insights/2023-11/saudi-arabias-personal-data-protection-law-%E2%80%93-what-you-need-to-know
  - SDAIA ran a third consultation on amendments to the Implementing Regulations on 27 Apr 2025: https://www.clydeco.com/en/insights/2025/05/saudi-arabia-new-pdp-law-consultation
- **Fines:** up to SAR 5m, doubled for repeat offences (CMS: https://cms.law/en/int/expert-guides/cms-expert-guide-to-data-protection-and-cyber-security-laws/saudi-arabia).
- **What it means for websites (secondary, not regulation text):** a privacy notice (SDAIA guidance exists), consent for direct marketing, data-transfer controls for analytics and CRM tools hosted abroad, and breach notification. **I found no cookie-specific SDAIA rule.** Do not claim one in copy.
- **[PROXY]** pdpl compliance checklist; pdpl compliance services in ksa; pdpl saudi arabia fines; نظام حماية البيانات الشخصية سدايا.
- **[HYPOTHESIS]** PDPL is a credible **add-on and trust signal** (a "PDPL-ready forms, consent and analytics" line in website and app offers) rather than a standalone lead page. Legal-compliance buyers go to law firms and GRC consultancies.

### 1.6 Vision 2030 / Monsha'at

- **[VERIFIED]**
  - Monsha'at runs an e-commerce unit (https://monshaat.gov.sa/en/ecommerce). It reports that active e-commerce registrations grew 10% by the end of Q4 2024.
  - In late 2025 Monsha'at signed MoUs with TikTok (https://monshaat.gov.sa/en/node/423541) and PayPal (https://monshaat.gov.sa/en/node/421954), and a payment deal with Geidea (https://monshaat.gov.sa/en/node/428349).
  - SMEs exceeded 1.7m in 2025, per NTP data cited by SAB.
- **[HYPOTHESIS]** These programmes do not show up as commercial search demand for agency services; no autocomplete signals were observed. Mention them as context on pages, but do not build pages around them.

---

## 2. Search demand evidence by service

Raw autocomplete data was captured 2026-10-16, `gl=sa`. "AC" means autocomplete. Intent codes: **T** = transactional or commercial ("hire"), **C** = comparison, **I** = informational, **N** = navigational.

### 2.1 E-commerce store development (Salla / Zid / Shopify / WooCommerce / custom)

**Arabic (rich AC, clearly the dominant language):**
- تصميم متجر → expands to: تصميم متجر الكتروني, **تصميم متجر سلة**, **تصميم متجر زد**, تصميم متجر الكتروني احترافي, تصميم متجر في سلة, تصميم متجر سلة css, تصميم متجر الكتروني مجاني (T/I mix; "مجاني" means free)
- تصميم متجر الكتروني في → **تصميم متجر الكتروني في السعودية**, **شركة تصميم متجر الكتروني في السعودية** (T)
- شركة تصميم متاجر → شركة تصميم متاجر الكترونية; افضل شركة تصميم متاجر الكترونية; "...شركة تصميم متاجر الكترونية الرياض" (T)
- **سعر تصميم متجر الكتروني**; **سعر تصميم متجر سلة**; تكلفة تصميم متجر الكتروني (T, price)
- ثيم سلة / تصميم ثيم سلة / ثيم متجر سلة / ثيم سلة مجاني (T/I). Salla theme names such as رائد and ملاك appear, so the theme marketplace is searched.
- مطور سلة / مطور تطبيقات سلة; إدارة متجر سلة; خبراء سلة; شركاء زد / شركاء منصة زد (T, partner-seeking)
- انشاء متجر الكتروني في السعودية; أفضل منصة لإنشاء متجر الكتروني في السعودية (I/C)
- متجر شوبيفاي احترافي / تصميم متجر شوبيفاي / متجر شوبيفاي عربي; ووكومرس باللغة العربية / متجر ووكومرس (T/I)
- ربط متجر سلة مع امازون / نون / مخازن (I/T, integration)
- تصميم متجر الكتروني بالذكاء الاصطناعي (I). This shows DIY/AI substitution pressure at the low end.

**English (thin AC for KSA-modified queries):**
- "ecommerce website design saudi" returned nothing; "ecommerce website development riyadh" and "...jeddah" returned nothing.
- "ecommerce agency saudi" returned "e commerce agency in saudi arabia" and "digital agency saudi arabia".
- "shopify agency saudi" returned **"shopify development agency in saudi arabia"**, "does shopify work in saudi arabia" and "shopify stores in saudi arabia".
- "shopify saudi" returned "shopify saudi arabia price", "shopify saudi arabia payment gateway", "shopify saudi national address" and "shopify dropshipping saudi arabia".
- "woocommerce saudi" returned "woocommerce payment gateways saudi arabia".
- "salla developer / salla theme development / salla developer portal" and "zid developer portal" are developer-side queries (N/I, low client intent).

**Read:** commercial "build my store" demand is expressed **overwhelmingly in Arabic**. English demand clusters around Shopify-in-KSA (expats, foreign brands entering KSA, D2C brands) [PROXY + HYPOTHESIS].

### 2.2 Websites (Arabic–English corporate sites)

- AR: شركة تصميم مواقع → **شركة تصميم مواقع في السعودية**, شركة تصميم مواقع الكترونية في السعودية, **شركة تصميم مواقع في جدة**, شركة تصميم مواقع وتطبيقات الموبايل (T)
- AR: تصميم موقع شركة → **تصميم موقع شركة مقاولات في السعودية**, تصميم موقع شركة شحن, تصميم موقع شركة استشارات هندسية, تصميم موقع شركة سياحة, تصميم موقع شركة عقارات (T, vertical)
- AR: تصميم موقع عيادة; تصميم موقع مطعم; تصميم موقع عقاري (T, vertical; single suggestions, so likely low volume)
- AR: تصميم موقع برمجة خاصة (T, custom-coded site; a quality-buyer signal)
- EN: web design riyadh → web development riyadh, website development in riyadh, **web design company riyadh**, **web design agency riyadh**, freelance web designer riyadh (T)
- EN: web design jeddah → web development jeddah, **web design company in jeddah** (T)
- EN: "bilingual website design" and "arabic website design" exist but are not KSA-specific (I)

### 2.3 Mobile apps

- EN: mobile app development riyadh → **mobile app development company in riyadh saudi arabia**, mobile app development agency in riyadh, **best mobile app development company in riyadh** (T). This is one of the richest English city clusters observed.
- EN: app development jeddah → app developer jeddah, **mobile app development company jeddah** (T). "app development dammam" returned nothing.
- AR: شركة برمجة تطبيقات في السعودية / في الرياض; أفضل شركة برمجة تطبيقات في الرياض (T)
- AR cost: **تكلفة تطبيق متجر الكتروني**, تكلفة تطبيق توصيل طلبات, تكلفة تطبيق مثل اوبر, تكلفة تطبيق سلة, تكلفة تطبيق جاهز (T, price)
- AR: تصميم تطبيق توصيل طلبات / ركاب / طعام; تصميم تطبيق متجر (T)

### 2.4 ERPNext and ZATCA e-invoicing

- EN (very rich, technical and buyer mix): zatca phase 2 → integration, waves, requirements, deadline, software; zatca integration → **odoo / oracle fusion / sap / business central / api / sdk**; zatca wave → **wave 25 / 24 / 23**; zatca e invoicing software; **zatca approved software list**; zatca compliant accounting software; **e invoicing software saudi arabia / best e invoicing software in saudi arabia** (T/C/I)
- EN ERPNext: **erpnext saudi arabia**, **erpnext partner saudi arabia**, **erpnext zatca / erpnext zatca phase 2 / erpnext zatca integration** (T). There is also erpnext vs odoo (+ pricing, accounting, comparison).
- EN Odoo: odoo saudi arabia pricing, **odoo saudi partners**, odoo saudi arabia e invoicing (C/T). A large Odoo ecosystem is the competitor reference.
- EN: erp software riyadh / **best erp software in riyadh** (T). "erp companies in dammam/jeddah/khobar" returned nothing.
- AR: الفاتورة الالكترونية → السعودية, هيئة الزكاة, **المرحلة الثانية**, المبسطة, الضريبية; **مرحلة الربط والتكامل من الفوترة الإلكترونية**, فترة تطبيق مرحلة الربط والتكامل, مراحل الربط مع زاتكا (I with T tail)
- AR software: برنامج محاسبي (مجاني / رخيص / سحابي / erp / اودو); **افضل برنامج محاسبي في السعودية**, افضل برنامج محاسبي للمطاعم / للنقليات / للشركات; **أفضل/أرخص برنامج محاسبي معتمد من هيئة الزكاة والدخل**; برنامج فواتير ضريبية (C/T)
- AR ERP: نظام erp في السعودية; **افضل نظام erp في السعودية**; برنامج erp للمخازن / للمصانع / **للمقاولات**; نظام erpnext / برنامج erp next / erpnext عربي / erpnext شرح (C/T/I)
- AR: "الموجة 25" returned nothing. **Arabic users do not say "wave"**; they say "المجموعة 25" and "مرحلة الربط والتكامل" (press used "المجموعة 25").

**Read:** ZATCA demand is bilingual. English dominates the technical and integration side (finance and IT teams, expat CFOs, developers). Arabic dominates "which accounting software is approved/cheapest". "Free" and "cheap" modifiers are frequent, which signals price-sensitive micro-businesses (Wave 25).

### 2.5 AI automation and Arabic chatbots

- AR: شات بوت → **شات بوت واتس اب**, **شات بوت عربي**, شات بوت ذكاء اصطناعي. Telecom and government bot names (مها, منصة قبول) are navigational noise.
- AR: بوت واتساب الذكاء الاصطناعي **مجاني** 2025/2026; بوت واتساب chatgpt (I, DIY and consumer)
- AR: "ذكاء اصطناعي للشركات" (one suggestion); "شات بوت للمتجر" returned nothing
- EN: arabic chatbot (ai / github / dataset / best arabic chatbot / humain arabic chatbot); ai chatbot saudi arabia; **whatsapp chatbot for business / pricing / api**; ai automation agency; ai automation jobs in saudi arabia
- **Read:** demand exists but is mostly consumer, DIY or job-seeking. B2B buyer phrasing is immature. Opportunity [HYPOTHESIS]: attach "WhatsApp AI order and support bot for Salla/Zid stores" to e-commerce offers rather than leading with a standalone chatbot page. Test with paid search before investing in SEO.

### 2.6 SEO and performance marketing

- AR: شركة سيو is polluted by سيولة (a finance company). **أفضل شركة سيو في السعودية / في الرياض / في جدة** (T); تحسين محركات البحث seo للمتجر الإلكتروني; **تحسين محركات البحث seo سلة**; **سيو متجر سلة / seo متجر سلة**; تحسين محركات البحث في السعودية
- AR: شركة تسويق الكتروني في السعودية / **في جدة** / في الدمام; تسويق متجر سلة; تسويق متجر شوبيفاي; **شركة تسويق متجر الكتروني**; خطة تسويق متجر الكتروني
- AR ads: اعلانات سناب شات السعودية / اسعار; اعلانات تيك توك السعودية; اعلانات قوقل (mostly I and N for self-serve)
- EN: seo agency riyadh → seo services riyadh, seo company riyadh, **best seo agency in riyadh**, seo agency saudi arabia; seo jeddah → seo services jeddah, seo company in jeddah; "seo dammam" is thin
- EN: digital marketing agency riyadh / jeddah / ksa; social media marketing agency riyadh / jeddah (T)
- **Read:** SEO/marketing demand is competitive and generic. The differentiated wedge is **"SEO for Salla/Zid stores"**, which carries a platform-specific modifier and likely lower competition.

### 2.7 Custom software

- AR: شركة برمجة في السعودية / **في الرياض**; افضل شركة برمجة في الرياض; شركة برمجة في جدة; شركة برمجة الدمام (T)
- AR: نظام عيادات / نظام ادارة عيادات (طبية / الاسنان); نظام مطاعم; برنامج نقاط بيع للمطاعم / سحابي; برنامج مستودعات (heavy "مجاني"/excel noise) (T/I)
- EN: "custom software development riyadh" returned nothing. "software company in dammam", "software company in khobar" and "it company dammam" do appear. The Eastern Province has English B2B phrasing.

### 2.8 Arabic vs English demand balance

- **[VERIFIED, dated]** Older evidence says Saudi users mostly search in Arabic or transliteration (Google Trends commentary; 2010 Google data). No current published Saudi search-language split was found.
- **[PROXY] Pattern in today's AC data:**
  - **Arabic-dominant:** store design, Salla/Zid services and themes, pricing ("سعر/تكلفة"), platform comparison (سلة او زد), accounting software, store documentation (توثيق), chatbot (WhatsApp), vertical websites.
  - **English-dominant or strong:** ZATCA integration and technical topics, ERPNext/Odoo, mobile app development Riyadh/Jeddah, SEO/digital agency Riyadh, Shopify-in-KSA, PDPL compliance, payment-gateway and BNPL integration.
  - **Mixed:** web design company Riyadh/Jeddah, e-invoicing software.
- **[HYPOTHESIS]**
  - Arabic pages target owner-operators and SME merchants: high count, lower ticket, faster decisions.
  - English pages target finance/IT managers, foreign brands entering KSA and larger firms: fewer, higher-ticket deals.
  - Both are needed, with Arabic first for e-commerce and English first for ERP/ZATCA. Arabic pages must be written natively in Saudi phrasing (e.g. "وش افضل سله ولا زد", "كيف اطلع السجل التجاري حق متجر"), not translated.

---

## 3. City and regional demand

**[VERIFIED] Economic weight (active CRs, Q1 2025):** Riyadh 34%, Makkah region (Jeddah, Makkah, Taif) 22%, Eastern Province 16%. In Q3 2025 Eastern Province new CRs overtook Makkah (sources in 1.2).

**[PROXY] City modifiers observed in autocomplete:**

| Query family | Riyadh | Jeddah | Dammam | Khobar | Makkah | Madinah |
|---|---|---|---|---|---|---|
| Web design (AR) | yes (شركة تصميم مواقع الرياض/بالرياض, أفضل...) | **yes, strong** (appears directly under "شركة تصميم مواقع في") | yes (شركة تصميم مواقع في الدمام) | yes (one) | **none** | yes (one) |
| Web design/dev (EN) | **strong** (company, agency, freelance) | yes (company) | weak (web development dammam) | none | – | – |
| App development (EN) | **strong** (6+ variants) | yes | none | – | – | – |
| Programming company (AR) | yes (+ best) | yes | yes | none | – | – |
| SEO (AR/EN) | yes / yes | yes / yes | – / weak | – | – | – |
| Digital marketing (AR/EN) | EN yes | AR & EN yes | AR yes | – | – | – |
| ERP (EN) | yes (best erp software in riyadh) | none | none | none | – | – |
| Software/IT company (EN) | – | yes (as related) | **yes** | **yes** | – | – |
| E-commerce store design (AR) | yes (inside a long-tail) | – | – | – | – | – |

**Reading [HYPOTHESIS]:**
- **Riyadh:** largest, and the most English-capable demand (apps, SEO, ERP). Headquarters and government-linked buyers are here.
- **Jeddah:** strong Arabic web-design and marketing modifiers. It is a retail, hospitality and trading hub (fashion, abaya, perfume and food brands, plus Hajj/Umrah-adjacent services). E-commerce and marketing pages fit best here.
- **Eastern Province (Dammam/Khobar/Jubail):** "software company / IT company" phrasing, consistent with industrial and B2B buyers. ERP, custom software and B2B portals fit best, though AC shows no ERP+city modifier, so demand may be expressed without a city.
- **Makkah / Madinah:** no meaningful service+city demand observed. Do not build.

**Verdict on city pages:**
- Google's spam policy explicitly lists "multiple domain names or pages targeted at specific regions or cities that funnel users to one page" as doorway abuse: https://developers.google.com/search/docs/essentials/spam-policies
- City pages are defensible **only** if each has unique substance: local case studies and clients, a real address or on-site service capacity, city-specific industries, and a local team or meeting availability.
- Recommendation:
  1. **Riyadh** (AR+EN, web/app/ecommerce) and **Jeddah** (AR+EN, ecommerce/web/marketing): build as the 2nd tier, after the core service pages exist and once you have at least 2 local case studies each.
  2. **Eastern Province** (one page covering Dammam/Khobar, focused on ERP/custom software/B2B): 3rd tier.
  3. No Makkah, Madinah or other city pages.
  4. Never create service×city matrices (e.g. 7 services × 6 cities).
- **Needs validation:** Keyword Planner city-level volumes for "شركة تصميم مواقع [city]", "web design company [city]" and "mobile app development company [city]". GSC impressions by city after launch.

---

## 4. Industry verticals

| Vertical | Evidence | Commercial fit | Priority |
|---|---|---|---|
| **Fashion / abaya** | [VERIFIED] The CST Saudi Internet Report (edition and year to be confirmed) found clothing and footwear bought online by 87.7% of online shoppers, the most popular category (cited via ECDB/Communicate: https://communicateonline.me/news/95-of-saudi-online-purchases-go-to-local-retailers-report/). ECDB puts KSA fashion e-commerce at about USD 1.55bn in 2025 (https://ecdb.com/resources/sample-data/market/sa/fashion). [PROXY] Consumer AC "متجر عبايات (جدة/الرياض)" is rich, so the market has many sellers. "تصميم متجر عبايات" exists with one suggestion. | Many Salla/Zid/Shopify brands that need design upgrades, SEO and apps | **High** |
| **Perfume / oud / cosmetics** | [VERIFIED] Cosmetics was bought by 46.2% of online shoppers (same CST report). [PROXY] "متجر عطور" has 10 consumer suggestions (brands, niche, Saudi); "تصميم متجر عطور" and "تصميم شعار متجر عطور" exist. | Brand-led, high AOV, design-sensitive, gifting seasons | **High** |
| **Restaurants / F&B** | [PROXY] افضل برنامج محاسبي للمطاعم; برنامج نقاط بيع للمطاعم; نظام مطاعم; تصميم موقع مطعم; تصميم تطبيق توصيل طعام; تكلفة تطبيق توصيل طلبات. Foodics dominates POS. | ZATCA + ordering app/website + WhatsApp bot. Competes with SaaS, so the angle is the owned ordering channel (no aggregator commission). | Medium–High |
| **Contracting / construction** | [PROXY] تصميم موقع شركة مقاولات في السعودية; برنامج erp للمقاولات; تصميم موقع شركة استشارات هندسية | ERPNext projects module + bilingual corporate site. B2B, high ticket. | **High (for ERP)** |
| **Wholesale / distribution (B2B)** | [PROXY] Thin: "منصة جملة", "متجر جملة إلكتروني"; "b2b ecommerce saudi" returned nothing. ALZERP targets "wholesale in KSA" vs ERPNext. | ERPNext + B2B ordering portal + ZATCA clearance (B2B invoices need real-time clearance) | Medium–High (low search, high value; sell via outbound/LinkedIn) |
| **Dates / food gifting** | [PROXY] Consumer "متجر تمور (القصيم / المدينة / نجدية)" is rich; no "تصميم متجر تمور" signal | Seasonal (Ramadan/Eid), Qassim/Madinah producers | Medium |
| **Clinics** | [PROXY] تصميم موقع عيادة; نظام ادارة عيادات (طبية / الاسنان); website for dental clinic | Booking site + Arabic chatbot + PDPL (health data is sensitive) | Medium |
| **Real estate** | [PROXY] تصميم موقع عقاري (+ مجاني); تصميم موقع شركة عقارات | Listing sites; regulated (REGA) | Low–Medium |
| **Electronics** | [VERIFIED] Electronics was 23.3% of e-commerce revenue in 2023 (ECDB). | Dominated by big retailers and marketplaces; few agency buyers | Low |
| **Education** | No service-side signals observed | – | Low |
| **Logistics / shipping** | [PROXY] تصميم موقع شركة شحن | Corporate site + tracking integration | Low–Medium |

**Verdict on industry pages:** build **solution pages, not template pages**, for 4–5 verticals where Origin can combine several services:
1. Perfume & oud stores
2. Fashion & abaya brands
3. Restaurants & cloud kitchens (ordering app + ZATCA + WhatsApp bot)
4. Contracting & engineering (ERPNext + bilingual site)
5. Wholesale & distribution (ERPNext + B2B portal + ZATCA clearance)

Search volume per vertical is likely small [PROXY]. These pages convert well and serve paid and social ads and sales follow-up even with modest organic traffic. Validate each vertical with Keyword Planner before writing more than the first two.

---

## 5. Comparison, problem and cost queries

| Query | Observed? | Who answers it now | Gap |
|---|---|---|---|
| سلة او زد / سلة ولا زد / وش افضل سله ولا زد / الفرق بين سلة وزد / منصة سلة او زد | **Yes, strong (AR)** | Agencies (origami.sa "custom store vs Salla/Zid"), Khamsat/Mostaql gigs, capsulaa.sa; no definitive neutral guide in results | Authoritative, current, Saudi-dialect comparison with pricing tables, fees and a decision tree, written by a builder of both |
| الفرق بين سلة و شوبيفاي / shopify vs salla / salla vs shopify | Yes (AR + EN) | Blogs (h-haboubi.com, redrock.com.sa) | Bilingual, with KSA payment/shipping reality (no Shopify Payments, mada, SPL, national address) |
| الفرق بين سلة برو وسلة بلس | Yes | Salla itself | Low value to Origin (navigational) |
| أفضل منصة لإنشاء متجر الكتروني في السعودية | Yes | Mixed blogs | Hub page covering Salla/Zid/Shopify/WooCommerce/custom |
| تكلفة / سعر تصميم متجر الكتروني; سعر تصميم متجر سلة | **Yes (AR)** | Freelance marketplaces and agency blogs. English "cost of website in saudi" returned no AC; English results are weak (Apptunix SAR 80–160k ecommerce estimate; spam pages) | **Transparent SAR price ranges** page. High conversion, and few competitors publish prices. |
| تكلفة تطبيق متجر الكتروني / توصيل / مثل اوبر | Yes (AR) | App agencies (generic, often Egyptian/Gulf-wide) | KSA-specific SAR ranges |
| erpnext vs odoo (+ pricing / accounting / comparison) | Yes (EN, global) | Frappe docs, Odoo partners, O2B, Capterra; **no KSA/ZATCA-specific head-to-head found** | **"ERPNext vs Odoo for Saudi businesses (ZATCA, Arabic, VAT, cost)"** is an open gap |
| best erp for… / افضل نظام erp في السعودية | Yes | Vendors (ALZERP, Odoo partners) | Neutral-ish guide with ERPNext positioning |
| أفضل/أرخص برنامج محاسبي معتمد من هيئة الزكاة; zatca approved software list | Yes (AR + EN) | Qoyod, Wafeq, Daftra blogs. Note: ZATCA does not "approve" software as such; it publishes technical requirements and compliance checks [verify wording]. | Explain "approved" vs "compliant", with ERPNext as the scalable option |
| zatca integration odoo / sap / oracle / business central | Yes (EN) | Big-4 and partners | Integration landing page "ZATCA integration for any system (custom, WooCommerce, Odoo, legacy)" |
| does shopify work in saudi arabia / shopify saudi arabia payment gateway | Yes (EN) | Blogs, Shopify community | Setup service page |

---

## 6. Ranked opportunities (by likelihood of paying clients)

| # | Page / cluster | Lang | Intent | Why |
|---|---|---|---|---|
| 1 | **ZATCA Phase 2 integration service: Wave 25 (1 Feb 2027)** ("zatca integration", "zatca phase 2 integration", "الربط مع زاتكا", "مرحلة الربط والتكامل") | EN + AR | T | Gazette-verified hard date about 3.5 months away; rich EN AC; buyers must act. Position it for custom, legacy, WooCommerce and Odoo systems plus late filers from Waves 21–24. Time-boxed. |
| 2 | **ERPNext implementation in Saudi Arabia (ZATCA-ready)** ("erpnext saudi arabia", "erpnext partner saudi arabia", "erpnext zatca") | EN first, AR second | T | Exact-match partner-seeking AC; few local ERPNext partners compared with 5,000+ Odoo partners; high ticket and recurring support. |
| 3 | **Salla store design and development** (تصميم متجر سلة، سعر تصميم متجر سلة، تصميم ثيم سلة، مطور تطبيقات سلة) | AR | T | Largest SMB platform; many explicit "design my Salla store" and price queries; fast sales cycle. |
| 4 | **E-commerce store design company in Saudi Arabia** (شركة تصميم متاجر الكترونية، تصميم متجر الكتروني في السعودية) hub | AR (+EN) | T | Core money term with KSA modifier; parent of platform pages. |
| 5 | **E-commerce store price page** (سعر/تكلفة تصميم متجر الكتروني + سلة) | AR + EN | T | Price-intent buyers are near decision; few competitors publish SAR ranges. |
| 6 | **Salla vs Zid (vs Shopify) decision guide** (سلة او زد، وش افضل سله ولا زد، shopify vs salla) | AR + EN | C | Strong AC; captures merchants before they choose; natural CTA to "we build on both". |
| 7 | **Shopify development for Saudi brands** (shopify development agency in saudi arabia, payment gateway, Arabic store) | EN + AR | T | English-speaking D2C and foreign brands with higher budgets; setup pain (payments, national address). |
| 8 | **ERPNext vs Odoo for Saudi businesses** + "best ERP in Saudi" | EN + AR | C | Open content gap; feeds #2. |
| 9 | **Zid store design** (تصميم متجر زد، شركاء زد) | AR | T | Second platform; partner-seeking AC. |
| 10 | **Mobile app development (Riyadh)** + app cost (تكلفة تطبيق متجر الكتروني) | EN + AR | T | Richest English city cluster; high ticket; competitive. |
| 11 | **Website design company (Saudi / Riyadh / Jeddah), bilingual** | AR + EN | T | High-volume generic, very competitive; needed as a core page. City pages follow (section 3). |
| 12 | **SEO for Salla/Zid stores** (سيو متجر سلة، تحسين محركات البحث seo سلة) | AR | T | Platform-specific niche inside a crowded SEO market; retainer revenue. |
| 13 | **Payments and BNPL integration** (tabby/tamara integration woocommerce/shopify; بوابة دفع سعودية) | EN + AR | T | Technical buyers; entry-level deals that lead to bigger builds. |
| 14 | **Vertical solution pages:** perfume/oud, fashion/abaya, restaurants, contracting (ERP), wholesale B2B | AR + EN | T | Lower volume, high conversion; reusable in ads and sales. |
| 15 | **Arabic WhatsApp AI bot for stores** (شات بوت واتس اب، شات بوت عربي، whatsapp chatbot for business) | AR + EN | T/I | Demand exists but is mostly DIY and free-seeking. Bundle as an add-on and test with ads first. |

Not in the top 15:
- PDPL compliance: use as an add-on and trust section.
- Store documentation guides (توثيق متجر, وثيقة العمل الحر): informational lead magnets.
- Generic "digital marketing agency": crowded.
- Custom software in Riyadh: AR "شركة برمجة في الرياض" exists; fold it into the services hub.

---

## 7. What must be validated with paid tools

1. **Keyword Planner (KSA, AR+EN):** volumes and CPC ranges for every cluster in section 6, especially:
   - سعر تصميم متجر سلة
   - erpnext saudi arabia
   - zatca integration
   - سلة او زد
   - شركة تصميم مواقع في جدة vs الرياض
2. **Semrush/Ahrefs (SA DB):** difficulty and current top 10 for the ZATCA, Salla and ERPNext clusters; competitor keyword gaps against local agencies (e.g. origami.sa, redrock.com.sa) and ERP vendors.
3. **Google Trends (KSA):** seasonality of "الفاتورة الالكترونية" around wave deadlines; Ramadan/Eid peaks for store-design queries. Trends was not fetchable in this session.
4. **GSC after launch:** city-level impressions to justify or drop city pages; AR vs EN impression split.
5. **Official confirmations still needed:**
   - ZATCA's own wave table (it did not render when fetched).
   - Whether Article 45 e-invoicing fines are excluded from the waiver.
   - Salla's and Zid's native Phase 2 handling for merchants.
   - Shopify Payments availability in KSA.
   - The CST Saudi Internet Report year.
   - Official Salla and Zid merchant counts.
