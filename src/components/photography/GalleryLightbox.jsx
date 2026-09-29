import { useEffect } from 'react'
import { getYouTubeVideoId } from '../../lib/youtube'

export default function GalleryLightbox({ items, index, setIndex }) {
  const item = items[index]
  const youtubeId = item?.type === 'video' ? getYouTubeVideoId(item.videoUrl) : null

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIndex(null)
      } else if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + items.length) % items.length)
      } else if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % items.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [items.length, setIndex])

  if (!item) return null

  const previous = () => setIndex((current) => (current - 1 + items.length) % items.length)
  const next = () => setIndex((current) => (current + 1) % items.length)

  return (
    <div
      className="fixed inset-0 z-[100] flex h-[100svh] items-center justify-center bg-black/95 p-3 sm:p-8"
      onClick={() => setIndex(null)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="relative flex h-full w-full max-w-7xl flex-col items-center justify-center gap-4 px-10 py-14 sm:px-16"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIndex(null)}
          className="absolute right-0 top-0 z-10 px-3 py-2 text-sm text-fg transition hover:text-accent"
        >
          Close
        </button>

        {items.length > 1 ? (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Previous media"
              className="absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center bg-elevated/80 text-fg transition hover:text-accent sm:size-12"
            >
              <span aria-hidden="true" className="size-2 rotate-[135deg] border-b-2 border-r-2 border-current" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next media"
              className="absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center bg-elevated/80 text-fg transition hover:text-accent sm:size-12"
            >
              <span aria-hidden="true" className="size-2 -rotate-45 border-b-2 border-r-2 border-current" />
            </button>
          </>
        ) : null}

        <div className="flex min-h-0 w-full flex-1 items-center justify-center">
          {item.type === 'video' ? (
            youtubeId ? (
              <div
                className={
                  item.orientation === 'portrait'
                    ? 'relative aspect-[9/16] h-full max-h-full max-w-full'
                    : 'relative aspect-video w-full max-w-6xl'
                }
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 size-full"
                />
              </div>
            ) : (
              <div
                className={
                  item.orientation === 'portrait'
                    ? 'flex aspect-[3/4] h-full max-h-full max-w-full items-center justify-center'
                    : 'flex max-h-full max-w-full items-center justify-center'
                }
              >
                <video
                  src={item.videoUrl}
                  poster={item.thumbnailUrl}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>

        <p className="text-center text-sm text-fg/80">
          {item.title} <span className="ml-2 text-muted">{index + 1} / {items.length}</span>
        </p>
      </div>
    </div>
  )
}