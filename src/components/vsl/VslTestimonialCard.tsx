import type { VslTestimonial } from '../../constants/vsl'

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

type Props = {
  testimonial: VslTestimonial
}

export default function VslTestimonialCard({ testimonial }: Props) {
  const { name, role, quote, result, source, avatarSrc } = testimonial

  return (
    <article className="vsl-testimonial-card glass-panel flex h-full flex-col rounded-2xl border border-white/10 p-5 sm:p-6">
      <p className="mb-4 font-bricolage text-lg font-medium text-red-400">{result}</p>
      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-neutral-300 sm:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-sm font-medium text-red-300"
            aria-hidden
          >
            {initials(name)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="font-medium text-white">{name}</p>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
        {source ? (
          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-500">
            {source}
          </span>
        ) : null}
      </div>
    </article>
  )
}
