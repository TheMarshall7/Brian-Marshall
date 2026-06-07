import {
  VSL_COMPARE_COLUMNS,
  VSL_COMPARE_HEADLINE,
  VSL_COMPARE_ROWS,
  type VslCompareCell,
} from '../../constants/vsl'

function CompareCell({ value, highlight }: { value: VslCompareCell; highlight?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center gap-1 text-emerald-400">
        <iconify-icon icon="solar:check-circle-bold" width="20" />
        <span className="sr-only">Yes</span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-neutral-600">
        <iconify-icon icon="solar:close-circle-bold" width="20" />
        <span className="sr-only">No</span>
      </span>
    )
  }
  if (value === 'partial') {
    return <span className="text-xs text-amber-400/90 sm:text-sm">Partial</span>
  }
  return (
    <span className={`text-xs sm:text-sm ${highlight ? 'font-medium text-white' : 'text-neutral-300'}`}>
      {value}
    </span>
  )
}

export default function VslComparisonTable() {
  return (
    <section id="compare" className="mx-auto max-w-5xl scroll-mt-8 px-4 py-14 sm:px-6 md:py-20">
      <div className="mb-10 text-center">
        <p className="section-eyebrow mb-3 text-neutral-500">
          Compare
        </p>
        <h2 className="font-bricolage text-2xl font-medium text-white sm:text-3xl">
          {VSL_COMPARE_HEADLINE}
        </h2>
      </div>

      {/* Desktop table */}
      <div className="vsl-compare-table hidden overflow-hidden rounded-2xl border border-white/10 md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500" />
              <th className="p-4 text-center font-medium text-neutral-400">
                {VSL_COMPARE_COLUMNS.diy}
              </th>
              <th className="p-4 text-center font-medium text-neutral-400">
                {VSL_COMPARE_COLUMNS.agency}
              </th>
              <th className="p-4 text-center font-medium text-red-400">
                {VSL_COMPARE_COLUMNS.aof}
              </th>
            </tr>
          </thead>
          <tbody>
            {VSL_COMPARE_ROWS.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 1 ? 'vsl-compare-row-alt' : ''}
              >
                <td className="p-4 font-medium text-neutral-200">{row.label}</td>
                <td className="p-4 text-center">
                  <CompareCell value={row.diy} />
                </td>
                <td className="p-4 text-center">
                  <CompareCell value={row.agency} />
                </td>
                <td className="p-4 text-center">
                  <CompareCell value={row.aof} highlight />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-4 md:hidden">
        {VSL_COMPARE_ROWS.map((row) => (
          <div key={row.label} className="glass-panel rounded-xl border border-white/10 p-4">
            <p className="mb-3 font-medium text-white">{row.label}</p>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-wide text-neutral-500">
              <span>{VSL_COMPARE_COLUMNS.diy}</span>
              <span>{VSL_COMPARE_COLUMNS.agency}</span>
              <span className="text-red-400/90">{VSL_COMPARE_COLUMNS.aof}</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <CompareCell value={row.diy} />
              <CompareCell value={row.agency} />
              <CompareCell value={row.aof} highlight />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
