import { businessConfig } from '../config/business.config'

export default function manifest() {
  return {
    name: businessConfig.name,
    short_name: 'Origin',
    description: 'E-commerce, web, app, ERP and AI solutions for Saudi businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f3ee',
    theme_color: '#0b5d46',
    lang: 'en-SA',
    icons: [{ src: '/icon.png', sizes: '550x550', type: 'image/png' }, { src: '/logo.png', sizes: '512x512', type: 'image/png' }],
  }
}
