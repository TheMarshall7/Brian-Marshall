import {
  SELF_AUDIT_BANDS,
  SELF_AUDIT_MAX_SCORE,
  SELF_AUDIT_QUESTIONS,
  getSelfAuditGaps,
  type SelfAuditQuestion,
} from './selfAudit'

export type SelfAuditScoreResult = {
  score: number
  band: (typeof SELF_AUDIT_BANDS)[number]
}

export const SELF_AUDIT_PDF_FILENAME = 'AOF-Where-To-Start.pdf'

export const SELF_AUDIT_PDF_PATH = `/${SELF_AUDIT_PDF_FILENAME}`

export const SELF_AUDIT_SITE_ORIGIN = 'https://brianmarshall.dev'

export const SELF_AUDIT_PDF_ABSOLUTE_URL = `${SELF_AUDIT_SITE_ORIGIN}${SELF_AUDIT_PDF_PATH}`

export const SELF_AUDIT_WHERE_TO_START_BY_BAND: Record<string, string[]> = {
  Critical: [
    'Stop all new tool purchases until speed-to-lead is fixed.',
    'Map your pipeline on paper before touching the CRM.',
    'Book a qualifying call if you want the full 13-block blueprint.',
  ],
  Unstable: [
    'Fix lead response and follow-up before you increase ad spend.',
    'Assign one owner per pipeline stage this week.',
    'Automate booking and payment collection next.',
  ],
  Fragile: [
    'Close integration gaps so data stops living in spreadsheets.',
    'Stress-test what breaks at 2x lead volume.',
    'Sequence fixes by revenue impact, not tool preference.',
  ],
  'Solid foundation': [
    'Optimize speed-to-lead and conversion before adding channels.',
    'Layer AI at the highest manual-labor friction points.',
    'Use the Master Audit to price the next scaling phase.',
  ],
}

export function getSelfAuditStrengths(answers: Record<string, boolean>): SelfAuditQuestion[] {
  return SELF_AUDIT_QUESTIONS.filter((q) => answers[q.id])
}

export function buildSelfAuditLeadMeta(
  answers: Record<string, boolean>,
  result: SelfAuditScoreResult,
): Record<string, string> {
  const gaps = getSelfAuditGaps(answers)
  const strengths = getSelfAuditStrengths(answers)
  const whereToStart = SELF_AUDIT_WHERE_TO_START_BY_BAND[result.band.label] ?? []

  const gapList = gaps.map((g) => g.area).join(', ') || 'None flagged'
  const strengthList = strengths.map((s) => s.area).join(', ') || 'None yet'
  const priorityFixes = gaps
    .slice(0, 3)
    .map((g, i) => `${i + 1}. ${g.area}: ${g.question}`)
    .join(' | ')
  const bandSteps = whereToStart.map((s, i) => `${i + 1}. ${s}`).join(' | ')

  const resultsSummary = [
    `Systems health: ${result.band.label}`,
    `Score: ${result.score} / ${SELF_AUDIT_MAX_SCORE}`,
    result.band.summary,
    `Gaps: ${gapList}`,
    `Strengths: ${strengthList}`,
    priorityFixes ? `Priority fixes: ${priorityFixes}` : '',
    `Where to start: ${bandSteps}`,
    `PDF: ${SELF_AUDIT_PDF_ABSOLUTE_URL}`,
  ]
    .filter(Boolean)
    .join('\n')

  return {
    score: String(result.score),
    maxScore: String(SELF_AUDIT_MAX_SCORE),
    band: result.band.label,
    bandSummary: result.band.summary,
    gaps: gapList,
    strengths: strengthList,
    priorityFixes: priorityFixes || 'Review the attached guide',
    whereToStart: bandSteps,
    pdfUrl: SELF_AUDIT_PDF_ABSOLUTE_URL,
    pdfFilename: SELF_AUDIT_PDF_FILENAME,
    resultsSummary,
    emailSubject: `Your systems score: ${result.band.label} (${result.score}/${SELF_AUDIT_MAX_SCORE})`,
  }
}
