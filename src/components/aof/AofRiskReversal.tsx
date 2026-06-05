import { AOF_LANDING } from '../../constants/aofLanding'

type Props = {
  className?: string
}

export default function AofRiskReversal({ className = '' }: Props) {
  const copy = AOF_LANDING.riskReversal

  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
      {copy.items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-red-500/25"
        >
          <iconify-icon icon={item.icon} className="mb-4 text-2xl text-red-400" />
          <h4 className="mb-2 font-medium text-white">{item.title}</h4>
          <p className="text-sm leading-relaxed text-neutral-400">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
