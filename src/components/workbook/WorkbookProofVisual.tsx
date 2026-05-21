import { WORKBOOK_LANDING } from '../../constants/workbookLanding'
import WorkbookStatStrip from './WorkbookStatStrip'

const proofIcons = [
  'solar:chat-round-money-linear',
  'solar:wallet-money-linear',
  'solar:hand-stars-linear',
]

export default function WorkbookProofVisual() {
  const { proof } = WORKBOOK_LANDING

  return (
    <div className="space-y-6">
      <WorkbookStatStrip stats={proof.stats} icons={proofIcons} />
      <div className="animate-on-scroll glass-panel--premium rounded-2xl border border-white/10 p-6 md:p-8">
        <p className="section-eyebrow mb-5">Levers pulled on this close</p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {proof.levers.map((lever, i) => (
            <li
              key={lever.label}
              className={`workbook-stat-card flex flex-col items-center gap-2.5 rounded-xl border border-white/10 bg-black/20 px-3 py-5 text-center ${
                i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : ''
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/15 text-red-400">
                <iconify-icon icon={lever.icon} width="22" aria-hidden />
              </div>
              <span className="text-xs leading-snug text-neutral-300">{lever.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="workbook-proof-highlight blueprint-stat-card glass-panel--premium animate-on-scroll rounded-2xl border border-red-500/35 bg-red-500/[0.08] p-6 md:p-10">
        <iconify-icon
          icon="solar:chat-round-money-linear"
          className="relative mb-4 text-red-400"
          width="36"
          aria-hidden
        />
        <p className="relative text-xl font-medium leading-relaxed text-white md:text-2xl">{proof.highlight}</p>
      </div>
    </div>
  )
}
