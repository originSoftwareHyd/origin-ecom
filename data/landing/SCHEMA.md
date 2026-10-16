# Landing page data format

Each landing page is one file in `data/landing/<slug>.js` that `export default`s an object. Pages render at
`/<slug>` (kind `service`) or `/guides/<slug>` (kind `guide`) through one shared template, so content is data only.

```js
export default {
  slug: 'zatca-e-invoicing',            // URL segment, lowercase-hyphenated, keyword-led, no stop words
  kind: 'service',                      // 'service' = commercial landing page (/<slug>), 'guide' = decision/education page (/guides/<slug>)
  parentService: 'erp-solutions',       // slug from data/services.js this page belongs to (breadcrumb + internal links)
  formService: 'ERP & ZATCA Solutions', // value pre-selected in the enquiry form (a services.js title, or 'Not sure yet')
  updated: '2026-10-16',                // ISO date of the last material content change (drives dateModified + visible "Updated")
  published: '2026-10-16',

  metaTitle: 'ZATCA Phase 2 E-invoicing Integration in Saudi Arabia', // ≤ 60 chars, primary keyword first, no brand (template appends it)
  metaDescription: '…',                 // 140–155 chars, states the outcome + a reason to click
  primaryKeyword: 'zatca phase 2 integration',  // for documentation/keyword map only, never rendered
  secondaryKeywords: ['…'],
  arabicTerms: ['…'],                   // natural Saudi Arabic search phrases; rendered as an RTL chip list + Service alternateName

  eyebrow: 'ERP & ZATCA / SAUDI ARABIA', // short uppercase label above the H1
  h1: 'ZATCA Phase 2 integration,',      // first part of the H1
  h1Emphasis: 'done before your wave deadline.', // second part, shown in brand green
  intro: '…',                           // 45–70 words, answer-first: what it is, who it's for, the outcome. Snippet/AI-citation target.
  cta: 'Book a ZATCA readiness check',  // primary button label (outcome-led)
  whatsappText: 'Hello Origin Ecommerce, …', // pre-filled WhatsApp message

  keyFacts: [                           // optional, 2–4 items. VERIFIED facts only, each must also appear in `sources`.
    { value: 'SAR 187,500', label: 'Wave 25 revenue threshold' },
  ],

  sections: [                           // 4–8 sections, each with a distinct job. Order = reading order.
    {
      eyebrow: 'WHO MUST INTEGRATE',      // optional uppercase label
      heading: 'Is your business in',     // H2 text
      emphasis: 'Wave 25?',               // optional, green second half of the H2
      body: ['Paragraph…', 'Paragraph with an [internal link](/services/erp-solutions)…'], // optional; [text](url) links are supported, nothing else
      list: ['…'],                        // optional bullet list (rendered as numbered rows)
      steps: ['…'],                       // optional ordered process (rendered as a step strip, 3–6 items, ≤ 12 words each)
      table: {                            // optional comparison/data table
        caption: '…',
        columns: ['Wave', 'Threshold', 'Integration from'],
        rows: [['Wave 24', 'SAR 375,000', '30 Jun 2026']],
        note: 'Source: …',
      },
      dark: false,                        // optional, renders the section on the dark band (use for at most one section)
    },
  ],

  faqs: [{ q: '…?', a: '…' }],           // 4–7 real buyer questions, answer-first (first sentence answers it), 40–90 words each
  sources: [{ label: 'ZATCA Decision 1448-99-238, Umm Al-Qura Gazette', url: 'https://…', accessed: '2026-10-16' }],
  related: ['/services/erp-solutions', '/guides/erpnext-vs-odoo-saudi-arabia'], // 2–4 internal paths that exist (see list below)
}
```

## Content rules (non-negotiable)

- **No fabrication.** No invented statistics, client names, case results, reviews, awards, partner statuses, team sizes or years
  in business. Origin Ecommerce is new and has no published case studies. Do not say "ZATCA-approved", "certified",
  "official partner", "leading", "#1" or "trusted by X".
- **Our prices are unknown.** Never state Origin Ecommerce prices. Market price ranges are allowed only when attributed
  ("Saudi providers publicly list…, Oct 2026") and listed in `sources`.
- **Every factual claim about laws, deadlines, platforms, fees or market data** must be verifiable from a source in `sources`
  (official sources first: zatca.gov.sa, uqn.gov.sa, mc.gov.sa, sama.gov.sa, salla.sa, zid.sa, shopify.com, frappe.io, odoo.com).
  If a fact could not be verified, leave it out or phrase it as something to confirm.
- **Distinct intent.** Each page answers one search intent. Don't repeat another page's content; link to it instead.
- **Voice.** British English (matches the site), plain and specific, confident without hype. Short paragraphs (≤ 3 sentences).
  Speak to Saudi business owners, finance managers and e-commerce managers. Use "Saudi Arabia", "the Kingdom", "KSA" naturally.
- **Arabic terms** must be the phrases Saudis actually search (see docs/research/demand-and-market.md), not translations.
- **Answer-first.** The intro and every FAQ answer begin with the direct answer.

## Internal paths that exist (for `related` and inline links)

`/`, `/services`, `/services/ecommerce-development`, `/services/web-development`, `/services/mobile-app-development`,
`/services/erp-solutions`, `/services/digital-marketing`, `/services/ai-solutions`, `/services/software-development`,
`/website-consulting`, `/contact`, and the landing pages being built in this batch:
`/zatca-e-invoicing`, `/ecommerce-erp-zatca-integration`, `/salla-store-development`, `/zid-store-development`,
`/shopify-development-saudi-arabia`, `/guides/salla-vs-zid-vs-shopify`, `/guides/ecommerce-website-cost-saudi-arabia`,
`/guides/erpnext-vs-odoo-saudi-arabia`.
