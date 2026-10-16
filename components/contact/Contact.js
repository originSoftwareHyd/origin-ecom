'use client'
import { useRef, useState } from 'react'
import { siteData } from '../../data/site'
import { services } from '../../data/services'
import { siteConfig } from '../../config/site.config'
import { businessConfig, telLink, whatsappLink } from '../../config/business.config'
import { submitContact } from '../../lib/api/contact'
import Arrow from '../common/Arrow'
import SelectField from '../common/SelectField'
import { getAttribution, track } from '../../lib/analytics'

const serviceOptions = [...services.map(service => ({ value: service.title, label: service.title, hint: service.description, tag: service.shortLabel })), { value: 'Not sure yet', label: 'Not sure yet', hint: 'I need advice on the right approach', tag: '?' }]
const sourceOptions = ['Google search', 'AI assistant (ChatGPT, Gemini, Perplexity…)', 'Salla or Zid partner listing', 'LinkedIn or social media', 'Referral from someone I know', 'Other'].map(label => ({ value: label, label }))

// Until the contact API is configured, submissions open the visitor's email app with the enquiry
// pre-filled, so no lead is ever lost to a form that silently goes nowhere.
function openMailDraft(payload) {
  const subject = `Project enquiry: ${payload.service || 'General'}${payload.company ? ` (${payload.company})` : ''}`
  const body = [`Name: ${payload.name}`, `Company: ${payload.company || '-'}`, `Email: ${payload.email}`, `Phone / WhatsApp: ${payload.phone || '-'}`, `Service: ${payload.service || '-'}`, `Heard about us: ${payload.heard || '-'}`, `Page: ${payload.page || '-'}`, '', payload.message].join('\n')
  window.location.href = `mailto:${businessConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact({ defaultService = '', index = siteData.sections.contact.index, title = siteData.contact.title, emphasis = siteData.contact.emphasis, description = siteData.contact.description }) {
  const [status, setStatus] = useState('idle'); const [message, setMessage] = useState(''); const started = useRef(false)
  const whatsapp = whatsappLink()
  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form))
    if (payload.website) return
    delete payload.website
    Object.assign(payload, getAttribution(), { page: window.location.pathname })
    const lead = { service: payload.service || 'unspecified', heard_about: payload.heard || 'unspecified', page_path: window.location.pathname }
    if (!siteConfig.enableContactForm || !siteConfig.apiBaseUrl) { openMailDraft(payload); track('generate_lead', { ...lead, method: 'email_draft' }); setStatus('mail-draft'); return }
    setStatus('loading'); setMessage('')
    try { await submitContact(payload); track('generate_lead', { ...lead, method: 'form' }); setStatus('success'); form.reset() } catch (error) { setStatus('error'); setMessage(error.message || 'Unable to submit. Please try again.') }
  }
  return <section id="contact" className="contact"><div className="contact-copy"><span className="index">{index}</span><h2>{title} <em>{emphasis}</em></h2><p>{description}</p><div className="contact-details"><a href={`mailto:${siteData.brand.email}`}>{siteData.brand.email}</a>{siteData.brand.phones.map(phone => <a key={phone} href={telLink(phone)}>{phone}</a>)}{whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a>}</div></div><div className="form-card">{status === 'success' ? <div className="success"><span>✓</span><h3>Thank you.</h3><p>Your enquiry has been received. Our team will review your goals and reply with recommended next steps.</p><button type="button" onClick={() => setStatus('idle')}>Send another enquiry</button></div> : <form onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; track('form_start', { page_path: window.location.pathname }) } }}><label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label><label>Work email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label><label>Mobile / WhatsApp<input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+966 5X XXX XXXX" /></label><SelectField label="What do you need?" name="service" options={serviceOptions} defaultValue={defaultService} placeholder="Select a service" /><SelectField label="How did you hear about us?" name="heard" options={sourceOptions} placeholder="Select one (optional)" /><label>Project details<textarea name="message" required rows="4" placeholder="What do you want to launch or improve, and by when?" /></label><label className="hp-field" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>{status === 'error' && <p className="form-error">{message}</p>}{status === 'mail-draft' && <p className="form-note">Your email app should open with your enquiry ready to send. If it does not, email us at <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>{whatsapp && <> or <a href={whatsapp} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a></>}.</p>}<button className="button primary" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Get my free consultation'} <Arrow /></button><p className="form-note">No obligation. Your details are used only to respond to this enquiry.</p></form>}</div></section>
}
