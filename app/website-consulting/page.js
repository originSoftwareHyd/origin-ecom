import Link from 'next/link'
import Arrow from '../../components/common/Arrow'
import Faq from '../../components/common/Faq'
import ConsultCta from '../../components/common/ConsultCta'
import Contact from '../../components/contact/Contact'
import JsonLd from '../../components/seo/JsonLd'
import {breadcrumbSchema,buildMetadata,faqSchema,webPageSchema} from '../../lib/seo'

const title='Free Website & E-commerce Consultation in KSA'
const description='Book a free, no-obligation consultation on your website, online store, app or ERP project in Saudi Arabia. Get a clear recommendation and a written proposal.'
const covers=['Your goals, customers and current website or store','Platform fit: Salla, Zid, Shopify, WooCommerce or custom','Payments, shipping, ERP and ZATCA e-invoicing requirements','Arabic and English content and SEO opportunities','Realistic timeline, budget range and next steps']
const faqs=[
 {q:'Is the consultation really free?',a:'Yes. The first consultation is free and carries no obligation. If you decide to go ahead, we follow up with a written proposal covering scope, timeline and cost.'},
 {q:'What should I prepare before the call?',a:'A short description of your business, what you want to achieve, any existing website or store link, and the systems you already use, such as accounting software or an ERP. Example sites you like are helpful too.'},
 {q:'How is the consultation held?',a:'Consultations are held online by video call, so businesses anywhere in Saudi Arabia can book one. You can also start the conversation by email or WhatsApp.'},
]

export const metadata=buildMetadata({title,description,path:'/website-consulting'})

export default function Page(){return <main><JsonLd items={[webPageSchema({path:'/website-consulting',title,description}),breadcrumbSchema([{name:'Free Consultation',path:'/website-consulting'}]),faqSchema(faqs,'/website-consulting')]}/><section className="page-hero"><span className="eyebrow">FREE CONSULTATION / SAUDI ARABIA</span><h1>Got a project in mind? <em>Get expert advice, free.</em></h1><p>Planning a new online store, a bilingual company website, an app or an ERP rollout? Book a free consultation with Origin Ecommerce and leave with a clear recommendation on platform, scope and next steps, whether or not you work with us.</p><Link className="button primary" href="#contact">Book my free consultation <Arrow/></Link></section><section className="service-content"><div><span className="eyebrow">WHAT WE COVER</span><h2>One call. <em>A clear plan.</em></h2></div><div className="offering-list">{covers.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><Arrow/></div>)}</div></section><Faq label="CONSULTATION FAQ" title="Before you" emphasis="book." faqs={faqs}/><Contact index="BOOK YOUR CONSULTATION" title="Tell us what you" emphasis="want to build."/><ConsultCta eyebrow="EXPLORE FIRST" title="Want to see what we build first?" text="Browse our services and solution blueprints to see how we approach online stores, ERP and ZATCA, apps, AI and marketing for Saudi businesses." cta="View services" href="/services"/></main>}
