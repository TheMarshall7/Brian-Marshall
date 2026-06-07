import { Link } from 'react-router-dom'
import PageSeo from '../components/shared/PageSeo'
import VslCloser from '../components/vsl/VslCloser'
import VslComparisonTable from '../components/vsl/VslComparisonTable'
import VslFaq from '../components/vsl/VslFaq'
import VslOfferCard from '../components/vsl/VslOfferCard'
import VslPainSection from '../components/vsl/VslPainSection'
import VslSocialProofRow from '../components/vsl/VslSocialProofRow'
import VslStatsBar from '../components/vsl/VslStatsBar'
import VslTestimonialCard from '../components/vsl/VslTestimonialCard'
import VslVideoPlayer from '../components/vsl/VslVideoPlayer'
import { STRATEGY_CALL_PATH } from '../constants/site'
import {
  VSL_ABOUT_BIO,
  VSL_ABOUT_HEADLINE,
  VSL_FOLD_CTA_LABEL,
  VSL_FREEBIE,
  VSL_HEADLINE,
  VSL_HERO_FUD,
  VSL_HOST_NAME,
  VSL_HOST_TAGLINE,
  VSL_META,
  VSL_OFFERS,
  VSL_OFFERS_HEADLINE,
  VSL_OFFERS_INTRO,
  VSL_PHOTO_SRC,
  VSL_PROOF_CTA,
  VSL_PROOF_HEADLINE,
  VSL_SUBHEADLINE,
  VSL_TESTIMONIAL_EMBED_URL,
  VSL_TESTIMONIALS,
} from '../constants/vsl'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Vsl() {
  useScrollAnimation()

  const scrollToOffers = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="vsl-page relative isolate min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <PageSeo
        title={VSL_META.title}
        description={VSL_META.description}
        path="/vsl"
        keywords={VSL_META.keywords}
        imageAlt="Brian Marshall — Business Systems Architect free training"
      />

      <div className="vsl-grain pointer-events-none" aria-hidden />

      <main className="relative z-10 min-h-screen bg-neutral-950 tech-grid hero-elevated">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute left-1/2 top-0 h-[min(55vh,560px)] w-[min(100vw,880px)] -translate-x-1/2 rounded-full bg-red-900/[0.14] blur-[120px]" />
        </div>

        {/* Hero */}
        <section className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-center px-4 pb-10 pt-12 sm:px-6 sm:pt-14 md:pb-14">
          <div className="text-center">
            <p className="section-eyebrow mb-3 text-red-400/90">Free training · Business Systems</p>
            <h1 className="font-bricolage text-[1.65rem] font-medium leading-[1.12] tracking-tight text-white sm:text-3xl md:text-[2.05rem] lg:text-[2.25rem]">
              {VSL_HEADLINE}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              {VSL_SUBHEADLINE}
            </p>
          </div>

          <VslSocialProofRow />

          <div className="mt-2 sm:mt-4">
            <div className="glass-panel overflow-hidden rounded-2xl border border-white/10 p-1 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-1.5">
              <VslVideoPlayer />
            </div>
            <VslStatsBar />
          </div>

          <div className="mt-6 flex flex-col items-center sm:mt-8">
            <button
              type="button"
              onClick={scrollToOffers}
              className="cta-primary inline-flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all btn-shimmer hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/35"
            >
              {VSL_FOLD_CTA_LABEL}
              <iconify-icon icon="solar:alt-arrow-down-linear" width="18" />
            </button>
            <p className="mt-3 max-w-sm text-center text-xs text-neutral-500">{VSL_HERO_FUD}</p>
          </div>
        </section>

        <div className="relative z-10 border-t border-white/10">
          <VslPainSection onCtaClick={scrollToOffers} />

          <section
            id="offers"
            className="mx-auto max-w-6xl scroll-mt-8 border-t border-white/10 px-4 py-14 sm:px-6 md:py-24"
          >
            <div className="mb-10 text-center md:mb-12">
              <p className="section-eyebrow mb-3 text-neutral-500">Your next steps</p>
              <h2 className="font-bricolage text-2xl font-medium tracking-tight text-white sm:text-3xl">
                {VSL_OFFERS_HEADLINE}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                {VSL_OFFERS_INTRO}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {VSL_OFFERS.map((offer) => (
                <div
                  key={offer.id}
                  className={offer.featured ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}
                >
                  <VslOfferCard offer={offer} />
                </div>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-neutral-500 md:mt-14">
              {VSL_FREEBIE.lead}{' '}
              <Link
                to={VSL_FREEBIE.path}
                className="font-medium text-red-400 underline-offset-2 transition-colors hover:text-red-300 hover:underline"
              >
                {VSL_FREEBIE.cta}
              </Link>
            </p>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={scrollToOffers}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
              >
                Compare options above
                <iconify-icon icon="solar:arrow-up-linear" width="16" />
              </button>
            </div>
          </section>

          <VslComparisonTable />

          <section
            id="proof"
            className="mx-auto max-w-5xl border-t border-white/10 px-4 py-14 sm:px-6 md:py-20"
          >
            <div className="mb-10 text-center">
              <p className="section-eyebrow mb-3 text-neutral-500">Proof</p>
              <h2 className="font-bricolage text-2xl font-medium text-white sm:text-3xl">
                {VSL_PROOF_HEADLINE}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {VSL_TESTIMONIALS.map((t) => (
                <VslTestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>

            {VSL_TESTIMONIAL_EMBED_URL ? (
              <div className="glass-panel mt-8 overflow-hidden rounded-xl border border-white/10">
                <div className="relative aspect-video w-full bg-neutral-900">
                  <iframe
                    src={VSL_TESTIMONIAL_EMBED_URL}
                    title="Client testimonial video"
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : null}

            <div className="mt-10 flex justify-center">
              <Link
                to={STRATEGY_CALL_PATH}
                className="cta-primary inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-medium text-neutral-950 transition-all btn-shimmer hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/35"
              >
                {VSL_PROOF_CTA}
                <iconify-icon icon="solar:arrow-right-linear" width="18" />
              </Link>
            </div>
          </section>

          <section
            id="about"
            className="mx-auto max-w-4xl border-t border-white/10 px-4 py-14 sm:px-6 md:py-20"
          >
            <div className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10">
              <p className="section-eyebrow mb-3 text-neutral-500">About</p>
              <h2 className="mb-8 font-bricolage text-2xl font-medium text-white sm:text-3xl">
                {VSL_ABOUT_HEADLINE}
              </h2>
              <div className="vsl-about-grid items-center gap-8">
                <div className="mx-auto w-full max-w-[13rem] sm:max-w-[15rem]">
                  <img
                    src={encodeURI(VSL_PHOTO_SRC)}
                    alt={VSL_HOST_NAME}
                    width={440}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg font-medium text-white">{VSL_HOST_NAME}</p>
                  <p className="mt-1 text-sm text-red-400/90">{VSL_HOST_TAGLINE}</p>
                  <p className="mt-4 text-base leading-relaxed text-neutral-400">{VSL_ABOUT_BIO}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-3xl border-t border-white/10 px-4 py-14 sm:px-6 md:py-20">
            <div className="mb-10 text-center">
              <p className="section-eyebrow mb-3 text-neutral-500">FAQ</p>
              <h2 className="font-bricolage text-2xl font-medium text-white">Common questions</h2>
            </div>
            <VslFaq />
          </section>

          <VslCloser onCtaClick={scrollToOffers} />
        </div>
      </main>
    </div>
  )
}
