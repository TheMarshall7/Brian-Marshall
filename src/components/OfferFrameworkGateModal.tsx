import { useEffect, useId, useState } from 'react'
import { BLUEPRINT_PDF_GHL_LEAD } from '../constants/ghlLeads'
import GhlNameEmailForm from './shared/GhlNameEmailForm'

type Props = {
  open: boolean
  onClose: () => void
  webhookUrl: string | undefined
}

export default function OfferFrameworkGateModal({ open, onClose, webhookUrl }: Props) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const uid = useId()

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) setStatus('idle')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  if (!webhookUrl?.trim()) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          aria-label="Close dialog"
          onClick={onClose}
        />
        <div className="relative z-10 max-w-md rounded-2xl border border-white/15 bg-neutral-950/95 p-6 text-sm text-neutral-400">
          Webhook URL is not configured. Set VITE_GHL_OFFER_WEBHOOK_URL or pass a webhookUrl prop.
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${uid}-title`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/15 bg-neutral-950/95 p-6 shadow-[0_0_60px_rgba(239,68,68,0.12)] backdrop-blur-xl md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-neutral-500 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Close"
        >
          <iconify-icon icon="solar:close-circle-linear" width="22"></iconify-icon>
        </button>

        {status === 'success' ? (
          <div className="pr-8 pt-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-500">
              <iconify-icon icon="solar:check-circle-bold" width="28"></iconify-icon>
            </div>
            <h2 id={`${uid}-title`} className="font-bricolage text-2xl font-medium text-white">
              You&apos;re in
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Check your email for <span className="text-neutral-300">The Knowledge-to-Cash Blueprint</span>. If you
              don&apos;t see it in a few minutes, peek at spam or promotions.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 w-full rounded-full bg-white py-3.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-red-400"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id={`${uid}-title`} className="pr-10 font-bricolage text-2xl font-medium text-white md:text-3xl">
              Get the blueprint
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Drop your name and email. I&apos;ll send the PDF to your inbox.
            </p>

            <div className="mt-8">
              <GhlNameEmailForm
                submitLabel="Send me the blueprint"
                leadConfig={BLUEPRINT_PDF_GHL_LEAD}
                onSuccess={() => setStatus('success')}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
