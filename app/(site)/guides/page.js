import Link from 'next/link'
import Arrow from '../../../components/common/Arrow'
import ConsultCta from '../../../components/common/ConsultCta'
import JsonLd from '../../../components/seo/JsonLd'
import { guides, landingPath, servicePages } from '../../../data/landing'
import { absoluteUrl, breadcrumbSchema, buildMetadata, webPageSchema } from '../../../lib/seo'

const title = 'Guides for Saudi E-commerce, ERP & ZATCA'
const description = 'Independent, sourced guides for Saudi businesses: choosing Salla, Zid or Shopify, what an online store really costs, ERPNext vs Odoo and ZATCA e-invoicing.'

export const metadata = buildMetadata({ title, description, path: '/guides' })

function Card({ page, index }) {
  return <Link href={landingPath(page)} className="service-page-card"><span>{String(index + 1).padStart(2, '0')}</span><small>{page.kind === 'guide' ? 'GUIDE' : 'SERVICE'}</small><h2>{page.metaTitle}</h2><p>{page.intro}</p><b>{page.kind === 'guide' ? 'Read the guide' : 'See how we help'} <Arrow /></b></Link>
}

export default function GuidesPage() {
  return <main>
    <JsonLd items={[webPageSchema({ path: '/guides', title, description, type: 'CollectionPage' }), breadcrumbSchema([{ name: 'Guides', path: '/guides' }]), { '@type': 'ItemList', name: title, itemListElement: [...guides, ...servicePages].map((page, i) => ({ '@type': 'ListItem', position: i + 1, url: absoluteUrl(landingPath(page)), name: page.metaTitle })) }]} />
    <section className="page-hero"><span className="eyebrow">ORIGIN ECOMMERCE / GUIDES</span><h1>Make the right call <em>before you spend.</em></h1><p>Plain-language, sourced guides for Saudi business owners and finance teams choosing an e-commerce platform, budgeting a store, or preparing for ZATCA e-invoicing. Each guide lists its sources and the date it was last checked.</p></section>
    <section className="services-page-grid">{guides.map((page, i) => <Card key={page.slug} page={page} index={i} />)}</section>
    <section className="page-hero guides-sub"><span className="eyebrow">SPECIALIST SERVICES</span><h2>Ready to act on it?</h2></section>
    <section className="services-page-grid">{servicePages.map((page, i) => <Card key={page.slug} page={page} index={i} />)}</section>
    <ConsultCta title="Not sure which guide applies to you?" text="Tell us about your business and we will point you to the right platform, budget and next step in a free consultation." />
  </main>
}
