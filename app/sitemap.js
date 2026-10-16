import { businessConfig } from '../config/business.config'
import { services } from '../data/services'
import { portfolio } from '../data/portfolio'
import { absoluteUrl } from '../lib/seo'

// Lists only indexable, canonical URLs. Form-only pages are noindex and deliberately excluded.
export default function sitemap() {
  const lastModified = new Date(businessConfig.contentUpdated)
  const entry = (path, priority, changeFrequency = 'monthly') => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority })
  return [
    entry('/', 1, 'weekly'),
    entry('/services', 0.9),
    ...services.map(service => entry(`/services/${service.slug}`, 0.9)),
    entry('/website-consulting', 0.8),
    entry('/contact', 0.7),
    ...(businessConfig.indexBlueprints ? [entry('/portfolio', 0.6), ...portfolio.map(project => entry(`/portfolio/${project.slug}`, 0.5))] : []),
  ]
}
