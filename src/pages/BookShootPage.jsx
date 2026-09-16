import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import { PHOTOGRAPHY_CATEGORIES, TIME_SLOTS, studioContact } from '../data/placeholderContent'
import {
  bookShoot,
  formatDisplayDate,
  getAvailableDays,
  getSlotStatus,
} from '../lib/bookingService'

const empty = {
  name: '',
  phone: '',
  email: '',
  note: '',
}

export default function BookShootPage() {
  const [params] = useSearchParams()
  const preset = params.get('service') || PHOTOGRAPHY_CATEGORIES[0].slug

  const days = useMemo(() => getAvailableDays(16), [])
  const [service, setService] = useState(
    PHOTOGRAPHY_CATEGORIES.some((c) => c.slug === preset) ? preset : PHOTOGRAPHY_CATEGORIES[0].slug,
  )
  const [date, setDate] = useState(days[0]?.key || '')
  const [slot, setSlot] = useState('')
  const [form, setForm] = useState(empty)
  const [error, setError] = useState('')
  const [booking, setBooking] = useState(null)
  const [tick, setTick] = useState(0)

  const serviceName =
    PHOTOGRAPHY_CATEGORIES.find((c) => c.slug === service)?.name || 'Photography Shoot'

  function refreshAvailability() {
    setTick((n) => n + 1)
  }

  function onBook(event) {
    event.preventDefault()
    setError('')
    try {
      const result = bookShoot({
        date,
        slot,
        service: serviceName,
        ...form,
      })
      setBooking(result)
      setForm(empty)
      setSlot('')
      refreshAvailability()
    } catch (err) {
      setError(err.message || 'Booking failed.')
      refreshAvailability()
    }
  }

  if (booking) {
    const slotLabel = TIME_SLOTS.find((s) => s.id === booking.slot)?.label || booking.slot
    const waText = encodeURIComponent(
      `Hi Zeal Icon, I booked a ${booking.service} on ${formatDisplayDate(booking.date)} at ${slotLabel}. Name: ${booking.name}, Phone: ${booking.phone}`,
    )

    return (
      <section className="container-site py-20 md:py-28">
        <p className="label text-accent">Confirmed</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">Shoot booked.</h1>
        <div className="mt-8 max-w-lg space-y-3 border border-line bg-elevated p-6 text-sm leading-7">
          <p>
            <span className="text-subtle">Service</span>
            <br />
            {booking.service}
          </p>
          <p>
            <span className="text-subtle">Date & time</span>
            <br />
            {formatDisplayDate(booking.date)} · {slotLabel}
          </p>
          <p>
            <span className="text-subtle">Name</span>
            <br />
            {booking.name}
          </p>
          <p className="text-muted">
            We will confirm on WhatsApp / call. Keep this slot free until then.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`https://wa.me/${studioContact.whatsapp}?text=${waText}`}>
            Confirm on WhatsApp →
          </Button>
          <Button ghost onClick={() => setBooking(null)}>
            Book another shoot
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="container-site py-16 md:py-24">
      <p className="label text-accent">Photography only</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">
        Book a shoot
      </h1>
      <p className="mt-5 max-w-lg text-[1rem] leading-7 text-muted">
        Check our availability and reserve a photography appointment. Magazines and articles are
        not bookable yet.
      </p>

      <form onSubmit={onBook} className="mt-12 grid gap-12 lg:grid-cols-12" noValidate>
        <div className="space-y-8 lg:col-span-7">
          <div>
            <p className="label text-subtle">1 · Shoot type</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {PHOTOGRAPHY_CATEGORIES.map((item) => {
                const active = service === item.slug
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setService(item.slug)}
                    className={`border px-4 py-3 text-left text-sm transition ${
                      active
                        ? 'border-accent bg-accent-soft text-fg'
                        : 'border-line text-muted hover:border-fg/30 hover:text-fg'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <p className="label text-subtle">2 · Pick a date</p>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
              {days.map((day) => {
                const active = date === day.key
                return (
                  <button
                    key={day.key}
                    type="button"
                    onClick={() => {
                      setDate(day.key)
                      setSlot('')
                    }}
                    className={`border px-2 py-3 text-center transition ${
                      active
                        ? 'border-accent bg-accent-soft'
                        : 'border-line hover:border-fg/30'
                    }`}
                  >
                    <span className="block text-[0.65rem] uppercase tracking-wider text-subtle">
                      {day.weekday}
                    </span>
                    <span className="mt-1 block font-display text-xl">{day.day}</span>
                    <span className="block text-[0.65rem] text-muted">{day.month}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div key={`${date}-${tick}`}>
            <p className="label text-subtle">3 · Available times</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {TIME_SLOTS.map((item) => {
                const status = getSlotStatus(date, item.id)
                const available = status === 'available'
                const active = slot === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={!available}
                    onClick={() => setSlot(item.id)}
                    className={`min-w-[110px] border px-4 py-3 text-sm transition ${
                      !available
                        ? 'cursor-not-allowed border-line text-subtle line-through opacity-50'
                        : active
                          ? 'border-accent bg-accent text-white'
                          : 'border-line text-muted hover:border-fg/40 hover:text-fg'
                    }`}
                  >
                    {item.label}
                    {!available ? (
                      <span className="mt-1 block text-[0.6rem] tracking-wider uppercase no-underline">
                        Booked
                      </span>
                    ) : null}
                  </button>
                )
              })}
            </div>
            <p className="mt-3 text-xs text-subtle">
              Grey / struck slots are unavailable. Sundays are closed.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-line bg-elevated p-6 md:p-8">
            <p className="label text-subtle">4 · Your details</p>
            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="label text-subtle">Name *</span>
                <input
                  className="field mt-2"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Full name"
                  required
                />
              </label>
              <label className="block">
                <span className="label text-subtle">Phone *</span>
                <input
                  className="field mt-2"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+91 ..."
                  required
                />
              </label>
              <label className="block">
                <span className="label text-subtle">Email</span>
                <input
                  type="email"
                  className="field mt-2"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@email.com"
                />
              </label>
              <label className="block">
                <span className="label text-subtle">Notes</span>
                <textarea
                  className="field mt-2 min-h-[100px] resize-y"
                  value={form.note}
                  onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                  placeholder="Location, guest count, special requests..."
                />
              </label>
            </div>

            {date && slot ? (
              <p className="mt-5 text-sm text-muted">
                Booking <span className="text-fg">{serviceName}</span> on{' '}
                <span className="text-fg">{formatDisplayDate(date)}</span> at{' '}
                <span className="text-fg">
                  {TIME_SLOTS.find((s) => s.id === slot)?.label}
                </span>
              </p>
            ) : (
              <p className="mt-5 text-sm text-subtle">Select a date and available time to continue.</p>
            )}

            {error ? <p className="mt-3 text-sm text-accent">{error}</p> : null}

            <div className="mt-6">
              <Button type="submit" disabled={!date || !slot} className="w-full">
                Confirm booking →
              </Button>
            </div>
            <p className="mt-4 text-xs leading-6 text-subtle">
              Prefer not to book online?{' '}
              <Link to="/contact" className="text-muted hover:text-accent">
                Send an inquiry
              </Link>{' '}
              or message on WhatsApp.
            </p>
          </div>
        </div>
      </form>
    </section>
  )
}
