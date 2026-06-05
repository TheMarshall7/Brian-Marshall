export const HOME_DEPLOYMENT_LOG = {
  eyebrow: 'Deployment Log',
  headline: 'Infrastructure shipped',
  headlineAccent: 'in production.',
  subheadline:
    'CRM pipelines, automations, AI workflows, and integrations — built for owner-operated businesses and scaled products. Not mockups. Systems people run revenue on every day.',
  panelLabel: 'What gets built',
  capabilities: ['CRM & pipelines', 'Automation', 'AI workflows', 'Integrations', 'Funnels', 'Speed-to-lead'],
  closingLead: 'Every project maps to the same question:',
  closingAccent: 'Where does revenue enter, where does it stall, and what runs without the owner in the loop?',
  cta: 'Book Your Free Qualifying Call',
} as const

export const WORK_DEPLOY_TILES: {
  key: string
  icon: string
  label: string
  tileClass: string
  caseId: string
}[] = [
  { key: 'ar', icon: 'solar:widget-5-linear', label: 'AreoClient', tileClass: 'border-emerald-500/35 bg-emerald-500/10 text-emerald-400', caseId: 'case-areoclient' },
  { key: 'co', icon: 'solar:stars-minimalistic-linear', label: 'Spiritual & Human Design Coach', tileClass: 'border-purple-500/35 bg-purple-500/10 text-purple-400', caseId: 'case-spiritual-coach' },
  { key: 'so', icon: 'solar:chat-round-dots-linear', label: 'Social Outreach app', tileClass: 'border-cyan-500/35 bg-cyan-500/10 text-cyan-400', caseId: 'case-social-outreach' },
  { key: 'vi', icon: 'solar:shield-check-linear', label: 'Virelia Insurance', tileClass: 'border-blue-500/35 bg-blue-500/10 text-blue-400', caseId: 'case-virelia' },
  { key: 'et', icon: 'solar:music-note-linear', label: 'Ear Training Platform', tileClass: 'border-red-500/35 bg-red-500/10 text-red-400', caseId: 'case-ear-training' },
  { key: 'gs', icon: 'solar:gamepad-linear', label: 'Game Studio Website', tileClass: 'border-indigo-500/35 bg-indigo-500/10 text-indigo-400', caseId: 'case-game-studio' },
  { key: 'mq', icon: 'solar:music-notes-linear', label: 'MOQEMÀE', tileClass: 'border-rose-500/35 bg-rose-500/10 text-rose-400', caseId: 'case-moqemae' },
  { key: 'is', icon: 'solar:music-note-slider-linear', label: 'ISIATA', tileClass: 'border-amber-500/35 bg-amber-500/10 text-amber-400', caseId: 'case-isiata' },
]
