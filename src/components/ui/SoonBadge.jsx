export default function SoonBadge({ light = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-[0.58rem] font-bold tracking-[0.2em] uppercase ${
        light
          ? 'bg-accent text-fg'
          : 'bg-accent text-invert'
      }`}
    >
      Soon
    </span>
  )
}
