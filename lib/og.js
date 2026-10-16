import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }

// Brand-consistent social card using the site's existing palette (--dark, --green, --lime).
export function renderOgImage({ eyebrow = 'ORIGIN ECOMMERCE · SAUDI ARABIA', title, subtitle }) {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#071511', color: '#ffffff', backgroundImage: 'radial-gradient(circle at 82% 22%, rgba(197,232,108,0.32), transparent 38%)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 18, background: '#0b5d46', fontSize: 26, fontWeight: 800 }}>OE</div>
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 4, color: '#c5e86c' }}>{eyebrow}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
        {subtitle && <div style={{ display: 'flex', fontSize: 28, marginTop: 26, color: '#b7c5be', maxWidth: 980 }}>{subtitle}</div>}
      </div>
    </div>,
    ogSize,
  )
}
