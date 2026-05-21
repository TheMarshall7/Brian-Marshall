import type { BlueprintStat } from '../../constants/blueprintLanding'
import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'

type Props = {
  stats?: readonly BlueprintStat[]
  className?: string
  icons?: readonly string[]
}

const defaultIcons = [
  'solar:users-group-two-rounded-linear',
  'solar:chart-2-linear',
  'solar:percent-linear',
]

export default function BlueprintStatStrip({
  stats = BLUEPRINT_LANDING.insight.stats,
  className = 'mb-8',
  icons,
}: Props) {
  return (
    <div className={`blueprint-stat-strip grid grid-cols-1 gap-4 sm:grid-cols-3 ${className}`}>
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`blueprint-stat-card glass-panel--premium animate-on-scroll rounded-xl border border-white/10 p-5 text-center md:p-6 ${
            i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''
          }`}
        >
          <iconify-icon
            icon={icons?.[i] ?? defaultIcons[i] ?? 'solar:star-linear'}
            className="mb-3 text-red-400/90"
            width="22"
            aria-hidden
          />
          <p className="font-mono text-3xl font-medium text-white md:text-4xl">{stat.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-neutral-500 md:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
