import Arrow from './Arrow'

export default function Button({ href, children, variant = 'primary', ...props }) {
  const className = `button ${variant}`
  return href ? <a className={className} href={href} {...props}>{children} <Arrow /></a> : <button className={className} {...props}>{children} <Arrow /></button>
}
