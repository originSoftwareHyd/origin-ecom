import { siteData } from '../../data/site'
export default function Vision() { return <section className="vision"><div className="vision-mark">2030</div><div><span className="index">{siteData.vision.label}</span><h2>{siteData.vision.title} <em>{siteData.vision.emphasis}</em></h2><p>{siteData.vision.description}</p></div></section> }
