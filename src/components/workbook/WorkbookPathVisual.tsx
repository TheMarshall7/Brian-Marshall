import { Link } from 'react-router-dom'
import { WORKBOOK_LANDING } from '../../constants/workbookLanding'
import { SHOP_COVER } from '../../constants/shop'

export default function WorkbookPathVisual() {
  const { nextStep } = WORKBOOK_LANDING

  return (
    <div className="workbook-path-visual animate-on-scroll glass-panel--premium mt-10 overflow-hidden rounded-2xl border p-6 md:p-10">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div className="flex flex-col items-center rounded-xl border border-white/10 bg-black/25 p-5 text-center md:items-start md:text-left">
          <p className="section-eyebrow mb-3">{nextStep.path.offerLabel}</p>
          <img
            src={SHOP_COVER.offerKickstart}
            alt="Offer Kickstart Workbook"
            className="mb-3 h-auto max-h-36 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
            loading="lazy"
          />
          <p className="text-sm text-neutral-500">{nextStep.path.offerCaption}</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2" aria-hidden>
          <div className="workbook-path-visual__connector">
            <span className="hidden md:inline-flex">
              <iconify-icon icon="solar:arrow-right-linear" width="22" className="text-red-400" />
            </span>
            <span className="inline-flex md:hidden">
              <iconify-icon icon="solar:arrow-down-linear" width="22" className="text-red-400" />
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">then</span>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-red-500/20 bg-red-500/[0.06] p-5 text-center md:items-end md:text-right">
          <p className="section-eyebrow mb-3">{nextStep.path.machineLabel}</p>
          <img
            src={SHOP_COVER.knowledgeToCash}
            alt="Knowledge to Cash Blueprint"
            className="mb-3 h-auto max-h-36 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
            loading="lazy"
          />
          <p className="text-sm text-neutral-500">{nextStep.path.machineCaption}</p>
        </div>
      </div>

      <Link
        to="/blueprint/checkout"
        className="cta-primary glow-border btn-shimmer mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)] md:mx-auto md:w-auto"
      >
        <iconify-icon icon="solar:document-text-linear" width="18" />
        {nextStep.cta}
      </Link>
    </div>
  )
}
