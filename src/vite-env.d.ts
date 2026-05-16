/// <reference types="vite/client" />

import 'react'

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    /** DOM attribute; use lowercase in JSX (React maps it correctly). */
    fetchpriority?: 'high' | 'low' | 'auto'
  }
}

interface ImportMetaEnv {
  readonly VITE_GHL_OFFER_WEBHOOK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
