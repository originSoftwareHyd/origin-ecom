# Origin Ecommerce — Website

Next.js 15 (App Router) marketing site for **Origin Ecommerce**, a digital commerce and technology partner for businesses in Saudi Arabia: e-commerce development, Arabic–English websites, mobile apps, ERPNext with ZATCA e-invoicing, AI automation, and SEO and performance marketing.

The SEO / GEO / AEO strategy, keyword map and **launch checklist** are in [`docs/SEO-STRATEGY.md`](docs/SEO-STRATEGY.md).

## Architecture

- `app/` — routes, metadata, `sitemap.js`, `robots.js`, `manifest.js`, OG images, `/llms.txt`, `/logo.png`
- `components/` — presentation components (`common/Faq`, `common/ConsultCta`, `seo/JsonLd`, …)
- `config/business.config.js` — **single source of truth for business identity (NAP)**; feeds copy, schema, sitemap and llms.txt
- `data/` — site copy, services (incl. FAQs and Arabic terms), solution blueprints
- `lib/seo.js` — metadata builder and JSON-LD schema helpers
- `lib/api/` — client API layer for the contact form

## Routes

| Route | Indexed | Purpose |
|---|---|---|
| `/` | yes | Home |
| `/services`, `/services/[slug]` | yes | Service hub + 7 service pages |
| `/website-consulting` | yes | Free consultation landing page |
| `/contact` | yes | Contact + enquiry form |
| `/website-development-details-form`, `/digital-marketing-inquiry` | no | Form-only enquiry pages |
| `/portfolio`, `/portfolio/[slug]` | no (until real case studies) | Solution blueprints |

## Setup

```bash
npm install
cp .env.example .env.local   # fill in real business details
npm run dev
```

Production: `npm run build && npm start`.

## Contact form

Without configuration, submitting the form opens a pre-filled email to `NEXT_PUBLIC_CONTACT_EMAIL`. To post enquiries to a CRM or automation tool, set `NEXT_PUBLIC_ENABLE_CONTACT_FORM=true`, `NEXT_PUBLIC_API_BASE_URL=/api` and `CONTACT_WEBHOOK_URL`.

On Hostinger (`npm run build:static`, upload `dist/`), the form is enabled automatically and `deploy/contact.php` emails each enquiry to `info@originsoftwares.com`, with the visitor's address as Reply-To.
