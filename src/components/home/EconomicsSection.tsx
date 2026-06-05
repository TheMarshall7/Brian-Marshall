import { HOME_ECONOMICS } from '../../constants/homeContent'

export default function EconomicsSection() {
  return (
    <section
      id="economics"
      className="relative overflow-hidden border-t border-white/5 bg-neutral-900/30 py-16 md:py-24 lg:py-28"
      aria-labelledby="economics-heading"
    >
      <div className="section-ambient__glow opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[length:44px_44px] opacity-40"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="animate-on-scroll mb-12 flex w-full flex-col items-center text-center md:mb-16 md:items-start md:text-left">
          <p className="section-eyebrow mb-4">{HOME_ECONOMICS.eyebrow}</p>
          <h2
            id="economics-heading"
            className="w-full max-w-4xl font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            {HOME_ECONOMICS.headlineLead}{' '}
            <span className="hero-text-gradient">{HOME_ECONOMICS.headlineAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 animate-on-scroll md:grid-cols-2">
          {HOME_ECONOMICS.cards.map((card, i) => (
            <div
              key={card.label}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:shadow-[0_32px_96px_rgba(0,0,0,0.45),0_0_48px_rgba(239,68,68,0.1)] md:p-10 ${
                i === 1 ? 'delay-100' : ''
              }`}
            >
              <div className="mb-4 flex items-start gap-3 border-b border-white/10 pb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-red-500 shadow-inner transition-transform duration-300 group-hover:scale-105">
                  <iconify-icon icon={i === 0 ? 'solar:wallet-money-linear' : 'solar:chart-2-linear'} width="22" />
                </div>
                <div>
                  <span className="section-eyebrow mb-1 block text-base">{card.label}</span>
                </div>
              </div>
              <p className="text-base leading-relaxed text-neutral-400">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
