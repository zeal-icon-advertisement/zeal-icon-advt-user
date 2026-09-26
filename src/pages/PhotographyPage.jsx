import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PHOTOGRAPHY_CATEGORIES } from '../lib/navigation'
import { usePhotographs } from '../hooks/usePhotographs'
import PhotoCard from '../components/photography/PhotoCard'
import Reveal from '../components/ui/Reveal'

export default function PhotographyPage() {
  const photographs = usePhotographs()
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get('category') || PHOTOGRAPHY_CATEGORIES[0].slug
  const initialSubItem = params.get('subItem') || PHOTOGRAPHY_CATEGORIES[0].subItems[0].slug
  const [openCategory, setOpenCategory] = useState(null)
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activeSubItem, setActiveSubItem] = useState(initialSubItem)

  const currentCategory =
    PHOTOGRAPHY_CATEGORIES.find((category) => category.slug === activeCategory) ||
    PHOTOGRAPHY_CATEGORIES[0]

  const currentSubItem =
    currentCategory.subItems.find((item) => item.slug === activeSubItem) || currentCategory.subItems[0]

  const filtered = useMemo(() => {
    return photographs.filter((item) => item.categorySlug === currentCategory.slug)
  }, [currentCategory.slug, photographs])

  function setSelection(categorySlug, subSlug) {
    const next = new URLSearchParams(params)
    next.set('category', categorySlug)
    next.set('subItem', subSlug)
    setParams(next, { replace: true })
    setActiveCategory(categorySlug)
    setActiveSubItem(subSlug)
    setOpenCategory(null)
  }

  function handleCategoryHover(categorySlug) {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return
    setOpenCategory(categorySlug)
  }

  return (
    <>
      <section className="container-site py-16 md:py-24">
        <p className="label text-accent">Archive</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
          Photography &amp; Videography
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">
          Weddings &amp; Celebrations, Commercial, Fashion &amp; Lifestyle, Hospitality, Real Estate,
          Corporate, Podcast, Healthcare, and Education — curated, not catalogued.
        </p>

        <div className="mt-10">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {PHOTOGRAPHY_CATEGORIES.map((category) => {
              const selected = activeCategory === category.slug
              const open = openCategory === category.slug

              return (
                <div
                  key={category.slug}
                  className="relative inline-block pb-2"
                  onMouseEnter={() => handleCategoryHover(category.slug)}
                  onMouseLeave={(event) => {
                    const next = event.relatedTarget
                    if (next && event.currentTarget.contains(next)) return
                    setOpenCategory((value) => (value === category.slug ? null : value))
                  }}
                  onFocus={() => handleCategoryHover(category.slug)}
                  onBlur={(event) => {
                    const next = event.relatedTarget
                    if (next && event.currentTarget.contains(next)) return
                    setOpenCategory((value) => (value === category.slug ? null : value))
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setOpenCategory(open ? null : category.slug)
                      if (!selected) {
                        setActiveCategory(category.slug)
                        setActiveSubItem(category.subItems[0].slug)
                      }
                    }}
                    className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] transition duration-300 ${
                      selected
                        ? 'border-accent bg-accent/8 text-fg'
                        : 'border-line bg-elevated text-muted hover:border-accent/50 hover:text-fg'
                    }`}
                  >
                    {category.name}
                  </button>

                  {open ? (
                    <div className="absolute left-0 top-full z-30 w-[min(18rem,80vw)] rounded border border-line bg-elevated p-2 shadow-[0_20px_50px_rgba(0,0,0,0.22)] pointer-events-auto" style={{ marginTop: 0 }}>
                      {category.subItems.map((item) => {
                        const isSelected = activeSubItem === item.slug && activeCategory === category.slug
                        return (
                          <button
                            key={item.slug}
                            type="button"
                            onClick={() => setSelection(category.slug, item.slug)}
                            className={`flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm transition duration-300 ${
                              isSelected ? 'bg-soft text-fg' : 'text-muted hover:bg-soft hover:text-fg'
                            }`}
                          >
                            <span>{item.name}</span>
                            <span aria-hidden="true" className="text-subtle">→</span>
                          </button>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container-site pb-24">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label text-subtle">Selected focus</p>
            <h2 className="mt-2 font-display text-3xl leading-none md:text-5xl">
              {currentCategory.name} / {currentSubItem.name}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted md:text-right">
            Sample frames for this stream, designed to show the visual language and service depth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentSubItem.gallery.map((image, index) => (
            <Reveal key={`${currentSubItem.slug}-${index}`} delay={index * 70}>
              <div className="overflow-hidden border border-line bg-soft">
                <img
                  src={image}
                  alt={`${currentSubItem.name} sample`}
                  className="photo-zoom aspect-[3/4] w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <p className="label text-subtle">Related archive</p>
          <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
            {filtered.map((photo, index) => {
              const span =
                index % 7 === 0
                  ? 'lg:col-span-8'
                  : index % 5 === 0
                    ? 'lg:col-span-7'
                    : 'lg:col-span-4'
              return (
                <Reveal key={photo.id} className={span} delay={(index % 6) * 50}>
                  <PhotoCard photo={photo} large={index % 7 === 0} />
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
