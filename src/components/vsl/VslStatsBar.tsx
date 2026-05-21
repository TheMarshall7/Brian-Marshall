import { VSL_STATS } from '../../constants/vsl'

export default function VslStatsBar() {
  return (
    <div className="vsl-stats-grid mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {VSL_STATS.map((stat) => (
        <div
          key={stat.label}
          className="glass-panel rounded-xl border border-white/10 px-4 py-3 text-center"
        >
          <p className="font-bricolage text-xl font-medium text-white sm:text-2xl">{stat.value}</p>
          <p className="mt-1 text-[11px] font-mono uppercase tracking-wide text-neutral-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
