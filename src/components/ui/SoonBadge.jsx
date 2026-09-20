export default function SoonBadge({ light = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.18em] uppercase ${
        light
          ? 'bg-fg text-invert'
          : 'bg-fg text-invert'
      }`}
    >
      Soon
    </span>
  )
}
