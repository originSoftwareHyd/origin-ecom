import { siteData } from '../../data/site'
import SectionHeading from '../common/SectionHeading'

export default function WhyAI() { return <section className="section why"><SectionHeading {...siteData.sections.why} /><div className="why-grid">{siteData.whyAi.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section> }
