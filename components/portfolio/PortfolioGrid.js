'use client'
import {useMemo,useState} from 'react'
import PortfolioCard from './PortfolioCard'
export default function PortfolioGrid({projects}){const [filter,setFilter]=useState('All'); const filters=useMemo(()=>['All',...Array.from(new Set(projects.map(p=>p.category.split('·')[0].trim()))).slice(0,7)],[projects]); const shown=filter==='All'?projects:projects.filter(p=>p.category.includes(filter)); return <><div className="portfolio-filters">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="portfolio-grid">{shown.map(p=><PortfolioCard key={p.slug} project={p}/>)}</div></>}
