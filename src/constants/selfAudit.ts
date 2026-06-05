export type SelfAuditQuestion = {
  id: string
  question: string
  weight: number
}

export const SELF_AUDIT_QUESTIONS: SelfAuditQuestion[] = [
  { id: 'speed', question: 'Do new leads get a human or automated response within 5 minutes?', weight: 2 },
  { id: 'pipeline', question: 'Does every pipeline stage have a clear owner and next action?', weight: 2 },
  { id: 'owner', question: 'Can your team move deals forward without your input on routine decisions?', weight: 2 },
  { id: 'followup', question: 'Do unresponsive leads enter an automated follow-up sequence?', weight: 1 },
  { id: 'crm', question: 'Is your CRM the source of truth, not just a contact list?', weight: 1 },
  { id: 'tools', question: 'Do your tools share data without manual copying between systems?', weight: 1 },
  { id: 'booking', question: 'Can prospects book without back-and-forth messages?', weight: 1 },
  { id: 'volume', question: 'Would your operations hold if lead volume doubled next month?', weight: 2 },
  { id: 'absent', question: 'Would revenue keep moving if you were unavailable for 7 days?', weight: 2 },
  { id: 'payment', question: 'Is payment collection automated at the right point in the journey?', weight: 1 },
]

export const SELF_AUDIT_BANDS = [
  { maxScore: 4, label: 'Critical', summary: 'Your backend is actively bleeding revenue. Manual processes are the bottleneck.', tag: 'aof-self-audit-critical' },
  { maxScore: 8, label: 'Unstable', summary: 'Revenue exists but systems cannot support growth. Every new client adds weight.', tag: 'aof-self-audit-unstable' },
  { maxScore: 12, label: 'Fragile', summary: 'Some systems exist but key gaps remain. Growth will expose them quickly.', tag: 'aof-self-audit-fragile' },
  { maxScore: 20, label: 'Solid foundation', summary: 'Core systems are in place. Optimization and scaling are the next leverage points.', tag: 'aof-self-audit-solid' },
] as const

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
