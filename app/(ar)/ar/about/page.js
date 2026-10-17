import AboutPage from '../../../../components/about/AboutPage'
import { about } from '../../../../data/about'
import { buildMetadata } from '../../../../lib/seo'

const page = about.ar

export const metadata = buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path, absoluteTitle: true, locale: 'ar' })

export default function Page() { return <AboutPage locale="ar" /> }
