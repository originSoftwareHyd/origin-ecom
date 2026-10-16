// UI strings for the English (en-SA) and Arabic (ar-SA) sides of the site. Page copy lives in data files;
// this holds only the shared interface text (header, footer, contact form, landing template).
// Form option VALUES stay in English so CRM reports are consistent whichever language a lead used.

export const ui = {
  en: {
    dir: 'ltr',
    lang: 'en-SA',
    nav: null, // English navigation comes from data/site.js
    headerCta: null,
    switchLabel: 'العربية',
    switchHref: '/ar',
    home: 'Home',
    form: {
      name: 'Full name', namePh: 'Your name',
      company: 'Company', companyPh: 'Company name',
      email: 'Work email', emailPh: 'you@company.com',
      phone: 'Mobile / WhatsApp', phonePh: '+966 5X XXX XXXX',
      service: 'What do you need?', servicePh: 'Select a service',
      heard: 'How did you hear about us?', heardPh: 'Select one (optional)',
      message: 'Project details', messagePh: 'What do you want to launch or improve, and by when?',
      submit: 'Get my free consultation', sending: 'Sending…',
      note: 'No obligation. Your details are used only to respond to this enquiry.',
      thanksTitle: 'Thank you.', thanks: 'Your enquiry has been received. Our team will review your goals and reply with recommended next steps.', again: 'Send another enquiry',
      draftA: 'Your email app should open with your enquiry ready to send. If it does not, email us at', draftOr: 'or', draftWa: 'message us on WhatsApp',
      whatsapp: 'Chat on WhatsApp ↗', notSure: 'Not sure yet', notSureHint: 'I need advice on the right approach',
    },
    heardOptions: null,
    landing: { updated: 'updated', guide: 'Guide', page: 'Page', by: 'by the Origin Ecommerce team', faqLabel: 'FREQUENTLY ASKED', faqTitle: 'Questions', faqEmphasis: 'answered.', relatedLabel: 'KEEP READING', relatedTitle: 'Related', relatedEmphasis: 'pages.', termsLabel: 'IN ARABIC', termsTitle: 'Also searched as', sources: 'Sources', sourcesNote: 'Facts on this page were checked against these sources on the dates shown. Rules and prices change, so confirm anything critical with the source.', accessed: 'accessed', breadcrumb: 'Breadcrumb', allServices: name => `All ${name.toLowerCase()} services` },
  },
  ar: {
    dir: 'rtl',
    lang: 'ar-SA',
    nav: [
      { label: 'تصميم المتاجر', href: '/ar/ecommerce-store-design' },
      { label: 'متاجر سلة', href: '/ar/salla-store-design' },
      { label: 'الفوترة الإلكترونية', href: '/ar/zatca-e-invoicing' },
      { label: 'English', href: '/', lang: 'en' },
    ],
    headerCta: 'استشارة مجانية',
    switchLabel: 'English',
    switchHref: '/',
    home: 'الرئيسية',
    form: {
      name: 'الاسم الكامل', namePh: 'اسمك',
      company: 'اسم المنشأة', companyPh: 'اسم الشركة أو المتجر',
      email: 'البريد الإلكتروني', emailPh: 'you@company.com',
      phone: 'الجوال / واتساب', phonePh: '05X XXX XXXX',
      service: 'ما الخدمة التي تحتاجها؟', servicePh: 'اختر الخدمة',
      heard: 'كيف عرفت عنّا؟', heardPh: 'اختر (اختياري)',
      message: 'تفاصيل المشروع', messagePh: 'ما الذي تريد إطلاقه أو تطويره، ومتى؟',
      submit: 'احجز استشارتي المجانية', sending: 'جارٍ الإرسال…',
      note: 'بدون أي التزام. نستخدم بياناتك للرد على طلبك فقط.',
      thanksTitle: 'شكرًا لك.', thanks: 'استلمنا طلبك، وسيراجع فريقنا أهدافك ويرد عليك بالخطوات المقترحة.', again: 'إرسال طلب آخر',
      draftA: 'سيفتح تطبيق البريد لديك ورسالتك جاهزة للإرسال. إن لم يفتح، راسلنا على', draftOr: 'أو', draftWa: 'تواصل معنا عبر واتساب',
      whatsapp: 'تواصل عبر واتساب ↖', notSure: 'لم أحدد بعد', notSureHint: 'أحتاج استشارة لاختيار الحل المناسب',
    },
    serviceLabels: {
      'ecommerce-development': ['تصميم وتطوير المتاجر الإلكترونية', 'سلة وزد وشوبيفاي ومتاجر مخصصة'],
      'web-development': ['تصميم المواقع الإلكترونية', 'مواقع شركات عربية وإنجليزية'],
      'mobile-app-development': ['برمجة تطبيقات الجوال', 'تطبيقات iOS وأندرويد'],
      'erp-solutions': ['أنظمة ERP والفوترة الإلكترونية', 'ERPNext والربط مع هيئة الزكاة'],
      'digital-marketing': ['التسويق الإلكتروني والسيو', 'تحسين الظهور والإعلانات'],
      'ai-solutions': ['حلول الذكاء الاصطناعي والأتمتة', 'شات بوت عربي وأتمتة الأعمال'],
      'software-development': ['برمجة الأنظمة المخصصة', 'بوابات وأنظمة حسب الطلب'],
    },
    heardOptions: [['Google search', 'بحث جوجل'], ['AI assistant (ChatGPT, Gemini, Perplexity…)', 'مساعد ذكاء اصطناعي (ChatGPT وغيره)'], ['Salla or Zid partner listing', 'دليل شركاء سلة أو زد'], ['LinkedIn or social media', 'لينكدإن أو وسائل التواصل'], ['Referral from someone I know', 'ترشيح من شخص أعرفه'], ['Other', 'أخرى']],
    landing: { updated: 'آخر تحديث', guide: 'الدليل', page: 'الصفحة', by: 'فريق Origin Ecommerce', faqLabel: 'أسئلة شائعة', faqTitle: 'إجابات', faqEmphasis: 'لأسئلتك.', relatedLabel: 'اقرأ أيضًا', relatedTitle: 'صفحات', relatedEmphasis: 'ذات صلة.', termsLabel: 'عبارات البحث', termsTitle: 'يُبحث عنها أيضًا بـ', sources: 'المصادر', sourcesNote: 'تحققنا من المعلومات في هذه الصفحة من المصادر التالية في التواريخ الموضحة. الأنظمة والأسعار تتغير، فتأكد من أي معلومة مهمة من مصدرها.', accessed: 'تاريخ الاطلاع', breadcrumb: 'مسار التنقل', allServices: () => 'كل خدمات المتاجر الإلكترونية' },
    footer: {
      description: 'Origin Ecommerce شريك رقمي وتقني للمنشآت في المملكة العربية السعودية: تصميم المتاجر الإلكترونية على سلة وزد وشوبيفاي، ومواقع عربية وإنجليزية، وتطبيقات الجوال، وأنظمة ERPNext مع الربط مع منصة فاتورة، وحلول الذكاء الاصطناعي، والتسويق الإلكتروني.',
      columns: [
        { title: 'المتاجر الإلكترونية', links: [{ label: 'تصميم متجر إلكتروني', href: '/ar/ecommerce-store-design' }, { label: 'تصميم متجر سلة', href: '/ar/salla-store-design' }, { label: 'Zid store development (EN)', href: '/zid-store-development' }] },
        { title: 'الفوترة الإلكترونية', links: [{ label: 'المرحلة الثانية: الربط والتكامل', href: '/ar/zatca-e-invoicing' }, { label: 'ERPNext implementation (EN)', href: '/services/erp-solutions' }] },
        { title: 'أدلة (بالإنجليزية)', links: [{ label: 'Salla vs Zid vs Shopify', href: '/guides/salla-vs-zid-vs-shopify' }, { label: 'E-commerce cost in KSA', href: '/guides/ecommerce-website-cost-saudi-arabia' }] },
      ],
      contact: 'تواصل معنا', whatsapp: 'راسلنا على واتساب', consult: 'احجز استشارة مجانية', serving: 'نخدم المنشآت في جميع مناطق المملكة', rights: 'جميع الحقوق محفوظة.', top: 'العودة للأعلى ↑', cr: 'س.ت', vat: 'الرقم الضريبي',
    },
  },
}
