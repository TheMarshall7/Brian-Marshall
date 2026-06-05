import { Link } from 'react-router-dom'
import { ANALYTICS_EVENTS } from '../../constants/analytics'
import type { ShopProduct } from '../../constants/shop'
import { track } from '../../lib/track'

type Props = {
  product: ShopProduct
}

function ProductBullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="shop-product-bullets list-none space-y-2.5">
      {bullets.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-neutral-950/50 text-red-400 shadow-inner ring-1 ring-white/5">
            <iconify-icon icon="solar:check-circle-linear" width="16" aria-hidden />
          </span>
          <span className="text-sm text-neutral-300 md:text-[0.9375rem]">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ProductActions({ product, ctaLabel }: { product: ShopProduct; ctaLabel: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {product.purchasePath ? (
        <Link
          to={product.purchasePath}
          onClick={() => track(ANALYTICS_EVENTS.AOF_PURCHASE_CLICK, { source: 'shop_card' })}
          className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
        >
          <iconify-icon icon="solar:calendar-mark-linear" width="18" />
          {product.purchaseCtaLabel ?? 'Reserve your session'}
        </Link>
      ) : null}

      {product.optInPath ? (
        <Link
          to={`${product.optInPath}#get-workbook`}
          className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
        >
          <iconify-icon icon="solar:download-linear" width="18" />
          {ctaLabel}
        </Link>
      ) : null}

      {product.landingPath ? (
        <Link
          to={product.landingPath}
          className={`btn-shimmer inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:shadow-lg hover:shadow-red-500/20 ${
            product.purchasePath || product.optInPath
              ? 'border border-white/10 bg-white/[0.05] text-white hover:border-red-500/30 hover:bg-white/10'
              : 'bg-white text-black hover:bg-red-400'
          }`}
        >
          <iconify-icon icon="solar:document-text-linear" width="18" />
          {ctaLabel}
        </Link>
      ) : null}
    </div>
  )
}

function FeaturedCard({ product, ctaLabel }: { product: ShopProduct; ctaLabel: string }) {
  return (
    <article className="shop-product shop-product--featured group relative">
      <div
        className="pointer-events-none absolute -left-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-red-600/10 blur-[100px] lg:block"
        aria-hidden
      />

      <div className="shop-product-featured-panel glass-panel--premium relative overflow-hidden rounded-2xl border border-red-500/20 p-6 transition-all duration-500 group-hover:border-red-500/35 group-hover:shadow-[0_0_56px_rgba(239,68,68,0.1)] sm:p-8 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 lg:p-10">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/10 blur-3xl"
          aria-hidden
        />

        <div className="shop-product-cover-pedestal relative mb-8 flex justify-center lg:mb-0">
          {product.coverSrc ? (
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-6 bottom-2 h-12 rounded-full bg-black/60 blur-2xl"
                aria-hidden
              />
              <img
                src={product.coverSrc}
                alt={`${product.title} cover`}
                className="shop-product-cover-img relative z-10 h-auto max-h-[min(320px,48vw)] w-auto max-w-full object-contain drop-shadow-[0_28px_56px_rgba(0,0,0,0.65)] lg:max-h-[min(400px,36vw)]"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>

        <div className="relative z-10 flex flex-col">
          {product.badge ? (
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="section-eyebrow text-red-400">{product.badge}</span>
            </div>
          ) : null}

          <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-bricolage text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              {product.title}
            </h2>
            <span className="shop-product-price-pill shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-sm font-medium tracking-wide text-white">
              {product.priceLabel}
            </span>
          </div>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-neutral-400">{product.description}</p>

          {product.bullets?.length ? (
            <div className="mb-6 rounded-xl border border-white/10 bg-black/25 p-5 md:p-6">
              <ProductBullets bullets={product.bullets} />
            </div>
          ) : null}

          {product.footnote ? (
            <p className="mb-6 text-sm leading-relaxed text-neutral-500">{product.footnote}</p>
          ) : null}

          <ProductActions product={product} ctaLabel={ctaLabel} />
        </div>
      </div>
    </article>
  )
}

function StandardCard({ product, ctaLabel }: { product: ShopProduct; ctaLabel: string }) {
  const isFree = product.price === 0

  return (
    <article className="shop-product shop-product--standard group flex h-full flex-col">
      <div className="shop-product-cover relative z-10 -mb-14 flex justify-center px-4 sm:-mb-16">
        {product.coverSrc ? (
          <img
            src={product.coverSrc}
            alt={`${product.title} cover`}
            className="shop-product-cover-img h-auto max-h-[min(240px,38vw)] w-auto max-w-[min(220px,72vw)] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] sm:max-h-[min(280px,42vw)]"
            loading="lazy"
          />
        ) : null}
        {product.badge ? (
          <span className="absolute right-2 top-2 rounded-full border border-white/10 bg-black/75 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-300 backdrop-blur-sm sm:right-6">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="shop-product-card glass-panel--premium relative flex flex-grow flex-col rounded-2xl border border-white/10 px-5 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 md:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-red-500/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <div className="relative z-10 mb-3 flex items-baseline justify-between gap-3">
          <h2 className="font-bricolage text-xl font-medium leading-snug text-white md:text-2xl">{product.title}</h2>
          <span className="flex shrink-0 items-baseline gap-2">
            {product.priceOriginalLabel ? (
              <span className="font-mono text-xs text-neutral-500 line-through">{product.priceOriginalLabel}</span>
            ) : null}
            <span
              className={`rounded-full border px-3 py-1 font-mono text-xs font-medium tracking-wide ${
                isFree
                  ? 'border-red-500/25 bg-red-500/10 text-red-400'
                  : 'border-white/10 bg-white/[0.04] text-white'
              }`}
            >
              {product.priceLabel}
            </span>
          </span>
        </div>

        <p className="relative z-10 mb-5 text-sm leading-relaxed text-neutral-400 md:text-base">{product.description}</p>

        {product.bullets?.length ? (
          <div className="relative z-10 mb-5 border-t border-white/10 pt-5">
            <ProductBullets bullets={product.bullets} />
          </div>
        ) : null}

        {product.footnote ? (
          <p className="relative z-10 mb-6 text-sm leading-relaxed text-neutral-500">{product.footnote}</p>
        ) : (
          <div className="relative z-10 mb-6 flex-grow" />
        )}

        <div className="relative z-10 mt-auto">
          <ProductActions product={product} ctaLabel={ctaLabel} />
        </div>
      </div>
    </article>
  )
}

export default function ShopProductCard({ product }: Props) {
  const ctaLabel = product.ctaLabel ?? (product.optInPath ? 'Get it free' : 'Learn more')

  if (product.featured) {
    return <FeaturedCard product={product} ctaLabel={ctaLabel} />
  }

  return <StandardCard product={product} ctaLabel={ctaLabel} />
}
