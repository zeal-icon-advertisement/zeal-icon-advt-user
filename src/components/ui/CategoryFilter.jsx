export default function CategoryFilter({ categories, active, onChange }) {
  const items = [{ name: 'All', slug: 'all' }, ...categories]

  return (
    <div
      className="flex flex-wrap gap-x-5 gap-y-3 border-b border-line pb-3 sm:gap-x-6"
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
            className={`border-b-2 pb-2 text-[0.7rem] font-semibold tracking-[0.06em] uppercase transition duration-300 sm:text-[0.72rem] ${
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
