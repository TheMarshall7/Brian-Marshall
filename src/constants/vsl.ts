/**
 * VSL landing page config.
 *
 * Env (optional):
 *   VITE_VSL_VIDEO_EMBED_URL       - YouTube/Vimeo embed URL (loads on click)
 *   VITE_VSL_VIDEO_POSTER_URL      - Thumbnail image (Brian + headline overlay)
 *   VITE_VSL_APPLY_DWY_URL         - Done With You application URL
 *   VITE_VSL_APPLY_DFY_URL         - Done For You application URL
 *   VITE_VSL_TESTIMONIAL_EMBED_URL - Optional testimonial video embed
 */

export const VSL_VIDEO_EMBED_URL =
  import.meta.env.VITE_VSL_VIDEO_EMBED_URL?.trim() || ''

export const VSL_VIDEO_POSTER_URL =
  import.meta.env.VITE_VSL_VIDEO_POSTER_URL?.trim() || ''

export const VSL_APPLY_DWY_URL = import.meta.env.VITE_VSL_APPLY_DWY_URL?.trim() || ''

export const VSL_APPLY_DFY_URL = import.meta.env.VITE_VSL_APPLY_DFY_URL?.trim() || ''

export const VSL_TESTIMONIAL_EMBED_URL =
  import.meta.env.VITE_VSL_TESTIMONIAL_EMBED_URL?.trim() || ''

export const VSL_PHOTO_SRC = '/Brian Marshall Photo(transparent).png'

export const VSL_HOST_NAME = 'Brian Marshall'

export const VSL_HOST_TAGLINE = 'I build the Knowledge to Cash system for people'

export const VSL_ABOUT_HEADLINE = 'Who is building this with you?'

export const VSL_ABOUT_BIO =
  'I help people turn what they already know into a clear offer, lead magnet, and follow-up system so qualified prospects book calls without chasing. Done With You if you want to build alongside me; Done For You if you want the full system built in 90 days.'

export const VSL_HEADLINE =
  'Book 3-5 High-Ticket Clients Every Month Without Chasing Leads or Running Ads'

export const VSL_SUBHEADLINE =
  'If you have expertise but your calendar is still empty, this free training shows you the exact system people use to turn knowledge into booked calls in 90 days or less.'

export const VSL_FOLD_CTA_LABEL = 'See your options below'

export const VSL_HERO_FUD =
  'Free 14-min training · No email required to watch · No credit card'

export const VSL_TRUST_LINE = 'Trusted by 40+ people building booked calendars'

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
  { value: '40+', label: 'People served' },
  { value: '3-5', label: 'Booked calls per month (typical goal)' },
  { value: '60-day', label: 'DFY guarantee on booked calls' },
]

export const VSL_PAIN_HEADLINE = 'If any of this sounds familiar…'

export const VSL_PAINS: string[] = [
  'You post content but qualified prospects still do not book calls.',
  'Your calendar is inconsistent: great weeks, then nothing.',
  'You are tired of chasing DMs and hoping someone replies.',
]

export const VSL_PAIN_BRIDGE =
  'The Knowledge to Cash system fixes the gap between what you know and who books, with a clear offer, lead magnet, and follow-up built for people.'

export const VSL_OFFERS_HEADLINE = 'Ready to build this? Here are your two options.'

export type VslOfferTier = {
  id: 'dwy' | 'dfy'
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
}

export const VSL_OFFERS: VslOfferTier[] = [
  {
    id: 'dwy',
    name: 'The Knowledge to Cash Blueprint Coaching',
    whoItIsFor:
      'You want to build the system yourself, with Brian guiding every step.',
    whatTheyGet: [
      'Weekly coaching calls so you never get stuck',
      'Your offer, positioning, and pricing dialed in',
      'Lead magnet + follow-up sequence built alongside you',
      'A repeatable content plan that drives booked calls',
      'Accountability until the system is live',
    ],
    timeline: '90 days',
    priceLabel: 'Investment on application',
    ctaLabel: 'Apply for Coaching',
    applyUrl: VSL_APPLY_DWY_URL,
    applyFud: 'Quick application · We confirm fit on a call · No pressure',
  },
  {
    id: 'dfy',
    badge: 'Most Popular',
    featured: true,
    name: 'The Knowledge to Cash Build',
    whoItIsFor:
      'You want the entire system built for you so you can focus on your work, not tech.',
    whatTheyGet: [
      'Full offer build positioned for high-ticket clients',
      'Lead magnet + landing flow that captures the right people',
      'Email sequence that nurtures leads into booked calls',
      'Content strategy + call booking system wired up',
      'Webinar structure ready to fill your calendar',
    ],
    timeline: '90 days',
    guarantee:
      'If you do not have 3 booked calls within 60 days of launch, we keep building for free.',
    priceLabel: 'Investment starts on application',
    ctaLabel: 'Apply for Done For You',
    applyUrl: VSL_APPLY_DFY_URL,
    applyFud: 'Quick application · We confirm fit on a call · No pressure',
  },
]

export const VSL_FREEBIE = {
  lead:
    'Not ready to apply? Start with the free Offer Kickstart Workbook and nail your offer before you invest in the full system.',
  cta: 'Get the free workbook',
}

export type VslCompareCell = boolean | 'partial' | string

export type VslCompareRow = {
  label: string
  diy: VslCompareCell
  agency: VslCompareCell
  k2c: VslCompareCell
}

export const VSL_COMPARE_HEADLINE = 'How this compares to your other options'

export const VSL_COMPARE_COLUMNS = {
  diy: 'Doing it yourself',
  agency: 'Generic agency',
  k2c: 'Knowledge to Cash',
} as const

export const VSL_COMPARE_ROWS: VslCompareRow[] = [
  { label: 'Time to launch', diy: '6-12+ months', agency: '3-6 months', k2c: '90 days' },
  { label: 'Built for people', diy: false, agency: false, k2c: true },
  { label: 'Offer + positioning included', diy: false, agency: 'partial', k2c: true },
  { label: 'Lead magnet + email follow-up', diy: false, agency: 'partial', k2c: true },
  { label: 'Ongoing coaching / accountability', diy: false, agency: false, k2c: true },
  { label: 'Booked-call guarantee', diy: false, agency: false, k2c: true },
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
    name: 'Sarah M.',
    role: 'Business owner',
    quote:
      'I finally stopped guessing what to post. Within two weeks of launch I had calls on the calendar without cold outreach.',
    result: '3 booked calls in week one',
    source: 'Google review',
  },
  {
    name: 'James T.',
    role: 'Leadership consultant',
    quote:
      'Brian built the whole system while I focused on clients. The follow-up alone replaced hours of manual DMs every week.',
    result: 'Calendar filled without paid ads',
    source: 'Client interview',
  },
  {
    name: 'Priya K.',
    role: 'Health & wellness professional',
    quote:
      'I had content but no pipeline. Now I have a clear offer, a freebie, and automation. Prospects book while I sleep.',
    result: 'Warm leads on autopilot',
    source: 'LinkedIn',
  },
]

export const VSL_CLOSER = {
  label: 'Ready when you are',
  headline: 'Get the system that turns your expertise into booked high-ticket calls',
  bullets: [
    'A clear offer prospects understand in seconds',
    'Lead magnet + follow-up that converts, not just collects emails',
    'Content and booking flow built for people, not generic templates',
    'Done With You or Done For You. You pick how hands-on you want to be',
    '90-day timeline with accountability (and a guarantee on DFY)',
  ],
  cta: 'See your options and apply',
  fud: 'Free to apply · Short application · We confirm fit on a call',
}

export type VslFaqItem = { question: string; answer: string }

export const VSL_FAQ: VslFaqItem[] = [
  {
    question: 'What is the difference between Done With You and Done For You?',
    answer:
      'Done With You is coaching: you build alongside Brian with weekly calls and accountability. Done For You is the full build: offer, freebie, sequences, content strategy, call system, and webinar structure, done for you in 90 days. If you are busy and want results without doing the technical work, Done For You is the obvious fit.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'The program is built around a 90-day timeline. On Done For You, if you do not have 3 booked calls within 60 days of launch, we keep building for free until you do.',
  },
  {
    question: 'What if I do not have a big audience yet?',
    answer:
      'You do not need a huge following. The system is designed to convert the right people into booked calls with a clear offer, lead magnet, and follow-up, not vanity metrics.',
  },
  {
    question: 'Is this worth the investment?',
    answer:
      'If one high-ticket client covers your investment, the math is simple. The system is built to get you booked calls, not more content for content’s sake. We confirm fit on a call before you commit.',
  },
  {
    question: 'How is this different from hiring a generic marketing agency?',
    answer:
      'Agencies often sell funnels or ads without expertise-specific positioning. This is a full Knowledge to Cash system: offer, lead magnet, sequences, and booking flow, built for how people actually sell high-ticket.',
  },
  {
    question: 'What if I am not technical?',
    answer:
      'That is exactly why Done For You exists. We build and wire the system for you. On Done With You, Brian walks you through each step. No coding required.',
  },
  {
    question: 'How do I apply?',
    answer:
      'Choose Done With You or Done For You above and click Apply. You will go to a short application: no long forms, no pressure. We will confirm fit on a call.',
  },
]

/** Append autoplay=1 to common embed URLs after the user clicks play. */
export function vslEmbedUrlWithAutoplay(embedUrl: string): string {
  if (!embedUrl) return ''
  if (embedUrl.includes('autoplay=1')) return embedUrl
  const sep = embedUrl.includes('?') ? '&' : '?'
  return `${embedUrl}${sep}autoplay=1`
}
