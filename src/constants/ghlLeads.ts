import { OFFER_KICKSTART_OPTIN } from './shop'

/** Workbook opt-in on /workbook — sole consumer of the GHL webhook */
export const WORKBOOK_GHL_LEAD = {
  source: OFFER_KICKSTART_OPTIN.source,
  tags: [...OFFER_KICKSTART_OPTIN.tags],
  event: 'offer_kickstart_lead',
} as const
