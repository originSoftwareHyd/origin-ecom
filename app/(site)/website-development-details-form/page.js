import Contact from '../../../components/contact/Contact'
import Arrow from '../../../components/common/Arrow'
import {buildMetadata} from '../../../lib/seo'

const checklist=['Type of site: corporate website, online store, portal or landing page','Languages: Arabic, English or both','Approximate number of pages or products','Features: payments, bookings, logins, ERP or CRM integration','Examples of websites you like, and your target launch date']

// Form-only page: noindex so it never competes with /services/web-development in search.
export const metadata=buildMetadata({title:'Website Project Brief',description:'Share your website or online store requirements with Origin Ecommerce and receive a tailored proposal for your project in Saudi Arabia.',path:'/website-development-details-form',noindex:true})

export default function Page(){return <main className="contact-page"><section className="page-hero"><span className="eyebrow">WEBSITE PROJECT BRIEF</span><h1>Tell us what you need to <em>build.</em></h1><p>Share a few details about your website or online store. The more we know, the more precise your proposal will be. We will come back with recommendations, a timeline and a fixed, itemised quote.</p></section><section className="service-content"><div><span className="eyebrow">HELPFUL TO INCLUDE</span><h2>Your brief <em>checklist.</em></h2></div><div className="offering-list">{checklist.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><Arrow/></div>)}</div></section><Contact index="PROJECT DETAILS" title="Request your" emphasis="website proposal." description="Not sure about every detail yet? Send what you have. We will help you shape the rest during a free consultation." defaultService="Web Development"/></main>}
