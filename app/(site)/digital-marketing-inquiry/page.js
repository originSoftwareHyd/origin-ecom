import Contact from '../../../components/contact/Contact'
import Arrow from '../../../components/common/Arrow'
import {buildMetadata} from '../../../lib/seo'

const checklist=['Your goal: more leads, more online sales or more brand awareness','Your website or store link and the products or services to promote','Current channels: Google, Snapchat, TikTok, Meta, LinkedIn or SEO','Target cities or regions in Saudi Arabia','Approximate monthly advertising budget (in SAR) and start date']

// Form-only page: noindex so it never competes with /services/digital-marketing in search.
export const metadata=buildMetadata({title:'Digital Marketing Enquiry',description:'Tell Origin Ecommerce about your SEO and advertising goals in Saudi Arabia and receive a tailored growth plan.',path:'/digital-marketing-inquiry',noindex:true})

export default function Page(){return <main className="contact-page"><section className="page-hero"><span className="eyebrow">DIGITAL MARKETING ENQUIRY</span><h1>Plan your next <em>growth campaign.</em></h1><p>Tell us about your goals, audience and budget. We will recommend the right mix of Arabic and English SEO and campaigns on Google, Snapchat, TikTok and Meta, measured against leads and sales rather than clicks.</p></section><section className="service-content"><div><span className="eyebrow">HELPFUL TO INCLUDE</span><h2>Your growth <em>brief.</em></h2></div><div className="offering-list">{checklist.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><Arrow/></div>)}</div></section><Contact index="MARKETING ENQUIRY" title="Get your" emphasis="growth plan." description="Share what you have now. We will review your current channels and reply with recommendations and next steps for a free consultation." defaultService={'Digital Marketing & SEO'}/></main>}
