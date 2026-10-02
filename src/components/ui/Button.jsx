import { Link } from 'react-router-dom'

const variants = {
  solid: 'glass-primary btn-frame bg-fg text-invert hover:bg-[#ddd6c8]',
  ghost: 'glass-control text-fg hover:text-accent',
  cta: 'glass-primary btn-frame relative rounded-xl bg-fg text-invert shadow-[0_10px_28px_rgb(243_239_230_/_0.08)] hover:bg-[#e8e2d4]',
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
  glow,
}) {
  const tone = variant || (ghost ? 'ghost' : 'solid')
  const shine = glow ?? tone === 'cta'
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition duration-300 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none disabled:hover:scale-100 ${variants[tone]} ${shine && tone === 'cta' ? 'btn-cta' : ''} ${className}`

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
