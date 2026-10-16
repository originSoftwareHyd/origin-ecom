'use client'
import { useState } from 'react'
import { siteData } from '../../data/site'
import { services } from '../../data/services'
import { siteConfig } from '../../config/site.config'
import { businessConfig, telLink, whatsappLink } from '../../config/business.config'
import { submitContact } from '../../lib/api/contact'
import Arrow from '../common/Arrow'

// Until the contact API is configured, submissions open the visitor's email app with the enquiry
// pre-filled, so no lead is ever lost to a form that silently goes nowhere.
function openMailDraft(payload) {
  const subject = `Project enquiry: ${payload.service || 'General'}${payload.company ? ` (${payload.company})` : ''}`
  const body = [`Name: ${payload.name}`, `Company: ${payload.company || '-'}`, `Email: ${payload.email}`, `Phone / WhatsApp: ${payload.phone || '-'}`, `Service: ${payload.service || '-'}`, '', payload.message].join('\n')
  window.location.href = `mailto:${businessConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact({ defaultService = '', index = siteData.sections.contact.index, title = siteData.contact.title, emphasis = siteData.contact.emphasis, description = siteData.contact.description }) {
  const [status, setStatus] = useState('idle'); const [message, setMessage] = useState('')
  const whatsapp = whatsappLink()
  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form))
    if (payload.website) return
    delete payload.website
    if (!siteConfig.enableContactForm || !siteConfig.apiBaseUrl) { openMailDraft(payload); setStatus('mail-draft'); return }
    setStatus('loading'); setMessage('')
    try { await submitContact({ ...payload, page: window.location.pathname }); setStatus('success'); form.reset() } catch (error) { setStatus('error'); setMessage(error.message || 'Unable to submit. Please try again.') }
  }
  return <section id="contact" className="contact"><div className="contact-copy"><span className="index">{index}</span><h2>{title} <em>{emphasis}</em></h2><p>{description}</p><div className="contact-details"><a href={`mailto:${siteData.brand.email}`}>{siteData.brand.email}</a>{siteData.brand.phones.map(phone => <a key={phone} href={telLink(phone)}>{phone}</a>)}{whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a>}</div></div><div className="form-card">{status === 'success' ? <div className="success"><span>✓</span><h3>Thank you.</h3><p>Your enquiry has been received. Our team will review your goals and reply with recommended next steps.</p><button type="button" onClick={() => setStatus('idle')}>Send another enquiry</button></div> : <form onSubmit={submit}><label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label><label>Work email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label><label>Mobile / WhatsApp<input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+966 5X XXX XXXX" /></label><label>What do you need?<select name="service" defaultValue={defaultService}><option value="">Select a service</option>{services.map(service => <option key={service.slug} value={service.title}>{service.title}</option>)}<option value="Not sure yet">Not sure yet, I need advice</option></select></label><label>Project details<textarea name="message" required rows="4" placeholder="What do you want to launch or improve, and by when?" /></label><label className="hp-field" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>{status === 'error' && <p className="form-error">{message}</p>}{status === 'mail-draft' && <p className="form-note">Your email app should open with your enquiry ready to send. If it does not, email us at <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>{whatsapp && <> or <a href={whatsapp} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a></>}.</p>}<button className="button primary" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Get my free consultation'} <Arrow /></button><p className="form-note">No obligation. Your details are used only to respond to this enquiry.</p></form>}</div></section>
}
