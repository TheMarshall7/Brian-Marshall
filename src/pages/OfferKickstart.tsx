import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import BlueprintSection from '../components/blueprint/BlueprintSection'
import WorkbookFaq from '../components/workbook/WorkbookFaq'
import WorkbookInsideGrid from '../components/workbook/WorkbookInsideGrid'
import WorkbookOptInForm from '../components/workbook/WorkbookOptInForm'
import WorkbookOutcomeTimeline from '../components/workbook/WorkbookOutcomeTimeline'
import WorkbookPathVisual from '../components/workbook/WorkbookPathVisual'
import WorkbookProblemGrid from '../components/workbook/WorkbookProblemGrid'
import WorkbookProofVisual from '../components/workbook/WorkbookProofVisual'
import WorkbookSectionProgress from '../components/workbook/WorkbookSectionProgress'
import WorkbookStatStrip from '../components/workbook/WorkbookStatStrip'
import { WORKBOOK_LANDING } from '../constants/workbookLanding'
import { SHOP_COVER } from '../constants/shop'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const copy = WORKBOOK_LANDING

export default function OfferKickstart() {
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <Helmet>
        <title>{copy.title} | Brian Marshall</title>
        <meta name="description" content={copy.metaDescription} />
        <link rel="canonical" href="https://brianmarshall.dev/workbook" />
      </Helmet>

      <div className="bg-grain" aria-hidden />
      <Navigation />

      <main className="workbook-page blueprint-page section-elevated tech-grid relative pb-24 pt-28 md:pt-32">
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
        <section className="blueprint-hero workbook-hero hero-elevated relative overflow-hidden border-b border-white/5 pb-16 md:pb-28">
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
              <WorkbookStatStrip stats={copy.hero.stats} className="mb-8" />
              <div className="glass-panel--premium mb-8 inline-flex items-center gap-3 rounded-xl border border-red-500/20 px-5 py-3.5 shadow-[0_0_32px_rgba(239,68,68,0.08)]">
                <iconify-icon icon="solar:gift-linear" className="text-red-400" width="22" aria-hidden />
                <span className="font-mono text-sm font-medium text-white">{copy.hero.priceAnchor}</span>
              </div>
              <a
                href="#get-workbook"
                className="cta-primary glow-border btn-shimmer inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)] sm:w-auto"
              >
                <iconify-icon icon="solar:download-linear" width="18" />
                {copy.hero.cta}
              </a>
              <p className="mt-3 text-xs text-neutral-500">{copy.hero.micro}</p>
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
              <div className="workbook-hero__cover-wrap blueprint-hero-cover offer-framework-cover group/cover w-full max-w-md">
                <div className="workbook-hero__pedestal" aria-hidden />
                <div className="workbook-hero__ring" aria-hidden />
                <img
                  src={SHOP_COVER.offerKickstart}
                  alt="Offer Kickstart Workbook cover"
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
          ambient
        >
          <WorkbookProblemGrid />
          <div className="workbook-prose-panel animate-on-scroll glass-panel--quiet max-w-3xl rounded-r-xl py-1">
            {copy.problem.body.map((paragraph, i) => (
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
          id="inside"
          label={copy.inside.label}
          headline={copy.inside.headline}
          intro={copy.inside.intro}
          ambient
        >
          <WorkbookSectionProgress />
          <WorkbookInsideGrid />
        </BlueprintSection>

        <BlueprintSection id="proof" label={copy.proof.label} headline={copy.proof.headline} ambient>
          <div className="workbook-prose-panel animate-on-scroll mb-8 max-w-3xl">
            {copy.proof.body.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`text-base leading-relaxed text-neutral-400 md:text-lg ${i > 0 ? 'mt-4' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <WorkbookProofVisual />
        </BlueprintSection>

        <BlueprintSection
          id="how-it-works"
          label={copy.howItWorks.label}
          headline={copy.howItWorks.headline}
          intro={copy.howItWorks.intro}
          ambient
        >
          <WorkbookOutcomeTimeline />
          <div className="glass-panel--premium animate-on-scroll mt-6 rounded-2xl border border-red-500/35 bg-red-500/10 px-6 py-5 text-center shadow-[0_0_40px_rgba(239,68,68,0.12)] md:px-8 md:py-6">
            <iconify-icon
              icon="solar:pen-new-square-linear"
              className="mb-3 inline-block text-red-400"
              width="26"
              aria-hidden
            />
            <p className="text-base font-medium text-red-50/95 md:text-lg">{copy.howItWorks.closing}</p>
          </div>
        </BlueprintSection>

        <BlueprintSection
          id="next-step"
          label={copy.nextStep.label}
          headline={copy.nextStep.headline}
          ambient
        >
          <div className="max-w-3xl space-y-4">
            {copy.nextStep.body.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`animate-on-scroll text-base leading-relaxed text-neutral-400 md:text-lg ${
                  i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : ''
                } ${i === 2 ? 'font-medium text-neutral-300' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <WorkbookPathVisual />
        </BlueprintSection>

        <BlueprintSection id="faq" label={copy.faq.label} headline={copy.faq.headline} ambient>
          <WorkbookFaq />
        </BlueprintSection>

        {/* Final CTA + opt-in */}
        <section
          id="get-workbook"
          className="section-ambient relative scroll-mt-28 overflow-hidden border-t border-white/10 py-20 md:scroll-mt-32 md:py-28"
        >
          <div className="section-ambient__glow" aria-hidden />
          <div className="section-ambient__grid" aria-hidden />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <p className="section-eyebrow mb-3 text-center">{copy.finalCta.label}</p>
            <h2 className="mb-4 text-center font-bricolage text-2xl font-medium tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              {copy.finalCta.headline}
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-neutral-400 md:text-lg">
              {copy.finalCta.subheadline}
            </p>
            <div className="workbook-final-cta__panel glass-panel--premium animate-on-scroll mx-auto rounded-2xl border p-8 md:p-12 lg:p-14">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
                <div className="workbook-final-cta__cover relative flex justify-center lg:justify-start">
                  <div className="workbook-final-cta__pedestal" aria-hidden />
                  <img
                    src={SHOP_COVER.offerKickstart}
                    alt="Offer Kickstart Workbook cover"
                    className="workbook-final-cta__img relative z-10 h-auto w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="w-full min-w-0 lg:max-w-md lg:justify-self-end xl:max-w-lg">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 font-mono text-sm text-white">
                  <iconify-icon icon="solar:gift-linear" className="text-red-400" width="16" aria-hidden />
                  {copy.finalCta.price}
                </div>
                <WorkbookOptInForm submitLabel={copy.finalCta.cta} />
                <p className="mt-4 text-xs leading-relaxed text-neutral-500">{copy.finalCta.micro}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
