import {portfolio} from '../../data/portfolio'
import PortfolioGrid from '../../components/portfolio/PortfolioGrid'
import ConsultCta from '../../components/common/ConsultCta'
import {businessConfig} from '../../config/business.config'
import {buildMetadata} from '../../lib/seo'
export const metadata=buildMetadata({title:'Solution Blueprints',description:'How Origin Ecommerce approaches common Saudi business projects: online stores, B2B portals, ERPNext with ZATCA, bilingual websites, AI assistants, apps and SEO.',path:'/portfolio',noindex:!businessConfig.indexBlueprints})
export default function PortfolioPage(){return <main><section className="page-hero"><span className="eyebrow">ORIGIN ECOMMERCE / SOLUTION BLUEPRINTS</span><h1>Solutions built around <em>real Saudi business problems.</em></h1><p>Each blueprint shows a common challenge we solve for businesses in the Kingdom, how we deliver the solution and the KPIs we use to measure success. Find the one closest to your project, then talk to us about the details.</p></section><section className="portfolio-page"><PortfolioGrid projects={portfolio}/></section><ConsultCta title="Have a project that doesn’t fit a blueprint?" text="Most projects combine several of these. Share your goals and we will design the right mix of store, systems and marketing for your business."/></main>}
