import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PHOTOGRAPHY_CATEGORIES } from '../../lib/navigation'
import CategoryFilter from '../ui/CategoryFilter'
import PhotoCard from '../photography/PhotoCard'

export default function ExplorePhotography({ photographs }) {
  const [active, setActive] = useState('all')

  const filtered = useMemo(() => {
    const list =
      active === 'all'
        ? photographs
        : photographs.filter((item) => item.categorySlug === active)
    return list.slice(0, 6)
  }, [active, photographs])

  return (
    <section className="border-t border-line bg-elevated">
      <div className="container-site py-16 md:py-24">
        <div className="mb-6 md:mb-8">
          <p className="label text-accent">Photography</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Explore</h2>
        </div>

        <div className="mb-10">
          <CategoryFilter categories={PHOTOGRAPHY_CATEGORIES} active={active} onChange={setActive} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>

        {!filtered.length ? (
          <p className="mt-12 text-center text-muted">No projects in this category yet.</p>
        ) : (
          <div className="mt-12 text-center">
            <Link to="/photography" className="label text-muted hover:text-accent">
              Open full archive →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
