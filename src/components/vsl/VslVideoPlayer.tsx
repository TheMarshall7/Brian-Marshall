import { useState } from 'react'
import { vslEmbedUrlWithAutoplay, VSL_VIDEO_EMBED_URL, VSL_VIDEO_POSTER_URL } from '../../constants/vsl'

export default function VslVideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const hasEmbed = Boolean(VSL_VIDEO_EMBED_URL)
  const hasPoster = Boolean(VSL_VIDEO_POSTER_URL)

  return (
    <div className="vsl-video group relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900">
      {!playing ? (
        <button
          type="button"
          onClick={() => hasEmbed && setPlaying(true)}
          className="relative h-full w-full cursor-pointer border-0 bg-neutral-900 p-0 text-left"
          aria-label="Play free training video"
          disabled={!hasEmbed}
        >
          {hasPoster ? (
            <img
              src={VSL_VIDEO_POSTER_URL}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950"
              aria-hidden
            />
          )}
          <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" aria-hidden />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_0_40px_rgba(239,68,68,0.25)] backdrop-blur-sm transition-transform group-hover:scale-105">
              <iconify-icon icon="solar:play-bold" width="36" />
            </span>
            {!hasEmbed && (
              <p className="max-w-xs text-center text-sm text-neutral-400">
                Set <code className="text-neutral-300">VITE_VSL_VIDEO_EMBED_URL</code> and{' '}
                <code className="text-neutral-300">VITE_VSL_VIDEO_POSTER_URL</code> to enable playback.
              </p>
            )}
          </div>
        </button>
      ) : (
        <iframe
          src={vslEmbedUrlWithAutoplay(VSL_VIDEO_EMBED_URL)}
          title="Free training video"
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  )
}
