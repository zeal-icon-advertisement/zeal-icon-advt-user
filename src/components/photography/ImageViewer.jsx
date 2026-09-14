import { useEffect } from 'react'

export default function ImageViewer({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  if (index == null || !images?.[index]) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-5 right-5 label text-white/70 hover:text-white"
        onClick={onClose}
      >
        Close
      </button>
      {images.length > 1 ? (
        <>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 label text-white/70 hover:text-white"
            onClick={(event) => {
              event.stopPropagation()
              onPrev()
            }}
          >
            Prev
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 label text-white/70 hover:text-white"
            onClick={(event) => {
              event.stopPropagation()
              onNext()
            }}
          >
            Next
          </button>
        </>
      ) : null}
      <img
        src={images[index]}
        alt=""
        className="max-h-[88svh] max-w-[92vw] object-contain"
        onClick={(event) => event.stopPropagation()}
      />
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 label text-white/55">
        {index + 1} / {images.length}
      </p>
    </div>
  )
}
