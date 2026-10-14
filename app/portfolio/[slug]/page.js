import {notFound} from 'next/navigation'
import {portfolio} from '../../../data/portfolio'
import CaseStudy from '../../../components/portfolio/CaseStudy'
export function generateStaticParams(){return portfolio.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=portfolio.find(x=>x.slug===slug);return {title:p?`${p.title} | StandardTouch`:'Portfolio | StandardTouch'}}
export default async function Page({params}){const {slug}=await params;const p=portfolio.find(x=>x.slug===slug);if(!p)notFound();return <CaseStudy project={p}/>}
