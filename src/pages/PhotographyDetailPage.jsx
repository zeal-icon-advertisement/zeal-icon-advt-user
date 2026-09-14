import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePhotograph, usePhotographs } from '../hooks/usePhotographs'
import PhotoCard from '../components/photography/PhotoCard'
import ImageViewer from '../components/photography/ImageViewer'

export default function PhotographyDetailPage() {
  const { slug } = useParams()
  const photo = usePhotograph(slug)
  const all = usePhotographs()
  const [viewerIndex, setViewerIndex] = useState(null)

  if (!photo) {
    return (
      <section className="container-site py-28 text-center">
        <h1 className="font-display text-4xl">Story not found</h1>
        <Link to="/photography" className="mt-6 inline-flex label text-accent">
          Back to photography
        </Link>
      </section>
    )
  }

  const more = all.filter((item) => item.id !== photo.id).slice(0, 3)
  const gallery = photo.images?.length ? photo.images : [photo.imageUrl]

  function openAt(index) {
    setViewerIndex(index)
  }

  return (
    <article>
      <header className="container-site py-16 md:py-24">
        <p className="label text-accent">{photo.category}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
          {photo.title}
        </h1>
        <p className="mt-6 label text-subtle">
          {photo.category} / {photo.location} / {photo.year}
        </p>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-muted">{photo.description}</p>
      </header>

      <button type="button" className="block w-full overflow-hidden" onClick={() => openAt(0)}>
        <img src={gallery[0]} alt={photo.title} className="max-h-[92svh] w-full object-cover" />
      </button>

      {gallery[1] ? (
        <button type="button" className="mt-3 block w-full" onClick={() => openAt(1)}>
          <img src={gallery[1]} alt="" className="w-full object-cover" />
        </button>
      ) : null}

      <div className="container-site py-16 md:py-24">
        <p className="max-w-xl font-display text-2xl leading-snug md:text-3xl">{photo.caption}</p>
        <p className="mt-6 text-sm text-muted">
          {photo.photographer}
          {photo.location ? ` · ${photo.location}` : ''}
        </p>
      </div>

      {gallery.length > 2 ? (
        <div className="container-site grid gap-3 pb-16 sm:grid-cols-2">
          {gallery.slice(2).map((src, index) => (
            <button
              key={src}
              type="button"
              className="overflow-hidden"
              onClick={() => openAt(index + 2)}
            >
              <img src={src} alt="" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.02]" />
            </button>
          ))}
        </div>
      ) : null}

      <section className="border-t border-line">
        <div className="container-site py-16 md:py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">More photography</h2>
            <Link to="/photography" className="label text-muted hover:text-accent">
              Back to photography
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {more.map((item) => (
              <PhotoCard key={item.id} photo={item} />
            ))}
          </div>
        </div>
      </section>

      <ImageViewer
        images={gallery}
        index={viewerIndex}
        onClose={() => setViewerIndex(null)}
        onPrev={() =>
          setViewerIndex((current) =>
            current == null ? current : (current - 1 + gallery.length) % gallery.length,
          )
        }
        onNext={() =>
          setViewerIndex((current) =>
            current == null ? current : (current + 1) % gallery.length,
          )
        }
      />
    </article>
  )
}
