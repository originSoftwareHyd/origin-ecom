import Link from 'next/link'
import { siteData } from '../../data/site'

export default function Footer() {
  return <footer>
    <div className="footer-top"><Link className="logo" href="/#top"><span className="logo-symbol">ST</span><span>{siteData.brand.name}</span></Link><p>{siteData.brand.footerDescription}</p></div>
    <div className="locations">{siteData.locations.map(location => <div key={location.city}><strong>{location.city}</strong><p>{location.address}</p><span>{location.phone}</span></div>)}</div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.</span><Link href="/#top">Back to top ↑</Link></div>
  </footer>
}
