export default function SectionHeading({ index, eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {index ? <p className="label text-subtle">{index}</p> : null}
      {eyebrow ? <p className={`label text-accent ${index ? 'mt-3' : ''}`}>{eyebrow}</p> : null}
      <h2 className={`font-display text-4xl leading-[1.1] md:text-5xl ${eyebrow || index ? 'mt-3' : ''}`}>
        {title}
      </h2>
      {copy ? <p className="mt-4 max-w-lg text-[0.98rem] leading-8 text-muted">{copy}</p> : null}
    </div>
  )
}
