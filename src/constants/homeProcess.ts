import { BLUEPRINT_LANDING_PATH, STRATEGY_CALL_PATH, WORKBOOK_LANDING_PATH } from './site'

export type HomeProcessRung = {
  step: string
  title: string
  description: string
  productLabel?: string
  productPath?: string
}

export const HOME_PROCESS = {
  eyebrow: 'The Knowledge to Cash Path',
  headlineLead: 'Expertise is step one.',
  headlineAccent: 'The system is what books the calls.',
  subheadline:
    'Most coaches and skill-based experts are not short on knowledge. They are short on a sequenced path from clear offer to booked high-ticket clients. This is the order I use, and what I build when you want it installed for you.',
  rungs: [
    {
      step: '01',
      title: 'Sharpen the offer first.',
      description:
        'Before ads, funnels, or AI, your message has to land. The free Offer Kickstart Workbook walks you through the framework so you finish with a sellable offer draft, not more notes.',
      productLabel: 'Offer Kickstart Workbook · Free',
      productPath: `${WORKBOOK_LANDING_PATH}#get-workbook`,
    },
    {
      step: '02',
      title: 'Map the full client journey.',
      description:
        'The Knowledge to Cash Blueprint sequences every layer from stranger to retained high-ticket client: offer, capture, nurture, booking, delivery, and retention in one 48-page system.',
      productLabel: 'Knowledge to Cash Blueprint · $29.97',
      productPath: BLUEPRINT_LANDING_PATH,
    },
    {
      step: '03',
      title: 'Install capture and follow-up.',
      description:
        'This is where revenue usually leaks: no landing page, slow replies, no pipeline view. I build conversion sites, funnels, CRM, and AI follow-up so interest turns into booked calls without manual chasing.',
    },
    {
      step: '04',
      title: 'Run the machine consistently.',
      description:
        'Traffic, outreach, and automation only work when the offer and system underneath are solid. On a strategy call we find your biggest gap and whether you want done-with-you guidance or a full done-for-you build.',
      productLabel: 'Free strategy call',
      productPath: STRATEGY_CALL_PATH,
    },
  ] satisfies HomeProcessRung[],
  buildStackEyebrow: 'What gets built around your offer',
  buildStackItems: [
    {
      icon: 'solar:window-frame-linear',
      title: 'Conversion Sites & Funnels',
      tagline: 'Position your expertise. Move people to the next step.',
      description:
        'Landing pages, lead magnets, and checkout paths wired to your workbook or blueprint, built to convert coaches and experts who already know they need help.',
    },
    {
      icon: 'solar:routing-2-linear',
      title: 'Pipeline & Nurture',
      tagline: 'Every lead tracked. Every follow-up sequenced.',
      description:
        'CRM pipelines, email and SMS sequences, and tagging so a cold opt-in from the workbook or a blueprint buyer lands in the right next step automatically.',
    },
    {
      icon: 'solar:cpu-bolt-linear',
      title: 'AI Follow-Up & Booking',
      tagline: 'Replies and reminders without living in your inbox.',
      description:
        'AI-assisted enquiry handling, nurture, and booking flows so qualified prospects get a fast response and a clear path to your calendar.',
    },
    {
      icon: 'solar:clipboard-list-linear',
      title: 'Strategy & Implementation',
      tagline: 'Find the leak. Fix the right rung first.',
      description:
        'A free strategy call to diagnose where your path breaks, then done-with-you or done-for-you builds so the system matches your offer and capacity.',
    },
  ],
  cta: {
    question: 'Not sure which step you are on?',
    sub: 'Book a free call. We will map your offer, your gaps, and whether the workbook, blueprint, or a full build is the right next move.',
    label: 'Book a Free Strategy Call',
    path: STRATEGY_CALL_PATH,
  },
} as const
