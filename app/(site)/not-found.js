import Link from 'next/link'

export const metadata = { title: 'Page not found' }

export default function NotFound(){return <main className="not-found"><span className="index">ORIGIN ECOMMERCE</span><h1>404</h1><p>The page you are looking for does not exist. Explore our services or book a free consultation instead.</p><div className="hero-actions"><Link className="button primary" href="/services">View services ↗</Link><Link className="button secondary" href="/contact">Contact us ↗</Link></div></main>}
