import { useState } from 'react'
import { AOF_MASTER_BLOCKS } from '../../constants/aofMasterAudit'

type Props = {
  focusPanelId?: string
}

export default function AofBlockGrid({ focusPanelId = 'aof-block-focus-panel' }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = AOF_MASTER_BLOCKS[activeIndex]

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      <div
        id={focusPanelId}
        role="region"
        aria-live="polite"
        className="glass-panel rounded-2xl border border-white/10 p-6 md:p-8"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">{active.monoLabel}</span>
        <h3 className="mt-2 mb-1 text-2xl font-medium text-white">{active.title}</h3>
        <p className="mb-4 text-sm text-neutral-500">{active.subtitle}</p>
        <p className="mb-6 text-sm leading-relaxed text-neutral-300">{active.focus}</p>
        <ul className="space-y-2">
          {active.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-neutral-400">
              <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 shrink-0 text-red-500" width="14" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="space-y-1" role="listbox" aria-label="AOF Master Audit blocks">
        {AOF_MASTER_BLOCKS.map((block, i) => (
          <li key={block.id}>
            <button
              type="button"
              role="option"
              aria-selected={activeIndex === i}
              aria-controls={focusPanelId}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all ${
                activeIndex === i
                  ? 'border border-red-500/35 bg-red-500/[0.08]'
                  : 'border border-transparent hover:border-white/10 hover:bg-white/[0.04]'
              }`}
            >
              <span className="font-mono text-xs text-red-500/80">{String(block.number).padStart(2, '0')}</span>
              <span className={`text-sm ${activeIndex === i ? 'text-white' : 'text-neutral-400'}`}>{block.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
