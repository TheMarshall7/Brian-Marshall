import { useState } from 'react'
import GhlNameEmailForm from '../shared/GhlNameEmailForm'
import { ANALYTICS_EVENTS } from '../../constants/analytics'
import { AOF_LANDING } from '../../constants/aofLanding'
import {
  SELF_AUDIT_LEAD_CONFIG,
  SELF_AUDIT_QUESTIONS,
  scoreSelfAudit,
} from '../../constants/selfAudit'
import { track } from '../../lib/track'

type Step = 'quiz' | 'result' | 'gate' | 'done'

export default function SelfAuditQuiz() {
  const [step, setStep] = useState<Step>('quiz')
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [scoreResult, setScoreResult] = useState<ReturnType<typeof scoreSelfAudit> | null>(null)
  const copy = AOF_LANDING.selfAudit

  const toggleAnswer = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const handleScore = () => {
    const result = scoreSelfAudit(answers)
    setScoreResult(result)
    setStep('result')
  }

  const allAnswered = SELF_AUDIT_QUESTIONS.every((q) => answers[q.id] !== undefined)

  return (
    <section id="self-audit" className="scroll-mt-28 border-t border-white/5 py-16 md:py-24">
      <div className="mb-10 text-center md:text-left">
        <p className="section-eyebrow mb-4">{copy.eyebrow}</p>
        <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
          {copy.headlineLead} <span className="hero-text-gradient">{copy.headlineAccent}</span>
        </h2>
        <p className="mt-4 max-w-xl text-neutral-400">{copy.subheadline}</p>
      </div>

      {step === 'quiz' ? (
        <div className="glass-panel max-w-2xl rounded-2xl border border-white/10 p-6 md:p-8">
          <ul className="space-y-6">
            {SELF_AUDIT_QUESTIONS.map((q) => (
              <li key={q.id}>
                <p className="mb-3 text-sm text-white">{q.question}</p>
                <div className="flex gap-2">
                  {(['Yes', 'No'] as const).map((label) => {
                    const value = label === 'Yes'
                    const selected = answers[q.id] === value
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleAnswer(q.id, value)}
                        className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                          selected
                            ? 'border-red-500/40 bg-red-500/10 text-white'
                            : 'border-white/10 text-neutral-400 hover:border-white/20'
                        }`}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            disabled={!allAnswered}
            onClick={handleScore}
            className="cta-primary mt-8 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400 disabled:opacity-40"
          >
            See my score
          </button>
        </div>
      ) : null}

      {step === 'result' && scoreResult ? (
        <div className="max-w-2xl">
          <div className="glass-panel mb-8 rounded-2xl border border-white/10 p-6 md:p-8">
            <span className="section-eyebrow mb-2 block">Your systems health</span>
            <p className="mb-2 text-3xl font-medium text-white">{scoreResult.band.label}</p>
            <p className="text-sm leading-relaxed text-neutral-400">{scoreResult.band.summary}</p>
            <p className="mt-4 font-mono text-xs text-neutral-600">Score: {scoreResult.score} / 15</p>
          </div>
          <button
            type="button"
            onClick={() => setStep('gate')}
            className="cta-primary rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400"
          >
            Get my full breakdown by email
          </button>
        </div>
      ) : null}

      {step === 'gate' && scoreResult ? (
        <div className="glass-panel max-w-md rounded-2xl border border-white/10 p-6 md:p-8">
          <GhlNameEmailForm
            submitLabel="Send my breakdown"
            webhook="self-audit"
            leadConfig={{
              ...SELF_AUDIT_LEAD_CONFIG,
              tags: [...SELF_AUDIT_LEAD_CONFIG.tags, scoreResult.band.tag],
            }}
            extraMeta={{
              score: String(scoreResult.score),
              band: scoreResult.band.label,
            }}
            onSuccess={() => {
              track(ANALYTICS_EVENTS.SELF_AUDIT_SUBMIT, {
                score: scoreResult.score,
                band: scoreResult.band.label,
              })
              setStep('done')
            }}
          />
        </div>
      ) : null}

      {step === 'done' ? (
        <div className="glass-panel max-w-md rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6 text-center">
          <iconify-icon icon="solar:check-circle-bold" className="mb-3 text-3xl text-emerald-400" />
          <p className="text-white">Check your inbox for your systems breakdown.</p>
        </div>
      ) : null}
    </section>
  )
}
