import { AOF_DOCUMENT_COVER, AOF_DOCUMENT_COVER_FLAT } from '../../constants/site'

type Props = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  /** Primary = upright hero cover. Flat = laying-down variant for sub-sections. */
  variant?: 'primary' | 'flat'
  alt?: string
}

const primarySizeClasses = {
  sm: 'max-w-[200px]',
  md: 'max-w-xs sm:max-w-sm',
  lg: 'max-w-sm sm:max-w-md md:max-w-lg',
}

const flatSizeClasses = {
  sm: 'max-w-[240px]',
  md: 'max-w-sm sm:max-w-md',
  lg: 'max-w-md sm:max-w-lg md:max-w-xl',
}

export default function AofDocumentCover({
  className = '',
  size = 'md',
  variant = 'primary',
  alt = 'AOF Master Audit document cover',
}: Props) {
  const isFlat = variant === 'flat'
  const src = isFlat ? AOF_DOCUMENT_COVER_FLAT : AOF_DOCUMENT_COVER
  const sizeClasses = isFlat ? flatSizeClasses : primarySizeClasses

  return (
    <div className={`relative flex justify-center ${className}`}>
      <div
        className={`absolute rounded-3xl bg-red-500/15 blur-2xl ${isFlat ? '-inset-6' : '-inset-4'}`}
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        className={`relative h-auto w-full ${sizeClasses[size]} object-contain drop-shadow-[0_28px_56px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out ${
          isFlat ? 'hover:scale-[1.02]' : 'hover:-translate-y-1'
        }`}
        loading="lazy"
      />
    </div>
  )
}
