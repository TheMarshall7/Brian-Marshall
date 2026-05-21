import { BLUEPRINT_LAYER_COUNT } from '../../constants/blueprintLanding'

const milestones = [
  { value: String(BLUEPRINT_LAYER_COUNT), label: 'Core layers', icon: 'solar:layers-linear' },
  { value: '6B · 8A', label: 'Deep-dive sub-layers', icon: 'solar:branching-paths-down-linear' },
  { value: '48', label: 'Pages in the PDF', icon: 'solar:document-text-linear' },
]

export default function BlueprintLayerSummary() {
  return (
    <div
      className="blueprint-layer-summary animate-on-scroll mb-8 glass-panel--quiet rounded-2xl border border-white/10 p-4 md:p-5"
      aria-label="Blueprint scope at a glance"
    >
      <p className="section-eyebrow mb-4 text-base">What you are buying into</p>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {milestones.map((item, i) => (
          <li
            key={item.label}
            className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 ${
              i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-500/25 bg-red-500/10 text-red-400">
              <iconify-icon icon={item.icon} width="20" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-lg font-medium text-white">{item.value}</p>
              <p className="text-xs text-neutral-500">{item.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
