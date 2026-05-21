import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'
import { VSL_PHOTO_SRC } from '../../constants/vsl'
import BlueprintStatStrip from './BlueprintStatStrip'

const proofIcons = [
  'solar:chat-round-money-linear',
  'solar:flag-linear',
  'solar:document-text-linear',
]

export default function BlueprintProofVisual() {
  const { proof } = BLUEPRINT_LANDING

  return (
    <div className="space-y-6">
      <BlueprintStatStrip stats={proof.stats} icons={proofIcons} className="mb-0" />
      <div className="animate-on-scroll glass-panel--premium overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/[0.04] md:grid md:grid-cols-[minmax(11rem,13rem)_1fr]">
        <div className="flex items-center justify-center border-b border-white/10 bg-black/35 p-6 md:border-b-0 md:border-r">
          <img
            src={encodeURI(VSL_PHOTO_SRC)}
            alt="Brian Marshall"
            className="h-auto max-h-52 w-full max-w-[12rem] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)] md:max-h-none"
            loading="lazy"
          />
        </div>
        <div className="relative p-6 md:p-8">
          <iconify-icon
            icon="solar:quote-up-square-linear"
            className="absolute right-6 top-6 text-red-500/25 md:right-8 md:top-8"
            width="52"
            aria-hidden
          />
          <p className="relative mb-4 text-lg leading-relaxed text-neutral-100 md:text-xl">
            &ldquo;{proof.quote}&rdquo;
          </p>
          <footer className="relative text-sm text-red-400/90">{proof.attribution}</footer>
        </div>
      </div>
    </div>
  )
}
