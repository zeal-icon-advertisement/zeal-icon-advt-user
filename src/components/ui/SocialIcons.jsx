import { socialLinks } from '../../data/placeholderContent'

const brand = {
  instagram: {
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  facebook: {
    label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.3H16l.4-2.8h-2.9V9.1c0-.8.3-1.4 1.5-1.4h1.5V5.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v1.9H8v2.8h2.5V21h3Z" />
      </svg>
    ),
  },
  youtube: {
    label: 'YouTube',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    ),
  },
  whatsapp: {
    label: 'WhatsApp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 11.6a8.4 8.4 0 0 1-12.5 7.3L4 20.1l1.3-3.1A8.4 8.4 0 1 1 20.5 11.6Zm-8.4 6.7a6.7 6.7 0 0 0 3.5-.9l.3-.1 2 .5-.5-1.9.2-.3a6.7 6.7 0 1 0-5.5 2.7Zm3.7-4.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.4 0-.1 0-.3-.1-.4-.1-.1-.5-1.1-.6-1.5-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 2.3.9 2.3.6 2.7.6.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2Z" />
      </svg>
    ),
  },
  linkedin: {
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.3 9.2H3.6V20h2.7V9.2ZM5 7.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM20.4 20h-2.7v-5.6c0-1.5-.6-2.4-1.9-2.4-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20H11V9.2h2.6v1.5c.5-.8 1.5-1.8 3.4-1.8 2.4 0 3.4 1.6 3.4 4.5V20Z" />
      </svg>
    ),
  },
}

export default function SocialIcons({
  className = '',
  size = 'md',
  showLabels = false,
}) {
  const box =
    size === 'lg'
      ? 'h-11 w-11'
      : size === 'sm'
        ? 'h-9 w-9'
        : 'h-10 w-10'

  const order = ['instagram', 'facebook', 'youtube', 'linkedin', 'whatsapp']
  const links = order
    .map((id) => socialLinks.find((item) => item.id === id))
    .filter(Boolean)

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((item) => {
        const meta = brand[item.id]
        if (!meta) return null
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={meta.label}
            title={meta.label}
            className={`social-icon inline-flex items-center gap-2 rounded-full text-white ${
              showLabels ? 'px-4 py-2.5' : `${box} justify-center`
            }`}
          >
            {meta.icon}
            {showLabels ? (
              <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
                {meta.label}
              </span>
            ) : null}
          </a>
        )
      })}
    </div>
  )
}
