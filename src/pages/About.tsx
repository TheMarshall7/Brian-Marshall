import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import AofDocumentCover from '../components/aof/AofDocumentCover'
import Navigation from '../components/Navigation'
import {
  ABOUT_AREOCLIENT,
  ABOUT_BIO_LINES,
  ABOUT_FOOTER_TAGLINE,
  ABOUT_META,
  ABOUT_PATHS,
  ABOUT_POSITIONING_LINE,
  ABOUT_ROLE_PILLS,
  ABOUT_ROLE_TITLE,
  ABOUT_SECTIONS,
  ABOUT_SKILL_ICONS,
  ABOUT_SKILLS,
  ABOUT_SYSTEMS_INTRO,
  ABOUT_WHAT_I_DO,
  ABOUT_WHAT_I_DO_ICONS,
} from '../constants/aboutContent'
import { HOME_HERO } from '../constants/homeContent'
import { AOF_LANDING_PATH, STRATEGY_CALL_PATH } from '../constants/site'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type CredentialCard = {
  title: string
  org: string
  yearOrPeriod: string
  description: string
  lead?: string
  featured?: boolean
}
type CredentialTab = 'education' | 'certifications' | 'experience'

const ABOUT_CREDENTIALS: {
  education: CredentialCard[]
  certifications: CredentialCard[]
  experience: CredentialCard[]
} = {
  education: [
    {
      title: 'Bachelor of Music (B.Mus)',
      org: 'Western University',
      yearOrPeriod: '2015-2020',
      lead: 'Classical discipline applied to modern creative work.',
      description: 'Theory, composition, and performance. Foundation for structured craft under pressure.',
    },
    {
      title: 'Dual Degree: Music Recording Arts (MRA)',
      org: 'Fanshawe College',
      yearOrPeriod: '2017-2020',
      lead: 'Studio-grade audio workflow from day one.',
      description: 'Recording, engineering, and production pipelines you can run in professional rooms.',
    },
  ],
  certifications: [
    {
      title: 'LLQP: Life License Qualification Program',
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
      title: 'safeTALK: Suicide Alertness Training',
      org: '',
      yearOrPeriod: 'Apr 2019',
      lead: 'Trained to notice and respond to suicide risk.',
      description: 'Practical alertness for community and one-to-one contexts.',
    },
  ],
  experience: [
    {
      title: 'Business Systems Architect',
      org: 'Freelance · AreoClient',
      yearOrPeriod: '2020-present',
      featured: true,
      lead: 'Map broken operations, then build the infrastructure that fixes them.',
      description:
        'AOF Master Audits, CRM and pipeline architecture, workflow automation, AI implementation, and full-stack builds for owner-operated businesses with real revenue.',
    },
    {
      title: 'Licensed Insurance Agent',
      org: 'Transamerica',
      yearOrPeriod: '',
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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-red-500/30 selection:text-white">
      <Helmet>
        <title>{ABOUT_META.title}</title>
        <meta name="description" content={ABOUT_META.description} />
        <link rel="canonical" href="https://brianmarshall.dev/about" />
      </Helmet>

      <div className="bg-grain" />
      <Navigation />

      <main className="about-page pt-24 sm:pt-28 md:pt-32">
        <div className="relative -mt-28 md:-mt-32 pt-28 md:pt-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute inset-0 tech-grid tech-grid--soft" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(239,68,68,0.12),transparent_60%)]" />
          </div>

          <div className="relative z-10">
            <div className="about-section-nav">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
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
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="order-2 animate-on-scroll lg:order-none lg:col-span-5">
                <div className="flex w-full justify-center lg:justify-end lg:pr-2">
                  <img
                    src={encodeURI('/Brian Marshall Photo (CIRCLE N SHADOW).png')}
                    alt="Brian Marshall portrait"
                    width={320}
                    height={320}
                    loading="eager"
                    fetchpriority="high"
                    className="about-hero-image h-auto w-full max-w-[min(100%,520px)] object-contain object-center select-none sm:max-w-[min(100%,580px)] lg:max-w-[min(100%,640px)]"
                  />
                </div>
              </div>

              <div className="order-1 animate-on-scroll lg:order-none lg:col-span-7">
                <span className="section-eyebrow mb-4 block text-neutral-500">
                  Business Systems Architect
                </span>
                <h1 className="font-bricolage text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-6xl">
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

        <section id="credentials" className="section-ambient section-ambient--soft relative overflow-hidden py-16 section-standard md:py-24">
          <div className="section-ambient__glow" aria-hidden />
          <div className="section-ambient__grid" aria-hidden />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="animate-on-scroll">
                <span className="section-eyebrow mb-4 block text-neutral-500">
                  Credentials
                </span>
                <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
                  Proof, training, and real work.
                </h2>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-neutral-400">
                  Systems architecture, automation, and operations work alongside a background in music, audio, and
                  client-facing advisory.
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

        <section className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-12 md:py-16">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="glass-panel flex flex-col items-start justify-between gap-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 md:p-8">
                <AofDocumentCover variant="flat" size="sm" className="w-full" />
                <div>
                  <p className="section-eyebrow mb-2">{ABOUT_PATHS.aof.eyebrow}</p>
                  <p className="text-sm leading-relaxed text-neutral-300 md:text-base">{ABOUT_PATHS.aof.text}</p>
                </div>
                <Link
                  to={ABOUT_PATHS.aof.path}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400"
                >
                  {ABOUT_PATHS.aof.cta}
                  <iconify-icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
              <div className="glass-panel flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 p-6 md:p-8">
                <div>
                  <p className="section-eyebrow mb-2">{ABOUT_PATHS.resources.eyebrow}</p>
                  <p className="text-sm leading-relaxed text-neutral-300 md:text-base">{ABOUT_PATHS.resources.text}</p>
                </div>
                <Link
                  to={ABOUT_PATHS.resources.path}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:border-red-500/30 hover:bg-white/5"
                >
                  {ABOUT_PATHS.resources.cta}
                  <iconify-icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="systems"
          className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-16 section-standard md:py-24"
        >
          <div className="about-systems-grid pointer-events-none absolute inset-0 section-ambient__grid" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_58%_at_50%_0%,rgba(239,68,68,0.072),transparent_74%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5 animate-on-scroll">
                <span className="section-eyebrow mb-4 block text-neutral-500">
                  Core positioning
                </span>
                <h2 className="about-gradient-headline font-bricolage text-3xl font-medium tracking-tight md:text-5xl">
                  {ABOUT_POSITIONING_LINE}
                </h2>
                <p className="mt-5 max-w-prose text-base leading-relaxed text-neutral-400">
                  {ABOUT_SYSTEMS_INTRO.lead}
                </p>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-neutral-500">
                  {ABOUT_SYSTEMS_INTRO.support}
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
              <div className="lg:col-span-12 animate-on-scroll">
                <div className="group glass-panel glass-panel--premium relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:border-red-500/25 md:p-8">
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"
                    aria-hidden
                  />
                  <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                        Built in production
                      </span>
                      <h3 className="font-bricolage text-2xl font-medium text-white md:text-3xl">
                        {ABOUT_AREOCLIENT.name}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400">{ABOUT_AREOCLIENT.subtitle}</p>
                    </div>
                    <a
                      href="https://areoclient.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-xs font-medium text-white transition-all hover:border-red-500/35 hover:bg-red-500/10 hover:text-white sm:w-auto sm:justify-start"
                    >
                      areoclient.com
                      <iconify-icon icon="solar:arrow-right-up-linear" width="14" className="text-red-400/90" />
                    </a>
                  </div>

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
            </div>

            <div id="stack" className="mt-10 animate-on-scroll">
              <div className="glass-panel glass-panel--quiet rounded-2xl border border-white/10 p-7 md:p-8">
                <span className="section-eyebrow mb-4 block text-neutral-500">Tech stack</span>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {ABOUT_TECH_STACK.map((group) => (
                    <div key={group.title} className="rounded-xl border border-white/10 bg-neutral-950/40 p-5">
                      <h4 className="font-medium text-white">{group.title}</h4>
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
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-16 section-elevated md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(239,68,68,0.14),transparent_65%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="glass-panel glass-panel--premium rounded-2xl border border-white/10 p-10 text-center">
              <span className="section-eyebrow mb-4 block text-neutral-500">
                Ready to work together?
              </span>
              <h2 className="font-bricolage text-3xl font-medium tracking-tight text-white md:text-5xl">
                Let&apos;s map what&apos;s broken.
              </h2>
              <p className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-neutral-400">
                Owner-operated with real revenue but broken operations? Book a qualifying call. No pitch, just clarity.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to={STRATEGY_CALL_PATH}
                  className="cta-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-sm font-medium text-neutral-950 transition-all btn-shimmer hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
                >
                  {HOME_HERO.primaryCta}
                  <iconify-icon icon="solar:arrow-right-up-linear" />
                </Link>
                <Link
                  to={AOF_LANDING_PATH}
                  className="glow-border inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-9 py-4 text-sm font-medium text-white transition-all hover:bg-white/[0.06]"
                >
                  {ABOUT_PATHS.aof.cta}
                  <iconify-icon icon="solar:document-text-linear" width="18" />
                </Link>
                <a
                  href="/#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-9 py-4 text-sm font-medium text-neutral-400 transition-all hover:border-white/20 hover:text-white"
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
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
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
                  {ABOUT_FOOTER_TAGLINE}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden h-px w-12 bg-gradient-to-r from-transparent to-white/10 md:block" />
                <a
                  href="https://www.linkedin.com/in/brianmarshallca/"
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

    </div>
  )
}

