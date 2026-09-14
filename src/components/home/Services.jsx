import { Link } from 'react-router-dom'
import { services } from '../../data/placeholderContent'
import SoonBadge from '../ui/SoonBadge'
import Button from '../ui/Button'

export default function Services() {
  return (
    <section className="border-t border-line">
      <div className="container-site py-16 md:py-24">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-5">
          <div>
            <p className="label text-accent">Services</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">What we offer</h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button to="/contact" variant="cta" className="w-full sm:w-auto">
              Contact Us →
            </Button>
            <Button to="/book" variant="book" className="w-full sm:w-auto">
              Book a Shoot →
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const soon = service.status === 'soon'
            return (
              <Link
                key={service.id}
                to={service.href}
                className="group flex min-h-[160px] flex-col justify-between border border-line bg-elevated p-6 transition hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="label text-subtle">
                    {service.kind === 'photography' ? 'Photography' : 'Editorial'}
                  </p>
                  {soon ? <SoonBadge /> : null}
                </div>
                <div>
                  <h3 className="mt-6 font-display text-2xl leading-tight md:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                  <p className="mt-4 label text-muted transition group-hover:text-accent">
                    {soon ? 'Coming soon →' : 'Book this shoot →'}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
