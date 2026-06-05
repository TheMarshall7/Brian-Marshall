/// <reference types="vite/client" />

import 'react'

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    /** DOM attribute; use lowercase in JSX (React maps it correctly). */
    fetchpriority?: 'high' | 'low' | 'auto'
  }
}

interface ImportMetaEnv {
  /** Workbook opt-in webhook (/workbook) */
  readonly VITE_GHL_WORKBOOK_WEBHOOK_URL?: string
  /** @deprecated Legacy alias — use VITE_GHL_WORKBOOK_WEBHOOK_URL */
  readonly VITE_GHL_OFFER_WEBHOOK_URL?: string
  /** Pre-call qualifier webhook (/calendar) */
  readonly VITE_GHL_PRECALL_WEBHOOK_URL?: string
  /** AOF self-audit quiz webhook (/aof) */
  readonly VITE_GHL_SELF_AUDIT_WEBHOOK_URL?: string
  readonly VITE_K2C_CHECKOUT_URL?: string
  readonly VITE_AOF_PURCHASE_WIDGET_SRC?: string
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_PLAUSIBLE_DOMAIN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
