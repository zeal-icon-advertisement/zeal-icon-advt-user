import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Wordmark from '../brand/Wordmark'
import SoonBadge from '../ui/SoonBadge'
import Button from '../ui/Button'
import { NAV_LINKS } from '../../lib/navigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const overHero = isHome && !compact && !open

  useEffect(() => {
    function onScroll() {
      setCompact(window.scrollY > 2)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] isolate ${
        overHero ? 'text-[#f3efe6]' : 'text-fg'
      }`}
      style={{ background: overHero ? 'transparent' : 'var(--bg)' }}
    >
      <div
        className={`container-site relative flex items-center gap-3 ${
          compact ? 'py-2.5 lg:py-2.5' : 'py-3.5 lg:py-4'
        }`}
      >
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-current transition duration-300 hover:text-accent lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="flex min-w-0 items-center self-center">
          <Wordmark compact={compact} />
        </div>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-6 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link inline-flex items-center gap-2 whitespace-nowrap label transition duration-300 ${
                  isActive
                    ? 'is-active text-accent'
                    : overHero
                      ? 'text-[#f3efe6]/78 hover:text-[#f3efe6]'
                      : 'text-muted hover:text-fg'
                }`
              }
            >
              {link.label}
              {link.soon ? <SoonBadge /> : null}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 lg:block">
          <Button
            to="/contact"
            variant="cta"
            className={compact ? 'px-4 py-2.5 text-[0.62rem]' : 'px-5 py-2.5'}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          className="max-h-[calc(100svh-4rem)] overflow-y-auto bg-elevated px-5 py-6 text-fg lg:hidden"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.to}
              type="button"
              className="flex w-full items-center justify-between border-b border-line py-4 text-left transition duration-300 hover:text-accent"
              onClick={() => {
                setOpen(false)
                navigate(link.to)
              }}
            >
              <span className="font-display text-2xl sm:text-3xl">{link.label}</span>
              {link.soon ? <SoonBadge /> : null}
            </button>
          ))}

          <div className="mt-6">
            <Button to="/contact" variant="cta" className="w-full" onClick={() => setOpen(false)}>
              Contact Us →
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
