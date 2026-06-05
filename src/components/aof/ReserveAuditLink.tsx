import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ANALYTICS_EVENTS } from '../../constants/analytics'
import { AOF_LANDING_PATH, AOF_PURCHASE_HASH, AOF_PURCHASE_PATH, AOF_RESERVE_AUDIT_CTA } from '../../constants/site'
import { track } from '../../lib/track'
import { normalizeHash, scrollToHashWhenReady } from '../../lib/scrollToHash'

type Props = {
  source: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function ReserveAuditLink({ source, variant = 'secondary', className = '' }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const base =
    variant === 'primary'
      ? 'cta-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 btn-shimmer hover:bg-red-400'
      : 'inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:border-red-500/30 hover:bg-white/5'

  const goToPurchase = (e: React.MouseEvent<HTMLAnchorElement>) => {
    track(ANALYTICS_EVENTS.AOF_PURCHASE_CLICK, { source })

    if (location.pathname !== AOF_LANDING_PATH) return

    e.preventDefault()
    const hash = normalizeHash(AOF_PURCHASE_HASH)
    if (location.hash !== hash) {
      navigate({ pathname: AOF_LANDING_PATH, hash: hash.replace('#', '') })
    }
    scrollToHashWhenReady(hash)
  }

  return (
    <Link to={AOF_PURCHASE_PATH} onClick={goToPurchase} className={`${base} ${className}`.trim()}>
      {AOF_RESERVE_AUDIT_CTA}
      <iconify-icon icon="solar:calendar-mark-linear" width="18" />
    </Link>
  )
}
