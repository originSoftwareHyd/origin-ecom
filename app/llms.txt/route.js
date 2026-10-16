import { businessConfig } from '../../config/business.config'
import { services } from '../../data/services'
import { siteData } from '../../data/site'
import { absoluteUrl } from '../../lib/seo'

// llms.txt (https://llmstxt.org): a plain-language summary that AI assistants can read to understand
// the business. It is generated from the same data as the pages, so facts stay consistent everywhere.
export const dynamic = 'force-static'

export function GET() {
  const { name, email, phone, areaServed } = businessConfig
  const body = [
    `# ${name}`,
    '',
    `> ${siteData.brand.summary}`,
    '',
    `- Market: Saudi Arabia (${areaServed.join(', ')}), working online with businesses across the Kingdom`,
    `- Languages: ${businessConfig.languages.join(' and ')}`,
    `- Contact: ${email}${phone ? `, ${phone}` : ''}, or ${absoluteUrl('/contact')}`,
    `- First step: a free consultation, followed by a written proposal with scope, timeline and cost`,
    '',
    '## Services',
    '',
    ...services.map(service => `- [${service.title}](${absoluteUrl(`/services/${service.slug}`)}): ${service.intro}`),
    '',
    '## Key pages',
    '',
    `- [Home](${absoluteUrl('/')}): overview, process and frequently asked questions`,
    `- [All services](${absoluteUrl('/services')})`,
    `- [Free consultation](${absoluteUrl('/website-consulting')})`,
    `- [Contact](${absoluteUrl('/contact')})`,
    '',
    '## Frequently asked questions',
    '',
    ...siteData.faqs.flatMap(faq => [`### ${faq.q}`, '', faq.a, '']),
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
