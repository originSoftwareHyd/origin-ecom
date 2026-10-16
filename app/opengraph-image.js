import { ogSize, renderOgImage } from '../lib/og'

export const alt = 'Origin Ecommerce: e-commerce, web, ERP and AI solutions for Saudi businesses'
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({ title: 'E-commerce, web & AI solutions that grow Saudi businesses.', subtitle: 'Salla · Zid · Shopify · Bilingual websites · Apps · ERPNext & ZATCA · SEO' })
}
