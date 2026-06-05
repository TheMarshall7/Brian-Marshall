import { AOF_BUILD_CREDIT_NOTE } from './site'

export type ShopProduct = {
  id: string
  title: string
  price: number
  priceLabel: string
  /** Strikethrough "was" price (e.g. $9.97 before Free) */
  priceOriginalLabel?: string
  coverSrc?: string
  /** Render document-style preview instead of cover image */
  documentPreview?: boolean
  description: string
  bullets?: string[]
  footnote?: string
  ctaLabel?: string
  purchaseCtaLabel?: string
  /** Direct PDF path - used on landing pages, not shop cards */
  filePath?: string
  /** Route for email opt-in (free lead magnet) */
  optInPath?: string
  /** Product sales / info landing page */
  landingPath?: string
  /** Direct purchase / booking anchor */
  purchasePath?: string
  badge?: string
  featured?: boolean
}

export const SHOP_COVER = {
  offerKickstart: '/Offer Kickstart Workbook.PNG',
  knowledgeToCash: '/Knowledge To Cash Cover.PNG',
} as const

export const SHOP_PDF = {
  /** Offer Kickstart Workbook PDF (file name in public/ is legacy) */
  offerKickstart: '/No Brainer Offer Creation.pdf',
  knowledgeToCash: '/Offer-Creation-Beyond-the-Standard-Framework(Gamma).pdf',
} as const

export const OFFER_KICKSTART_WORKBOOK_TITLE = 'The Offer Kickstart Workbook' as const

/** FastPayDirect payment link for Knowledge to Cash Blueprint ($29.97). Override with VITE_K2C_CHECKOUT_URL. */
export const K2C_CHECKOUT_URL =
  import.meta.env.VITE_K2C_CHECKOUT_URL?.trim() ||
  'https://link.fastpaydirect.com/payment-link/6a0fa08bc58f48c13d66730f'

/** Full-page opt-in copy for /workbook */
export const OFFER_KICKSTART_OPTIN = {
  title: OFFER_KICKSTART_WORKBOOK_TITLE,
  headline: 'Most experts know what they do.',
  headlineAccent: 'They just can\'t explain it in a way that makes people want to pay for it.',
  body: [
    'The Offer Kickstart Workbook fixes that. In under an hour, you\'ll have a clear, compelling offer you can actually sell, built around what your clients want, not just what you know how to do.',
    'Download it free. No fluff, no filler. Just the framework applied to your offer.',
  ],
  coverSrc: SHOP_COVER.offerKickstart,
  pdfPath: SHOP_PDF.offerKickstart,
  formTitle: 'Get the Offer Kickstart Workbook',
  formSubtitle: 'Enter your name and email. I\'ll send the workbook PDF to your inbox.',
  submitLabel: 'Send me the Offer Kickstart Workbook',
  successTitle: 'You\'re in',
  successBody:
    'Check your email for The Offer Kickstart Workbook. If you don\'t see it in a few minutes, peek at spam or promotions.',
  source: 'Website · Offer Kickstart Workbook',
  tags: ['offer-kickstart-workbook'],
} as const

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'aof-master-audit',
    title: 'AOF Master Audit',
    price: 1500,
    priceLabel: '$1,500',
    documentPreview: true,
    description:
      'A fully custom 13-block operational blueprint of your business: pipelines, workflows, automations, AI opportunities, integrations, priorities, and line-item build pricing. Developer-ready. You own it either way.',
    bullets: [
      '13 diagnostic blocks: diagnose, design, and decide',
      'Live audit session maps your business in real time',
      'Priority build sequence with full cost transparency',
      '6–8 hours of architecture · you keep the deliverable',
      AOF_BUILD_CREDIT_NOTE,
    ],
    footnote:
      'For owner-operated businesses with real revenue and broken operations. Not sure yet? Start with a free 15-minute qualifying call.',
    landingPath: '/aof',
    purchasePath: '/aof#purchase',
    ctaLabel: 'Explore the Master Audit',
    purchaseCtaLabel: 'Reserve your session',
    badge: 'Master Audit',
    featured: true,
  },
  {
    id: 'offer-kickstart',
    title: OFFER_KICKSTART_WORKBOOK_TITLE,
    price: 0,
    priceLabel: 'Free',
    priceOriginalLabel: '$9.97',
    coverSrc: SHOP_COVER.offerKickstart,
    description:
      'Everybody knows the offer framework. Almost nobody applies it correctly to their specific client, offer, and situation. This 23-page workbook pairs the Value Equation with guided exercises so you build a real offer draft as you go, not notes you never use again.',
    bullets: [
      'Six sections: dream outcome, perceived likelihood, time delay, effort, risk reversal, and more',
      'Audits that show exactly where your offer is leaking before you drop the price',
      'Final one-page pull-through: your offer in plain English, ready to sell',
      'Free download. No credit card. Plan on 60 to 90 minutes if you do the work properly',
    ],
    footnote:
      'Step one is the offer. When you are ready for pipeline, follow-up, and the full path from stranger to high-ticket client, the Knowledge to Cash Blueprint is the machine that delivers it.',
    optInPath: '/workbook',
    ctaLabel: 'Get the Offer Kickstart Workbook',
    badge: 'Offer Kickstart',
  },
  {
    id: 'knowledge-to-cash',
    title: 'Knowledge to Cash Blueprint',
    price: 29.97,
    priceLabel: '$29.97',
    coverSrc: SHOP_COVER.knowledgeToCash,
    description:
      'You\'ve got the expertise. The problem is the system around it. The Knowledge to Cash Blueprint is a step-by-step guide that shows you exactly how to go from a clear offer to high-ticket clients booking calls with you, without chasing people down or starting from zero every month.',
    bullets: [
      'How to package your knowledge so the right people immediately understand what you do',
      'The funnel structure that captures leads while you sleep',
      'The follow-up system that turns interest into booked calls',
      'The client delivery flow that makes you look like you\'ve been doing this for years',
    ],
    footnote:
      'You don\'t need more followers. You need a system that works with what you already have. $29.97. Instant access. No fluff.',
    filePath: SHOP_PDF.knowledgeToCash,
    landingPath: '/blueprint',
    ctaLabel: 'Get the Blueprint',
    badge: 'Blueprint',
  },
]

export const SHOP_HEADLINE = 'Resources'
export const SHOP_SUBHEADLINE =
  'Systems for owner-operated businesses, plus guides for coaches packaging knowledge into sellable offers.'

export function getShopProduct(id: ShopProduct['id']): ShopProduct {
  const product = SHOP_PRODUCTS.find((p) => p.id === id)
  if (!product) throw new Error(`Unknown shop product: ${id}`)
  return product
}
