'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

// Headlines revealed word by word. Only static (server-rendered) headings: SplitText rewrites their DOM.
const SPLIT_HEADINGS = '.hero h1, .page-hero h1, .case-hero h1, .service-page-hero h1, .section-intro h2, .about-card h2, .vision h2, .contact h2, .service-content h2, .service-process h2, .case-section h2'
// Blocks that fade up as they enter the viewport, staggered when they share a parent.
const REVEAL = '.section-intro > p, .index, .eyebrow, .kicker, .hero-copy > p, .hero-actions, .hero-proof span, .why-grid article, .service-explorer, .about-list > div, .work-feature, .work-tabs button, .process-box, .vision p, .faq-list details, .contact-copy > p, .contact-details, .form-card, .portfolio-card, .service-page-card, .offering-list > div, .mini-process > div, .case-meta > div, .case-section li, .pill-list span, .consulting-card, .footer-top, .locations > div, .page-hero p, .case-hero > div > p, .service-page-hero p, .service-page-orb'
const MAGNETIC = '.button, .header-cta, .menu'
const TILT = '.portfolio-card, .service-page-card, .why-grid article, .case-meta > div'

const fine = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

export default function MotionProvider() {
  const pathname = usePathname()
  const lenisRef = useRef(null)
  const cursorRef = useRef(null)

  // Smooth scrolling driven by GSAP's ticker so ScrollTrigger and Lenis share one clock.
  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    root.classList.add('motion-ready')
    if (reduce) return
    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -90 }, autoRaf: false })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = time => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Header tucks away while reading down, returns on scroll up; progress bar tracks the page.
    const header = document.querySelector('.header')
    const bar = document.querySelector('.scroll-progress')
    lenis.on('scroll', ({ scroll, direction, progress }) => {
      header?.classList.toggle('is-scrolled', scroll > 20)
      header?.classList.toggle('is-hidden', direction === 1 && scroll > 300 && !header.querySelector('.nav.open'))
      if (bar) bar.style.transform = `scaleX(${progress})`
    })
    return () => { gsap.ticker.remove(tick); lenis.destroy(); lenisRef.current = null }
  }, [])

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
    document.querySelector('.header')?.classList.remove('is-hidden')
  }, [pathname])

  // Custom cursor: a dot plus a lagging ring that grows over interactive elements.
  useEffect(() => {
    const el = cursorRef.current
    if (!el || !fine() || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const dot = el.querySelector('.cursor-dot'), ring = el.querySelector('.cursor-ring'), label = el.querySelector('.cursor-label')
    const dx = gsap.quickTo(dot, 'x', { duration: 0.1 }), dy = gsap.quickTo(dot, 'y', { duration: 0.1 })
    const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' })
    const move = e => { el.classList.add('is-active'); dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY) }
    const over = e => {
      const target = e.target.closest?.('a, button, summary, select, input, textarea, label, [data-cursor]')
      const text = target?.closest('[data-cursor]')?.dataset.cursor || (target?.closest('.portfolio-card, .service-page-card') ? 'View' : '')
      el.classList.toggle('is-hover', !!target)
      el.classList.toggle('is-text', !!text)
      el.classList.toggle('is-field', !!target?.matches('input, textarea, select'))
      label.textContent = text
    }
    const leave = () => el.classList.remove('is-active')
    const down = () => el.classList.add('is-down'), up = () => el.classList.remove('is-down')
    window.addEventListener('pointermove', move); document.addEventListener('pointerover', over); document.documentElement.addEventListener('pointerleave', leave)
    window.addEventListener('pointerdown', down); window.addEventListener('pointerup', up)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerover', over); document.documentElement.removeEventListener('pointerleave', leave); window.removeEventListener('pointerdown', down); window.removeEventListener('pointerup', up) }
  }, [])

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const cleanups = []
      const on = (node, type, fn) => { node.addEventListener(type, fn); cleanups.push(() => node.removeEventListener(type, fn)) }

      // Word-by-word masked headline reveals.
      gsap.utils.toArray(SPLIT_HEADINGS).forEach(heading => {
        const inHero = heading.closest('.hero, .page-hero, .case-hero, .service-page-hero')
        SplitText.create(heading, {
          type: 'words', mask: 'words', autoSplit: true,
          onSplit: self => gsap.from(self.words, {
            yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.05, delay: inHero ? 0.15 : 0,
            scrollTrigger: inHero ? undefined : { trigger: heading, start: 'top 88%', once: true },
          }),
        })
      })

      // Staggered fade-ups, batched so siblings entering together cascade.
      const blocks = gsap.utils.toArray(REVEAL)
      gsap.set(blocks, { autoAlpha: 0, y: 34 })
      ScrollTrigger.batch(blocks, {
        start: 'top 90%', once: true,
        onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, overwrite: true, clearProps: 'transform' }),
      })

      // Hero: entrance, cursor parallax on the orbit visual, then drift apart on scroll.
      const hero = document.querySelector('.hero')
      if (hero) {
        gsap.from('.hero-visual .visual-ring', { scale: 0.6, autoAlpha: 0, duration: 1.6, ease: 'expo.out', stagger: 0.12, delay: 0.2 })
        gsap.from('.hero-visual .visual-core', { scale: 0.4, autoAlpha: 0, duration: 1.2, ease: 'back.out(1.6)', delay: 0.45 })
        gsap.from('.hero-visual .signal', { y: 30, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.8 })
        gsap.to('.ring-a', { rotation: 360, duration: 60, repeat: -1, ease: 'none' })
        gsap.to('.ring-b', { rotation: -360, duration: 80, repeat: -1, ease: 'none' })
        gsap.utils.toArray('.hero-visual .signal').forEach((s, i) => gsap.to(s, { y: i % 2 ? 10 : -10, duration: 2.6 + i * 0.4, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
        if (fine()) {
          const layers = [['.ring-a', 18], ['.ring-b', 30], ['.ring-c', 44], ['.visual-core', 24], ['.orb-one', -40], ['.orb-two', -26], ['.hero-visual .signal', 56]]
            .map(([sel, depth]) => [gsap.utils.toArray(sel).map(n => ({ x: gsap.quickTo(n, 'x', { duration: 1.2, ease: 'power3' }), y: gsap.quickTo(n, 'y', { duration: 1.2, ease: 'power3' }) })), depth])
          on(hero, 'pointermove', e => {
            const r = hero.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5
            layers.forEach(([nodes, d]) => nodes.forEach(n => { n.x(px * d); n.y(py * d) }))
          })
          on(hero, 'pointerleave', () => layers.forEach(([nodes]) => nodes.forEach(n => { n.x(0); n.y(0) })))
        }
        gsap.to('.hero-visual', { yPercent: 18, scale: 0.92, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
        gsap.to('.hero-grid', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
      }

      // Scroll-linked accents.
      gsap.utils.toArray('.vision-mark').forEach(n => gsap.fromTo(n, { xPercent: -30, autoAlpha: 0.2, letterSpacing: '0.1em' }, { xPercent: 0, autoAlpha: 1, letterSpacing: '-0.1em', ease: 'none', scrollTrigger: { trigger: n, start: 'top 95%', end: 'top 45%', scrub: true } }))
      gsap.utils.toArray('.about-card, .work-feature').forEach(n => gsap.fromTo(n, { clipPath: 'inset(8% 4% 8% 4% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: n, start: 'top 95%', end: 'top 35%', scrub: true } }))
      gsap.utils.toArray('.service-page-orb, .big-number, .service-mark').forEach(n => gsap.to(n, { yPercent: -18, ease: 'none', scrollTrigger: { trigger: n, start: 'top bottom', end: 'bottom top', scrub: true } }))
      gsap.utils.toArray('.case-lines').forEach(n => gsap.to(n, { backgroundPositionY: 240, ease: 'none', scrollTrigger: { trigger: n, start: 'top bottom', end: 'bottom top', scrub: true } }))

      if (!fine()) return () => cleanups.forEach(fn => fn())

      // Magnetic buttons: pulled toward the cursor, label follows a little further.
      gsap.utils.toArray(MAGNETIC).forEach(btn => {
        const x = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' }), y = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
        on(btn, 'pointermove', e => { const r = btn.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * 0.28); y((e.clientY - r.top - r.height / 2) * 0.38) })
        on(btn, 'pointerleave', () => { x(0); y(0) })
      })

      // 3D tilt plus a spotlight that tracks the pointer (CSS reads --mx/--my).
      gsap.utils.toArray(TILT).forEach(card => {
        gsap.set(card, { transformPerspective: 900 })
        const rx = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3' }), ry = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3' })
        const strength = card.matches('.why-grid article, .case-meta > div') ? 3 : 7
        on(card, 'pointermove', e => {
          const r = card.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height
          card.style.setProperty('--mx', `${px * 100}%`); card.style.setProperty('--my', `${py * 100}%`)
          rx((0.5 - py) * strength); ry((px - 0.5) * strength)
        })
        on(card, 'pointerleave', () => { rx(0); ry(0) })
      })
      gsap.utils.toArray('.service-detail, .case-visual, .contact, .about-card, .portfolio-art').forEach(panel => on(panel, 'pointermove', e => {
        const r = panel.getBoundingClientRect()
        panel.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`); panel.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
      }))

      return () => cleanups.forEach(fn => fn())
    })
    requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => mm.revert()
  }, { dependencies: [pathname], revertOnUpdate: true })

  return <>
    <div className="scroll-progress" aria-hidden="true" />
    <div className="cursor" ref={cursorRef} aria-hidden="true"><span className="cursor-ring"><span className="cursor-label" /></span><span className="cursor-dot" /></div>
  </>
}
