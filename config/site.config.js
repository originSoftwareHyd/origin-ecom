export const siteConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  enableContactForm: process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM === 'true',
}
