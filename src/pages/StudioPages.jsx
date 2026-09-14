import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import SoonBadge from '../components/ui/SoonBadge'
import InquiryForm from '../components/contact/InquiryForm'
import SocialInquiry from '../components/contact/SocialInquiry'
import { studioContact } from '../data/placeholderContent'

export default function ComingSoonPage({ kicker, title, description }) {
  return (
    <section className="container-site py-24 md:py-32">
      <div className="flex items-center gap-3">
        <p className="label text-accent">{kicker}</p>
        <SoonBadge />
      </div>
      <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-md text-[1rem] leading-8 text-muted">{description}</p>
      <div className="mt-10">
        <Button to="/photography" ghost>
          Explore photography →
        </Button>
      </div>
    </section>
  )
}

export function MagazinesPage() {
  return (
    <ComingSoonPage
      kicker="Magazine"
      title="Editorial issues are coming soon."
      description="A print-like reading experience for screens. Photography remains first."
    />
  )
}

export function ArticlesPage() {
  return (
    <ComingSoonPage
      kicker="Articles"
      title="Stories and ideas are coming soon."
      description="Writing from the studio will follow. Until then, explore the photography."
    />
  )
}

export function AboutPage() {
  return (
    <section className="container-site py-24 md:py-32">
      <p className="label text-accent">About</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">
        Zeal Icon Advertisement
      </h1>
      <p className="mt-8 max-w-xl text-[1.05rem] leading-8 text-muted">
        A photography-first creative media brand. We shoot weddings, pre-weddings, corporate
        events, campaigns and interiors — then shape those frames into a clear visual story.
      </p>
      <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-muted">
        Magazines and articles are coming next.
      </p>
    </section>
  )
}

export function ContactPage() {
  return (
    <section className="container-site py-16 md:py-24">
      <p className="label text-accent">Contact</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">
        Inquiry
      </h1>
      <p className="mt-5 max-w-lg text-[1rem] leading-7 text-muted">
        Ask a question, share your event details, or reach us on Instagram, LinkedIn or WhatsApp.
        To reserve a photography date, use Book a Shoot.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/book" variant="book" className="w-full px-7 py-3.5 sm:w-auto">
          Book a Shoot →
        </Button>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-display text-2xl md:text-3xl">Send a message</h2>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>

        <aside className="space-y-10 lg:col-span-5">
          <SocialInquiry />

          <div className="border-t border-line pt-8">
            <p className="label text-subtle">Studio email</p>
            <a
              href={`mailto:${studioContact.email}`}
              className="mt-3 block text-sm text-muted hover:text-accent"
            >
              {studioContact.email}
            </a>
            <p className="mt-6 label text-subtle">Phone / WhatsApp</p>
            <a
              href={`https://wa.me/${studioContact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm text-muted hover:text-accent"
            >
              {studioContact.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export function NotFoundPage() {
  return (
    <section className="container-site py-24 text-center md:py-32">
      <p className="label text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Page not found</h1>
      <Link to="/photography" className="mt-8 inline-flex label text-muted hover:text-accent">
        Back to photography →
      </Link>
    </section>
  )
}
