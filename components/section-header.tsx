import Link from 'next/link'

interface SectionHeaderProps {
  title: string
  eyebrow?: string
  description?: string
  link?: { href: string; label: string }
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  link,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-[var(--space-block)] ${isCenter ? 'text-center' : ''} ${className}`}>
      {eyebrow ? (
        <p className="text-eyebrow text-primary font-semibold mb-3">{eyebrow}</p>
      ) : null}
      <div
        className={`flex flex-col gap-4 ${isCenter ? 'items-center' : 'sm:flex-row sm:items-end sm:justify-between'}`}
      >
        <div className={isCenter ? 'max-w-2xl' : ''}>
          <h2 className="font-serif text-h2 text-foreground leading-tight">{title}</h2>
          {description ? (
            <p className="text-body text-muted-foreground mt-3 max-w-2xl">{description}</p>
          ) : null}
        </div>
        {link && !isCenter ? (
          <Link
            href={link.href}
            className="text-small text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            {link.label}
          </Link>
        ) : null}
      </div>
      {link && isCenter ? (
        <Link
          href={link.href}
          className="inline-block mt-6 text-small text-muted-foreground hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      ) : null}
    </div>
  )
}
