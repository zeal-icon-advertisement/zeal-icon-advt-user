export default function CategoryFilter({ categories, active, onChange }) {
  const items = [{ name: 'All', slug: 'all' }, ...categories]

  return (
    <div
      className="category-filter-scroll flex min-w-0 gap-2 overflow-x-auto border-b border-line pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3"
      role="tablist"
      aria-label="Photography categories"
    >
      {items.map((item) => {
        const selected = active === item.slug
        return (
          <button
            key={item.slug}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(item.slug)}
            className={`shrink-0 whitespace-nowrap border-b-2 pb-2 text-left text-[0.68rem] font-semibold uppercase tracking-[0.06em] transition duration-300 sm:text-[0.72rem] ${
              selected
                ? 'border-accent text-fg'
                : 'border-transparent text-muted hover:text-fg'
            }`}
          >
            {item.name}
          </button>
        )
      })}
    </div>
  )
}
