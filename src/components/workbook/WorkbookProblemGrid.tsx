import { WORKBOOK_LANDING } from '../../constants/workbookLanding'

export default function WorkbookProblemGrid() {
  return (
    <ul className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {WORKBOOK_LANDING.problem.pains.map((pain, i) => (
        <li
          key={pain.title}
          className={`blueprint-icon-card glass-panel--premium animate-on-scroll rounded-xl border border-white/10 p-5 md:p-6 ${
            i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''
          }`}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.12)]">
            <iconify-icon icon={pain.icon} width="22" aria-hidden />
          </div>
          <p className="mb-2 font-medium text-white">{pain.title}</p>
          <p className="text-sm leading-relaxed text-neutral-400">{pain.description}</p>
        </li>
      ))}
    </ul>
  )
}
