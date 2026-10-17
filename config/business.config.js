// Single source of truth for Origin Ecommerce's business identity (NAP + entity data).
// Every value below feeds visible copy, JSON-LD structured data, the sitemap, robots.txt and llms.txt,
// so keep it identical to Google Business Profile, social profiles and directory listings.
//
// LAUNCH CHECKLIST: values marked TODO are placeholders. Set them via environment variables
// (see .env.example) or edit the fallbacks here before going live. Empty values are hidden
// from the UI and omitted from structured data rather than published as fake details.
// NEXT_PUBLIC_* variables must be referenced literally so Next.js can inline them in client code.

const list = value => (value || '').split(',').map(item => item.trim()).filter(Boolean)

export const businessConfig = {
  name: 'Origin Ecommerce',
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || '', // TODO: legal name exactly as on the commercial registration
  alternateNameArabic: process.env.NEXT_PUBLIC_ARABIC_NAME || '', // TODO: official Arabic trade name, if registered
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.originecommerce.com').replace(/\/$/, ''), // TODO: confirm production domain
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@originsoftwares.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '', // TODO: e.g. +966 5X XXX XXXX
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, ''), // TODO: international digits, e.g. 9665XXXXXXXX
  crNumber: process.env.NEXT_PUBLIC_CR_NUMBER || '', // Commercial registration number (shown in footer when set)
  vatNumber: process.env.NEXT_PUBLIC_VAT_NUMBER || '', // ZATCA VAT registration number (shown in footer when set)
  address: {
    streetAddress: process.env.NEXT_PUBLIC_ADDRESS_STREET || '',
    addressLocality: process.env.NEXT_PUBLIC_ADDRESS_CITY || '', // e.g. Riyadh
    addressRegion: process.env.NEXT_PUBLIC_ADDRESS_REGION || '', // e.g. Riyadh Province
    postalCode: process.env.NEXT_PUBLIC_ADDRESS_POSTAL_CODE || '',
    addressCountry: 'SA',
  },
  sameAs: list(process.env.NEXT_PUBLIC_SOCIAL_PROFILES), // LinkedIn, X, Instagram, Snapchat, Google Business Profile URLs
  languages: ['English', 'Arabic'], // TODO: confirm the team serves clients in both languages
  areaServed: ['Riyadh', 'Jeddah', 'Dammam', 'Al Khobar', 'Makkah', 'Madinah', 'Jubail'],
  contentUpdated: '2026-10-16', // bump when page content materially changes (used for sitemap lastModified)
  // Solution blueprints are illustrative engagement types, not client case studies.
  // Keep them out of the index until real, client-approved case studies replace them.
  indexBlueprints: false,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
  },
}

export const hasAddress = Boolean(businessConfig.address.streetAddress && businessConfig.address.addressLocality)

export function whatsappLink(text = 'Hello Origin Ecommerce, I would like to book a free consultation.') {
  return businessConfig.whatsapp ? `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(text)}` : ''
}

export function telLink(phone = businessConfig.phone) {
  return phone ? `tel:${phone.replace(/[^+\d]/g, '')}` : ''
}
