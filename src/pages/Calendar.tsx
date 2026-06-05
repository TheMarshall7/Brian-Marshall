import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PreCallQualifier from '../components/calendar/PreCallQualifier'
import Navigation from '../components/Navigation'
import { CALENDAR_PAGE } from '../constants/calendar'
import { HOME_CONTACT } from '../constants/homeContent'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const copy = CALENDAR_PAGE

export default function Calendar() {
  useScrollAnimation()
  const [showCalendar, setShowCalendar] = useState(false)

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

              <p className="mb-8 text-sm text-neutral-500">
                {copy.sidebar.disqualifierLead}{' '}
                <Link to={copy.sidebar.disqualifierPath} className="text-red-400 hover:text-red-300">
                  {copy.sidebar.disqualifierLinkLabel}
                </Link>
              </p>

              <div className="glass-panel about-card rounded-2xl p-6">
                <p className="mb-4 text-sm text-neutral-400">{copy.sidebar.trustLabel}</p>
                <p className="mb-4 text-lg font-medium text-white">{copy.sidebar.ctaTitle}</p>
                <p className="mb-4 text-xs text-neutral-500">{copy.sidebar.ctaNote}</p>
                <p className="text-sm text-neutral-400">{copy.sidebar.ctaHint}</p>
              </div>
            </div>

            <div className="animate-slide-up w-full" style={{ animationDelay: '0.8s', opacity: 0 }}>
              {!showCalendar ? (
                <PreCallQualifier onComplete={() => setShowCalendar(true)} onSkip={() => setShowCalendar(true)} />
              ) : (
                <div className="calendar-container w-full" style={{ zIndex: 20 }}>
                  <iframe
                    src={copy.bookingWidgetSrc}
                    style={{ width: '100%', border: 'none', minHeight: '800px', display: 'block' }}
                    scrolling="yes"
                    id={`${copy.bookingWidgetId}_1768930417580`}
                    title="Book your free qualifying call"
                  />
                </div>
              )}
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

      <footer className="relative border-t border-white/10 bg-black py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <span className="font-mono text-sm text-neutral-500">Brian Marshall</span>
            <span className="font-mono text-xs text-neutral-600">{HOME_CONTACT.footerTagline}</span>
            <span className="font-mono text-xs text-neutral-600">© 2026 Brian Marshall</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
