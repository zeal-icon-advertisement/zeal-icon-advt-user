import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    function onScroll() {
      setOffset(Math.min(window.scrollY, 420) * 0.22)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-[84svh] overflow-hidden bg-bg sm:min-h-[100svh]">
      <div
        className="absolute inset-0 h-[118%] w-full will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <div className="hero-image h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/60 to-black/35" />

      <div className="container-site relative flex min-h-[84svh] flex-col justify-end pb-12 pt-28 sm:min-h-[100svh] md:pb-20 md:pt-32">
        <h1 className="hero-copy max-w-4xl font-display text-[clamp(2.35rem,10vw,6.2rem)] leading-[0.92]">
          Zeal Icon
          <span className="hero-accent-text hero-copy-delay mt-1 block italic [text-shadow:0_2px_18px_rgb(0_0_0_/_0.45)] md:mt-2">
            Advertisement
          </span>
        </h1>

        <p className="hero-copy-late mt-5 max-w-sm text-[0.95rem] leading-7 text-fg/80 md:mt-6 md:text-[1.05rem]">
          Photography-first creative media.
        </p>

        <div className="hero-copy-late mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <Button to="/contact" variant="cta" className="w-full px-6 py-3.5 text-[0.7rem] sm:w-auto sm:px-8 sm:py-4 sm:text-[0.72rem]">
            Contact Us →
          </Button>
        </div>

        <div className="hero-copy-late relative z-0 mt-6 md:mt-8">
          <SocialIcons size="md" />
        </div>
      </div>
    </section>
  )
}
