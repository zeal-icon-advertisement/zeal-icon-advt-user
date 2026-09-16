import { Link } from 'react-router-dom'

export default function PhotoCard({ photo, large = false, className = '' }) {
  return (
    <article className={`group ${className}`}>
      <div
        className={`overflow-hidden bg-soft ${large ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}
      >
        <img
          src={photo.imageUrl}
          alt={photo.title}
          className="photo-zoom h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <p className="mt-4 label text-subtle">{photo.category}</p>
      <h3 className="mt-2 font-display text-xl leading-tight md:text-2xl">{photo.title}</h3>
      <Link
        to={`/photography/${photo.slug}`}
        className="mt-3 inline-flex label text-muted transition hover:text-accent"
      >
        View details →
      </Link>
    </article>
  )
}
