import { studioContact } from '../../data/placeholderContent'
import SocialIcons from '../ui/SocialIcons'

export default function SocialInquiry() {
  return (
    <div>
      <p className="text-sm text-muted">Or inquire on</p>
      <div className="mt-4">
        <SocialIcons size="lg" />
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">
        Tap a logo to message us on Instagram, WhatsApp, or LinkedIn.
        <br />
        WhatsApp: {studioContact.phoneDisplay}
      </p>
    </div>
  )
}
