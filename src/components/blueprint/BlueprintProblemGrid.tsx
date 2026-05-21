import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'

export default function BlueprintProblemGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {BLUEPRINT_LANDING.problem.items.map((item, i) => (
        <li
          key={item.title}
          className={`blueprint-icon-card glass-panel--premium animate-on-scroll rounded-xl border border-white/10 p-5 md:p-6 ${
            i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : ''
          }`}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.12)]">
            <iconify-icon icon={item.icon} width="22" aria-hidden />
          </div>
          <p className="mb-2 font-medium text-white">{item.title}</p>
          <p className="text-sm leading-relaxed text-neutral-400">{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
