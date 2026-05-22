import { Link } from 'react-router-dom'
import { WORKBOOK_LANDING_PATH } from '../../constants/site'
import { SHOP_COVER } from '../../constants/shop'

type Props = {
  headingId?: string
}

export default function WorkbookPromoSection({ headingId = 'offer-workbook-heading' }: Props) {
  return (
    <section
      id="offer-workbook"
      className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-16 md:py-28 lg:py-32"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_0%_0%,rgba(239,68,68,0.1),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[length:44px_44px] opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="group/offer-workbook order-2 w-full animate-on-scroll lg:order-1 lg:pt-0">
            <Link to={WORKBOOK_LANDING_PATH} className="offer-framework-cover mb-8 flex justify-center lg:mb-0">
              <img
                src={SHOP_COVER.offerKickstart}
                alt="The Offer Kickstart Workbook cover"
                className="h-auto max-h-[min(420px,50vw)] w-auto max-w-full object-contain drop-shadow-[0_28px_56px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover/offer-workbook:-translate-y-1"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="order-1 flex w-full flex-col items-center text-center md:items-start md:text-left lg:order-2">
            <p className="section-eyebrow mb-4 text-red-400/90">Not ready to invest yet?</p>
            <h2
              id={headingId}
              className="mb-6 w-full font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              Start with the <span className="hero-text-gradient">Offer Kickstart Workbook.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-neutral-400 md:mx-0">
              If you&apos;re not ready for the Knowledge to Cash Blueprint, fix your offer first for free. The Offer
              Kickstart Workbook walks you through the framework so you finish with a sellable offer draft.
            </p>
            <p className="mb-8 flex items-baseline justify-center gap-3 md:justify-start">
              <span className="font-mono text-lg text-neutral-500 line-through">$9.97</span>
              <span className="font-mono text-xl font-medium text-red-400">Free</span>
            </p>
            <Link
              to={`${WORKBOOK_LANDING_PATH}#get-workbook`}
              className="cta-primary group/workbook glow-border relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-9 py-4 text-sm font-medium text-neutral-950 transition-all duration-300 btn-shimmer hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
            >
              <span className="relative z-10">Get the Offer Kickstart Workbook</span>
              <iconify-icon
                icon="solar:arrow-right-linear"
                className="relative z-10 text-lg transition-transform duration-300 group-hover/workbook:translate-x-0.5"
              />
            </Link>
            <p className="mt-4 text-xs text-neutral-600">Instant download · no upsell</p>
          </div>
        </div>
      </div>
    </section>
  )
}
