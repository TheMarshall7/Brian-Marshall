export type AofPhase = 'diagnose' | 'design' | 'decide'

export type AofMasterBlock = {
  id: string
  number: number
  title: string
  subtitle: string
  bullets: string[]
  focus: string
  phase: AofPhase
  monoLabel: string
}

export type WhatBreaksScenario = {
  id: string
  label: string
  manualBreaks: string
  aofHandles: string
}

export const AOF_PHASES: { id: AofPhase; label: string; description: string; blockRange: string }[] = [
  {
    id: 'diagnose',
    label: 'Diagnose',
    description: 'Understand what exists, how revenue moves, and where it breaks under pressure.',
    blockRange: 'Blocks 1–6',
  },
  {
    id: 'design',
    label: 'Design',
    description: 'Map AI leverage, tech stack, and the economics of fixing it.',
    blockRange: 'Blocks 7–9',
  },
  {
    id: 'decide',
    label: 'Decide',
    description: 'Priorities, pricing, scope, and the path to execution.',
    blockRange: 'Blocks 10–13',
  },
]

export const AOF_MASTER_BLOCKS: AofMasterBlock[] = [
  {
    id: 'foundation',
    number: 1,
    title: 'Business Foundation + Control Map',
    subtitle: 'Understand what exists and who controls it',
    bullets: [
      'Core offer and delivery model',
      'Revenue range, trend, and maturity stage',
      'Team structure and actual responsibilities',
      'Tech stack inventory and purpose',
      'Decision authority: who approves systems, pricing, and tools',
    ],
    focus:
      'Before anything gets built, we map who actually controls what. Most stalled projects die in decision authority, not technology.',
    phase: 'diagnose',
    monoLabel: 'BLOCK_01_FOUNDATION',
  },
  {
    id: 'lead-entry',
    number: 2,
    title: 'Lead Entry System',
    subtitle: 'How opportunity enters the business',
    bullets: [
      'All lead sources and first point of contact',
      'Speed to lead and monthly volume by channel',
      'What happens when no one responds immediately',
      'Lead qualification process and CRM usage',
      'Where leads originate but fail to convert early',
    ],
    focus:
      'Revenue leaks at the front door. We map every entry point and the gap between inquiry and first meaningful response.',
    phase: 'diagnose',
    monoLabel: 'BLOCK_02_LEAD_ENTRY',
  },
  {
    id: 'pipeline',
    number: 3,
    title: 'Pipeline Movement System',
    subtitle: 'How leads move from interest to revenue',
    bullets: [
      'Full pipeline stages end to end',
      'Triggers and owners for each stage transition',
      'Manual actions required at each step',
      'Where deals consistently stall or drop',
      'Reactivation pipeline for old leads and past clients',
    ],
    focus:
      'No vague stages. Every handoff has a trigger, an owner, and a next action, or we document exactly where it breaks.',
    phase: 'diagnose',
    monoLabel: 'BLOCK_03_PIPELINE',
  },
  {
    id: 'operations',
    number: 4,
    title: 'Operational Workflow System',
    subtitle: 'How work actually gets executed',
    bullets: [
      'Lead handling and follow-up sequences',
      'Booking, confirmation, and payment collection',
      'Fulfillment and internal job assignment',
      'Post-service reviews, upsells, and retention',
      'Payment timing and failed payment handling',
    ],
    focus:
      'The repeatable work that still runs through you, documented before anything gets automated.',
    phase: 'diagnose',
    monoLabel: 'BLOCK_04_OPERATIONS',
  },
  {
    id: 'communication',
    number: 5,
    title: 'Customer Communication System',
    subtitle: 'Every touchpoint that shapes experience',
    bullets: [
      'Channels used and response time per channel',
      'Manual vs automated communication split',
      'Proactive updates vs reactive communication',
      'Complaint handling and retention mechanisms',
      'Post-service follow-up consistency',
    ],
    focus:
      'Inconsistent messaging erodes trust. We map every touchpoint and where automation should replace manual replies.',
    phase: 'diagnose',
    monoLabel: 'BLOCK_05_COMMUNICATION',
  },
  {
    id: 'failure-analysis',
    number: 6,
    title: 'Constraint + Failure Analysis',
    subtitle: 'Find what actually breaks the business',
    bullets: [
      'What breaks if lead volume doubles',
      'What breaks if the owner is unavailable for 7 days',
      'What breaks if marketing spend increases 3–5x',
      'Where delays compound under pressure',
      'Single biggest operational bottleneck',
    ],
    focus:
      'Stress-test the business before we build. Growth should add momentum, not weight.',
    phase: 'diagnose',
    monoLabel: 'BLOCK_06_FAILURE',
  },
  {
    id: 'ai-automation',
    number: 7,
    title: 'AI + Automation Leverage',
    subtitle: 'Where intelligence replaces labor',
    bullets: [
      'Assist: content, replies, call summaries, CRM updates',
      'Automate: routing, follow-up sequences, lead scoring',
      'Replace: qualification bots, booking, common service issues',
      'AI placed at highest manual-labor friction points',
    ],
    focus:
      'AI in three layers (assist, automate, replace), not buzzwords sprinkled on a broken process.',
    phase: 'design',
    monoLabel: 'BLOCK_07_AI',
  },
  {
    id: 'tech-stack',
    number: 8,
    title: 'Tech Stack + Data Flow',
    subtitle: 'What exists and how it connects',
    bullets: [
      'Full tool inventory and actual vs intended use',
      'Underused, redundant, and missing systems',
      'CRM role: source of truth or passive storage',
      'Data flow between systems and integration gaps',
      'Recommended simplified stack',
    ],
    focus:
      'One source of truth. Every tool connected on paper before a single integration gets built.',
    phase: 'design',
    monoLabel: 'BLOCK_08_TECH',
  },
  {
    id: 'economics',
    number: 9,
    title: 'Economics Snapshot',
    subtitle: 'How efficiently revenue is generated',
    bullets: [
      'Cost per lead and conversion rate by channel',
      'Average order value and profit margin per service',
      'Customer lifetime value',
      'Break-even per acquisition channel',
    ],
    focus:
      'Systems must pay for themselves. We quantify what fixing the bottleneck is worth before building.',
    phase: 'design',
    monoLabel: 'BLOCK_09_ECONOMICS',
  },
  {
    id: 'goals',
    number: 10,
    title: 'Goals + Constraints',
    subtitle: 'Define what success actually means',
    bullets: [
      '90-day target outcome and revenue goal',
      'Owner time reduction target',
      'Conversion rate and speed-to-lead targets',
      'Review, retention, and the single most important problem',
    ],
    focus:
      'Measurable outcomes before we touch anything. If we cannot track it, we do not build it.',
    phase: 'decide',
    monoLabel: 'BLOCK_10_GOALS',
  },
  {
    id: 'priority',
    number: 11,
    title: 'Priority System',
    subtitle: 'Turn diagnosis into action',
    bullets: [
      'Priority 1: highest impact bottleneck fixes',
      'Priority 2: systems that unlock scaling',
      'Priority 3: optimization and automation layer',
      'Build sequence, dependencies, and end-state picture',
    ],
    focus:
      'Not a feature laundry list. An ordered build sequence so you see momentum early.',
    phase: 'decide',
    monoLabel: 'BLOCK_11_PRIORITY',
  },
  {
    id: 'pricing',
    number: 12,
    title: 'Pricing + Scope Definition',
    subtitle: 'Full transparency of build',
    bullets: [
      'CRM, workflow, AI, integration, and funnel costs',
      'Setup fee and monthly retainer breakdown',
      'Total upfront and monthly cost',
      'Scope expansion rules, no surprise quotes',
    ],
    focus:
      'Line-item pricing before you commit. You see what each piece costs and why.',
    phase: 'decide',
    monoLabel: 'BLOCK_12_PRICING',
  },
  {
    id: 'execution',
    number: 13,
    title: 'Execution Summary + Next Steps',
    subtitle: 'Close with clarity and direction',
    bullets: [
      'Top 3 critical fixes',
      'Recommended start date and client inputs required',
      'Risks, assumptions, and final implementation path',
      'What happens immediately after approval',
    ],
    focus:
      'You leave with a clear path, not a PDF that sits in a folder.',
    phase: 'decide',
    monoLabel: 'BLOCK_13_EXECUTION',
  },
]

export const WHAT_BREAKS_SCENARIOS: WhatBreaksScenario[] = [
  {
    id: 'volume',
    label: 'Lead volume doubles',
    manualBreaks:
      'Follow-up falls behind within days. The owner becomes the routing layer. Deals stall in limbo. Response time stretches from minutes to days.',
    aofHandles:
      'Automated intake, instant qualification, and pipeline routing handle the surge. The owner sees a dashboard, not an inbox full of fires.',
  },
  {
    id: 'absent',
    label: 'Owner unavailable for 7 days',
    manualBreaks:
      'Nothing moves. Leads go cold. The team waits for decisions. Revenue flatlines because every stage transition requires the owner.',
    aofHandles:
      'Clear stage ownership and automated triggers keep the pipeline moving. Decisions that required you are now system rules.',
  },
  {
    id: 'spend',
    label: 'Ad spend increases 3–5x',
    manualBreaks:
      'More leads arrive but conversion drops. Cost per acquisition spikes. The backend cannot absorb the volume, so growth makes things worse.',
    aofHandles:
      'Speed-to-lead infrastructure and sequenced follow-up capture the extra volume. Economics are mapped before spend scales.',
  },
]

export const AOF_TEASER_BULLETS = AOF_MASTER_BLOCKS.slice(0, 6).map((b) => ({
  line: `Block ${b.number}: ${b.title}`,
  focus: b.focus,
}))

export const AOF_PHASE_GROUPS = AOF_PHASES.map((phase) => ({
  ...phase,
  blocks: AOF_MASTER_BLOCKS.filter((b) => b.phase === phase.id),
}))
