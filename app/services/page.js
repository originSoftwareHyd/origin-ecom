import Link from 'next/link'
import {services} from '../../data/services'
import Arrow from '../../components/common/Arrow'
export const metadata={title:'Services | StandardTouch'}
export default function ServicesPage(){return <main><section className="page-hero"><span className="eyebrow">STANDARDTOUCH / SERVICES</span><h1>End-to-end solutions <em>built for enterprise impact.</em></h1><p>From discovery and content planning to design, development, testing and launch, StandardTouch builds practical digital systems around users, processes and measurable outcomes.</p></section><section className="services-page-grid">{services.map((s,i)=><Link key={s.slug} href={`/services/${s.slug}`} className="service-page-card"><span>{String(i+1).padStart(2,'0')}</span><small>{s.shortLabel}</small><h2>{s.title}</h2><p>{s.intro}</p><div className="pill-list">{s.offerings.slice(0,4).map(x=><span key={x}>{x}</span>)}</div><b>Explore service <Arrow/></b></Link>)}</section></main>}
