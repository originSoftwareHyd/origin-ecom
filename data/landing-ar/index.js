// Registry of Arabic (ar-SA) pages, served under /ar. Same data format as data/landing (SCHEMA.md);
// each page's English equivalent is declared in lib/alternates.js for hreflang.
// Arabic copy is written natively for Saudi searchers, not translated; have a native speaker review edits.
import ecommerceStoreDesign from './ecommerce-store-design'
import sallaStoreDesign from './salla-store-design'
import zatcaEInvoicing from './zatca-e-invoicing'
import { landingPages, landingPath } from '../landing'
import { services } from '../services'

export const arPages = [ecommerceStoreDesign, sallaStoreDesign, zatcaEInvoicing]

export const AR_HOME = '/ar'
export const arPath = page => `${AR_HOME}/${page.slug}`
export const getArPage = slug => arPages.find(page => page.slug === slug)

// Label for a related link on an Arabic page: the Arabic title when the page exists in Arabic, otherwise
// the English title marked as English, so the reader knows the language changes.
export function arTitleFor(href, englishSuffix) {
  const page = arPages.find(item => arPath(item) === href)
  if (page) return page.metaTitle
  if (href === AR_HOME) return 'الرئيسية'
  const landing = landingPages.find(item => landingPath(item) === href)
  const service = services.find(item => `/services/${item.slug}` === href)
  return `${landing?.metaTitle || service?.title || href}${englishSuffix}`
}
