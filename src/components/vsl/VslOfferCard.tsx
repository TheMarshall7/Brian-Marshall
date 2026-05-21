import type { VslOfferTier } from '../../constants/vsl'

type Props = {
  offer: VslOfferTier
}

export default function VslOfferCard({ offer }: Props) {
  const featured = offer.featured
  const hasUrl = Boolean(offer.applyUrl)

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 md:p-8 ${
        featured
          ? 'glass-panel glass-panel--premium vsl-offer-card--featured border-red-500/35'
          : 'glass-panel border-white/10'
      }`}
    >
      {offer.badge ? (
        <span className="mb-4 inline-flex w-fit rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-red-400">
          {offer.badge}
        </span>
      ) : (
        <span className="mb-4 block text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          Done With You
        </span>
      )}

      <h3 className="mb-3 font-bricolage text-xl font-medium leading-snug text-white md:text-2xl">
        {offer.name}
      </h3>
      <p className="mb-5 text-sm text-neutral-400">{offer.whoItIsFor}</p>

      <ul className="mb-6 flex flex-1 flex-col gap-2.5 text-sm">
        {offer.whatTheyGet.map((benefit) => (
          <li key={benefit} className="flex gap-2.5 leading-relaxed text-neutral-300">
            <iconify-icon
              icon="solar:check-circle-bold"
              className="mt-0.5 shrink-0 text-red-500/90"
              width="18"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <dl className="mb-6 space-y-3 border-t border-white/10 pt-5 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            Timeline
          </dt>
          <dd className="font-medium text-neutral-200">{offer.timeline}</dd>
        </div>
        {offer.guarantee ? (
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2.5">
            <dt className="mb-1 text-[10px] font-mono uppercase tracking-widest text-red-400/90">
              Guarantee
            </dt>
            <dd className="text-sm leading-relaxed text-neutral-200">{offer.guarantee}</dd>
          </div>
        ) : null}
        <div className="flex justify-between gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            Investment
          </dt>
          <dd className="font-medium text-white">{offer.priceLabel}</dd>
        </div>
      </dl>

      {hasUrl ? (
        <div>
          <a
            href={offer.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-medium transition-all btn-shimmer ${
              featured
                ? 'bg-white text-neutral-950 hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/35 md:py-5 md:text-base'
                : 'border border-white/15 text-white hover:border-white/25 hover:bg-white/10'
            }`}
          >
            {offer.ctaLabel}
            <iconify-icon icon="solar:arrow-right-up-linear" width="18" />
          </a>
          <p className="mt-3 text-center text-xs text-neutral-500">{offer.applyFud}</p>
        </div>
      ) : (
        <p className="text-center text-xs text-neutral-500">
          Set <code className="text-neutral-400">VITE_VSL_APPLY_{offer.id === 'dfy' ? 'DFY' : 'DWY'}_URL</code>
        </p>
      )}
    </article>
  )
}
