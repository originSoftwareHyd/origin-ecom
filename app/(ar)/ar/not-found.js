import Link from 'next/link'

export const metadata = { title: 'الصفحة غير موجودة' }

export default function NotFound() { return <main className="not-found"><span className="index">ORIGIN ECOMMERCE</span><h1>404</h1><p>الصفحة التي تبحث عنها غير موجودة. تصفح خدماتنا أو احجز استشارة مجانية.</p><div className="hero-actions"><Link className="button primary" href="/ar">الصفحة الرئيسية ↖</Link><Link className="button secondary" href="/ar#contact">تواصل معنا ↖</Link></div></main> }
