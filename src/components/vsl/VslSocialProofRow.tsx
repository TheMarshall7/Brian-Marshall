import { VSL_TRUST_AVATARS, VSL_TRUST_LINE } from '../../constants/vsl'

export default function VslSocialProofRow() {
  return (
    <div className="mb-6 flex justify-center sm:mb-8">
      <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-2.5 sm:gap-3 sm:px-4">
        <div className="group flex -space-x-2">
          {VSL_TRUST_AVATARS.map((avatar) => (
            <div
              key={avatar.src}
              className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-800"
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="h-4 w-4 object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        <span className="text-[11px] font-medium leading-snug text-neutral-300 sm:text-xs">
          {VSL_TRUST_LINE}
        </span>
      </div>
    </div>
  )
}
