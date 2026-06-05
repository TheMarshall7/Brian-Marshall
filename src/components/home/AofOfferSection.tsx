import { useState } from 'react'
import { Link } from 'react-router-dom'
import AofDocumentCover from '../aof/AofDocumentCover'
import { AOF_PHASE_GROUPS } from '../../constants/aofMasterAudit'
import { HOME_AOF_OFFER } from '../../constants/homeContent'
import { ANALYTICS_EVENTS } from '../../constants/analytics'
import { track } from '../../lib/track'

export default function AofOfferSection() {
  const [offerFocus, setOfferFocus] = useState(0)
  const focusPanelId = 'aof-focus-panel'
  const headingId = 'aof-offer-heading'
  const listLabelId = 'aof-framework-list-label'
  const teaserBullets = AOF_PHASE_GROUPS.map((g) => ({
    line: `${g.label} · ${g.blockRange}`,
    focus: g.description,
  }))

  return (
    <section
      id="aof-offer"
      className="mobile-section-tight relative overflow-hidden border-t border-white/5 bg-neutral-950 py-16 md:py-28 lg:py-32"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(239,68,68,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[length:44px_44px] opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="animate-on-scroll flex w-full flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-center section-eyebrow text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.12)] transition-[box-shadow,transform] duration-300 hover:border-red-500/40 hover:shadow-[0_0_32px_rgba(239,68,68,0.2)] md:justify-start md:text-left">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              {HOME_AOF_OFFER.eyebrow}
            </div>
            <h2
              id={headingId}
              className="mb-6 w-full font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              {HOME_AOF_OFFER.headlineLead}{' '}
              <span className="hero-text-gradient">{HOME_AOF_OFFER.headlineAccent}</span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-neutral-400 md:mx-0">
              {HOME_AOF_OFFER.intro}
            </p>
            <div className="group/result relative mb-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 text-left transition-all duration-500 hover:border-red-500/25 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)] md:p-8">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition-opacity duration-500 group-hover/result:opacity-100"
                aria-hidden
              />
              <span className="section-eyebrow mb-3 block text-red-500/90">{HOME_AOF_OFFER.resultLabel}</span>
              <p className="relative text-base leading-relaxed text-neutral-200">{HOME_AOF_OFFER.resultText}</p>
            </div>
            <div
              id={focusPanelId}
              role="region"
              aria-live="polite"
              aria-atomic="true"
              className="mb-8 min-h-[5.5rem] w-full max-w-xl rounded-xl border border-white/10 bg-black/30 p-4 text-left text-sm leading-relaxed text-neutral-400 transition-[border-color,box-shadow] duration-300 md:min-h-[5rem] md:p-5"
            >
              <span className="section-eyebrow mb-1 block text-lg text-red-500/80">Lens</span>
              <p key={offerFocus} className="animate-[offerFocusFade_0.35s_ease-out] text-neutral-300">
                {teaserBullets[offerFocus].focus}
              </p>
            </div>
            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={HOME_AOF_OFFER.ctaPath}
                onClick={() => track(ANALYTICS_EVENTS.QUALIFYING_CALL_CLICK, { source: 'home_aof' })}
                className="cta-primary group/download glow-border relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-9 py-4 text-sm font-medium text-neutral-950 transition-all duration-300 btn-shimmer hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
              >
                <span className="relative z-10">{HOME_AOF_OFFER.cta}</span>
                <iconify-icon
                  icon="solar:arrow-right-linear"
                  className="relative z-10 text-lg transition-transform duration-300 group-hover/download:translate-x-0.5 group-hover/download:scale-110"
                />
              </Link>
              <Link
                to={HOME_AOF_OFFER.explorePath}
                onClick={() => track(ANALYTICS_EVENTS.AOF_EXPLORE_CLICK, { source: 'home_aof' })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-9 py-4 text-sm font-medium text-white transition-all hover:border-red-500/30 hover:bg-white/5"
              >
                {HOME_AOF_OFFER.exploreCta}
              </Link>
            </div>
            <p className="mt-4 text-xs text-neutral-600">{HOME_AOF_OFFER.priceNote}</p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-neutral-500">{HOME_AOF_OFFER.buildCreditNote}</p>
          </div>

          <div className="group/aof-framework w-full animate-on-scroll pt-2 delay-100 sm:pt-12 lg:pt-0">
            <AofDocumentCover className="aof-doc-preview mb-6 hidden sm:flex lg:mb-10" size="md" />

            <div className="group/card relative rounded-2xl border border-white/10 bg-neutral-900/40 px-4 pb-5 pt-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 group-hover/aof-framework:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_32px_96px_rgba(0,0,0,0.5),0_0_48px_rgba(239,68,68,0.12)] sm:px-6 sm:pb-6 sm:pt-6 md:p-10 md:pt-8">
              <div className="mb-6 flex items-start gap-3 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-red-500 shadow-inner transition-transform duration-300 group-hover/card:scale-105">
                  <iconify-icon icon="solar:document-text-linear" width="22" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Framework</span>
                  <p className="text-lg font-medium text-white">AOF Master Audit</p>
                </div>
              </div>

              <p id={listLabelId} className="section-eyebrow mb-3 text-neutral-500">
                Three phases · tap a line
              </p>
              <ul className="space-y-1" role="group" aria-labelledby={listLabelId}>
                {teaserBullets.map((item, i) => (
                  <li key={item.line}>
                    <button
                      type="button"
                      aria-pressed={offerFocus === i}
                      aria-controls={focusPanelId}
                      onClick={() => setOfferFocus(i)}
                      onMouseEnter={() => setOfferFocus(i)}
                      className={`group/item flex w-full gap-4 rounded-xl px-3 py-3.5 text-left transition-all duration-300 md:py-3 ${
                        offerFocus === i
                          ? 'border border-red-500/35 bg-red-500/[0.08] shadow-[0_0_28px_rgba(239,68,68,0.12)]'
                          : 'border border-transparent hover:border-white/10 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          offerFocus === i
                            ? 'scale-110 bg-red-500/25 text-red-400'
                            : 'bg-red-500/10 text-red-500/80 group-hover/item:scale-105'
                        }`}
                      >
                        <iconify-icon icon="solar:check-circle-bold" width="16" />
                      </div>
                      <span
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                          offerFocus === i ? 'text-neutral-100' : 'text-neutral-400'
                        }`}
                      >
                        {item.line}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <Link
                to={HOME_AOF_OFFER.explorePath}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-red-400/90 hover:text-red-300"
              >
                See all 13 blocks
                <iconify-icon icon="solar:arrow-right-linear" width="14" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
