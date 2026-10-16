'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteData } from '../../data/site'
import Arrow from '../common/Arrow'

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const closeOnEscape = event => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return <header className="header">
    <Link className="logo" href="/#top" onClick={() => setOpen(false)} aria-label={`${siteData.brand.name} home`}><Image className="logo-img" src="/logo-full.png" alt={siteData.brand.name} width={1382} height={391} priority /></Link>
    <nav id="primary-navigation" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
      {siteData.navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      <Link className="header-cta" href="/contact" onClick={() => setOpen(false)}>{siteData.headerCta} <Arrow /></Link>
    </nav>
    <button className="menu" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="primary-navigation" aria-expanded={open}><i /><i /></button>
  </header>
}
