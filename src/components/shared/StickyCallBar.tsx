import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HOME_HERO } from '../../constants/homeContent'
import { STRATEGY_CALL_PATH } from '../../constants/site'
import { ANALYTICS_EVENTS } from '../../constants/analytics'
import { track } from '../../lib/track'

type Props = {
  hideWhenVisibleSelector?: string
}

export default function StickyCallBar({ hideWhenVisibleSelector = '#contact, #purchase' }: Props) {
  const [visible, setVisible] = useState(false)
  const [hiddenBySection, setHiddenBySection] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const selectors = hideWhenVisibleSelector.split(',').map((s) => s.trim())
    const elements = selectors.flatMap((sel) => Array.from(document.querySelectorAll(sel)))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        setHiddenBySection(entries.some((e) => e.isIntersecting))
      },
      { threshold: 0.15 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [hideWhenVisibleSelector])

  if (!visible || hiddenBySection) return null

  return (
    <div className="sticky-cta-bar fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-neutral-950/95 px-3 pt-3 backdrop-blur-md md:hidden">
      <Link
        to={STRATEGY_CALL_PATH}
        onClick={() => track(ANALYTICS_EVENTS.QUALIFYING_CALL_CLICK, { source: 'sticky_bar' })}
        className="cta-primary flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-medium text-neutral-950 btn-shimmer"
      >
        <span className="sm:hidden">Book free call</span>
        <span className="hidden sm:inline">{HOME_HERO.primaryCta}</span>
        <iconify-icon icon="solar:arrow-right-up-linear" />
      </Link>
    </div>
  )
}
