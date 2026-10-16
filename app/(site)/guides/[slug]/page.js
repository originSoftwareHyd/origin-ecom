import { notFound } from 'next/navigation'
import LandingPage from '../../../../components/landing/LandingPage'
import { getGuide, guides, landingPath } from '../../../../data/landing'
import { buildMetadata } from '../../../../lib/seo'

export const dynamicParams = false
export function generateStaticParams() { return guides.map(page => ({ slug: page.slug })) }

export async function generateMetadata({ params }) {
  const page = getGuide((await params).slug)
  return page ? buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: landingPath(page), ogType: 'article' }) : {}
}

export default async function Page({ params }) {
  const page = getGuide((await params).slug)
  if (!page) notFound()
  return <LandingPage page={page} />
}
