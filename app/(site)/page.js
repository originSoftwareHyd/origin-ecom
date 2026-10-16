import Hero from '../../components/home/Hero'
import Marquee from '../../components/home/Marquee'
import WhyAI from '../../components/home/WhyAI'
import Services from '../../components/services/Services'
import About from '../../components/home/About'
import Work from '../../components/work/Work'
import Process from '../../components/home/Process'
import Vision from '../../components/home/Vision'
import Faq from '../../components/common/Faq'
import Contact from '../../components/contact/Contact'
import JsonLd from '../../components/seo/JsonLd'
import { siteData } from '../../data/site'
import { services } from '../../data/services'
import { buildMetadata, faqSchema, serviceListSchema, webPageSchema } from '../../lib/seo'

const title = 'E-commerce, Web & AI Solutions in Saudi Arabia | Origin Ecommerce'
const description = 'E-commerce stores, bilingual websites, apps, ERPNext with ZATCA e-invoicing and AI automation for businesses in Riyadh, Jeddah and across Saudi Arabia.'

export const metadata = buildMetadata({ title, description, path: '/', absoluteTitle: true })

export default function Home(){const faq=siteData.sections.faq;return <main><JsonLd items={[webPageSchema({path:'/',title,description}),serviceListSchema(services),faqSchema(siteData.faqs,'/')]}/><Hero/><Marquee/><WhyAI/><Services/><About/><Work/><Process/><Vision/><Faq label={faq.index} title={faq.title} emphasis={faq.emphasis} faqs={siteData.faqs}/><Contact/></main>}
