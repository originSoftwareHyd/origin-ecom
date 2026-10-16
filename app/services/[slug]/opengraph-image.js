import { ogSize, renderOgImage } from '../../../lib/og'
import { getService, services } from '../../../data/services'

export const alt = 'Origin Ecommerce service in Saudi Arabia'
export const size = ogSize
export const contentType = 'image/png'

export function generateStaticParams() { return services.map(service => ({ slug: service.slug })) }

export default async function Image({ params }) {
  const { slug } = await params
  const service = getService(slug)
  return renderOgImage({ eyebrow: `ORIGIN ECOMMERCE · ${service?.shortLabel || 'SERVICES'}`, title: service?.metaTitle || 'Services in Saudi Arabia', subtitle: service?.description })
}
