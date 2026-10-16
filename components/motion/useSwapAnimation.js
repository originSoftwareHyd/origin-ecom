'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

// Re-animates a panel's children whenever `key` changes (tab switches); skips the first render.
export default function useSwapAnimation(scope, key, selector = ':scope > *') {
  useGSAP((context, contextSafe) => {
    if (!scope.current?.dataset.swapped) { if (scope.current) scope.current.dataset.swapped = '1'; return }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo(scope.current.querySelectorAll(selector), { autoAlpha: 0, y: 24, filter: 'blur(6px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out', stagger: 0.05, clearProps: 'filter' })
  }, { scope, dependencies: [key] })
}
