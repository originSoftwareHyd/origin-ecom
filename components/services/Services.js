'use client'
import { useState } from 'react'
import { siteData } from '../../data/site'
import { services } from '../../data/services'
import SectionHeading from '../common/SectionHeading'
import Arrow from '../common/Arrow'

export default function Services() { const [active, setActive] = useState(0); const service = services[active]; return <section id="services" className="section services"><SectionHeading {...siteData.sections.services} /><div className="service-explorer"><div className="service-nav">{services.map((item, i) => <button type="button" key={item.slug} className={i === active ? 'active' : ''} onClick={() => setActive(i)}><span>{String(i + 1).padStart(2, '0')}</span>{item.title}<Arrow /></button>)}</div><div className="service-detail"><div className="service-mark">{service.shortLabel}</div><span className="eyebrow">Selected service</span><h3>{service.title}</h3><p>{service.description}</p><div className="service-meta">{service.offerings.map(capability => <span key={capability}>{capability}</span>)}</div><a href="#contact" className="text-link">Discuss this service <Arrow /></a></div></div></section> }
