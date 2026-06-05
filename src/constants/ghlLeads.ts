import { OFFER_KICKSTART_OPTIN } from './shop'

/** Workbook opt-in on /workbook — uses workbook webhook only */
export const WORKBOOK_GHL_LEAD = {
  source: OFFER_KICKSTART_OPTIN.source,
  tags: [...OFFER_KICKSTART_OPTIN.tags],
  event: 'offer_kickstart_lead',
} as const

/** Pre-call qualifier on /calendar — uses pre-call webhook only */
export const PRE_CALL_QUALIFIER_GHL_LEAD = {
  source: 'brianmarshall.dev/calendar-qualifier',
  tags: ['pre-call-qualifier'] as const,
  event: 'pre_call_qualifier',
} as const
