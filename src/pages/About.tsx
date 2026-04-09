import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type Skill = { label: string; percent: number }
type CredentialCard = { title: string; org: string; yearOrPeriod: string; description: string }
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
  { label: 'Sound & Visual Production', percent: 90 },
  { label: 'Web Development', percent: 85 },
  { label: 'Coaching & Financial Services', percent: 88 },
]

const ABOUT_SECTIONS = [
  { id: 'profile', label: 'Profile' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'systems', label: 'Systems' },
  { id: 'stack', label: 'Stack' },
  { id: 'builds', label: 'Builds' },
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
      description: 'Classical foundation + applied theory, composition, and performance.',
    },
    {
      title: 'Dual Degree: Music Recording Arts (MRA)',
      org: 'Fanshawe College',
      yearOrPeriod: '2017–2020',
      description: 'Audio production, recording, engineering, and professional studio workflow.',
    },
  ],
  certifications: [
    {
      title: 'LLQP – Life License Qualification Program',
      org: 'FSRA Ontario',
      yearOrPeriod: 'May 2024',
      description: 'Life insurance licensing and client-facing advisory fundamentals.',
    },
    {
      title: 'Dante Level 1 Certification',
      org: 'Audinate',
      yearOrPeriod: 'Jan 2023',
      description: 'Digital audio networking fundamentals for modern studio/live systems.',
    },
    {
      title: 'safeTALK – Suicide Alertness Training',
      org: '—',
      yearOrPeriod: 'Apr 2019',
      description: 'Awareness training to notice and respond to signs of suicide risk.',
    },
  ],
  experience: [
    {
      title: 'Music Teacher',
      org: 'School of Musical Arts',
      yearOrPeriod: '2022–Present',
      description:
        'Student-centered lessons across instruments + styles; personalized practice plans; recital prep for first-time performers.',
    },
    {
      title: 'Licensed Insurance Agent',
      org: 'Transamerica',
      yearOrPeriod: '2024–Present',
      description:
        'Financial education + client planning; simplified complex policies into clear action plans; growth via referrals and digital outreach.',
    },
    {
      title: 'Audio Producer (Freelance)',
      org: 'Remote / London, ON',
      yearOrPeriod: '2020–Present',
      description:
        'Mixing + mastering across genres; arrangement and vocal production guidance; sample packs and sound libraries.',
    },
    {
      title: 'Audio Engineer',
      org: 'Western University',
      yearOrPeriod: '2019',
      description:
        'Engineered recording sessions; edited performances in pro DAWs; maintained bookings + studio setup; taught audio production classes.',
    },
    {
      title: 'Orientation Programming Assistant',
      org: 'Western University',
      yearOrPeriod: '2018',
      description:
        'Organized events for 100+ new students; youth mentorship; conflict resolution; inclusive community building.',
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

const ABOUT_DIFFERENTIATORS: string[] = [
  'Builder + operator mindset (not “just design”)',
  'ROI before aesthetics',
  'Reduce complexity instead of adding tools',
  'Tech + psychology + offer design',
  'Systems people actually use daily',
]

const ABOUT_DIFFERENTIATOR_ICONS: Record<string, string> = {
  'Builder + operator mindset (not “just design”)': 'solar:hammer-linear',
  'ROI before aesthetics': 'solar:target-linear',
  'Reduce complexity instead of adding tools': 'solar:layers-linear',
  'Tech + psychology + offer design': 'solar:brain-linear',
  'Systems people actually use daily': 'solar:widget-5-linear',
}

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

const ABOUT_NOTABLE_BUILDS: { title: string; bullets: string[] }[] = [
  {
    title: 'Music Studio System',
    bullets: ['Solved messy scheduling + follow-ups', 'Built CRM + booking + automation flow', 'Structured ops + time saved'],
  },
  {
    title: 'Creator Ecosystem (Maria Amiouni)',
    bullets: ['Website + course funnel system', 'Teachable + CRM + Substack integration', 'Automated onboarding + nurture'],
  },
  {
    title: 'AreoScrape (Lead Engine)',
    bullets: ['Reddit → email scraping + enrichment', 'Lead pipeline for outreach', 'CRM-ready lead lists fast'],
  },
  {
    title: 'AI Outreach Systems',
    bullets: ['Multi-channel (SMS, email, LinkedIn)', 'Fast-response booking systems', 'Speed + conversion focus'],
  },
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
  return (
    <div className="animate-on-scroll">
      <div className="mb-6 flex items-center gap-3 text-neutral-300">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900/60 text-red-400 shadow-inner ring-1 ring-white/5">
          <iconify-icon icon={icon} width="18" />
        </span>
        <h3 className="font-bricolage text-lg font-medium tracking-tight text-white">{title}</h3>
      </div>

      <div className="grid gap-4">
        {items.map((card) => (
          <div
            key={`${title}-${card.title}-${card.org}`}
            className={`group glass-panel rounded-2xl border border-white/10 p-6 transition-all duration-500 card-lift hover:border-red-500/25 about-credential-card ${accentClass}`}
          >
            <h4 className="text-white font-medium leading-snug">{card.title}</h4>
            <div className="mt-2 flex items-center justify-between gap-4 text-xs">
              <span className="text-neutral-400">{card.org}</span>
              <span className="text-neutral-600">{card.yearOrPeriod}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  useScrollAnimation()
  const [activeSection, setActiveSection] = useState<(typeof ABOUT_SECTIONS)[number]['id']>('profile')
  const [activeCredentialTab, setActiveCredentialTab] = useState<CredentialTab>('experience')

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
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-25% 0px -65% 0px',
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
          content="Interactive CV: background, skills, education, certifications, and experience."
        />
        <link rel="canonical" href="https://brianmarshall.dev/about" />
      </Helmet>

      <div className="bg-grain" />
      <Navigation />

      <main className="pt-28 md:pt-32">
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
          className="relative overflow-hidden border-b border-white/5 py-16 md:py-20 tech-grid"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(239,68,68,0.12),transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 animate-on-scroll">
                <div className="relative">
                  <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
                  <div className="glass-panel overflow-hidden rounded-2xl border border-white/10">
                    <div className="relative aspect-[3/4] w-full bg-neutral-900/40">
                    <img
                      src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970477bd4fb90ebccb8a72c.png"
                      alt="Brian Marshall portrait"
                      className="about-hero-image h-full w-full object-cover opacity-90"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
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

                <p className="mt-5 text-sm leading-relaxed text-neutral-400 md:text-base">
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
                      <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
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

        <section id="credentials" className="section-ambient relative overflow-hidden py-24 section-standard">
          <div className="section-ambient__glow opacity-70" aria-hidden />
          <div className="section-ambient__grid opacity-25" aria-hidden />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="animate-on-scroll">
                <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Credentials
                </span>
                <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
                  Proof, training, and real work.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
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
                  icon="solar:graduation-cap-linear"
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
        </section>

        <section
          id="systems"
          className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-24 section-standard"
        >
          <div className="pointer-events-none absolute inset-0 section-ambient__grid opacity-25" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(239,68,68,0.10),transparent_68%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5 animate-on-scroll">
                <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Core positioning
                </span>
                <h2 className="about-gradient-headline font-bricolage text-3xl font-medium tracking-tight md:text-5xl">
                  {ABOUT_POSITIONING_LINE}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
                  Websites. Web apps. AI-powered workflows. Audio. Everything is designed to convert, automate, and
                  scale.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500">
                  I don’t sell tools. I build infrastructure that businesses run on.
                </p>
              </div>

              <div className="lg:col-span-7 animate-on-scroll">
                <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
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
                <div className="group glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:border-red-500/25 md:p-8">
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
                <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
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
                <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
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
                <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
                  <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                    What makes me different
                  </span>
                  <div className="about-diff-row">
                    {ABOUT_DIFFERENTIATORS.map((x) => (
                      <div key={x} className="about-diff-card">
                        <span className="about-diff-icon">
                          <iconify-icon icon={ABOUT_DIFFERENTIATOR_ICONS[x] ?? 'solar:arrow-right-up-linear'} width="18" />
                        </span>
                        <span className="text-sm leading-relaxed text-neutral-200">{x}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
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

            <div id="builds" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5 animate-on-scroll">
                <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
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

              <div className="lg:col-span-7 animate-on-scroll">
                <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
                  <span className="mb-4 block text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Notable builds
                  </span>
                  <div className="story-rail mt-6">
                    {ABOUT_NOTABLE_BUILDS.map((b) => (
                      <div key={b.title} className="story-rail__node pl-1 mb-8 last:mb-0">
                        <span className="font-bricolage text-4xl font-medium md:text-5xl text-red-500/35">
                          {String(ABOUT_NOTABLE_BUILDS.findIndex((x) => x.title === b.title) + 1).padStart(2, '0')}
                        </span>
                        <div className="mt-3 rounded-2xl border border-white/10 bg-neutral-950/40 p-6 transition-all duration-500 hover:border-red-500/25">
                          <h4 className="text-white font-medium">{b.title}</h4>
                          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                            {b.bullets.map((x) => (
                              <li key={x} className="flex items-start gap-2">
                                <span className="mt-1 text-neutral-600">—</span>
                                <span>{x}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="direction" className="mt-10 animate-on-scroll">
              <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
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
              <div className="glass-panel rounded-2xl border border-white/10 p-7 md:p-8">
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
            <div className="glass-panel rounded-2xl border border-white/10 p-10 text-center">
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
    </div>
  )
}

