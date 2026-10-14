import { apiRequest } from './client'

export function submitContact(payload) {
  return apiRequest('/contact', { method: 'POST', body: JSON.stringify(payload) })
}
