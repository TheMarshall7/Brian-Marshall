import {
  DEFAULT_GHL_PRECALL_WEBHOOK_URL,
  DEFAULT_GHL_SELF_AUDIT_WEBHOOK_URL,
  DEFAULT_GHL_WORKBOOK_WEBHOOK_URL,
} from '../constants/ghl'

export type GhlLeadPayload = {
  firstName: string
  lastName: string
  email: string
  name: string
  source: string
  tags: string[]
  meta: {
    event: string
    pageUrl: string
    [key: string]: string | undefined
  }
}

export type GhlLeadWebhook = 'workbook' | 'self-audit' | 'pre-call'

export function getGhlWorkbookWebhookUrl(): string {
  return (
    import.meta.env.VITE_GHL_WORKBOOK_WEBHOOK_URL?.trim() ||
    import.meta.env.VITE_GHL_OFFER_WEBHOOK_URL?.trim() ||
    DEFAULT_GHL_WORKBOOK_WEBHOOK_URL
  )
}

/** @deprecated Use getGhlWorkbookWebhookUrl — workbook-only */
export function getGhlOfferWebhookUrl(): string {
  return getGhlWorkbookWebhookUrl()
}

export function getGhlPrecallWebhookUrl(): string {
  return import.meta.env.VITE_GHL_PRECALL_WEBHOOK_URL?.trim() || DEFAULT_GHL_PRECALL_WEBHOOK_URL
}

export function getGhlSelfAuditWebhookUrl(): string {
  return import.meta.env.VITE_GHL_SELF_AUDIT_WEBHOOK_URL?.trim() || DEFAULT_GHL_SELF_AUDIT_WEBHOOK_URL
}

export function getGhlWebhookUrl(kind: GhlLeadWebhook): string {
  switch (kind) {
    case 'workbook':
      return getGhlWorkbookWebhookUrl()
    case 'self-audit':
      return getGhlSelfAuditWebhookUrl()
    case 'pre-call':
      return getGhlPrecallWebhookUrl()
  }
}

export function isGhlWebhookConfigured(url: string): boolean {
  return Boolean(url.trim())
}

export function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const nameParts = fullName.trim().split(/\s+/).filter(Boolean)
  const firstName = nameParts[0] ?? fullName.trim()
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''
  return { firstName, lastName }
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitGhlLead(
  webhookUrl: string,
  payload: GhlLeadPayload,
): Promise<{ ok: true } | { ok: false; status?: number }> {
  const url = webhookUrl.trim()
  if (!url) return { ok: false }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) return { ok: false, status: res.status }
    return { ok: true }
  } catch {
    return { ok: false }
  }
}
