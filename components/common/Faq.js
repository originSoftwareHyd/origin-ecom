// Answer-first FAQ block. Answers are server-rendered (native <details>), so crawlers and AI engines read them
// even when collapsed. Pair with faqSchema() using the same items so visible and structured content match.
export default function Faq({ label, title, emphasis, faqs, id = 'faq' }) {
  return <section id={id} className="case-section faq">
    <div className="case-label">{label}</div>
    <div><h2>{title} {emphasis && <em>{emphasis}</em>}</h2><div className="faq-list">{faqs.map((faq, i) => <details key={faq.q} open={i === 0}><summary><h3>{faq.q}</h3></summary><p>{faq.a}</p></details>)}</div></div>
  </section>
}
