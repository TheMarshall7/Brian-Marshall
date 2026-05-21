import { BLUEPRINT_LAYERS, blueprintLayerDisplayNumber } from '../../constants/blueprintLanding'

export default function BlueprintLayerGrid() {
  return (
    <div
      className="blueprint-layer-grid animate-on-scroll grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-label="Blueprint layers 1 through 14, including sub-layers 6B and 8A"
    >
      {BLUEPRINT_LAYERS.map((layer, i) => (
        <div
          key={layer.id}
          className={`blueprint-layer-card glass-panel--quiet relative overflow-hidden rounded-xl border border-white/10 px-3 py-3 text-left transition-colors hover:border-red-500/30 hover:bg-red-500/[0.06] md:px-4 md:py-3.5 ${
            layer.isSubLayer ? 'blueprint-layer-card--sub border-dashed border-white/15' : ''
          } ${i % 4 === 1 ? 'delay-100' : i % 4 === 2 ? 'delay-200' : i % 4 === 3 ? 'delay-300' : ''}`}
        >
          {!layer.isSubLayer ? (
            <span className="pointer-events-none absolute -right-1 top-1 font-mono text-4xl font-medium text-white/[0.04]">
              {blueprintLayerDisplayNumber(layer.id)}
            </span>
          ) : null}
          <span className="relative mb-1.5 block font-mono text-[11px] font-medium text-red-400/90">
            Layer {blueprintLayerDisplayNumber(layer.id)}
          </span>
          <span className="relative block text-xs leading-snug text-neutral-300 md:text-[13px]">{layer.title}</span>
        </div>
      ))}
    </div>
  )
}
