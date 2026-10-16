import {notFound} from 'next/navigation'
import {getProject,portfolio} from '../../../data/portfolio'
import CaseStudy from '../../../components/portfolio/CaseStudy'
import {businessConfig} from '../../../config/business.config'
import {buildMetadata} from '../../../lib/seo'
export const dynamicParams=false
export function generateStaticParams(){return portfolio.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=getProject(slug);if(!p)return {};return buildMetadata({title:`${p.title}: Solution Blueprint`,description:`${p.subtitle}: how Origin Ecommerce delivers it for businesses in Saudi Arabia, and the KPIs we track.`,path:`/portfolio/${p.slug}`,noindex:!businessConfig.indexBlueprints})}
export default async function Page({params}){const {slug}=await params;const p=getProject(slug);if(!p)notFound();return <CaseStudy project={p}/>}
