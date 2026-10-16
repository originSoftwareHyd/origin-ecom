import Contact from '../../../components/contact/Contact'
import JsonLd from '../../../components/seo/JsonLd'
import {breadcrumbSchema,buildMetadata,webPageSchema} from '../../../lib/seo'

const title='Contact Origin Ecommerce'
const description='Book a free consultation with Origin Ecommerce for your online store, website, app, ERP, ZATCA e-invoicing, AI or marketing project in Saudi Arabia.'
const steps=[['01','We review your enquiry and goals'],['02','Free consultation call or meeting online'],['03','Written proposal with scope, timeline and cost'],['04','Kick-off once you are confident in the plan']]

export const metadata=buildMetadata({title,description,path:'/contact'})

export default function ContactPage(){return <main className="contact-page"><JsonLd items={[webPageSchema({path:'/contact',title,description,type:'ContactPage'}),breadcrumbSchema([{name:'Contact',path:'/contact'}])]}/><section className="page-hero"><span className="eyebrow">ORIGIN ECOMMERCE / CONTACT</span><h1>Let&apos;s plan your next <em>growth move.</em></h1><p>Tell us what you want to launch, fix or scale, whether it is an online store, a bilingual website, an app, ERP with ZATCA e-invoicing or a marketing programme. Your first consultation is free and carries no obligation.</p></section><Contact index="SEND AN ENQUIRY" title="Tell us about" emphasis="your project."/><section className="service-process"><span className="eyebrow">WHAT HAPPENS NEXT</span><h2>A simple, <em>no-pressure start.</em></h2><div className="mini-process">{steps.map(([n,x])=><div key={n}><span>{n}</span><p>{x}</p></div>)}</div></section></main>}
