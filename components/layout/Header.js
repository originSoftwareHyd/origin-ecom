'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { siteData } from '../../data/site'
import { ui } from '../../lib/i18n'
import { counterpartPath } from '../../lib/alternates'
import Arrow from '../common/Arrow'

export default function Header({ locale = 'en' }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const t = ui[locale]
  const rtl = t.dir === 'rtl'
  const navigation = t.nav || siteData.navigation
  const other = t.header.switchLang
  useEffect(() => {
    if (!open) return
    const closeOnEscape = event => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return <header className="header">
    <Link className="logo" href={`${t.homePath}#top`} onClick={() => setOpen(false)} aria-label={t.header.homeAria(siteData.brand.name)}><Image className="logo-img" src="/logo-full.png" alt={siteData.brand.name} width={1382} height={391} priority /></Link>
    <nav id="primary-navigation" className={open ? 'nav open' : 'nav'} aria-label={t.header.nav}>
      {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      <Link className="lang-switch" href={pathname ? counterpartPath(pathname, other) : t.header.switchFallback} lang={other} hrefLang={other === 'ar' ? 'ar-SA' : 'en-SA'} onClick={() => setOpen(false)}>{t.header.switchLabel}</Link>
      <Link className="header-cta" href={t.header.ctaHref} onClick={() => setOpen(false)}>{t.header.cta} <Arrow rtl={rtl} /></Link>
    </nav>
    <button className="menu" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? t.header.close : t.header.open} aria-controls="primary-navigation" aria-expanded={open}><i /><i /></button>
  </header>
}
