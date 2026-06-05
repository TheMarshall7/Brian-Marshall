import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import ShopProductCard from '../components/shop/ShopProductCard'
import { SHOP_HEADLINE, SHOP_PRODUCTS, SHOP_SUBHEADLINE } from '../constants/shop'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Shop() {
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <Helmet>
        <title>Resources | Brian Marshall</title>
        <meta
          name="description"
          content="AOF Master Audit for owner-operated businesses, plus Offer Kickstart Workbook and Knowledge to Cash Blueprint for coaches."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brianmarshall.dev/shop" />
        <meta property="og:title" content="Shop | Brian Marshall" />
        <meta
          property="og:description"
          content="Free Offer Kickstart Workbook and Knowledge to Cash Blueprint."
        />
        <link rel="canonical" href="https://brianmarshall.dev/shop" />
      </Helmet>

      <div className="bg-grain" aria-hidden />
      <Navigation />

      <main className="section-elevated tech-grid relative min-h-screen px-6 pb-24 pt-32 md:px-12">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[min(50vh,480px)] w-[min(100vw,800px)] -translate-x-1/2 rounded-full bg-red-900/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1100px]">
          <div className="mb-12 animate-slide-up text-center" style={{ animationDelay: '0.35s', opacity: 0 }}>
            <Link
              to="/"
              className="nav-link mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-red-500"
            >
              <iconify-icon icon="solar:arrow-left-linear" />
              Back to Home
            </Link>
            <h1 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-6xl">{SHOP_HEADLINE}</h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-neutral-400">{SHOP_SUBHEADLINE}</p>
          </div>

          <ul className="grid list-none gap-8 lg:grid-cols-2">
            {SHOP_PRODUCTS.map((product, i) => (
              <li
                key={product.id}
                className={`animate-slide-up ${product.featured ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${0.45 + i * 0.1}s`, opacity: 0 }}
              >
                <ShopProductCard product={product} />
              </li>
            ))}
          </ul>
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
