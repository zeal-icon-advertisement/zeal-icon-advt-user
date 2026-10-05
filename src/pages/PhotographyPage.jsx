import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PHOTOGRAPHY_CATEGORIES } from '../lib/navigation'
import { getYouTubeVideoId } from '../lib/youtube'
import GalleryLightbox from '../components/photography/GalleryLightbox'
import CategoryFilter from '../components/ui/CategoryFilter'
import Reveal from '../components/ui/Reveal'

const MEDIA_FILTERS = [
  { name: 'Photos', slug: 'photos' },
  { name: 'Videos', slug: 'videos' },
]

const MEDIA_TYPES = { photos: 'photo', videos: 'video' }

export default function PhotographyPage() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get('category') || PHOTOGRAPHY_CATEGORIES[0].slug
  const initialSubItem = params.get('subItem') || PHOTOGRAPHY_CATEGORIES[0].subItems[0].slug
  const [openCategory, setOpenCategory] = useState(null)
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activeSubItem, setActiveSubItem] = useState(initialSubItem)
  const [activeMediaType, setActiveMediaType] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const currentCategory =
    PHOTOGRAPHY_CATEGORIES.find((category) => category.slug === activeCategory) ||
    PHOTOGRAPHY_CATEGORIES[0]

  const currentSubItem =
    currentCategory.subItems.find((item) => item.slug === activeSubItem) || currentCategory.subItems[0]

  const mediaItems = useMemo(
    () => [
      ...currentSubItem.gallery.map((image, index) => {
        const item = typeof image === 'string' ? { src: image, orientation: 'landscape' } : image
        return {
          id: `${currentSubItem.slug}-photo-${index}`,
          type: 'photo',
          src: item.src,
          orientation: item.orientation,
          title: `${currentSubItem.name} sample`,
        }
      }),
      ...(currentSubItem.videos || []).map((video) => {
        const youtubeId = getYouTubeVideoId(video.videoUrl)
        return {
          ...video,
          thumbnailUrl:
            video.thumbnailUrl ||
            (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : undefined),
        }
      }),
    ],
    [currentSubItem],
  )

  const visibleMedia = useMemo(
    () =>
      activeMediaType === 'all'
        ? mediaItems
        : mediaItems.filter((item) => item.type === MEDIA_TYPES[activeMediaType]),
    [activeMediaType, mediaItems],
  )

  const galleryRows = useMemo(
    () =>
      ['photo', 'video'].flatMap((type) =>
        ['landscape', 'portrait']
          .map((orientation) => ({
            type,
            orientation,
            items: visibleMedia
              .filter((item) => item.type === type && item.orientation === orientation)
              .map((item) => ({ item, index: visibleMedia.indexOf(item) })),
          }))
          .filter((row) => row.items.length),
      ),
    [visibleMedia],
  )

  function setSelection(categorySlug, subSlug) {
    const next = new URLSearchParams(params)
    next.set('category', categorySlug)
    next.set('subItem', subSlug)
    setParams(next, { replace: true })
    setActiveCategory(categorySlug)
    setActiveSubItem(subSlug)
    setOpenCategory(null)
    setLightboxIndex(null)
  }

  function handleCategoryHover(categorySlug) {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return
    setOpenCategory(categorySlug)
  }

  return (
    <>
      <section className="container-site py-16 md:py-24">
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
                      setLightboxIndex(null)
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
                    <div className="glass glass-strong absolute left-0 top-full z-30 w-[min(18rem,80vw)] rounded border border-line bg-elevated p-2 shadow-[0_20px_50px_rgba(0,0,0,0.22)] pointer-events-auto" style={{ marginTop: 0 }}>
                      {category.subItems.map((item) => {
                        const isSelected = activeSubItem === item.slug && activeCategory === category.slug
                        return (
                          <button
                            key={item.slug}
                            type="button"
                            onClick={() => setSelection(category.slug, item.slug)}
                            className={`flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm transition duration-300 ${
                              isSelected ? 'glass-inner bg-soft text-fg' : 'glass-inner text-muted hover:bg-soft hover:text-fg'
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

        <div className="mb-6">
          <CategoryFilter
            categories={MEDIA_FILTERS}
            active={activeMediaType}
            onChange={(type) => {
              setActiveMediaType(type)
              setLightboxIndex(null)
            }}
            label="Gallery media type"
          />
        </div>

        {galleryRows.length ? (
          <div className="space-y-4">
            {galleryRows.map((row) => (
              <div
                key={`${row.type}-${row.orientation}`}
                className={
                  row.orientation === 'landscape'
                    ? 'grid grid-cols-1 gap-2 sm:grid-cols-2'
                    : 'flex justify-center'
                }
              >
                {row.items.map(({ item, index }, itemIndex) => (
                  <Reveal
                    key={item.id}
                    className={row.orientation === 'portrait' ? 'w-full max-w-md' : 'min-w-0'}
                    delay={itemIndex * 70}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`Open ${item.type === 'video' ? 'video' : 'photo'}: ${item.title}`}
                      className="glass group relative block w-full overflow-hidden border border-line bg-soft text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <span
                        className={`glass-inner relative block overflow-hidden bg-soft ${
                          row.orientation === 'landscape' ? 'aspect-[3/2]' : 'aspect-[3/4]'
                        }`}
                      >
                        <img
                          src={item.type === 'video' ? item.thumbnailUrl : item.src}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="photo-zoom block h-full w-full object-contain"
                        />
                        {item.type === 'video' ? (
                          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
                            <span className="glass-dark flex size-12 items-center justify-center rounded-full border border-white/75 bg-black/40 text-white transition group-hover:scale-110">
                              <span aria-hidden="true" className="ml-1 border-y-[6px] border-y-transparent border-l-[9px] border-l-current" />
                            </span>
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted">
            No {activeMediaType} in this selection yet.
          </p>
        )}
      </section>
      {lightboxIndex !== null ? (
        <GalleryLightbox items={visibleMedia} index={lightboxIndex} setIndex={setLightboxIndex} />
      ) : null}
    </>
  )
}
