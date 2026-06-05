export type SelfAuditQuestion = {
  id: string
  area: string
  question: string
  weight: number
}

export const SELF_AUDIT_QUESTIONS: SelfAuditQuestion[] = [
  { id: 'speed', area: 'Speed to lead', question: 'Do new leads get a human or automated response within 5 minutes?', weight: 2 },
  { id: 'pipeline', area: 'Pipeline', question: 'Does every pipeline stage have a clear owner and next action?', weight: 2 },
  { id: 'owner', area: 'Decision load', question: 'Can your team move deals forward without your input on routine decisions?', weight: 2 },
  { id: 'followup', area: 'Follow-up', question: 'Do unresponsive leads enter an automated follow-up sequence?', weight: 1 },
  { id: 'crm', area: 'CRM', question: 'Is your CRM the source of truth, not just a contact list?', weight: 1 },
  { id: 'tools', area: 'Integrations', question: 'Do your tools share data without manual copying between systems?', weight: 1 },
  { id: 'booking', area: 'Booking', question: 'Can prospects book without back-and-forth messages?', weight: 1 },
  { id: 'volume', area: 'Scale stress', question: 'Would your operations hold if lead volume doubled next month?', weight: 2 },
  { id: 'absent', area: 'Owner dependency', question: 'Would revenue keep moving if you were unavailable for 7 days?', weight: 2 },
  { id: 'payment', area: 'Payments', question: 'Is payment collection automated at the right point in the journey?', weight: 1 },
]

export const SELF_AUDIT_MAX_SCORE = SELF_AUDIT_QUESTIONS.reduce((sum, q) => sum + q.weight, 0)

export const SELF_AUDIT_BANDS = [
  {
    maxScore: 4,
    label: 'Critical',
    summary: 'Your backend is actively bleeding revenue. Manual processes are the bottleneck.',
    tag: 'aof-self-audit-critical',
    tone: 'critical',
  },
  {
    maxScore: 8,
    label: 'Unstable',
    summary: 'Revenue exists but systems cannot support growth. Every new client adds weight.',
    tag: 'aof-self-audit-unstable',
    tone: 'unstable',
  },
  {
    maxScore: 12,
    label: 'Fragile',
    summary: 'Some systems exist but key gaps remain. Growth will expose them quickly.',
    tag: 'aof-self-audit-fragile',
    tone: 'fragile',
  },
  {
    maxScore: 20,
    label: 'Solid foundation',
    summary: 'Core systems are in place. Optimization and scaling are the next leverage points.',
    tag: 'aof-self-audit-solid',
    tone: 'solid',
  },
] as const

export const SELF_AUDIT_BAND_STYLES: Record<
  (typeof SELF_AUDIT_BANDS)[number]['tone'],
  { ring: string; bar: string; text: string; glow: string }
> = {
  critical: {
    ring: 'stroke-red-500',
    bar: 'bg-red-500',
    text: 'text-red-400',
    glow: 'shadow-[0_0_40px_rgba(239,68,68,0.25)]',
  },
  unstable: {
    ring: 'stroke-orange-500',
    bar: 'bg-orange-500',
    text: 'text-orange-400',
    glow: 'shadow-[0_0_40px_rgba(249,115,22,0.2)]',
  },
  fragile: {
    ring: 'stroke-amber-400',
    bar: 'bg-amber-400',
    text: 'text-amber-300',
    glow: 'shadow-[0_0_40px_rgba(251,191,36,0.18)]',
  },
  solid: {
    ring: 'stroke-emerald-500',
    bar: 'bg-emerald-500',
    text: 'text-emerald-400',
    glow: 'shadow-[0_0_40px_rgba(16,185,129,0.2)]',
  },
}

export function getSelfAuditGaps(answers: Record<string, boolean>): SelfAuditQuestion[] {
  return SELF_AUDIT_QUESTIONS.filter((q) => !answers[q.id]).sort((a, b) => b.weight - a.weight)
}

export function scoreSelfAudit(answers: Record<string, boolean>): { score: number; band: (typeof SELF_AUDIT_BANDS)[number] } {
  let score = 0
  for (const q of SELF_AUDIT_QUESTIONS) {
    if (answers[q.id]) score += q.weight
  }
  const band = SELF_AUDIT_BANDS.find((b) => score <= b.maxScore) ?? SELF_AUDIT_BANDS[SELF_AUDIT_BANDS.length - 1]
  return { score, band }
}

export const SELF_AUDIT_LEAD_CONFIG = {
  source: 'brianmarshall.dev/aof-self-audit',
  tags: ['aof-self-audit'] as const,
  event: 'aof_self_audit_complete',
}
