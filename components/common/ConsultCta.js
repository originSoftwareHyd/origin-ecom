import Link from 'next/link'
import { businessConfig, telLink, whatsappLink } from '../../config/business.config'
import Arrow from './Arrow'

export default function ConsultCta({ eyebrow = 'FREE CONSULTATION', title, text, cta = 'Book a free consultation', href = '/contact', whatsappText }) {
  const whatsapp = whatsappLink(whatsappText)
  return <section className="consulting-card">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>
    <div><h3>Prefer to talk first?</h3><p>Email <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>{businessConfig.phone && <> or call <a href={telLink()}>{businessConfig.phone}</a></>}. Share your goal and we will suggest the fastest route to launch.</p>
      <div className="hero-actions"><Link className="button primary" href={href}>{cta} <Arrow /></Link>{whatsapp && <a className="button secondary" href={whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <Arrow /></a>}</div>
    </div>
  </section>
}
