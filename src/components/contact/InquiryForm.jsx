import { useState } from 'react'
import Button from '../ui/Button'
import { studioContact } from '../../data/placeholderContent'

const initial = {
  name: '',
  email: '',
  phone: '',
  service: 'Wedding Shoots',
  message: '',
}

export default function InquiryForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    setError('')

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Name, phone and message are required.')
      return
    }

    // Frontend-only: store inquiry locally until backend/CMS is ready
    try {
      const key = 'zealicon-inquiries'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      existing.push({
        ...form,
        id: `inq-${Date.now()}`,
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem(key, JSON.stringify(existing))
      setStatus('sent')
      setForm(initial)
    } catch {
      setError('Could not save your inquiry. Please try WhatsApp instead.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-line bg-elevated p-8">
        <p className="label text-accent">Sent</p>
        <h3 className="mt-3 font-display text-3xl">Thanks — we got your inquiry.</h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          Our team will reply soon. For faster response, message us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={`https://wa.me/${studioContact.whatsapp}?text=${encodeURIComponent(
              'Hi, I just submitted an inquiry on the website.',
            )}`}
          >
            WhatsApp us →
          </Button>
          <Button ghost onClick={() => setStatus('idle')}>
            Send another
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field label="Name *" htmlFor="inq-name">
        <input
          id="inq-name"
          className="field"
          value={form.name}
          onChange={update('name')}
          placeholder="Your name"
          autoComplete="name"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone *" htmlFor="inq-phone">
          <input
            id="inq-phone"
            className="field"
            value={form.phone}
            onChange={update('phone')}
            placeholder="+91 ..."
            autoComplete="tel"
          />
        </Field>
        <Field label="Email" htmlFor="inq-email">
          <input
            id="inq-email"
            type="email"
            className="field"
            value={form.email}
            onChange={update('email')}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </Field>
      </div>

      <Field label="Interested in" htmlFor="inq-service">
        <select id="inq-service" className="field" value={form.service} onChange={update('service')}>
          <option>Wedding Shoots</option>
          <option>Pre-Wedding Shoots</option>
          <option>Corporate Events Shoots</option>
          <option>Promotional Shoots</option>
          <option>Interior Shoots</option>
          <option>Magazine (coming soon)</option>
          <option>Articles (coming soon)</option>
          <option>General inquiry</option>
        </select>
      </Field>

      <Field label="Message *" htmlFor="inq-message">
        <textarea
          id="inq-message"
          className="field min-h-[140px] resize-y"
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your event, date, and location..."
        />
      </Field>

      {error ? <p className="text-sm text-accent">{error}</p> : null}

      <Button type="submit">Send inquiry →</Button>
    </form>
  )
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="label text-subtle">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  )
}
