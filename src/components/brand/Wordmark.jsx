import { Link } from 'react-router-dom'

const LOGO_SRC = '/brand/zeal-icon-logo.png'

export default function Wordmark({ compact = false, to = '/', size = 'header' }) {
  const dimensions =
    size === 'hero'
      ? 'h-[4.25rem] w-[4.25rem] sm:h-20 sm:w-20 md:h-24 md:w-24'
      : size === 'footer'
        ? 'h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]'
        : compact
          ? 'h-10 w-10 sm:h-11 sm:w-11'
          : 'h-11 w-11 sm:h-12 sm:w-12'

  const inner = (
    <img
      src={LOGO_SRC}
      alt="Zeal Icon Advertisement"
      width={1024}
      height={1024}
      decoding="async"
      className={`${dimensions} block shrink-0 object-contain`}
      draggable={false}
    />
  )

  if (!to) {
    return (
      <span className="inline-flex shrink-0 overflow-hidden rounded-sm shadow-[0_10px_28px_rgb(0_0_0_/_0.35)] ring-1 ring-white/15">
        {inner}
      </span>
    )
  }

  return (
    <Link
      to={to}
      aria-label="Zeal Icon Advertisement home"
      className="inline-flex shrink-0 overflow-hidden rounded-sm shadow-[0_8px_22px_rgb(0_0_0_/_0.28)] ring-1 ring-white/15 transition hover:ring-accent/55"
    >
      {inner}
    </Link>
  )
}
