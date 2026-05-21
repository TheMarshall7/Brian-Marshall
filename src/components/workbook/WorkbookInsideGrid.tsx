import { WORKBOOK_LANDING } from '../../constants/workbookLanding'

export default function WorkbookInsideGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {WORKBOOK_LANDING.inside.sections.map((section, i) => (
        <li
          key={section.title}
          className={`workbook-inside-card blueprint-icon-card glass-panel--premium animate-on-scroll rounded-xl border border-white/10 p-5 md:p-6 ${
            i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : i === 4 ? 'delay-400' : i === 5 ? 'delay-500' : ''
          }`}
        >
          <span className="workbook-inside-card__num" aria-hidden>
            {i + 1}
          </span>
          <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.12)]">
            <iconify-icon icon={section.icon} width="24" aria-hidden />
          </div>
          <p className="relative mb-2 font-medium text-white">{section.title}</p>
          <p className="relative text-sm leading-relaxed text-neutral-400">{section.description}</p>
        </li>
      ))}
    </ul>
  )
}
