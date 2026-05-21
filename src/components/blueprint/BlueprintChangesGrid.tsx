import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'

export default function BlueprintChangesGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {BLUEPRINT_LANDING.changes.items.map((item, i) => (
        <li
          key={item.text}
          className={`blueprint-icon-card glass-panel--premium animate-on-scroll flex gap-4 rounded-xl border border-white/10 p-5 md:p-6 ${
            i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : i === 4 ? 'delay-400' : i === 5 ? 'delay-500' : ''
          }`}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.12)]">
            <iconify-icon icon={item.icon} width="22" aria-hidden />
          </div>
          <span className="text-sm leading-relaxed text-neutral-300 md:text-base">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}
