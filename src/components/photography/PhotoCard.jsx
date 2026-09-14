import { Link } from 'react-router-dom'

export default function PhotoCard({ photo, large = false, className = '' }) {
  return (
    <Link to={`/photography/${photo.slug}`} className={`group block ${className}`}>
      <div className={`overflow-hidden bg-soft ${large ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
        <img src={photo.imageUrl} alt={photo.title} className="photo-zoom h-full w-full object-cover" />
      </div>
      <p className="mt-4 label text-subtle">{photo.category}</p>
      <h3 className="mt-2 font-display text-xl leading-tight md:text-2xl">{photo.title}</h3>
    </Link>
  )
}
