import { businessConfig } from '../config/business.config'

// All crawlers, including AI search crawlers (OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot, etc.),
// are allowed so the business can be cited in AI answers. Add per-bot rules here if that policy changes.
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${businessConfig.siteUrl}/sitemap.xml`,
    host: businessConfig.siteUrl,
  }
}
