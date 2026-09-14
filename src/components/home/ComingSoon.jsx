import { Link } from 'react-router-dom'
import SoonBadge from '../ui/SoonBadge'

export default function ComingSoon() {
  return (
    <section className="border-t border-line">
      <div className="container-site py-16 md:py-24">
        <p className="label text-accent">Next</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl md:text-5xl">
          More from the studio is on the way.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Link
            to="/magazines"
            className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-soft p-8 transition hover:bg-accent-soft md:min-h-[280px]"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="label text-muted">Magazine</p>
              <SoonBadge />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">Editorial issues</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
                A print-like reading experience — coming soon.
              </p>
            </div>
          </Link>

          <Link
            to="/articles"
            className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-fg p-8 text-invert transition md:min-h-[280px]"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="label text-invert/60">Articles</p>
              <SoonBadge light />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">Stories & ideas</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-invert/65">
                Writing from the studio — coming soon.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
