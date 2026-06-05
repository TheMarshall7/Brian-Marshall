import { useEffect, useMemo, useState } from 'react'
import GhlNameEmailForm from '../shared/GhlNameEmailForm'
import { ANALYTICS_EVENTS } from '../../constants/analytics'
import { AOF_LANDING } from '../../constants/aofLanding'
import {
  buildSelfAuditLeadMeta,
  SELF_AUDIT_PDF_PATH,
  SELF_AUDIT_WHERE_TO_START_BY_BAND,
} from '../../constants/selfAuditDeliverable'
import {
  SELF_AUDIT_BAND_STYLES,
  SELF_AUDIT_LEAD_CONFIG,
  SELF_AUDIT_MAX_SCORE,
  SELF_AUDIT_QUESTIONS,
  getSelfAuditGaps,
  scoreSelfAudit,
} from '../../constants/selfAudit'
import { track } from '../../lib/track'
import ReserveAuditLink from './ReserveAuditLink'

type Step = 'quiz' | 'result' | 'gate' | 'done'

function ScoreRing({ score, max, tone }: { score: number; max: number; tone: keyof typeof SELF_AUDIT_BAND_STYLES }) {
  const styles = SELF_AUDIT_BAND_STYLES[tone]
  const pct = max > 0 ? score / max : 0
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct)

  return (
    <div className={`relative mx-auto h-36 w-36 ${styles.glow} rounded-full`}>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden>
        <circle cx="60" cy="60" r={radius} fill="none" className="stroke-white/10" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          className={`${styles.ring} transition-all duration-700 ease-out`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bricolage text-3xl font-medium text-white">{score}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">/ {max}</span>
      </div>
    </div>
  )
}

export default function SelfAuditQuiz() {
  const [step, setStep] = useState<Step>('quiz')
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [scoreResult, setScoreResult] = useState<ReturnType<typeof scoreSelfAudit> | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAdvancing, setIsAdvancing] = useState(false)
  const copy = AOF_LANDING.selfAudit

  const total = SELF_AUDIT_QUESTIONS.length
  const current = SELF_AUDIT_QUESTIONS[currentIndex]
  const answeredCount = SELF_AUDIT_QUESTIONS.filter((q) => answers[q.id] !== undefined).length
  const progressPct = (answeredCount / total) * 100
  const liveScore = useMemo(() => {
    let score = 0
    for (const q of SELF_AUDIT_QUESTIONS) {
      if (answers[q.id]) score += q.weight
    }
    return score
  }, [answers])

  const allAnswered = answeredCount === total
  const bandStyles = scoreResult ? SELF_AUDIT_BAND_STYLES[scoreResult.band.tone] : null
  const leadMeta = scoreResult ? buildSelfAuditLeadMeta(answers, scoreResult) : null
  const gaps = useMemo(() => getSelfAuditGaps(answers), [answers])
  const whereToStart = scoreResult ? SELF_AUDIT_WHERE_TO_START_BY_BAND[scoreResult.band.label] ?? [] : []

  const setAnswer = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    setIsAdvancing(true)
    window.setTimeout(() => {
      setIsAdvancing(false)
      if (currentIndex < total - 1) {
        setCurrentIndex((i) => i + 1)
      }
    }, 380)
  }

  const goToQuestion = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, total - 1)))
  }

  const handleScore = () => {
    const result = scoreSelfAudit(answers)
    setScoreResult(result)
    setStep('result')
    track(ANALYTICS_EVENTS.SELF_AUDIT_SUBMIT, { phase: 'scored', score: result.score, band: result.band.label })
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (step !== 'quiz' || isAdvancing) return
      if (e.key === 'y' || e.key === 'Y') setAnswer(current.id, true)
      if (e.key === 'n' || e.key === 'N') setAnswer(current.id, false)
      if (e.key === 'ArrowLeft' && currentIndex > 0) goToQuestion(currentIndex - 1)
      if (e.key === 'ArrowRight' && currentIndex < total - 1) goToQuestion(currentIndex + 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [step, currentIndex, current.id, isAdvancing])

  return (
    <section id="self-audit" className="scroll-mt-28 border-t border-white/5 py-16 md:py-24">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="section-eyebrow mb-4">{copy.eyebrow}</p>
          <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
            {copy.headlineLead} <span className="hero-text-gradient">{copy.headlineAccent}</span>
          </h2>
          <p className="mt-4 max-w-xl text-neutral-400">{copy.subheadline}</p>

          {step === 'quiz' ? (
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  {answeredCount} of {total} answered
                </span>
                <span className="font-mono text-xs text-neutral-600">Live score: {liveScore}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SELF_AUDIT_QUESTIONS.map((q, i) => {
                  const answered = answers[q.id] !== undefined
                  const isCurrent = i === currentIndex
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => goToQuestion(i)}
                      aria-label={`Question ${i + 1}: ${q.area}`}
                      aria-current={isCurrent ? 'step' : undefined}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        isCurrent
                          ? 'scale-125 bg-red-400 ring-2 ring-red-400/30'
                          : answered
                            ? answers[q.id]
                              ? 'bg-emerald-500/80'
                              : 'bg-red-500/70'
                            : 'bg-white/15 hover:bg-white/30'
                      }`}
                    />
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-8">
          {step === 'quiz' ? (
            <div className="glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/10 blur-3xl"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <span className="section-eyebrow text-base text-red-400/90">{current.area}</span>
                </div>

                <p
                  key={current.id}
                  className={`mb-8 text-xl font-medium leading-snug text-white transition-all duration-300 md:text-2xl ${
                    isAdvancing ? 'translate-y-1 opacity-60' : 'translate-y-0 opacity-100'
                  }`}
                >
                  {current.question}
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {(
                    [
                      { label: 'Yes', value: true, icon: 'solar:check-circle-linear', hint: 'System in place' },
                      { label: 'No', value: false, icon: 'solar:close-circle-linear', hint: 'Gap or manual' },
                    ] as const
                  ).map((option) => {
                    const selected = answers[current.id] === option.value
                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setAnswer(current.id, option.value)}
                        disabled={isAdvancing}
                        className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                          selected
                            ? option.value
                              ? 'border-emerald-500/40 bg-emerald-500/10 shadow-[0_0_32px_rgba(16,185,129,0.12)]'
                              : 'border-red-500/40 bg-red-500/10 shadow-[0_0_32px_rgba(239,68,68,0.12)]'
                            : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                        }`}
                      >
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all ${
                            selected
                              ? option.value
                                ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                                : 'border-red-500/30 bg-red-500/15 text-red-400'
                              : 'border-white/10 bg-neutral-900/60 text-neutral-500 group-hover:text-neutral-300'
                          }`}
                        >
                          <iconify-icon icon={option.icon} width="24" />
                        </span>
                        <span>
                          <span className="block text-lg font-medium text-white">{option.label}</span>
                          <span className="mt-0.5 block text-xs text-neutral-500">{option.hint}</span>
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <button
                    type="button"
                    onClick={() => goToQuestion(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-400 transition-all hover:border-white/20 hover:text-white disabled:opacity-30"
                  >
                    <iconify-icon icon="solar:arrow-left-linear" width="16" />
                    Back
                  </button>
                  <p className="hidden font-mono text-[10px] uppercase tracking-widest text-neutral-600 sm:block">
                    Y / N shortcuts
                  </p>
                  {currentIndex < total - 1 ? (
                    <button
                      type="button"
                      onClick={() => goToQuestion(currentIndex + 1)}
                      disabled={answers[current.id] === undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition-all hover:border-red-500/30 hover:text-white disabled:opacity-30"
                    >
                      Next
                      <iconify-icon icon="solar:arrow-right-linear" width="16" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={!allAnswered}
                      onClick={handleScore}
                      className="cta-primary inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400 disabled:opacity-40"
                    >
                      See my score
                      <iconify-icon icon="solar:chart-2-linear" width="18" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          {step === 'result' && scoreResult && bandStyles ? (
            <div className="animate-slide-up space-y-6" style={{ opacity: 1 }}>
              <div className={`glass-panel rounded-2xl border border-white/10 p-6 md:p-10 ${bandStyles.glow}`}>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr]">
                  <ScoreRing score={scoreResult.score} max={SELF_AUDIT_MAX_SCORE} tone={scoreResult.band.tone} />
                  <div>
                    <span className="section-eyebrow mb-2 block">Your systems health</span>
                    <p className={`mb-3 text-3xl font-medium md:text-4xl ${bandStyles.text}`}>
                      {scoreResult.band.label}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-400 md:text-base">{scoreResult.band.summary}</p>
                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${bandStyles.bar}`}
                        style={{ width: `${(scoreResult.score / SELF_AUDIT_MAX_SCORE) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {SELF_AUDIT_QUESTIONS.map((q) => {
                    const yes = answers[q.id]
                    return (
                      <div
                        key={q.id}
                        title={q.question}
                        className={`rounded-xl border px-2 py-2 text-center transition-all ${
                          yes
                            ? 'border-emerald-500/25 bg-emerald-500/10'
                            : 'border-red-500/20 bg-red-500/[0.06]'
                        }`}
                      >
                        <span className="block truncate font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                          {q.area}
                        </span>
                        <iconify-icon
                          icon={yes ? 'solar:check-circle-bold' : 'solar:close-circle-bold'}
                          className={`mt-1 text-base ${yes ? 'text-emerald-400' : 'text-red-400/80'}`}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => setStep('gate')}
                  className="cta-primary inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400"
                >
                  Email my results + Where to Start guide
                  <iconify-icon icon="solar:letter-linear" width="18" />
                </button>
                <ReserveAuditLink source="self_audit_results" className="flex-1 px-6 py-4" />
                <button
                  type="button"
                  onClick={() => {
                    setStep('quiz')
                    setCurrentIndex(0)
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm text-neutral-400 hover:border-white/20 hover:text-white"
                >
                  Retake quiz
                </button>
              </div>
            </div>
          ) : null}

          {step === 'gate' && scoreResult && bandStyles && leadMeta ? (
            <div className="glass-panel max-w-xl rounded-2xl border border-white/10 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <ScoreRing score={scoreResult.score} max={SELF_AUDIT_MAX_SCORE} tone={scoreResult.band.tone} />
                <div>
                  <p className={`text-lg font-medium ${bandStyles.text}`}>{scoreResult.band.label}</p>
                  <p className="text-xs text-neutral-500">
                    We&apos;ll email your score breakdown and the Where to Start PDF.
                  </p>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-white/10 bg-neutral-950/50 p-4 text-sm">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-neutral-500">Included in your email</p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex gap-2">
                    <iconify-icon icon="solar:chart-2-linear" className="mt-0.5 shrink-0 text-red-400" width="16" />
                    <span>
                      Score {scoreResult.score}/{SELF_AUDIT_MAX_SCORE} · {scoreResult.band.label}
                    </span>
                  </li>
                  {gaps.length > 0 ? (
                    <li className="flex gap-2">
                      <iconify-icon icon="solar:danger-linear" className="mt-0.5 shrink-0 text-red-400" width="16" />
                      <span>Priority gaps: {gaps.slice(0, 3).map((g) => g.area).join(', ')}</span>
                    </li>
                  ) : null}
                  {whereToStart[0] ? (
                    <li className="flex gap-2">
                      <iconify-icon icon="solar:map-arrow-right-linear" className="mt-0.5 shrink-0 text-red-400" width="16" />
                      <span>{whereToStart[0]}</span>
                    </li>
                  ) : null}
                  <li className="flex gap-2">
                    <iconify-icon icon="solar:document-text-linear" className="mt-0.5 shrink-0 text-red-400" width="16" />
                    <span>Where to Start PDF (fix order + next steps)</span>
                  </li>
                </ul>
              </div>

              <GhlNameEmailForm
                submitLabel="Send results + PDF"
                webhook="self-audit"
                leadConfig={{
                  ...SELF_AUDIT_LEAD_CONFIG,
                  tags: [...SELF_AUDIT_LEAD_CONFIG.tags, scoreResult.band.tag],
                }}
                extraMeta={leadMeta}
                onSuccess={() => {
                  track(ANALYTICS_EVENTS.SELF_AUDIT_SUBMIT, {
                    phase: 'email',
                    score: scoreResult.score,
                    band: scoreResult.band.label,
                  })
                  setStep('done')
                }}
              />
            </div>
          ) : null}

          {step === 'done' ? (
            <div className="glass-panel max-w-lg rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-8 text-center">
              <iconify-icon icon="solar:check-circle-bold" className="mb-4 text-4xl text-emerald-400" />
              <p className="text-lg font-medium text-white">You&apos;re in.</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Check your inbox for your personalized systems breakdown. The Where to Start PDF is in the email too.
              </p>
              <a
                href={SELF_AUDIT_PDF_PATH}
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-300 transition-all hover:bg-emerald-500/20"
              >
                <iconify-icon icon="solar:download-linear" width="18" />
                Download Where to Start PDF now
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
