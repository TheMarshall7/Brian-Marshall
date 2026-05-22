import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WORKBOOK_GHL_LEAD } from '../../constants/ghlLeads'
import { OFFER_KICKSTART_OPTIN } from '../../constants/shop'
import GhlNameEmailForm from '../shared/GhlNameEmailForm'

type Props = {
  submitLabel?: string
  className?: string
}

const optin = OFFER_KICKSTART_OPTIN

export default function WorkbookOptInForm({
  submitLabel = optin.submitLabel,
  className = '',
}: Props) {
  const [captured, setCaptured] = useState(false)

  if (captured) {
    return (
      <div className={className}>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-500">
          <iconify-icon icon="solar:check-circle-bold" width="28" />
        </div>
        <h3 className="text-xl font-medium text-white md:text-2xl">{optin.successTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{optin.successBody}</p>
        <a
          href={optin.pdfPath}
          download
          className="btn-shimmer glow-border mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-950 transition-all hover:bg-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)] sm:w-auto"
        >
          <iconify-icon icon="solar:download-linear" width="18" />
          Download Offer Kickstart Workbook
        </a>
        <Link
          to="/blueprint/checkout"
          className="mt-4 block text-center text-sm text-neutral-500 transition-colors hover:text-white sm:text-left"
        >
          Explore the Knowledge to Cash Blueprint
        </Link>
      </div>
    )
  }

  return (
    <div className={className}>
      <GhlNameEmailForm
        submitLabel={submitLabel}
        leadConfig={WORKBOOK_GHL_LEAD}
        onSuccess={() => setCaptured(true)}
        extraMeta={{ product: 'offer-kickstart-workbook' }}
      />
    </div>
  )
}
