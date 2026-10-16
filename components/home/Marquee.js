import { services } from '../../data/services'
import { siteData } from '../../data/site'

const items = [...services.map(service => service.title), ...siteData.hero.proof.slice(-2)]

// Infinite band: the list is rendered twice and the track slides by half its width.
export default function Marquee() {
  return <section className="marquee" aria-label="What we do">
    <div className="marquee-track">
      {[0, 1].map(copy => <ul key={copy} aria-hidden={copy === 1 || undefined}>{items.map(item => <li key={item}>{item}</li>)}</ul>)}
    </div>
  </section>
}
