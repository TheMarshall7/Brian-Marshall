import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import BlueprintChangesGrid from '../components/blueprint/BlueprintChangesGrid'
import BlueprintCta from '../components/blueprint/BlueprintCta'
import BlueprintFaq from '../components/blueprint/BlueprintFaq'
import BlueprintLayerGrid from '../components/blueprint/BlueprintLayerGrid'
import BlueprintLayerSummary from '../components/blueprint/BlueprintLayerSummary'
import BlueprintPhaseTimeline from '../components/blueprint/BlueprintPhaseTimeline'
import BlueprintProblemGrid from '../components/blueprint/BlueprintProblemGrid'
import BlueprintProofVisual from '../components/blueprint/BlueprintProofVisual'
import BlueprintSection from '../components/blueprint/BlueprintSection'
import BlueprintStarterPath from '../components/blueprint/BlueprintStarterPath'
import BlueprintStatStrip from '../components/blueprint/BlueprintStatStrip'
import { BLUEPRINT_LANDING } from '../constants/blueprintLanding'
import { SHOP_COVER, getShopProduct } from '../constants/shop'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const copy = BLUEPRINT_LANDING
const product = getShopProduct('knowledge-to-cash')

const heroStatIcons = ['solar:document-text-linear', 'solar:layers-linear', 'solar:calendar-linear']

export default function Blueprint() {
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <Helmet>
        <title>{copy.title} | Brian Marshall</title>
        <meta name="description" content={copy.metaDescription} />
        <link rel="canonical" href="https://brianmarshall.dev/blueprint" />
      </Helmet>

      <div className="bg-grain" aria-hidden />
      <Navigation />

      <main className="blueprint-page section-elevated tech-grid relative pb-24 pt-28 md:pt-32">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[min(55vh,520px)] w-[min(100vw,900px)] -translate-x-1/2 rounded-full bg-red-900/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <Link
            to="/shop"
            className="nav-link mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-red-500"
          >
            <iconify-icon icon="solar:arrow-left-linear" />
            Back to Shop
          </Link>
        </div>

        {/* Hero */}
        <section className="blueprint-hero hero-elevated relative overflow-hidden border-b border-white/5 pb-16 md:pb-28">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(239,68,68,0.18),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(239,68,68,0.08),transparent_50%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[length:44px_44px] opacity-80"
            aria-hidden
          />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 section-eyebrow shadow-[0_0_28px_rgba(239,68,68,0.15)]">
                {copy.hero.badge}
              </div>
              <h1 className="mb-6 font-bricolage text-3xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                {copy.hero.headlineLead}{' '}
                <span className="hero-text-gradient">{copy.hero.headlineAccent}</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-400 md:text-xl">{copy.hero.subheadline}</p>
              <BlueprintStatStrip stats={copy.hero.stats} icons={heroStatIcons} className="mb-8" />
              <div className="glass-panel--premium mb-8 inline-flex items-center gap-3 rounded-xl border border-red-500/20 px-5 py-3.5 shadow-[0_0_32px_rgba(239,68,68,0.08)]">
                <iconify-icon icon="solar:tag-price-linear" className="text-red-400" width="22" aria-hidden />
                <span className="font-mono text-sm font-medium text-white">{copy.hero.priceAnchor}</span>
              </div>
              <BlueprintCta
                label={copy.hero.cta}
                micro={copy.hero.micro}
                showPrice={false}
                size="large"
              />
              <ul className="mt-8 flex flex-wrap gap-3">
                {copy.hero.trust.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-400"
                  >
                    <iconify-icon icon={item.icon} className="text-red-400/80" width="14" aria-hidden />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 flex animate-on-scroll justify-center lg:order-2">
              <div className="blueprint-hero__cover-wrap blueprint-hero-cover offer-framework-cover group/cover w-full max-w-md">
                <div className="blueprint-hero__pedestal" aria-hidden />
                <div className="blueprint-hero__ring" aria-hidden />
                <img
                  src={SHOP_COVER.knowledgeToCash}
                  alt="Knowledge to Cash Blueprint cover"
                  className="relative z-10 h-auto max-h-[min(460px,55vw)] w-auto max-w-full object-contain drop-shadow-[0_32px_64px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out group-hover/cover:-translate-y-2"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <BlueprintSection
          id="problem"
          label={copy.problem.label}
          headline={copy.problem.headline}
          intro={copy.problem.intro}
          ambient
        >
          <BlueprintProblemGrid />
        </BlueprintSection>

        <BlueprintSection
          id="insight"
          label={copy.insight.label}
          headline={copy.insight.headline}
          ambient
        >
          <BlueprintStatStrip />
          <div className="blueprint-prose-panel animate-on-scroll max-w-3xl">
            {copy.insight.body.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`text-base leading-relaxed text-neutral-400 md:text-lg ${i > 0 ? 'mt-4' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </BlueprintSection>

        <BlueprintSection
          id="phases"
          label={copy.phases.label}
          headline={copy.phases.headline}
          intro={copy.phases.intro}
          ambient
        >
          <BlueprintPhaseTimeline />
          <BlueprintStarterPath />
        </BlueprintSection>

        <BlueprintSection
          id="inside"
          label={copy.inside.label}
          headline={copy.inside.headline}
          intro={copy.inside.body}
          ambient
        >
          <BlueprintLayerSummary />
          <BlueprintLayerGrid />
        </BlueprintSection>

        <BlueprintSection id="changes" label={copy.changes.label} headline={copy.changes.headline} ambient>
          <BlueprintChangesGrid />
        </BlueprintSection>

        <BlueprintSection id="proof" label={copy.proof.label} headline={copy.proof.headline} ambient>
          <BlueprintProofVisual />
        </BlueprintSection>

        <BlueprintSection
          id="living-doc"
          label={copy.livingDoc.label}
          headline={copy.livingDoc.headline}
          ambient
        >
          <div className="blueprint-prose-panel mb-8 max-w-3xl">
            {copy.livingDoc.body.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-base leading-relaxed text-neutral-400 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {copy.livingDoc.perks.map((perk, i) => (
              <div
                key={perk.label}
                className={`glass-panel--premium animate-on-scroll flex items-center gap-3 rounded-xl border border-white/10 p-4 ${
                  i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400">
                  <iconify-icon icon={perk.icon} width="22" aria-hidden />
                </div>
                <span className="text-sm font-medium text-neutral-200">{perk.label}</span>
              </div>
            ))}
          </div>
          <div className="glass-panel--premium animate-on-scroll rounded-2xl border border-red-500/35 bg-red-500/10 px-6 py-5 text-center text-sm font-medium text-red-100/95 shadow-[0_0_40px_rgba(239,68,68,0.12)] md:text-base">
            <iconify-icon
              icon="solar:infinity-linear"
              className="mb-2 inline-block text-red-400"
              width="24"
              aria-hidden
            />
            <p>{copy.livingDoc.callout}</p>
          </div>
        </BlueprintSection>

        <BlueprintSection id="faq" label={copy.faq.label} headline={copy.faq.headline} ambient>
          <BlueprintFaq />
        </BlueprintSection>

        <section className="section-ambient relative overflow-hidden border-t border-white/10 py-20 md:py-28">
          <div className="section-ambient__glow" aria-hidden />
          <div className="section-ambient__grid" aria-hidden />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <p className="section-eyebrow mb-3 text-center">{copy.finalCta.label}</p>
            <h2 className="mb-4 text-center font-bricolage text-2xl font-medium tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              {copy.finalCta.headline}
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-center text-base leading-relaxed text-neutral-400 md:text-lg">
              {copy.finalCta.subheadline}
            </p>

            <div className="blueprint-final-cta__panel glass-panel--premium animate-on-scroll mx-auto max-w-4xl rounded-2xl border p-6 md:p-8">
              <div className="flex flex-col items-center gap-8 text-center">
                <div className="blueprint-final-cta__cover blueprint-final-cta__cover--compact relative flex w-full items-center justify-center">
                  <div className="blueprint-final-cta__pedestal" aria-hidden />
                  <img
                    src={SHOP_COVER.knowledgeToCash}
                    alt="Knowledge to Cash Blueprint cover"
                    className="blueprint-final-cta__img relative z-10 mx-auto h-auto w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <BlueprintCta
                  label={copy.finalCta.cta}
                  micro={copy.finalCta.micro}
                  showPrice={false}
                  className="flex w-full flex-col items-center text-center"
                />
              </div>
            </div>
          </div>
        </section>

        {product.filePath ? (
          <p className="relative z-10 mx-auto mt-12 max-w-7xl px-6 text-center text-xs text-neutral-600 md:px-12">
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
      </main>
    </div>
  )
}
