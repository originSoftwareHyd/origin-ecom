'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { captureAttribution, gaId, track } from '../../lib/analytics'

const CONSENT_KEY = 'oe_consent'

function readConsent() {
  try { return window.localStorage.getItem(CONSENT_KEY) } catch { return null }
}

// GA4 with Consent Mode v2: analytics storage stays denied until the visitor accepts (PDPL), so before
// consent Google receives only cookieless pings. Lead events (WhatsApp, phone, email) are tracked site-wide
// by delegation, so every CTA is covered without wiring each link.
export default function Analytics() {
  const [consent, setConsent] = useState('pending')

  useEffect(() => {
    captureAttribution()
    setConsent(readConsent() || 'ask')
    const click = e => {
      const link = e.target.closest?.('a[href]')
      if (!link) return
      const href = link.getAttribute('href')
      const params = { link_url: href, page_path: window.location.pathname, link_text: link.textContent.trim().slice(0, 80) }
      if (href.includes('wa.me/')) track('whatsapp_click', params)
      else if (href.startsWith('tel:')) track('phone_click', params)
      else if (href.startsWith('mailto:')) track('email_click', params)
    }
    document.addEventListener('click', click)
    return () => document.removeEventListener('click', click)
  }, [])

  const decide = value => {
    try { window.localStorage.setItem(CONSENT_KEY, value) } catch {}
    setConsent(value)
    window.gtag?.('consent', 'update', { analytics_storage: value === 'granted' ? 'granted' : 'denied' })
  }

  if (!gaId) return null
  return <>
    <Script id="ga-consent" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;var c=null;try{c=localStorage.getItem('${CONSENT_KEY}')}catch(e){}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:c==='granted'?'granted':'denied'});gtag('js',new Date());gtag('config','${gaId}');`}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
    {consent === 'ask' && <div className="consent-bar" role="region" aria-label="Cookie consent">
      <p>We use analytics cookies to understand which pages help Saudi businesses find us. No advertising cookies.</p>
      <div><button type="button" className="button secondary" onClick={() => decide('denied')}>Decline</button><button type="button" className="button primary" onClick={() => decide('granted')}>Accept</button></div>
    </div>}
  </>
}
