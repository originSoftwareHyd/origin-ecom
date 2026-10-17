import { businessConfig } from '../config/business.config'
import { services } from '../data/services'
import { portfolio } from '../data/portfolio'
import { landingPages, landingPath } from '../data/landing'
import { arPages, arPath } from '../data/landing-ar'
import { languageAlternates } from '../lib/alternates'
import { absoluteUrl } from '../lib/seo'

// Lists only indexable, canonical URLs. Form-only pages are noindex and deliberately excluded.
// Pages that exist in both languages carry hreflang alternates, matching their metadata.
export default function sitemap() {
  const lastModified = new Date(businessConfig.contentUpdated)
  const entry = (path, priority, changeFrequency = 'monthly') => {
    const languages = languageAlternates(path)
    return { url: absoluteUrl(path), lastModified, changeFrequency, priority, ...(languages ? { alternates: { languages: Object.fromEntries(Object.entries(languages).map(([lang, href]) => [lang, absoluteUrl(href)])) } } : {}) }
  }
  return [
    entry('/', 1, 'weekly'),
    entry('/services', 0.9),
    ...services.map(service => entry(`/services/${service.slug}`, 0.9)),
    ...landingPages.map(page => ({ ...entry(landingPath(page), page.kind === 'guide' ? 0.7 : 0.9), lastModified: new Date(page.updated) })),
    entry('/guides', 0.7, 'weekly'),
    entry('/ar', 0.9, 'weekly'),
    ...arPages.map(page => ({ ...entry(arPath(page), 0.9), lastModified: new Date(page.updated) })),
    entry('/website-consulting', 0.8),
    entry('/contact', 0.7),
    ...(businessConfig.indexBlueprints ? [entry('/portfolio', 0.6), ...portfolio.map(project => entry(`/portfolio/${project.slug}`, 0.5))] : []),
  ]
}
