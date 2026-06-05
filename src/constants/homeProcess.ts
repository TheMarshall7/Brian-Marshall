import { AOF_BUILD_CREDIT_NOTE, AOF_LANDING_PATH, AOF_PURCHASE_HASH, STRATEGY_CALL_PATH } from './site'

export type HomeProcessRung = {
  step: string
  title: string
  description: string
  productLabel?: string
  productPath?: string
}

export const HOME_PROCESS = {
  eyebrow: 'The Process',
  headlineLead: 'How it',
  headlineAccent: 'works',
  subheadline:
    'Start with a free qualifying call, map your business across 13 blocks in the Master Audit, and leave with a scoped build plan and full pricing before anything gets built.',
  rungs: [
    {
      step: '01',
      title: 'Free 15-Minute Qualifying Call',
      description:
        'No pitch. Just open-ended questions to understand your business. I listen, I diagnose, and I guide. You leave with more clarity than you came with regardless of what happens next. If there\u2019s a fit, I\u2019ll tell you exactly what needs to be built and why.',
    },
    {
      step: '02',
      title: 'Book the AOF Master Audit \u00b7 $1,500',
      description:
        'Reserve your live audit session via secure payment. Serious buyers invest here. The $1,500 secures your session and produces a fully custom 13-block Master Audit of your business.',
      productLabel: 'Reserve your audit session',
      productPath: `${AOF_LANDING_PATH}${AOF_PURCHASE_HASH}`,
    },
    {
      step: '03',
      title: 'Live Audit Session',
      description:
        'We map all 13 blocks together in real time. You walk me through your business in depth. By the end you\u2019ve seen exactly what a properly architected version of your operations looks like.',
    },
    {
      step: '04',
      title: 'Deliverable + Scope Presentation',
      description:
        'You receive the polished Master Audit, full build plan, and final quote. No surprises. If scope and timing align, we move into the build and MRR begins. ' + AOF_BUILD_CREDIT_NOTE,
    },
  ] satisfies HomeProcessRung[],
  buildStackEyebrow: 'What gets built inside your business',
  buildStackItems: [
    {
      icon: 'solar:layers-minimalistic-linear',
      title: 'CRM & Pipeline Architecture',
      tagline: 'Every stage mapped. Every handoff owned.',
      description:
        'Every stage of your customer journey mapped and built. From first touch to closed to retained, with clear triggers, ownership, and logic at every step.',
    },
    {
      icon: 'solar:settings-linear',
      title: 'Workflow & Automation',
      tagline: 'Repeatable processes, running without you.',
      description:
        'Every repeatable process in your business automated. Lead handling, follow-up sequences, booking, payment, post-service communication, review generation, and reactivation.',
    },
    {
      icon: 'solar:cpu-bolt-linear',
      title: 'AI Implementation',
      tagline: 'AI where it replaces the most manual labor.',
      description:
        'Conversational AI for lead qualification and booking. Automated call summaries. Lead scoring. Customer service handling. AI placed at the exact points where it replaces the most manual labor.',
    },
    {
      icon: 'solar:window-frame-linear',
      title: 'Websites & Funnels',
      tagline: 'Built to convert, not to impress.',
      description:
        'Conversion-focused sites and funnels built to move the right people to the right next step. No pretty mockups that don\u2019t convert. Built to perform.',
    },
    {
      icon: 'solar:link-round-angle-linear',
      title: 'Integrations & Data Flow',
      tagline: 'One source of truth across your stack.',
      description:
        'Every tool in your stack connected so data moves without manual input. One source of truth. No more copying between systems.',
    },
    {
      icon: 'solar:bolt-linear',
      title: 'Speed to Lead Infrastructure',
      tagline: 'Close the gap where revenue bleeds out.',
      description:
        'The gap between a new inquiry and a human response is where most businesses bleed revenue. We close that gap with automation that responds, qualifies, and routes instantly.',
    },
  ],
  cta: {
    question: 'Ready to map what\u2019s broken?',
    sub: 'Book a free qualifying call. No pitch, just clarity on what needs to be built and why.',
    label: 'Book Your Free Qualifying Call',
    path: STRATEGY_CALL_PATH,
  },
}
