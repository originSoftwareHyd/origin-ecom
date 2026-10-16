import { notFound } from 'next/navigation'
import LandingPage from '../../../components/landing/LandingPage'
import { getLanding, landingPath, servicePages } from '../../../data/landing'
import { buildMetadata } from '../../../lib/seo'

// Commercial landing pages (/zatca-e-invoicing, /salla-store-development, …). Static routes such as /contact
// take precedence over this segment, and unknown slugs 404 because params are fixed at build time.
export const dynamicParams = false
export function generateStaticParams() { return servicePages.map(page => ({ landing: page.slug })) }

export async function generateMetadata({ params }) {
  const page = getLanding((await params).landing)
  return page ? buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: landingPath(page) }) : {}
}

export default async function Page({ params }) {
  const page = getLanding((await params).landing)
  if (!page) notFound()
  return <LandingPage page={page} />
}
