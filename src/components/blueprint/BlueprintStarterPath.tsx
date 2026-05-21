import { Link } from 'react-router-dom'
import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'
import { SHOP_COVER } from '../../constants/shop'

export default function BlueprintStarterPath() {
  const path = BLUEPRINT_LANDING.starterPath

  return (
    <div className="blueprint-path-visual animate-on-scroll glass-panel--premium mt-8 overflow-hidden rounded-2xl border p-6 md:p-8">
      <p className="section-eyebrow mb-6 text-center md:text-left">No offer yet? Start with the free workbook first.</p>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <Link
          to={path.workbookPath}
          className="group flex flex-col items-center rounded-xl border border-white/10 bg-black/25 p-5 text-center transition-colors hover:border-red-500/30 md:items-start md:text-left"
        >
          <p className="section-eyebrow mb-3">{path.offerLabel}</p>
          <img
            src={SHOP_COVER.offerKickstart}
            alt="Offer Kickstart Workbook"
            className="mb-3 h-auto max-h-32 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-y-1"
            loading="lazy"
          />
          <p className="text-sm text-neutral-500">{path.offerCaption}</p>
        </Link>

        <div className="flex flex-col items-center justify-center gap-2" aria-hidden>
          <div className="blueprint-path-visual__connector">
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
          <p className="section-eyebrow mb-3">{path.machineLabel}</p>
          <img
            src={SHOP_COVER.knowledgeToCash}
            alt="Knowledge to Cash Blueprint"
            className="mb-3 h-auto max-h-32 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
            loading="lazy"
          />
          <p className="text-sm text-neutral-500">{path.machineCaption}</p>
        </div>
      </div>
    </div>
  )
}
