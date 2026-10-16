import { siteData } from '../../data/site'
import Arrow from '../common/Arrow'

export default function Hero() {
  return <section id="top" className="hero">
    <div className="hero-grid" aria-hidden="true" /><div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
    <div className="hero-copy"><div className="kicker"><span /> {siteData.brand.tagline}</div>
      <h1>{siteData.hero.title} <em>{siteData.hero.emphasis}</em></h1><p>{siteData.brand.description}</p>
      <div className="hero-actions"><a className="button primary" href="#contact">{siteData.hero.primaryCta} <Arrow /></a><a className="button secondary" href="#work">{siteData.hero.secondaryCta} <Arrow /></a></div>
      <div className="hero-proof">{siteData.hero.proof.map((item, i) => <span key={item}>{i ? `· ${item}` : item}</span>)}</div>
    </div>
    <div className="hero-visual" aria-hidden="true"><div className="visual-ring ring-a" />
    <div className="visual-ring ring-b" /><div className="visual-ring ring-c" /><div className="visual-core"><small>{siteData.hero.visual.label}</small><strong>{siteData.hero.visual.mark}</strong><span>{siteData.hero.visual.caption[0]}<br />{siteData.hero.visual.caption[1]}</span></div>{siteData.hero.signals.map(signal => <div key={signal.label} className={`signal ${signal.position}`}>{signal.label} <b>{signal.number}</b></div>)}</div>
  </section>
}
