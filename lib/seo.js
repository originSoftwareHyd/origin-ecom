import { businessConfig, hasAddress } from '../config/business.config'
import { siteData } from '../data/site'

const { siteUrl, name } = businessConfig

export const ORG_ID = `${siteUrl}/#organization`
export const WEBSITE_ID = `${siteUrl}/#website`

export const absoluteUrl = (path = '/') => `${siteUrl}${path === '/' ? '' : path}`

// Page-level metadata with a self-referencing canonical and matching Open Graph / Twitter data.
export function buildMetadata({ title, description, path = '/', noindex = false, absoluteTitle = false, ogType = 'website', image = '/opengraph-image' }) {
  const fullTitle = absoluteTitle ? title : `${title} | ${name}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    // Child openGraph objects replace the parent's (including file-based images), so the card is always explicit.
    openGraph: { type: ogType, url: path, siteName: name, locale: 'en_SA', title: fullTitle, description, images: [{ url: image, width: 1200, height: 630, alt: fullTitle }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

export function organizationSchema() {
  const { address, email, phone, sameAs, legalName, alternateNameArabic, languages, areaServed, crNumber, vatNumber } = businessConfig
  return {
    '@type': hasAddress ? 'ProfessionalService' : 'Organization',
    '@id': ORG_ID,
    name,
    ...(legalName ? { legalName } : {}),
    ...(alternateNameArabic ? { alternateName: alternateNameArabic } : {}),
    url: siteUrl,
    logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png`, width: 512, height: 512 },
    image: `${siteUrl}/opengraph-image`,
    description: siteData.brand.summary,
    slogan: 'E-commerce, web & AI solutions that grow Saudi businesses.',
    email,
    ...(phone ? { telephone: phone } : {}),
    ...(hasAddress ? { address: { '@type': 'PostalAddress', ...address } } : {}),
    ...(crNumber ? { identifier: { '@type': 'PropertyValue', propertyID: 'Saudi Commercial Registration', value: crNumber } } : {}),
    ...(vatNumber ? { vatID: vatNumber } : {}),
    areaServed: [{ '@type': 'Country', name: 'Saudi Arabia' }, ...areaServed.map(city => ({ '@type': 'City', name: city }))],
    knowsAbout: ['E-commerce development', 'Salla', 'Zid', 'Shopify', 'WooCommerce', 'Arabic–English website development', 'Mobile app development', 'ERPNext', 'ZATCA e-invoicing', 'AI automation', 'Arabic SEO', 'Performance marketing', 'Generative engine optimisation'],
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email, ...(phone ? { telephone: phone } : {}), areaServed: 'SA', availableLanguage: languages }],
    ...(sameAs.length ? { sameAs } : {}),
  }
}

export function websiteSchema() {
  return { '@type': 'WebSite', '@id': WEBSITE_ID, url: siteUrl, name, description: siteData.brand.summary, inLanguage: 'en-SA', publisher: { '@id': ORG_ID } }
}

// dateModified should be the page's own last material change; the site-wide date is only a fallback.
export function webPageSchema({ path, title, description, type = 'WebPage', dateModified = businessConfig.contentUpdated, datePublished }) {
  return { '@type': type, '@id': `${absoluteUrl(path)}#webpage`, url: absoluteUrl(path), name: title, description, inLanguage: 'en-SA', isPartOf: { '@id': WEBSITE_ID }, about: { '@id': ORG_ID }, ...(datePublished ? { datePublished } : {}), dateModified }
}

// Guides: Article authored and published by the organisation, citing its sources (helps answer engines judge provenance).
export function articleSchema({ path, headline, description, datePublished, dateModified, sources = [] }) {
  return { '@type': 'Article', '@id': `${absoluteUrl(path)}#article`, headline, description, url: absoluteUrl(path), mainEntityOfPage: { '@id': `${absoluteUrl(path)}#webpage` }, inLanguage: 'en-SA', datePublished, dateModified, author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, ...(sources.length ? { citation: sources.map(source => source.url) } : {}) }
}

// Specialist landing pages: a Service offered by the organisation, with the Saudi Arabic search terms as alternate names.
export function landingServiceSchema({ path, name, intro, arabicTerms = [] }) {
  const url = absoluteUrl(path)
  return { '@type': 'Service', '@id': `${url}#service`, name, serviceType: name, ...(arabicTerms.length ? { alternateName: arabicTerms } : {}), description: intro, url, provider: { '@id': ORG_ID }, areaServed: { '@type': 'Country', name: 'Saudi Arabia' }, availableLanguage: businessConfig.languages }
}

export function breadcrumbSchema(items) {
  return { '@type': 'BreadcrumbList', itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: absoluteUrl(item.path) })) }
}

export function faqSchema(faqs, path) {
  return { '@type': 'FAQPage', '@id': `${absoluteUrl(path)}#faq`, mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
}

export function serviceSchema(service) {
  const url = absoluteUrl(`/services/${service.slug}`)
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    serviceType: service.title,
    alternateName: service.arabicTerms,
    description: service.intro,
    url,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
    availableLanguage: businessConfig.languages,
    hasOfferCatalog: { '@type': 'OfferCatalog', name: `${service.title} services`, itemListElement: service.offerings.map(offering => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: offering } })) },
  }
}

export function serviceListSchema(services) {
  return { '@type': 'ItemList', name: `${name} services`, itemListElement: services.map((service, i) => ({ '@type': 'ListItem', position: i + 1, url: absoluteUrl(`/services/${service.slug}`), name: service.title })) }
}
