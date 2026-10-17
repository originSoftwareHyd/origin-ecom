// English ↔ Arabic page pairs with the same search intent. Drives hreflang (metadata and sitemap) and
// the header's language switch. Kept free of page data so the client-side header stays small.
export const languagePairs = [
  ['/', '/ar'],
  ['/about', '/ar/about'],
  ['/services/ecommerce-development', '/ar/ecommerce-store-design'],
  ['/salla-store-development', '/ar/salla-store-design'],
  ['/zatca-e-invoicing', '/ar/zatca-e-invoicing'],
]

// hreflang alternates for a path on either side, or null when the page exists in one language only.
export function languageAlternates(path) {
  const pair = languagePairs.find(([en, ar]) => en === path || ar === path)
  return pair ? { 'en-SA': pair[0], 'ar-SA': pair[1], 'x-default': pair[0] } : null
}

// The equivalent page in the other language, falling back to that language's home page.
export function counterpartPath(path, toLocale) {
  const pair = languagePairs.find(([en, ar]) => en === path || ar === path)
  if (pair) return toLocale === 'ar' ? pair[1] : pair[0]
  return toLocale === 'ar' ? '/ar' : '/'
}
