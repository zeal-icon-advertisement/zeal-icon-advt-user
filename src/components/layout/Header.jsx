import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Wordmark from '../brand/Wordmark'
import SoonBadge from '../ui/SoonBadge'
import Button from '../ui/Button'
import { NAV_LINKS } from '../../lib/navigation'
import { useTheme } from '../../context/ThemeContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    function onScroll() {
      setCompact(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-transparent transition-all">
      <div
        className={`container-site flex items-center gap-3 ${
          compact ? 'py-2.5' : 'py-3'
        } lg:justify-between lg:gap-4 ${compact ? 'lg:py-2.5' : 'lg:py-3.5'}`}
      >
        {/* Mobile: hamburger on left */}
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line/60 bg-transparent text-fg transition [text-shadow:0_1px_8px_rgb(0_0_0_/_0.45)] hover:border-accent hover:text-accent lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="min-w-0 flex-1 lg:flex-none">
          <Wordmark compact={compact} />
        </div>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 label transition [text-shadow:0_1px_10px_rgb(0_0_0_/_0.4)] ${
                  isActive ? 'text-accent' : 'text-fg/90 hover:text-fg'
                }`
              }
            >
              {link.label}
              {link.soon ? <SoonBadge /> : null}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-5">
          <Button
            to="/contact"
            variant="cta"
            className={`hidden lg:inline-flex ${compact ? 'px-4 py-2.5 text-[0.62rem]' : 'px-5 py-2.5'}`}
          >
            Contact Us
          </Button>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/60 bg-transparent text-fg transition [text-shadow:0_1px_8px_rgb(0_0_0_/_0.45)] hover:border-accent hover:text-accent"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-elevated px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.to}
              type="button"
              className="flex w-full items-center justify-between border-b border-line py-4 text-left"
              onClick={() => {
                setOpen(false)
                navigate(link.to)
              }}
            >
              <span className="font-display text-2xl sm:text-3xl">{link.label}</span>
              {link.soon ? <SoonBadge /> : null}
            </button>
          ))}

          <div className="mt-6 grid gap-3">
            <Button to="/contact" variant="cta" className="w-full" onClick={() => setOpen(false)}>
              Contact Us →
            </Button>
            <Button to="/book" variant="book" className="w-full" onClick={() => setOpen(false)}>
              Book a Shoot →
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.5A7.5 7.5 0 0 1 9.5 4 7.5 7.5 0 1 0 20 14.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
