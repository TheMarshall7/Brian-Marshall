import { OFFER_KICKSTART_OPTIN } from './shop'

/** Workbook opt-in on /workbook */
export const WORKBOOK_GHL_LEAD = {
  source: OFFER_KICKSTART_OPTIN.source,
  tags: [...OFFER_KICKSTART_OPTIN.tags],
  event: 'offer_kickstart_lead',
} as const

/** Blueprint PDF lead (modal / legacy home gate) */
export const BLUEPRINT_PDF_GHL_LEAD = {
  source: 'Website · Knowledge-to-Cash Blueprint',
  tags: ['knowledge-to-cash-blueprint', 'offer-framework-pdf'],
  event: 'offer_framework_lead',
} as const
