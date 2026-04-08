import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation() // Initialize scroll animations for all elements
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="bg-neutral-950 text-neutral-300 w-full overflow-x-hidden selection:bg-red-500/30 selection:text-white relative min-h-screen">
      <Helmet>
        <title>Brian Marshall · Systems Designer</title>
        <meta name="description" content="I build systems that turn attention into predictable revenue. Websites, web apps, audio, and AI powered workflows designed to convert. I help shape the offer that drives it." />
        <meta name="keywords" content="systems architect, web development, CRM, automation, AI integration, web apps, business systems, workflow automation, creative business" />
        <meta name="author" content="Brian Marshall" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brianmarshall.dev/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brianmarshall.dev/" />
        <meta property="og:title" content="Brian Marshall · Systems Designer" />
        <meta property="og:description" content="I build systems that turn attention into predictable revenue. Websites, web apps, audio, and AI powered workflows designed to convert." />
        <meta property="og:image" content="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Brian Marshall" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brian Marshall · Systems Designer" />
        <meta name="twitter:description" content="I build systems that turn attention into predictable revenue. Websites, web apps, audio, and AI powered workflows designed to convert." />
        <meta name="twitter:image" content="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Brian Marshall · Systems Designer",
            "description": "Systems design, web development, CRM, and AI automation services for creative businesses and studios",
            "url": "https://brianmarshall.dev",
            "email": "brian@areoclient.com",
            "priceRange": "$1K to $25K",
            "areaServed": "Worldwide",
            "serviceType": ["Web Development", "Web Applications", "CRM Systems", "AI Integration", "Business Automation", "Workflow Optimization"],
            "knowsAbout": ["Web Development", "CRM", "Automation", "AI", "Business Systems"],
            "sameAs": ["https://www.linkedin.com/in/brian-marshall-80a513144"]
          })}
        </script>
      </Helmet>

      <div className="bg-grain"></div>
      <Navigation />

      {/* Hero: outer never scrolls (avoids huge scrollHeight from tall absolute blur). Only the inner column scrolls. */}
      <header className="relative flex h-[100svh] max-h-[100svh] min-h-0 flex-col overflow-hidden tech-grid hero-elevated px-6 md:px-12 pb-6 md:pb-8">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[120px]" />
        </div>

        <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col overflow-y-auto overscroll-y-contain pt-[7rem] md:pt-[7.5rem]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 gap-x-12 lg:gap-x-20 items-start pb-2">
          <div className="md:col-span-8">
            <div className="mb-5 md:mb-6 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 hero-badge">
                <div className="flex -space-x-2 group">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden">
                    <img src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb90e27fbf24b6.png" alt="NS" className="w-4 h-4 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden">
                    <img src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb9026bbbf24b5.png" alt="BG" className="w-4 h-4 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden">
                    <img src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702d15885e283f324bca.png" alt="AC" className="w-4 h-4 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                  </div>
                </div>
                <span className="text-xs text-neutral-300 font-medium">Trusted by creative businesses</span>
              </div>
            </div>

            <h1 className="font-bricolage font-medium leading-[0.95] tracking-tight mb-6 md:mb-8">
              <span className="block text-4xl md:text-7xl lg:text-8xl text-neutral-600 animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                Your business isn't broken.
              </span>
              <span className="block text-5xl md:text-8xl lg:text-9xl text-white hero-text-gradient animate-slide-up mt-2 md:mt-4" style={{ animationDelay: '0.8s', opacity: 0 }}>
                Your systems are.
              </span>
            </h1>

            <div className="max-w-2xl mb-8 md:mb-10 animate-slide-up" style={{ animationDelay: '1s', opacity: 0 }}>
              <p className="text-xl md:text-2xl font-normal text-neutral-100 tracking-tight leading-snug mb-5 md:mb-6">
                I build systems that turn attention into predictable revenue.
              </p>
              <div className="h-px w-14 bg-gradient-to-r from-red-500/50 to-transparent mb-5 md:mb-6" aria-hidden />
              <div className="text-base md:text-lg font-light leading-relaxed space-y-2.5">
                <p className="text-neutral-400">
                  Websites, web apps, audio, and AI powered workflows designed to convert.
                </p>
                <p className="text-neutral-500">
                  I also help shape the offer that drives it.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 md:mb-8 animate-slide-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
              <a href="#contact" className="cta-primary px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all flex items-center justify-center gap-2 group btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
                Get Your Free Strategy Call
                <iconify-icon icon="solar:arrow-right-up-linear" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
              </a>
              <a href="#work" className="px-8 py-4 glass-panel text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 glow-border">
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 md:gap-x-10 text-sm text-neutral-400 animate-slide-up" style={{ animationDelay: '1.4s', opacity: 0 }}>
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500"></iconify-icon>
                <span>Free 30 minute discovery call</span>
              </div>
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500"></iconify-icon>
                <span>See your custom roadmap</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6 md:gap-8 animate-slide-up" style={{ animationDelay: '1.4s', opacity: 0 }}>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500">System Designer</span>
              <span className="h-[1px] w-10 bg-red-500"></span>
            </div>
            <div className="glass-panel hero-side-panel p-6 md:p-7 rounded-xl w-full max-w-xs border-l-2 border-l-red-500">
              <p className="text-white text-sm mb-4 leading-relaxed font-medium">
                Most businesses leak time, leads, and money. You get the infrastructure that stops the bleeding.
              </p>
              <div className="h-[1px] w-full bg-white/10 mb-4"></div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-red-500 mt-0.5 shrink-0"></iconify-icon>
                  <span className="text-xs text-neutral-300">Save 20+ hours per week with automation</span>
                </div>
                <div className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-red-500 mt-0.5 shrink-0"></iconify-icon>
                  <span className="text-xs text-neutral-300">Recover lost revenue from missed leads</span>
                </div>
                <div className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-red-500 mt-0.5 shrink-0"></iconify-icon>
                  <span className="text-xs text-neutral-300">Turn chaos into predictable systems</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>

      {/* Case Studies Section */}
      <section id="work" className="py-24 md:py-32 relative border-t border-white/5 section-standard">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-on-scroll">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 mb-4 block">Deployment Log</span>
              <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-4">What I Actually Build</h2>
              <p className="text-neutral-400 max-w-md">Real systems. Real outcomes. I don't ship pretty mockups and disappear. I build things people use every day.</p>
            </div>
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-xs text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-90"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
              </span>
              System Status: Operational
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Case Study 1: Ear Training Platform */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-all duration-500 animate-on-scroll flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '239, 68, 68' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-mono uppercase tracking-widest border border-red-500/20">Web App · EdTech</span>
                    <iconify-icon icon="solar:music-note-linear" className="case-icon text-red-500 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Music Education · EdTech</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Ear Training Platform</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Learners were bouncing between random exercises and PDFs, with no steady routine, weak feedback, and no sense of progress on intervals and chords.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> A focused web app with structured drills, clear levels, and progress tracking so practice is repeatable and skills actually stick.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-red-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">Guided path from basic intervals to harder drills</span>
                        <span className="text-sm text-white">Instant feedback on every answer</span>
                        <span className="text-sm text-white">Progress and streaks that reward showing up</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Web App</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Interactive Drills</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Progress Tracking</span>
                      <a href="https://ear-training-platform.pages.dev/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-red-500/20 text-red-400 text-[10px] font-medium hover:bg-red-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2: Virelia Insurance */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all duration-500 animate-on-scroll delay-100 flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '59, 130, 246' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest border border-blue-500/20">Marketing Site · Hub</span>
                    <iconify-icon icon="solar:shield-check-linear" className="text-blue-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Insurance · Financial Services · Canada</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Virelia Insurance</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Canadian insurance and account topics (life coverage, TFSAs, RRSPs, tax advantaged savings) are spread across scattered sources. Prospects needed one credible, calm place to learn before they commit.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> A central hub at <a href="https://vireliainsurance.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">vireliainsurance.com</a> that organizes that information in plain language, positions Virelia as a reputable educational source, and routes families and agents to the right next step.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-blue-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">Single destination for core Canadian financial and insurance topics</span>
                        <span className="text-sm text-white">Trust-first content: educate before you sell</span>
                        <span className="text-sm text-white">Clear pathways for families and for career-minded agents</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Web Platform</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Education</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Canada</span>
                      <a href="https://vireliainsurance.com/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-medium hover:bg-blue-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3: Spiritual & Human Design coach site */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-500 animate-on-scroll delay-200 flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '168, 85, 247' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-mono uppercase tracking-widest border border-purple-500/20">Site · Funnel · Automation</span>
                    <iconify-icon icon="solar:stars-minimalistic-linear" className="case-icon text-purple-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Spirituality · Human Design · Coaching</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Spiritual & Human Design Coach</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Her signature 21 day offer and coaching services lived in a messy mix of channels, which made it hard to sell the full journey, and course delivery was disconnected from the front end story.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> A focused site built to sell the core 21 day program and coaching, with backend automations and a smooth handoff into Teachable so course content and lessons live on the platform students already use.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-purple-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">One clear offer path: 21 day program and coaching packages</span>
                        <span className="text-sm text-white">Automations that support follow up without manual chaos</span>
                        <span className="text-sm text-white">Teachable connected so lessons live where students actually learn</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Coaching</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Automation</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Teachable</span>
                      <a href="https://www.mariaamiouni.com/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-purple-500/20 text-purple-400 text-[10px] font-medium hover:bg-purple-500/30 transition-colors flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4: Game studio brand site */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-all duration-500 animate-on-scroll delay-300 flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '99, 102, 241' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-mono uppercase tracking-widest border border-indigo-500/20">Brand Site · Audio · Social</span>
                    <iconify-icon icon="solar:gamepad-linear" className="case-icon text-indigo-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Game Studio · Indie</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Game Studio Website</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> The studio had games and ambition, but no web presence that felt like the brand, while social was inconsistent and everything sounded generic next to competitors.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> A compelling brand website built to showcase the studio, three custom audio soundtracks crafted for the experience, and automations that keep social posting on schedule without manual grind.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-indigo-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">Brand-forward site visitors actually want to explore</span>
                        <span className="text-sm text-white">Three original soundtracks, not stock loops</span>
                        <span className="text-sm text-white">Social cadence handled by automation, not panic posts</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Web</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Sound Design</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Social Automation</span>
                      <a href="https://boundlessgames.net/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-medium hover:bg-indigo-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 5: Artist website, MOQEMÀE */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-rose-500/40 transition-all duration-500 animate-on-scroll delay-400 flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '244, 63, 94' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-mono uppercase tracking-widest border border-rose-500/20">Artist Site · Music</span>
                    <iconify-icon icon="solar:microphone-3-linear" className="case-icon text-rose-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Music · Artist · Toronto</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Artist Website</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Streams and story were split across platforms, with no single home that felt like his brand, and fans had to hunt for tracks, bio, and booking.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> A dedicated artist site with a clear visual identity, space for his story and credits, and a layout built for music: discography, releases, and listen-everywhere links so tracks are easy to find and play.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-rose-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">One branded home, not a scattered link list</span>
                        <span className="text-sm text-white">Bio, press, and milestones in a single narrative</span>
                        <span className="text-sm text-white">Music-forward layout: releases and streaming in the flow</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Web</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Identity</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Streaming</span>
                      <a href="https://moqemae.pages.dev/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-rose-500/20 text-rose-400 text-[10px] font-medium hover:bg-rose-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 6: All-in-one business system */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-500 animate-on-scroll delay-500 flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '16, 185, 129' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-widest border border-emerald-500/20">Platform · SaaS</span>
                    <iconify-icon icon="solar:layers-minimalistic-linear" className="case-icon text-emerald-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Business · Growth · Revenue</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">All-in-One Business System</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Teams were earning attention but losing it in the handoff, with too many tools, leaky follow up, and no single view from interest to a booked call or sale.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> A unified business system designed to turn attention into booked revenue: pipelines, messaging, and scheduling in one place, plus a couple of lightweight SaaS apps that plug into the same operating rhythm.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-emerald-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">One system instead of a patchwork of logins</span>
                        <span className="text-sm text-white">Clear path from lead interest to revenue on the calendar</span>
                        <span className="text-sm text-white">SaaS apps that extend the core workflow, not another silo</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Platform</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">SaaS</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Automation</span>
                      <a href="https://areoclient.com/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-medium hover:bg-emerald-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 7: Social outreach AI app */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-500 animate-on-scroll delay-600 flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '6, 182, 212' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono uppercase tracking-widest border border-cyan-500/20">AI · Outreach · Social</span>
                    <iconify-icon icon="solar:chat-round-dots-linear" className="case-icon text-cyan-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">SaaS · LinkedIn · Multi platform</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Social Outreach Intelligence</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Outreach was slow and cookie cutter. Reps burned time rewriting the same angles, and generic templates killed reply rates on LinkedIn and other social channels.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> An AI powered app that turns any social profile or post into high converting outreach in seconds: upload a screenshot or paste text, pick your tone and platform (LinkedIn, Instagram, X, TikTok, and more), and get messages that read like they came from a human who did the homework.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-cyan-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">Seconds from context (screenshot or paste) to usable drafts</span>
                        <span className="text-sm text-white">Tone control so outreach matches your voice, not a robot</span>
                        <span className="text-sm text-white">One workflow across the social platforms you actually use</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">AI</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Next.js</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Outreach</span>
                      <a href="https://areosuitesocialoutreach.vercel.app/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-medium hover:bg-cyan-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 8: ISIATA, culture, sound & tools */}
            <div
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-500 animate-on-scroll delay-700 flex flex-col card-lift case-study-card"
              style={{ '--case-study-glow': '245, 158, 11' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-mono uppercase tracking-widest border border-amber-500/20">Culture · Sound · Tools</span>
                    <iconify-icon icon="solar:music-note-slider-linear" className="case-icon text-amber-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Sound · Garments · Digital Products</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Sound & Tools for Producers</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Mass market shops and noisy marketplaces never matched the workflow, and some tools only exist because nothing else felt right on real sessions. Producers needed a calmer home for sounds and utilities, not another endless aisle.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> An artist-led site for <a href="https://www.isiata.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">ISIATA</a> with culture and innovation in one place: releases and playlists, garments, and digital tools for producers. Built like the work itself: used in real conditions, kept only if essential, offered in small batches, quiet by design, with a list for early and private drops.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-amber-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">One intentional home for sound, tools, and drops, not a generic storefront</span>
                        <span className="text-sm text-white">Availability that respects the brand: small batches, no fake urgency</span>
                        <span className="text-sm text-white">Email list for early access and private releases</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Web</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Sound</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Producers</span>
                      <a href="https://www.isiata.com/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-[10px] font-medium hover:bg-amber-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-on-scroll">
            <p className="text-neutral-400 text-sm">
              If you want screenshots, I'll show you. <br />
              <span className="text-white">If you care about outcomes, this is the part that matters.</span>
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30 mt-8">
              Ready to Build Your System? Book a Free Call
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="process" className="py-24 bg-neutral-900/30 relative border-t border-white/5 section-standard">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 animate-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-6 leading-[1.12]">
              You're leaving money on the table.<br />
              <span className="text-neutral-600">Here's how I fix it.</span>
              <br />
              <span className="text-neutral-600">Most businesses don't need more traffic.</span>
              <br />
              They need better systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.02] transition-all duration-300 animate-on-scroll card-lift service-card">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
                <iconify-icon icon="solar:laptop-minimalistic-linear" width="24" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">Websites & Web Apps</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get a site that actually turns visitors into customers, plus dashboards that show you exactly what's working.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"My website looks good... but it doesn't make money."</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.02] transition-all duration-300 animate-on-scroll delay-100 card-lift service-card">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
                <iconify-icon icon="solar:graph-new-linear" width="24" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">Automation Systems</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get instant follow up, organized data, and 20+ hours back every week without hiring more people.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"I'm drowning in tabs, DMs, and spreadsheets."</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.02] transition-all duration-300 animate-on-scroll delay-200 card-lift">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
                <iconify-icon icon="solar:chat-round-dots-linear" width="24" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">AI Integration</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get AI handling replies, bookings, and follow ups 24/7 so no lead gets ignored.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"I'm doing work a machine should be doing."</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.02] transition-all duration-300 animate-on-scroll delay-300 card-lift service-card">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
                <iconify-icon icon="solar:compass-linear" width="24" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">Strategy & Consulting</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get clarity on what's broken and a step by step plan to fix it so you're not guessing anymore.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"I know something's off... I just can't see it."</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">Close Section</span>
            <p className="text-neutral-300 text-lg mb-2">What's the biggest bottleneck in your business right now?</p>
            <p className="text-neutral-400 text-base mb-8">Let's fix that first.</p>
            <a href="#contact" className="cta-primary inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
              👉 Book your strategy call
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-white/5 section-standard">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="animate-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 mb-4 block">Philosophy</span>
            <h3 className="text-3xl md:text-5xl text-white font-medium mb-8 tracking-tight leading-tight">
              I'm not here to "optimize your vibes."<br />
              <span className="text-neutral-400">I build systems that make you money.</span>
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Clear ROI before we start</h4>
                  <p className="text-sm text-neutral-400">If we can't measure the value, we don't build it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Less tools. More output</h4>
                  <p className="text-sm text-neutral-400">Complex systems don't scale. Simple ones do.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Partner mindset</h4>
                  <p className="text-sm text-neutral-400">I don't think like a freelancer. I think like the person responsible for your revenue.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll delay-200">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative about-card">
              <div className="absolute -top-3 -right-3 px-4 py-1 bg-neutral-900 border border-white/10 text-xs font-mono text-white rounded-full">ORIGIN</div>
              <div className="space-y-8 relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10"></div>
                <div className="relative pl-10">
                  <div className="timeline-dot absolute left-[-51px] top-[2px] w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center z-10 translate-x-1/2">
                    <iconify-icon icon="solar:music-note-linear" className="text-neutral-500" width="12"></iconify-icon>
                  </div>
                  <h4 className="text-white font-medium mb-1">The Musician</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">I learned early: bad input = bad output. No amount of polish fixes a broken signal.</p>
                </div>
                <div className="relative pl-10">
                  <div className="timeline-dot absolute left-[-51px] top-[22px] w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center z-10 translate-x-1/2">
                    <iconify-icon icon="solar:bricks-linear" className="text-neutral-500" width="12"></iconify-icon>
                  </div>
                  <h4 className="text-white font-medium mb-1">The Wall</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Every creative business hits it. Great ideas... no systems to support them.</p>
                </div>
                <div className="relative pl-10">
                  <div className="timeline-dot timeline-dot-active absolute left-[-51px] top-[22px] w-6 h-6 rounded-full bg-neutral-900 border border-red-500/50 flex items-center justify-center z-10 translate-x-1/2">
                    <iconify-icon icon="solar:code-circle-linear" className="text-red-400" width="12"></iconify-icon>
                  </div>
                  <h4 className="text-white font-medium mb-1">The Architect</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">10+ years building across web, audio, automation, and AI. My job is simple: make the system invisible so the results are obvious.</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">Trained at</span>
                <ul className="space-y-1 text-sm text-white font-medium">
                  <li>Western University</li>
                  <li>Fanshawe College</li>
                  <li>
                    Licensed Life Insurance Advisor (LLQP), Durham College{' '}
                    <span className="text-neutral-600 font-normal">(Former)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 animate-on-scroll">
          <p className="text-neutral-300 text-lg mb-6">Ready to work together?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
            Start Here
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-neutral-950 relative overflow-hidden section-standard">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100%' }}></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center animate-on-scroll">
          <h2 className="text-3xl text-white font-medium mb-12">Straight talk on pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="pricing-card p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-red-500/30 transition-all duration-300 card-lift">
              <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest block mb-4">Project Basis</span>
              <div className="text-4xl font-bricolage text-white font-medium mb-2">$1K to $25K</div>
              <p className="text-sm text-neutral-400">Typical range for systems & builds</p>
            </div>
            <div className="pricing-card p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-red-500/30 transition-all duration-300 card-lift">
              <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest block mb-4">Ongoing Support</span>
              <div className="text-4xl font-bricolage text-white font-medium mb-2">$297 to $3K</div>
              <p className="text-sm text-neutral-400">Per month for systems management</p>
            </div>
          </div>
          <div className="flex justify-center items-center text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:check-circle-linear" style={{ color: '#22c55e' }} className="text-green-500"></iconify-icon>
              If inefficiency costs you, let's talk.
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-neutral-300 text-lg mb-6">Not sure if this is right for you?</p>
            <a href="#contact" className="cta-primary inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
              Book a Free Discovery Call
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5 bg-neutral-900/20 section-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 mb-4 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight mb-4">Still Have Questions?</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Here are answers to the most common questions about working together.</p>
          </div>
          <div className="space-y-6 animate-on-scroll">
            <div className="glass-panel rounded-xl border border-white/10 faq-card overflow-hidden">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white font-medium text-lg pr-4">Is this worth the investment?</h3>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180 text-red-500' : ''}`}
                ></iconify-icon>
              </button>
              <div className={`faq-answer ${openFaq === 0 ? 'faq-open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">If inefficiency is costing you more than $1K to $25K in lost revenue, missed leads, or wasted time, then yes. Most clients see ROI within the first 3 months through recovered revenue and time savings. We'll calculate the value before we start. If I can't show you clear ROI, I won't build it.</p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl border border-white/10 faq-card overflow-hidden">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white font-medium text-lg pr-4">How long does this take?</h3>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180 text-red-500' : ''}`}
                ></iconify-icon>
              </button>
              <div className={`faq-answer ${openFaq === 1 ? 'faq-open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">Most systems take 4 to 8 weeks to build and launch. Complex projects can take 12 to 16 weeks. During your free discovery call, we'll map out a timeline based on your specific needs. You'll know exactly what to expect before we start.</p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl border border-white/10 faq-card overflow-hidden">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white font-medium text-lg pr-4">Will this work for my business?</h3>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180 text-red-500' : ''}`}
                ></iconify-icon>
              </button>
              <div className={`faq-answer ${openFaq === 2 ? 'faq-open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">If you're losing leads, drowning in manual work, or can't scale because your systems are broken (whether you're a startup, tech company, creative business, or established company with existing automation), we can fix it. It's not about what industry you're in, it's about fixing what's broken. Book a free call and we'll determine if we're a fit.</p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl border border-white/10 faq-card overflow-hidden">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white font-medium text-lg pr-4">What happens after I book a call?</h3>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === 3 ? 'rotate-180 text-red-500' : ''}`}
                ></iconify-icon>
              </button>
              <div className={`faq-answer ${openFaq === 3 ? 'faq-open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">We'll spend 30 minutes understanding your biggest bottleneck. You'll get a custom roadmap showing exactly how we'll fix it, with clear ROI calculations. No sales pitch, no pressure. If we're a fit, we'll discuss next steps. If not, you'll walk away with valuable insights.</p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl border border-white/10 faq-card overflow-hidden">
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white font-medium text-lg pr-4">Do I need to be tech-savvy?</h3>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === 4 ? 'rotate-180 text-red-500' : ''}`}
                ></iconify-icon>
              </button>
              <div className={`faq-answer ${openFaq === 4 ? 'faq-open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">Not at all. I build systems that work for you, not the other way around. You'll get training and documentation, but the goal is to make everything so simple that you don't have to think about it. The system should disappear so your work can shine.</p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl border border-white/10 faq-card overflow-hidden">
              <button 
                onClick={() => toggleFaq(5)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white font-medium text-lg pr-4">What kind of results can I expect?</h3>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === 5 ? 'rotate-180 text-red-500' : ''}`}
                ></iconify-icon>
              </button>
              <div className={`faq-answer ${openFaq === 5 ? 'faq-open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">Results vary, but typical outcomes include: 3× lead conversion rates, 70% reduction in admin work, zero missed inquiries, faster response times, and recovered revenue from previously lost leads. We'll set specific, measurable goals during your discovery call.</p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl border border-white/10 faq-card overflow-hidden">
              <button 
                onClick={() => toggleFaq(6)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white font-medium text-lg pr-4">What if I need changes after launch?</h3>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === 6 ? 'rotate-180 text-red-500' : ''}`}
                ></iconify-icon>
              </button>
              <div className={`faq-answer ${openFaq === 6 ? 'faq-open' : ''}`}>
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">That's what ongoing support is for. Most clients start with a project build, then move to monthly support ($297 to $3K/month) for updates, maintenance, and new features. Systems evolve with your business. We're here for the long haul if you want us.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 animate-on-scroll">
            <p className="text-white text-xl mb-6">Ready to fix what's broken?</p>
            <a href="#contact" className="cta-primary inline-flex items-center gap-2 px-10 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
              Book Your Free Discovery Call
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-black py-32 border-t border-white/10 relative overflow-hidden section-elevated" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), #000000)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] float-animation"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] float-animation-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block p-1 rounded-full bg-white/5 border border-green-500/25 mb-10 animate-on-scroll glow-border">
            <div className="px-5 py-2 rounded-full bg-black/80 backdrop-blur flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-95"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]"></span>
              </span>
              <span className="text-[11px] text-white font-mono uppercase tracking-widest">Accepting New Projects</span>
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-bricolage font-medium mb-6 tracking-tight animate-on-scroll delay-100 leading-[1.05]">
            <span className="text-white">Ready to scale?</span><br />
            <span className="gradient-text-animated">Let's fix what's slowing you down.</span>
          </h2>

          <div className="text-xl text-neutral-400 font-light mb-12 animate-on-scroll delay-200 space-y-4 max-w-2xl mx-auto">
            <p>If your business feels heavier than it should, something's broken.</p>
            <p>We'll find it and build the system that removes it.</p>
          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 animate-on-scroll delay-200">What you get</p>

          <div className="max-w-2xl mx-auto mb-12 animate-on-scroll delay-250">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">30 minute strategy call</h4>
                  <p className="text-sm text-neutral-400">We break down what's not working and why</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">Your custom system roadmap</h4>
                  <p className="text-sm text-neutral-400">Clear plan to fix your biggest bottleneck</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">Instant booking</h4>
                  <p className="text-sm text-neutral-400">Pick a time. No back-and-forth</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">No pressure</h4>
                  <p className="text-sm text-neutral-400">If it's not a fit, you'll still leave with clarity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 animate-on-scroll delay-400">
            <Link to="/calendar" className="cta-primary group relative px-10 py-4 rounded-full bg-white text-black text-sm font-medium transition-all duration-300 flex items-center gap-3 btn-shimmer hover:bg-red-400 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              <iconify-icon icon="solar:calendar-linear" className="text-lg group-hover:scale-110 transition-transform"></iconify-icon>
              Book your free strategy call
              <iconify-icon icon="solar:arrow-right-up-linear" className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"></iconify-icon>
            </Link>

            <a href="mailto:brian@areoclient.com" className="group text-xl md:text-2xl text-neutral-400 font-medium transition-all duration-300 relative hover:text-white">
              <span className="relative z-10">brian@areoclient.com</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-red-300 group-hover:w-full transition-all duration-500"></span>
            </a>
          </div>

          <div className="mt-28 pt-16 border-t border-white/10 relative">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="flex flex-col gap-8">
              {/* Large Footer Logo: centered on mobile, left-aligned on desktop */}
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
