export type WorkbookInsideSection = {
  title: string
  description: string
  icon: string
}

export type WorkbookFaqItem = {
  question: string
  answer: string
}

export type WorkbookStat = {
  value: string
  label: string
}

export type WorkbookPain = {
  title: string
  description: string
  icon: string
}

export type WorkbookOutcome = {
  step: number
  text: string
  icon: string
}

export type WorkbookLever = {
  label: string
  icon: string
}

export const WORKBOOK_LANDING = {
  title: 'The Offer Kickstart Workbook',
  metaDescription:
    'Free Offer Kickstart Workbook: apply the offer framework section by section and walk away with a completed offer draft. Instant download, no credit card.',

  hero: {
    badge: 'Free · Offer Kickstart Workbook · 23 Pages',
    headlineLead: 'Everybody Knows the Framework.',
    headlineAccent: 'Almost Nobody Applies It Correctly.',
    subheadline:
      "Everybody and their mom knows Alex Hormozi's offer framework. What most people miss are the details that turn a good offer into an irresistible one. The Offer Kickstart Workbook closes that gap.",
    priceAnchor: 'Free',
    cta: 'Get the Offer Kickstart Workbook',
    micro: 'Instant download. No credit card. No fluff.',
    trust: [
      { icon: 'solar:download-linear', label: 'Instant PDF' },
      { icon: 'solar:card-linear', label: 'No credit card' },
      { icon: 'solar:notebook-linear', label: 'Completed offer out' },
    ],
    stats: [
      { value: '23', label: 'Pages, zero fluff' },
      { value: '6', label: 'Framework sections' },
      { value: '60-90', label: 'Minutes to finish' },
    ] satisfies WorkbookStat[],
  },

  problem: {
    label: 'The Real Issue',
    headline: 'Knowing the Framework Is Not the Same as Having a Good Offer.',
    body: [
      "Most people read the theory and think they've got it. Then they write an offer that doesn't convert, drop the price, and blame the market. The problem isn't the framework. It's that nobody walked you through how to actually apply it to your specific offer, your specific client, and your specific situation.",
      'The Offer Kickstart Workbook does that. Section by section. Question by question.',
    ],
    pains: [
      {
        title: 'Theory without application',
        description: 'They read the framework once and assume the offer writes itself.',
        icon: 'solar:book-2-linear',
      },
      {
        title: 'Offers that do not convert',
        description: 'Copy sounds fine on paper but nobody says yes at the price you need.',
        icon: 'solar:chart-2-linear',
      },
      {
        title: 'Blaming the market',
        description: 'Price drops and repositioning loops instead of fixing the offer architecture.',
        icon: 'solar:dislike-linear',
      },
    ] satisfies WorkbookPain[],
  },

  inside: {
    label: 'Inside the Offer Kickstart Workbook',
    headline: '6 Sections. Every Variable Worked Through. A Completed Offer by the Last Page.',
    intro:
      'This is not a PDF to read and shelve. It pairs the core framework with exercises that force you to apply every concept to your offer in real time. By the last page you will have a completed offer draft, not just notes.',
    sections: [
      {
        title: 'The Value Equation.',
        description:
          'The foundation of every high-converting offer. Four variables, one formula, and an audit that shows you exactly where yours is leaking.',
        icon: 'solar:calculator-linear',
      },
      {
        title: 'The Dream Outcome.',
        description:
          "Stop selling your dream. Start selling theirs. Language matters more than you think, and most people are using the wrong words.",
        icon: 'solar:star-shine-linear',
      },
      {
        title: 'Perceived Likelihood.',
        description:
          "Authority, specificity, and proof. The three levers that make someone believe you can actually deliver. Includes a workaround for when you don't have case studies yet.",
        icon: 'solar:shield-check-linear',
      },
      {
        title: 'Time Delay.',
        description:
          'The divisor that can flip. Learn when speed closes deals and when unrealistic timelines collapse trust before you even get to the pitch.',
        icon: 'solar:clock-circle-linear',
      },
      {
        title: 'Effort and Sacrifice.',
        description:
          'The section most people gloss over. Physical, mental, and emotional cost all compound. This section shows you where your offer is asking too much and what to do about it.',
        icon: 'solar:heart-pulse-linear',
      },
      {
        title: 'Additions to the Equation.',
        description:
          "Instant gratification, packaging perception, and risk reversal. Three things that are not in the original framework but close more deals than most people realize.",
        icon: 'solar:add-circle-linear',
      },
    ] satisfies WorkbookInsideSection[],
  },

  proof: {
    label: 'Proof It Works',
    headline: 'Not a Hypothetical. A Real Close.',
    body: [
      "This is what the equation looks like in practice. A website system plus backend build closed at $5,800 across a three-part payment plan. The dream outcome was framed around what the client's business would feel like after, not what the tech stack looked like. The timeline was addressed upfront. Installation was done for them. The payment structure lowered perceived risk.",
      'Every lever pulled in the right direction. The offer was not magic. It was intentional.',
    ],
    highlight: '$5,800 closed because the offer made it easy to say yes. That is the whole game.',
    stats: [
      { value: '$5,800', label: 'Real close, not a hypothetical' },
      { value: '3-part', label: 'Payment plan structure' },
      { value: 'DFY', label: 'Installation handled for them' },
    ] satisfies WorkbookStat[],
    levers: [
      { label: 'Dream outcome reframed', icon: 'solar:star-shine-linear' },
      { label: 'Timeline set upfront', icon: 'solar:clock-circle-linear' },
      { label: 'Risk lowered', icon: 'solar:shield-check-linear' },
      { label: 'Done-for-you delivery', icon: 'solar:hand-stars-linear' },
    ] satisfies WorkbookLever[],
  },

  howItWorks: {
    label: "Use This. Don't Just Read It.",
    headline: 'By the Last Page, You Have a Completed Offer. Not Notes.',
    intro:
      'The final exercise pulls everything together into one page. You walk away with a clear answer to six things:',
    outcomes: [
      {
        step: 1,
        text: 'What your client actually wants in their own words',
        icon: 'solar:chat-round-dots-linear',
      },
      {
        step: 2,
        text: 'Why they will believe it is possible with you specifically',
        icon: 'solar:medal-ribbons-star-linear',
      },
      {
        step: 3,
        text: 'When they will see results and what they get on day one',
        icon: 'solar:calendar-mark-linear',
      },
      {
        step: 4,
        text: 'What you are asking them to do and how you reduce that cost',
        icon: 'solar:weights-linear',
      },
      {
        step: 5,
        text: "What happens if it doesn't work",
        icon: 'solar:shield-check-linear',
      },
      {
        step: 6,
        text: 'Your offer in plain English, one sentence, no jargon',
        icon: 'solar:document-text-linear',
      },
    ] satisfies WorkbookOutcome[],
    closing: 'That last box is your offer. Done.',
  },

  nextStep: {
    label: 'The Next Step',
    headline: 'You Built the Offer. Now Build the Machine That Delivers It.',
    body: [
      'Most coaches stop here. They have a sharp offer and zero infrastructure to back it up. The offer gets buried in a DM thread. The follow-up never happens. The leads go cold.',
      'A great offer without a system is just a good idea.',
      'The Knowledge to Cash Blueprint is the complete front-to-back system built for coaches and skill-based experts who are done leaving money on the table. Every lead tracked. Every follow-up automated. Every step from stranger to high-ticket client mapped and sequenced.',
      'Your offer is the message. The blueprint is the machine that delivers it.',
    ],
    cta: 'Get the Knowledge to Cash Blueprint for $29.97',
    ctaPath: '/blueprint',
    path: {
      offerLabel: 'Your offer',
      offerCaption: 'Offer Kickstart Workbook',
      machineLabel: 'The machine',
      machineCaption: 'Knowledge to Cash Blueprint',
    },
  },

  faq: {
    label: 'Common Questions',
    headline: 'Quick Answers.',
    items: [
      {
        question: 'Is this actually free?',
        answer:
          "Yes. No catch, no credit card, no upsell hidden behind a sign-up wall. Download it, use it, come back when you're ready for the full system.",
      },
      {
        question: 'Who is this for?',
        answer:
          "Coaches, consultants, and skill-based experts who have an offer they know could be sharper but aren't sure exactly where it's falling flat.",
      },
      {
        question: 'Is this based on the Hormozi framework?',
        answer:
          "It starts there. But it goes further, covering things the original framework doesn't address: packaging perception, instant gratification, emotional effort, and risk reversal. These are the gaps where most offers actually die.",
      },
      {
        question: 'How long does it take to complete?',
        answer:
          'The Offer Kickstart Workbook is 23 pages. If you actually answer every question instead of skimming, expect 60 to 90 minutes. You will come out the other side with something usable.',
      },
      {
        question: 'Do I need to have an offer already?',
        answer:
          'No. If you have a general idea of who you help and what you do, the exercises will help you build the offer from scratch. If you already have one, the audit sections will show you where it is leaking.',
      },
      {
        question: 'What is the Knowledge to Cash Blueprint mentioned at the end?',
        answer:
          'It is the full system that comes after the offer. CRM pipeline, AI follow-up, automated booking and onboarding, outreach infrastructure. The Offer Kickstart Workbook builds the offer. The blueprint builds the machine around it.',
      },
    ] satisfies WorkbookFaqItem[],
  },

  finalCta: {
    label: 'Start Here',
    headline: 'Get the Offer Kickstart Workbook. Build the Offer.',
    subheadline:
      "The framework alone won't close deals. Applying it to your specific situation will. Download the workbook and walk away with a completed offer draft by the last page.",
    price: 'Free',
    cta: 'Get the Offer Kickstart Workbook',
    micro: 'Instant download. No credit card. Takes 60 to 90 minutes to complete properly.',
  },
} as const
