import Link from 'next/link'
import Arrow from '../common/Arrow'
import Faq from '../common/Faq'
import ConsultCta from '../common/ConsultCta'
import Contact from '../contact/Contact'
import JsonLd from '../seo/JsonLd'
import RichText from './RichText'
import { getService } from '../../data/services'
import { landingPath, landingTitleFor } from '../../data/landing'
import { arPath, arTitleFor } from '../../data/landing-ar'
import { ui } from '../../lib/i18n'
import { articleSchema, breadcrumbSchema, faqSchema, landingServiceSchema, webPageSchema } from '../../lib/seo'

const formatDate = (iso, dateLocale) => new Date(`${iso}T00:00:00Z`).toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export function Section({ section, index }) {
  const { eyebrow, heading, emphasis, body = [], list, steps, table, dark } = section
  return <section className={`case-section landing-section${dark ? ' dark' : ''}`}>
    <div className="case-label">{eyebrow || String(index + 1).padStart(2, '0')}</div>
    <div>
      <h2>{heading} {emphasis && <em>{emphasis}</em>}</h2>
      {body.map(paragraph => <p key={paragraph} className="landing-body"><RichText text={paragraph} /></p>)}
      {list && <ul>{list.map(item => <li key={item}><RichText text={item} /></li>)}</ul>}
      {steps && <ol className="landing-steps">{steps.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol>}
      {table && <figure className="data-table">
        <div className="data-table-scroll" tabIndex={0} role="region" aria-label={table.caption}>
          <table>
            <caption>{table.caption}</caption>
            <thead><tr>{table.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>
            <tbody>{table.rows.map(row => <tr key={row.join('|')}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}><RichText text={cell} /></td>)}</tr>)}</tbody>
          </table>
        </div>
        {table.note && <figcaption><RichText text={table.note} /></figcaption>}
      </figure>}
    </div>
  </section>
}

// One template for every commercial landing page and decision guide, in English (data/landing/*.js)
// or Arabic (data/landing-ar/*.js, served under /ar with the Arabic root layout).
export default function LandingPage({ page, locale = 'en' }) {
  const t = ui[locale]
  const l = t.landing
  const ar = locale === 'ar'
  const path = ar ? arPath(page) : landingPath(page)
  const titleFor = href => (ar ? arTitleFor(href, l.englishSuffix) : landingTitleFor(href))
  const date = iso => formatDate(iso, t.dateLocale)
  const isGuide = page.kind === 'guide'
  const parent = getService(page.parentService)
  const title = `${page.h1} ${page.h1Emphasis}`.trim()
  const home = { name: t.home, path: t.homePath }
  // Arabic pages sit directly under /ar, which has no Arabic services or guides index yet.
  const crumbs = ar
    ? [{ name: page.metaTitle, path }]
    : isGuide
      ? [{ name: l.guides, path: '/guides' }, { name: page.metaTitle, path }]
      : [...(parent ? [{ name: l.services, path: '/services' }, { name: parent.title, path: `/services/${parent.slug}` }] : []), { name: page.metaTitle, path }]
  const meta = { path, title: page.metaTitle, description: page.metaDescription, dateModified: page.updated, datePublished: page.published, locale }

  return <main className="landing">
    <JsonLd items={[
      webPageSchema(meta),
      breadcrumbSchema(crumbs, home),
      isGuide ? articleSchema({ ...meta, headline: title, sources: page.sources }) : landingServiceSchema({ ...meta, name: page.metaTitle, intro: page.intro, arabicTerms: page.arabicTerms }),
      faqSchema(page.faqs, path),
    ]} />

    <nav className="breadcrumbs" aria-label={l.breadcrumb}><ol>{[home, ...crumbs].map((crumb, i, all) => <li key={crumb.path}>{i < all.length - 1 ? <Link href={crumb.path}>{crumb.name}</Link> : <span aria-current="page">{crumb.name}</span>}</li>)}</ol></nav>

    <section className="page-hero landing-hero">
      <span className="eyebrow">{page.eyebrow}</span>
      <h1>{page.h1} <em>{page.h1Emphasis}</em></h1>
      <p>{page.intro}</p>
      <div className="hero-actions">
        <Link className="button primary" href="#contact">{page.cta} <Arrow rtl={ar} /></Link>
        {parent && !isGuide && <Link className="button secondary" href={ar ? t.homePath : `/services/${parent.slug}`}>{l.allServices(parent.title)} <Arrow rtl={ar} /></Link>}
      </div>
      <p className="page-updated">{ar ? `${l.updated}: ` : `${isGuide ? l.guide : l.page} ${l.updated} `}<time dateTime={page.updated}>{date(page.updated)}</time> · {l.by}</p>
      {page.keyFacts?.length > 0 && <dl className="key-facts">{page.keyFacts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
    </section>

    {page.sections.map((section, i) => <Section key={section.heading} section={section} index={i} />)}

    {!ar && page.arabicTerms?.length > 0 && <section className="case-section landing-terms">
      <div className="case-label">{l.termsLabel}</div>
      <div><h3>{l.termsTitle}</h3><div className="pill-list" lang="ar" dir="rtl">{page.arabicTerms.map(term => <span key={term}>{term}</span>)}</div></div>
    </section>}

    <Faq label={l.faqLabel} title={l.faqTitle} emphasis={l.faqEmphasis} faqs={page.faqs} />

    {page.related?.length > 0 && <section className="case-section">
      <div className="case-label">{l.relatedLabel}</div>
      <div><h2>{l.relatedTitle} <em>{l.relatedEmphasis}</em></h2><div className="offering-list">{page.related.map((href, i) => <div key={href}><span>{String(i + 1).padStart(2, '0')}</span><strong><Link href={href} lang={ar && !href.startsWith('/ar') ? 'en' : undefined}>{titleFor(href)}</Link></strong><Arrow rtl={ar} /></div>)}</div></div>
    </section>}

    <Contact locale={locale} defaultService={page.formService} index={l.contactIndex} title={isGuide ? l.contactTitleGuide : l.contactTitle} emphasis={isGuide ? l.contactEmphasisGuide : l.contactEmphasis} description={l.contactDescription} />

    {page.sources?.length > 0 && <section className="sources" aria-labelledby="sources-heading">
      <h2 id="sources-heading">{l.sources}</h2>
      <p>{l.sourcesNote}</p>
      <ol>{page.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>{source.accessed && <span> ({l.accessed} {date(source.accessed)})</span>}</li>)}</ol>
    </section>}

    <ConsultCta locale={locale} title={isGuide ? l.consultTitleGuide : l.consultTitle} text={l.consultText} cta={page.cta} href="#contact" whatsappText={page.whatsappText} />
  </main>
}
