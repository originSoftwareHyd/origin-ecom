'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { siteData } from '../../data/site'
import { services } from '../../data/services'
import SectionHeading from '../common/SectionHeading'
import Arrow from '../common/Arrow'
import useSwapAnimation from '../motion/useSwapAnimation'

export default function Services() { const [active, setActive] = useState(0); const service = services[active]; const detail = useRef(null); useSwapAnimation(detail, active); return <section id="services" className="section services"><SectionHeading {...siteData.sections.services} /><div className="service-explorer"><div className="service-nav">{services.map((item, i) => <button type="button" key={item.slug} className={i === active ? 'active' : ''} onClick={() => setActive(i)}><span>{String(i + 1).padStart(2, '0')}</span>{item.title}<Arrow /></button>)}</div><div className="service-detail" ref={detail}><div className="service-mark">{service.shortLabel}</div><span className="eyebrow">Selected service</span><h3>{service.title}</h3><p>{service.description}</p><div className="service-meta">{service.offerings.map(capability => <span key={capability}>{capability}</span>)}</div><Link href={`/services/${service.slug}`} className="text-link">Explore {service.title} <Arrow /></Link></div></div></section> }
