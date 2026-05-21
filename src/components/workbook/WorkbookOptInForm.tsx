import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DEFAULT_GHL_OFFER_WEBHOOK_URL } from '../../constants/ghl'
import { OFFER_KICKSTART_OPTIN } from '../../constants/shop'

type Props = {
  submitLabel?: string
  className?: string
}

const optin = OFFER_KICKSTART_OPTIN

export default function WorkbookOptInForm({
  submitLabel = optin.submitLabel,
  className = '',
}: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)
  const uid = useId()
  const nameId = `${uid}-name`
  const emailId = `${uid}-email`

  const webhookUrl =
    import.meta.env.VITE_GHL_OFFER_WEBHOOK_URL?.trim() || DEFAULT_GHL_OFFER_WEBHOOK_URL
  const configured = Boolean(webhookUrl?.trim())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const url = webhookUrl?.trim()
    if (!url) {
      setErrorMessage('Webhook URL is not configured.')
      setStatus('error')
      return
    }
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    if (!trimmedName || !trimmedEmail) {
      setErrorMessage('Please enter your name and email.')
      setStatus('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMessage('')
    const nameParts = trimmedName.split(/\s+/).filter(Boolean)
    const firstName = nameParts[0] ?? trimmedName
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: trimmedEmail,
          name: trimmedName,
          source: optin.source,
          tags: [...optin.tags],
          meta: {
            event: 'offer_kickstart_lead',
            pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          },
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setName('')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMessage('Could not send your details. Please try again in a moment.')
    }
  }

  if (status === 'success') {
    return (
      <div className={className}>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-500">
          <iconify-icon icon="solar:check-circle-bold" width="28" />
        </div>
        <h3 className="text-xl font-medium text-white md:text-2xl">{optin.successTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{optin.successBody}</p>
        <a
          href={optin.pdfPath}
          download
          className="btn-shimmer glow-border mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)] sm:w-auto"
        >
          <iconify-icon icon="solar:download-linear" width="18" />
          Download PDF now
        </a>
        <Link
          to="/blueprint"
          className="mt-4 block text-center text-sm text-neutral-500 transition-colors hover:text-white sm:text-left"
        >
          Explore the Knowledge to Cash Blueprint
        </Link>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor={nameId}
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500"
          >
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
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none ring-red-500/40 transition-[border-color,box-shadow] placeholder:text-neutral-600 focus:border-red-500/45 focus:ring-2 focus:ring-red-500/20 disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500"
          >
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
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none ring-red-500/40 transition-[border-color,box-shadow] placeholder:text-neutral-600 focus:border-red-500/45 focus:ring-2 focus:ring-red-500/20 disabled:opacity-50"
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
          className="btn-shimmer glow-border flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {status === 'loading' ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-950/30 border-t-neutral-950" />
              Sending…
            </>
          ) : (
            <>
              {submitLabel}
              <iconify-icon icon="solar:arrow-right-up-linear" width="18" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
