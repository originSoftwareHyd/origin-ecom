const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

// `npm run build:static` sets STATIC_EXPORT=1 to produce plain HTML for shared hosting (Hostinger). In that mode
// headers() is unsupported, so the same security headers are set in public/.htaccess instead.
const staticExport = process.env.STATIC_EXPORT === '1'

const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  poweredByHeader: false,
  // Required by app/global-not-found.js (the site has separate English and Arabic root layouts).
  experimental: { globalNotFound: true },
  ...(staticExport
    ? { output: 'export', images: { unoptimized: true } }
    : { async headers() { return [{ source: '/:path*', headers: securityHeaders }] } }),
}

export default nextConfig
