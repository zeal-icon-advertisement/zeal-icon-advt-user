import { Link } from 'react-router-dom'

export default function Wordmark({ compact = false, to = '/' }) {
  const inner = (
    <span className="inline-flex min-w-0 flex-col leading-none">
      <span
        className={`truncate font-display tracking-tight text-fg ${
          compact ? 'text-lg md:text-[1.35rem]' : 'text-[1.2rem] sm:text-[1.35rem] md:text-[1.55rem]'
        }`}
      >
        Zeal Icon
      </span>
      <span className="mt-1 truncate text-[0.52rem] font-semibold tracking-[0.22em] text-muted uppercase sm:text-[0.58rem] sm:tracking-[0.28em]">
        Advertisement
      </span>
    </span>
  )

  if (!to) return inner

  return (
    <Link
      to={to}
      aria-label="Zeal Icon Advertisement home"
      className="inline-flex min-w-0 max-w-full shrink"
    >
      {inner}
    </Link>
  )
}
