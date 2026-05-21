import { VSL_CLOSER } from '../../constants/vsl'

type Props = {
  onCtaClick: () => void
}

export default function VslCloser({ onCtaClick }: Props) {
  return (
    <section
      id="close"
      className="mx-auto max-w-3xl scroll-mt-8 border-t border-white/10 px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="glass-panel glass-panel--premium rounded-2xl border border-red-500/25 p-6 text-center sm:p-10">
        <p className="section-eyebrow mb-3 text-red-400/90">
          {VSL_CLOSER.label}
        </p>
        <h2 className="font-bricolage text-2xl font-medium leading-snug text-white sm:text-3xl">
          {VSL_CLOSER.headline}
        </h2>
        <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm text-neutral-300 sm:text-base">
          {VSL_CLOSER.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <iconify-icon
                icon="solar:check-circle-bold"
                className="mt-0.5 shrink-0 text-red-500"
                width="20"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onCtaClick}
          className="cta-primary mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all btn-shimmer hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/35 sm:w-auto"
        >
          {VSL_CLOSER.cta}
          <iconify-icon icon="solar:arrow-down-linear" width="18" />
        </button>
        <p className="mt-4 text-xs text-neutral-500">{VSL_CLOSER.fud}</p>
      </div>
    </section>
  )
}
