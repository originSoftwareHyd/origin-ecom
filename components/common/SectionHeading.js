export default function SectionHeading({ index, title, emphasis, description }) {
  return <div className="section-intro">
    <div><span className="index">{index}</span><h2>{title}<br /><em>{emphasis}</em></h2></div>
    <p>{description}</p>
  </div>
}
