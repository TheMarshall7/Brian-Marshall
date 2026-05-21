import { useState } from 'react'
import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'

export default function BlueprintFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {BLUEPRINT_LANDING.faq.items.map((item, index) => (
        <div
          key={item.question}
          className={`glass-panel--premium animate-on-scroll overflow-hidden rounded-xl border border-white/10 ${
            index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : index === 4 ? 'delay-400' : index === 5 ? 'delay-500' : index === 6 ? 'delay-600' : index === 7 ? 'delay-700' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5 md:p-6"
          >
            <h3 className="pr-4 text-base font-medium text-white md:text-lg">{item.question}</h3>
            <iconify-icon
              icon="solar:alt-arrow-down-linear"
              className={`shrink-0 text-neutral-400 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180 text-red-500' : ''
              }`}
              width="20"
            />
          </button>
          <div className={`faq-answer ${openIndex === index ? 'faq-open' : ''}`}>
            <div className="border-t border-white/10 px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
              <p className="text-sm leading-relaxed text-neutral-400">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
