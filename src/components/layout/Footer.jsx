import { Link } from 'react-router-dom'
import Wordmark from '../brand/Wordmark'
import SoonBadge from '../ui/SoonBadge'
import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'
import { NAV_LINKS } from '../../lib/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-elevated">
      <div className="container-site py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Wordmark to="/" size="footer" />
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Photography now. Magazines and articles soon.
            </p>
            <div className="mt-6">
              <SocialIcons size="md" />
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="label text-subtle">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
                  >
                    {link.label}
                    {link.soon ? <SoonBadge /> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="md:col-span-4 md:flex md:flex-col md:items-end">
            <p className="label text-subtle md:text-right">Connect</p>
            <div className="mt-4 flex w-full flex-col gap-3 md:max-w-[220px]">
              <Button to="/contact" variant="cta" className="w-full px-5 py-3">
                Contact Us
              </Button>
              <Button to="/book" variant="book" className="w-full px-5 py-3">
                Book a Shoot
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} Zeal Icon Advertisement
          </p>
          <p className="text-xs text-subtle">Photography · Magazine · Articles</p>
        </div>
      </div>
    </footer>
  )
}
