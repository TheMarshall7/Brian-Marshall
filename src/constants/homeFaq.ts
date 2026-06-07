import {
  AOF_BUILD_CREDIT_NOTE,
  AOF_LANDING_PATH,
  AOF_MASTER_AUDIT_PRICE_LABEL,
  BLUEPRINT_LANDING_PATH,
  STRATEGY_CALL_PATH,
} from './site'
import { HOME_PROCESS } from './homeProcess'

export type HomeFaqAnswerPart =
  | { type: 'text'; value: string }
  | { type: 'link'; value: string; to: string }

export type HomeFaqItem = {
  id: string
  question: string
  answer: HomeFaqAnswerPart[]
}

export const HOME_FAQ = {
  eyebrow: 'Common Questions',
  headline: 'Common Questions',
  intro:
    'Straight answers on the AOF Master Audit, qualifying call, full builds, and what happens if the timing isn\u2019t right yet.',
  items: [
    {
      id: 'what-is-aof',
      question: 'What is the AOF Master Audit?',
      answer: [
        {
          type: 'text',
          value:
            'The Automated Operations Framework Master Audit is a fully custom 13-block blueprint of your business. It maps every pipeline, workflow, automation, AI opportunity, integration, priority, and the full pricing for your build. It\u2019s detailed enough that any competent developer could execute from it without asking you a single follow-up question. You own it regardless of whether we work together. ',
        },
        {
          type: 'link',
          value: 'See the full framework',
          to: AOF_LANDING_PATH,
        },
        {
          type: 'text',
          value: '.',
        },
      ],
    },
    {
      id: 'why-1497',
      question: `Why do I pay ${AOF_MASTER_AUDIT_PRICE_LABEL} before the build starts?`,
      answer: [
        {
          type: 'text',
          value:
            `Because the Master Audit is a real deliverable with real value. It takes 6-8 hours to produce and gives you a complete picture of your business that most owners have never had. It also filters for serious buyers. Someone unwilling to invest ${AOF_MASTER_AUDIT_PRICE_LABEL} in understanding their own operations is not going to invest $15,000 to fix them.`,
        },
      ],
    },
    {
      id: 'build-credit',
      question: `Does the ${AOF_MASTER_AUDIT_PRICE_LABEL} count toward the full build?`,
      answer: [
        {
          type: 'text',
          value: AOF_BUILD_CREDIT_NOTE,
        },
      ],
    },
    {
      id: 'no-move-forward',
      question: 'What if I don\u2019t move forward after the Master Audit?',
      answer: [
        {
          type: 'text',
          value:
            'You keep the Master Audit. It\u2019s yours. You can take it to any developer or agency and have it built. You\u2019ll also enter a 30-day follow-up sequence in case the timing changes.',
        },
      ],
    },
    {
      id: 'deliverable-format',
      question: 'What format is the deliverable?',
      answer: [
        {
          type: 'text',
          value:
            'A structured digital document covering all 13 blocks: pipelines, workflows, automations, AI map, integrations, build priorities, and line-item pricing. You own it permanently.',
        },
      ],
    },
    {
      id: 'deliverable-timeline',
      question: 'How long until I receive the completed audit?',
      answer: [
        {
          type: 'text',
          value:
            'The live audit session maps everything in real time. The polished Master Audit deliverable follows within a few business days after the session.',
        },
      ],
    },
    {
      id: 'qualifying-call-cost',
      question: 'What does the qualifying call cost?',
      answer: [
        {
          type: 'text',
          value: 'Nothing. It\u2019s 15 minutes. No pitch. You leave with clarity either way.',
        },
      ],
    },
    {
      id: 'who-for',
      question: 'What types of businesses do you work with?',
      answer: [
        {
          type: 'text',
          value:
            'Owner-operated businesses generating real revenue that have outgrown how they currently operate. Industry doesn\u2019t matter as much as growth stage. If everything still runs through you and growth feels like it\u2019s adding weight instead of momentum, this is built for you.',
        },
      ],
    },
    {
      id: 'full-build-cost',
      question: 'How much does a full build cost?',
      answer: [
        {
          type: 'text',
          value:
            'Builds range from $13,000 to $30,000+ depending on scope and complexity. The Master Audit maps the full cost before you commit to anything. ' +
            AOF_BUILD_CREDIT_NOTE,
        },
      ],
    },
    {
      id: 'build-timeline',
      question: 'How long does a build take?',
      answer: [
        {
          type: 'text',
          value:
            'Depends on scope. The Master Audit will give you a realistic timeline before any work begins.',
        },
      ],
    },
    {
      id: 'knowledge-to-cash',
      question: 'What about the Knowledge to Cash Blueprint?',
      answer: [
        {
          type: 'text',
          value:
            'That\u2019s a separate product for coaches and skill-based experts looking to package their knowledge into a sellable offer. If that\u2019s you, it\u2019s available on the ',
        },
        {
          type: 'link',
          value: 'Blueprint page',
          to: BLUEPRINT_LANDING_PATH,
        },
        {
          type: 'text',
          value:
            '. If you\u2019re a business owner with existing revenue and broken operations, the AOF System is the right conversation. ',
        },
        {
          type: 'link',
          value: 'Book a qualifying call',
          to: STRATEGY_CALL_PATH,
        },
        {
          type: 'text',
          value: ' to find out.',
        },
      ],
    },
  ] satisfies HomeFaqItem[],
  cta: HOME_PROCESS.cta,
} as const
