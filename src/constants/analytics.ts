export const ANALYTICS_EVENTS = {
  QUALIFYING_CALL_CLICK: 'qualifying_call_click',
  AOF_PAGE_VIEW: 'aof_page_view',
  AOF_PURCHASE_CLICK: 'aof_purchase_click',
  SELF_AUDIT_SUBMIT: 'self_audit_submit',
  PRE_CALL_QUALIFIER_SUBMIT: 'pre_call_qualifier_submit',
  AOF_EXPLORE_CLICK: 'aof_explore_click',
} as const

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]
