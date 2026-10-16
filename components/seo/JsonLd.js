// Renders one JSON-LD graph. "<" is escaped so content can never close the script tag early.
export default function JsonLd({ items }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': items.filter(Boolean) }).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
