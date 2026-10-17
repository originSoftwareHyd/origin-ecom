import AboutPage from '../../../components/about/AboutPage'
import { about } from '../../../data/about'
import { buildMetadata } from '../../../lib/seo'

const page = about.en

export const metadata = buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path, absoluteTitle: true })

export default function Page() { return <AboutPage /> }
