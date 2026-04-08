/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GHL_OFFER_WEBHOOK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
