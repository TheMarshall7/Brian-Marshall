import { AOF_DOCUMENT_COVER } from './site'

export const SITE_URL = 'https://brianmarshall.dev'
export const SITE_NAME = 'Brian Marshall'
export const SITE_BRAND = 'Brian Marshall · Business Systems Architect'
export const SITE_LOCALE = 'en_US'
export const SITE_TWITTER_HANDLE = '@brianmarshallca'

/** Primary social preview — AOF Master Audit cover */
export const DEFAULT_OG_IMAGE = `${SITE_URL}${AOF_DOCUMENT_COVER}`

/** Fallback portrait / logo used on legacy pages */
export const LEGACY_OG_IMAGE =
  'https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png'

export function formatPageTitle(pageTitle: string) {
  if (pageTitle.includes(SITE_NAME)) return pageTitle
  return `${pageTitle} | ${SITE_NAME}`
}

export function pageUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
