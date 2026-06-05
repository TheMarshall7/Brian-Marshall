import { useEffect } from 'react'
import {
  AOF_PURCHASE_BOOKING_WIDGET_ID,
  AOF_PURCHASE_WIDGET_SRC,
  GHL_FORM_EMBED_SCRIPT_SRC,
} from '../../constants/ghl'
import { AOF_LANDING } from '../../constants/aofLanding'
import AofDocumentCover from './AofDocumentCover'
import AofRiskReversal from './AofRiskReversal'

export default function AofPurchaseSection() {
  const copy = AOF_LANDING.purchase
  const widgetReady = Boolean(AOF_PURCHASE_WIDGET_SRC)

  useEffect(() => {
    if (!widgetReady) return
    if (document.querySelector(`script[src="${GHL_FORM_EMBED_SCRIPT_SRC}"]`)) return
    const script = document.createElement('script')
    script.src = GHL_FORM_EMBED_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [widgetReady])

  return (
    <section id="purchase" className="scroll-mt-28 border-t border-white/5 py-16 md:py-24">
      <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div className="text-center md:text-left">
          <p className="section-eyebrow mb-4">{copy.eyebrow}</p>
          <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">{copy.headline}</h2>
          <p className="mt-4 max-w-xl text-neutral-400">{copy.subheadline}</p>
          <p className="mt-4 max-w-2xl rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm leading-relaxed text-neutral-300">
            {copy.buildCreditNote}
          </p>
          <p className="mt-3 font-mono text-xs text-neutral-600">{copy.micro}</p>
        </div>
        <AofDocumentCover variant="flat" size="sm" className="hidden sm:flex lg:max-w-[220px]" />
      </div>

      {widgetReady ? (
        <div className="mb-10 w-full">
          <p className="mb-3 text-center text-[11px] text-neutral-600 md:text-left">{copy.salesFinalNote}</p>
          <div className="aof-booking-embed w-full overflow-hidden">
          <iframe
            src={AOF_PURCHASE_WIDGET_SRC}
            style={{ width: '100%', border: 'none', minHeight: '800px', display: 'block', overflow: 'hidden' }}
            scrolling="no"
            id={`${AOF_PURCHASE_BOOKING_WIDGET_ID}_aof_purchase`}
            title="Book and pay for AOF Master Audit session"
          />
          </div>
        </div>
      ) : (
        <div className="glass-panel mb-10 rounded-2xl border border-white/10 p-8 text-center">
          <p className="mb-4 text-neutral-400">Online booking opens soon. Email to reserve your audit session.</p>
          <a
            href={`mailto:${copy.fallbackEmail}?subject=AOF%20Master%20Audit%20Reservation`}
            className="cta-primary inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400"
          >
            {copy.fallbackCta}
          </a>
        </div>
      )}

      <AofRiskReversal />
    </section>
  )
}
