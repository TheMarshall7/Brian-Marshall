import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import AofBlockGrid from '../components/aof/AofBlockGrid'
import AofDocumentCover from '../components/aof/AofDocumentCover'
import AofFaq from '../components/aof/AofFaq'
import AofPhaseTimeline from '../components/aof/AofPhaseTimeline'
import AofPurchaseSection from '../components/aof/AofPurchaseSection'
import AofSamplePreview from '../components/aof/AofSamplePreview'
import SelfAuditQuiz from '../components/aof/SelfAuditQuiz'
import WhatBreaksInteractive from '../components/aof/WhatBreaksInteractive'
import Navigation from '../components/Navigation'
import StickyCallBar from '../components/shared/StickyCallBar'
import { AOF_LANDING } from '../constants/aofLanding'
import { AOF_DOCUMENT_COVER } from '../constants/site'
import { ANALYTICS_EVENTS } from '../constants/analytics'
import { track } from '../lib/track'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const copy = AOF_LANDING

export default function Aof() {
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
    track(ANALYTICS_EVENTS.AOF_PAGE_VIEW)
  }, [])

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AOF Master Audit',
    description: copy.metaDescription,
    provider: { '@type': 'Person', name: 'Brian Marshall' },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: '1500',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <div className="mobile-safe-bottom relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <Helmet>
        <title>{copy.title} | Brian Marshall</title>
        <meta name="description" content={copy.metaDescription} />
        <link rel="canonical" href="https://brianmarshall.dev/aof" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brianmarshall.dev/aof" />
        <meta property="og:title" content={`${copy.title} | Brian Marshall`} />
        <meta property="og:description" content={copy.metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${copy.title} | Brian Marshall`} />
        <meta name="twitter:description" content={copy.metaDescription} />
        <meta property="og:image" content={`https://brianmarshall.dev${AOF_DOCUMENT_COVER}`} />
        <meta name="twitter:image" content={`https://brianmarshall.dev${AOF_DOCUMENT_COVER}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="bg-grain" aria-hidden />
      <Navigation />
      <StickyCallBar />

      <main className="section-elevated tech-grid relative pb-24 pt-28 md:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[120px]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <Link
            to="/"
            className="nav-link mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 hover:text-red-500"
          >
            <iconify-icon icon="solar:arrow-left-linear" />
            Back to Home
          </Link>

          {/* Hero */}
          <section className="mb-14 grid animate-on-scroll grid-cols-1 items-center gap-8 md:mb-20 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 section-eyebrow">
                {copy.hero.badge}
              </div>
              <h1 className="mb-6 font-bricolage text-4xl font-medium leading-[1.08] text-white md:text-6xl">
                {copy.hero.headlineLead}{' '}
                <span className="hero-text-gradient">{copy.hero.headlineAccent}</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-neutral-400">{copy.hero.subheadline}</p>
              <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-3">
                <iconify-icon icon="solar:tag-price-linear" className="text-red-400" width="22" />
                <span className="font-mono text-sm text-white">{copy.hero.priceAnchor}</span>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to={copy.hero.qualifyPath}
                  onClick={() => track(ANALYTICS_EVENTS.QUALIFYING_CALL_CLICK, { source: 'aof_hero' })}
                  className="cta-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400"
                >
                  {copy.hero.qualifyCta}
                  <iconify-icon icon="solar:arrow-right-linear" />
                </Link>
                <a
                  href={copy.hero.purchasePath}
                  onClick={() => track(ANALYTICS_EVENTS.AOF_PURCHASE_CLICK, { source: 'aof_hero' })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white hover:border-red-500/30 hover:bg-white/5"
                >
                  {copy.hero.purchaseCta}
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-3">
                {copy.hero.trust.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-400">
                    <iconify-icon icon={item.icon} className="text-red-400/80" width="14" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <AofDocumentCover className="hidden lg:flex lg:justify-end" size="lg" />
          </section>

          {/* Who it's for */}
          <section className="mb-14 border-t border-white/5 pt-12 md:mb-20 md:pt-16">
            <p className="section-eyebrow mb-4">{copy.whoItsFor.eyebrow}</p>
            <h2 className="mb-8 font-bricolage text-3xl font-medium text-white md:text-5xl">
              {copy.whoItsFor.headlineLead}{' '}
              <span className="hero-text-gradient">{copy.whoItsFor.headlineAccent}</span>
            </h2>
            <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {copy.whoItsFor.criteria.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-300">
                  <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500">{copy.whoItsFor.notFor}</p>
          </section>

          <section className="mb-14 md:mb-20">
            <WhatBreaksInteractive />
          </section>

          {/* 13 blocks */}
          <section className="mb-14 border-t border-white/5 pt-12 md:mb-20 md:pt-16">
            <div className="mb-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="section-eyebrow mb-4">The framework</p>
                <h2 className="mb-4 font-bricolage text-3xl font-medium text-white md:text-5xl">
                  13 blocks. <span className="hero-text-gradient">One operating blueprint.</span>
                </h2>
                <p className="max-w-2xl text-neutral-400">Tap any block to see what gets mapped in your Master Audit.</p>
              </div>
              <AofDocumentCover variant="flat" size="sm" className="hidden md:flex" />
            </div>
            <AofPhaseTimeline />
            <div className="mt-12">
              <AofBlockGrid />
            </div>
          </section>

          <section className="mb-14 border-t border-white/5 pt-12 md:mb-20 md:pt-16">
            <AofSamplePreview />
          </section>

          {/* Deliverables */}
          <section className="mb-14 border-t border-white/5 pt-12 md:mb-20 md:pt-16">
            <div className="mb-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="section-eyebrow mb-4">{copy.deliverables.eyebrow}</p>
                <h2 className="font-bricolage text-3xl font-medium text-white md:text-5xl">{copy.deliverables.headline}</h2>
              </div>
              <AofDocumentCover variant="flat" size="sm" className="hidden sm:flex" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {copy.deliverables.items.map((item) => (
                <div key={item.title} className="glass-panel rounded-2xl border border-white/10 p-6">
                  <iconify-icon icon={item.icon} className="mb-4 text-2xl text-red-400" />
                  <h3 className="mb-2 font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-14 border-t border-white/5 pt-12 md:mb-20 md:pt-16">
            <div className="mb-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="section-eyebrow mb-4">{copy.process.eyebrow}</p>
                <h2 className="font-bricolage text-3xl font-medium text-white md:text-5xl">
                  {copy.process.headlineLead} <span className="hero-text-gradient">{copy.process.headlineAccent}</span>
                </h2>
              </div>
              <AofDocumentCover variant="flat" size="sm" className="hidden sm:flex" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {copy.process.steps.map((step) => (
                <div key={step.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-bricolage text-3xl text-red-500/70">{step.step}</span>
                  <h3 className="mt-2 font-medium text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <SelfAuditQuiz />
          <AofPurchaseSection />
          <AofFaq />

          <section className="border-t border-white/5 py-16 text-center">
            <h2 className="mb-4 text-2xl font-medium text-white">{copy.finalCta.headline}</h2>
            <p className="mb-8 text-neutral-400">{copy.finalCta.subheadline}</p>
            <Link
              to={copy.finalCta.path}
              className="cta-primary inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400"
            >
              {copy.finalCta.label}
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
