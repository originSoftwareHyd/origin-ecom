import Link from 'next/link'
import Arrow from '../../../components/common/Arrow'
import Faq from '../../../components/common/Faq'
import ConsultCta from '../../../components/common/ConsultCta'
import Contact from '../../../components/contact/Contact'
import JsonLd from '../../../components/seo/JsonLd'
import { arPages, arPath } from '../../../data/landing-ar'
import { buildMetadata, faqSchema, webPageSchema } from '../../../lib/seo'

// Arabic home (/ar): routes Arabic searchers to the Arabic pages and the enquiry form. hreflang pairs it with /.
const title = 'تصميم متاجر إلكترونية وحلول رقمية في السعودية | Origin Ecommerce'
const description = 'تصميم متاجر إلكترونية على سلة وزد وشوبيفاي، والربط مع منصة فاتورة للفوترة الإلكترونية، وأنظمة ERPNext، للمنشآت في الرياض وجدة وجميع مناطق المملكة.'

export const metadata = buildMetadata({ title, description, path: '/ar', absoluteTitle: true, locale: 'ar' })

const highlights = [
  'متاجر بالعربي أولًا، بتخطيط من اليمين لليسار مصمم من البداية، مع نسخة إنجليزية عند الحاجة.',
  'الدفع بمدى وأبل باي والتقسيط عبر تابي وتمارا، مفعّل ومجرّب بعمليات حقيقية قبل الإطلاق.',
  'الفوترة الإلكترونية وضريبة القيمة المضافة مخطط لها من اليوم الأول، لا تُرقّع لاحقًا.',
  'ربط المتجر مع نظامك المحاسبي أو ERPNext حتى يتطابق المخزون والفواتير.',
]

const faqs = [
  { q: 'ما الخدمات التي تقدمها Origin Ecommerce؟', a: 'نصمم ونجهز المتاجر الإلكترونية على سلة وزد وشوبيفاي أو ببرمجة خاصة، ونبني مواقع الشركات بالعربي والإنجليزي، ونطبق أنظمة ERPNext مع الربط مع منصة فاتورة، ونقدم حلول الذكاء الاصطناعي والتسويق الإلكتروني للمنشآت في السعودية. نبدأ دائمًا باستشارة مجانية ثم عرض مكتوب يوضح النطاق والمدة والتكلفة.' },
  { q: 'هل تخدمون المنشآت خارج الرياض؟', a: 'نعم. نعمل مع المنشآت في جميع مناطق المملكة، ومنها الرياض وجدة والدمام والخبر ومكة المكرمة والمدينة المنورة. الاستشارة ومراجعات التصميم والدعم تتم عن بُعد، فموقعك لا يحد من المشروع.' },
  { q: 'هل محتوى موقعكم متاح بالعربي كاملًا؟', a: 'نضيف الصفحات العربية تباعًا. الصفحات المتاحة حاليًا بالعربي هي تصميم المتاجر الإلكترونية، وتصميم متاجر سلة، والفوترة الإلكترونية. بقية الأدلة والخدمات متاحة بالإنجليزية، ويمكنك مراسلتنا بالعربي في أي وقت عبر النموذج أو واتساب.' },
]

export default function ArabicHome() {
  return <main className="landing">
    <JsonLd items={[webPageSchema({ path: '/ar', title, description, locale: 'ar' }), faqSchema(faqs, '/ar')]} />

    <section className="page-hero landing-hero">
      <span className="eyebrow">ORIGIN ECOMMERCE / السعودية</span>
      <h1>متاجر إلكترونية وأنظمة رقمية <em>تنمّي أعمالك في السعودية.</em></h1>
      <p>نصمم المتاجر الإلكترونية على سلة وزد وشوبيفاي، ونربط أنظمة الفواتير مع منصة فاتورة، ونجهز كل ما يحتاجه متجرك ليبيع من أول يوم: الدفع والشحن والضريبة والسيو. نبدأ باستشارة مجانية ونرسل لك عرضًا مكتوبًا واضحًا.</p>
      <div className="hero-actions">
        <Link className="button primary" href="#contact">احجز استشارة مجانية <Arrow rtl /></Link>
        <Link className="button secondary" href="/ar/ecommerce-store-design">تصميم متجر إلكتروني <Arrow rtl /></Link>
      </div>
    </section>

    <section className="case-section">
      <div className="case-label">خدماتنا بالعربي</div>
      <div><h2>ابدأ من <em>الصفحة المناسبة لك.</em></h2><div className="offering-list">{arPages.map((page, i) => <div key={page.slug}><span>{String(i + 1).padStart(2, '0')}</span><strong><Link href={arPath(page)}>{page.metaTitle}</Link></strong><Arrow rtl /></div>)}</div></div>
    </section>

    <section className="case-section landing-section">
      <div className="case-label">لماذا نحن</div>
      <div><h2>مبني على طريقة <em>شراء العميل السعودي.</em></h2><ul>{highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
    </section>

    <Faq label="أسئلة شائعة" title="إجابات" emphasis="لأسئلتك." faqs={faqs} />

    <Contact locale="ar" index="ابدأ مشروعك" title="حدّثنا عن" emphasis="مشروعك." description="أخبرنا بما تريد إطلاقه أو تطويره، ونرد عليك بتوصيات أولية والخطوة التالية لاستشارتك المجانية." />

    <ConsultCta locale="ar" title="جاهز للبدء؟" text="احجز استشارة مجانية. نراجع أهدافك ووضعك الحالي، ونقترح الحل المناسب، ثم نرسل لك عرضًا مكتوبًا يوضح النطاق والمدة والتكلفة." href="#contact" whatsappText="مرحبًا Origin Ecommerce، أرغب في حجز استشارة مجانية." />
  </main>
}
