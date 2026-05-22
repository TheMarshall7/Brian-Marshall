import { BLUEPRINT_LANDING_PATH, STRATEGY_CALL_PATH, WORKBOOK_LANDING_PATH } from './site'
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
  headline: 'Still Have Questions?',
  intro:
    'Straight answers on the Knowledge to Cash path, the free workbook, the Blueprint, done-for-you builds, and the strategy call.',
  items: [
    {
      id: 'worth-it',
      question: 'Is this worth the investment?',
      answer: [
        {
          type: 'text',
          value:
            'If gaps in your offer, funnel, or follow-up are costing you real revenue or time, usually yes. I tie work to measurable outcomes first: booked calls, conversion, revenue per lead, and response speed. On your free strategy call we quantify what fixing the bottleneck is worth. If I cannot show you a clear ROI path, I do not take the build.',
        },
      ],
    },
    {
      id: 'workbook-or-blueprint',
      question: 'Should I start with the workbook or the Blueprint?',
      answer: [
        {
          type: 'text',
          value:
            'Start with the ',
        },
        {
          type: 'link',
          value: 'Offer Kickstart Workbook',
          to: `${WORKBOOK_LANDING_PATH}#get-workbook`,
        },
        {
          type: 'text',
          value:
            ' if your offer still feels fuzzy or does not convert. It is free, takes about 60 to 90 minutes if you do the exercises, and you finish with a sellable offer draft. Move to the ',
        },
        {
          type: 'link',
          value: 'Knowledge to Cash Blueprint',
          to: BLUEPRINT_LANDING_PATH,
        },
        {
          type: 'text',
          value:
            ' when you are ready to map the full path from stranger to retained high-ticket client across 14 layers. Book a ',
        },
        {
          type: 'link',
          value: 'strategy call',
          to: STRATEGY_CALL_PATH,
        },
        {
          type: 'text',
          value: ' when you want the system installed for you instead of DIY.',
        },
      ],
    },
    {
      id: 'who-for',
      question: 'Who is this for?',
      answer: [
        {
          type: 'text',
          value:
            'Coaches, consultants, and skill-based experts who sell transformation, advice, or high-trust services and need strangers to trust them and book calls. If your pain is offer clarity, capture, follow-up, or an inconsistent calendar, we are probably a fit. A free strategy call is the fastest way to confirm.',
        },
      ],
    },
    {
      id: 'strategy-call',
      question: 'What happens on the free strategy call?',
      answer: [
        {
          type: 'text',
          value:
            'About 30 minutes on where your path breaks: offer, capture, follow-up, or consistency. You leave with a clear read on whether the workbook, Blueprint, or a done-for-you build is the right next move. No hard pitch. If we work together, that becomes a concrete plan across sites, funnels, pipeline, and AI follow-up.',
        },
      ],
    },
    {
      id: 'build-timeline',
      question: 'How long does a done-for-you build take?',
      answer: [
        {
          type: 'text',
          value:
            'Most launches land in about 4 to 8 weeks depending on what we ship first: conversion-focused site, funnel pieces, AI follow-up, and integrations. Larger stacks can run 12 to 16 weeks. On your strategy call we map which step of your path is broken and sequence the work so you see momentum early.',
        },
      ],
    },
    {
      id: 'blueprint',
      question: 'What is the Knowledge to Cash Blueprint?',
      answer: [
        {
          type: 'text',
          value:
            'A 48-page, 14-layer system for coaches and experts that maps the full journey from stranger to retained high-ticket client: offer, capture, nurture, booking, delivery, and retention. It is a one-time $29.97 purchase with instant access. See the full breakdown on the ',
        },
        {
          type: 'link',
          value: 'Blueprint page',
          to: BLUEPRINT_LANDING_PATH,
        },
        {
          type: 'text',
          value: '.',
        },
      ],
    },
    {
      id: 'workbook',
      question: 'What is the Offer Kickstart Workbook?',
      answer: [
        {
          type: 'text',
          value:
            'A free 23-page workbook that walks you through the offer framework section by section so you finish with a completed offer draft, not more notes. No credit card. Grab it on the ',
        },
        {
          type: 'link',
          value: 'workbook page',
          to: `${WORKBOOK_LANDING_PATH}#get-workbook`,
        },
        {
          type: 'text',
          value: '.',
        },
      ],
    },
    {
      id: 'tech',
      question: 'Do I need to be tech-savvy?',
      answer: [
        {
          type: 'text',
          value:
            'No. You should not have to live inside your CRM to make money. I design for operators: clear workflows, sensible automations, and documentation so your team can run it. The goal is for the system to fade into the background so client experience stays front and center.',
        },
      ],
    },
    {
      id: 'after-launch',
      question: 'What if I need changes after launch?',
      answer: [
        {
          type: 'text',
          value:
            'Businesses change and systems should evolve. After launch we can move into maintenance or ongoing support scoped to what you need: updates, new sequences, optimizations, and new funnel pieces. We agree cadence and scope up front so expectations stay clear.',
        },
      ],
    },
  ] satisfies HomeFaqItem[],
  cta: HOME_PROCESS.cta,
} as const
