import Link from 'next/link'
import {services} from '../../data/services'
import Arrow from '../../components/common/Arrow'
import Faq from '../../components/common/Faq'
import ConsultCta from '../../components/common/ConsultCta'
import JsonLd from '../../components/seo/JsonLd'
import {breadcrumbSchema,buildMetadata,faqSchema,serviceListSchema,webPageSchema} from '../../lib/seo'

const title='Digital Services for Saudi Businesses'
const description='E-commerce development, bilingual websites, mobile apps, ERPNext with ZATCA e-invoicing, AI automation, SEO and custom software for businesses across Saudi Arabia.'
const faqs=[
 {q:'Which service should I start with?',a:'Start with the bottleneck that limits revenue today. If you have no online sales channel, start with an e-commerce store or website. If orders are growing but operations struggle, ERP and automation come first. If the site exists but traffic is low, start with SEO and paid campaigns. A free consultation helps confirm the right order.'},
 {q:'Can Origin Ecommerce handle several services in one project?',a:'Yes. Many projects combine services, for example an online store connected to ERPNext with ZATCA e-invoicing and supported by SEO. One team owns the whole scope, so integrations and timelines stay aligned.'},
 {q:'Do you work with businesses outside Riyadh?',a:'Yes. We work with businesses across Saudi Arabia, including Jeddah, Dammam, Al Khobar, Jubail, Makkah and Madinah. Discovery, reviews and support run online.'},
]

export const metadata=buildMetadata({title,description,path:'/services'})

export default function ServicesPage(){return <main><JsonLd items={[webPageSchema({path:'/services',title,description,type:'CollectionPage'}),breadcrumbSchema([{name:'Services',path:'/services'}]),serviceListSchema(services),faqSchema(faqs,'/services')]}/><section className="page-hero"><span className="eyebrow">ORIGIN ECOMMERCE / SERVICES</span><h1>Digital services that help Saudi businesses <em>sell more online.</em></h1><p>From your first online store to ERP, ZATCA e-invoicing, apps and AI automation, Origin Ecommerce plans, builds and grows the systems that turn traffic into orders and enquiries for businesses across the Kingdom.</p></section><section className="services-page-grid">{services.map((s,i)=><Link key={s.slug} href={`/services/${s.slug}`} className="service-page-card"><span>{String(i+1).padStart(2,'0')}</span><small>{s.shortLabel}</small><h2>{s.title}</h2><p>{s.intro}</p><div className="pill-list">{s.offerings.slice(0,4).map(x=><span key={x}>{x}</span>)}</div><b>Explore {s.title} <Arrow/></b></Link>)}</section><Faq label="SERVICE QUESTIONS" title="Choosing the" emphasis="right service." faqs={faqs}/><ConsultCta title="Not sure where to start?" text="Tell us about your business and goals. In a free consultation we will recommend the services, platform and sequence that will get you results fastest, with no obligation."/></main>}
