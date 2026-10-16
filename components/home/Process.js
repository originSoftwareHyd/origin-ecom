'use client'
import { useRef, useState } from 'react'
import { siteData } from '../../data/site'
import SectionHeading from '../common/SectionHeading'
import useSwapAnimation from '../motion/useSwapAnimation'

export default function Process() { const [active, setActive] = useState(0); const phase = siteData.process[active]; const detail = useRef(null); useSwapAnimation(detail, active, ':scope > :not(.progress)'); return <section id="process" className="section process"><SectionHeading {...siteData.sections.process} /><div className="process-box"><div className="process-nav">{siteData.process.map((item, i) => <button type="button" key={item.title} className={active === i ? 'active' : ''} onClick={() => setActive(i)}><span>{item.number}</span><strong>{item.title}</strong></button>)}</div><div className="process-detail" ref={detail}><span className="big-number">{phase.number}</span><span className="eyebrow">PHASE {phase.number}</span><h3>{phase.title}</h3><p>{phase.description}</p><div className="progress"><i style={{ width: `${((active + 1) / siteData.process.length) * 100}%` }} /></div></div></div></section> }
