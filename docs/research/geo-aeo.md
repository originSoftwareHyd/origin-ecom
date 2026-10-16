# GEO / AEO research: Origin Ecommerce

Research date: 2026-10-16. Scope: how AI answer engines pick and cite sources for Saudi B2B service queries, and what a new agency with no authority can realistically do about it.

**Evidence labels used throughout**

- **[Verified]**: read on a primary source (Google, OpenAI, Anthropic, Perplexity, Microsoft, Salla, Zid, Wikidata, arXiv) on the date shown.
- **[Industry-reported]**: vendor or SEO-industry study. The methods are often proprietary, samples differ, and the authors often sell GEO tools. Use these for direction, not as precise figures.
- **[Hypothesis]**: our own reasoning, not yet tested.

Nothing in this document is a promise of rankings or citations. AI answers are non-deterministic. For local queries, BrightLocal measured only 20–33% overlap between repeat runs of the same search (see section 1.2).

---

## 0. TL;DR

1. **AI search is still mostly search.** Google says outright that AEO/GEO is "still SEO". AI Overviews and AI Mode use the normal index, and a page needs only to be indexed and snippet-eligible. ChatGPT, Copilot and Perplexity each run their own retrieval layer on a web index: Bing for Copilot, with OAI-SearchBot and partners for ChatGPT, and PerplexityBot for Perplexity. A page that ranks nowhere is rarely cited.
2. **For "best X company in Saudi Arabia" queries, engines mostly cite third-party lists and directories, not agency sites.** In our own search-result check, GoodFirms, The Manifest, TechBehemoths and various "Top 10 … 2026" listicles held the results. For niche queries such as "ZATCA phase 2 ERPNext", vendor pages do get surfaced. That is where a new site can compete.
3. **Off-site mentions correlate with AI visibility much more strongly than backlinks** [Industry-reported, Ahrefs]. This kind of authority can't be built in code. Directories, partner programmes, reviews, LinkedIn/YouTube and digital PR are the main lever.
4. **llms.txt:** Google states that Search "ignores" it. No major answer engine has publicly confirmed using it for answers. Keep it because it is cheap and harmless, but don't expect anything from it.
5. **FAQ rich results are gone.** Google stopped showing them on 2026-05-07. FAQPage markup stays valid but gives no SERP feature. Self-serving review stars on Organization/LocalBusiness are ineligible. Do not add AggregateRating for our own reviews.
6. **City pages are the main policy risk.** Google's doorway-abuse policy names "pages targeted at specific regions or cities that funnel users to one page" as an example.

---

## 1. How AI surfaces choose and cite sources for local B2B service queries

### 1.1 Google AI Overviews / AI Mode

- **[Verified]** Google's "Optimizing your website for generative AI features on Google Search" (developers.google.com/search/docs/fundamentals/ai-optimization-guide, last updated 2026-07-10):
  - "optimizing for generative AI search is optimizing for the search experience, and thus still SEO."
  - "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search". The page also says Google Search ignores llms.txt files and that creating them "will neither harm nor help".
  - "Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add." It still recommends structured data for rich-result eligibility.
  - "There's no requirement to break your content into tiny pieces for AI to better understand it."
  - "Creating content that people find unique, compelling, and useful will likely influence your website's presence". It also says to "Provide a unique point of view" rather than restate what is available elsewhere.
  - For local businesses and ecommerce, it names **Google Business Profile** and Merchant Center as the tools that "can help your products and services to be visible in both AI responses and other Google Search results."
- **[Verified]** "AI features and your website" (developers.google.com/search/docs/appearance/ai-features, last updated 2025-12-10): "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary." The requirement is to be indexed and eligible for a snippet. It also lists "Making sure your structured data matches the visible text on the page" as a best practice.
- **Implication [Hypothesis]:** For Google, the drivers are ordinary rank and quality signals, a good GBP, and unique content. There is no AI-specific trick.

### 1.2 What gets cited: published studies

All of the following are **[Industry-reported]**. The numbers conflict across studies because the methods differ: share of all citations, top-10 share, different prompt sets and different dates.

| Finding | Source / date | Notes |
|---|---|---|
| Reddit, Wikipedia, YouTube, LinkedIn, Forbes are among the most-cited domains overall | Semrush "Most-cited domains in AI" (semrush.com/blog/most-cited-domains-ai/), Profound (tryprofound.com/blog/ai-platform-citation-patterns), aggregated indexes 2026 | Per-engine shares vary widely between studies. Agenzy (agenzy.lt, 2026) found Reddit at only 0.6% of Perplexity and 1.7% of AI Overviews citations when measured as a share of total citations. |
| Profound's most-cited commercial domains on Perplexity include G2, Gartner, NerdWallet, PCMag, TripAdvisor, Yelp | tryprofound.com | Review and directory sites matter for "best X" queries. |
| Comparative "Best X for Y" listicles are the dominant cited format for commercial queries; one B2B-agency prompt study put listicles at ~53% of citations | LoudFace (loudface.co, 2026); other blogs report ~32.5% | LoudFace ranks itself #1 in its own study. Treat the figure as indicative only. |
| An agency test of "best B2B marketing agency" found ChatGPT's citations came from third-party "best agencies" listicles, and about half the prompts triggered no web search at all | toddmorourke.com/learn/how-chatgpt-picks-sources/ | When no search is triggered, the answer comes from training data. That rewards long-term brand mentions. |
| Branded web mentions correlate with AI Overview visibility at ~0.66, against ~0.22 for backlinks (75k brands, Aug 2025). A Dec 2025 expansion reportedly found YouTube mentions correlate most strongly (~0.74) | Ahrefs, reported via secondary sources; original not re-read | Correlation, not causation. Bigger brands have more of everything. |
| AI-cited URLs averaged 1,064 days old against 1,432 for organic results (~25.7% "fresher"), from 17M citations; ChatGPT skewed newest and AI Overviews oldest | Ahrefs, 2025-07-28, ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/ | A modest freshness preference. |
| Local AI search: Google Business Profile was 28.5% of ~1.97M citations and Yelp 8.5% (rising on ChatGPT). Repeat-run overlap was only 20–33% (ChatGPT 23%, AI Mode 21%, AIO 33%) | BrightLocal, 2026 (brightlocal.com/research/local-ai-visibility-study/, brightlocal.com/blog/ai-search-using-listings-sources/) | US-centric consumer verticals. Yelp is not relevant in KSA. The KSA equivalents would be GBP, Apple Maps and local directories [Hypothesis]. |
| Only ~11% of domains are cited by both ChatGPT and Perplexity | Reported in 2026 roundups | Each engine needs its own presence. |

### 1.3 ChatGPT search, Copilot and the Bing question

- **[Verified]** OpenAI crawler docs (developers.openai.com/api/docs/bots): OAI-SearchBot controls whether a site appears in ChatGPT search. Sites blocking it "will not be shown in ChatGPT search answers", though they can still appear as navigational links. GPTBot (training) is controlled separately. ChatGPT-User handles user-initiated fetches and "is not used to determine whether content may appear in Search". Robots changes take about 24 hours to apply.
- **[Industry-reported]** Seer Interactive found 87% of SearchGPT citations matched Bing's top results, against 56% for Google (about 100 queries, early 2025: seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results). Later replications report much lower Bing overlap. One Profound-cited figure says Bing alignment fell from 26% to 8% while Google alignment rose to 33%. OpenAI says only that it "sometimes partners with other search providers". **Conclusion:** Bing indexing is necessary hygiene and probably helps ChatGPT, but how much ChatGPT depends on Bing is unresolved.
- **[Industry-reported, citing Microsoft guidelines]** Microsoft says Bing and Copilot "rely on the same core crawling, indexing, and ranking foundation". If Bing can't index a page, Copilot can't cite it.
- **[Industry-reported]** Bing Webmaster Tools has had an **AI Performance report** (public preview since Feb 2026). It shows citations in Copilot, Bing AI summaries and unnamed "partner" integrations, plus grounding queries. It shows no clicks.

### 1.4 Perplexity, Gemini, Claude

- **[Verified]** Perplexity docs (docs.perplexity.ai/docs/resources/perplexity-crawlers.md): allow **PerplexityBot** in robots.txt to appear in results. **Perplexity-User** makes user-triggered fetches and generally does not follow robots.txt. Changes take up to 24 hours.
- **[Verified]** Anthropic (support.claude.com/en/articles/8896518): **ClaudeBot** collects training data, **Claude-SearchBot** indexes for search quality, and **Claude-User** makes user-directed fetches. Blocking the last two "may reduce" visibility in Claude's search.
- Gemini app grounding uses Google Search. The Google-Extended token governs training and grounding in "some of Google's other systems", not Search or AI Overviews (see section 2.3).

### 1.5 What the engines return for our target queries (observed 2026-10-16)

We could not observe Perplexity directly: perplexity.ai returned HTTP 403 to automated fetch. As a proxy for the retrieval layer, we ran the queries through a web search API. Search results are what RAG engines build answers from, but this is not the same as observing an AI answer.

| Query | Domains surfaced | Reading |
|---|---|---|
| "best ecommerce development company in Saudi Arabia" | goodfirms.co (68 firms; "Sponsored" placements disclosed), themanifest.com/sa (Clutch's sister site), techbehemoths.com, krowdbase.com, xchange.avixa.org and community.greythr.com ("Top 10/13 … 2026" listicle posts on UGC platforms), zawya.com (press release about an award), clickpost.ai | Fully held by directories, listicles and PR. No agency homepage ranks on its own. **Being listed on these is the realistic route in.** |
| "Salla store designer Riyadh" | haraj.com.sa classifieds, sabbar.com job ads, unrelated news | Weak, fragmented results. An Arabic query (تصميم متجر سلة) instead returns khamsat.com, mostaql.com and haraj.com.sa freelancer listings. **An opening exists for a strong, specific (and Arabic) page**, alongside listings on Salla/Zid partner channels. |
| "ZATCA phase 2 integration provider ERPNext" | sendantech.com (vendor service pages, including a city page), ecosire.com (product pages in many languages) | Vendor pages win niche technical queries. **A deep, accurate ERPNext + ZATCA page from us can compete here.** |

Note on "Top 10" listicles hosted on UGC platforms (forum/community posts): they are visible today, but they are the kind of content Google's site-reputation policy targets. Do not create them [Hypothesis plus policy]. Earning a place on legitimate editorial lists is fine.

---

## 2. Evidence-backed best practices for being cited

### 2.1 Entity consistency

- **[Verified, Google]** Google names GBP as a visibility tool for AI responses (section 1.1).
- **[Hypothesis, widely recommended]** Use one canonical name ("Origin Ecommerce" / Arabic name), one phone number, one address or service area and one description across the site, GBP, LinkedIn, directories, Salla/Zid partner profiles and Wikidata (when eligible). Reflect it in Organization `sameAs`. Engines resolve entities from consistent co-occurrence.
- In code, `lib/seo.js` already builds the Organization schema with `sameAs`, `legalName`, Arabic `alternateName`, CR `identifier` and `vatID` when env/config values exist. **The owner needs to fill these in.** `sameAs` is empty until `NEXT_PUBLIC_SOCIAL_PROFILES` is set.

### 2.2 Structured data that still matters (2026)

| Markup | Status | Action |
|---|---|---|
| Organization / ProfessionalService (logo, sameAs, contactPoint, address/areaServed) | Supported. Feeds knowledge panel and entity understanding [Verified: Google docs]. | Keep. Use `ProfessionalService` only when a real address exists (already done). |
| LocalBusiness review stars | **[Verified]** "If the entity that's being reviewed controls the reviews about itself, their pages that use LocalBusiness or any other type of Organization structured data are ineligible for star review feature." (review-snippet docs, updated 2026-09-08) | **Never** add AggregateRating/Review for our own business, even once we have testimonials. |
| FAQPage | **[Verified]** Google changelog: "This feature will no longer appear in Google Search starting May 7, 2026"; by 2026-06-15 "The FAQ rich result feature is no longer shown in Google Search results." | Keep the markup only where the FAQ text is visible on the page. It is harmless and may help other parsers [Hypothesis], but expect no SERP feature. Don't spend more effort on it. |
| BreadcrumbList | Supported. | Keep. |
| Service / OfferCatalog | No Google rich result. Harmless and descriptive. | Keep, but don't expect any effect. |
| WebPage `dateModified` | Used by engines for freshness [Hypothesis]. | **Fix:** we currently stamp one global `businessConfig.contentUpdated` on every page. Google's helpful-content page warns: "Are you changing the date of pages to make them seem fresh when the content has not substantially changed?" Use a per-page real modified date. |
| Article/BlogPosting with `author` (Person) | Supports "Who" in Who/How/Why. | Add when blog or insights content launches. |

**[Verified]** Structured data must match the visible text (ai-features page).

### 2.3 Robots / crawler policy

| Token | Owner / purpose | Recommendation |
|---|---|---|
| Googlebot | Search, including AI Overviews and AI Mode | Allow. |
| Google-Extended | Control token for Gemini training and grounding "in some of Google's other systems". **[Verified via Google wording quoted in secondary sources]** "does not impact a site's inclusion or ranking in Google Search". Blocking it does **not** remove you from AI Overviews. | Allow. We want Gemini app grounding and have no paywalled content to protect. |
| Bingbot | Bing, Copilot, and likely ChatGPT partner retrieval | Allow, verify in Bing Webmaster Tools, submit the sitemap. |
| OAI-SearchBot | ChatGPT search inclusion | **Must allow.** |
| ChatGPT-User | User-initiated fetches | Allow. |
| GPTBot | OpenAI training | Allow. A new brand benefits from being in training data, since many prompts get no web search [Hypothesis]. The only trade-off is content reuse without attribution. |
| PerplexityBot / Perplexity-User | Index / user fetches | Allow. |
| ClaudeBot / Claude-SearchBot / Claude-User | Training / search index / user fetch | Allow. |
| Applebot / Applebot-Extended | Siri/Spotlight / Apple model training | Allow. Apple's docs were not re-verified. |
| Separate "Google Search Console generative-AI opt-out toggle" | **[Verified]** blog.google (2026-06-03, updated 2026-08-31): "Sites that opt out will not receive traffic or impressions from our generative AI features." Rolled out worldwide. | **Do not opt out.** |

Our `app/robots.js` currently allows `*` with `/api/` disallowed, which already permits all of the above. Optionally, add explicit named `allow` groups to document intent. Behaviour is identical, but it protects against a future `*` restriction silently blocking AI bots. Also check that no CDN or WAF (Vercel firewall, Cloudflare "Block AI bots") is blocking these user agents. That is a common silent failure [Industry-reported].

### 2.4 llms.txt: honest status

- **[Verified]** Google Search ignores it and it "will neither harm nor help" (ai-optimization-guide, 2026-07-10).
- **[Industry-reported]** No major engine (OpenAI, Google, Anthropic, Perplexity, Meta) has publicly said its answer systems use llms.txt. SE Ranking found no correlation between having the file and being cited. Adoption is around 10%. Profound reports Microsoft and OpenAI crawlers *fetching* the file, which is not evidence of use. Its real use is developer-docs tooling (Cursor, IDE agents). Chrome Lighthouse reportedly added an llms.txt check (May 2026) under "agentic browsing". Not verified.
- **Recommendation:** keep `/llms.txt` (it already exists). Keep it accurate and in sync with the site, and spend no further effort on it.

### 2.5 Content formats

- **[Verified, academic]** Aggarwal et al., "GEO: Generative Engine Optimization", arXiv:2311.09735 (v3 2024-06-28, KDD 2024). Content modifications such as adding citations, quotations and statistics improved source visibility in generative answers by up to 40% on their GEO-bench benchmark, and keyword stuffing did not help. Blogs give per-tactic figures (quotations ~41%, statistics ~31%), but we did not verify these against the paper. These are lab results on a 2023-era setup, not guarantees.
- **[Verified, Google]** Unique point of view, first-hand expertise, clear Who/How/Why (creating-helpful-content, updated 2026-10-05). Avoid "mainly summarizing what others have to say".
- Formats that make sense for us **[Hypothesis, consistent with the above]**:
  - **Answer-first sections:** a 2–3 sentence direct answer under each H2 question, then detail.
  - **Comparison pages with real tables:** Salla vs Zid vs Shopify for Saudi merchants (fees, ZATCA, payment gateways such as Mada/Tabby/Tamara, Arabic RTL themes). Cite official sources and date them. A fair comparison that includes competitors is more citable than self-promotion.
  - **Pricing ranges and timelines** in SAR. Engines answer "how much does X cost in Saudi" questions and pull concrete numbers.
  - **Technical explainers with primary-source quotes:** ZATCA Phase 2 waves, clearance vs reporting, ERPNext setup. Quote ZATCA and link to zatca.gov.sa.
  - **Original data** (section 4.4). This is the only kind of content others cite back to us.
  - **Arabic content.** The site is currently `en-SA` only. Many Saudi buyer queries are in Arabic (e.g. تصميم متجر سلة), and the Arabic SERP is held by freelancer marketplaces. Proper Arabic pages with hreflang are likely the biggest content gap [Hypothesis].
- **Freshness:** modest AI preference for newer pages [Industry-reported, Ahrefs]. Update substantively, show visible "Last updated" dates, and never bump dates alone [Verified Google warning].

---

## 3. Google policy guidance relevant to us (quoted)

**Spam policies** (developers.google.com/search/docs/essentials/spam-policies, updated 2026-08-28):

- **Doorway abuse:** "Doorway abuse is when sites or pages are created to rank for specific, similar search queries." The examples include "Having multiple domain names or pages targeted at specific regions or cities that funnel users to one page".
  - **Risk for us:** templated pages such as `/riyadh`, `/jeddah` and `/dammam` with swapped city names. Only build a city page where it carries unique substance: a real office, local case studies, local team and meeting options, city-specific logistics. Otherwise keep cities as `areaServed` and a mention on the service pages. We currently list 7 cities in `areaServed` and have no city pages, which is good.
- **Scaled content abuse:** "Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings … and not helping users." Example: "Using generative AI tools or other similar tools to generate many pages without adding value for users".
  - **Risk for us:** AI-generated blog volume, "Salla store for [industry]" permutations, and the city × service matrix.
- **Site reputation abuse ("site reputation policy"):** "applies where third-party content is published on a host site mainly because of that host's already-established ranking signals."
  - **Risk for us:** paying to place "Top 10 agencies in KSA" posts on community or UGC hosts. Avoid it. Earned editorial coverage is fine.

**Helpful content** (developers.google.com/search/docs/fundamentals/creating-helpful-content, updated 2026-10-05):
- "People-first content means content that's created primarily for people, and not to manipulate search engine rankings."
- "Something that helps people intuitively understand the E-E-A-T of content is when it's clear who created it." Add named authors with credentials.
- "Are you changing the date of pages to make them seem fresh when the content has not substantially changed?" This is relevant to our global `contentUpdated`.

**FAQ rich results:** removed from Search on 2026-05-07. Before that (since 2023-09-14) they were shown only for "well-known, authoritative government and health websites".

**Review snippets:** self-serving reviews are ineligible for Organization/LocalBusiness (quoted in 2.2).

**AI features:** no extra requirements. Pages must be indexed and snippet-eligible. Controls are `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex`, plus the new Search Console generative-AI opt-out. Measurement: the Search Console "Generative AI performance report" (2.5 / 5).

---

## 4. Off-site authority plan for a new Saudi agency

Ordered by expected impact relative to effort [Hypothesis, informed by the evidence above].

### 4.1 Foundations (weeks 1–4)

1. **Google Business Profile** [Verified that Google cites GBP as an AI-visibility tool; BrightLocal: GBP is the top local AI citation source].
   - If there is no customer-facing office, set it up as a **service-area business** with the address hidden. Google's help says to hide the address when you have no storefront. Verification for service-area businesses is commonly by video, showing proof of operations: equipment, branded materials and business documents.
   - We found **no official Google page listing which Saudi documents are accepted**. Have the CR certificate, VAT certificate and a branded workspace ready, and keep the name exactly matching the CR/brand. Don't keyword-stuff the name; Google's guidelines forbid it.
   - Categories: e.g. "Website designer", "Internet marketing service", "Software company". Add services, photos, posts, and the Arabic name/description.
2. **Saudi Business Center / business.sa** [Industry-reported]. E-store and business authentication (formerly Maroof) moved to business.sa in March 2023. Register and display the verification where applicable. It is a trust signal for Saudi buyers, and the government-domain listing is an entity corroboration [Hypothesis].
3. **Bing Webmaster Tools** (import from GSC, submit the sitemap, enable IndexNow) and **Google Search Console** (both properties, sitemap). Also claim **Bing Places** and **Apple Business Connect** (Apple Maps feeds Siri/Apple Intelligence).
4. **LinkedIn company page** with consistent naming. Founders and staff list it as employer and post substantive case studies. LinkedIn is consistently among the top AI-cited domains [Industry-reported].

### 4.2 Platform partner programmes (high relevance)

- **Salla Partners** (partners.salla.com) [Verified 2026-10-16]: partner tracks include app developers, theme developers, **service providers to merchants** (تقديم خدمات للتجار), influencers/affiliates and ready-store sellers. Registration goes through the partner portal with identity verification. The page shows a "Featured partners" area. We could not confirm a public, searchable agency directory. Join as a service provider. A published Salla theme or app adds listings on salla.com subdomains (platform authority) [Hypothesis].
- **Zid Partners** (zid.sa/en/zid-partners) [Verified 2026-10-16]: service categories cover store design and identity, photography and content, UX/UI, technical integration, e-commerce consulting, SEO and marketing. The page claims 2,000+ partners, 6,000+ services completed and 50M+ SAR partner income. It uses fixed-price service listings delivered to merchants. Join and list fixed-price packages.
- **Shopify Partners** directory (needs completed stores). **Frappe/ERPNext Partner** listing on frappe.io (needs certification or a track record). This is strong for the ERPNext + ZATCA niche [Hypothesis].
- **ZATCA Solution Providers Directory** [Verified that it exists, zatca.gov.sa]: an indicative list of providers that passed ZATCA's qualification, and ZATCA "does not approve or endorse". Only relevant if we ship our own qualified e-invoicing solution. **Never claim to be "ZATCA-approved/certified"** unless listed.

### 4.3 B2B directories

- **Clutch** (and The Manifest, which shares its data and holds the /sa ecommerce ranking above) [Verified from methodology pages: ranking weighs verified client reviews, portfolio and market presence. Verified/Premier tiers are paid and rank above]. Free profile first. Ask 3–5 real clients for Clutch-verified reviews; reviewers sign in with LinkedIn, Google or company email [Industry-reported].
- **GoodFirms** (ranks #2 for the head query; "Sponsored" placements are labelled), **TechBehemoths**, **DesignRush**, **Sortlist**. Use free profiles with consistent NAP. Pay only after reviews exist.
- **G2** is for software products, so it only fits if we productise something (e.g. a Salla app). Not a priority.
- **Freelance marketplaces** (Khamsat, Mostaql) hold the Arabic SERPs for Salla/Zid design. An agency profile there is optional and lower-brand, but it is a real visibility channel in Arabic [Hypothesis].

### 4.4 Original-data assets (the main digital-PR lever)

Ideas that Saudi press (Argaam, Arab News, Saudi Gazette, Zawya, Wamda, Magnitt) and listicle authors could cite. Use real data only, and publish the method.

1. **Saudi e-store performance benchmark:** crawl or measure a public sample of Salla/Zid/Shopify Saudi stores for Core Web Vitals, mobile speed, Arabic/English availability, payment options shown (Mada, Apple Pay, Tabby, Tamara) and ZATCA QR on invoices. Repeat it quarterly. Freshness plus a dataset gives a reason to be cited.
2. **ZATCA Phase 2 readiness explainer and tracker:** a maintained, dated timeline of integration waves with quotes from zatca.gov.sa, plus anonymised common integration errors we've fixed.
3. **Salla vs Zid vs Shopify fee calculator for Saudi merchants:** an interactive tool with sources. Tools earn links and AI citations [Hypothesis].
4. **An "AI-search visibility of Saudi e-commerce brands" mini-study:** ask ChatGPT, Perplexity and AI Mode a fixed prompt set and publish the method and results. It fits the agency's GEO service.

### 4.5 Other

- **Wikidata** [Verified criteria, wikidata.org/wiki/Wikidata:Notability]: an item needs a Wikimedia sitelink, **or** to be "a clearly identifiable conceptual or material entity" that can be described with "serious and publicly available references", **or** to fulfil a structural need. A new agency could arguably qualify under criterion 2 once **independent** references exist (government registry, press coverage). Create the item only after that, with neutral statements (official website, inception, country, industry). Never self-create a **Wikipedia** article; we don't meet notability and it would be COI.
- **YouTube:** short Arabic/English walkthroughs (Salla setup, ZATCA in ERPNext). Correlation data puts YouTube mentions highest [Industry-reported].
- **Reddit:** there is little Saudi B2B activity there. Answer genuinely if relevant threads exist (r/saudiarabia, r/shopify, r/ERPNext). Never astroturf.
- **Partnerships:** co-marketing with payment and BNPL providers (Tabby, Tamara, Moyasar, HyperPay partner pages), shipping aggregators, Monsha'at programmes and Riyadh/Jeddah chambers of commerce directories.
- **Awards and events:** Seamless Saudi Arabia, LEAP and e-commerce award submissions only where there is a real case study.

---

## 5. Measurement

### 5.1 GA4: AI referrals

- Create a **custom channel group** with an "AI assistants" channel using a `Session source` regex. Place it **above Referral**, because GA4 assigns the first match [Industry-reported, consistent across guides]. Suggested hostname-anchored regex (avoid broad `google|openai` roots, which cause false positives):
  `^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|www\.perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|claude\.ai|chat\.deepseek\.com|meta\.ai|grok\.com|you\.com)$`
  Add `edgeservices.bing.com` if it appears in the source list. Review the regex quarterly.
- One May 2026 blog claims GA4 added a native "AI Assistant" default channel. **Unverified.** Check the property's default channel group before duplicating.
- **Limits:**
  - ChatGPT often appends `utm_source=chatgpt.com` to links. Treat that as a signal, but not all clicks carry it.
  - Many AI visits arrive as Direct (copy-paste, apps that strip referrers).
  - **Google AI Overviews and AI Mode clicks are reported as google / organic** and can't be separated in GA4.
  - Self-reported attribution ("How did you hear about us?" with an "ChatGPT/AI assistant" option) is a necessary complement.

### 5.2 Google Search Console

- **[Verified]** AI feature traffic counts in the Performance report under the "Web" search type and is not separable there (ai-features page).
- **[Verified, blog.google 2026-06-03/08-31]** New **Generative AI performance report**, rolled out to all sites by 2026-08-31 [Industry-reported: still labelled Beta]. It shows **impressions only**, by page, country, device and date. It has **no queries, clicks, CTR or position** [Industry-reported], and may be missing for sites with low impressions, which is likely for us at first.

### 5.3 Bing Webmaster Tools

- **AI Performance report:** citations, cited pages and grounding queries across Copilot, Bing AI summaries and unnamed partners. It shows no clicks.

### 5.4 Prompt-panel tracking (manual or tooled)

- Each month, run a fixed set of ~30 prompts (EN + AR) in ChatGPT, Perplexity, Gemini, AI Mode and Copilot. Example prompts: "best Salla agency in Riyadh", "ZATCA phase 2 ERPNext integration provider", "Shopify developer Saudi Arabia Arabic". Log whether we are mentioned, cited (URL) or absent, plus which competitor domains are cited.
- Run each prompt 3× because of the volatility BrightLocal reports (20–33% overlap).
- Paid trackers exist: BrightLocal Local AI Visibility, Ahrefs Brand Radar, Semrush AI toolkit, Profound. Optional.

### 5.5 Lead-quality tracking (what actually matters)

- **GA4 key events:**
  - `generate_lead` on contact/inquiry form success, with params `form_id`, `service`, `budget_band`.
  - `whatsapp_click`, with `link_url`, `page_location`, `cta_position`.
  - `phone_click` (`tel:`) and `email_click` (`mailto:`).
  - `form_start` / `form_submit` for the multi-step details form.
- **Persist first-touch attribution:** on first landing, store `utm_*`, `document.referrer`, landing page and gclid in a first-party cookie or localStorage. Send them as hidden fields with the form to `/api/contact`, so every lead in the CRM carries its source, including AI referrers.
- **WhatsApp:** prefill the message with a short reference code (e.g. "Hi Origin [ref:W-ai-salla]") so chats can be matched to the source page. A WhatsApp Business API/CRM integration can capture it automatically.
- **CRM** (HubSpot free, Zoho, or ERPNext CRM, which fits our own stack): stages Lead → Qualified → Proposal → Won, with source fields. Report qualified leads and won revenue by channel, including "AI assistants" and the self-reported "Heard via AI".
- **UTM discipline** for all off-site profiles: GBP website link `?utm_source=google&utm_medium=organic&utm_campaign=gbp`, plus Clutch, GoodFirms, Salla/Zid partner and LinkedIn links. This separates directory-driven leads, which is the main off-site channel we're building.

---

## 6. Sources (accessed 2026-10-16)

Primary / official:
- Google, Optimizing for generative AI features (updated 2026-07-10): https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, AI features and your website (updated 2025-12-10): https://developers.google.com/search/docs/appearance/ai-features
- Google, Spam policies (updated 2026-08-28): https://developers.google.com/search/docs/essentials/spam-policies
- Google, Creating helpful content (updated 2026-10-05): https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, Review snippet docs (updated 2026-09-08): https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- Google Search documentation changelog (FAQ deprecation entries 2026-05-08, 2026-06-15), reached via https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Google blog, New controls and insights for website owners (2026-06-03, updated 2026-08-31): https://blog.google/products-and-platforms/products/search/new-controls-website-owners/
- Search Console Help, Generative AI performance report: https://support.google.com/webmasters/answer/16984139
- OpenAI crawlers: https://developers.openai.com/api/docs/bots
- Anthropic crawlers: https://support.claude.com/en/articles/8896518
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md
- Aggarwal et al., GEO (arXiv 2311.09735, KDD 2024): https://arxiv.org/abs/2311.09735
- Wikidata notability: https://www.wikidata.org/wiki/Wikidata:Notability
- Salla Partners: https://partners.salla.com/
- Zid Partners: https://zid.sa/en/zid-partners
- ZATCA Solution Providers Directory: https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx
- Clutch methodology: https://clutch.co/methodology

Industry-reported:
- Search Engine Journal, Google's AI search guide (2026-05-15): https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/
- Seer Interactive, 87% of SearchGPT citations match Bing: https://www.seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results
- Ahrefs, AI assistants prefer fresher content (2025-07-28): https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/
- Ahrefs mentions vs backlinks (via secondary): https://www.radiantelephant.com/brand-mentions-vs-backlinks-ai-search/
- Semrush, Most-cited domains in AI: https://www.semrush.com/blog/most-cited-domains-ai/
- Profound, AI platform citation patterns: https://www.tryprofound.com/blog/ai-platform-citation-patterns
- Agenzy 2026 study: https://www.agenzy.lt/blog/which-sources-ai-engines-cite-2026
- LoudFace listicle study: https://www.loudface.co/blog/best-agencies-chatgpt-perplexity-citations-2026
- Agency ChatGPT test: https://toddmorourke.com/learn/how-chatgpt-picks-sources/
- BrightLocal local AI study: https://www.brightlocal.com/research/local-ai-visibility-study/ and https://www.brightlocal.com/blog/ai-search-using-listings-sources/
- Bing AI Performance report: https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/ and https://www.practicalecommerce.com/bings-improved-ai-performance-section
- Bing/IndexNow confirmed vs unconfirmed: https://eseospace.com/blog/bing-webmaster-tools-indexnow-ai-search/
- ChatGPT index debate: https://pressonify.ai/blog/how-to-get-cited-chatgpt-search-2026 and https://tibly.ai/glossary/oai-searchbot
- llms.txt status: https://ahrefs.com/blog/what-is-llms-txt/ and https://www.getpassionfruit.com/blog/should-i-create-an-llms.txt-file-google-s-2026-guidance-explained
- FAQ deprecation coverage: https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026
- GA4 AI traffic: https://www.lovesdata.com/blog/how-to-track-ai-traffic-ga4/ and https://discoveredlabs.com/blog/how-to-track-chatgpt-perplexity-and-ai-overviews-traffic-in-ga4-without-guessing
- Maroof to business.sa: https://noqta.tn/en/blog/maroof-wathq-api-business-verification-saudi-2026
- Google-Extended does not affect Search: https://seroundtable.com/google-extended-seo-36865.html
- Observed SERP domains (2026-10-16): goodfirms.co/ecommerce-development-companies/saudi-arabia, themanifest.com/sa/ecommerce-development/companies, techbehemoths.com, sendantech.com/en-SA/zatca-e-invoicing, ecosire.com, haraj.com.sa, khamsat.com, mostaql.com
