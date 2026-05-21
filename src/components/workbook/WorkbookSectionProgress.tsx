import { WORKBOOK_LANDING } from '../../constants/workbookLanding'

export default function WorkbookSectionProgress() {
  return (
    <div
      className="workbook-section-progress animate-on-scroll mb-10 glass-panel--quiet rounded-2xl border border-white/10 p-4 md:p-5"
      aria-label="Six workbook sections"
    >
      <p className="section-eyebrow mb-3 text-base">Your path through the workbook</p>
      <div className="workbook-section-progress__track">
        {WORKBOOK_LANDING.inside.sections.map((section, i) => (
          <div
            key={section.title}
            className="workbook-section-progress__pill flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"
            title={section.title}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/30 bg-red-500/15 font-mono text-[11px] font-medium text-red-400">
              {i + 1}
            </span>
            <iconify-icon icon={section.icon} className="text-red-400/80" width="16" aria-hidden />
            <span className="hidden text-xs text-neutral-400 sm:inline">{section.title.replace(/\.$/, '')}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
