import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHashWhenReady } from '../../lib/scrollToHash'

/** Scroll to hash targets after navigation; otherwise reset to page top. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      scrollToHashWhenReady(hash)
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
