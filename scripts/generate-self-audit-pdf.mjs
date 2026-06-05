import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '../public/AOF-Where-To-Start.pdf')

const margin = 56
const lineHeight = 16
const pageWidth = 612
const pageHeight = 792
const contentWidth = pageWidth - margin * 2

function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(test, size) <= maxWidth) {
      line = test
    } else {
      if (line) lines.push(line)
      line = word
    }
  }
  if (line) lines.push(line)
  return lines
}

async function main() {
  const doc = await PDFDocument.create()
  const regular = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)

  const sections = [
    {
      title: 'Where to Start After Your Systems Self-Audit',
      body: [
        'You took the AOF Systems Self-Audit. This guide shows you what to fix first, in what order, and what to ignore until the foundation is stable.',
        'Use it with your emailed score breakdown. Fix revenue leaks before you buy more tools.',
      ],
    },
    {
      title: 'The fix order that actually works',
      body: [
        '1. Speed to lead: every inquiry gets a response within 5 minutes.',
        '2. Pipeline clarity: every stage has an owner and a next action.',
        '3. Follow-up: unresponsive leads enter an automated sequence.',
        '4. Booking + payments: prospects book and pay without back-and-forth.',
        '5. Integrations: data moves between tools without manual copying.',
        '6. Owner dependency: revenue keeps moving if you step away for 7 days.',
      ],
    },
    {
      title: 'How to read your score band',
      body: [
        'Critical (0-4): Stop adding tools. Map the business on paper. Fix speed-to-lead and pipeline first.',
        'Unstable (5-8): Revenue exists but systems cannot absorb growth. Automate follow-up before increasing ad spend.',
        'Fragile (9-12): Core pieces exist but gaps will surface under pressure. Close integration and booking gaps next.',
        'Solid foundation (13-15): Optimize and scale. Layer AI where manual labor is highest.',
      ],
    },
    {
      title: 'Your next step',
      body: [
        'Book a free 15-minute qualifying call: brianmarshall.dev/calendar',
        'Explore the AOF Master Audit (13-block blueprint): brianmarshall.dev/aof',
        'Questions: brian@areoclient.com',
        'Brian Marshall · Business Systems Architect',
      ],
    },
  ]

  let page = doc.addPage([pageWidth, pageHeight])
  let y = pageHeight - margin

  const drawHeading = (text) => {
    if (y < margin + 80) {
      page = doc.addPage([pageWidth, pageHeight])
      y = pageHeight - margin
    }
    page.drawText(text, { x: margin, y, size: 14, font: bold, color: rgb(0.12, 0.12, 0.12) })
    y -= 28
  }

  const drawParagraph = (text) => {
    const lines = wrapText(text, regular, 11, contentWidth)
    for (const line of lines) {
      if (y < margin + 20) {
        page = doc.addPage([pageWidth, pageHeight])
        y = pageHeight - margin
      }
      page.drawText(line, { x: margin, y, size: 11, font: regular, color: rgb(0.2, 0.2, 0.2) })
      y -= lineHeight
    }
    y -= 8
  }

  page.drawText('AOF · Automated Operations Framework', {
    x: margin,
    y,
    size: 10,
    font: regular,
    color: rgb(0.45, 0.45, 0.45),
  })
  y -= 36

  for (const section of sections) {
    drawHeading(section.title)
    for (const paragraph of section.body) {
      drawParagraph(paragraph)
    }
    y -= 12
  }

  const bytes = await doc.save()
  writeFileSync(outPath, bytes)
  console.log(`Wrote ${outPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
