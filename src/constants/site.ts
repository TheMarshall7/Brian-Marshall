/** Qualifying call booking page */
export const STRATEGY_CALL_PATH = '/calendar'

/** AOF Master Audit landing and purchase */
export const AOF_LANDING_PATH = '/aof'
export const AOF_PURCHASE_HASH = '#purchase'
export const AOF_PURCHASE_PATH = `${AOF_LANDING_PATH}${AOF_PURCHASE_HASH}`
export const AOF_RESERVE_AUDIT_CTA = 'Reserve Your Audit Session'
export const AOF_DOCUMENT_COVER = '/AOF-Document-Cover.png'
/** Laying-down variant for sub-sections (deliverables, sample, purchase, etc.) */
export const AOF_DOCUMENT_COVER_FLAT = '/AOF-Document-Cover-Flat.png'

/** Days after deliverable presentation to credit Master Audit toward implementation */
export const AOF_BUILD_CREDIT_DAYS = 30

export const AOF_MASTER_AUDIT_PRICE = 1497
export const AOF_MASTER_AUDIT_PRICE_LABEL = '$1,497'

export const AOF_BUILD_CREDIT_NOTE = `The ${AOF_MASTER_AUDIT_PRICE_LABEL} Master Audit is credited in full toward your implementation when you move forward within ${AOF_BUILD_CREDIT_DAYS} days of receiving your deliverable.`

/** Product sales / info landing pages */
export const BLUEPRINT_LANDING_PATH = '/blueprint'
export const BLUEPRINT_CHECKOUT_PATH = '/blueprint/checkout'
export const WORKBOOK_LANDING_PATH = '/workbook'

/** When false, /vsl redirects to the calendar and no UI should link to the VSL page. */
export const VSL_ENABLED = false

export const SITE_SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/brianmarshallca/',
  youtube: 'https://www.youtube.com/@thebrianmarshall',
  instagram: 'https://www.instagram.com/thebrianmarshall',
} as const
