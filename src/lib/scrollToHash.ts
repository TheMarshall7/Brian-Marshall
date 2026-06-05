export function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const selector = hash.startsWith('#') ? hash : `#${hash}`
  document.querySelector(selector)?.scrollIntoView({ behavior })
}

/** Retry scroll so lazy sections and route transitions have time to mount. */
export function scrollToHashWhenReady(hash: string) {
  scrollToHash(hash)
  requestAnimationFrame(() => scrollToHash(hash))
  for (const delay of [120, 320, 600, 900]) {
    window.setTimeout(() => scrollToHash(hash), delay)
  }
}

export function normalizeHash(hash: string) {
  return hash.startsWith('#') ? hash : `#${hash}`
}
