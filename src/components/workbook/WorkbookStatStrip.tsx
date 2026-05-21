import type { WorkbookStat } from '../../constants/workbookLanding'

type Props = {
  stats: readonly WorkbookStat[]
  className?: string
  icons?: readonly string[]
}

const defaultIcons = [
  'solar:document-text-linear',
  'solar:layers-linear',
  'solar:clock-circle-linear',
]

export default function WorkbookStatStrip({ stats, className = '', icons }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-3 ${className}`}>
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`workbook-stat-card glass-panel--premium animate-on-scroll rounded-xl border border-white/10 p-5 md:p-6 ${
            i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''
          }`}
        >
          <iconify-icon
            icon={icons?.[i] ?? defaultIcons[i] ?? 'solar:star-linear'}
            className="mb-3 text-red-400/90"
            width="22"
            aria-hidden
          />
          <p className="relative font-mono text-3xl font-medium text-white md:text-4xl">{stat.value}</p>
          <p className="relative mt-2 text-xs leading-relaxed text-neutral-500 md:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
