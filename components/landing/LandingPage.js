import Link from 'next/link'
import Arrow from '../common/Arrow'
import Faq from '../common/Faq'
import ConsultCta from '../common/ConsultCta'
import Contact from '../contact/Contact'
import JsonLd from '../seo/JsonLd'
import RichText from './RichText'
import { getService } from '../../data/services'
import { landingPath, landingTitleFor } from '../../data/landing'
import { articleSchema, breadcrumbSchema, faqSchema, landingServiceSchema, webPageSchema } from '../../lib/seo'

const formatDate = iso => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

function Section({ section, index }) {
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

// One template for every commercial landing page and decision guide (data/landing/*.js).
export default function LandingPage({ page }) {
  const path = landingPath(page)
  const isGuide = page.kind === 'guide'
  const parent = getService(page.parentService)
  const title = `${page.h1} ${page.h1Emphasis}`.trim()
  const crumbs = isGuide
    ? [{ name: 'Guides', path: '/guides' }, { name: page.metaTitle, path }]
    : [...(parent ? [{ name: 'Services', path: '/services' }, { name: parent.title, path: `/services/${parent.slug}` }] : []), { name: page.metaTitle, path }]
  const meta = { path, title: page.metaTitle, description: page.metaDescription, dateModified: page.updated, datePublished: page.published }

  return <main className="landing">
    <JsonLd items={[
      webPageSchema(meta),
      breadcrumbSchema(crumbs),
      isGuide ? articleSchema({ ...meta, headline: title, sources: page.sources }) : landingServiceSchema({ ...meta, name: page.metaTitle, intro: page.intro, arabicTerms: page.arabicTerms }),
      faqSchema(page.faqs, path),
    ]} />

    <nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{[{ name: 'Home', path: '/' }, ...crumbs].map((crumb, i, all) => <li key={crumb.path}>{i < all.length - 1 ? <Link href={crumb.path}>{crumb.name}</Link> : <span aria-current="page">{crumb.name}</span>}</li>)}</ol></nav>

    <section className="page-hero landing-hero">
      <span className="eyebrow">{page.eyebrow}</span>
      <h1>{page.h1} <em>{page.h1Emphasis}</em></h1>
      <p>{page.intro}</p>
      <div className="hero-actions">
        <Link className="button primary" href="#contact">{page.cta} <Arrow /></Link>
        {parent && !isGuide && <Link className="button secondary" href={`/services/${parent.slug}`}>All {parent.title.toLowerCase()} services <Arrow /></Link>}
      </div>
      <p className="page-updated">{isGuide ? 'Guide' : 'Page'} updated <time dateTime={page.updated}>{formatDate(page.updated)}</time> · by the Origin Ecommerce team</p>
      {page.keyFacts?.length > 0 && <dl className="key-facts">{page.keyFacts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
    </section>

    {page.sections.map((section, i) => <Section key={section.heading} section={section} index={i} />)}

    {page.arabicTerms?.length > 0 && <section className="case-section landing-terms">
      <div className="case-label">IN ARABIC</div>
      <div><h3>Also searched as</h3><div className="pill-list" lang="ar" dir="rtl">{page.arabicTerms.map(term => <span key={term}>{term}</span>)}</div></div>
    </section>}

    <Faq label="FREQUENTLY ASKED" title="Questions" emphasis="answered." faqs={page.faqs} />

    {page.related?.length > 0 && <section className="case-section">
      <div className="case-label">KEEP READING</div>
      <div><h2>Related <em>pages.</em></h2><div className="offering-list">{page.related.map((href, i) => <div key={href}><span>{String(i + 1).padStart(2, '0')}</span><strong><Link href={href}>{landingTitleFor(href)}</Link></strong><Arrow /></div>)}</div></div>
    </section>}

    <Contact defaultService={page.formService} index="START YOUR PROJECT" title={isGuide ? 'Want a recommendation' : 'Talk to us about'} emphasis={isGuide ? 'for your business?' : 'your project.'} description="Tell us what you sell, the systems you use and your timeline. We reply with initial recommendations and a suggested next step for a free consultation." />

    {page.sources?.length > 0 && <section className="sources" aria-labelledby="sources-heading">
      <h2 id="sources-heading">Sources</h2>
      <p>Facts on this page were checked against these sources on the dates shown. Rules and prices change, so confirm anything critical with the source.</p>
      <ol>{page.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>{source.accessed && <span> (accessed {formatDate(source.accessed)})</span>}</li>)}</ol>
    </section>}

    <ConsultCta title={isGuide ? 'Prefer to talk it through?' : `Ready to start?`} text="Book a free consultation. We review your goals and current setup, recommend the right approach and follow up with a written proposal covering scope, timeline and cost." cta={page.cta} href="#contact" whatsappText={page.whatsappText} />
  </main>
}
