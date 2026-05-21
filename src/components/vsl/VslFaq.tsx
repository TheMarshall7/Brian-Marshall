import { useState } from 'react'
import { VSL_FAQ } from '../../constants/vsl'

export default function VslFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {VSL_FAQ.map((item, index) => (
        <div
          key={item.question}
          className="glass-panel faq-card overflow-hidden rounded-xl border border-white/10"
        >
          <button
            type="button"
            onClick={() => toggle(index)}
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
