import Link from 'next/link'
import Arrow from '../common/Arrow'
import Faq from '../common/Faq'
import ConsultCta from '../common/ConsultCta'
import Contact from '../contact/Contact'
import JsonLd from '../seo/JsonLd'
import { Section } from '../landing/LandingPage'
import { about } from '../../data/about'
import { ui } from '../../lib/i18n'
import { breadcrumbSchema, faqSchema, webPageSchema } from '../../lib/seo'

// About page in English (/about) or Arabic (/ar/about). Content lives in data/about.js; sections reuse the
// landing-page template so the page matches the rest of the site in both directions.
export default function AboutPage({ locale = 'en' }) {
  const page = about[locale]
  const t = ui[locale]
  const l = t.landing
  const ar = locale === 'ar'
  const home = { name: t.home, path: t.homePath }
  const crumbs = [{ name: page.breadcrumb, path: page.path }]
  const date = new Date(`${page.updated}T00:00:00Z`).toLocaleDateString(t.dateLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

  return <main className="landing">
    <JsonLd items={[
      webPageSchema({ path: page.path, title: page.metaTitle, description: page.metaDescription, type: 'AboutPage', dateModified: page.updated, locale }),
      breadcrumbSchema(crumbs, home),
      faqSchema(page.faqs, page.path),
    ]} />

    <nav className="breadcrumbs" aria-label={l.breadcrumb}><ol>{[home, ...crumbs].map((crumb, i, all) => <li key={crumb.path}>{i < all.length - 1 ? <Link href={crumb.path}>{crumb.name}</Link> : <span aria-current="page">{crumb.name}</span>}</li>)}</ol></nav>

    <section className="page-hero landing-hero">
      <span className="eyebrow">{page.eyebrow}</span>
      <h1>{page.h1} <em>{page.h1Emphasis}</em></h1>
      <p>{page.intro}</p>
      <div className="hero-actions">
        <Link className="button primary" href="#contact">{page.primaryCta} <Arrow rtl={ar} /></Link>
        <Link className="button secondary" href={page.secondaryHref || '/services'}>{page.secondaryCta} <Arrow rtl={ar} /></Link>
      </div>
      <p className="page-updated">{ar ? `${l.updated}: ` : `${l.page} ${l.updated} `}<time dateTime={page.updated}>{date}</time> · {l.by}</p>
    </section>

    <Section section={page.problem} index={0} />

    <section className="case-section">
      <div className="case-label">{page.pillars.eyebrow}</div>
      <div><h2>{page.pillars.heading} <em>{page.pillars.emphasis}</em></h2><div className="offering-list about-pillars">{page.pillars.items.map((item, i) => <div key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><div><strong><Link href={item.href} lang={ar && !item.href.startsWith('/ar') ? 'en' : undefined}>{item.title}</Link></strong><p>{item.text}</p></div><Arrow rtl={ar} /></div>)}</div></div>
    </section>

    <Section section={page.standard} index={2} />
    <Section section={page.process} index={3} />
    <Section section={{ ...page.principles, list: page.principles.items, dark: true }} index={4} />

    <Faq label={page.faqLabel} title={page.faqTitle} emphasis={page.faqEmphasis} faqs={page.faqs} />

    <Contact locale={locale} index={page.contactIndex} title={page.contactTitle} emphasis={page.contactEmphasis} description={l.contactDescription} />

    <ConsultCta locale={locale} title={l.consultTitle} text={l.consultText} cta={page.primaryCta} href="#contact" whatsappText={t.whatsappText} />
  </main>
}
