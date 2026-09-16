export default function SoonBadge({ light = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-[0.58rem] font-bold tracking-[0.2em] uppercase transition duration-300 ${
        light
          ? 'border border-accent/80 bg-accent/25 text-white group-hover:border-accent group-hover:bg-accent'
          : 'bg-accent text-white group-hover:bg-accent-hover'
      }`}
      aria-label="Coming soon"
    >
      Soon
    </span>
  )
}
