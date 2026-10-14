import { siteConfig } from '../../config/site.config'

export async function apiRequest(path, options = {}) {
  const base = siteConfig.apiBaseUrl.replace(/\/$/, '')
  if (!base) throw new Error('API is not configured yet.')
  const response = await fetch(`${base}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.message || 'Request failed.')
  return data
}
