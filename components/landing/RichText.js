import Link from 'next/link'

// Renders a content string that may contain [text](url) links (the only markup landing data allows).
// Internal paths use next/link; external URLs open in a new tab.
export default function RichText({ text }) {
  const parts = []
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g
  let last = 0
  for (const match of text.matchAll(pattern)) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    const [, label, href] = match
    parts.push(href.startsWith('/')
      ? <Link key={match.index} href={href}>{label}</Link>
      : <a key={match.index} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}
