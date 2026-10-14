import {portfolio} from '../../data/portfolio'
import PortfolioGrid from '../../components/portfolio/PortfolioGrid'
export const metadata={title:'Portfolio | StandardTouch'}
export default function PortfolioPage(){return <main><section className="page-hero"><span className="eyebrow">STANDARDTOUCH / PORTFOLIO</span><h1>Digital products built around <em>real business problems.</em></h1><p>Explore corporate websites, e-commerce platforms, ERP implementations, apps and enterprise digital systems delivered by StandardTouch.</p></section><section className="portfolio-page"><PortfolioGrid projects={portfolio}/></section></main>}
