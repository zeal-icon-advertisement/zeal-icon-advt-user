import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/placeholderContent'
import SoonBadge from '../ui/SoonBadge'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function Services() {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    let offset = 0
    let frame = 0
    const speed = 0.55

    function tick() {
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2
        if (half > 0) {
          offset += speed
          if (offset >= half) offset -= half
          track.style.transform = `translate3d(${-offset}px, 0, 0)`
        }
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="border-t border-line">
      <div className="py-16 md:py-24">
        <div className="container-site mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-5">
          <Reveal>
            <p className="label text-text-accent">Services</p>
            <h2 className="font-service mt-3 text-4xl italic md:text-5xl">What we offer</h2>
          </Reveal>
          <Reveal delay={80}>
            <Button to="/contact" variant="cta" className="w-full sm:w-auto">
              Contact Us →
            </Button>
          </Reveal>
        </div>

        <div
          className="services-marquee-mask"
          onMouseEnter={() => {
            pausedRef.current = true
          }}
          onMouseLeave={() => {
            pausedRef.current = false
          }}
        >
          <div ref={trackRef} className="services-marquee">
            <ServiceTrack />
            <ServiceTrack />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceTrack() {
  return (
    <div className="flex gap-4 pe-4">
      {services.map((service) => {
        const soon = service.status === 'soon'
        return (
          <Link
            key={service.id}
            to={service.href}
            className="glass group flex min-h-[220px] w-[min(78vw,320px)] shrink-0 flex-col justify-between border border-line bg-elevated p-6 transition duration-500 hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="label text-subtle">
                {service.kind === 'photography' ? 'Photography' : 'Editorial'}
              </p>
              {soon ? <SoonBadge /> : null}
            </div>
            <div>
              <h3 className="font-service mt-8 text-[1.85rem] leading-[1.05] italic md:text-[2.15rem]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              <p className="mt-5 label text-muted transition duration-300 group-hover:text-white">
                {soon ? 'Coming soon →' : 'View photography →'}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
