import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { CALENDAR_PAGE } from '../constants/calendar'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const copy = CALENDAR_PAGE

export default function Calendar() {
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <Helmet>
        <title>{copy.title} | Brian Marshall</title>
        <meta name="description" content={copy.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brianmarshall.dev/calendar" />
        <meta property="og:title" content={`${copy.title} | Brian Marshall`} />
        <meta property="og:description" content={copy.metaDescription} />
        <meta property="og:image" content="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${copy.title} | Brian Marshall`} />
        <meta name="twitter:description" content={copy.metaDescription} />
      </Helmet>

      <div className="bg-grain" aria-hidden />
      <Navigation />

      <main className="section-elevated tech-grid relative min-h-screen pb-24 pt-32 md:px-12">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="animate-slide-up mb-12 text-center" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <Link
              to="/"
              className="nav-link mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-red-500"
            >
              <iconify-icon icon="solar:arrow-left-linear" />
              Back to Home
            </Link>

            <p className="section-eyebrow mb-3">{copy.eyebrow}</p>
            <h1 className="mb-6 text-4xl font-medium tracking-tight text-white md:text-6xl">{copy.headline}</h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-neutral-400">{copy.subheadline}</p>
          </div>

          <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            <div className="animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
                {copy.sidebar.headline}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-neutral-300">{copy.sidebar.intro}</p>

              <div className="mb-8 space-y-4">
                {copy.sidebar.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="benefit-card flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <iconify-icon
                      icon={benefit.icon}
                      className="case-icon mt-0.5 shrink-0 text-2xl text-red-500"
                      aria-hidden
                    />
                    <div>
                      <h4 className="mb-1 font-medium text-white">{benefit.title}</h4>
                      <p className="text-sm text-neutral-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-panel about-card rounded-2xl p-6">
                <p className="mb-4 text-sm text-neutral-400">{copy.sidebar.trustLabel}</p>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-800">
                    <img
                      src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb90e27fbf24b6.png"
                      alt=""
                      className="h-8 w-8 object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-800">
                    <img
                      src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb9026bbbf24b5.png"
                      alt=""
                      className="h-8 w-8 object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-800">
                    <img
                      src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702d15885e283f324bca.png"
                      alt=""
                      className="h-8 w-8 object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                </div>
                <p className="mb-4 text-lg font-medium text-white">{copy.sidebar.ctaTitle}</p>
                <p className="mb-4 text-xs text-neutral-500">{copy.sidebar.ctaNote}</p>
                <p className="text-sm text-neutral-400">{copy.sidebar.ctaHint}</p>
              </div>
            </div>

            <div className="animate-slide-up w-full" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <div className="calendar-container w-full" style={{ zIndex: 20 }}>
                <iframe
                  src={copy.bookingWidgetSrc}
                  style={{ width: '100%', border: 'none', minHeight: '800px', display: 'block' }}
                  scrolling="yes"
                  id={`${copy.bookingWidgetId}_1768930417580`}
                  title="Book a strategy call"
                />
              </div>
            </div>
          </div>

          <div
            className="animate-slide-up grid grid-cols-1 gap-6 md:grid-cols-3"
            style={{ animationDelay: '1s', opacity: 0 }}
          >
            {copy.infoCards.map((card) => (
              <div key={card.title} className="glass-panel info-card rounded-xl p-6 text-center">
                <iconify-icon icon={card.icon} className="case-icon mb-3 text-2xl text-red-500" aria-hidden />
                <h3 className="mb-1 font-medium text-white">{card.title}</h3>
                <p className="text-sm text-neutral-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer
        className="relative border-t border-white/10 bg-black py-8"
        style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), #000000)' }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative border-t border-white/10 pt-16">
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex flex-col gap-8">
              <div className="flex justify-center md:justify-start">
                <img
                  src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png"
                  alt="Brian Marshall"
                  className="h-16 w-auto opacity-70 md:h-20"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <span className="text-center font-mono text-sm tracking-wider text-neutral-500 md:text-left">
                    © 2026 Brian Marshall
                  </span>
                  <span className="text-center font-mono text-xs italic text-neutral-600 md:text-left">
                    Creative Systems Designer. And founder of AreoClient.
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/in/brianmarshallca/"
                  className="footer-social-link group relative flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-white/20"
                >
                  <iconify-icon
                    icon="mdi:linkedin"
                    className="text-base text-neutral-400 transition-colors group-hover:text-white"
                  />
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 transition-colors group-hover:text-white">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
