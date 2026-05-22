import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HOME_FAQ, type HomeFaqAnswerPart } from '../../constants/homeFaq'

function FaqAnswer({ parts }: { parts: readonly HomeFaqAnswerPart[] }) {
  return (
    <p className="text-sm leading-relaxed text-neutral-400">
      {parts.map((part, i) =>
        part.type === 'text' ? (
          <span key={i}>{part.value}</span>
        ) : (
          <Link
            key={i}
            to={part.to}
            className="text-red-400/90 underline-offset-2 hover:text-red-300 hover:underline"
          >
            {part.value}
          </Link>
        ),
      )}
    </p>
  )
}

type Props = {
  className?: string
}

export default function HomeFaqSection({ className = '' }: Props) {
  const [openId, setOpenId] = useState<string | null>(null)
  const copy = HOME_FAQ

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className={`border-t border-white/5 bg-neutral-900/20 py-16 section-subtle md:py-24 ${className}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-12">
        <div className="faq-hero-band animate-on-scroll">
          <div className="faq-hero-band__glow" aria-hidden />
          <div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.15)]">
              <iconify-icon icon="solar:chat-round-dots-linear" width="32" />
            </div>
            <div>
              <span className="section-eyebrow mb-2 block text-red-500">{copy.eyebrow}</span>
              <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-5xl">
                {copy.headline}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-neutral-400 md:mx-0">{copy.intro}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {copy.items.map((item, i) => {
            const isOpen = openId === item.id
            const delayClass =
              i === 0 ? '' : i === 1 ? 'delay-75' : i === 2 ? 'delay-100' : i === 3 ? 'delay-150' : i === 4 ? 'delay-200' : i === 5 ? 'delay-300' : 'delay-500'

            return (
              <div
                key={item.id}
                className={`glass-panel faq-card animate-on-scroll overflow-hidden rounded-xl border border-white/10 ${delayClass}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                  aria-expanded={isOpen}
                >
                  <h3 className="pr-4 text-lg font-medium text-white">{item.question}</h3>
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    className={`shrink-0 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`}
                  />
                </button>
                <div className={`faq-answer ${isOpen ? 'faq-open' : ''}`}>
                  <div className="px-6 pb-6">
                    <FaqAnswer parts={item.answer} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 animate-on-scroll text-center">
          <p className="mb-6 text-xl text-white">{copy.cta.question}</p>
          <p className="mx-auto mb-8 max-w-lg text-base text-neutral-400">{copy.cta.sub}</p>
          <Link
            to={copy.cta.path}
            className="cta-primary inline-flex w-full max-w-md items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-medium text-neutral-950 transition-all btn-shimmer hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/30 sm:w-auto sm:px-10"
          >
            {copy.cta.label}
            <iconify-icon icon="solar:arrow-right-up-linear" />
          </Link>
        </div>
      </div>
    </section>
  )
}
