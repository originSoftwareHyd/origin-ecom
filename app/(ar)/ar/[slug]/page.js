import { notFound } from 'next/navigation'
import LandingPage from '../../../../components/landing/LandingPage'
import { arPages, arPath, getArPage } from '../../../../data/landing-ar'
import { buildMetadata } from '../../../../lib/seo'

// Arabic landing pages (/ar/ecommerce-store-design, …), rendered by the shared landing template.
export const dynamicParams = false
export function generateStaticParams() { return arPages.map(page => ({ slug: page.slug })) }

export async function generateMetadata({ params }) {
  const page = getArPage((await params).slug)
  return page ? buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: arPath(page), locale: 'ar' }) : {}
}

export default async function Page({ params }) {
  const page = getArPage((await params).slug)
  if (!page) notFound()
  return <LandingPage page={page} locale="ar" />
}
