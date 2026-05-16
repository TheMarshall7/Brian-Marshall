import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const isAbout = location.pathname === '/about'
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleHashLink = (hash: string) => {
    setMobileOpen(false)
    if (isHome) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinkClass =
    'w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white'

  return (
    <>
      <div
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:top-6 sm:px-4 animate-slide-up md:px-4"
        style={{ animationDelay: '0.2s' }}
      >
        <nav className="glass-panel nav-elevated relative flex w-full max-w-lg items-center justify-between gap-2 rounded-full px-2 py-2 shadow-2xl sm:max-w-none sm:gap-12 md:w-auto md:max-w-none md:px-2">
          <div className="flex shrink-0 items-center pl-2 sm:pl-4">
            <Link to="/" className="group flex items-center" onClick={() => setMobileOpen(false)}>
              <img
                src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477b4a6464496bff26f4.png"
                alt="Brian Marshall"
                className="h-7 w-auto transition-all duration-300 ease-out group-hover:scale-110 sm:h-8"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-6 text-xs font-medium text-white/50 md:flex">
            <button onClick={() => handleHashLink('#work')} className="nav-link py-1 transition-colors hover:text-white">
              Work
            </button>
            <button onClick={() => handleHashLink('#process')} className="nav-link py-1 transition-colors hover:text-white">
              Process
            </button>
            <Link
              to="/about"
              className={`nav-link py-1 transition-colors ${isAbout ? 'text-white' : 'hover:text-white'}`}
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <iconify-icon icon={mobileOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'} width="22" />
            </button>
            <button
              onClick={() => handleHashLink('#contact')}
              className="mr-1 shrink-0 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black transition-all btn-shimmer hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20 sm:px-5 sm:py-2.5 md:mr-0 md:px-6"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-nav-menu"
        className={`fixed inset-x-0 top-[4.25rem] z-40 px-3 transition-all duration-300 sm:top-[5.25rem] sm:px-4 md:hidden ${
          mobileOpen ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="glass-panel nav-mobile-panel overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-1 p-2">
            <button type="button" onClick={() => handleHashLink('#work')} className={navLinkClass}>
              Work
            </button>
            <button type="button" onClick={() => handleHashLink('#process')} className={navLinkClass}>
              Process
            </button>
            <Link to="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <button type="button" onClick={() => handleHashLink('#contact')} className={`${navLinkClass} text-white`}>
              Contact
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-[2px] md:hidden"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </>
  )
}