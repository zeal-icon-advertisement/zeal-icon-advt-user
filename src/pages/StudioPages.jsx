import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import InquiryForm from '../components/contact/InquiryForm'
import SocialInquiry from '../components/contact/SocialInquiry'
import { studioContact } from '../data/placeholderContent'
import Reveal from '../components/ui/Reveal'

const aboutServices = [
  {
    number: '01',
    title: 'Photography',
    description: 'Portraits, weddings, events, products and brand photography.',
  },
  {
    number: '02',
    title: 'Films & Videos',
    description: 'Cinematic films, reels, promotional videos and visual stories.',
  },
  {
    number: '03',
    title: 'Weddings & Pre-Weddings',
    description: 'Emotional, cinematic coverage designed around your story.',
  },
  {
    number: '04',
    title: 'Events & Campaigns',
    description: 'Creative visual production for events, businesses and campaigns.',
  },
]

const aboutApproach = [
  { number: '01', title: 'CAPTURE', description: 'We find the moments that matter.' },
  { number: '02', title: 'CREATE', description: 'We shape them through photography, film and design.' },
  { number: '03', title: 'CONNECT', description: 'We create visuals that people remember.' },
]

const aboutPrinciples = [
  {
    title: 'Story before style.',
    description: "We don't just create beautiful frames. We create frames with meaning.",
  },
  {
    title: 'People over poses.',
    description: 'Authentic expressions and real moments always come first.',
  },
  {
    title: 'Creative meets production.',
    description: 'Photography, video, design and digital thinking come together under one creative direction.',
  },
  {
    title: 'Made for the next generation.',
    description: 'A young creative team with a modern visual language and a strong focus on storytelling.',
  },
]

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
    <div className="about-page">
      <section className="container-site about-hero">
        <div className="about-hero-copy hero-copy">
          <p className="label text-text-accent">ABOUT ZEAL ICON</p>
          <p className="about-tagline">Your moments. Your story.</p>
          <h1 className="about-display mt-5 max-w-3xl font-display">
            We turn moments into visual stories.
          </h1>
          <p className="about-lead mt-6 max-w-xl text-muted">
            Zeal Icon Advertisement is a photography-first creative media studio based in Pune. We
            create photographs, films and visual campaigns that turn real moments into stories
            people remember.
          </p>
        </div>

        <div className="about-hero-art-wrap">
          <div className="about-hero-art glass">
            <img src="/website-content/banner.jpg" alt="" className="about-hero-image" />
            <span className="about-art-orbit about-art-orbit-one" aria-hidden="true" />
            <span className="about-art-orbit about-art-orbit-two" aria-hidden="true" />
            <span className="about-art-glow" aria-hidden="true" />
          </div>
        </div>

        <a className="about-scroll" href="#about-story" aria-label="Scroll to our story">
          <span aria-hidden="true" />
        </a>
      </section>

      <section className="container-site about-section about-story" id="about-story">
        <Reveal className="about-story-copy">
          <p className="label text-subtle">OUR STORY</p>
          <h2 className="about-section-title mt-4 font-display">Built around the power of a frame.</h2>
          <p className="mt-6 text-muted">
            Zeal Icon started with a simple idea — every moment has a story, and the right frame can
            make that story unforgettable.
          </p>
          <p className="mt-5 text-muted">
            From weddings and pre-weddings to events, brands and creative campaigns, we bring
            together photography, filmmaking and design to create visuals that feel intentional,
            emotional and real.
          </p>
        </Reveal>
        <Reveal className="about-story-visual" delay={120}>
          <div className="about-story-glow" aria-hidden="true" />
          <div className="about-story-frame">
            <img
              src="/website-content/photo-01.jpg"
              alt="A live event framed in a shower of falling confetti"
              className="about-story-image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="about-image-caption label text-subtle">A MOMENT, HELD IN FRAME</p>
        </Reveal>
      </section>

      <section className="about-section about-services-section">
        <div className="container-site">
          <Reveal className="about-section-heading">
            <p className="label text-text-accent">WHAT WE DO</p>
            <h2 className="about-section-title mt-4 font-display">What we create.</h2>
          </Reveal>
          <div className="about-services-grid">
            {aboutServices.map((service, index) => (
              <Reveal key={service.number} delay={index * 70} className="about-service-reveal">
                <article className="glass about-service-card">
                  <span className="about-service-number" aria-hidden="true">{service.number}</span>
                  <div>
                    <h3 className="about-card-title font-display">{service.title}</h3>
                    <p className="mt-3 text-muted">{service.description}</p>
                  </div>
                  <span className="about-card-rule" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site about-section about-approach-section">
        <Reveal className="about-section-heading">
          <p className="label text-text-accent">OUR APPROACH</p>
          <h2 className="about-section-title mt-4 font-display">From a moment to a story.</h2>
        </Reveal>
        <div className="about-approach-grid">
          {aboutApproach.map((step, index) => (
            <Reveal key={step.number} delay={index * 110} className="about-approach-step">
              <span className="about-step-number font-display">{step.number}</span>
              <h3 className="about-step-title label text-text-accent">{step.title}</h3>
              <p className="mt-3 text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section about-why-section">
        <div className="container-site about-why-layout">
          <Reveal className="about-why-heading">
            <p className="label text-text-accent">WHY ZEAL ICON</p>
            <h2 className="about-section-title mt-4 font-display">Why we do it differently.</h2>
          </Reveal>
          <div className="about-principles-grid">
            {aboutPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70} className="about-principle">
                <span className="about-principle-index label text-subtle">0{index + 1}</span>
                <h3 className="about-card-title mt-3 font-display">{principle.title}</h3>
                <p className="mt-3 text-muted">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site about-section about-team-section">
        <div className="about-team-layout">
          <Reveal className="about-team-copy">
            <p className="label text-text-accent">THE CREATIVE COLLECTIVE</p>
            <h2 className="about-section-title mt-4 font-display">A small team. A lot of ideas.</h2>
            <p className="mt-6 text-muted">
              We are a young creative collective of photographers, filmmakers, designers and
              technology-driven creators working together to build visual experiences.
            </p>
          </Reveal>
          <Reveal className="about-team-art" delay={120}>
            <div className="about-team-placeholder glass" aria-hidden="true">
              <span className="about-team-orbit about-team-orbit-one" />
              <span className="about-team-orbit about-team-orbit-two" />
              <span className="about-team-core" />
              <span className="about-team-particle about-team-particle-one" />
              <span className="about-team-particle about-team-particle-two" />
              <span className="about-team-particle about-team-particle-three" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-site about-cta-section">
        <Reveal>
          <div className="glass glass-strong about-cta-surface">
            <span className="about-cta-glow" aria-hidden="true" />
            <div className="about-cta-content">
              <p className="label text-text-accent">YOUR MOMENTS. YOUR STORY.</p>
              <h2 className="about-cta-title mt-4 font-display">Have a story worth capturing?</h2>
              <p className="about-cta-copy mt-5 text-muted">
                Let's turn your next idea, moment or campaign into something worth remembering.
              </p>
              <Button to="/contact" variant="cta" className="mt-8">
                START A CONVERSATION
              </Button>
              <p className="about-cta-services label text-subtle">
                Photography <span aria-hidden="true">•</span> Films <span aria-hidden="true">•</span> Campaigns <span aria-hidden="true">•</span> Events
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
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
