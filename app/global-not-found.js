import './globals.css'
import './ui-polish.css'
import Link from 'next/link'

// Served for URLs that match no route at all. With two root layouts ((site) English and (ar) Arabic),
// Next.js needs this standalone page; in-route 404s use each group's own not-found.js.
export const metadata = { title: 'Page not found | Origin Ecommerce', robots: { index: false } }

export default function GlobalNotFound() {
  return <html lang="en-SA"><body><main className="not-found"><span className="index">ORIGIN ECOMMERCE</span><h1>404</h1><p>The page you are looking for does not exist. Explore our services or book a free consultation instead.</p><p lang="ar" dir="rtl">الصفحة غير موجودة. <Link href="/ar">الانتقال إلى الصفحة العربية</Link></p><div className="hero-actions"><Link className="button primary" href="/services">View services ↗</Link><Link className="button secondary" href="/contact">Contact us ↗</Link></div></main></body></html>
}
