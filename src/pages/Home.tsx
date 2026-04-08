import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CaseStudyMediaBand from '../components/CaseStudyMediaBand'
import Navigation from '../components/Navigation'
import OfferFrameworkGateModal from '../components/OfferFrameworkGateModal'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const OFFER_FRAMEWORK_BULLETS: { line: string; focus: string }[] = [
  {
    line: 'How to make your offer clear in one sentence',
    focus:
      'Strip the fluff until a stranger gets it instantly. If it needs a paragraph, it is not an offer yet.',
  },
  {
    line: 'How to increase perceived value without doing more work',
    focus:
      'Shape the promise, proof, and framing so the same deliverable feels like a step up, not a slog.',
  },
  {
    line: 'How to position your offer so it feels like a no-brainer',
    focus:
      'Make the alternative feel riskier than saying yes. Clarity beats clever every time.',
  },
  {
    line: 'The simple structure I use before building any system',
    focus:
      'Same prep I run before CRMs, sites, or automations so tech matches revenue, not the other way around.',
  },
]

const WORK_DEPLOY_TILES: { key: string; icon: string; label: string; tileClass: string; caseId: string }[] = [
  { key: 'et', icon: 'solar:music-note-linear', label: 'Ear Training Platform', tileClass: 'border-red-500/35 bg-red-500/10 text-red-400', caseId: 'case-ear-training' },
  { key: 'vi', icon: 'solar:shield-check-linear', label: 'Virelia Insurance', tileClass: 'border-blue-500/35 bg-blue-500/10 text-blue-400', caseId: 'case-virelia' },
  { key: 'co', icon: 'solar:stars-minimalistic-linear', label: 'Spiritual & Human Design Coach', tileClass: 'border-purple-500/35 bg-purple-500/10 text-purple-400', caseId: 'case-spiritual-coach' },
  { key: 'gs', icon: 'solar:gamepad-linear', label: 'Game Studio Website', tileClass: 'border-indigo-500/35 bg-indigo-500/10 text-indigo-400', caseId: 'case-game-studio' },
  { key: 'mq', icon: 'solar:music-notes-linear', label: 'MOQEMÀE', tileClass: 'border-rose-500/35 bg-rose-500/10 text-rose-400', caseId: 'case-moqemae' },
  { key: 'ar', icon: 'solar:widget-5-linear', label: 'AreoClient', tileClass: 'border-emerald-500/35 bg-emerald-500/10 text-emerald-400', caseId: 'case-areoclient' },
  { key: 'so', icon: 'solar:chat-round-dots-linear', label: 'Social Outreach app', tileClass: 'border-cyan-500/35 bg-cyan-500/10 text-cyan-400', caseId: 'case-social-outreach' },
  { key: 'is', icon: 'solar:music-note-slider-linear', label: 'ISIATA', tileClass: 'border-amber-500/35 bg-amber-500/10 text-amber-400', caseId: 'case-isiata' },
]

const PROCESS_FIX_STEPS: { step: string; title: string; fixQuote: string }[] = [
  {
    step: '01',
    title: 'Websites & Web Apps',
    fixQuote: '"My website looks good... but it doesn\'t make money."',
  },
  {
    step: '02',
    title: 'Automation Systems',
    fixQuote: '"I\'m drowning in tabs, DMs, and spreadsheets."',
  },
  {
    step: '03',
    title: 'AI Integration',
    fixQuote: '"I\'m doing work a machine should be doing."',
  },
  {
    step: '04',
    title: 'Strategy & Consulting',
    fixQuote: '"I know something\'s off... I just can\'t see it."',
  },
]

export default function Home() {
  useScrollAnimation() // Initialize scroll animations for all elements
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [offerFocus, setOfferFocus] = useState(0)
  const [offerFrameworkModalOpen, setOfferFrameworkModalOpen] = useState(false)
  const ghlOfferWebhookUrl = import.meta.env.VITE_GHL_OFFER_WEBHOOK_URL

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

      {/* Mobile: document scrolls (no trap). md+: fixed viewport height; inner column scrolls if needed. */}
      <header className="relative flex min-h-[100svh] flex-col overflow-x-hidden overflow-y-visible tech-grid hero-elevated px-6 pb-6 md:h-[100svh] md:max-h-[100svh] md:min-h-0 md:overflow-hidden md:px-12 md:pb-8">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute top-[8%] left-1/2 h-[min(88vh,920px)] w-[min(112vw,1200px)] max-w-none -translate-x-1/2 rounded-full bg-red-900/[0.14] blur-[140px]" />
        </div>

        <div className="relative z-10 flex w-full flex-1 flex-col overflow-visible pt-[7rem] md:min-h-0 md:overflow-y-auto md:overscroll-y-contain md:justify-center md:py-12 md:pt-[7.5rem]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 gap-x-12 lg:gap-x-24 items-start md:items-center pb-4 md:pb-8">
          <div className="md:col-span-8">
            <div className="mb-6 md:mb-8 pt-[40px] md:pt-0 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
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

            <h1 className="font-bricolage font-medium leading-[0.92] tracking-[-0.02em] mb-7 md:mb-10">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.25rem] text-neutral-500 animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                Your business isn't broken.
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[clamp(4.5rem,11vw,7.5rem)] text-white hero-text-gradient animate-slide-up mt-3 md:mt-5" style={{ animationDelay: '0.8s', opacity: 0 }}>
                Your systems are.
              </span>
            </h1>

            <div className="max-w-2xl mb-9 md:mb-12 animate-slide-up" style={{ animationDelay: '1s', opacity: 0 }}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-neutral-100 tracking-tight leading-[1.15] mb-6 md:mb-7">
                I build systems that turn attention into predictable revenue.
              </p>
              <div className="h-px w-20 bg-gradient-to-r from-red-500/60 to-transparent mb-6 md:mb-7" aria-hidden />
              <div className="text-lg md:text-xl font-light leading-relaxed space-y-3 text-neutral-400">
                <p>
                  Websites, web apps, audio, and AI powered workflows designed to convert.
                </p>
                <p className="text-neutral-500">
                  I also help shape the offer that drives it.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 md:mb-10 animate-slide-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
              <a href="#contact" className="cta-primary px-9 py-4 md:px-10 md:py-[1.125rem] bg-white text-neutral-950 rounded-xl text-[0.9375rem] font-medium hover:bg-red-400 transition-all flex items-center justify-center gap-2 group btn-shimmer hover:shadow-lg hover:shadow-red-500/35">
                Get Your Free Strategy Call
                <iconify-icon icon="solar:arrow-right-up-linear" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
              </a>
              <a href="#work" className="px-9 py-4 md:px-10 md:py-[1.125rem] glass-panel text-white rounded-xl text-[0.9375rem] font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 glow-border">
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 md:gap-x-12 text-sm md:text-base text-neutral-400 animate-slide-up" style={{ animationDelay: '1.4s', opacity: 0 }}>
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

          <div className="md:col-span-4 flex w-full flex-col items-stretch md:items-end gap-6 md:gap-8 animate-slide-up" style={{ animationDelay: '1.4s', opacity: 0 }}>
            <div className="hidden md:flex items-center gap-3 self-end">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-red-500/95">System Designer</span>
              <span className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent"></span>
            </div>
            <div className="glass-panel hero-side-panel flex min-h-[240px] w-full flex-col justify-center rounded-2xl border-l-[3px] border-l-red-500 p-7 md:min-h-[min(52vh,520px)] md:max-w-md md:p-9">
              <p className="mb-5 text-base font-medium leading-relaxed text-white md:text-lg">
                Most businesses leak time, leads, and money. You get the infrastructure that stops the bleeding.
              </p>
              <div className="mb-5 h-px w-full bg-gradient-to-r from-white/15 to-transparent"></div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 shrink-0 text-red-500" width="20"></iconify-icon>
                  <span className="text-sm text-neutral-300">Save 20+ hours per week with automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 shrink-0 text-red-500" width="20"></iconify-icon>
                  <span className="text-sm text-neutral-300">Recover lost revenue from missed leads</span>
                </div>
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 shrink-0 text-red-500" width="20"></iconify-icon>
                  <span className="text-sm text-neutral-300">Turn chaos into predictable systems</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>

      {/* Case Studies Section */}
      <section id="work" className="section-ambient relative overflow-hidden border-t border-white/5 py-24 md:py-32 section-standard">
        <div className="section-ambient__glow" aria-hidden />
        <div className="section-ambient__grid" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 grid grid-cols-1 items-start gap-12 md:mb-20 lg:grid-cols-12 lg:gap-16 animate-on-scroll">
            <div className="lg:col-span-7">
              <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-red-500">Deployment Log</span>
              <h2 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-6xl">What I Actually Build</h2>
              <p className="max-w-xl text-neutral-400">
                Real systems. Real outcomes. I don't ship pretty mockups and disappear. I build things people use every day.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/35 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-5">
                <span className="mb-3 block text-[10px] font-mono uppercase tracking-widest text-neutral-500">Live deployments</span>
                <div className="flex flex-wrap gap-2">
                  {WORK_DEPLOY_TILES.map((t) => (
                    <a
                      key={t.key}
                      href={`#${t.caseId}`}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 hover:scale-105 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500/60 md:h-12 md:w-12 ${t.tileClass}`}
                      aria-label={`${t.label}: jump to case study`}
                      title={`View ${t.label}`}
                    >
                      <iconify-icon icon={t.icon} width="22" className="md:w-[24px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Case Study 1: Ear Training Platform */}
            <div
              id="case-ear-training"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col card-lift case-study-card hover:border-red-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '239, 68, 68' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="ear-training-platform.pages.dev" slug="ear-training" />
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
              id="case-virelia"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col delay-100 card-lift case-study-card hover:border-blue-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '59, 130, 246' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="vireliainsurance.com" slug="virelia" />
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
              id="case-spiritual-coach"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col delay-200 card-lift case-study-card hover:border-purple-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '168, 85, 247' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="www.mariaamiouni.com" slug="maria-amiouni" />
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
              id="case-game-studio"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col delay-300 card-lift case-study-card hover:border-indigo-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '99, 102, 241' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                {/* Layered depth backgrounds */}
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="boundlessgames.net" slug="boundless-games" />
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
              id="case-moqemae"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col delay-400 card-lift case-study-card hover:border-rose-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '244, 63, 94' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="moqemae.pages.dev" slug="moqemae" />
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
              id="case-areoclient"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col delay-500 card-lift case-study-card hover:border-emerald-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '16, 185, 129' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="areoclient.com" slug="areoclient" />
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
              id="case-social-outreach"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col delay-600 card-lift case-study-card hover:border-cyan-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '6, 182, 212' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="areosuitesocialoutreach.vercel.app" slug="social-outreach" />
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
              id="case-isiata"
              className="group glass-panel scroll-mt-24 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 animate-on-scroll flex flex-col delay-700 card-lift case-study-card hover:border-amber-500/40 md:scroll-mt-28"
              style={{ '--case-study-glow': '245, 158, 11' } as React.CSSProperties}
            >
              <div className="relative flex-1 p-8 md:p-10 flex flex-col min-h-[420px]">
                <div className="absolute inset-0 bg-neutral-950 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-950 z-[1]"></div>
                <div className="absolute inset-0 bg-neutral-900/40 z-[2]" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -4px 12px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 opacity-[0.15] z-[3]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col h-full bg-neutral-900/20 rounded-lg" style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CaseStudyMediaBand urlLabel="www.isiata.com" slug="isiata" />
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
      <section id="process" className="section-ambient relative overflow-hidden border-t border-white/5 bg-neutral-900/30 py-24 section-standard">
        <div className="section-ambient__glow opacity-70" aria-hidden />
        <div className="section-ambient__grid opacity-40" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:mb-20 lg:grid-cols-12 lg:gap-16 animate-on-scroll">
            <div className="lg:col-span-7">
              <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">Capabilities</span>
              <h2 className="mb-6 text-4xl font-medium leading-[1.12] tracking-tight text-white md:text-6xl">
                You're leaving money on the table.<br />
                <span className="text-neutral-600">Here's how I fix it.</span>
                <br />
                <span className="text-neutral-600">Most businesses don't need more traffic.</span>
                <br />
                They need better systems.
              </h2>
            </div>
            <div className="story-rail lg:col-span-5 lg:pt-2">
              {PROCESS_FIX_STEPS.map((s, i) => (
                <div
                  key={s.step}
                  className={`story-rail__node pl-1 ${i < PROCESS_FIX_STEPS.length - 1 ? 'mb-8' : ''}`}
                >
                  <span
                    className={`font-bricolage text-4xl font-medium md:text-5xl ${
                      i === 0
                        ? 'text-red-500/90'
                        : i === 1
                          ? 'text-red-500/70'
                          : i === 2
                            ? 'text-red-500/50'
                            : 'text-red-500/35'
                    }`}
                  >
                    {s.step}
                  </span>
                  <p className="mt-2 text-sm font-medium text-white">{s.title}</p>
                  <p className="mt-1 max-w-sm text-xs italic leading-relaxed text-neutral-500">{s.fixQuote}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="process-spine" aria-hidden>
            <div className="process-spine__line" />
            <div className="process-spine__dots">
              <span className="process-spine__dot" />
              <span className="process-spine__dot" />
              <span className="process-spine__dot" />
              <span className="process-spine__dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl border border-white/5 p-6 transition-all duration-300 animate-on-scroll card-lift service-card hover:border-red-500/30 hover:bg-white/[0.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-white shadow-inner ring-1 ring-white/5 transition-all group-hover:border-red-500/30 group-hover:text-red-400 group-hover:ring-red-500/20">
                <iconify-icon icon="solar:laptop-minimalistic-linear" width="28" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">Websites & Web Apps</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get a site that actually turns visitors into customers, plus dashboards that show you exactly what's working.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"My website looks good... but it doesn't make money."</p>
              </div>
            </div>

            <div className="group rounded-xl border border-white/5 p-6 transition-all duration-300 animate-on-scroll delay-100 card-lift service-card hover:border-red-500/30 hover:bg-white/[0.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-white shadow-inner ring-1 ring-white/5 transition-all group-hover:border-red-500/30 group-hover:text-red-400 group-hover:ring-red-500/20">
                <iconify-icon icon="solar:graph-new-linear" width="28" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">Automation Systems</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get instant follow up, organized data, and 20+ hours back every week without hiring more people.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"I'm drowning in tabs, DMs, and spreadsheets."</p>
              </div>
            </div>

            <div className="group rounded-xl border border-white/5 p-6 transition-all duration-300 animate-on-scroll delay-200 card-lift hover:border-red-500/30 hover:bg-white/[0.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-white shadow-inner ring-1 ring-white/5 transition-all group-hover:border-red-500/30 group-hover:text-red-400 group-hover:ring-red-500/20">
                <iconify-icon icon="solar:chat-round-dots-linear" width="28" className="icon-hover"></iconify-icon>
              </div>
              <h3 className="text-lg text-white font-medium mb-3">AI Integration</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">You get AI handling replies, bookings, and follow ups 24/7 so no lead gets ignored.</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">The Fix</span>
                <p className="text-xs text-neutral-300 italic">"I'm doing work a machine should be doing."</p>
              </div>
            </div>

            <div className="group rounded-xl border border-white/5 p-6 transition-all duration-300 animate-on-scroll delay-300 card-lift service-card hover:border-red-500/30 hover:bg-white/[0.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-white shadow-inner ring-1 ring-white/5 transition-all group-hover:border-red-500/30 group-hover:text-red-400 group-hover:ring-red-500/20">
                <iconify-icon icon="solar:compass-linear" width="28" className="icon-hover"></iconify-icon>
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
            <div className="mb-6 flex items-center justify-center gap-6 text-neutral-600" aria-hidden>
              <iconify-icon icon="solar:calendar-linear" width="26" className="opacity-50" />
              <iconify-icon icon="solar:chat-round-line-linear" width="26" className="opacity-50" />
              <iconify-icon icon="solar:letter-linear" width="26" className="opacity-50" />
            </div>
            <a href="#contact" className="cta-primary inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
              👉 Book your strategy call
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-ambient relative overflow-hidden border-t border-white/5 py-24 section-standard">
        <div className="section-ambient__grid opacity-30" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
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
            <div className="glass-panel relative rounded-2xl border border-white/10 p-8 about-card">
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

        <div className="relative z-10 mt-20 text-center animate-on-scroll">
          <p className="text-neutral-300 text-lg mb-6">Ready to work together?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-red-400 transition-all btn-shimmer hover:shadow-lg hover:shadow-red-500/30">
            Start Here
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
          </a>
        </div>
      </section>

      {/* Lead magnet: offer framework (add PDF at public/no-brainer-offer-framework.pdf) */}
      <section
        id="offer-framework"
        className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-28 md:py-32"
        aria-labelledby="offer-framework-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(239,68,68,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[length:44px_44px] opacity-80"
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="animate-on-scroll">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.12)] transition-[box-shadow,transform] duration-300 hover:border-red-500/40 hover:shadow-[0_0_32px_rgba(239,68,68,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-40"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </span>
                Not ready to work together yet?
              </div>
              <h2
                id="offer-framework-heading"
                className="mb-6 font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              >
                Fix your offer{' '}
                <span className="hero-text-gradient">first.</span>
              </h2>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-400">
                Download the exact framework I use to turn ideas into offers that actually sell.
              </p>
              <div className="group/result relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 transition-all duration-500 hover:border-red-500/25 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)] md:p-8">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition-opacity duration-500 group-hover/result:opacity-100" aria-hidden />
                <span className="mb-3 block text-xs font-mono uppercase tracking-widest text-red-500/90">
                  Result
                </span>
                <p className="relative text-base leading-relaxed text-neutral-200">
                  You&apos;ll walk away with an offer you can actually sell, not something you have to explain 10
                  times.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOfferFrameworkModalOpen(true)}
                className="cta-primary group/download glow-border relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-9 py-4 text-sm font-medium text-neutral-950 transition-all duration-300 btn-shimmer hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
              >
                <span className="relative z-10">Download the free offer builder</span>
                <iconify-icon
                  icon="solar:download-minimalistic-linear"
                  className="relative z-10 text-lg transition-transform duration-300 group-hover/download:translate-y-0.5 group-hover/download:scale-110"
                ></iconify-icon>
              </button>
              <p className="mt-4 text-xs text-neutral-600">PDF · sent to your email after you submit</p>
            </div>

            <div className="animate-on-scroll delay-100">
              <div className="group/card relative rounded-2xl border border-white/10 bg-neutral-900/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_32px_96px_rgba(0,0,0,0.5),0_0_48px_rgba(239,68,68,0.12)] md:p-10">
                <div className="relative mb-8 h-36 md:h-40">
                  <div
                    className="absolute left-1/2 top-3 h-[7.5rem] w-[11rem] -translate-x-1/2 rotate-[-4deg] rounded-md border border-white/10 bg-neutral-800/90 shadow-lg transition-all duration-500 ease-out group-hover/card:top-4 group-hover/card:translate-x-[calc(-50%+10px)] group-hover/card:rotate-[-2deg] md:w-[13rem]"
                    aria-hidden
                  />
                  <div
                    className="absolute left-1/2 top-0 h-[7.5rem] w-[11rem] -translate-x-1/2 rotate-[1deg] rounded-md border border-white/15 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 shadow-2xl transition-all duration-500 ease-out group-hover/card:-translate-y-1 group-hover/card:translate-x-[calc(-50%-8px)] group-hover/card:rotate-[2deg] md:w-[13rem]"
                    aria-hidden
                  >
                    <div className="flex h-full flex-col p-4">
                      <div className="mb-2 h-1.5 w-1/3 rounded-full bg-red-500/40" />
                      <div className="space-y-1.5">
                        <div className="h-1 rounded bg-white/10" />
                        <div className="h-1 w-5/6 rounded bg-white/5" />
                        <div className="h-1 w-4/6 rounded bg-white/5" />
                      </div>
                      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-red-400/90">Framework</span>
                        <iconify-icon icon="solar:document-text-linear" className="text-red-500/80" width="18" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex items-start gap-3 border-b border-white/10 pb-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-red-500 shadow-inner transition-transform duration-300 group-hover/card:scale-105">
                    <iconify-icon icon="solar:document-text-linear" width="22"></iconify-icon>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Free PDF</span>
                    <p className="text-lg font-medium text-white">The No-Brainer Offer Framework</p>
                  </div>
                </div>

                <p id="offer-framework-list-label" className="mb-3 text-sm font-mono uppercase tracking-widest text-neutral-500">
                  What&apos;s inside · tap a line
                </p>
                <ul className="space-y-1" role="group" aria-labelledby="offer-framework-list-label">
                  {OFFER_FRAMEWORK_BULLETS.map((item, i) => (
                    <li key={item.line}>
                      <button
                        type="button"
                        aria-pressed={offerFocus === i}
                        aria-controls="offer-focus-panel"
                        onClick={() => setOfferFocus(i)}
                        onMouseEnter={() => setOfferFocus(i)}
                        className={`group/item flex w-full gap-4 rounded-xl px-3 py-3.5 text-left transition-all duration-300 md:py-3 ${
                          offerFocus === i
                            ? 'border border-red-500/35 bg-red-500/[0.08] shadow-[0_0_28px_rgba(239,68,68,0.12)]'
                            : 'border border-transparent hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            offerFocus === i
                              ? 'scale-110 bg-red-500/25 text-red-400'
                              : 'bg-red-500/10 text-red-500/80 group-hover/item:scale-105'
                          }`}
                        >
                          <iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
                        </div>
                        <span
                          className={`text-sm leading-relaxed transition-colors duration-300 ${
                            offerFocus === i ? 'text-neutral-100' : 'text-neutral-400'
                          }`}
                        >
                          {item.line}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div
                  id="offer-focus-panel"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                  className="mt-6 min-h-[5.5rem] rounded-xl border border-white/10 bg-black/30 p-4 text-sm leading-relaxed text-neutral-400 transition-[border-color,box-shadow] duration-300 md:min-h-[5rem] md:p-5"
                >
                  <span className="mb-1 block text-[10px] font-mono uppercase tracking-widest text-red-500/80">
                    Lens
                  </span>
                  <p key={offerFocus} className="animate-[offerFocusFade_0.35s_ease-out] text-neutral-300">
                    {OFFER_FRAMEWORK_BULLETS[offerFocus].focus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-ambient relative overflow-hidden bg-neutral-950 py-24 section-standard">
        <div className="section-ambient__glow opacity-50" aria-hidden />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100%' }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14 animate-on-scroll">
            <div className="text-center lg:col-span-5 lg:text-left">
              <h2 className="text-3xl font-medium text-white md:text-4xl">Straight talk on pricing</h2>
              <div className="mx-auto mt-10 flex max-w-md items-start justify-center gap-3 text-sm text-neutral-400 lg:mx-0">
                <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 shrink-0 text-green-500" width="20" />
                <span>If inefficiency costs you, let's talk.</span>
              </div>
            </div>
            <div className="story-rail lg:col-span-7">
              <div className="story-rail__node mb-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="pricing-card rounded-2xl border border-white/10 bg-neutral-900 p-8 transition-all duration-300 card-lift hover:border-red-500/30">
                    <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">Project Basis</span>
                    <div className="mb-2 font-bricolage text-4xl font-medium text-white">$1K to $25K</div>
                    <p className="text-sm text-neutral-400">Typical range for systems & builds</p>
                  </div>
                  <div className="pricing-card rounded-2xl border border-white/10 bg-neutral-900 p-8 transition-all duration-300 card-lift hover:border-red-500/30">
                    <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">Ongoing Support</span>
                    <div className="mb-2 font-bricolage text-4xl font-medium text-white">$297 to $3K</div>
                    <p className="text-sm text-neutral-400">Per month for systems management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 text-center">
            <p className="mb-6 text-lg text-neutral-300">Not sure if this is right for you?</p>
            <a href="#contact" className="cta-primary inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-medium text-neutral-950 transition-all btn-shimmer hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/30">
              Book a Free Discovery Call
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-white/5 bg-neutral-900/20 py-24 section-subtle">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="faq-hero-band animate-on-scroll">
            <div className="faq-hero-band__glow" aria-hidden />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.15)]">
                <iconify-icon icon="solar:chat-round-dots-linear" width="32"></iconify-icon>
              </div>
              <div>
                <span className="mb-2 block text-xs font-mono uppercase tracking-widest text-red-500">Common Questions</span>
                <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">Still Have Questions?</h2>
                <p className="mx-auto mt-3 max-w-xl text-neutral-400 md:mx-0">
                  Here are answers to the most common questions about working together.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-panel faq-card animate-on-scroll overflow-hidden rounded-xl border border-white/10">
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
            <div className="glass-panel faq-card animate-on-scroll delay-75 overflow-hidden rounded-xl border border-white/10">
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
            <div className="glass-panel faq-card animate-on-scroll delay-100 overflow-hidden rounded-xl border border-white/10">
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
            <div className="glass-panel faq-card animate-on-scroll delay-150 overflow-hidden rounded-xl border border-white/10">
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
            <div className="glass-panel faq-card animate-on-scroll delay-200 overflow-hidden rounded-xl border border-white/10">
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
            <div className="glass-panel faq-card animate-on-scroll delay-300 overflow-hidden rounded-xl border border-white/10">
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
            <div className="glass-panel faq-card animate-on-scroll delay-500 overflow-hidden rounded-xl border border-white/10">
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

      <OfferFrameworkGateModal
        open={offerFrameworkModalOpen}
        onClose={() => setOfferFrameworkModalOpen(false)}
        webhookUrl={ghlOfferWebhookUrl}
      />
    </div>
  )
}
