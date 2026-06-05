import { AOF_LANDING_PATH } from './site'

export const ABOUT_META = {
  title: 'About',
  description:
    'Brian Marshall is a Business Systems Architect. He maps owner-operated businesses across 13 AOF blocks, then builds CRM, automation, AI, and integration infrastructure that scales without the owner in every loop.',
  keywords:
    'Brian Marshall, business systems architect, AOF Master Audit, operations mapping, CRM automation, AreoClient',
} as const

export const ABOUT_ROLE_TITLE = 'Brian Marshall'

export const ABOUT_ROLE_PILLS = [
  'Business Systems Architect',
  'Operations & Automation',
  'CRM · AI · Integrations',
] as const

export const ABOUT_BIO_LINES = [
  'I learned early: bad input equals bad output. No amount of polish fixes a broken signal.',
  'Every business with real revenue eventually hits the wall: growth without systems to support it.',
  'Today I map operations across 13 blocks in the AOF Master Audit, then build the infrastructure so the business runs without the owner in every loop.',
]

export const ABOUT_SKILL_ICONS: Record<string, string> = {
  'Business Systems Architecture': 'solar:layers-minimalistic-linear',
  'Workflow & Automation': 'solar:settings-linear',
  'CRM & Pipeline Design': 'solar:graph-up-linear',
  'Web Development': 'solar:code-circle-linear',
}

export const ABOUT_SKILLS = [
  { label: 'Business Systems Architecture', percent: 95 },
  { label: 'Workflow & Automation', percent: 92 },
  { label: 'CRM & Pipeline Design', percent: 90 },
  { label: 'Web Development', percent: 88 },
] as const

export const ABOUT_SECTIONS = [
  { id: 'profile', label: 'Profile' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'systems', label: 'Systems' },
  { id: 'stack', label: 'Stack' },
] as const

export const ABOUT_POSITIONING_LINE =
  'I map what\u2019s broken, architect what to build, and install the systems that make revenue predictable.'

export const ABOUT_SYSTEMS_INTRO = {
  lead: 'The AOF Master Audit is where every engagement starts: 13 blocks that diagnose, design, and decide before a single tool gets touched.',
  support: 'Then I build CRM, automation, AI, and integrations as one connected system. I don\u2019t sell tools. I build infrastructure businesses run on.',
} as const

export const ABOUT_WHAT_I_DO = [
  'Map businesses with the AOF Master Audit (13-block operational blueprint)',
  'Design CRM pipelines with clear stage ownership and triggers',
  'Automate lead handling, follow-up, booking, and payment flows',
  'Implement AI for qualification, routing, and customer communication',
  'Build conversion-focused websites and funnels',
  'Connect tools and data flows across the stack',
  'Scope and price builds before anything gets implemented',
] as const

export const ABOUT_WHAT_I_DO_ICONS: Record<string, string> = {
  'Map businesses with the AOF Master Audit (13-block operational blueprint)': 'solar:document-text-linear',
  'Design CRM pipelines with clear stage ownership and triggers': 'solar:layers-minimalistic-linear',
  'Automate lead handling, follow-up, booking, and payment flows': 'solar:settings-minimalistic-linear',
  'Implement AI for qualification, routing, and customer communication': 'solar:cpu-bolt-linear',
  'Build conversion-focused websites and funnels': 'solar:window-frame-linear',
  'Connect tools and data flows across the stack': 'solar:link-circle-linear',
  'Scope and price builds before anything gets implemented': 'solar:tag-price-linear',
}

export const ABOUT_AREOCLIENT = {
  name: 'AreoClient',
  subtitle:
    'Unified business operating system for owner-operated service businesses: pipelines, automations, AI follow-up, and integrations built as one connected infrastructure.',
  replaces: ['Manual follow-up', 'Missed leads', 'Disconnected tools', 'Owner as bottleneck'],
  installs: [
    'Full pipeline visibility from inquiry to revenue',
    'Automated follow-up so no lead goes untouched',
    'AI-assisted qualification and routing',
    'CRM pipelines with clear ownership',
    'Conversion-focused sites and funnels',
    'Owner removed from repetitive operational decisions',
  ],
} as const

export const ABOUT_PATHS = {
  aof: {
    eyebrow: 'Owner-operated businesses',
    text: 'Real revenue but broken operations? Start with the AOF Master Audit: a 13-block blueprint mapped, sequenced, and priced before anything gets built.',
    cta: 'Explore the Master Audit',
    path: AOF_LANDING_PATH,
  },
  resources: {
    eyebrow: 'Coaches & experts',
    text: 'Packaging your knowledge into a sellable offer? Browse the Workbook and Blueprint on Resources.',
    cta: 'View Resources',
    path: '/shop',
  },
} as const

export const ABOUT_FOOTER_TAGLINE = 'Business Systems Architect · Founder of AreoClient'
