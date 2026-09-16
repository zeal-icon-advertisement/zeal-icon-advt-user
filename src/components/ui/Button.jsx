import { Link } from 'react-router-dom'

const variants = {
  solid:
    'bg-accent text-white hover:bg-accent-hover active:bg-accent-active',
  ghost: 'text-fg hover:text-accent',
  cta:
    'bg-accent text-white shadow-[0_10px_30px_rgb(190_0_0_/_0.28)] hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-accent-active',
  book:
    'border-2 border-accent bg-accent-muted text-accent shadow-[0_10px_28px_rgb(190_0_0_/_0.16)] hover:bg-accent hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:bg-accent-active',
}

export default function Button({
  to,
  href,
  children,
  ghost = false,
  variant,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}) {
  const tone = variant || (ghost ? 'ghost' : 'solid')
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition duration-300 disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none disabled:translate-y-0 ${variants[tone]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
