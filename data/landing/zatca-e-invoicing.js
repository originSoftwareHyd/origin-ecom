// ZATCA Phase 2 (Integration phase) service landing page. Facts verified 2026-10-16 against
// zatca.gov.sa, uqn.gov.sa and ZATCA's Detailed Guidelines for E-Invoicing (v2, May 2023).
// Wave 23 row: ZATCA's own news page could not be retrieved; it is sourced from EY's summary
// of Decision 1603-99-1446 and labelled as such in the table.
export default {
  slug: 'zatca-e-invoicing',
  kind: 'service',
  parentService: 'erp-solutions',
  formService: 'ERP & ZATCA Solutions',
  updated: '2026-10-16',
  published: '2026-10-16',

  metaTitle: 'ZATCA Phase 2 Integration for Wave 25 Businesses in KSA',
  metaDescription: "Wave 25 brings ZATCA Phase 2 to businesses above SAR 187,500 from 1 February 2027. We connect ERPNext, Odoo, custom systems and stores to Fatoora.",
  primaryKeyword: 'zatca phase 2 integration',
  secondaryKeywords: [
    'zatca wave 25',
    'zatca e-invoicing integration',
    'zatca phase 2 requirements',
    'zatca phase 2 deadline',
    'fatoora portal onboarding',
    'zatca integration erpnext',
    'zatca integration odoo',
    'zatca e invoicing software',
  ],
  arabicTerms: [
    'مرحلة الربط والتكامل',
    'الفاتورة الالكترونية المرحلة الثانية',
    'ربط الفوترة الإلكترونية المرحلة الثانية',
    'الربط مع زاتكا',
    'المجموعة 25 الفوترة الإلكترونية',
    'مراحل الربط مع زاتكا',
  ],

  eyebrow: 'ZATCA E-INVOICING / PHASE 2',
  h1: 'ZATCA Phase 2 integration,',
  h1Emphasis: 'live before your wave date.',
  intro: "ZATCA Phase 2 integration connects your invoicing system to ZATCA's Fatoora platform, so that B2B tax invoices are cleared before they reach the buyer and B2C simplified invoices are reported within 24 hours. We integrate ERPNext, Odoo, other ERPs, custom systems and online stores for Saudi businesses in Wave 25 (from 1 February 2027), businesses from earlier waves that are still not live, and integrations that keep failing.",
  cta: 'Book a ZATCA readiness check',
  whatsappText: 'Hello Origin Ecommerce, I need help with ZATCA Phase 2 integration. Our system is: ',

  keyFacts: [
    { value: 'SAR 187,500', label: 'Wave 25 VAT-able revenue threshold (any year 2022–2025)' },
    { value: '1 Feb 2027', label: 'Wave 25 integration date, ZATCA Decision 1448-99-238' },
    { value: '24 hours', label: 'Window to report a simplified (B2C) invoice to Fatoora' },
    { value: '6 months', label: "Minimum notice ZATCA gives each wave before its date" },
  ],

  sections: [
    {
      eyebrow: 'WHO MUST INTEGRATE',
      heading: 'Is your business in',
      emphasis: 'Wave 25?',
      body: [
        "On 24 July 2026 ZATCA set the criteria for Wave 25 of the Integration phase (مرحلة الربط والتكامل). It covers VAT-registered taxpayers whose revenue subject to VAT exceeded SAR 187,500 in any of 2022, 2023, 2024 or 2025. ZATCA Decision 1448-99-238, published in the Umm Al-Qura gazette, applies the obligation from 1 February 2027.",
        "The test is any single year, not your current turnover. A business that crossed SAR 187,500 once in 2022 and has shrunk since can still be in scope. This is also the first wave to count 2025 revenue.",
        "ZATCA notifies each targeted taxpayer directly, at least six months before its integration date. Treat the table below as a guide, and confirm your own wave and date in your ZATCA notification or with ZATCA itself.",
      ],
      table: {
        caption: 'Recent Phase 2 integration waves (as announced by ZATCA)',
        columns: ['Wave', 'VAT-able revenue above', 'In any of', 'Announced', 'Integrate by', 'Checked against'],
        rows: [
          ['21', 'SAR 1.25 million', '2022, 2023, 2024', '28 Feb 2025', '30 Nov 2025', 'ZATCA news release'],
          ['22', 'SAR 1 million', '2022, 2023, 2024', '21 Mar 2025', '31 Dec 2025', 'ZATCA news release'],
          ['23', 'SAR 750,000', '2022, 2023, 2024', '27 Jun 2025', '31 Mar 2026', 'EY summary of Decision 1603-99-1446 (ZATCA page not retrievable)'],
          ['24', 'SAR 375,000', '2022, 2023, 2024', '26 Sep 2025', '30 Jun 2026', 'ZATCA news release'],
          ['25', 'SAR 187,500', '2022, 2023, 2024, 2025', '24 Jul 2026', '1 Feb 2027', 'ZATCA news release and Umm Al-Qura gazette'],
        ],
        note: "Sources: ZATCA wave announcements, Umm Al-Qura Decision 1448-99-238, EY Tax News (Wave 23). ZATCA's release words Wave 25 as integration “by no later than 1 February 2027”; the gazette text says “starting from 1/2/2027”. Your notification is the date that applies to you. Checked 16 October 2026.",
      },
    },
    {
      eyebrow: 'WHAT PHASE 2 REQUIRES',
      heading: 'What “integration” actually',
      emphasis: 'means technically.',
      body: [
        "Phase 1 (since 4 December 2021) required electronic invoices with a QR code. Phase 2 adds a technical link to ZATCA, a strict data format and security features that most older systems were never built for. These are the requirements in ZATCA's own guidelines:",
      ],
      list: [
        "Onboarding: you log in to the Fatoora portal, request a one-time password (OTP) and enter it in your invoicing solution, which then obtains a Cryptographic Stamp Identifier (CSID). Every device issuing invoices under your VAT number must be onboarded.",
        "XML in ZATCA's format: invoices and credit/debit notes are generated as XML (or PDF/A-3 with the XML embedded), following ZATCA's XML Implementation Standard, which is based on UBL 2.1.",
        "Cryptographic stamp: your solution stamps each simplified invoice using its CSID. For standard tax invoices, ZATCA adds its own stamp when it clears the invoice.",
        "Phase 2 QR code: simplified invoices carry a QR code with nine tags in TLV/base64 format. For B2B tax invoices, ZATCA returns the QR code string at clearance.",
        "Invoice chaining: each invoice carries a unique UUID, a counter and the hash of the previous invoice, linking every invoice to the one before it. ZATCA also prohibits resetting the invoice counter.",
        "Arabic invoice data: under Article 53 of the VAT Implementing Regulations, the invoice content must be in Arabic. Other languages may appear alongside it.",
      ],
    },
    {
      eyebrow: 'CLEARANCE VS REPORTING',
      heading: 'B2B and B2C invoices',
      emphasis: 'follow different rules.',
      body: [
        "Most integration problems start here. Your system has to know, for every sale, which document type it is issuing and which API flow that document must take.",
      ],
      table: {
        caption: 'How ZATCA treats each invoice type in Phase 2',
        columns: ['', 'Standard tax invoice', 'Simplified tax invoice'],
        rows: [
          ['Usually issued for', 'Business-to-business (and government) sales', 'Business-to-consumer sales; B2B is optional only below SAR 1,000'],
          ['ZATCA process', 'Clearance: sent to Fatoora and validated before you share it', 'Reporting: shared with the customer first, then sent to Fatoora'],
          ['Timing', 'Real time, before the buyer receives it', 'Within 24 hours of issuance'],
          ['Who stamps it', 'ZATCA adds its stamp and QR code on clearance', 'Your solution stamps it with its CSID and adds the QR code'],
          ['Credit and debit notes', 'Cleared, like the invoice', 'Reported, like the invoice'],
        ],
        note: "Source: ZATCA, Detailed Guidelines for E-Invoicing, version 2 (May 2023), sections 2.15–2.16, 4.1–4.2 and 6.4.",
      },
    },
    {
      eyebrow: 'INTEGRATION PATHS',
      heading: 'Whatever runs your invoicing,',
      emphasis: 'there is a route to Fatoora.',
      list: [
        "ERPNext: Phase 2 is added through Frappe apps, including the free, open-source KSA Compliance app (LavaLoon) and a paid ZATCA app (ERPGulf), both listed on the Frappe Cloud Marketplace. We configure, test and onboard it, and fix print formats, tax templates and customer data so invoices pass validation. If you're choosing a new ERP, read [ERPNext vs Odoo for Saudi businesses](/guides/erpnext-vs-odoo-saudi-arabia).",
        "Odoo: Odoo's Saudi Arabia e-invoicing module (l10n_sa_edi) handles onboarding per sales journal, from the simulation portal through to production. We set up company and partner data correctly and resolve rejections, especially on customised databases.",
        "Other ERPs and accounting software: if your vendor already offers a Phase 2 connector, we help you configure and test it. If it doesn't, we build a connection between your system and Fatoora.",
        "Custom or legacy systems: we add a compliance layer that turns your invoices into ZATCA XML, signs them, sends them for clearance or reporting, stores the response and handles retries, without replacing the system your team knows.",
        "Online stores: if you sell on Salla, Zid, Shopify or WooCommerce, the hard question is which system issues the tax invoice. We cover that in [e-commerce to ERP and ZATCA integration](/ecommerce-erp-zatca-integration).",
      ],
    },
    {
      eyebrow: 'LATE OR FAILING',
      heading: 'Missed your wave, or stuck',
      emphasis: 'with rejected invoices?',
      dark: true,
      body: [
        "Waves 21 to 24 had dates between 30 November 2025 and 30 June 2026. If your business was notified for one of them and is still not live, the priority is to get onboarded and issuing compliant invoices quickly, then tidy up.",
        "Talk to your tax adviser about your position with ZATCA. We handle the system side.",
        "We also fix integrations that technically “went live” but don't work: invoices rejected for missing buyer address fields, warnings left unresolved, duplicate submissions, broken invoice chains after a restore, or devices that were never onboarded. ZATCA's guidelines state that warnings are accepted only temporarily and may become rejections later, so they are worth fixing now.",
      ],
    },
    {
      eyebrow: 'READINESS CHECKLIST',
      heading: 'Ten things to check',
      emphasis: 'before your integration date.',
      list: [
        "You have your ZATCA notification, and you know your wave and integration date.",
        "You have access to the Fatoora portal through your ZATCA (ERAD) credentials, and you know who in the business will request the OTPs.",
        "You know every system and device that issues invoices: ERP, POS terminals, online store, branch software, manual processes.",
        "Your system can produce ZATCA XML, sign it, generate the QR code and call the Fatoora APIs, or your vendor has confirmed in writing that it will.",
        "Your seller details are complete, including the full national address with building number.",
        "B2B customer records hold the VAT number and address details that standard tax invoices need.",
        "Credit notes and debit notes reference the original invoice, and they run through the same clearance or reporting flow.",
        "Invoice data and print formats show the required Arabic content.",
        "Someone owns monitoring: rejected invoices, warnings and failed submissions are reviewed daily, not at month end.",
        "You have tested end to end in ZATCA's simulation environment before switching to production.",
      ],
    },
    {
      eyebrow: 'HOW WE RUN IT',
      heading: 'A fixed path from assessment',
      emphasis: 'to clean submissions.',
      steps: [
        'Readiness check of systems, devices, data and deadline',
        'Choose the route: configure, connect or build',
        'Clean master data: addresses, VAT numbers, tax codes',
        'Test every invoice type in the simulation environment',
        'Onboard devices to production through the Fatoora portal',
        'Monitor submissions and hand over a runbook',
      ],
      body: [
        "The readiness check maps every point in your business that issues an invoice and every gap between what it produces today and what Phase 2 requires. You get a written scope and timeline before any build work starts.",
        "Testing covers standard and simplified invoices, credit and debit notes, zero-rated and exempt lines, and advance payments where you use them. After go-live we watch the first submissions with your finance team, so problems are fixed while they are still small. This is part of our wider [ERP and ZATCA solutions](/services/erp-solutions) service.",
      ],
    },
  ],

  faqs: [
    {
      q: 'How do I know if my business is in Wave 25?',
      a: "Your business is likely in Wave 25 if it is VAT-registered and its revenue subject to VAT exceeded SAR 187,500 in any one of 2022, 2023, 2024 or 2025. ZATCA notifies targeted taxpayers directly, so check your ZATCA notifications and the e-invoicing section of your ZATCA account. If anything is unclear, confirm with ZATCA or your tax adviser before planning around a date.",
    },
    {
      q: 'What is the ZATCA Phase 2 deadline for Wave 25?',
      a: "Wave 25 businesses must be integrated with Fatoora from 1 February 2027, under ZATCA Decision 1448-99-238 published in the Umm Al-Qura gazette. Onboarding, data clean-up and testing take time, and simulation testing should come before production, so start several weeks before that date rather than in the final days of January.",
    },
    {
      q: "What is the difference between clearance and reporting?",
      a: "Clearance applies to standard tax invoices, usually B2B: your system sends the invoice to Fatoora, ZATCA validates and stamps it, and only then do you share it with the buyer. Reporting applies to simplified invoices, usually B2C: you give the customer the invoice immediately and send the XML to Fatoora within 24 hours. Credit and debit notes follow the same route as the invoice they adjust.",
    },
    {
      q: 'Do I need to replace my accounting system to comply?',
      a: "Not always. If your current ERP or accounting software has a working Phase 2 connector, configuring and testing it is usually the fastest route. If it has none, a compliance layer can sit between your system and Fatoora. Replacing the system makes sense when it is already holding the business back. Rushing a full ERP migration against a ZATCA date adds risk.",
    },
    {
      q: 'Is “ZATCA-approved software” the same as being compliant?',
      a: "No. Compliance depends on how your solution is configured, onboarded and used, not only on which product you bought. ZATCA publishes a directory of solution providers and states that the list is not an approval of their solutions. A listed product can still produce rejected invoices if data, tax codes or devices are set up wrongly. We test your actual invoices against ZATCA's validation, and we don't describe ourselves as ZATCA-approved.",
    },
    {
      q: 'What happens if Fatoora is unavailable when we issue an invoice?',
      a: "ZATCA's guidelines describe what to do. For simplified invoices, your system keeps retrying at regular intervals until the report succeeds within the 24-hour window. For standard invoices, the system retries clearance, and during an extended outage you may share the uncleared invoice, keep evidence of your attempts and clear it once ZATCA is reachable. Your integration should handle this automatically.",
    },
  ],

  sources: [
    { label: 'ZATCA, Criteria for Wave 25 of the Integration Phase (news release, 24 July 2026)', url: 'https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx', accessed: '2026-10-16' },
    { label: 'ZATCA Decision 1448-99-238, Umm Al-Qura Gazette (Wave 25, from 1/2/2027)', url: 'https://www.uqn.gov.sa/decisions-and-regulations/4001455', accessed: '2026-10-16' },
    { label: 'ZATCA, Criteria for Wave 24 of E-invoicing (news release, 26 September 2025)', url: 'https://zatca.gov.sa/en/Pages/news-1426.aspx', accessed: '2026-10-16' },
    { label: 'ZATCA, Criteria for Wave 22 of the Integration Phase (news release, 21 March 2025)', url: 'https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-22-2025.aspx', accessed: '2026-10-16' },
    { label: 'ZATCA, Criteria for Wave 21 of the Integration Phase (news release, 28 February 2025)', url: 'https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-21-2025.aspx', accessed: '2026-10-16' },
    { label: 'EY Tax News, Saudi Arabia announces 23rd wave of Phase 2 e-invoicing integration (7 July 2025)', url: 'https://taxnews.ey.com/news/2025-1387-saudi-arabia-announces-23rd-wave-of-phase-2-e-invoicing-integration', accessed: '2026-10-16' },
    { label: 'EY Tax News, Saudi Arabia announces 25th wave of Phase 2 e-invoicing integration (10 August 2026)', url: 'https://taxnews.ey.com/news/2026-1705-saudi-arabia-announces-25th-wave-of-phase-2-e-invoicing-integration', accessed: '2026-10-16' },
    { label: 'ZATCA, E-invoicing roll-out phases', url: 'https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx', accessed: '2026-10-16' },
    { label: 'ZATCA, Detailed Guidelines for E-Invoicing, version 2 (May 2023)', url: 'https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf', accessed: '2026-10-16' },
    { label: 'ZATCA, Electronic Invoice XML Implementation Standard (UBL 2.1 validation rules)', url: 'https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf', accessed: '2026-10-16' },
    { label: 'ZATCA, E-invoicing Solution Providers Directory (disclaimer: not an approval)', url: 'https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx', accessed: '2026-10-16' },
    { label: 'Frappe Cloud Marketplace, KSA Compliance app (LavaLoon)', url: 'https://cloud.frappe.io/marketplace/apps/ksa_compliance', accessed: '2026-10-16' },
    { label: 'Frappe Cloud Marketplace, ZATCA Phase-2 app (ERPGulf)', url: 'https://cloud.frappe.io/marketplace/apps/zatca_erpgulf', accessed: '2026-10-16' },
    { label: 'Odoo documentation, Saudi Arabia fiscal localisation (e-invoicing onboarding)', url: 'https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/saudi_arabia.html', accessed: '2026-10-16' },
  ],

  related: ['/services/erp-solutions', '/ecommerce-erp-zatca-integration', '/guides/erpnext-vs-odoo-saudi-arabia'],
}
