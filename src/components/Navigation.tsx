import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleHashLink = (hash: string) => {
    if (isHome) {
      // On home page, just scroll to the section
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // On other pages, navigate to home first, then scroll
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <nav className="glass-panel nav-elevated rounded-full px-2 py-2 flex items-center justify-between gap-12 shadow-2xl">
        <div className="flex items-center pl-4 cursor-pointer">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477b4a6464496bff26f4.png" 
              alt="Brian Marshall" 
              className="h-8 w-auto transition-all duration-300 ease-out group-hover:scale-110"
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-white/50">
          <button onClick={() => handleHashLink('#work')} className="nav-link hover:text-white transition-colors py-1">Work</button>
          <button onClick={() => handleHashLink('#process')} className="nav-link hover:text-white transition-colors py-1">Process</button>
          <button onClick={() => handleHashLink('#about')} className="nav-link hover:text-white transition-colors py-1">About</button>
          <button onClick={() => handleHashLink('#pricing')} className="nav-link hover:text-white transition-colors py-1">Pricing</button>
        </div>

        <button 
          onClick={() => handleHashLink('#contact')}
          className="px-5 py-2.5 md:px-6 md:py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/20 mr-2 md:mr-0"
        >
          Contact
        </button>
      </nav>
    </div>
  )
}
