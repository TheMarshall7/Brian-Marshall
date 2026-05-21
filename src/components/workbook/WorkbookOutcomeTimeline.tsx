import { WORKBOOK_LANDING } from '../../constants/workbookLanding'

export default function WorkbookOutcomeTimeline() {
  const outcomes = WORKBOOK_LANDING.howItWorks.outcomes

  return (
    <ol className="workbook-outcome-timeline space-y-0">
      {outcomes.map((outcome, index) => (
        <li
          key={outcome.step}
          className={`workbook-outcome-timeline__item animate-on-scroll flex gap-5 md:gap-8 ${
            index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : index === 4 ? 'delay-400' : index === 5 ? 'delay-500' : ''
          }`}
        >
          <div className="blueprint-timeline__rail flex flex-col items-center">
            <span className="blueprint-timeline__node flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-500/45 bg-red-500/20 font-mono text-sm font-medium text-red-300 shadow-[0_0_24px_rgba(239,68,68,0.2)]">
              {outcome.step}
            </span>
            {index < outcomes.length - 1 ? (
              <span className="blueprint-timeline__line mt-2 w-px flex-grow bg-gradient-to-b from-red-500/50 to-white/10" />
            ) : null}
          </div>
          <div className="blueprint-icon-card glass-panel--premium mb-6 flex flex-grow items-start gap-4 rounded-xl border border-white/10 p-5 md:mb-8 md:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400">
              <iconify-icon icon={outcome.icon} width="22" aria-hidden />
            </div>
            <p className="pt-1 text-sm leading-relaxed text-neutral-300 md:text-base">{outcome.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
