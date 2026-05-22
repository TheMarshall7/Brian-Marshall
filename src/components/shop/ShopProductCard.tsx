import { Link } from 'react-router-dom'
import type { ShopProduct } from '../../constants/shop'

type Props = {
  product: ShopProduct
}

export default function ShopProductCard({ product }: Props) {
  const isFree = product.price === 0
  const ctaLabel = product.ctaLabel ?? (product.optInPath ? 'Get it free' : 'Get the blueprint')

  return (
    <article className="shop-product flex h-full flex-col">
      <div className="shop-product-cover relative mb-6 flex justify-center px-2 sm:mb-8">
        <img
          src={product.coverSrc}
          alt={`${product.title} cover`}
          className="h-auto max-h-[min(440px,52vw)] w-auto max-w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
          loading="lazy"
        />
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

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
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
              className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
            >
              <iconify-icon icon="solar:document-text-linear" width="18" />
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
