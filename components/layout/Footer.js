import Link from 'next/link'
import Image from 'next/image'
import { siteData } from '../../data/site'
import { ui } from '../../lib/i18n'
import { businessConfig, telLink, whatsappLink } from '../../config/business.config'

export default function Footer({ locale = 'en' }) {
  const t = ui[locale]
  const f = t.footer
  const whatsapp = whatsappLink(t.whatsappText)
  const registration = [businessConfig.crNumber && `${f.cr} ${businessConfig.crNumber}`, businessConfig.vatNumber && `${f.vat} ${businessConfig.vatNumber}`].filter(Boolean).join(' · ')
  const columns = f.columns || siteData.footerColumns
  return <footer>
    <div className="footer-top"><Link className="logo" href={`${t.homePath}#top`}><Image className="logo-img" src="/logo-full.png" alt={siteData.brand.name} width={1382} height={391} /></Link><p>{f.description || siteData.brand.footerDescription}</p></div>
    <div className="locations">
      {columns.map(column => <div key={column.title}><strong>{column.title}</strong>{column.text && <p>{column.text}</p>}{column.links.map(link => <p key={link.href}><Link href={link.href} lang={link.lang}>{link.label}</Link></p>)}</div>)}
      <div><strong>{f.contact}</strong><p><a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a></p>{businessConfig.phone && <p><a href={telLink()} dir="ltr">{businessConfig.phone}</a></p>}{whatsapp && <p><a href={whatsapp} target="_blank" rel="noopener noreferrer">{f.whatsapp}</a></p>}<p><Link href={f.consultHref}>{f.consult}</Link></p><span>{f.serving}</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {siteData.brand.name}. {f.rights}{registration && ` ${registration}`}</span><Link href={`${t.homePath}#top`}>{f.top}</Link></div>
  </footer>
}
