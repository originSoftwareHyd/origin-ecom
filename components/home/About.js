import { siteData } from '../../data/site'
import Arrow from '../common/Arrow'

export default function About() { return <section id="about" className="section about"><div className="about-card"><div><span className="index">{siteData.sections.about.index}</span><h2>{siteData.about.title}</h2><p>{siteData.about.text}</p><a href="#contact" className="button secondary">Talk to our team <Arrow /></a></div><div className="about-list">{siteData.about.bullets.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong><Arrow /></div>)}</div></div></section> }
