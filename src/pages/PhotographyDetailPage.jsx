import { Link, useParams } from 'react-router-dom'
import { usePhotograph, usePhotographs } from '../hooks/usePhotographs'
import PhotoCard from '../components/photography/PhotoCard'
import Reveal from '../components/ui/Reveal'

export default function PhotographyDetailPage() {
  const { slug } = useParams()
  const photo = usePhotograph(slug)
  const all = usePhotographs()

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

      <div className="aspect-[4/3] max-h-[92svh] overflow-hidden sm:aspect-[16/10]">
        <img src={gallery[0]} alt={photo.title} className="photo-zoom h-full w-full object-cover" />
      </div>

      {gallery[1] ? (
        <div className="mt-3 aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
          <img src={gallery[1]} alt="" loading="lazy" className="photo-zoom h-full w-full object-cover" />
        </div>
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
          {gallery.slice(2).map((src) => (
            <div key={src} className="overflow-hidden">
                <img src={src} alt="" loading="lazy" className="photo-zoom aspect-[4/5] w-full object-cover" />
            </div>
          ))}
        </div>
      ) : null}

      <section className="border-t border-line">
        <div className="container-site py-16 md:py-24">
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl md:text-4xl">More photography</h2>
            <Link to="/photography" className="label text-muted transition duration-300 hover:text-accent">
              Back to photography
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {more.map((item, index) => (
              <Reveal key={item.id} delay={index * 80}>
                <PhotoCard photo={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
