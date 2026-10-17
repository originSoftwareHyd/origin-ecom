// Salla vs Zid vs Shopify decision guide for Saudi merchants. Every platform fact here is reused
// from the Salla, Zid and Shopify landing pages (verified 2026-10-16 on the platforms' own pages);
// Salla Pro pricing is third-party reported and flagged as such. No platform-specific transaction
// fees are quoted for Salla because its payment fee page was not reachable for verification.
export default {
  slug: 'salla-vs-zid-vs-shopify',
  kind: 'guide',
  parentService: 'ecommerce-development',
  formService: 'E-commerce Development',
  updated: '2026-10-17',
  published: '2026-10-17',

  metaTitle: 'Salla vs Zid vs Shopify: Which Suits a Saudi Store?',
  metaDescription: 'Salla, Zid and Shopify compared for Saudi merchants: plans, payment fees, mada and BNPL, shipping, branches, ZATCA, Arabic and when each platform is the right call.',
  primaryKeyword: 'salla vs zid vs shopify',
  secondaryKeywords: [
    'salla vs zid',
    'salla vs shopify',
    'zid vs shopify',
    'best ecommerce platform in saudi arabia',
    'salla or zid which is better',
    'shopify vs salla saudi arabia',
  ],
  arabicTerms: [
    'سلة او زد',
    'الفرق بين سلة وزد',
    'افضل منصة متجر الكتروني في السعودية',
    'سلة ام شوبيفاي',
    'مقارنة بين سلة وزد',
  ],

  eyebrow: 'PLATFORM GUIDE / SAUDI ARABIA',
  h1: 'Salla vs Zid vs Shopify',
  h1Emphasis: 'for a Saudi store.',
  intro: 'For most merchants selling only inside Saudi Arabia, Salla or Zid is the simpler and cheaper choice, because local payments, carriers and ZATCA tools are built in. Zid stands out for shops with physical branches. Shopify suits brands selling across the GCC or internationally, but in the Kingdom it needs third-party payment providers and charges an extra fee on them.',
  cta: 'Get a platform recommendation',
  whatsappText: 'Hello Origin Ecommerce, I am choosing between Salla, Zid and Shopify for a store in Saudi Arabia. Can you advise?',

  keyFacts: [
    { value: 'SAR 99/mo', label: 'Entry paid plan on Salla (Plus, browser) and Zid (Rise), Oct 2026' },
    { value: 'Not available', label: 'Shopify Payments for Saudi-based stores' },
    { value: '2% / 1% / 0.6%', label: 'Shopify fee on third-party gateways: Basic / Grow / Advanced' },
  ],

  sections: [
    {
      eyebrow: 'READ THIS FIRST',
      heading: 'Our disclosure,',
      emphasis: 'and the short answer.',
      body: [
        'We build stores on all three platforms, so we have no reason to push one. We checked each fact below against the platform\'s own pages and dated it, because plans and fees change often.',
        'The short answer: choose Salla if you sell online in the Kingdom and want the widest local ecosystem of themes, apps and service providers. Choose Zid if you also sell in physical branches and want one stock count. Choose Shopify if you sell across borders or already run Shopify elsewhere, and accept extra payment setup and fees.',
      ],
    },
    {
      eyebrow: 'SIDE BY SIDE',
      heading: 'The three platforms',
      emphasis: 'at a glance.',
      table: {
        caption: 'Salla vs Zid vs Shopify for Saudi merchants (at time of writing, October 2026)',
        columns: ['', 'Salla', 'Zid', 'Shopify'],
        rows: [
          ['Plans', 'Basic (free), Plus SAR 99/month in a browser, Pro SAR 299/month (third-party reported), Special on request', 'Starter (free), Rise SAR 99/month, Growth SAR 299/month, Professional on request', 'Priced per plan on shopify.com; check the page from Saudi Arabia for current prices'],
          ['Card payments and mada', 'Built in: mada and Visa/Mastercard from payment settings; Apple Pay switches on automatically', 'Zid Pay: per-transaction fee by plan, from 1% + SAR 1 on Growth', 'Shopify Payments unavailable; third-party providers such as Tap, plus a Shopify fee of 0.2–2%'],
          ['Buy now, pay later', 'Tabby and Tamara from the payments page', 'Tamara, Tabby, MISPay, Emkan and Madfu', 'Tabby and Tamara through their Shopify apps'],
          ['Shipping', 'Saudi Post, Aramex and SMSA domestically; DHL Express internationally', 'ZidShip: several carriers under one contract, from SAR 20 for the first 10 kg', 'Through carrier apps and integrations you set up'],
          ['Physical branches', 'Not covered in this guide; confirm with Salla', 'Zid cashier shares stock with the online store; free with paid plans, per Zid', 'Shopify POS (not assessed here for Saudi use)'],
          ['ZATCA e-invoicing', 'Salla ZATCA integration app', 'Native connection to ZATCA\'s FATOORA platform', 'No built-in Saudi e-invoicing; needs an external ZATCA-compliant system'],
          ['Arabic storefront', 'Arabic-first platform', 'Arabic-first platform', 'RTL supported on Horizon themes; check other themes'],
          ['Selling outside KSA', 'Possible; built around Saudi commerce', 'Possible; built around Saudi commerce', 'Strongest: Markets, country domains and automatic hreflang'],
        ],
        note: 'Sources: Salla Help Centre and a third-party Salla pricing summary (Sep 2026); zid.sa pricing, payments, shipping and POS pages; Shopify pricing, Payments supported countries and Markets documentation; Tap, Tabby and Tamara documentation. Confirm current prices and VAT treatment with each platform before subscribing.',
      },
    },
    {
      eyebrow: 'RUNNING COSTS',
      heading: 'Compare what you pay',
      emphasis: 'per order, not per month.',
      body: [
        'Salla and Zid both start paid plans at SAR 99 a month, so the subscription rarely decides the question. Payment, shipping and app fees grow with every order and usually matter more.',
        'On Zid, Zid Pay charges a per-transaction fee that depends on the plan and payment method, starting from 1% + SAR 1 on Growth, with VAT excluded. On Salla, check the payment fees shown in your own dashboard for your plan. On Shopify, Saudi stores pay the payment provider\'s fees and then Shopify\'s own fee on top: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus.',
        'To compare fairly, take last year\'s order count and average basket, then add subscription, payment, shipping and paid apps for each platform. Our [e-commerce website cost guide](/guides/ecommerce-website-cost-saudi-arabia) covers the build side of the budget.',
      ],
    },
    {
      eyebrow: 'SALLA',
      heading: 'When Salla',
      emphasis: 'is the better choice.',
      list: [
        'You sell online in Saudi Arabia and want payments, carriers and ZATCA e-invoicing switched on from one dashboard.',
        'You want a large choice of Theme Store themes, apps and Saudi service providers who know the platform.',
        'You plan a custom theme: Salla\'s Twilight theme engine allows a fully custom storefront.',
        'You are moving from Shopify or Zid: Salla\'s built-in importer brings physical products across.',
        'Watch out: you need an active commercial registration or a freelance document, and the freelance document is open to Saudi citizens only.',
      ],
      body: [
        'See [Salla store design and development](/salla-store-development) for what a proper Salla setup involves.',
      ],
    },
    {
      eyebrow: 'ZID',
      heading: 'When Zid',
      emphasis: 'is the better choice.',
      list: [
        'You run one or more physical branches and want online and in-store stock in one count through the Zid cashier.',
        'You want shipping through one contract with several carriers, paid from your Zid wallet, rather than an account with each.',
        'You want marketplace reach through Zid\'s Mazeed marketplace alongside your own store.',
        'You need CSS customisation and invoice and tax settings: Zid lists these from the Growth plan.',
        'Watch out: for an online-only store, compare Zid\'s fees and themes with Salla\'s carefully, because the gap is often small.',
      ],
      body: [
        'See [Zid store design and setup](/zid-store-development) for branches, Zid Pay and migration from Salla.',
      ],
    },
    {
      eyebrow: 'SHOPIFY',
      heading: 'When Shopify',
      emphasis: 'is the better choice.',
      list: [
        'You sell across the GCC or internationally and want country-specific domains, languages and pricing from one store with Shopify Markets.',
        'Your brand already runs Shopify in another country, or you need a specific app from Shopify\'s global ecosystem.',
        'Your company has a UAE entity, where Shopify Payments is available.',
        'Watch out: multi-currency checkout needs Shopify Payments, so a Saudi store using other providers processes orders in its default currency.',
        'Watch out: ZATCA e-invoicing, Saudi carriers and the national address all need extra apps or integrations.',
      ],
      body: [
        'See [Shopify development in Saudi Arabia](/shopify-development-saudi-arabia) for gateways, Arabic themes and migration.',
      ],
    },
    {
      eyebrow: 'BEFORE YOU DECIDE',
      heading: 'Questions that settle it',
      emphasis: 'in most cases.',
      dark: true,
      list: [
        'Where are your customers? Saudi-only points to Salla or Zid; several countries point to Shopify.',
        'Do you have shops or branches? If yes, test the Zid cashier first.',
        'Does your legal entity fit? Check the registration documents each platform and payment provider accepts.',
        'Where do orders go after checkout? If they must reach an ERP or accounting system, plan that now with [e-commerce, ERP and ZATCA integration](/ecommerce-erp-zatca-integration).',
        'Can you leave later? All three let you export products and customers, so switching is possible but takes planning and redirects.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Which is better in Saudi Arabia, Salla or Zid?',
      a: 'Neither is better for everyone. Zid is the stronger choice if you sell in physical branches, because its cashier shares stock with your online store, or if you want shipping through one contract. Salla suits online-only merchants who want the widest choice of themes, apps and local service providers. Both start paid plans at SAR 99 a month, so compare payment fees and features for your order volume.',
    },
    {
      q: 'Is Shopify a good choice for a Saudi store?',
      a: 'Shopify is a good choice if you sell across the GCC or internationally, but it costs more to run in the Kingdom. Shopify Payments is not available to Saudi-based stores, so you use providers such as Tap, Tabby and Tamara, and Shopify adds its own fee of 0.2% to 2% per transaction depending on plan. ZATCA e-invoicing and Saudi shipping also need extra setup.',
    },
    {
      q: 'Which platform is cheapest for a small Saudi store?',
      a: 'Salla and Zid both have free starter plans and paid plans from SAR 99 a month, so either is usually cheaper than Shopify for a Saudi-only store. The free plans are limited: Zid\'s Starter, for example, offers bank transfer and cash on delivery only. Compare the plan you would actually need, plus payment fees per order, rather than the headline price.',
    },
    {
      q: 'Do Salla, Zid and Shopify support ZATCA e-invoicing?',
      a: 'Salla and Zid do through built-in tools: Salla has a ZATCA integration app and Zid connects natively to ZATCA\'s FATOORA platform, each activated with a one-time code from the ZATCA portal. Shopify has no built-in Saudi e-invoicing, so order data needs to reach an external ZATCA-compliant system. If you also run an ERP, invoices usually need to reach it too.',
    },
    {
      q: 'Can I move my store between these platforms later?',
      a: 'Yes. Salla has a built-in importer for Shopify and Zid products, Zid documents moving from Salla through CSV or Excel exports, and Shopify supports product and customer imports. Plan redirects from your old URLs so search rankings carry over, and test payments and checkout before switching your domain. Order history and some custom fields may need special handling.',
    },
    {
      q: 'Which platform handles Arabic best?',
      a: 'Salla and Zid are Saudi platforms built Arabic-first, so their dashboards and storefronts handle right-to-left layouts by default. Shopify supports Arabic on its Horizon family of themes, but Shopify advises confirming right-to-left support for any other theme, and product URLs cannot be translated. Whichever you choose, write Arabic copy natively rather than translating it.',
    },
  ],

  sources: [
    { label: 'Salla Help Centre: Choose the right Salla plan for your business', url: 'https://help.salla.sa/en/article/manage-your-store-package/rhzl2dh5f5f9uz0qo813nttb', accessed: '2026-10-16' },
    { label: 'Salla Help Centre: Salla plan prices when upgrading from mobile (Arabic, updated Aug 2026)', url: 'https://help.salla.sa/article/%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A8%D8%A7%D9%82%D8%A7%D8%AA-%D8%B3%D9%84%D8%A9-%D8%B9%D9%84%D9%89-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81/c4t9zj8cnotfaa1a2opd8n0f', accessed: '2026-10-16' },
    { label: 'RankX SEO: Salla prices 2026 (third-party summary, updated 7 Sep 2026)', url: 'https://rankxseo.com/blog/%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1-%D8%B3%D9%84%D8%A9-%D9%88%D8%B1%D8%B3%D9%88%D9%85-%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83/', accessed: '2026-10-16' },
    { label: 'Salla Help Centre: Manage payment methods and electronic payments', url: 'https://help.salla.sa/en/article/manage-payment-methods/dtdojcntv3f4lwqzj4h0jvij', accessed: '2026-10-16' },
    { label: 'Salla: Shipping policies (Saudi Post, Aramex, SMSA, DHL Express)', url: 'https://salla.com/en/shipping/', accessed: '2026-10-16' },
    { label: 'Salla Help Centre: ZATCA integration', url: 'https://help.salla.sa/en/article/zatca-integration-zakat-tax-and-customs-authority/t0kf3e7l4skv6raa7b9yq2ov', accessed: '2026-10-16' },
    { label: 'Salla Help Centre: Import products from other platforms', url: 'https://help.salla.sa/en/article/import-products-from-other-platforms/mtdg1com53fnlfgt14twklrm', accessed: '2026-10-16' },
    { label: 'Salla Help Centre: How to get a commercial registration online', url: 'https://help.salla.sa/en/article/get-commercial-registration/dabogzkc3oi967ha6xclbgup', accessed: '2026-10-16' },
    { label: 'Zid: Pricing and plan comparison', url: 'https://zid.sa/en/pricing/', accessed: '2026-10-16' },
    { label: 'Zid: Payments (Zid Pay fees and instalment partners)', url: 'https://zid.sa/en/solutions/payments/', accessed: '2026-10-16' },
    { label: 'Zid: Shipping (ZidShip carriers and rates)', url: 'https://zid.sa/en/solutions/shipping/', accessed: '2026-10-16' },
    { label: 'Zid: Point of sale (Zid cashier)', url: 'https://zid.sa/en/solutions/pos/', accessed: '2026-10-16' },
    { label: 'Zid Help Centre: Connecting with ZATCA\'s FATOORA platform (Arabic)', url: 'https://help.zid.sa/zatca-integration/', accessed: '2026-10-16' },
    { label: 'Zid Help Centre: Moving your store from Salla to Zid (Arabic)', url: 'https://help.zid.sa/transfer-from-salla-to-zid/', accessed: '2026-10-16' },
    { label: 'Shopify Help Centre: Shopify Payments supported countries', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries', accessed: '2026-10-16' },
    { label: 'Shopify: Pricing (third-party payment provider fees by plan)', url: 'https://www.shopify.com/pricing', accessed: '2026-10-16' },
    { label: 'Shopify Help Centre: Markets requirements and considerations', url: 'https://help.shopify.com/en/manual/markets/getting-started/requirements-and-considerations', accessed: '2026-10-16' },
    { label: 'Shopify Help Centre: Localization and translation (RTL support in Horizon themes)', url: 'https://help.shopify.com/en/manual/international/localization-and-translation', accessed: '2026-10-16' },
    { label: 'Tap Payments: Shopify plugins', url: 'https://www.tap.company/en-us/products/shopify', accessed: '2026-10-16' },
    { label: 'Tabby Docs: Shopify plugin installation', url: 'https://docs.tabby.ai/e-commerce-platforms/shopify/shopify-plugin-installation', accessed: '2026-10-16' },
    { label: 'Tamara: Shopify payment app for Saudi merchants', url: 'https://tamara.co/en-sa/plugins/shopify', accessed: '2026-10-16' },
  ],

  related: ['/salla-store-development', '/zid-store-development', '/shopify-development-saudi-arabia', '/guides/ecommerce-website-cost-saudi-arabia'],
}
