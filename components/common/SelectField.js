'use client'
import { useEffect, useId, useRef, useState } from 'react'

// Accessible custom dropdown (WAI-ARIA select-only combobox). Submits through a hidden input,
// so it drops into any <form> that reads values with FormData.
export default function SelectField({ label, name, options, defaultValue = '', placeholder = 'Select an option' }) {
  const id = useId()
  const [value, setValue] = useState(options.some(o => o.value === defaultValue) ? defaultValue : '')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const root = useRef(null), list = useRef(null), typed = useRef({ text: '', timer: 0 })
  const selected = options.find(o => o.value === value)

  useEffect(() => {
    if (!open) return
    const close = e => { if (!root.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  useEffect(() => { if (open) list.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' }) }, [open, active])

  const show = () => { setActive(Math.max(0, options.findIndex(o => o.value === value))); setOpen(true) }
  const choose = i => { setValue(options[i].value); setOpen(false) }

  function onKeyDown(e) {
    const last = options.length - 1
    const move = i => { e.preventDefault(); if (!open) return show(); setActive(Math.min(last, Math.max(0, i))) }
    switch (e.key) {
      case 'ArrowDown': return move(active + 1)
      case 'ArrowUp': return move(active - 1)
      case 'Home': return move(0)
      case 'End': return move(last)
      case 'Enter': case ' ': e.preventDefault(); return open ? choose(active) : show()
      case 'Escape': if (open) { e.preventDefault(); setOpen(false) } return
      case 'Tab': if (open) choose(active); return
      default:
        if (e.key.length !== 1 || e.metaKey || e.ctrlKey || e.altKey) return
        // Type-ahead: jump to the first option starting with the letters typed.
        clearTimeout(typed.current.timer)
        typed.current.text += e.key.toLowerCase()
        typed.current.timer = setTimeout(() => { typed.current.text = '' }, 600)
        const match = options.findIndex(o => o.label.toLowerCase().startsWith(typed.current.text))
        if (match >= 0) { if (!open) show(); setActive(match) }
    }
  }

  return <div className={`select-field${open ? ' is-open' : ''}${value ? ' has-value' : ''}`} ref={root}>
    <span className="select-label" id={`${id}-label`}>{label}</span>
    <input type="hidden" name={name} value={value} />
    <button type="button" className="select-trigger" role="combobox" aria-haspopup="listbox" aria-expanded={open} aria-controls={`${id}-list`} aria-labelledby={`${id}-label ${id}-value`}
      aria-activedescendant={open ? `${id}-opt-${active}` : undefined} onClick={() => (open ? setOpen(false) : show())} onKeyDown={onKeyDown}>
      <span id={`${id}-value`} className="select-value">{selected ? selected.label : placeholder}</span>
      <svg className="select-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
    <ul className="select-list" id={`${id}-list`} role="listbox" aria-labelledby={`${id}-label`} ref={list} data-lenis-prevent>
      {options.map((option, i) => <li key={option.value} id={`${id}-opt-${i}`} data-index={i} role="option" aria-selected={option.value === value}
        className={i === active ? 'is-active' : undefined} onPointerEnter={() => setActive(i)} onPointerDown={e => e.preventDefault()} onClick={() => choose(i)}>
        {option.tag && <span className="select-tag">{option.tag}</span>}
        <span className="select-text"><b>{option.label}</b>{option.hint && <small>{option.hint}</small>}</span>
        <svg className="select-check" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </li>)}
    </ul>
  </div>
}
