import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Calendar() {
  useScrollAnimation() // Initialize scroll animations

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-neutral-950 text-neutral-300 w-full overflow-x-hidden selection:bg-red-500/30 selection:text-white relative min-h-screen">
      <Helmet>
        <title>Book a Discovery Call — Brian Marshall</title>
        <meta name="description" content="Book a free 30-minute discovery call to discuss how we can fix what's broken in your business systems." />
      </Helmet>

      <div className="bg-grain"></div>
      <Navigation />

      <main className="pt-32 pb-24 px-6 md:px-12 tech-grid min-h-screen section-elevated">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <Link to="/" className="nav-link inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-red-500 transition-colors mb-6">
              <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-6">
              Book a Discovery Call
            </h1>
            
            <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Let's talk about what's slowing your business down — and how we can fix it together.
            </p>
          </div>

          {/* Two Column Layout: Benefits on Left, Calendar on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start mb-12">
            {/* Left: Benefits Section */}
            <div className="animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <h2 className="text-3xl md:text-4xl text-white font-medium mb-4 tracking-tight">
                Stop Losing Money to Inefficiency
              </h2>
              
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Every day you wait is another day of lost leads, wasted time, and missed revenue. Let's fix it.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                  <iconify-icon icon="solar:clock-circle-linear" className="case-icon text-red-500 text-2xl shrink-0 mt-0.5"></iconify-icon>
                  <div>
                    <h4 className="text-white font-medium mb-1">Save 20+ Hours/Week</h4>
                    <p className="text-sm text-neutral-400">Automation handles the busywork so you can focus on what matters</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                  <iconify-icon icon="solar:graph-up-linear" className="case-icon text-red-500 text-2xl shrink-0 mt-0.5"></iconify-icon>
                  <div>
                    <h4 className="text-white font-medium mb-1">Recover Lost Revenue</h4>
                    <p className="text-sm text-neutral-400">Stop losing leads and turn every inquiry into a customer</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                  <iconify-icon icon="solar:shield-check-linear" className="case-icon text-red-500 text-2xl shrink-0 mt-0.5"></iconify-icon>
                  <div>
                    <h4 className="text-white font-medium mb-1">Scale Without Chaos</h4>
                    <p className="text-sm text-neutral-400">Systems that grow with you, not against you</p>
                  </div>
                </div>
              </div>

              {/* Social Proof & CTA Card */}
              <div className="glass-panel rounded-2xl p-6 about-card">
                <div className="mb-6">
                  <p className="text-neutral-400 text-sm mb-4">Trusted by businesses</p>
                  <div className="flex items-center gap-4 mb-6 group">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.3)' }}>
                      <img src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb90e27fbf24b6.png" alt="NS" className="w-8 h-8 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.3)' }}>
                      <img src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb9026bbbf24b5.png" alt="BG" className="w-8 h-8 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.3)' }}>
                      <img src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702d15885e283f324bca.png" alt="AC" className="w-8 h-8 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-white text-lg font-medium mb-4">Ready to fix what's broken?</p>
                  <p className="text-xs text-neutral-500 mb-4">No credit card required • 30 minutes • No obligation</p>
                  <div className="text-sm text-neutral-400">
                    <p>Select a time to the right to book your free discovery call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Calendar */}
            <div className="animate-slide-up w-full" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <div className="calendar-container w-full" style={{ zIndex: 20 }}>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/THMH1W3pKXF9bB3Cz5HW" 
                  style={{ width: '100%', border: 'none', minHeight: '800px', display: 'block' }} 
                  scrolling="yes" 
                  id="THMH1W3pKXF9bB3Cz5HW_1768930417580"
                  title="Booking Calendar"
                >
                </iframe>
              </div>
            </div>
          </div>

          {/* Info Cards Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '1s', opacity: 0 }}>
            <div className="glass-panel rounded-xl p-6 text-center info-card">
              <iconify-icon icon="solar:clock-circle-linear" className="case-icon text-red-500 text-2xl mb-3"></iconify-icon>
              <h3 className="text-white font-medium mb-1">30 Minutes</h3>
              <p className="text-sm text-neutral-500">Quick, focused conversation</p>
            </div>
            <div className="glass-panel rounded-xl p-6 text-center info-card">
              <iconify-icon icon="solar:video-frame-linear" className="case-icon text-red-500 text-2xl mb-3"></iconify-icon>
              <h3 className="text-white font-medium mb-1">Video Call</h3>
              <p className="text-sm text-neutral-500">Face-to-face via Zoom</p>
            </div>
            <div className="glass-panel rounded-xl p-6 text-center info-card">
              <iconify-icon icon="solar:dollar-minimalistic-linear" className="case-icon text-red-500 text-2xl mb-3"></iconify-icon>
              <h3 className="text-white font-medium mb-1">Free</h3>
              <p className="text-sm text-neutral-500">No strings attached</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 border-t border-white/10 relative" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), #000000)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="pt-16 border-t border-white/10 relative">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="flex flex-col gap-8">
              {/* Large Footer Logo - Centered on mobile, left-aligned on desktop */}
              <div className="flex justify-center md:justify-start">
                <img 
                  src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png" 
                  alt="Brian Marshall" 
                  className="h-16 md:h-20 w-auto opacity-70"
                />
              </div>
              
              {/* Footer Content Row */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-sm text-neutral-500 font-mono tracking-wider text-center md:text-left">© 2026 Brian Marshall</span>
                  <span className="text-xs text-neutral-600 font-mono italic text-center md:text-left">Creative Systems Designer. And founder of AreoClient.</span>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/10 hidden md:block"></div>
                  <a href="https://www.linkedin.com/in/brian-marshall-80a513144" className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 footer-social-link">
                    <iconify-icon icon="mdi:linkedin" className="text-base text-neutral-400 group-hover:text-white transition-colors"></iconify-icon>
                    <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider group-hover:text-white transition-colors">LinkedIn</span>
                  </a>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/10 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
