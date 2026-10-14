import Link from 'next/link'
import Arrow from '../common/Arrow'
export default function PortfolioCard({project}){return <Link className="portfolio-card" href={`/portfolio/${project.slug}`}><div className="portfolio-art"><span>{project.category.split('·')[0]}</span><b>{project.title.slice(0,2).toUpperCase()}</b></div><div className="portfolio-card-copy"><small>{project.category}</small><h3>{project.title}</h3><p>{project.subtitle}</p><span className="text-link">View case study <Arrow/></span></div></Link>}
