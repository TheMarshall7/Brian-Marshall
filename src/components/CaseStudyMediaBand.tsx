import { useState } from 'react'

type Props = {
  /** Shown in faux browser URL bar (existing project URL or path) */
  urlLabel: string
  /** Loads `/work/{slug}.webp` when present; gradient fallback when missing */
  slug: string
}

export default function CaseStudyMediaBand({ urlLabel, slug }: Props) {
  const [showImg, setShowImg] = useState(true)
  const src = `/work/${slug}.webp`

  return (
    <div className="browser-chrome mb-6 w-full shadow-lg shadow-black/40">
      <div className="browser-chrome__bar">
        <div className="browser-chrome__dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="browser-chrome__url truncate" title={urlLabel}>
          {urlLabel}
        </div>
      </div>
      <div className="browser-chrome__screen">
        {showImg ? (
          <img
            src={src}
            alt=""
            className="case-study-shot"
            loading="lazy"
            decoding="async"
            onError={() => setShowImg(false)}
          />
        ) : null}
        <div className="browser-chrome__fauxui" aria-hidden>
          <div className="browser-chrome__barline browser-chrome__barline--short" />
          <div className="browser-chrome__barline browser-chrome__barline--med" />
          <div className="browser-chrome__barline w-full opacity-60" />
        </div>
      </div>
    </div>
  )
}
