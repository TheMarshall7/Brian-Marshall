import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import PageSeo from '../components/shared/PageSeo'
import ShopProductCard from '../components/shop/ShopProductCard'
import { SHOP_HEADLINE, SHOP_META, SHOP_PRODUCTS, SHOP_SUBHEADLINE } from '../constants/shop'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const featuredProduct = SHOP_PRODUCTS.find((p) => p.featured)
const coachProducts = SHOP_PRODUCTS.filter((p) => !p.featured)

export default function Shop() {
  useScrollAnimation()

  return (
    <div className="shop-page relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <PageSeo
        title={SHOP_META.title}
        description={SHOP_META.description}
        path="/shop"
        keywords={SHOP_META.keywords}
        imageAlt="Brian Marshall resources — AOF Master Audit and guides"
      />

      <div className="bg-grain" aria-hidden />
      <Navigation />

      <main className="section-elevated tech-grid relative min-h-screen px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-12">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[min(55vh,520px)] w-[min(100vw,900px)] -translate-x-1/2 rounded-full bg-red-900/12 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[length:44px_44px] opacity-60"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <header className="mb-14 animate-slide-up text-center sm:mb-16 md:mb-20" style={{ animationDelay: '0.35s', opacity: 0 }}>
            <Link
              to="/"
              className="nav-link mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-red-500"
            >
              <iconify-icon icon="solar:arrow-left-linear" />
              Back to Home
            </Link>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 section-eyebrow text-neutral-400">
              <iconify-icon icon="solar:library-linear" className="text-red-400/90" width="16" />
              Curated resources
            </div>

            <h1 className="mb-5 font-bricolage text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-6xl">
              {SHOP_HEADLINE}
              <span className="mt-2 block hero-text-gradient sm:mt-3">built for two paths.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">{SHOP_SUBHEADLINE}</p>
          </header>

          {featuredProduct ? (
            <section className="mb-16 animate-slide-up sm:mb-20" style={{ animationDelay: '0.45s', opacity: 0 }} aria-labelledby="shop-featured-heading">
              <div className="shop-section-label mb-6 flex items-center gap-4">
                <span id="shop-featured-heading" className="section-eyebrow shrink-0 text-red-400/90">
                  Owner-operated businesses
                </span>
                <span className="h-px flex-grow bg-gradient-to-r from-red-500/30 to-transparent" aria-hidden />
              </div>
              <ShopProductCard product={featuredProduct} />
            </section>
          ) : null}

          {coachProducts.length ? (
            <section aria-labelledby="shop-coach-heading">
              <div className="shop-section-label mb-8 animate-slide-up flex items-center gap-4" style={{ animationDelay: '0.55s', opacity: 0 }}>
                <span id="shop-coach-heading" className="section-eyebrow shrink-0 text-neutral-500">
                  For coaches & experts
                </span>
                <span className="h-px flex-grow bg-gradient-to-r from-white/15 to-transparent" aria-hidden />
              </div>

              <ul className="grid list-none gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
                {coachProducts.map((product, i) => (
                  <li
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${0.6 + i * 0.1}s`, opacity: 0 }}
                  >
                    <ShopProductCard product={product} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </main>

      <footer
        className="relative border-t border-white/10 bg-black py-12"
        style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), #000000)' }}
      >
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-12">
          <p className="text-sm text-neutral-500">
            Questions?{' '}
            <Link to="/" className="text-neutral-400 transition-colors hover:text-white">
              Get in touch
            </Link>{' '}
            from the home page.
          </p>
        </div>
      </footer>
    </div>
  )
}
