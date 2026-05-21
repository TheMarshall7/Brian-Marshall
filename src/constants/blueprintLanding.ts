export type BlueprintProblem = {
  title: string
  description: string
  icon: string
}

export type BlueprintPhase = {
  phase: string
  title: string
  timing: string
  description: string
  icon: string
}

export type BlueprintChange = {
  text: string
  icon: string
}

export type BlueprintTrust = {
  icon: string
  label: string
}

export type BlueprintFaqItem = {
  question: string
  answer: string
}

export type BlueprintStat = {
  value: string
  label: string
}

export type BlueprintLayer = {
  id: string
  title: string
  isSubLayer?: boolean
}

/** Layers 00–13 plus sub-layers 05B and 07A from the Blueprint source. */
export const BLUEPRINT_LAYERS = [
  { id: '00', title: 'Foundation & Buyer Psychology Codes' },
  { id: '01', title: 'The Golden Offer' },
  { id: '02', title: 'Short Form Traffic & The Hook System' },
  { id: '03', title: 'Traffic Strategy - Buy, Borrow, Build' },
  { id: '04', title: 'The Bridge' },
  { id: '05', title: 'Long Form Content' },
  { id: '05B', title: 'The Video Sales Letter (VSL)', isSubLayer: true },
  { id: '06', title: 'The Freebie - The Beacon Method' },
  { id: '07', title: 'Email Nurture, Segmentation & Nurture Community' },
  { id: '07A', title: 'CRM, Pipeline & Automation System', isSubLayer: true },
  { id: '08', title: 'Offer Validation & Diagnostics' },
  { id: '09', title: 'Webinar / Live Event' },
  { id: '10', title: 'The 4-Tier Offer Ladder' },
  { id: '11', title: 'High Ticket Call System - Setter, Closer & Follow-Up' },
  { id: '12', title: 'Referral & Alumni System' },
  { id: '13', title: 'Retention, Flywheel & Launch Strategy' },
] satisfies BlueprintLayer[]

/** Marketing count (layers 1–14 in reader-facing numbering; source doc uses 00–13). */
export const BLUEPRINT_LAYER_COUNT = 14

/** Map source layer id (00–13, 05B, 07A) to display label (1–14, 6B, 8A). */
export function blueprintLayerDisplayNumber(id: string): string {
  const match = id.match(/^(\d+)([A-Z]*)$/i)
  if (!match) return id
  const num = parseInt(match[1], 10) + 1
  const suffix = match[2] ?? ''
  return `${num}${suffix}`
}

export const BLUEPRINT_LANDING = {
  metaDescription:
    'The Knowledge to Cash Blueprint maps every step from stranger to retained high-ticket client in 90 days. 14 layers. 48 pages. Instant PDF download.',

  hero: {
    badge: '48 Pages · 14 Layers · v9',
    headlineLead: 'Your Expertise Should Be',
    headlineAccent: 'Making You Money.',
    subheadline:
      'The Knowledge to Cash Blueprint maps every step from total stranger to retained high-ticket client in 90 days. 14 layers. A compounding system that runs without you chasing every client down manually.',
    priceAnchor: '$29.97, one payment, instant access',
    cta: 'Get the Blueprint',
    micro: 'Instant download. No subscriptions. Yours forever.',
    stats: [
      { value: '48', label: 'Pages, fully mapped' },
      { value: '14', label: 'Revenue layers' },
      { value: '90', label: 'Day build path' },
    ] satisfies BlueprintStat[],
    trust: [
      { icon: 'solar:download-linear', label: 'Instant PDF' },
      { icon: 'solar:infinity-linear', label: 'Lifetime updates' },
      { icon: 'solar:layers-linear', label: 'Version 9 included' },
    ] satisfies BlueprintTrust[],
  },

  problem: {
    label: 'The Real Problem',
    headline: "You're Not Short on Expertise. You're Short on System.",
    intro:
      "The problem is never what you know. It's that nobody showed you how to package it, put it in front of the right people, and turn interest into income consistently.",
    items: [
      {
        title: 'Starting from zero every month.',
        description:
          'No pipeline. No automation. Just manually chasing the next client.',
        icon: 'solar:calendar-linear',
      },
      {
        title: "Content that doesn't convert.",
        description:
          "Views don't pay bills. Without a capture system, attention never becomes revenue.",
        icon: 'solar:chart-2-linear',
      },
      {
        title: 'Undercharging for real value.',
        description:
          "You're solving $10K problems for $500. Wrong offer architecture is costing you serious money.",
        icon: 'solar:wallet-money-linear',
      },
      {
        title: 'Leads falling through the cracks.',
        description:
          'Interested people disappear. Without a CRM and automated follow-up, your funnel is a leaking bucket.',
        icon: 'solar:filter-linear',
      },
    ] satisfies BlueprintProblem[],
  },

  insight: {
    label: "The Numbers Don't Lie",
    headline: "You Don't Need More Followers.",
    body: [
      'With a $5,000 offer and 15,000 followers, you need 2 clients to hit $10,000 a month. That\'s less than 0.02% of your audience. The creators hitting $100K months with under 20,000 followers aren\'t special. They have a clear offer and a system behind their content.',
      "You don't need more followers. You need 2 to 20 buyers and a system that finds them for you.",
    ],
    stats: [
      { value: '2', label: 'Clients for $10K/mo at $5K offer' },
      { value: '15K', label: 'Followers is enough' },
      { value: '<0.02%', label: 'Of audience needed' },
    ] satisfies BlueprintStat[],
  },

  phases: {
    label: 'The Build Order',
    headline: "5 Phases. One Rule: Don't Skip Ahead.",
    intro: 'A broken foundation with a great system on top is still a broken foundation.',
    items: [
      {
        phase: 'Phase 1',
        title: 'Foundation',
        timing: 'Week 1-2',
        icon: 'solar:home-angle-linear',
        description:
          'Lock your ICP, write your before/after statement, name your offer, validate with real people before building anything.',
      },
      {
        phase: 'Phase 2',
        title: 'Capture',
        timing: 'Week 2-4',
        icon: 'solar:mailbox-linear',
        description:
          'Build the freebie, set up the 5-email welcome sequence, configure behavior routing, start warm outreach in parallel.',
      },
      {
        phase: 'Phase 3',
        title: 'Traffic',
        timing: 'Month 2',
        icon: 'solar:chart-2-linear',
        description:
          'One short-form platform, weekly long form, the bridge connecting content to your free offer. 5 sign-ups per week is the threshold.',
      },
      {
        phase: 'Phase 4',
        title: 'Convert',
        timing: 'Month 2-3',
        icon: 'solar:presentation-graph-linear',
        description:
          'Run your first live webinar, launch the low-ticket offer, build the high-ticket application and pre-call sequence.',
      },
      {
        phase: 'Phase 5',
        title: 'Scale',
        timing: 'Month 3+',
        icon: 'solar:rocket-linear',
        description:
          'Activate the Referral Hinge Method, build the testimonial flywheel, run the 5-stage launch roadmap. Now it compounds.',
      },
    ] satisfies BlueprintPhase[],
  },

  inside: {
    label: 'Inside the Blueprint',
    headline: '14 Layers. Everything Mapped to Revenue.',
    body: 'Layers 1 through 14, plus sub-layers 6B and 8A where the system goes deeper. Skip one and you have a hole. Run the full stack and the machine operates without you.',
  },

  changes: {
    label: 'After You Build the System',
    headline: "Here's What's Different.",
    items: [
      {
        text: "You know exactly what you're selling and who it's for",
        icon: 'solar:target-linear',
      },
      {
        text: 'The right people find you and want to know more',
        icon: 'solar:users-group-rounded-linear',
      },
      {
        text: 'Conversations turn into booked calls without awkward pitching',
        icon: 'solar:calendar-mark-linear',
      },
      {
        text: 'New clients come in without starting from zero every month',
        icon: 'solar:graph-up-linear',
      },
      {
        text: 'Every client you close builds a system that makes the next one easier',
        icon: 'solar:refresh-circle-linear',
      },
      {
        text: 'You stop trading time for money one call at a time',
        icon: 'solar:clock-circle-linear',
      },
    ] satisfies BlueprintChange[],
  },

  starterPath: {
    offerLabel: 'Your offer',
    offerCaption: 'Free · Offer Kickstart Workbook',
    machineLabel: 'The machine',
    machineCaption: 'Knowledge to Cash Blueprint',
    workbookPath: '/workbook',
  },

  proof: {
    label: 'Results',
    headline: 'The System Works. I Know Because I Built It.',
    quote:
      'Before I even finished the full blueprint, I pulled in an $8,000 deal. I was only through Phase 2.',
    attribution: 'Brian Marshall, Creator of the Knowledge to Cash Blueprint',
    stats: [
      { value: '$8K', label: 'Deal closed early' },
      { value: 'Phase 2', label: 'When it happened' },
      { value: 'v9', label: 'Blueprint version today' },
    ] satisfies BlueprintStat[],
  },

  livingDoc: {
    label: 'This Is Not a Static PDF',
    headline: 'This Blueprint Grows As I Grow.',
    body: [
      'This is not a document I wrote once and shelved. It gets updated in real time as I learn what\'s working, what\'s changed, and what needs to be added. That\'s why you\'re looking at version 9.',
      'Every time a new version drops, you get it automatically. No extra charge, no rebuying, no chasing it down. Buy once, get every future version sent straight to your inbox.',
      'The market keeps moving. This blueprint keeps up. So will you.',
    ],
    callout:
      'Buy once. Lifetime access. Every future version delivered free to your inbox automatically.',
    perks: [
      { icon: 'solar:refresh-linear', label: 'Live updates' },
      { icon: 'solar:letter-linear', label: 'Inbox delivery' },
      { icon: 'solar:infinity-linear', label: 'Lifetime access' },
    ],
  },

  faq: {
    label: 'Common Questions',
    headline: 'Quick Answers.',
    items: [
      {
        question: 'Who is this for?',
        answer:
          "Coaches, consultants, and skill-based experts who have knowledge worth paying for but don't yet have a reliable system for turning that knowledge into consistent income.",
      },
      {
        question: 'Is this a course?',
        answer:
          "No. It's a blueprint. No videos to sit through, no modules to unlock. You get the full document immediately and work through it at your own pace in the order it tells you to.",
      },
      {
        question: 'Why $29.97?',
        answer:
          'Because the information inside has been used to close an $8,000 deal before even reaching Phase 3. The price is intentionally low. The value is not.',
      },
      {
        question: "What if I'm just starting out?",
        answer:
          "The blueprint starts at Phase 1 for a reason. You don't need an audience, a website, or an existing offer. You need to follow the build order. That's it.",
      },
      {
        question: 'What if I already have a funnel or offer?',
        answer:
          'Use the Quick Diagnostic in Layer 8. It tells you exactly where your system is leaking and which layer to fix first. You don\'t have to start from scratch.',
      },
      {
        question: 'Do I get updates?',
        answer:
          "Yes. Every new version gets emailed to you automatically at no extra cost. This is already on version 9. You're buying into every version that comes after it too.",
      },
      {
        question: 'What format does it come in?',
        answer: 'PDF. Instant download the moment you purchase.',
      },
      {
        question: 'Is there a refund policy?',
        answer:
          'Because this is a digital product delivered immediately, all sales are final. Read the proof section. Apply Phase 1. The system works if you work it.',
      },
    ] satisfies BlueprintFaqItem[],
  },

  finalCta: {
    label: 'One Decision. One System. 90 Days.',
    headline: 'Stop Chasing. Start Systemizing.',
    subheadline:
      'Every step mapped. Every layer sequenced. Built for coaches and skill-based experts who are done guessing and ready to build something that compounds.',
    price: '$29.97, instant access',
    cta: 'Get the Blueprint Now',
    micro: 'One payment. Instant download. Every future version free. No fluff, no filler. Just the system.',
  },

  priceLabel: '$29.97',
  buyLabel: 'Get the Blueprint',
  buyLabelFooter: 'Get the Blueprint Now',
  checkoutNote: 'Checkout coming soon',
  title: 'Knowledge to Cash Blueprint',
} as const
