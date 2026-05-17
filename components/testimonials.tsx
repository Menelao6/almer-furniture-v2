'use client'

import { Star } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'

interface Testimonial {
  _id: string
  clientName?: string
  author?: string
  clientTitle?: string
  quote?: string
  text?: string
  rating: number
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-page">
        <SectionHeader
          title="Çfarë thonë klientët tanë"
          description="Përvoja reale nga familje që na besuan projektin e tyre."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-gap)]">
          {testimonials.slice(0, 3).map((t) => {
            const name = t.clientName ?? t.author ?? 'Klient'
            const quote = t.quote ?? t.text ?? ''
            const subtitle = t.clientTitle ?? ''

            return (
              <article
                key={t._id}
                className="bg-card rounded-[var(--radius-lg)] border border-border p-[var(--space-card)] flex flex-col"
              >
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating || 5} yje`}>
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star
                      key={`${t._id}-star-${i}`}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-body text-muted-foreground italic leading-relaxed flex-1 mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="border-t border-border pt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center shrink-0">
                    {getInitials(name)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-small">{name}</p>
                    {subtitle ? (
                      <p className="text-eyebrow text-muted-foreground mt-0.5 normal-case tracking-normal">
                        {subtitle}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
