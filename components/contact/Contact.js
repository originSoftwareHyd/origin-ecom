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
import { ui } from '../../lib/i18n'

// Option values stay in English in both languages so leads report consistently; only labels are translated.
const englishSources = ['Google search', 'AI assistant (ChatGPT, Gemini, Perplexity…)', 'Salla or Zid partner listing', 'LinkedIn or social media', 'Referral from someone I know', 'Other']
function formOptions(locale) {
  const t = ui[locale]
  const label = service => t.serviceLabels?.[service.slug] || [service.title, service.description]
  return {
    services: [...services.map(service => ({ value: service.title, label: label(service)[0], hint: label(service)[1], tag: service.shortLabel })), { value: 'Not sure yet', label: t.form.notSure, hint: t.form.notSureHint, tag: '?' }],
    sources: t.heardOptions ? t.heardOptions.map(([value, text]) => ({ value, label: text })) : englishSources.map(value => ({ value, label: value })),
  }
}

// Until the contact API is configured, submissions open the visitor's email app with the enquiry
// pre-filled, so no lead is ever lost to a form that silently goes nowhere.
function openMailDraft(payload) {
  const subject = `Project enquiry: ${payload.service || 'General'}${payload.company ? ` (${payload.company})` : ''}`
  const body = [`Name: ${payload.name}`, `Company: ${payload.company || '-'}`, `Email: ${payload.email}`, `Phone / WhatsApp: ${payload.phone || '-'}`, `Service: ${payload.service || '-'}`, `Heard about us: ${payload.heard || '-'}`, `Page: ${payload.page || '-'}`, '', payload.message].join('\n')
  window.location.href = `mailto:${businessConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact({ locale = 'en', defaultService = '', index = siteData.sections.contact.index, title = siteData.contact.title, emphasis = siteData.contact.emphasis, description = siteData.contact.description }) {
  const [status, setStatus] = useState('idle'); const [message, setMessage] = useState(''); const started = useRef(false)
  const t = ui[locale].form
  const options = formOptions(locale)
  const whatsapp = whatsappLink(ui[locale].whatsappText)
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
    try { await submitContact(payload); track('generate_lead', { ...lead, method: 'form' }); setStatus('success'); form.reset() } catch (error) { setStatus('error'); setMessage(locale === 'en' && error.message ? error.message : t.error) }
  }
  return <section id="contact" className="contact"><div className="contact-copy"><span className="index">{index}</span><h2>{title} <em>{emphasis}</em></h2><p>{description}</p><div className="contact-details"><a href={`mailto:${siteData.brand.email}`}>{siteData.brand.email}</a>{siteData.brand.phones.map(phone => <a key={phone} href={telLink(phone)} dir="ltr">{phone}</a>)}{whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsapp}</a>}</div></div><div className="form-card">{status === 'success' ? <div className="success"><span>✓</span><h3>{t.thanksTitle}</h3><p>{t.thanks}</p><button type="button" onClick={() => setStatus('idle')}>{t.again}</button></div> : <form onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; track('form_start', { page_path: window.location.pathname }) } }}><label>{t.name}<input name="name" required autoComplete="name" placeholder={t.namePh} /></label><label>{t.company}<input name="company" autoComplete="organization" placeholder={t.companyPh} /></label><label>{t.email}<input name="email" type="email" required autoComplete="email" placeholder={t.emailPh} dir="ltr" /></label><label>{t.phone}<input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={t.phonePh} dir="ltr" /></label><SelectField label={t.service} name="service" options={options.services} defaultValue={defaultService} placeholder={t.servicePh} /><SelectField label={t.heard} name="heard" options={options.sources} placeholder={t.heardPh} /><label>{t.message}<textarea name="message" required rows="4" placeholder={t.messagePh} /></label><label className="hp-field" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>{status === 'error' && <p className="form-error">{message}</p>}{status === 'mail-draft' && <p className="form-note">{t.draftA} <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>{whatsapp && <> {t.draftOr} <a href={whatsapp} target="_blank" rel="noopener noreferrer">{t.draftWa}</a></>}.</p>}<button className="button primary" disabled={status === 'loading'}>{status === 'loading' ? t.sending : t.submit} <Arrow rtl={locale === 'ar'} /></button><p className="form-note">{t.note}</p></form>}</div></section>
}
