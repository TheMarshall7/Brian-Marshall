import { AOF_MASTER_BLOCKS } from '../../constants/aofMasterAudit'
import { AOF_LANDING } from '../../constants/aofLanding'
import AofDocumentCover from './AofDocumentCover'
import ReserveAuditLink from './ReserveAuditLink'

export default function AofSamplePreview() {
  const featured = AOF_MASTER_BLOCKS.find((b) => b.id === AOF_LANDING.sample.featuredBlockId) ?? AOF_MASTER_BLOCKS[2]
  const locked = AOF_MASTER_BLOCKS.filter((b) => b.id !== featured.id)

  return (
    <section className="relative" aria-labelledby="sample-audit-heading">
      <div className="mb-10 text-center md:text-left">
        <p className="section-eyebrow mb-4">{AOF_LANDING.sample.eyebrow}</p>
        <h2 id="sample-audit-heading" className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
          {AOF_LANDING.sample.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-neutral-400">{AOF_LANDING.sample.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl border border-red-500/25 bg-neutral-900/50 p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">{featured.monoLabel}</span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
              SAMPLE
            </span>
          </div>
          <h3 className="mb-1 text-xl font-medium text-white">{featured.title}</h3>
          <p className="mb-4 text-sm text-neutral-500">{featured.subtitle}</p>
          <p className="mb-6 text-sm leading-relaxed text-neutral-300">{featured.focus}</p>
          <ul className="space-y-2">
            {featured.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-neutral-400">
                <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 shrink-0 text-red-500" width="16" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 p-6 md:p-8">
          <AofDocumentCover variant="flat" size="md" className="mb-6" />
          <p className="section-eyebrow mb-4 text-neutral-500">Your custom blocks</p>
          <ul className="relative z-10 w-full space-y-2">
            {locked.slice(0, 5).map((block) => (
              <li
                key={block.id}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2.5"
              >
                <span className="font-mono text-[10px] text-neutral-600">{block.monoLabel}</span>
                <span className="text-sm text-neutral-500 blur-[3px] select-none">{block.title}</span>
              </li>
            ))}
            <li className="rounded-lg border border-dashed border-white/10 px-4 py-2.5 text-center font-mono text-[10px] text-neutral-600">
              + {locked.length - 5} more blocks in your audit
            </li>
          </ul>
          <p className="relative z-10 mt-6 text-center text-sm text-neutral-500">
            Mapped to your business during the live audit session
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center md:justify-start">
        <ReserveAuditLink source="aof_sample_preview" variant="primary" />
      </div>
    </section>
  )
}
