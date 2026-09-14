import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PHOTOGRAPHY_CATEGORIES } from '../lib/navigation'
import { usePhotographs } from '../hooks/usePhotographs'
import CategoryFilter from '../components/ui/CategoryFilter'
import PhotoCard from '../components/photography/PhotoCard'

export default function PhotographyPage() {
  const photographs = usePhotographs()
  const [params, setParams] = useSearchParams()
  const active = params.get('category') || 'all'

  const filtered = useMemo(() => {
    if (active === 'all') return photographs
    return photographs.filter((item) => item.categorySlug === active)
  }, [active, photographs])

  function setCategory(slug) {
    const next = new URLSearchParams(params)
    if (!slug || slug === 'all') next.delete('category')
    else next.set('category', slug)
    setParams(next, { replace: true })
  }

  return (
    <>
      <section className="container-site py-16 md:py-24">
        <p className="label text-accent">Archive</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
          Photography
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          Wedding Shoots, Pre-Wedding Shoots, Corporate Events Shoots, Promotional Shoots, and
          Interior Shoots — curated, not catalogued.
        </p>
        <div className="mt-10">
          <CategoryFilter categories={PHOTOGRAPHY_CATEGORIES} active={active} onChange={setCategory} />
        </div>
      </section>

      <section className="container-site pb-24">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {filtered.map((photo, index) => {
            const span =
              index % 7 === 0
                ? 'lg:col-span-8'
                : index % 5 === 0
                  ? 'lg:col-span-7'
                  : 'lg:col-span-4'
            return (
              <div key={photo.id} className={span}>
                <PhotoCard photo={photo} large={index % 7 === 0} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
