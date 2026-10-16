import '../globals.css'
import '../ui-polish.css'
import '../motion.css'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MotionProvider from '../../components/motion/MotionProvider'
import Analytics from '../../components/analytics/Analytics'
import JsonLd from '../../components/seo/JsonLd'
import { businessConfig } from '../../config/business.config'
import { organizationSchema, websiteSchema } from '../../lib/seo'

const description = 'E-commerce stores, bilingual websites, apps, ERPNext with ZATCA e-invoicing and AI automation for businesses in Riyadh, Jeddah and across Saudi Arabia.'
const { verification } = businessConfig

export const metadata = {
  metadataBase: new URL(businessConfig.siteUrl),
  title: { default: 'E-commerce, Web & AI Solutions in Saudi Arabia | Origin Ecommerce', template: '%s | Origin Ecommerce' },
  description,
  applicationName: businessConfig.name,
  publisher: businessConfig.name,
  category: 'technology',
  openGraph: { type: 'website', siteName: businessConfig.name, locale: 'en_SA', url: '/', title: 'E-commerce, Web & AI Solutions in Saudi Arabia | Origin Ecommerce', description },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  verification: { ...(verification.google ? { google: verification.google } : {}), ...(verification.bing ? { other: { 'msvalidate.01': verification.bing } } : {}) },
}

export const viewport = { themeColor: '#0b5d46' }

// Flags motion support before paint so above-the-fold content can wait for its entrance; a timeout reveals it if JS never runs.
const motionBoot = "(function(d){if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-motion');setTimeout(function(){d.classList.add('motion-ready')},3000)}})(document.documentElement)"

export default function RootLayout({ children }) {
  return <html lang="en-SA" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: motionBoot }} /></head><body><JsonLd items={[organizationSchema(), websiteSchema()]} /><Header />{children}<Footer /><MotionProvider /><Analytics /></body></html>
}
