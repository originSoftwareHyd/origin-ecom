import Link from 'next/link'
import Image from 'next/image'
import { siteData } from '../../data/site'
import { businessConfig, telLink, whatsappLink } from '../../config/business.config'

export default function Footer() {
  const whatsapp = whatsappLink()
  const registration = [businessConfig.crNumber && `CR ${businessConfig.crNumber}`, businessConfig.vatNumber && `VAT ${businessConfig.vatNumber}`].filter(Boolean).join(' · ')
  return <footer>
    <div className="footer-top"><Link className="logo" href="/#top"><Image className="logo-img" src="/logo-full.png" alt={siteData.brand.name} width={1382} height={391} /></Link><p>{siteData.brand.footerDescription}</p></div>
    <div className="locations">
      {siteData.footerColumns.map(column => <div key={column.title}><strong>{column.title}</strong>{column.text && <p>{column.text}</p>}{column.links.map(link => <p key={link.href}><Link href={link.href}>{link.label}</Link></p>)}</div>)}
      <div><strong>Contact</strong><p><a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a></p>{businessConfig.phone && <p><a href={telLink()}>{businessConfig.phone}</a></p>}{whatsapp && <p><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us ↗</a></p>}<p><Link href="/website-consulting">Book a free consultation ↗</Link></p><span>Serving businesses across Saudi Arabia</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.{registration && ` ${registration}`}</span><Link href="/#top">Back to top ↑</Link></div>
  </footer>
}
