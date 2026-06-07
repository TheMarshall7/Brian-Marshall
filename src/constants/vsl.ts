import {
  AOF_BUILD_CREDIT_NOTE,
  AOF_MASTER_AUDIT_PRICE_LABEL,
  AOF_PURCHASE_PATH,
  STRATEGY_CALL_PATH,
} from './site'

/**
 * VSL landing page — AOF / Business Systems Architect positioning.
 *
 * Env (optional):
 *   VITE_VSL_VIDEO_EMBED_URL       - YouTube/Vimeo embed URL (loads on click)
 *   VITE_VSL_VIDEO_POSTER_URL      - Thumbnail / poster image
 *   VITE_VSL_TESTIMONIAL_EMBED_URL - Optional testimonial video embed
 */

export const VSL_META = {
  title: 'Free Training · Business Systems',
  description:
    'Free training for owner-operated businesses with real revenue. See where leads stall, pipelines break, and how the AOF Master Audit maps your operations before anything gets built.',
  keywords:
    'business systems training, AOF Master Audit, operations audit, owner-operated business, CRM automation, free qualifying call',
} as const

export const VSL_VIDEO_EMBED_URL =
  import.meta.env.VITE_VSL_VIDEO_EMBED_URL?.trim() || ''

export const VSL_VIDEO_POSTER_URL =
  import.meta.env.VITE_VSL_VIDEO_POSTER_URL?.trim() || ''

export const VSL_TESTIMONIAL_EMBED_URL =
  import.meta.env.VITE_VSL_TESTIMONIAL_EMBED_URL?.trim() || ''

export const VSL_PHOTO_SRC = '/Brian Marshall Photo(transparent).png'

export const VSL_HOST_NAME = 'Brian Marshall'

export const VSL_HOST_TAGLINE = 'Business Systems Architect · Founder of AreoClient'

export const VSL_ABOUT_HEADLINE = 'Who maps and builds this with you?'

export const VSL_ABOUT_BIO =
  `I find where owner-operated businesses lose revenue, map the full operational blueprint in 13 AOF blocks, and build the CRM, automation, AI, and integration infrastructure that fixes it. Start with a free qualifying call or reserve the ${AOF_MASTER_AUDIT_PRICE_LABEL} AOF Master Audit when you are ready for the full blueprint.`

export const VSL_HEADLINE =
  'Your Revenue Grew. Your Systems Didn\u2019t. Here\u2019s How to Fix the Backend.'

export const VSL_SUBHEADLINE =
  'Free training for owner-operated businesses generating real revenue. See where opportunity enters, where it stalls, and what a properly architected operations stack looks like before you invest in another tool.'

export const VSL_FOLD_CTA_LABEL = 'See your next steps'

export const VSL_HERO_FUD =
  'Free training · No email required to watch · 15-minute qualifying call available after'

export const VSL_TRUST_LINE = 'Trusted by owner-operated businesses generating real revenue'

export type VslTrustAvatar = { src: string; alt: string }

export const VSL_TRUST_AVATARS: VslTrustAvatar[] = [
  {
    src: 'https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb90e27fbf24b6.png',
    alt: 'Client',
  },
  {
    src: 'https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702dd4fb9026bbbf24b5.png',
    alt: 'Client',
  },
  {
    src: 'https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6970702d15885e283f324bca.png',
    alt: 'Client',
  },
]

export type VslStat = { value: string; label: string }

export const VSL_STATS: VslStat[] = [
  { value: '13', label: 'AOF diagnostic blocks' },
  { value: AOF_MASTER_AUDIT_PRICE_LABEL, label: 'Master Audit · credited toward build' },
  { value: '15 min', label: 'Free qualifying call' },
]

export const VSL_PAIN_HEADLINE = 'If any of this sounds familiar…'

export const VSL_PAINS: string[] = [
  'Leads come in but follow-up is slow, manual, or inconsistent.',
  'The owner is still the bottleneck for routine operational decisions.',
  'Tools do not talk to each other and revenue leaks between the cracks.',
]

export const VSL_PAIN_BRIDGE =
  'That is not a hustle problem. It is an infrastructure problem. The AOF Master Audit maps your business in 13 blocks so you know what to build, in what order, and what it costs before a single platform gets touched.'

export const VSL_OFFERS_HEADLINE = 'Ready to move? Here are your two paths.'

export const VSL_OFFERS_INTRO =
  'Start with a free qualifying call for clarity. Reserve the AOF Master Audit when you want the full 13-block blueprint and build scope.'

export type VslOfferTier = {
  id: 'qualify' | 'audit'
  eyebrow?: string
  badge?: string
  name: string
  whoItIsFor: string
  whatTheyGet: string[]
  timeline: string
  guarantee?: string
  priceLabel: string
  ctaLabel: string
  applyUrl: string
  applyFud: string
  featured?: boolean
  external?: boolean
}

export const VSL_OFFERS: VslOfferTier[] = [
  {
    id: 'qualify',
    eyebrow: 'Step 1',
    name: 'Free 15-Minute Qualifying Call',
    whoItIsFor:
      'Owner-operated businesses with real revenue that want clarity before committing to an audit or build.',
    whatTheyGet: [
      'No pitch — open-ended diagnosis of where the business breaks',
      'Lead entry, pipeline stalls, and owner bottlenecks surfaced fast',
      'Clear direction on whether the AOF Master Audit is the right next step',
      'You leave with more clarity regardless of outcome',
    ],
    timeline: '15 minutes',
    priceLabel: 'Free',
    ctaLabel: 'Book Your Qualifying Call',
    applyUrl: STRATEGY_CALL_PATH,
    applyFud: 'No credit card · No obligation · Video call',
    external: false,
  },
  {
    id: 'audit',
    eyebrow: 'Step 2',
    badge: 'The Fix',
    featured: true,
    name: 'AOF Master Audit',
    whoItIsFor:
      'Serious buyers ready for a fully custom 13-block operational blueprint — pipelines, workflows, AI, integrations, priorities, and line-item build pricing.',
    whatTheyGet: [
      'Live audit session mapping your business in real time',
      'Developer-ready deliverable you keep either way',
      'Priority build sequence with full cost transparency',
      '6–8 hours of architecture across 13 diagnostic blocks',
      AOF_BUILD_CREDIT_NOTE,
    ],
    timeline: 'Live session + polished deliverable',
    priceLabel: AOF_MASTER_AUDIT_PRICE_LABEL,
    ctaLabel: 'Reserve Your Audit Session',
    applyUrl: AOF_PURCHASE_PATH,
    applyFud: 'Secure booking · All sales final · You own the document',
    external: false,
  },
]

export const VSL_FREEBIE = {
  lead: 'Not ready to book? Run the free self-audit first — score your systems and get the Where to Start PDF.',
  cta: 'Take the self-audit',
  path: '/aof',
}

export const VSL_PROOF_HEADLINE = 'Systems that hold under pressure'

export const VSL_PROOF_CTA = 'Book your free qualifying call'

export type VslCompareCell = boolean | 'partial' | string

export type VslCompareRow = {
  label: string
  diy: VslCompareCell
  agency: VslCompareCell
  aof: VslCompareCell
}

export const VSL_COMPARE_HEADLINE = 'How this compares to your other options'

export const VSL_COMPARE_COLUMNS = {
  diy: 'Patchwork DIY',
  agency: 'Generic agency',
  aof: 'AOF Master Audit',
} as const

export const VSL_COMPARE_ROWS: VslCompareRow[] = [
  { label: 'Full operations map before build', diy: false, agency: 'partial', aof: true },
  { label: 'Pipeline + automation sequenced', diy: false, agency: 'partial', aof: true },
  { label: 'Line-item build pricing upfront', diy: false, agency: false, aof: true },
  { label: 'Owner removed from repeat loops', diy: 'partial', agency: 'partial', aof: true },
  { label: 'Built for owner-operated revenue', diy: false, agency: false, aof: true },
  { label: 'You keep the blueprint either way', diy: false, agency: false, aof: true },
]

export type VslTestimonial = {
  name: string
  role: string
  quote: string
  result: string
  source?: string
  avatarSrc?: string
}

export const VSL_TESTIMONIALS: VslTestimonial[] = [
  {
    name: 'Operations lead',
    role: 'Owner-operated services business',
    quote:
      'We finally saw where leads were dying between inquiry and booked job. The audit made the build scope obvious instead of another guessing game.',
    result: 'Pipeline mapped end-to-end',
    source: 'Client engagement',
  },
  {
    name: 'Founder',
    role: 'Multi-location operator',
    quote:
      'I was in every follow-up loop. After the systems build, routine decisions moved without me and speed-to-lead finally matched our ad spend.',
    result: 'Owner out of repeat ops',
    source: 'AreoClient deployment',
  },
  {
    name: 'Agency principal',
    role: 'B2B professional services',
    quote:
      'We had a CRM and automations, but nothing was sequenced. The 13-block document became the spec our dev team actually used.',
    result: 'Blueprint → build without rework',
    source: 'Master Audit deliverable',
  },
]

export const VSL_CLOSER = {
  label: 'Ready when you are',
  headline: 'Stop losing revenue to broken systems',
  bullets: [
    'Free qualifying call for clarity — no pitch',
    'AOF Master Audit maps 13 blocks before anything gets built',
    'CRM, automation, AI, and integrations scoped with real pricing',
    'You keep the document even if you do not move forward',
    AOF_BUILD_CREDIT_NOTE,
  ],
  cta: 'See your next steps',
  fud: `Free call · ${AOF_MASTER_AUDIT_PRICE_LABEL} audit reserves your live session · No surprises on scope`,
}

export type VslFaqItem = { question: string; answer: string }

export const VSL_FAQ: VslFaqItem[] = [
  {
    question: 'Who is this for?',
    answer:
      'Owner-operated businesses generating real revenue that have outgrown how they currently operate. If everything still runs through you and growth adds weight instead of momentum, this is built for you.',
  },
  {
    question: 'What is the AOF Master Audit?',
    answer:
      'A fully custom 13-block operational blueprint: pipelines, workflows, automations, AI opportunities, integrations, priorities, and line-item build pricing. Developer-ready. You own it regardless of whether we work together.',
  },
  {
    question: 'Why start with a free qualifying call?',
    answer:
      'Fifteen minutes, no pitch. We map where the business breaks and whether the Master Audit is the right next step. You leave with clarity either way.',
  },
  {
    question: `Does the ${AOF_MASTER_AUDIT_PRICE_LABEL} count toward the build?`,
    answer: `Yes. ${AOF_BUILD_CREDIT_NOTE}`,
  },
  {
    question: 'What if I do not move forward after the audit?',
    answer:
      'You keep the Master Audit. Take it to any developer or agency. You will also have a clear picture of what to fix first on your own.',
  },
  {
    question: 'How is this different from hiring a generic agency?',
    answer:
      'Agencies often sell tactics or tools without mapping how revenue actually moves through your business. The AOF process diagnoses first, sequences the build, and prices it before anything is implemented.',
  },
  {
    question: 'What about the coach products on the site?',
    answer:
      'The Offer Kickstart Workbook and Knowledge to Cash Blueprint are separate resources for coaches packaging expertise. This training is for businesses with existing revenue and broken operations.',
  },
]

/** Append autoplay=1 to common embed URLs after the user clicks play. */
export function vslEmbedUrlWithAutoplay(embedUrl: string): string {
  if (!embedUrl) return ''
  if (embedUrl.includes('autoplay=1')) return embedUrl
  const sep = embedUrl.includes('?') ? '&' : '?'
  return `${embedUrl}${sep}autoplay=1`
}
