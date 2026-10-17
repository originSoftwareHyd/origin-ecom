// E-commerce website cost guide for Saudi Arabia. Market ranges are other providers' published
// figures (checked 2026-10-17) and are attributed, never presented as our prices. Platform plans
// and fees are reused from the Salla, Zid and Shopify landing pages (verified 2026-10-16).
// Published ranges disagree widely; the page says so rather than averaging them.
export default {
  slug: 'ecommerce-website-cost-saudi-arabia',
  kind: 'guide',
  parentService: 'ecommerce-development',
  formService: 'E-commerce Development',
  updated: '2026-10-17',
  published: '2026-10-17',

  metaTitle: 'E-commerce Website Cost in Saudi Arabia (2026 Guide)',
  metaDescription: 'What an online store really costs in Saudi Arabia: published SAR price ranges for Salla, Zid and custom builds, monthly running costs, hidden costs and how to compare quotes.',
  primaryKeyword: 'ecommerce website cost in saudi arabia',
  secondaryKeywords: [
    'cost of ecommerce website in saudi arabia',
    'online store cost saudi arabia',
    'salla store design price',
    'zid store design price',
    'ecommerce website development cost riyadh',
    'how much does an online store cost in ksa',
  ],
  arabicTerms: [
    'تكلفة تصميم متجر الكتروني',
    'سعر تصميم متجر الكتروني',
    'سعر تصميم متجر سلة',
    'تكلفة انشاء متجر الكتروني في السعودية',
    'كم تكلفة متجر الكتروني',
  ],

  eyebrow: 'COST GUIDE / SAUDI ARABIA',
  h1: 'What an e-commerce website costs',
  h1Emphasis: 'in Saudi Arabia.',
  intro: 'A Saudi online store can cost a few hundred riyals or well over SAR 100,000, depending mostly on one choice: a hosted platform such as Salla or Zid, or a custom build. Saudi providers publicly list custom Salla and Zid design from roughly SAR 2,500 to 7,000, and custom-coded stores from SAR 10,000 upwards. Running costs per order often matter more than the build.',
  cta: 'Get a scoped estimate',
  whatsappText: 'Hello Origin Ecommerce, I would like an estimate for an e-commerce website in Saudi Arabia.',

  keyFacts: [
    { value: 'SAR 2,500–6,000', label: 'Custom Salla design, as published by one Saudi provider (Jan 2026)' },
    { value: 'SAR 150–600', label: 'Salla Theme Store themes, per a Saudi agency guide (Mar 2026)' },
    { value: '15%', label: 'Standard VAT rate in Saudi Arabia' },
  ],

  sections: [
    {
      eyebrow: 'READ THIS FIRST',
      heading: 'Why published prices',
      emphasis: 'disagree so much.',
      body: [
        'Search for the cost of an online store in Saudi Arabia and you will find ranges from SAR 2,000 to over SAR 150,000. Most are written by agencies selling their own packages, and each one prices a different scope.',
        'We do not publish a fixed price either, because scope drives cost. What we can do is show what other providers publish, name the source and date, and explain what moves a quote up or down. Treat every figure here as a reference point, not a quote.',
      ],
    },
    {
      eyebrow: 'BUILD COST BY ROUTE',
      heading: 'Four routes,',
      emphasis: 'four price bands.',
      table: {
        caption: 'Published build-cost ranges for Saudi online stores (one-off, excluding platform subscription)',
        columns: ['Route', 'Published range', 'Who published it'],
        rows: [
          ['Salla Theme Store theme, self-installed', 'SAR 150–600 per theme', 'Mersal agency guide, updated Mar 2026'],
          ['Custom Salla store design', 'SAR 2,500–6,000', 'Masar Digital (Saudi provider), Jan 2026'],
          ['Custom Zid store design', 'SAR 3,000–7,000', 'Masar Digital (Saudi provider), Jan 2026'],
          ['WooCommerce store, custom design', 'SAR 7,000–12,000 (SAR 12,000–18,000 with SEO)', 'Masar Digital (Saudi provider), Jan 2026'],
          ['Custom-coded store', 'From SAR 10,000 to SAR 50,000+', 'Masar Digital (Saudi provider), Jan 2026'],
          ['Custom e-commerce development', 'SAR 80,000–160,000', 'Apptunix (international agency) Saudi cost guide, Mar 2026'],
        ],
        note: 'Sources listed below. These are other providers\' published figures, not Origin Ecommerce prices. They do not state whether VAT is included, and scope behind each figure differs. Checked 17 October 2026.',
      },
    },
    {
      eyebrow: 'RUNNING COSTS',
      heading: 'The monthly bill',
      emphasis: 'after launch.',
      body: [
        'A hosted platform charges a subscription. At time of writing, Salla Plus costs SAR 99 a month when bought in a browser and Zid Rise SAR 99 a month, with Zid Growth at SAR 299. Both platforms also have free starter plans with fewer features. Shopify publishes its plan prices on shopify.com.',
        'Payment fees grow with sales. Zid Pay starts from 1% + SAR 1 per transaction on Growth, excluding VAT. Shopify stores in the Kingdom pay a payment provider\'s fees plus Shopify\'s own fee of 2% on Basic, 1% on Grow and 0.6% on Advanced. BNPL providers such as Tabby and Tamara set their fees in your merchant agreement.',
        'Shipping is usually per parcel. ZidShip, for example, publishes branch drop-off rates from SAR 20 for the first 10 kg with SPL and SAR 23 with Aramex or SMSA, excluding VAT. Add paid apps, a domain and marketing to complete the picture.',
      ],
    },
    {
      eyebrow: 'WHAT MOVES THE PRICE',
      heading: 'Six things that',
      emphasis: 'change a quote most.',
      list: [
        'Platform route: adapting a theme on Salla or Zid costs far less than a custom theme, and a custom-coded store costs more again.',
        'Catalogue size and data quality: hundreds of products with variants, options and messy spreadsheets take real time to clean and import.',
        'Arabic and English: a store designed for both languages from the start costs more than one language, and much less than fixing a translated layout later.',
        'Migration: moving from another platform includes products, customers and redirects from every old URL that matters.',
        'Integrations: connecting the store to an ERP, accounting system, warehouse or marketplace is often the biggest single cost item.',
        'Compliance: ZATCA e-invoicing, store documentation and the business details Saudi rules require you to show.',
      ],
    },
    {
      eyebrow: 'HIDDEN COSTS',
      heading: 'What quotes',
      emphasis: 'often leave out.',
      list: [
        'ZATCA e-invoicing: Wave 25 of ZATCA\'s Phase 2 rollout covers businesses whose VAT-able revenue exceeded SAR 187,500 in any year from 2022 to 2025, from 1 February 2027. See [ZATCA Phase 2 integration](/zatca-e-invoicing).',
        'Getting orders into your ERP or accounting system, so stock, invoices and VAT reconcile. See [e-commerce, ERP and ZATCA integration](/ecommerce-erp-zatca-integration).',
        'Product photography and copywriting in Arabic and English, which many quotes assume you will supply.',
        'Payment provider approvals: Zid Pay, Tabby, Tamara and third-party Shopify gateways each review your business documents before you can take payments.',
        'VAT: the standard rate in Saudi Arabia is 15%, and published prices often do not say whether it is included.',
        'Ongoing support: theme updates, app changes and fixes after launch.',
      ],
    },
    {
      eyebrow: 'COMPARING QUOTES',
      heading: 'How to compare quotes',
      emphasis: 'like for like.',
      dark: true,
      steps: [
        'Write a one-page brief: products, languages, payments, integrations',
        'Ask each provider to price the same brief',
        'Ask what is excluded, including VAT',
        'Check who owns the store, domain and code',
        'Add three years of running costs',
        'Choose on total cost and fit, not headline price',
      ],
    },
  ],

  faqs: [
    {
      q: 'How much does an e-commerce website cost in Saudi Arabia?',
      a: 'It ranges from a few hundred riyals to over SAR 100,000. A Salla theme you install yourself can cost SAR 150–600, one Saudi provider publishes custom Salla design at SAR 2,500–6,000, and custom-coded stores start around SAR 10,000. An international agency\'s Saudi guide puts custom e-commerce development at SAR 80,000–160,000. Add platform subscriptions and per-order fees after launch.',
    },
    {
      q: 'How much does it cost to design a Salla store?',
      a: 'Published figures range from SAR 150–600 for a ready-made Theme Store theme to SAR 2,500–6,000 for a custom design, according to Saudi agency guides from early 2026. The Salla subscription is separate: Plus costs SAR 99 a month when bought in a browser. Catalogue size, migration and integrations move the price most, so ask for a quote against a written brief.',
    },
    {
      q: 'Is a custom-built store better than Salla or Zid?',
      a: 'Usually not for a Saudi-only store with a standard catalogue. Salla and Zid include hosting, security, local payments, carriers and ZATCA tools, so you pay less to build and maintain. A custom build makes sense when you need complex B2B pricing, unusual checkout logic or deep integration that a hosted platform cannot support. Our Salla vs Zid vs Shopify guide helps you choose a platform.',
    },
    {
      q: 'What are the monthly costs of running an online store in Saudi Arabia?',
      a: 'Expect a platform subscription, payment fees per order, shipping per parcel and any paid apps. At time of writing Salla Plus and Zid Rise each cost SAR 99 a month, Zid Pay starts from 1% + SAR 1 per transaction on Growth, and ZidShip publishes drop-off rates from SAR 20 a parcel. Marketing usually becomes the largest monthly cost once the store is live.',
    },
    {
      q: 'Why are some store design quotes so cheap?',
      a: 'Very low quotes usually cover installing a ready-made theme and adding a few products, without custom design, data cleaning, payment testing, SEO or redirects. That can be enough for a small first store. Check what is excluded, whether VAT is included, and who will own the store account, domain and content, before comparing price alone.',
    },
    {
      q: 'Why don\'t you publish your own prices?',
      a: 'Because two stores that look similar can need very different work, and a fixed price would either overcharge simple projects or cut corners on complex ones. We quote after a short scoping call against a written brief, list what is included and excluded, and state whether VAT is included. You can use the same brief to compare other providers.',
    },
  ],

  sources: [
    { label: 'Masar Digital: E-commerce store design prices guide 2026 (Arabic, published 4 Jan 2026)', url: 'https://blog.masardigital.com.sa/%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9/', accessed: '2026-10-17' },
    { label: 'Mersal: Cost of creating a Salla store 2026 (Arabic, updated 11 Mar 2026)', url: 'https://mersalagency.com/%D8%AA%D9%83%D9%84%D9%81%D8%A9-%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%D9%85%D8%AA%D8%AC%D8%B1-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-%D8%B3%D9%84%D8%A9/', accessed: '2026-10-17' },
    { label: 'Apptunix: Web development cost in Saudi Arabia (10 Mar 2026)', url: 'https://www.apptunix.com/blog/web-development-cost-saudi-arabia/', accessed: '2026-10-17' },
    { label: 'Salla Help Centre: Salla plan prices when upgrading from mobile (Arabic, updated Aug 2026)', url: 'https://help.salla.sa/article/%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A8%D8%A7%D9%82%D8%A7%D8%AA-%D8%B3%D9%84%D8%A9-%D8%B9%D9%84%D9%89-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81/c4t9zj8cnotfaa1a2opd8n0f', accessed: '2026-10-16' },
    { label: 'Zid: Pricing and plan comparison', url: 'https://zid.sa/en/pricing/', accessed: '2026-10-16' },
    { label: 'Zid: Payments (Zid Pay fees)', url: 'https://zid.sa/en/solutions/payments/', accessed: '2026-10-16' },
    { label: 'Zid: Shipping (ZidShip carriers and rates)', url: 'https://zid.sa/en/solutions/shipping/', accessed: '2026-10-16' },
    { label: 'Shopify: Pricing (third-party payment provider fees by plan)', url: 'https://www.shopify.com/pricing', accessed: '2026-10-16' },
    { label: 'ZATCA Decision 1448-99-238, Umm Al-Qura Gazette (Wave 25, from 1/2/2027)', url: 'https://www.uqn.gov.sa/decisions-and-regulations/4001455', accessed: '2026-10-16' },
    { label: 'ZATCA: VAT Implementing Regulation amendments (15% standard rate)', url: 'https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Amendments-to-the-Implementing-Regulation-of-(VAT).PDF', accessed: '2026-10-16' },
  ],

  related: ['/services/ecommerce-development', '/guides/salla-vs-zid-vs-shopify', '/salla-store-development', '/website-consulting'],
}
