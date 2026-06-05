import { AOF_BUILD_CREDIT_NOTE, AOF_LANDING_PATH, STRATEGY_CALL_PATH } from './site'

export const HOME_META = {
  title: 'Business Systems Architect · AOF Master Audit',
  description:
    'For owner-operated businesses with real revenue and broken backends. Free 15-minute qualifying call, then the $1,500 AOF Master Audit maps your operations in 13 blocks before anything gets built.',
  keywords:
    'AOF Master Audit, business systems architect, operations audit, owner-operated business, CRM pipeline, workflow automation, AI implementation, qualifying call, business infrastructure',
  serviceName: 'Brian Marshall — Business Systems Architect',
  priceRange: '$1,500 audit · builds from $5K+',
  serviceType: [
    'Business Systems Architecture',
    'CRM & Pipeline Design',
    'Workflow Automation',
    'AI Implementation',
    'Integrations',
  ],
  knowsAbout: ['Business Operations', 'Automation', 'CRM', 'AI', 'Web Development', 'Systems Architecture'],
} as const

export const HOME_HERO = {
  badge: 'For owner-operated businesses generating real revenue',
  headlineLine1: 'Your revenue grew.',
  headlineLine2: 'Your systems didn\u2019t.',
  subheadline:
    'I find exactly where your business is losing money, map the full operational blueprint, and build the infrastructure that fixes it.',
  primaryCta: 'Book Your Free Qualifying Call',
  secondaryCta: 'See How It Works',
  secondaryHref: '#process',
  trustItems: ['15-minute call', 'No pitch', 'You leave with clarity either way'],
} as const

export const HOME_PROBLEM = {
  eyebrow: 'Sound familiar?',
  headlineLead: 'Most businesses don\u2019t have a revenue problem.',
  headlineAccent: 'They have a systems problem.',
  cards: [
    {
      label: 'The weight',
      text: 'You\u2019re generating real money but everything still runs through you. Follow up falls through the cracks. Leads go cold. The team can\u2019t move without your input. Growth feels like it\u2019s making things worse, not better.',
    },
    {
      label: 'The truth',
      text: 'That\u2019s not a hustle problem. That\u2019s an infrastructure problem.',
    },
    {
      label: 'The cost',
      text: 'The business works. The backend doesn\u2019t. And until someone maps it properly, every new client just adds to the weight instead of the momentum.',
    },
  ],
} as const

export const HOME_AOF_OFFER = {
  eyebrow: 'The Fix',
  headlineLead: 'I map your entire business on paper.',
  headlineAccent: 'Then I build it.',
  intro:
    'The AOF Master Audit is a fully custom 13-block blueprint of your business: pipelines, workflows, automations, AI opportunities, integrations, and full pricing for the build.',
  resultLabel: 'What makes it different',
  resultText:
    'This is not a proposal. Not a template. It\u2019s your business, on paper, with everything mapped, sequenced, and priced before we touch a single tool.',
  cta: 'Book Your Free Qualifying Call',
  ctaPath: STRATEGY_CALL_PATH,
  priceNote: '$1,500 \u00b7 Master Audit \u00b7 6\u20138 hours of architecture',
  buildCreditNote: AOF_BUILD_CREDIT_NOTE,
  exploreCta: 'Explore the Master Audit',
  explorePath: AOF_LANDING_PATH,
} as const

export const HOME_ECONOMICS = {
  eyebrow: 'The math',
  headlineLead: 'What this actually costs',
  headlineAccent: 'versus what it returns',
  cards: [
    {
      label: 'The investment',
      text: 'The AOF Master Audit at $1,500 maps your full operational blueprint before anything gets built: what to fix, in what order, and what each piece costs. Most consultants charge $5,000 just to tell you what to build. ' + AOF_BUILD_CREDIT_NOTE,
    },
    {
      label: 'The hidden cost',
      text: 'The question is never whether systems pay for themselves. Businesses running on manual processes are already paying in owner time, lost leads, and revenue that never gets captured.',
    },
  ],
} as const

export const HOME_CONTACT = {
  headline: 'If your business feels heavier than it should, something\u2019s broken.',
  subheadline: 'Let\u2019s find it. Then let\u2019s build the system that removes it.',
  benefits: [
    '15-minute qualifying call',
    'Real diagnosis of where your business is breaking',
    'Clear direction on what needs to be built and why',
    'No pitch. You leave with clarity regardless of outcome',
  ],
  cta: 'Book Your Free Qualifying Call',
  ctaPath: STRATEGY_CALL_PATH,
  email: 'brian@areoclient.com',
  footerTagline: 'Business Systems Architect \u00b7 Founder of AreoClient',
  footerClosing: 'Stop losing revenue to broken systems. Fix the infrastructure. Scale with intention.',
} as const
