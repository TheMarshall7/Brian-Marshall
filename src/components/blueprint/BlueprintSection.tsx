import type { ReactNode } from 'react'

type Props = {
  id?: string
  label: string
  headline?: string
  intro?: string
  ambient?: boolean
  className?: string
  children: ReactNode
}

export default function BlueprintSection({
  id,
  label,
  headline,
  intro,
  ambient = false,
  className = '',
  children,
}: Props) {
  const inner = (
    <div className={`relative z-10 ${className}`}>
      <p className="section-eyebrow mb-3">{label}</p>
      {headline ? (
        <h2 className="mb-4 font-bricolage text-2xl font-medium tracking-tight text-white md:text-4xl lg:mb-6">
          {headline}
        </h2>
      ) : null}
      {intro ? (
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">{intro}</p>
      ) : null}
      {children}
    </div>
  )

  const shell = (
    <section
      id={id}
      className={`blueprint-section border-t border-white/10 py-16 md:py-20 ${
        ambient ? 'section-ambient relative overflow-hidden md:py-24' : ''
      }`}
    >
      {ambient ? (
        <>
          <div className="section-ambient__glow" aria-hidden />
          <div className="section-ambient__grid" aria-hidden />
        </>
      ) : null}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">{inner}</div>
    </section>
  )

  return shell
}
