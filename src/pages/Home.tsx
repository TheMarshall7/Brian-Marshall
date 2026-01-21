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
        <title>Brian Marshall — Systems Designer</title>
        <meta name="description" content="Brian Marshall - Systems Designer specializing in websites, web apps, CRM systems, and AI-powered automation for creative businesses and studios. Turn chaos into structure." />
        <meta name="keywords" content="systems architect, web development, CRM, automation, AI integration, web apps, business systems, workflow automation, creative business" />
        <meta name="author" content="Brian Marshall" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brianmarshall.dev/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brianmarshall.dev/" />
        <meta property="og:title" content="Brian Marshall — Systems Designer" />
        <meta property="og:description" content="I design websites, web apps, and AI-powered workflows that turn chaos into structure and ideas into recurring revenue." />
        <meta property="og:site_name" content="Brian Marshall" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brian Marshall — Systems Designer" />
        <meta name="twitter:description" content="I design websites, web apps, and AI-powered workflows that turn chaos into structure and ideas into recurring revenue." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Brian Marshall - Systems Designer",
            "description": "Systems design, web development, CRM, and AI automation services for creative businesses and studios",
            "url": "https://brianmarshall.dev",
            "email": "brian@areoclient.com",
            "priceRange": "$3K - $25K",
            "areaServed": "Worldwide",
            "serviceType": ["Web Development", "Web Applications", "CRM Systems", "AI Integration", "Business Automation", "Workflow Optimization"],
            "knowsAbout": ["Web Development", "CRM", "Automation", "AI", "Business Systems"],
            "sameAs": ["https://www.linkedin.com/in/brian-marshall-80a513144"]
          })}
        </script>
      </Helmet>

      <div className="bg-grain"></div>
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-start pb-24 pt-0 px-6 md:px-12 tech-grid overflow-hidden hero-elevated">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end relative z-10 -mt-[400px]">
          <div className="md:col-span-8">
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 hero-badge">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] text-white">NS</div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] text-white">BG</div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] text-white">AC</div>
                </div>
                <span className="text-xs text-neutral-300 font-medium">Trusted by creative businesses</span>
              </div>
            </div>

            <h1 className="font-bricolage font-medium leading-[0.95] tracking-tight mb-8">
              <span className="block text-4xl md:text-7xl lg:text-8xl text-neutral-600 animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                Your business isn't broken.
              </span>
              <span className="block text-5xl md:text-8xl lg:text-9xl text-white hero-text-gradient animate-slide-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
                Your systems are.
              </span>
            </h1>

            <p className="text-lg md:text-xl font-light text-neutral-400 max-w-2xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '1s', opacity: 0 }}>
              I design websites, web apps, and AI-powered workflows that turn chaos into structure and ideas into recurring revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
              <a href="#contact" className="cta-primary px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all flex items-center justify-center gap-2 group btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
                Get Your Free Strategy Call
                <iconify-icon icon="solar:arrow-right-up-linear" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
              </a>
              <a href="#work" className="px-8 py-4 glass-panel text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 glow-border">
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-neutral-400 animate-slide-up" style={{ animationDelay: '1.4s', opacity: 0 }}>
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500"></iconify-icon>
                <span>Free 30-minute discovery call</span>
              </div>
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500"></iconify-icon>
                <span>See your custom roadmap</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between animate-slide-up" style={{ animationDelay: '1.4s', opacity: 0 }}>
            <div className="hidden md:flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500">System Designer</span>
              <span className="h-[1px] w-8 bg-red-500"></span>
            </div>
            <div className="glass-panel hero-side-panel p-6 rounded-xl w-full max-w-xs border-l-2 border-l-red-500">
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
            {/* Case Study 1: Music Studio */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-500 animate-on-scroll flex flex-col card-lift case-study-card">
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-mono uppercase tracking-widest border border-red-500/20">Web App + CRM</span>
                    <iconify-icon icon="solar:music-note-linear" className="case-icon text-red-500 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Education · Creative Business</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Music Studio System</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Leads were coming in, but scheduling, follow-ups, and student data were a mess.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> You get a custom website funnel, centralized CRM, automated booking, and a web app for staff and students.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-red-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-2 gap-4">
                        <div><span className="text-2xl font-bricolage text-white font-medium">3×</span><span className="block text-xs text-neutral-500">Lead Conversion</span></div>
                        <div><span className="text-2xl font-bricolage text-white font-medium">70%</span><span className="block text-xs text-neutral-500">Less Admin Work</span></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Web App</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">CRM</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Automation</span>
                      <a href="https://ear-training-platform.pages.dev/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-red-500/20 text-red-400 text-[10px] font-medium hover:bg-red-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2: Insurance Agency */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-500 animate-on-scroll delay-100 flex flex-col card-lift case-study-card">
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest border border-blue-500/20">CRM + Automation</span>
                    <iconify-icon icon="solar:shield-check-linear" className="text-blue-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Insurance · Local Service Business</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Insurance Agency Automation</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Slow lead response and inconsistent follow-ups were killing close rates.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> You get automated lead capture, instant SMS/email follow-up, and CRM pipelines by policy type.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-blue-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">Faster response times</span>
                        <span className="text-sm text-white">Higher close rates</span>
                        <span className="text-sm text-white">No leads falling through cracks</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">CRM</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Automation</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">AI</span>
                      <a href="https://virelia-7i9.pages.dev/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-medium hover:bg-blue-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3: Brand + Website */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-500 animate-on-scroll delay-200 flex flex-col card-lift case-study-card">
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-mono uppercase tracking-widest border border-purple-500/20">Branding + Web Design</span>
                    <iconify-icon icon="solar:palette-linear" className="case-icon text-purple-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Creative Agency</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Brand + Website for Creative Studio</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Generic brand. Low trust. Website wasn't converting.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> You get a full brand identity and conversion-focused website designed to communicate value clearly.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-purple-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">Higher engagement & trust</span>
                        <span className="text-sm text-white">Increased client inquiries</span>
                        <span className="text-sm text-white">Stronger brand positioning</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Branding</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Web Design</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Conversion</span>
                      <a href="https://maria-amiouni.pages.dev/" target="_blank" rel="noopener noreferrer" className="ml-auto px-3 py-1 rounded bg-purple-500/20 text-purple-400 text-[10px] font-medium hover:bg-purple-500/30 transition-colors flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4: Game Development */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-500 animate-on-scroll delay-300 flex flex-col card-lift case-study-card">
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="case-badge inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-mono uppercase tracking-widest border border-indigo-500/20">AI + DevOps</span>
                    <iconify-icon icon="solar:gamepad-linear" className="case-icon text-indigo-400 text-2xl"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Game Dev · Indie Studio</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Game Development + Automation Systems</h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Problem:</strong> Manual builds, messy assets, no clear feedback loop.</p>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow"><strong className="text-white">The Solution:</strong> You get automated build workflows, analytics pipelines, and community/update automation.</p>
                  <div className="mt-auto">
                    <div className="bg-white/[0.08] rounded-lg p-4 border border-white/10 mb-4" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)' }}>
                      <span className="block text-xs text-indigo-400 font-mono mb-2">&gt; RESULTS_</span>
                      <div className="grid grid-cols-1 gap-2">
                        <span className="text-sm text-white">Faster releases</span>
                        <span className="text-sm text-white">Better player insights</span>
                        <span className="text-sm text-white">Less busywork</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Automation</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">Analytics</span>
                      <span className="case-tag px-3 py-1 rounded border border-white/10 text-[10px] text-neutral-400">DevOps</span>
                      <a href="https://boundlessgames.net/" target="_blank" rel="noopener noreferrer" className="case-action-btn ml-auto px-3 py-1 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-medium hover:bg-indigo-500/30 flex items-center gap-1">See Project <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a>
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
            <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-6">
              You're not buying software.<br />
              <span className="text-neutral-600">You're buying leverage.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.02] transition-all duration-300 animate-on-scroll card-lift service-card">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
                <iconify-icon icon="solar:laptop-minimalistic-linear" width="24" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">Websites & Web Apps</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get a website that converts visitors into customers, dashboards that give you real-time insights, and tools that scale with your business.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"My website looks fine but doesn't make money."</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.02] transition-all duration-300 animate-on-scroll delay-100 card-lift service-card">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
                <iconify-icon icon="solar:graph-new-linear" width="24" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">Automation Systems</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You save 20+ hours per week with automated workflows that handle follow-ups, organize your data, and eliminate busywork.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"I'm drowning in tabs and spreadsheets."</p>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.02] transition-all duration-300 animate-on-scroll delay-200 card-lift">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-red-400 group-hover:border-red-500/30 transition-all">
                <iconify-icon icon="solar:chat-round-dots-linear" width="24" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">AI Integration</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">Chatbots, voice agents, booking systems, and follow-up automation working 24/7.</p>
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
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get clarity on what's broken, a roadmap to fix it, and systems that turn your ideas into predictable revenue.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"I know something's off, but I can't see it."</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-on-scroll">
            <p className="text-neutral-300 text-lg mb-6">Which problem should we solve first?</p>
            <a href="#contact" className="cta-primary inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
              Let's Talk About Your Biggest Bottleneck
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
            <h3 className="text-3xl md:text-5xl text-white font-medium mb-8 tracking-tight">
              I'm not here to "optimize your vibes."
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Clear ROI before we start</h4>
                  <p className="text-sm text-neutral-400">If I can't calculate the value, I won't build it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Fewer tools, not more</h4>
                  <p className="text-sm text-neutral-400">Complexity is the enemy of execution.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Partner Mindset</h4>
                  <p className="text-sm text-neutral-400">I think like a creator and an operator.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll delay-200">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative about-card">
              <div className="absolute -top-3 -right-3 px-4 py-1 bg-neutral-900 border border-white/10 text-xs font-mono text-white rounded-full">ORIGIN STORY</div>
              <div className="space-y-8 relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10"></div>
                <div className="relative pl-10">
                  <div className="timeline-dot absolute left-[-40px] top-1 w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center z-10 translate-x-1/2">
                    <iconify-icon icon="solar:music-note-linear" className="text-neutral-500" width="12"></iconify-icon>
                  </div>
                  <h4 className="text-white font-medium mb-1">The Musician</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Sound taught me that bad signal in equals bad output out. No amount of polish fixes broken flow.</p>
                </div>
                <div className="relative pl-10">
                  <div className="timeline-dot absolute left-[-40px] top-1 w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center z-10 translate-x-1/2">
                    <iconify-icon icon="solar:bricks-linear" className="text-neutral-500" width="12"></iconify-icon>
                  </div>
                  <h4 className="text-white font-medium mb-1">The Wall</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">I realized every creative business hits the same wall: Great ideas, terrible infrastructure.</p>
                </div>
                <div className="relative pl-10">
                  <div className="timeline-dot timeline-dot-active absolute left-[-40px] top-1 w-6 h-6 rounded-full bg-neutral-900 border border-red-500/50 flex items-center justify-center z-10 translate-x-1/2">
                    <iconify-icon icon="solar:code-circle-linear" className="text-red-400" width="12"></iconify-icon>
                  </div>
                  <h4 className="text-white font-medium mb-1">The Architect</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">10+ years building systems. Web. Audio. Automation. AI. Making the system disappear so the work shines.</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <span>Western University</span>
                <span>Fanshawe College</span>
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
              <div className="text-4xl font-bricolage text-white font-medium mb-2">$3K — $25K</div>
              <p className="text-sm text-neutral-400">Typical range for systems & builds</p>
            </div>
            <div className="pricing-card p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-red-500/30 transition-all duration-300 card-lift">
              <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest block mb-4">Ongoing Support</span>
              <div className="text-4xl font-bricolage text-white font-medium mb-2">$297 — $3K</div>
              <p className="text-sm text-neutral-400">Per month for systems management</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:close-circle-linear" style={{ color: '#ef4444' }} className="text-red-500"></iconify-icon>
              If that feels expensive, I'm not your guy.
            </div>
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:check-circle-linear" style={{ color: '#22c55e' }} className="text-green-500"></iconify-icon>
              If inefficiency costs you more, let's talk.
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
                  <p className="text-neutral-400 text-sm leading-relaxed">If inefficiency is costing you more than $3K to $25K in lost revenue, missed leads, or wasted time, then yes. Most clients see ROI within the first 3 months through recovered revenue and time savings. We'll calculate the value before we start. If I can't show you clear ROI, I won't build it.</p>
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
                  <p className="text-neutral-400 text-sm leading-relaxed">If you're losing leads, drowning in manual work, or can't scale because your systems are broken—whether you're a startup, tech company, creative business, or established company with existing automation—we can fix it. It's not about what industry you're in, it's about fixing what's broken. Book a free call and we'll determine if we're a fit.</p>
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
          <div className="inline-block p-1 rounded-full bg-white/5 border border-red-500/20 mb-10 animate-on-scroll glow-border">
            <div className="px-5 py-2 rounded-full bg-black/80 backdrop-blur flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-95"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]"></span>
              </span>
              <span className="text-[11px] text-white font-mono uppercase tracking-widest">Accepting New Projects</span>
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-bricolage font-medium mb-6 tracking-tight animate-on-scroll delay-100">
            <span className="text-white">Ready to Scale?</span><br />
            <span className="gradient-text-animated">Let's Fix It Together.</span>
          </h2>
          
          <p className="text-xl text-neutral-400 font-light mb-12 animate-on-scroll delay-200">
            If something in your business feels heavier than it should, let's identify what's broken and build the system that fixes it.
          </p>

          <div className="max-w-2xl mx-auto mb-12 animate-on-scroll delay-250">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">30-minute free discovery call</h4>
                  <p className="text-sm text-neutral-400">Quick conversation to understand your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">Get your custom system roadmap</h4>
                  <p className="text-sm text-neutral-400">See exactly how we'll fix your biggest bottleneck</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">See available times instantly</h4>
                  <p className="text-sm text-neutral-400">Pick a time that works for you, no back-and-forth</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 benefit-card">
                <iconify-icon icon="solar:check-circle-linear" className="text-red-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <div>
                  <h4 className="text-white font-medium mb-1">Free consultation to see if we're a fit</h4>
                  <p className="text-sm text-neutral-400">No obligation, no pressure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 animate-on-scroll delay-400">
            <a href="mailto:brian@areoclient.com" className="group text-xl md:text-2xl text-neutral-400 font-medium transition-all duration-300 relative hover:text-white">
              <span className="relative z-10">brian@areoclient.com</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-red-300 group-hover:w-full transition-all duration-500"></span>
            </a>
            
            <Link to="/calendar" className="cta-primary group relative px-10 py-4 rounded-full bg-white text-black text-sm font-medium transition-all duration-300 flex items-center gap-3 btn-shimmer hover:bg-red-400 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              <iconify-icon icon="solar:calendar-linear" className="text-lg group-hover:scale-110 transition-transform"></iconify-icon>
              Book Your Free Discovery Call
              <iconify-icon icon="solar:arrow-right-up-linear" className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"></iconify-icon>
            </Link>
          </div>

          <div className="mt-28 pt-16 border-t border-white/10 relative">
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
