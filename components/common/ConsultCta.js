import Link from 'next/link'
import { businessConfig, telLink, whatsappLink } from '../../config/business.config'
import { ui } from '../../lib/i18n'
import Arrow from './Arrow'

export default function ConsultCta({ locale = 'en', eyebrow, title, text, cta, href = '/contact', whatsappText }) {
  const t = ui[locale].consult
  const rtl = ui[locale].dir === 'rtl'
  const whatsapp = whatsappLink(whatsappText)
  return <section className="consulting-card">
    <div><span className="eyebrow">{eyebrow || t.eyebrow}</span><h2>{title}</h2><p>{text}</p></div>
    <div><h3>{t.talkFirst}</h3><p>{t.email} <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>{businessConfig.phone && <> {t.orCall} <a href={telLink()} dir="ltr">{businessConfig.phone}</a></>}. {t.talkText}</p>
      <div className="hero-actions"><Link className="button primary" href={href}>{cta || t.cta} <Arrow rtl={rtl} /></Link>{whatsapp && <a className="button secondary" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsapp} <Arrow rtl={rtl} /></a>}</div>
    </div>
  </section>
}
