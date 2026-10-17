import '../../globals.css'
import '../../ui-polish.css'
import '../../motion.css'
import '../../rtl.css'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import MotionProvider from '../../../components/motion/MotionProvider'
import Analytics from '../../../components/analytics/Analytics'
import JsonLd from '../../../components/seo/JsonLd'
import { businessConfig } from '../../../config/business.config'
import { organizationSchema, websiteSchema } from '../../../lib/seo'

// Arabic root layout: everything under /ar renders right to left with an Arabic typeface. The site's Latin
// display fonts and negative letter-spacing break Arabic letter joining, so rtl.css overrides them.
const arabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic', 'latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-arabic' })

const title = 'تصميم متاجر إلكترونية وحلول رقمية في السعودية | Origin Ecommerce'
const description = 'تصميم متاجر إلكترونية على سلة وزد وشوبيفاي، ومواقع عربية وإنجليزية، وأنظمة ERPNext مع الربط مع منصة فاتورة، للمنشآت في الرياض وجدة وجميع مناطق المملكة.'
const { verification } = businessConfig

export const metadata = {
  metadataBase: new URL(businessConfig.siteUrl),
  title: { default: title, template: '%s | Origin Ecommerce' },
  description,
  applicationName: businessConfig.name,
  publisher: businessConfig.name,
  category: 'technology',
  openGraph: { type: 'website', siteName: businessConfig.name, locale: 'ar_SA', url: '/ar', title, description },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  verification: { ...(verification.google ? { google: verification.google } : {}), ...(verification.bing ? { other: { 'msvalidate.01': verification.bing } } : {}) },
}

export const viewport = { themeColor: '#0b5d46' }

// Same motion boot as the English layout: flags motion support before paint, with a timeout fallback.
const motionBoot = "(function(d){if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-motion');setTimeout(function(){d.classList.add('motion-ready')},3000)}})(document.documentElement)"

export default function ArabicLayout({ children }) {
  return <html lang="ar-SA" dir="rtl" className={arabic.variable} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: motionBoot }} /></head><body><JsonLd items={[organizationSchema(), websiteSchema()]} /><Header locale="ar" />{children}<Footer locale="ar" /><MotionProvider /><Analytics locale="ar" /></body></html>
}
