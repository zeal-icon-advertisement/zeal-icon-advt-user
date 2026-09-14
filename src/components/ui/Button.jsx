import { Link } from 'react-router-dom'

const variants = {
  solid: 'bg-fg text-invert hover:bg-accent hover:text-fg',
  ghost: 'text-fg hover:text-accent',
  cta:
    'bg-accent text-invert shadow-[0_10px_30px_rgb(224_122_61_/_0.28)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0',
  book:
    'border-2 border-accent bg-accent-soft text-accent shadow-[0_10px_28px_rgb(224_122_61_/_0.16)] hover:bg-accent hover:text-invert hover:-translate-y-0.5 active:translate-y-0',
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
