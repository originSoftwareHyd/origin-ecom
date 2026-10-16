// Registry of landing pages and guides. Content lives in one file per page (format: SCHEMA.md);
// add a page by creating its file and importing it here. Routes, sitemap, llms.txt, footer links
// and service-page cross-links are all generated from this list.
import zatcaEInvoicing from './zatca-e-invoicing'
import ecommerceErpZatcaIntegration from './ecommerce-erp-zatca-integration'
import sallaStoreDevelopment from './salla-store-development'
import zidStoreDevelopment from './zid-store-development'
import shopifyDevelopmentSaudiArabia from './shopify-development-saudi-arabia'
import sallaVsZidVsShopify from './salla-vs-zid-vs-shopify'
import ecommerceWebsiteCostSaudiArabia from './ecommerce-website-cost-saudi-arabia'
import erpnextVsOdooSaudiArabia from './erpnext-vs-odoo-saudi-arabia'
import { services } from '../services'

export const landingPages = [zatcaEInvoicing, ecommerceErpZatcaIntegration, sallaStoreDevelopment, zidStoreDevelopment, shopifyDevelopmentSaudiArabia, sallaVsZidVsShopify, ecommerceWebsiteCostSaudiArabia, erpnextVsOdooSaudiArabia]

export const servicePages = landingPages.filter(page => page.kind === 'service')
export const guides = landingPages.filter(page => page.kind === 'guide')

export const landingPath = page => (page.kind === 'guide' ? `/guides/${page.slug}` : `/${page.slug}`)
export const getLanding = slug => servicePages.find(page => page.slug === slug)
export const getGuide = slug => guides.find(page => page.slug === slug)
export const pagesForService = serviceSlug => landingPages.filter(page => page.parentService === serviceSlug)

// Human label for any internal path, used by "related pages" lists.
const fixedTitles = { '/': 'Home', '/services': 'All services', '/guides': 'Guides for Saudi businesses', '/website-consulting': 'Free consultation', '/contact': 'Contact us' }
export function landingTitleFor(href) {
  const page = landingPages.find(item => landingPath(item) === href)
  if (page) return page.metaTitle
  const service = services.find(item => `/services/${item.slug}` === href)
  return service ? `${service.title}: ${service.description}` : fixedTitles[href] || href
}
