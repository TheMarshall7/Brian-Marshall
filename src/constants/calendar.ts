import { AOF_MASTER_AUDIT_PRICE_LABEL, BLUEPRINT_LANDING_PATH } from './site'

export const CALENDAR_PAGE = {
  title: 'Free 15-Minute Qualifying Call',
  metaDescription:
    `Book a free 15-minute qualifying call for owner-operated businesses with real revenue. No pitch. Map where leads stall, pipelines break, and whether the ${AOF_MASTER_AUDIT_PRICE_LABEL} AOF Master Audit is your right next step.`,
  metaKeywords:
    'free qualifying call, business systems consultation, AOF Master Audit, owner-operated business, operations diagnosis',

  eyebrow: 'Free qualifying call',
  headline: 'Book Your Free Qualifying Call',
  subheadline:
    'For owner-operated businesses generating real revenue that have outgrown how they currently operate. No pitch. You leave with clarity either way.',

  sidebar: {
    headline: 'Find where your business is breaking',
    intro:
      'Most businesses do not have a revenue problem. They have a systems problem. On this call we map where opportunity enters, where it stalls, and what breaks when volume or pressure increases.',
    benefits: [
      {
        title: 'Lead entry and speed-to-lead gaps',
        description: 'Where inquiries arrive, how fast they get a response, and where early conversion fails',
        icon: 'solar:inbox-in-linear',
      },
      {
        title: 'Pipeline stalls and owner bottlenecks',
        description: 'Which stages depend on you, where deals die, and what manual work is blocking scale',
        icon: 'solar:filter-linear',
      },
      {
        title: 'Clear next step: AOF or not',
        description: 'Leave knowing whether the AOF Master Audit is the right move, or what to fix first on your own',
        icon: 'solar:map-linear',
      },
    ],
    trustLabel: 'Trusted by owner-operated businesses generating real revenue',
    ctaTitle: 'Pick a time that works',
    ctaNote: 'No credit card · 15 minutes · No obligation',
    ctaHint: 'Select a time on the calendar to reserve your call',
    disqualifierLead: 'Still packaging your expertise into an offer?',
    disqualifierLinkLabel: 'Knowledge to Cash Blueprint',
    disqualifierPath: BLUEPRINT_LANDING_PATH,
  },

  infoCards: [
    { title: '15 Minutes', description: 'Focused, no fluff', icon: 'solar:clock-circle-linear' },
    { title: 'Video Call', description: 'Zoom or Google Meet', icon: 'solar:video-frame-linear' },
    { title: 'Free', description: 'No strings attached', icon: 'solar:dollar-minimalistic-linear' },
  ],

  qualifier: {
    eyebrow: 'Warm up the call',
    headline: 'Help me prepare (optional)',
    intro: 'Answer three quick questions so we use your 15 minutes on what matters most. Skip anytime.',
    skipLabel: 'Skip to calendar',
    continueLabel: 'Continue to calendar',
    fields: [
      {
        id: 'revenue',
        label: 'Monthly revenue range',
        options: ['Under $10K', '$10K–$30K', '$30K–$75K', '$75K+'],
      },
      {
        id: 'constraint',
        label: 'Biggest operational constraint',
        options: ['Owner is the bottleneck', 'Leads go cold / slow follow-up', 'Too many disconnected tools', 'Team can\u2019t move without me'],
      },
      {
        id: 'tools',
        label: 'Primary tools in use',
        options: ['CRM only', 'CRM + automations', 'Patchwork of tools', 'Mostly manual / spreadsheets'],
      },
    ],
  },

  bookingWidgetId: 'THMH1W3pKXF9bB3Cz5HW',
  bookingWidgetSrc: 'https://api.leadconnectorhq.com/widget/booking/THMH1W3pKXF9bB3Cz5HW',
} as const
