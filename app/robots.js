import { businessConfig } from '../config/business.config'

// Search and AI crawlers are named explicitly so the policy is deliberate and auditable: being crawled by
// AI search (ChatGPT search, Perplexity, Gemini, Copilot, Claude) is a prerequisite for being cited in answers.
// Also make sure no host/CDN "block AI bots" setting overrides this file.
const aiAndSearchBots = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Applebot', 'Applebot-Extended', 'DuckDuckBot', 'YandexBot']

export default function robots() {
  return {
    rules: [{ userAgent: aiAndSearchBots, allow: '/', disallow: ['/api/'] }, { userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${businessConfig.siteUrl}/sitemap.xml`,
    host: businessConfig.siteUrl,
  }
}
