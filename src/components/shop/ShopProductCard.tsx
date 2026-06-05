import { Link } from 'react-router-dom'
import type { ShopProduct } from '../../constants/shop'

type Props = {
  product: ShopProduct
}

function DocumentPreview() {
  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute -inset-4 rounded-3xl bg-red-500/10 blur-2xl" aria-hidden />
      <div className="glass-panel relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-5 shadow-[0_24px_48px_rgba(0,0,0,0.55)]">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">AOF Master Audit</span>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
            13 BLOCKS
          </span>
        </div>
        <div className="space-y-2 font-mono text-[10px] text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="text-red-400">&gt;</span>
            <span className="text-neutral-300">BLOCK_01_FOUNDATION</span>
          </div>
          <div className="flex items-center gap-2 pl-3">
            <span className="text-red-400/70">&gt;</span>
            <span>BLOCK_03_PIPELINE</span>
          </div>
          <div className="flex items-center gap-2 pl-3">
            <span className="text-red-400/70">&gt;</span>
            <span>BLOCK_07_AI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">&gt;</span>
            <span className="text-neutral-300">BLOCK_12_PRICING</span>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
          <span className="block text-[9px] font-mono uppercase tracking-widest text-red-400/80">Status</span>
          <p className="mt-1 text-xs text-white">Mapped. Sequenced. Priced.</p>
        </div>
      </div>
    </div>
  )
}

export default function ShopProductCard({ product }: Props) {
  const isFree = product.price === 0
  const ctaLabel = product.ctaLabel ?? (product.optInPath ? 'Get it free' : 'Learn more')

  return (
    <article className="shop-product flex h-full flex-col">
      <div className="shop-product-cover relative mb-6 flex justify-center px-2 sm:mb-8">
        {product.documentPreview ? (
          <DocumentPreview />
        ) : product.coverSrc ? (
          <img
            src={product.coverSrc}
            alt={`${product.title} cover`}
            className="h-auto max-h-[min(440px,52vw)] w-auto max-w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
            loading="lazy"
          />
        ) : null}
        {product.badge ? (
          <span className="absolute right-2 top-2 rounded-full border border-white/10 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-300 backdrop-blur-sm sm:right-4 sm:top-4">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="glass-panel shop-product-card flex flex-grow flex-col rounded-2xl p-6 md:p-8">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h2 className="text-xl font-medium leading-snug text-white md:text-2xl">{product.title}</h2>
          <span className="flex shrink-0 items-baseline gap-2">
            {product.priceOriginalLabel ? (
              <span className="font-mono text-xs text-neutral-500 line-through">{product.priceOriginalLabel}</span>
            ) : null}
            <span
              className={`font-mono text-sm font-medium tracking-wide ${
                isFree ? 'text-red-400' : 'text-white'
              }`}
            >
              {product.priceLabel}
            </span>
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-neutral-400 md:text-base">{product.description}</p>

        {product.bullets?.length ? (
          <ul className="mb-4 list-none space-y-2 border-t border-white/10 pt-4 text-sm text-neutral-300">
            {product.bullets.map((item) => (
              <li key={item} className="flex gap-2 leading-relaxed">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  className="mt-0.5 shrink-0 text-red-500"
                  width="18"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {product.footnote ? (
          <p className="mb-6 text-sm leading-relaxed text-neutral-500">{product.footnote}</p>
        ) : (
          <div className="mb-6 flex-grow" />
        )}

        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                product.purchasePath
                  ? 'border border-white/10 bg-white/[0.05] text-white hover:border-red-500/30 hover:bg-white/10'
                  : 'bg-white text-black hover:bg-red-400'
              }`}
            >
              <iconify-icon icon="solar:document-text-linear" width="18" />
              {ctaLabel}
            </Link>
          ) : null}

          {product.purchasePath ? (
            <Link
              to={product.purchasePath}
              className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
            >
              <iconify-icon icon="solar:calendar-mark-linear" width="18" />
              {product.purchaseCtaLabel ?? 'Reserve your session'}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
