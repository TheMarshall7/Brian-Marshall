/** GHL inbound webhook for Offer Kickstart Workbook opt-in on /workbook only. Override with VITE_GHL_OFFER_WEBHOOK_URL. */
export const DEFAULT_GHL_OFFER_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/F1J2yvd2AUT4owDs9EPl/webhook-trigger/274a0441-ac4f-4cc2-bc9f-32d14929e4a7'

/** GHL inbound webhook for AOF Self-Audit lead magnet. Falls back to offer webhook if unset. */
export const DEFAULT_GHL_SELF_AUDIT_WEBHOOK_URL = DEFAULT_GHL_OFFER_WEBHOOK_URL

/** GHL booking widget for AOF Master Audit purchase ($1,500). Override with VITE_AOF_PURCHASE_WIDGET_SRC. */
export const AOF_PURCHASE_WIDGET_SRC = import.meta.env.VITE_AOF_PURCHASE_WIDGET_SRC?.trim() || ''
