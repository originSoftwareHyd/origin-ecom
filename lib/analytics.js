// Lead-attribution helpers shared by the analytics loader, the contact form and CTAs.
// Events go to window.dataLayer (GA4 via gtag, or Google Tag Manager if added later), so nothing
// breaks when analytics is not configured.

const ATTRIBUTION_KEY = 'oe_attribution'
const AI_REFERRERS = /(chatgpt\.com|chat\.openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|bing\.com\/chat|claude\.ai|you\.com|meta\.ai|deepseek\.com|grok\.com)/i

export const gaId = process.env.NEXT_PUBLIC_GA_ID || ''

export function track(event, params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag === 'function') window.gtag('event', event, params)
  else window.dataLayer.push({ event, ...params })
}

function storage() {
  try { return window.localStorage } catch { return null }
}

// First-touch attribution: the campaign, referrer and landing page of the visit that first brought this
// browser to the site. Kept for 90 days so a lead that converts on a later visit is still credited.
export function captureAttribution() {
  const store = storage()
  if (!store) return
  try {
    const saved = JSON.parse(store.getItem(ATTRIBUTION_KEY) || 'null')
    if (saved && Date.now() - saved.ts < 90 * 864e5) return
    const params = new URLSearchParams(window.location.search)
    const referrer = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : ''
    const data = {
      ts: Date.now(),
      landing_page: window.location.pathname,
      referrer,
      ai_referrer: AI_REFERRERS.test(referrer) ? new URL(referrer).hostname : '',
      ...Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'].map(key => [key, params.get(key) || ''])),
    }
    store.setItem(ATTRIBUTION_KEY, JSON.stringify(data))
  } catch {}
}

export function getAttribution() {
  const store = storage()
  if (!store) return {}
  try {
    const { ts, ...data } = JSON.parse(store.getItem(ATTRIBUTION_KEY) || '{}')
    return data
  } catch { return {} }
}
