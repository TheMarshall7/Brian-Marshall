import { AOF_PHASE_GROUPS } from '../../constants/aofMasterAudit'

export default function AofPhaseTimeline() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {AOF_PHASE_GROUPS.map((phase, i) => (
        <div
          key={phase.id}
          className={`rounded-2xl border border-white/10 bg-neutral-900/40 p-6 ${i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''}`}
        >
          <span className="section-eyebrow mb-2 block text-base">{phase.label}</span>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">{phase.blockRange}</p>
          <p className="mb-4 text-sm leading-relaxed text-neutral-400">{phase.description}</p>
          <ul className="space-y-1">
            {phase.blocks.map((block) => (
              <li key={block.id} className="text-xs text-neutral-500">
                {block.number}. {block.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
