import { useEffect, useId, useRef, useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  webhookUrl: string | undefined
}

export default function OfferFrameworkGateModal({ open, onClose, webhookUrl }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)
  const uid = useId()
  const nameId = `${uid}-name`
  const emailId = `${uid}-email`

  const configured = Boolean(webhookUrl?.trim())

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      setName('')
      setEmail('')
      setStatus('idle')
      setErrorMessage('')
    }
  }, [open])

  useEffect(() => {
    if (!open || status !== 'idle') return
    const id = requestAnimationFrame(() => firstInputRef.current?.focus())
    return () => cancelAnimationFrame(id)
  }, [open, status])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const url = webhookUrl?.trim()
    if (!url) {
      setErrorMessage('Webhook URL is not configured. Set VITE_GHL_OFFER_WEBHOOK_URL or pass a webhookUrl prop.')
      setStatus('error')
      return
    }
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    if (!trimmedName || !trimmedEmail) {
      setErrorMessage('Please enter your name and email.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          event: 'offer_framework_lead',
          source: 'no-brainer-offer-framework',
          name: trimmedName,
          email: trimmedEmail,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setName('')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMessage(
        'Could not send your details. Check your connection and try again. If it keeps failing, the webhook may need a server-side proxy (browser CORS) or use GHL’s native form action URL instead of fetch.',
      )
    }
  }

  if (!open) return null

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
              Check your email for <span className="text-neutral-300">The No-Brainer Offer Framework</span>. If you
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
              Get the framework
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Drop your name and email. I&apos;ll send the PDF through my automation.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor={nameId} className="mb-2 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Name
                </label>
                <input
                  ref={firstInputRef}
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none ring-red-500/40 transition-[border-color,box-shadow] placeholder:text-neutral-600 focus:border-red-500/40 focus:ring-2 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor={emailId} className="mb-2 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Email
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none ring-red-500/40 transition-[border-color,box-shadow] placeholder:text-neutral-600 focus:border-red-500/40 focus:ring-2 disabled:opacity-50"
                  placeholder="you@company.com"
                />
              </div>

              {errorMessage ? (
                <p className="rounded-lg border border-red-500/25 bg-red-500/10 px-3 py-2 text-xs leading-relaxed text-red-200/90">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === 'loading' || !configured}
                className="cta-primary group flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-950/30 border-t-neutral-950" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send me the PDF
                    <iconify-icon icon="solar:arrow-right-up-linear" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
