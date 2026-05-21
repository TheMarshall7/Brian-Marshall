import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'

export default function BlueprintPhaseTimeline() {
  const items = BLUEPRINT_LANDING.phases.items

  return (
    <ol className="blueprint-timeline space-y-0">
      {items.map((phase, index) => (
        <li
          key={phase.phase}
          className={`blueprint-timeline__item animate-on-scroll flex gap-5 md:gap-8 ${
            index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : index === 4 ? 'delay-400' : ''
          }`}
        >
          <div className="blueprint-timeline__rail flex flex-col items-center">
            <span className="blueprint-timeline__node flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-500/45 bg-red-500/20 font-mono text-sm font-medium text-red-300 shadow-[0_0_24px_rgba(239,68,68,0.2)]">
              {index + 1}
            </span>
            {index < items.length - 1 ? (
              <span className="blueprint-timeline__line mt-2 w-px flex-grow bg-gradient-to-b from-red-500/50 to-white/10" />
            ) : null}
          </div>
          <div className="blueprint-icon-card glass-panel--premium mb-6 flex flex-grow gap-4 rounded-xl border border-white/10 p-5 md:mb-8 md:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400">
              <iconify-icon icon={phase.icon} width="22" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-red-400/80">
                  {phase.phase}
                </span>
                <span className="text-lg font-medium text-white">{phase.title}</span>
                <span className="font-mono text-xs text-neutral-500">{phase.timing}</span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400 md:text-base">{phase.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
