import { useState } from 'react'
import { WHAT_BREAKS_SCENARIOS } from '../../constants/aofMasterAudit'

type Props = {
  compact?: boolean
  className?: string
}

export default function WhatBreaksInteractive({ compact = false, className = '' }: Props) {
  const [activeId, setActiveId] = useState(WHAT_BREAKS_SCENARIOS[0].id)
  const active = WHAT_BREAKS_SCENARIOS.find((s) => s.id === activeId) ?? WHAT_BREAKS_SCENARIOS[0]

  return (
    <section className={`${className}`} aria-labelledby={compact ? 'what-breaks-compact-heading' : 'what-breaks-heading'}>
      {!compact ? (
        <div className="mb-10 text-center md:text-left">
          <p className="section-eyebrow mb-4">Stress test</p>
          <h2 id="what-breaks-heading" className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
            What breaks when{' '}
            <span className="hero-text-gradient">pressure hits?</span>
          </h2>
        </div>
      ) : (
        <h3 id="what-breaks-compact-heading" className="mb-6 font-bricolage text-2xl font-medium text-white md:text-3xl">
          What breaks under pressure?
        </h3>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {WHAT_BREAKS_SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            onClick={() => setActiveId(scenario.id)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              activeId === scenario.id
                ? 'border-red-500/40 bg-red-500/10 text-white shadow-[0_0_24px_rgba(239,68,68,0.12)]'
                : 'border-white/10 bg-white/[0.03] text-neutral-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-6">
          <span className="section-eyebrow mb-3 block text-base text-red-400/90">Manual ops</span>
          <p className="text-sm leading-relaxed text-neutral-300">{active.manualBreaks}</p>
        </div>
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6">
          <span className="section-eyebrow mb-3 block text-base text-emerald-400/90">With AOF built</span>
          <p className="text-sm leading-relaxed text-neutral-300">{active.aofHandles}</p>
        </div>
      </div>
    </section>
  )
}
