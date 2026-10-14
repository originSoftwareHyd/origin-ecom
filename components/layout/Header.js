'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
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
    <Link className="logo" href="/#top" onClick={() => setOpen(false)} aria-label={`${siteData.brand.name} home`}><span className="logo-symbol">ST</span><span>{siteData.brand.name}</span></Link>
    <nav id="primary-navigation" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
      {siteData.navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      <Link className="header-cta" href="/contact" onClick={() => setOpen(false)}>Book a Strategy Call <Arrow /></Link>
    </nav>
    <button className="menu" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="primary-navigation" aria-expanded={open}><i /><i /></button>
  </header>
}
