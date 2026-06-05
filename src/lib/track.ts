import type { AnalyticsEvent } from '../constants/analytics'

type TrackProps = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void
  }
}

export function track(event: AnalyticsEvent, props?: TrackProps): void {
  if (import.meta.env.DEV) {
    console.debug('[track]', event, props)
  }

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
  if (gaId && typeof window.gtag === 'function') {
    window.gtag('event', event, props)
  }

  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim()
  if (plausibleDomain && typeof window.plausible === 'function') {
    const cleanProps = props
      ? Object.fromEntries(
          Object.entries(props).filter(([, v]) => v !== undefined) as [string, string | number][],
        )
      : undefined
    window.plausible(event, cleanProps ? { props: cleanProps } : undefined)
  }
}
