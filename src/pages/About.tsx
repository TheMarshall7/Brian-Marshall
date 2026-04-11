import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import OfferFrameworkGateModal from '../components/OfferFrameworkGateModal'
import { DEFAULT_GHL_OFFER_WEBHOOK_URL } from '../constants/ghl'
import { OFFER_FRAMEWORK_BULLETS } from '../constants/offerFramework'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type Skill = { label: string; percent: number }
type CredentialCard = {
  title: string
  org: string
  yearOrPeriod: string
  description: string
  lead?: string
  featured?: boolean
}
type CredentialTab = 'education' | 'certifications' | 'experience'

const ABOUT_ROLE_TITLE = 'Brian Marshall'
const ABOUT_ROLE_PILLS = ['Creative Systems Designer', 'Music Educator', 'Audio Producer'] as const
const ABOUT_BIO_LINES = [
  'At the intersection of art and technology,',
  'I design systems that bridge creativity with purpose.',
  'From sound to visuals, from code to coaching,',
  'I craft holistic solutions that empower and inspire.',
]

const ABOUT_SKILL_ICONS: Record<string, string> = {
  'Creative Design & Systems': 'solar:pallete-2-linear',
  'Sound & Visual Production': 'solar:music-note-linear',
  'Web Development': 'solar:code-circle-linear',
  'Coaching & Financial Services': 'solar:chat-round-dots-linear',
}

const ABOUT_SKILLS: Skill[] = [
  { label: 'Creative Design & Systems', percent: 95 },
  { label: 'Web Development', percent: 88 },
  { label: 'Sound & Visual Production', percent: 90 },
  { label: 'Coaching & Financial Services', percent: 88 },
]

const ABOUT_SECTIONS = [
  { id: 'profile', label: 'Profile' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'offer-framework', label: 'Offer' },
  { id: 'systems', label: 'Systems' },
  { id: 'stack', label: 'Stack' },
  { id: 'industries', label: 'Industries' },
  { id: 'direction', label: 'Direction' },
] as const

const ABOUT_CREDENTIALS: {
  education: CredentialCard[]
  certifications: CredentialCard[]
  experience: CredentialCard[]
} = {
  education: [
    {
      title: 'Bachelor of Music (B.Mus)',
      org: 'Western University',
      yearOrPeriod: '2015–2020',
      lead: 'Classical discipline applied to modern creative work.',
      description: 'Theory, composition, and performance—foundation for structured craft under pressure.',
    },
    {
      title: 'Dual Degree: Music Recording Arts (MRA)',
      org: 'Fanshawe College',
      yearOrPeriod: '2017–2020',
      lead: 'Studio-grade audio workflow from day one.',
      description: 'Recording, engineering, and production pipelines you can run in professional rooms.',
    },
  ],
  certifications: [
    {
      title: 'LLQP – Life License Qualification Program',
      org: 'FSRA Ontario',
      yearOrPeriod: 'May 2024',
      lead: 'Licensed to advise on life insurance in Ontario.',
      description: 'Client-facing advisory fundamentals and regulatory grounding for financial conversations.',
    },
    {
      title: 'Dante Level 1 Certification',
      org: 'Audinate',
      yearOrPeriod: 'Jan 2023',
      lead: 'Networked audio for modern studio and live rigs.',
      description: 'Routing, clocking, and deployment basics for scalable digital audio systems.',
    },
    {
      title: 'safeTALK – Suicide Alertness Training',
      org: '—',
      yearOrPeriod: 'Apr 2019',
      lead: 'Trained to notice and respond to suicide risk.',
      description: 'Practical alertness for community and one-to-one contexts.',
    },
  ],
  experience: [
    {
      title: 'Licensed Insurance Agent',
      org: 'Transamerica',
      yearOrPeriod: '',
      featured: true,
      lead: 'Turns complex policies into clear, confident next steps for clients.',
      description:
        'Financial education and planning conversations; referral and digital growth with repeatable follow-up.',
    },
    {
      title: 'Music Teacher',
      org: 'School of Musical Arts',
      yearOrPeriod: '',
      lead: 'Long-term progress over one-size-fits-all lessons.',
      description:
        'Student-centered instruction across instruments and styles; practice design and recital readiness for first-time performers.',
    },
    {
      title: 'Audio Producer (Freelance)',
      org: 'Remote / London, ON',
      yearOrPeriod: '',
      lead: 'Release-ready mixes and coherent sonic identity.',
      description:
        'Mixing and mastering across genres; arrangement and vocal production; libraries and sample packs.',
    },
    {
      title: 'Audio Engineer',
      org: 'Western University',
      yearOrPeriod: '',
      lead: 'Reliable sessions, clean edits, teachable workflows.',
      description:
        'Recording sessions, DAW editing, studio logistics, and hands-on production classes for students.',
    },
    {
      title: 'Orientation Programming Assistant',
      org: 'Western University',
      yearOrPeriod: '',
      lead: 'Scaled welcome experiences for 100+ new students.',
      description: 'Event programming, mentorship, conflict resolution, and inclusive onboarding.',
    },
  ],
}

const ABOUT_POSITIONING_LINE = 'I build systems that turn attention into predictable revenue.'

const ABOUT_WHAT_I_DO: string[] = [
  'Design conversion-focused websites and funnels',
  'Build custom web apps (React, full-stack systems)',
  'Set up CRM systems and automation (GoHighLevel, n8n)',
  'Create AI-driven workflows (chatbots, SMS, voice agents)',
  'Engineer client acquisition systems (capture → nurture → booking → close)',
  'Produce and design sound (music, audio branding, production systems)',
  'Help businesses craft offers that actually sell',
]

const ABOUT_WHAT_I_DO_ICONS: Record<string, string> = {
  'Design conversion-focused websites and funnels': 'solar:window-frame-linear',
  'Build custom web apps (React, full-stack systems)': 'solar:code-linear',
  'Set up CRM systems and automation (GoHighLevel, n8n)': 'solar:settings-minimalistic-linear',
  'Create AI-driven workflows (chatbots, SMS, voice agents)': 'solar:cpu-bolt-linear',
  'Engineer client acquisition systems (capture → nurture → booking → close)': 'solar:graph-up-linear',
  'Produce and design sound (music, audio branding, production systems)': 'solar:music-note-linear',
  'Help businesses craft offers that actually sell': 'solar:tag-price-linear',
}

const ABOUT_AREOCLIENT = {
  name: 'AreoClient',
  subtitle: 'AI-powered client acquisition + business operating system for service businesses.',
  replaces: ['Manual follow-up', 'Missed leads', 'Disconnected tools', 'Inconsistent revenue'],
  installs: [
    'Automated lead capture',
    'Smart follow-up systems',
    'AI chat + SMS + voice',
    'CRM pipelines + tracking',
    'Conversion-focused websites',
    'Review + reputation systems',
  ],
}

const ABOUT_OFFERS: { name: string; description: string }[] = [
  { name: 'Basic', description: 'Lean launch system for startups (simple website + lead capture + automation).' },
  { name: 'Essentials', description: 'Growth infrastructure (website + CRM + reviews + unified inbox + automations).' },
  { name: 'Professional', description: 'Automation + AI layer (AI chatbots, SMS, voice assistant, full nurture systems).' },
  { name: 'Elite', description: 'Full growth engine (paid ads + funnels + AI follow-up + optimization).' },
]

const ABOUT_TECH_STACK: { title: string; items: string[] }[] = [
  { title: 'Frontend / Apps', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend / Data', items: ['Node-based systems', 'Prisma (SQLite)'] },
  { title: 'Automation', items: ['GoHighLevel', 'n8n', 'Webhooks + API integrations'] },
  { title: 'AI Infrastructure', items: ['OpenRouter', 'Claude / Gemini / GLM / Grok / Kimi', 'Agents (SMS, chat, voice)'] },
  { title: 'Hosting / Dev', items: ['Cloudflare Pages', 'GitHub deployments', 'Stripe'] },
]

const ABOUT_TECH_ICONS: Record<string, string> = {
  'Next.js': 'simple-icons:nextdotjs',
  React: 'simple-icons:react',
  TypeScript: 'simple-icons:typescript',
  'Tailwind CSS': 'simple-icons:tailwindcss',
  'Node-based systems': 'simple-icons:nodedotjs',
  'Prisma (SQLite)': 'simple-icons:prisma',
  GoHighLevel: 'solar:buildings-2-linear',
  n8n: 'simple-icons:n8n',
  'Webhooks + API integrations': 'solar:link-circle-linear',
  OpenRouter: 'solar:cpu-bolt-linear',
  'Claude / Gemini / GLM / Grok / Kimi': 'solar:stars-linear',
  'Agents (SMS, chat, voice)': 'solar:chat-round-dots-linear',
  'Cloudflare Pages': 'simple-icons:cloudflare',
  'GitHub deployments': 'simple-icons:github',
  Stripe: 'simple-icons:stripe',
}

const ABOUT_DIFFERENTIATORS: { line: string; icon: string }[] = [
  { line: 'Builder + operator mindset (not “just design”)', icon: 'solar:sledgehammer-linear' },
  { line: 'ROI before aesthetics', icon: 'solar:target-linear' },
  { line: 'Reduce complexity instead of adding tools', icon: 'solar:layers-linear' },
  { line: 'Tech + psychology + offer design', icon: 'mdi:brain' },
  { line: 'Systems people actually use daily', icon: 'solar:widget-5-linear' },
]

const ABOUT_PHILOSOPHY: string[] = [
  'If the ROI isn’t clear, don’t build it',
  'More tools = more problems',
  'Systems > traffic',
  'Execution > ideas',
  'Automation should replace effort, not add to it',
]

const ABOUT_INDUSTRIES: string[] = [
  'Service businesses (contractors, med spas, local services)',
  'Creators (musicians, artists, educators)',
  'Consultants (coaches, agencies, experts)',
  'Financial services (insurance, wealth, tax)',
]

const ABOUT_CURRENT_DIRECTION: string[] = [
  'Building a Jarvis-style multi-agent automation system',
  'Designing a simplified all-in-one business platform (GHL power, easier UX)',
  'Scaling AreoClient into a full operating system for businesses',
]

const ABOUT_LEADERSHIP_GROUPS: string[] = [
  'Orientation Leader (Western University, 2016–2019)',
  'Jazz & Symphony Orchestra Bassist (Western University, 2015–2017)',
  'Theatre Western (2017)',
  'Camp Leader & Live Musician (North Peel Community Church, 2013–2018)',
  'Small Group Ensembles (2020–Present)',
]

function CredentialCardItem({
  card,
  accentClass,
  featured,
}: {
  card: CredentialCard
  accentClass: string
  featured?: boolean
}) {
  return (
    <div
      className={`group glass-panel rounded-2xl border border-white/10 p-6 transition-all duration-500 card-lift hover:border-red-500/25 about-credential-card ${accentClass} ${
        featured ? 'about-credential-card--featured' : ''
      }`}
    >
      <h4 className="text-white font-medium leading-snug">{card.title}</h4>
      {card.lead ? (
        <p className="mt-2 text-sm font-medium leading-snug text-white/90">{card.lead}</p>
      ) : null}
      <div
        className={`mt-2 flex items-center gap-4 text-xs ${card.yearOrPeriod ? 'justify-between' : 'justify-start'}`}
      >
        <span className="text-neutral-400">{card.org}</span>
        {card.yearOrPeriod ? <span className="shrink-0 text-neutral-600">{card.yearOrPeriod}</span> : null}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{card.description}</p>
    </div>
  )
}

function CredentialColumn({
  icon,
  title,
  items,
  accentClass,
}: {
  icon: string
  title: string
  items: CredentialCard[]
  accentClass: string
}) {
  const featured = items.filter((c) => c.featured)
  const rest = items.filter((c) => !c.featured)

  return (
    <div>
      <div className="mb-6 flex items-center gap-3 text-neutral-300">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900/60 text-red-400 shadow-inner ring-1 ring-white/5">
          <iconify-icon className="block shrink-0" icon={icon} width="18" height="18" />
        </span>
        <h3 className="font-bricolage text-lg font-medium tracking-tight text-white">{title}</h3>
      </div>

      <div className="space-y-4">
        {featured.map((card) => (
          <CredentialCardItem key={`${title}-feat-${card.title}`} card={card} accentClass={accentClass} featured />
        ))}
        <div className="grid gap-4">
          {rest.map((card) => (
            <CredentialCardItem key={`${title}-${card.title}-${card.org}`} card={card} accentClass={accentClass} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  useScrollAnimation()
  const [activeSection, setActiveSection] = useState<(typeof ABOUT_SECTIONS)[number]['id']>('profile')
  const [activeCredentialTab, setActiveCredentialTab] = useState<CredentialTab>('experience')
  const [offerFocus, setOfferFocus] = useState(0)
  const [offerFrameworkModalOpen, setOfferFrameworkModalOpen] = useState(false)
  const ghlOfferWebhookUrl =
    import.meta.env.VITE_GHL_OFFER_WEBHOOK_URL?.trim() || DEFAULT_GHL_OFFER_WEBHOOK_URL

  const sectionIds = useMemo(() => ABOUT_SECTIONS.map((s) => s.id), [])

  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
        if (inView[0]?.target?.id) setActiveSection(inView[0].target.id as any)
      },
      {
        root: null,
        threshold: [0.28, 0.42, 0.55, 0.68],
        rootMargin: '-18% 0px -58% 0px',
      },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <div className="bg-neutral-950 text-neutral-300 w-full overflow-x-hidden selection:bg-red-500/30 selection:text-white relative min-h-screen">
      <Helmet>
        <title>About · Brian Marshall</title>
        <meta
          name="description"
          content="Background, skills, systems positioning, credentials, and selected work—built like a premium interactive CV."
        />
        <link rel="canonical" href="https://brianmarshall.dev/about" />
      </Helmet>

      <div className="bg-grain" />
      <Navigation />

      <main className="about-page pt-28 md:pt-32">
        <div className="relative -mt-28 md:-mt-32 pt-28 md:pt-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute inset-0 tech-grid tech-grid--soft" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(239,68,68,0.12),transparent_60%)]" />
          </div>

          <div className="relative z-10">
            <div className="about-section-nav">
              <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="flex justify-center">
                  <nav
                    className="about-section-nav-shell relative w-full max-w-full sm:mx-auto sm:w-max"
                    aria-label="About page sections"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-b from-white/[0.12] via-transparent to-transparent opacity-80"
                    />
                    <div className="glass-panel relative inline-flex w-full items-center justify-center rounded-full border border-white/[0.12] bg-gradient-to-b from-white/[0.06] to-neutral-950/70 p-1.5 shadow-[0_16px_50px_-18px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.05] backdrop-blur-xl sm:w-auto">
                      <div className="flex min-h-[2.25rem] w-full items-center justify-center gap-0.5 overflow-x-auto hide-scrollbar px-0.5 sm:min-h-0 sm:gap-1 sm:px-1">
                        {ABOUT_SECTIONS.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              const el = document.getElementById(s.id)
                              el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }}
                            className={`about-section-pill ${activeSection === s.id ? 'about-section-pill--active' : ''}`}
                            aria-current={activeSection === s.id ? 'true' : undefined}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <section
              id="profile"
              className="relative overflow-hidden border-b border-white/5 py-16 md:py-20"
            >
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 animate-on-scroll">
                <div className="relative">
                  <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
                  <div className="glass-panel glass-panel--premium overflow-hidden rounded-2xl border border-white/10">
                    <div className="about-profile-frame relative aspect-[3/4] w-full bg-neutral-900/40">
                      <img
                        src="/brian%20profile.jpg"
                        alt="Brian Marshall portrait"
                        className="about-hero-image relative z-0 h-full w-full object-cover opacity-90 grayscale"
                        loading="eager"
                        fetchPriority="high"
                      />
                      <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 animate-on-scroll">
                <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  About
                </span>
                <h1 className="font-bricolage text-4xl font-medium tracking-tight text-white md:text-6xl">
                  {ABOUT_ROLE_TITLE}
                </h1>

                <div className="mt-5 flex flex-wrap gap-2">
                  {ABOUT_ROLE_PILLS.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-neutral-200"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <p className="mt-5 max-w-prose text-sm leading-relaxed text-neutral-400 md:text-base">
                  {ABOUT_BIO_LINES.map((line, idx) => (
                    <span key={line}>
                      {line}
                      {idx < ABOUT_BIO_LINES.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>

                <div className="mt-10 space-y-5">
                  {ABOUT_SKILLS.map((s) => (
                    <div key={s.label} className="cv-skill">
                      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-neutral-200">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/60 text-red-400 shadow-inner ring-1 ring-white/5">
                          <iconify-icon icon={ABOUT_SKILL_ICONS[s.label] ?? 'solar:widget-5-linear'} width="16" />
                        </span>
                        <span className="text-neutral-300">{s.label}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/[0.08] overflow-hidden">
                        <div
                          className="cv-skill-fill h-full rounded-full"
                          style={{ ['--cv-skill-width' as any]: `${s.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
            </section>
          </div>
        </div>

        <section id="credentials" className="section-ambient section-ambient--soft relative overflow-hidden py-24 section-standard">
          <div className="section-ambient__glow" aria-hidden />
          <div className="section-ambient__grid" aria-hidden />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="animate-on-scroll">
                <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Credentials
                </span>
                <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
                  Proof, training, and real work.
                </h2>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-neutral-400">
                  Skim by category. The details are there when you want them.
                </p>
              </div>

              <div className="animate-on-scroll">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950/40 p-2 backdrop-blur-md">
                  <button
                    type="button"
                    className={`about-tab ${activeCredentialTab === 'experience' ? 'about-tab--active' : ''}`}
                    onClick={() => setActiveCredentialTab('experience')}
                  >
                    Experience
                  </button>
                  <button
                    type="button"
                    className={`about-tab ${activeCredentialTab === 'education' ? 'about-tab--active' : ''}`}
                    onClick={() => setActiveCredentialTab('education')}
                  >
                    Education
                  </button>
                  <button
                    type="button"
                    className={`about-tab ${activeCredentialTab === 'certifications' ? 'about-tab--active' : ''}`}
                    onClick={() => setActiveCredentialTab('certifications')}
                  >
                    Certifications
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div key={activeCredentialTab} className="about-credential-panel-enter">
                {activeCredentialTab === 'experience' ? (
                  <CredentialColumn
                    icon="solar:case-minimalistic-linear"
                    title="Experience"
                    items={ABOUT_CREDENTIALS.experience}
                    accentClass="about-accent-blue"
                  />
                ) : null}
                {activeCredentialTab === 'education' ? (
                  <CredentialColumn
                    icon="solar:square-academic-cap-linear"
                    title="Education"
                    items={ABOUT_CREDENTIALS.education}
                    accentClass="about-accent-amber"
                  />
                ) : null}
                {activeCredentialTab === 'certifications' ? (
                  <CredentialColumn
                    icon="solar:document-text-linear"
                    title="Certifications"
                    items={ABOUT_CREDENTIALS.certifications}
                    accentClass="about-accent-red"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>

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
          <div
            className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="animate-on-scroll">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.12)] transition-[box-shadow,transform] duration-300 hover:border-red-500/40 hover:shadow-[0_0_32px_rgba(239,68,68,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  Not ready to work together yet?
                </div>
                <h2
                  id="offer-framework-heading"
                  className="mb-6 font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                >
                  Fix your offer <span className="hero-text-gradient">first.</span>
                </h2>
                <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-400">
                  Download the exact framework I use to turn ideas into offers that actually sell.
                </p>
                <div className="group/result relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 transition-all duration-500 hover:border-red-500/25 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)] md:p-8">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition-opacity duration-500 group-hover/result:opacity-100"
                    aria-hidden
                  />
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
                  />
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
                          <span className="text-[9px] font-mono uppercase tracking-wider text-red-400/90">
                            Framework
                          </span>
                          <iconify-icon icon="solar:document-text-linear" className="text-red-500/80" width="18" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 flex items-start gap-3 border-b border-white/10 pb-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-red-500 shadow-inner transition-transform duration-300 group-hover/card:scale-105">
                      <iconify-icon icon="solar:document-text-linear" width="22" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Free PDF</span>
                      <p className="text-lg font-medium text-white">The No-Brainer Offer Framework</p>
                    </div>
                  </div>

                  <p
                    id="about-offer-framework-list-label"
                    className="mb-3 text-sm font-mono uppercase tracking-widest text-neutral-500"
                  >
                    What&apos;s inside · tap a line
                  </p>
                  <ul className="space-y-1" role="group" aria-labelledby="about-offer-framework-list-label">
                    {OFFER_FRAMEWORK_BULLETS.map((item, i) => (
                      <li key={item.line}>
                        <button
                          type="button"
                          aria-pressed={offerFocus === i}
                          aria-controls="about-offer-focus-panel"
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
                            <iconify-icon icon="solar:check-circle-bold" width="16" />
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
                    id="about-offer-focus-panel"
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

        <section
          id="systems"
          className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-24 section-standard"
        >
          <div className="about-systems-grid pointer-events-none absolute inset-0 section-ambient__grid" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_58%_at_50%_0%,rgba(239,68,68,0.072),transparent_74%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5 animate-on-scroll">
                <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Core positioning
                </span>
                <h2 className="about-gradient-headline font-bricolage text-3xl font-medium tracking-tight md:text-5xl">
                  {ABOUT_POSITIONING_LINE}
                </h2>
                <p className="mt-5 max-w-prose text-base leading-relaxed text-neutral-400">
                  Websites. Web apps. AI-powered workflows. Audio. Everything is designed to convert, automate, and
                  scale.
                </p>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-neutral-500">
                  I don’t sell tools. I build infrastructure that businesses run on.
                </p>
              </div>

              <div className="lg:col-span-7 animate-on-scroll">
                <div className="glass-panel glass-panel--premium rounded-2xl border border-white/10 p-7 md:p-8">
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="font-bricolage text-xl font-medium text-white">What I actually do</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                      Plain + strong
                    </span>
                  </div>
                  <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {ABOUT_WHAT_I_DO.map((item) => (
                      <li
                        key={item}
                        className="group rounded-xl border border-white/10 bg-neutral-950/35 p-4 transition-all duration-300 hover:border-red-500/25 hover:bg-white/[0.03]"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900/60 text-red-400 shadow-inner ring-1 ring-white/5">
                            <iconify-icon icon={ABOUT_WHAT_I_DO_ICONS[item] ?? 'solar:check-circle-linear'} width="18" />
                          </span>
                          <span className="text-sm leading-relaxed text-neutral-200">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7 animate-on-scroll">
                <div className="group glass-panel glass-panel--premium relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:border-red-500/25 md:p-8">
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"
                    aria-hidden
                  />
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    Signature system
                  </span>
                  <h3 className="font-bricolage text-2xl font-medium text-white md:text-3xl">
                    {ABOUT_AREOCLIENT.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400">{ABOUT_AREOCLIENT.subtitle}</p>

                  <div className="mt-8 about-before-after">
                    <div className="about-before-after__panel">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                        Before (replaces)
                      </span>
                      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                        {ABOUT_AREOCLIENT.replaces.map((x) => (
                          <li key={x} className="flex items-start gap-2 text-neutral-500 line-through decoration-white/10">
                            <iconify-icon icon="solar:close-circle-linear" className="mt-0.5 text-neutral-600" width="16" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="about-before-after__divider" aria-hidden>
                      <span className="about-before-after__arrow">
                        <iconify-icon icon="solar:arrow-right-linear" width="18" />
                      </span>
                    </div>

                    <div className="about-before-after__panel">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                        After (installs)
                      </span>
                      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                        {ABOUT_AREOCLIENT.installs.map((x) => (
                          <li key={x} className="flex items-start gap-2 text-neutral-200">
                            <iconify-icon icon="solar:check-circle-linear" className="mt-0.5 text-red-400" width="16" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 animate-on-scroll">
                <div className="glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                  <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Offers / packages
                  </span>
                  <div className="space-y-4">
                    {ABOUT_OFFERS.map((o) => (
                      <div
                        key={o.name}
                        className="rounded-xl border border-white/10 bg-neutral-950/40 p-5 transition-all duration-300 hover:border-red-500/25"
                      >
                        <h4 className="text-white font-medium">{o.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{o.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="stack" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7 animate-on-scroll">
                <div className="glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                  <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Tech stack
                  </span>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {ABOUT_TECH_STACK.map((group) => (
                      <div key={group.title} className="rounded-xl border border-white/10 bg-neutral-950/40 p-5">
                        <h4 className="text-white font-medium">{group.title}</h4>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {group.items.map((x) => (
                            <span key={x} className="about-chip">
                              <iconify-icon icon={ABOUT_TECH_ICONS[x] ?? 'solar:widget-5-linear'} width="14" />
                              <span className="truncate">{x}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 animate-on-scroll">
                <div className="glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                  <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                    What makes me different
                  </span>
                  <div className="about-diff-row">
                    {ABOUT_DIFFERENTIATORS.map(({ line, icon }) => (
                      <div key={line} className="about-diff-card">
                        <span className="about-diff-icon">
                          <iconify-icon className="block shrink-0" icon={icon} width="18" height="18" />
                        </span>
                        <span className="text-sm leading-relaxed text-neutral-200">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                  <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Philosophy
                  </span>
                  <div className="space-y-3">
                    {ABOUT_PHILOSOPHY.map((x) => (
                      <p key={x} className="about-quote">
                        {x}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="industries" className="mt-10 animate-on-scroll">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                  <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Industries
                  </span>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    {ABOUT_INDUSTRIES.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-1 text-neutral-600">—</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div id="direction" className="mt-10 animate-on-scroll">
              <div className="glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Current direction
                </span>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {ABOUT_CURRENT_DIRECTION.map((x) => (
                    <div key={x} className="rounded-xl border border-white/10 bg-neutral-950/40 p-5">
                      <p className="text-sm leading-relaxed text-neutral-300">{x}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 animate-on-scroll">
              <div className="glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Leadership & groups
                </span>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_LEADERSHIP_GROUPS.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-neutral-300"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-24 section-elevated">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(239,68,68,0.14),transparent_65%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="glass-panel glass-panel--premium rounded-2xl border border-white/10 p-10 text-center">
              <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                Ready to work together?
              </span>
              <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
                Let’s build the system.
              </h2>
              <p className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-neutral-400">
                If you want something that looks good and converts, with automation behind it so it stays consistent, book a strategy call.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="cta-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-sm font-medium text-neutral-950 transition-all btn-shimmer hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
                >
                  Book a strategy call
                  <iconify-icon icon="solar:arrow-right-up-linear" />
                </a>
                <a
                  href="/#work"
                  className="glow-border inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-9 py-4 text-sm font-medium text-white transition-all hover:bg-white/[0.06]"
                >
                  See case studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="relative border-t border-white/10 bg-black py-12 md:py-14"
        style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), #000000)' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex flex-col gap-8 pt-6">
            <div className="flex justify-center md:justify-start">
              <img
                src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png"
                alt="Brian Marshall"
                className="h-16 w-auto opacity-70 md:h-20"
              />
            </div>
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <span className="text-center font-mono text-sm tracking-wider text-neutral-500 md:text-left">
                  © 2026 Brian Marshall
                </span>
                <span className="text-center font-mono text-xs italic text-neutral-600 md:text-left">
                  Creative Systems Designer. And founder of AreoClient.
                </span>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden h-px w-12 bg-gradient-to-r from-transparent to-white/10 md:block" />
                <a
                  href="https://www.linkedin.com/in/brian-marshall-80a513144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link group relative flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-white/20"
                >
                  <iconify-icon
                    icon="mdi:linkedin"
                    className="text-base text-neutral-400 transition-colors group-hover:text-white"
                  />
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 transition-colors group-hover:text-white">
                    LinkedIn
                  </span>
                </a>
                <div className="hidden h-px w-12 bg-gradient-to-l from-transparent to-white/10 md:block" />
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

