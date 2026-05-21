import { VSL_PAIN_BRIDGE, VSL_PAIN_HEADLINE, VSL_PAINS } from '../../constants/vsl'

type Props = {
  onCtaClick?: () => void
}

export default function VslPainSection({ onCtaClick }: Props) {
  return (
    <section id="pain" className="mx-auto max-w-3xl scroll-mt-8 px-4 py-14 sm:px-6 md:py-20">
      <div className="mb-8 text-center">
        <p className="section-eyebrow mb-3 text-neutral-500">
          Sound familiar?
        </p>
        <h2 className="font-bricolage text-2xl font-medium text-white sm:text-3xl">
          {VSL_PAIN_HEADLINE}
        </h2>
      </div>
      <ul className="space-y-3">
        {VSL_PAINS.map((pain) => (
          <li
            key={pain}
            className="glass-panel flex gap-3 rounded-xl border border-white/10 px-5 py-4 text-sm leading-relaxed text-neutral-300 sm:text-base"
          >
            <iconify-icon
              icon="solar:close-circle-bold"
              className="mt-0.5 shrink-0 text-red-500/80"
              width="20"
            />
            <span>{pain}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-base leading-relaxed text-neutral-300 sm:text-lg">
        {VSL_PAIN_BRIDGE}
      </p>
      {onCtaClick ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-white/10"
          >
            See how we fix this
            <iconify-icon icon="solar:arrow-down-linear" width="18" />
          </button>
        </div>
      ) : null}
    </section>
  )
}
