import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'
import Wordmark from '../brand/Wordmark'

export default function Hero({ photograph }) {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-bg md:min-h-[86svh]">
      {photograph ? (
        <img
          src={photograph.imageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/45 to-transparent" />

      <div className="container-site relative flex min-h-[78svh] flex-col justify-end pb-12 pt-20 md:min-h-[86svh] md:pb-20 md:pt-24">
        <div className="mb-5 md:mb-6">
          <Wordmark to={null} size="hero" />
        </div>

        <h1 className="max-w-4xl font-display text-[clamp(2.35rem,10vw,6.2rem)] leading-[0.95]">
          Zeal Icon
          <span className="block italic text-accent">Photography</span>
        </h1>

        <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-fg/80 md:mt-5 md:text-[1rem]">
          Premium editorial photography for weddings, events, interiors, and brands.
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <Button to="/contact" variant="cta" className="w-full px-6 py-3.5 text-[0.7rem] sm:w-auto sm:px-8 sm:py-4 sm:text-[0.72rem]">
            Contact Us →
          </Button>
          <Button to="/book" variant="book" className="w-full px-6 py-3.5 text-[0.7rem] sm:w-auto sm:px-8 sm:py-4 sm:text-[0.72rem]">
            Book a Shoot →
          </Button>
        </div>

        <div className="mt-6 md:mt-7">
          <SocialIcons size="md" />
        </div>
      </div>
    </section>
  )
}
