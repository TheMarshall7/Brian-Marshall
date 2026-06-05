import ReserveAuditLink from '../aof/ReserveAuditLink'
import { HOME_PROBLEM } from '../../constants/homeContent'

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-16 md:py-28 lg:py-32"
      aria-labelledby="problem-heading"
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
        className="pointer-events-none absolute -right-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="animate-on-scroll mb-12 flex w-full flex-col items-center text-center md:mb-16 md:items-start md:text-left">
          <p className="section-eyebrow mb-4">{HOME_PROBLEM.eyebrow}</p>
          <h2
            id="problem-heading"
            className="mb-6 w-full max-w-4xl font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            {HOME_PROBLEM.headlineLead}{' '}
            <span className="hero-text-gradient">{HOME_PROBLEM.headlineAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 animate-on-scroll md:grid-cols-3">
          {HOME_PROBLEM.cards.map((card, i) => (
            <div
              key={card.label}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 transition-all duration-500 hover:border-red-500/25 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)] md:p-8 ${
                i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''
              }`}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <span className="section-eyebrow mb-4 block text-red-500/90">{card.label}</span>
              <p className="relative text-base leading-relaxed text-neutral-300">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center animate-on-scroll md:justify-start">
          <ReserveAuditLink source="home_problem" />
        </div>
      </div>
    </section>
  )
}
