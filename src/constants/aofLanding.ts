import {
  AOF_BUILD_CREDIT_DAYS,
  AOF_BUILD_CREDIT_NOTE,
  AOF_MASTER_AUDIT_PRICE_LABEL,
  AOF_PURCHASE_PATH,
  STRATEGY_CALL_PATH,
} from './site'

export const AOF_LANDING = {
  title: `AOF Master Audit · ${AOF_MASTER_AUDIT_PRICE_LABEL}`,
  metaDescription:
    `Book the AOF Master Audit: a fully custom 13-block operational blueprint of your business. Pipelines, workflows, AI, integrations, priorities, and line-item build pricing. ${AOF_MASTER_AUDIT_PRICE_LABEL}. Developer-ready. You keep the document.`,
  metaKeywords:
    'AOF Master Audit, operations audit, business systems blueprint, CRM pipeline design, workflow automation, $1497 business audit, owner-operated business',

  hero: {
    badge: 'The Fix',
    headlineLead: 'Your business, mapped in',
    headlineAccent: '13 blocks.',
    subheadline:
      'The AOF Master Audit is a fully custom operational blueprint, so thorough any competent developer could build from it without a single follow-up question.',
    priceAnchor: `${AOF_MASTER_AUDIT_PRICE_LABEL} · credited toward build within ${AOF_BUILD_CREDIT_DAYS} days · you own the document`,
    qualifyCta: 'Book Your Free Qualifying Call',
    qualifyPath: STRATEGY_CALL_PATH,
    purchaseCta: 'Reserve Your Audit Session',
    purchasePath: AOF_PURCHASE_PATH,
    trust: [
      { label: '13 diagnostic blocks', icon: 'solar:layers-minimalistic-linear' },
      { label: '6–8 hours of architecture', icon: 'solar:clock-circle-linear' },
      { label: 'You keep it either way', icon: 'solar:shield-check-linear' },
    ],
  },

  whoItsFor: {
    eyebrow: 'Who this is for',
    headlineLead: 'Built for businesses that',
    headlineAccent: 'outgrew manual ops.',
    criteria: [
      'Owner-operated with real monthly revenue',
      'Everything still runs through you',
      'Growth adds weight instead of momentum',
      'Previous system fixes failed or never finished',
    ],
    notFor:
      'Still packaging your expertise into an offer? The Knowledge to Cash path may be a better fit.',
  },

  deliverables: {
    eyebrow: 'What you receive',
    headline: 'A complete operating blueprint',
    items: [
      { title: 'Priority build sequence', description: 'What to fix first, second, and third, with dependencies mapped', icon: 'solar:list-check-linear' },
      { title: 'Line-item pricing', description: 'Full build cost broken down before you commit to anything', icon: 'solar:tag-price-linear' },
      { title: 'AI + automation map', description: 'Assist, automate, and replace layers placed at exact friction points', icon: 'solar:cpu-bolt-linear' },
      { title: 'Execution summary', description: 'Top 3 fixes, start date, risks, and what happens after approval', icon: 'solar:document-text-linear' },
    ],
  },

  process: {
    eyebrow: 'How it works',
    headlineLead: 'Four steps from',
    headlineAccent: 'diagnosis to build.',
    steps: [
      { step: '01', title: 'Free 15-Minute Qualifying Call', description: 'Fit filter and light diagnosis. No pitch.' },
      { step: '02', title: `Book the AOF Master Audit · ${AOF_MASTER_AUDIT_PRICE_LABEL}`, description: 'Reserve your live audit session via secure payment.' },
      { step: '03', title: 'Live Audit Session', description: 'We map all 13 blocks together in real time.' },
      { step: '04', title: 'Deliverable + Scope Presentation', description: 'Polished audit, build plan, and final quote.' },
    ],
  },

  purchase: {
    eyebrow: 'Reserve your session',
    headline: 'Book the AOF Master Audit',
    subheadline: `${AOF_MASTER_AUDIT_PRICE_LABEL} reserves your live audit session. Secure payment via GHL.`,
    buildCreditNote: AOF_BUILD_CREDIT_NOTE,
    micro: `${AOF_MASTER_AUDIT_PRICE_LABEL} · live audit session · you own the deliverable`,
    salesFinalNote: 'All sales final.',
    fallbackCta: 'Contact brian@areoclient.com',
    fallbackEmail: 'brian@areoclient.com',
  },

  riskReversal: {
    eyebrow: 'No surprises',
    headline: 'What you are guaranteed',
    items: [
      {
        title: 'Credited toward your build',
        description: AOF_BUILD_CREDIT_NOTE,
        icon: 'solar:wallet-money-linear',
      },
      { title: 'You keep the Master Audit', description: 'Own the document whether we build together or not. Take it to any developer.', icon: 'solar:document-add-linear' },
      { title: 'Developer-ready depth', description: 'Detailed enough to execute without follow-up questions.', icon: 'solar:code-circle-linear' },
      { title: '30-day follow-up', description: 'If timing is not right, you enter a follow-up sequence, not a hard pitch.', icon: 'solar:calendar-mark-linear' },
    ],
  },

  sample: {
    eyebrow: 'See the depth',
    headline: 'Inside the Master Audit',
    intro: 'One block, fully written. The rest of your audit is custom to your business.',
    featuredBlockId: 'pipeline',
  },

  selfAudit: {
    eyebrow: 'Not ready to invest?',
    headlineLead: 'Score your systems',
    headlineAccent: 'in 5 minutes.',
    subheadline: 'Answer 10 yes/no questions. Get your systems health score. Free.',
  },

  faq: {
    eyebrow: 'Common Questions',
    headline: 'About the Master Audit',
    items: [
      {
        id: 'format',
        question: 'What format is the deliverable?',
        answer:
          'A structured document covering all 13 blocks: pipelines, workflows, automations, AI opportunities, integrations, priorities, and line-item pricing. Delivered digitally; you own it permanently.',
      },
      {
        id: 'timeline',
        question: 'How long until I receive the completed audit?',
        answer:
          'The live audit session maps everything in real time. The polished deliverable follows within a few business days after the session.',
      },
      {
        id: 'build-credit',
        question: `Does the ${AOF_MASTER_AUDIT_PRICE_LABEL} count toward the full build?`,
        answer: AOF_BUILD_CREDIT_NOTE,
      },
      {
        id: 'without-build',
        question: 'What if I do not move forward with the full build?',
        answer:
          'You keep the Master Audit. Take it to any developer or agency. You also enter a 30-day follow-up sequence if timing changes.',
      },
      {
        id: 'vs-consultant',
        question: 'How is this different from hiring a consultant?',
        answer:
          `Most consultants charge $5,000+ to tell you what to build. The AOF Master Audit at ${AOF_MASTER_AUDIT_PRICE_LABEL} gives you the full blueprint, mapped, sequenced, and priced, before you commit to a $15K+ build.`,
      },
    ],
  },

  finalCta: {
    headline: 'Not sure yet?',
    subheadline: 'Book a free 15-minute qualifying call. No pitch, just clarity.',
    label: 'Book Your Free Qualifying Call',
    path: STRATEGY_CALL_PATH,
  },
} as const
