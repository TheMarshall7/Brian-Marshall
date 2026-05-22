import { Link } from 'react-router-dom'
import { BLUEPRINT_LANDING } from '../../constants/blueprintLanding'
import { BLUEPRINT_CHECKOUT_PATH } from '../../constants/site'
import { K2C_CHECKOUT_URL } from '../../constants/shop'

type Props = {
  label: string
  micro: string
  className?: string
  showPrice?: boolean
  size?: 'default' | 'large'
}

const checkoutReady = Boolean(K2C_CHECKOUT_URL?.trim())

export default function BlueprintCta({
  label,
  micro,
  className = '',
  showPrice = true,
  size = 'default',
}: Props) {
  const btnClass =
    size === 'large'
      ? 'cta-primary glow-border btn-shimmer inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)] sm:w-auto'
      : 'cta-primary glow-border btn-shimmer inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20 sm:w-auto'

  return (
    <div className={className}>
      {showPrice ? (
        <p className="mb-4 font-mono text-sm text-neutral-400">{BLUEPRINT_LANDING.priceLabel}</p>
      ) : null}
      {checkoutReady ? (
        <Link to={BLUEPRINT_CHECKOUT_PATH} className={btnClass}>
          <iconify-icon icon="solar:cart-check-linear" width="18" />
          {label}
        </Link>
      ) : (
        <div className="flex flex-col items-start gap-2">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-10 py-4 text-sm font-medium text-neutral-500 sm:w-auto"
          >
            <iconify-icon icon="solar:cart-check-linear" width="18" />
            {label}
          </button>
          <p className="text-xs text-neutral-600">{BLUEPRINT_LANDING.checkoutNote}</p>
        </div>
      )}
      <p className="mt-3 text-xs text-neutral-500">{micro}</p>
    </div>
  )
}
