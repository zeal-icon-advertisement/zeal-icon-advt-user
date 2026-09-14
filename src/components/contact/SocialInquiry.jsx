import { studioContact } from '../../data/placeholderContent'
import SocialIcons from '../ui/SocialIcons'

export default function SocialInquiry() {
  return (
    <div>
      <p className="label text-subtle">Or inquire on</p>
      <div className="mt-5">
        <SocialIcons size="lg" />
      </div>
      <p className="mt-5 text-xs leading-6 text-muted">
        Tap a logo to message us on Instagram, WhatsApp, or LinkedIn.
        <br />
        WhatsApp: {studioContact.phoneDisplay}
      </p>
    </div>
  )
}
