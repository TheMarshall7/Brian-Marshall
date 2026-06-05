import { useId, useRef, useState } from 'react'
import {
  getGhlOfferWebhookUrl,
  getGhlSelfAuditWebhookUrl,
  isValidEmail,
  splitFullName,
  submitGhlLead,
} from '../../lib/ghlLead'

type Props = {
  submitLabel: string
  nameLabel?: string
  emailLabel?: string
  className?: string
  onSuccess?: (lead: { name: string; email: string }) => void
  leadConfig: { source: string; tags: readonly string[]; event: string }
  extraMeta?: Record<string, string | undefined>
  webhook?: 'offer' | 'self-audit'
}

export default function GhlNameEmailForm({
  submitLabel,
  nameLabel = 'Name',
  emailLabel = 'Email',
  className = '',
  onSuccess,
  leadConfig,
  extraMeta,
  webhook = 'offer',
}: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)
  const uid = useId()
  const nameId = `${uid}-name`
  const emailId = `${uid}-email`

  const webhookUrl = webhook === 'self-audit' ? getGhlSelfAuditWebhookUrl() : getGhlOfferWebhookUrl()
  const configured = Boolean(webhookUrl.trim())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    if (!trimmedName || !trimmedEmail) {
      setErrorMessage('Please enter your name and email.')
      setStatus('error')
      return
    }
    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    const { firstName, lastName } = splitFullName(trimmedName)
    const result = await submitGhlLead(webhookUrl, {
      firstName,
      lastName,
      email: trimmedEmail,
      name: trimmedName,
      source: leadConfig.source,
      tags: [...leadConfig.tags],
      meta: {
        event: leadConfig.event,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        ...extraMeta,
      },
    })

    if (!result.ok) {
      setStatus('error')
      setErrorMessage('Could not send your details. Please try again in a moment.')
      return
    }

    setStatus('idle')
    onSuccess?.({ name: trimmedName, email: trimmedEmail })
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-5">
        <div>
          <label
            htmlFor={nameId}
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500"
          >
            {nameLabel}
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
            {emailLabel}
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
      </div>
    </form>
  )
}
