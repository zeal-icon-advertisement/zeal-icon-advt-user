import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import InquiryForm from '../components/contact/InquiryForm'
import SocialInquiry from '../components/contact/SocialInquiry'
import { studioContact } from '../data/placeholderContent'
import Reveal from '../components/ui/Reveal'

export default function ComingSoonPage({ kicker, title, description, notice }) {
  return (
    <section className="container-site flex min-h-[70svh] flex-col justify-center py-20 md:py-28">
      <div className="glass soon-page mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-line bg-elevated">
        <div className="px-6 py-10 text-center sm:px-10 md:px-12 md:py-12">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-fg uppercase">
            <span className="soon-dot" aria-hidden="true" />
            Coming soon
          </p>
          <p className="mt-6 text-sm tracking-wide text-subtle uppercase">{kicker}</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-fg md:text-5xl">{title}</h1>
        </div>

        <p className="soon-notice border-t border-line px-6 py-5 text-center text-[1.05rem] leading-8 text-fg sm:px-10 md:px-12">
          {notice}
        </p>

        <div className="border-t border-line px-6 py-8 text-center sm:px-10 md:px-12">
          <p className="mx-auto max-w-md text-[0.98rem] leading-7 text-muted">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button to="/photography" variant="cta" glow={false}>
              Explore photography →
            </Button>
            <Link
              to="/contact"
              className="text-[0.95rem] text-muted underline decoration-muted/50 underline-offset-4 transition duration-300 hover:text-white hover:decoration-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MagazinesPage() {
  return (
    <ComingSoonPage
      kicker="Magazines"
      title="Editorial issues are on the way."
      notice="Our magazines are coming soon. We are preparing a print-like reading experience — please check back shortly."
      description="Photography remains first. Magazines will follow as a studio editorial."
    />
  )
}

export function ArticlesPage() {
  return (
    <ComingSoonPage
      kicker="Articles"
      title="Stories and ideas are on the way."
      notice="Our articles are coming soon. Writing from the studio is in progress — please check back shortly."
      description="Until then, explore the photography, or send us an inquiry."
    />
  )
}

export function AboutPage() {
  return (
    <section className="container-site py-24 md:py-32">
      <Reveal>
        <p className="label text-text-accent">About</p>
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
      </Reveal>
    </section>
  )
}

export function ContactPage() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="max-w-xl">
        <p className="text-sm tracking-wide text-subtle uppercase">Contact</p>
        <h1 className="mt-3 font-sans text-3xl font-medium tracking-tight text-fg md:text-4xl">
          Inquiry
        </h1>
        <p className="mt-4 text-[0.98rem] leading-7 text-muted">
          Ask a question, share your event details, or reach us on Instagram, LinkedIn or WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="glass rounded-xl border border-line bg-elevated p-6 md:p-8 lg:col-span-7">
          <h2 className="font-sans text-lg font-medium tracking-tight text-fg">Send a message</h2>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>

        <aside className="glass rounded-xl border border-line bg-elevated p-6 md:p-8 lg:col-span-5">
          <SocialInquiry />

          <div className="mt-8 space-y-5 border-t border-line pt-8">
            <div>
              <p className="text-sm text-muted">Studio email</p>
              <a
                href={`mailto:${studioContact.email}`}
                className="mt-1.5 block break-all text-[0.95rem] text-muted transition duration-300 hover:text-white sm:break-normal"
              >
                {studioContact.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-muted">Phone / WhatsApp</p>
              <a
                href={`https://wa.me/${studioContact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 block break-words text-[0.95rem] text-text-accent transition duration-300 hover:text-white"
              >
                {studioContact.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm text-muted">Studio address</p>
              <p className="mt-1.5 text-[0.95rem] leading-7 text-muted">{studioContact.address}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export function NotFoundPage() {
  return (
    <section className="container-site py-24 text-center md:py-32">
      <p className="label text-text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Page not found</h1>
      <Link to="/photography" className="mt-8 inline-flex label text-muted transition duration-300 hover:text-white">
        Back to photography →
      </Link>
    </section>
  )
}
