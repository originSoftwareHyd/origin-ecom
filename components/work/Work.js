'use client'
import {useState} from 'react'
import Link from 'next/link'
import {portfolio} from '../../data/portfolio'
import {siteData} from '../../data/site'
import SectionHeading from '../common/SectionHeading'
import Arrow from '../common/Arrow'
export default function Work(){
 const [active,setActive]=useState(0); const projects=portfolio.slice(0,6); const project=projects[active]
 return <section id="work" className="section work"><SectionHeading {...siteData.sections.work}/><div className="work-feature"><div className="case-visual"><div className="case-lines"/><span className="case-no">{String(active+1).padStart(2,'0')} / 06</span><span className="case-logo">{project.title.slice(0,18)}</span></div><div className="case-copy"><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.subtitle}</p><Link className="text-link" href={`/portfolio/${project.slug}`}>View case study <Arrow/></Link></div></div><div className="work-tabs">{projects.slice(0,3).map((item,i)=><button type="button" key={item.slug} className={i===active?'active':''} onClick={()=>setActive(i)}><span>0{i+1}</span><b>{item.title}</b><small>{item.category}</small></button>)}</div><Link className="center-link" href="/portfolio">View all projects <Arrow/></Link></section>
}
