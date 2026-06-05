import { useState } from 'react'
import { CALENDAR_PAGE } from '../../constants/calendar'
import { ANALYTICS_EVENTS } from '../../constants/analytics'
import { PRE_CALL_QUALIFIER_GHL_LEAD } from '../../constants/ghlLeads'
import { getGhlPrecallWebhookUrl, isGhlWebhookConfigured, splitFullName, submitGhlLead } from '../../lib/ghlLead'
import { track } from '../../lib/track'

type Props = {
  onComplete: (answers: Record<string, string>) => void
  onSkip: () => void
}

export default function PreCallQualifier({ onComplete, onSkip }: Props) {
  const copy = CALENDAR_PAGE.qualifier
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const setField = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const handleContinue = async () => {
    setSubmitting(true)
    const precallWebhook = getGhlPrecallWebhookUrl()
    if (name.trim() && email.trim() && isGhlWebhookConfigured(precallWebhook)) {
      const { firstName, lastName } = splitFullName(name)
      await submitGhlLead(precallWebhook, {
        firstName,
        lastName,
        email: email.trim(),
        name: name.trim(),
        source: PRE_CALL_QUALIFIER_GHL_LEAD.source,
        tags: [...PRE_CALL_QUALIFIER_GHL_LEAD.tags],
        meta: {
          event: PRE_CALL_QUALIFIER_GHL_LEAD.event,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          revenue: answers.revenue,
          constraint: answers.constraint,
          tools: answers.tools,
        },
      })
      track(ANALYTICS_EVENTS.PRE_CALL_QUALIFIER_SUBMIT, {
        revenue: answers.revenue,
        constraint: answers.constraint,
      })
    }
    setSubmitting(false)
    onComplete(answers)
  }

  return (
    <div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-8">
      <p className="section-eyebrow mb-2">{copy.eyebrow}</p>
      <h2 className="mb-2 text-2xl font-medium text-white">{copy.headline}</h2>
      <p className="mb-6 text-sm text-neutral-400">{copy.intro}</p>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-red-500/40"
        />
        <input
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-red-500/40"
        />
      </div>

      <div className="space-y-5">
        {copy.fields.map((field) => (
          <div key={field.id}>
            <label className="mb-2 block text-sm font-medium text-white">{field.label}</label>
            <div className="flex flex-wrap gap-2">
              {field.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setField(field.id, option)}
                  className={`rounded-lg border px-3 py-2 text-xs transition-all ${
                    answers[field.id] === option
                      ? 'border-red-500/40 bg-red-500/10 text-white'
                      : 'border-white/10 text-neutral-400 hover:border-white/20'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleContinue}
          disabled={submitting}
          className="cta-primary rounded-full bg-white px-8 py-3 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400 disabled:opacity-50"
        >
          {copy.continueLabel}
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="rounded-full border border-white/10 px-8 py-3 text-sm text-neutral-400 hover:border-white/20 hover:text-white"
        >
          {copy.skipLabel}
        </button>
      </div>
    </div>
  )
}
