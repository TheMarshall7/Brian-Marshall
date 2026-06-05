/** GHL location prefix — shared across inbound webhooks in this sub-account */
const GHL_HOOKS_BASE =
  'https://services.leadconnectorhq.com/hooks/F1J2yvd2AUT4owDs9EPl/webhook-trigger'

/**
 * Offer Kickstart Workbook opt-in (/workbook only).
 * Override with VITE_GHL_WORKBOOK_WEBHOOK_URL or legacy VITE_GHL_OFFER_WEBHOOK_URL.
 */
export const DEFAULT_GHL_WORKBOOK_WEBHOOK_URL = `${GHL_HOOKS_BASE}/274a0441-ac4f-4cc2-bc9f-32d14929e4a7`

/** @deprecated Use DEFAULT_GHL_WORKBOOK_WEBHOOK_URL */
export const DEFAULT_GHL_OFFER_WEBHOOK_URL = DEFAULT_GHL_WORKBOOK_WEBHOOK_URL

/**
 * Pre-call qualifier on /calendar (optional warm-up before booking widget).
 * Create a dedicated GHL workflow → Inbound Webhook → set VITE_GHL_PRECALL_WEBHOOK_URL.
 */
export const DEFAULT_GHL_PRECALL_WEBHOOK_URL = ''

/**
 * AOF Self-Audit quiz on /aof.
 * Create a dedicated GHL workflow → Inbound Webhook → set VITE_GHL_SELF_AUDIT_WEBHOOK_URL.
 * Email should use meta: score, band, gaps, priorityFixes, whereToStart, pdfUrl, resultsSummary.
 */
export const DEFAULT_GHL_SELF_AUDIT_WEBHOOK_URL = ''

/** Paid AOF Master Audit booking ($1,500) — not the free 15-min qualifying call on /calendar. */
export const AOF_PURCHASE_BOOKING_WIDGET_ID = 'TgyppDdBCvkCzQMwZ2F2'

export const DEFAULT_AOF_PURCHASE_WIDGET_SRC = `https://api.leadconnectorhq.com/widget/booking/${AOF_PURCHASE_BOOKING_WIDGET_ID}`

/** GHL booking widget for AOF Master Audit purchase ($1,500). Override with VITE_AOF_PURCHASE_WIDGET_SRC. */
export const AOF_PURCHASE_WIDGET_SRC =
  import.meta.env.VITE_AOF_PURCHASE_WIDGET_SRC?.trim() || DEFAULT_AOF_PURCHASE_WIDGET_SRC

export const GHL_FORM_EMBED_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js'
