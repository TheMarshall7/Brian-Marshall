import { useState } from 'react'
import { AOF_LANDING } from '../../constants/aofLanding'

export default function AofFaq() {
  const [openId, setOpenId] = useState<string | null>(null)
  const copy = AOF_LANDING.faq

  return (
    <section className="border-t border-white/5 py-16 md:py-24">
      <div className="mb-10 text-center md:text-left">
        <p className="section-eyebrow mb-4">{copy.eyebrow}</p>
        <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">{copy.headline}</h2>
      </div>
      <div className="space-y-4">
        {copy.items.map((item) => {
          const isOpen = openId === item.id
          return (
            <div key={item.id} className="glass-panel overflow-hidden rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-white/5"
                aria-expanded={isOpen}
              >
                <h3 className="pr-4 font-medium text-white">{item.question}</h3>
                <iconify-icon
                  icon="solar:alt-arrow-down-linear"
                  className={`shrink-0 transition-transform ${isOpen ? 'rotate-180 text-red-500' : 'text-neutral-400'}`}
                />
              </button>
              <div className={`faq-answer ${isOpen ? 'faq-open' : ''}`}>
                <p className="px-6 pb-6 text-sm leading-relaxed text-neutral-400">{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
