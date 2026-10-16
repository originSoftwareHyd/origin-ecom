// Contact endpoint. Forwards validated enquiries to CONTACT_WEBHOOK_URL (CRM, Zapier/Make, Slack, email service…).
// Without a webhook it refuses with 503 instead of pretending the enquiry was delivered.
// To enable: NEXT_PUBLIC_API_BASE_URL=/api, NEXT_PUBLIC_ENABLE_CONTACT_FORM=true, CONTACT_WEBHOOK_URL=<endpoint>.
const limits = { name: 120, company: 160, email: 200, phone: 40, service: 120, message: 5000, page: 300, heard: 120 }
// First-touch attribution captured client-side (lib/analytics.js), forwarded so the CRM can report leads by channel.
const attribution = ['landing_page', 'referrer', 'ai_referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid']

export async function POST(request) {
  let body
  try { body = await request.json() } catch { return Response.json({ message: 'Invalid request.' }, { status: 400 }) }
  const data = Object.fromEntries(Object.entries(limits).map(([key, max]) => [key, String(body?.[key] ?? '').trim().slice(0, max)]))
  if (body?.website) return Response.json({ success: true })
  if (!data.name || !data.email || !data.message) return Response.json({ message: 'Name, email and project details are required.' }, { status: 400 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 })
  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (!webhook) return Response.json({ message: 'Online enquiries are temporarily unavailable. Please email or WhatsApp us directly.' }, { status: 503 })
  try {
    const response = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, attribution: Object.fromEntries(attribution.map(key => [key, String(body?.[key] ?? '').slice(0, 500)])), source: 'website', receivedAt: new Date().toISOString() }) })
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`)
    return Response.json({ success: true, message: 'Thank you. Your enquiry has been received.' })
  } catch {
    return Response.json({ message: 'We could not send your enquiry. Please email or WhatsApp us directly.' }, { status: 502 })
  }
}
