import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import PageSeo from '../components/shared/PageSeo'
import { BLUEPRINT_CHECKOUT_PAGE } from '../constants/blueprintCheckout'
import { BLUEPRINT_LANDING } from '../constants/blueprintLanding'
import { BLUEPRINT_LANDING_PATH, BLUEPRINT_CHECKOUT_PATH } from '../constants/site'
import { K2C_CHECKOUT_URL, SHOP_COVER, getShopProduct } from '../constants/shop'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const copy = BLUEPRINT_CHECKOUT_PAGE
const product = getShopProduct('knowledge-to-cash')

export default function BlueprintCheckout() {
  useScrollAnimation()

  const checkoutReady = Boolean(K2C_CHECKOUT_URL?.trim())

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <PageSeo
        title={`${copy.title} · ${BLUEPRINT_LANDING.title}`}
        description={copy.metaDescription}
        path={BLUEPRINT_CHECKOUT_PATH}
        keywords={copy.metaKeywords}
        robots="noindex, follow"
        imageAlt="Knowledge to Cash Blueprint checkout"
      />

      <div className="bg-grain" aria-hidden />
      <Navigation />

      <main className="blueprint-page section-elevated tech-grid relative min-h-screen pb-24 pt-28 md:pt-32">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[min(45vh,420px)] w-[min(100vw,720px)] -translate-x-1/2 rounded-full bg-red-900/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-lg px-6 md:px-12">
          <Link
            to={BLUEPRINT_LANDING_PATH}
            className="nav-link mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-red-500"
          >
            <iconify-icon icon="solar:arrow-left-linear" />
            {copy.backLabel}
          </Link>

          <div className="animate-on-scroll text-center">
            <p className="section-eyebrow mb-3">{copy.eyebrow}</p>
            <h1 className="mb-4 font-bricolage text-3xl font-medium tracking-tight text-white md:text-4xl">
              {copy.headline}
            </h1>
            <p className="mb-10 text-base leading-relaxed text-neutral-400">{copy.subheadline}</p>
          </div>

          <div className="blueprint-checkout-card glass-panel--premium animate-on-scroll rounded-2xl border p-8 md:p-10">
            <div className="mb-8 flex flex-col items-center text-center">
              <img
                src={SHOP_COVER.knowledgeToCash}
                alt=""
                className="mb-6 h-auto max-h-36 w-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
                loading="eager"
              />
              <h2 className="text-xl font-medium text-white md:text-2xl">{product.title}</h2>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 font-mono text-sm text-white">
                <iconify-icon icon="solar:tag-price-linear" className="text-red-400" width="16" aria-hidden />
                {BLUEPRINT_LANDING.finalCta.price}
              </p>
            </div>

            <ul className="mb-8 space-y-3 border-t border-white/10 pt-6 text-sm text-neutral-400">
              {product.bullets?.slice(0, 3).map((item) => (
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

            {checkoutReady ? (
              <a
                href={K2C_CHECKOUT_URL}
                className="cta-primary glow-border btn-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
              >
                <iconify-icon icon="solar:cart-check-linear" width="18" />
                {copy.cta}
              </a>
            ) : (
              <p className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-neutral-500">
                {BLUEPRINT_LANDING.checkoutNote}
              </p>
            )}

            <p className="mt-4 text-center text-xs text-neutral-500">{copy.micro}</p>
          </div>

          {product.filePath ? (
            <p className="mt-8 text-center text-xs text-neutral-600">
              Already purchased?{' '}
              <a
                href={product.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 underline-offset-2 hover:text-white hover:underline"
              >
                Open your PDF
              </a>
            </p>
          ) : null}
        </div>
      </main>
    </div>
  )
}
