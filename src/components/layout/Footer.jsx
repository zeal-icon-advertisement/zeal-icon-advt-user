import { Link } from 'react-router-dom'
import Wordmark from '../brand/Wordmark'
import SoonBadge from '../ui/SoonBadge'
import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'
import { NAV_LINKS } from '../../lib/navigation'
import { studioContact } from '../../data/placeholderContent'

export default function Footer() {
  return (
    <footer className="site-footer glass relative z-0 border-t border-line bg-elevated">
      <div className="container-site min-w-0 py-10 sm:py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-8">
          <div className="min-w-0 md:col-span-5">
            <Wordmark to="/" />
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Photography now. Magazines and articles soon.
            </p>
            <div className="mt-6">
              <SocialIcons size="md" />
            </div>
          </div>

          <div className="min-w-0 md:col-span-3">
            <p className="label text-subtle">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-sm text-muted transition duration-300 hover:text-white hover:translate-x-0.5"
                  >
                    {link.label}
                    {link.soon ? <SoonBadge /> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 md:col-span-4 md:text-right">
            <p className="label text-subtle">Studio</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <a
                href={`mailto:${studioContact.email}`}
                className="block break-all transition duration-300 hover:text-white sm:break-normal"
              >
                {studioContact.email}
              </a>
              <a
                href={`tel:+${studioContact.whatsapp}`}
                className="block break-words text-text-accent transition duration-300 hover:text-white"
              >
                {studioContact.phoneDisplay}
              </a>
              <p className="max-w-xs md:ml-auto">{studioContact.address}</p>
            </div>
            <div className="mt-6 md:flex md:justify-end">
              <Button to="/contact" variant="cta" className="w-full px-5 py-3 md:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex min-w-0 flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0 text-xs text-subtle">
            © {new Date().getFullYear()} Zeal Icon Advertisement
          </p>
          <p className="min-w-0 text-xs text-subtle">Photography · Magazine · Articles</p>
        </div>
      </div>
    </footer>
  )
}
