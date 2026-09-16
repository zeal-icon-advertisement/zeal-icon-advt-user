import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function Wordmark({ compact = false, to = '/', size = 'header' }) {
  const { theme } = useTheme()
  const logoSrc =
    theme === 'light' ? '/brand/logo-on-light.png?v=4' : '/brand/logo-on-dark.png?v=4'

  const dimensions =
    size === 'hero'
      ? 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20'
      : size === 'footer'
        ? 'h-14 w-14 sm:h-16 sm:w-16'
        : compact
          ? 'h-10 w-10'
          : 'h-11 w-11 sm:h-12 sm:w-12'

  const inner = (
    <img
      src={logoSrc}
      alt="Zeal Icon Advertisement"
      width={500}
      height={500}
      decoding="async"
      className={`${dimensions} block shrink-0 object-contain`}
      draggable={false}
    />
  )

  if (!to) {
    return <span className="inline-flex shrink-0">{inner}</span>
  }

  return (
    <Link
      to={to}
      aria-label="Zeal Icon Advertisement home"
      className="inline-flex shrink-0 transition hover:opacity-85"
    >
      {inner}
    </Link>
  )
}
