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
      className={`site-header fixed inset-x-0 top-0 z-[100] isolate ${
        overHero ? 'text-[#f3efe6]' : 'text-fg'
      }`}
      style={{ background: overHero ? 'transparent' : 'var(--bg)' }}
    >
      <div
        className={`site-nav-surface glass glass-strong container-site relative ${
          compact ? 'site-nav-compact py-2.5 lg:py-2.5' : 'site-nav-expanded py-3.5 lg:py-4'
        }`}
      >
        <button
          type="button"
          className="site-nav-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center text-current transition duration-300 hover:text-accent xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="site-nav-brand ml-auto sm:ml-0">
          <Wordmark compact={compact} />
        </div>

        <nav
          className="site-nav-links absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-6 xl:flex xl:gap-8"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link inline-flex items-center gap-2 whitespace-nowrap label transition duration-300 ${
                  isActive
                    ? 'is-active text-white'
                    : overHero
                      ? 'text-muted hover:text-white'
                      : 'text-muted hover:text-white'
                }`
              }
            >
              {link.label}
              {link.soon ? <SoonBadge /> : null}
            </NavLink>
          ))}
        </nav>

        <div className="site-nav-action ml-auto hidden shrink-0 xl:block">
          <Button
            to="/contact"
            variant="cta"
            className={`site-nav-cta-button ${compact ? 'px-4 py-2.5 text-[0.62rem]' : 'px-5 py-2.5'}`}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          className="glass glass-strong max-h-[calc(100svh-4.5rem)] overflow-y-auto bg-elevated px-5 py-6 text-muted xl:hidden"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.to}
              type="button"
              className="flex w-full items-center justify-between border-b border-line py-4 text-left transition duration-300 hover:text-white"
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
