import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Wordmark({ compact = false, to = '/' }) {
  const inner = (
    <span
      className={`inline-flex min-w-0 items-center gap-1.5 ${
        compact ? 'h-9 sm:h-10' : 'h-10 sm:h-11 md:h-12'
      }`}
    >
      <img src={logo} alt="" className="h-full w-auto shrink-0 object-contain object-left" />
      <span className="inline-flex h-full min-w-0 flex-col justify-center gap-0.5 leading-none">
        <span className="truncate font-display text-[1.1rem] tracking-tight text-fg sm:text-[1.2rem] md:text-[1.28rem]">
          Zeal Icon
        </span>
        <span className="truncate text-[0.5rem] font-semibold tracking-[0.2em] text-muted uppercase sm:text-[0.55rem] sm:tracking-[0.22em]">
          Advertisement
        </span>
      </span>
    </span>
  )

  if (!to) return inner

  return (
    <Link
      to={to}
      aria-label="Zeal Icon Advertisement home"
      className="site-wordmark inline-flex min-w-0 items-center self-center transition duration-300 hover:opacity-80"
    >
      {inner}
    </Link>
  )
}
