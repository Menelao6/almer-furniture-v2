'use client'

import { Star } from 'lucide-react'

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
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1612] text-center mb-12">
          Çfarë thonë klientët tanë
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => {
            const name = t.clientName ?? t.author ?? 'Klient'
            const quote = t.quote ?? t.text ?? ''
            const subtitle = t.clientTitle ?? ''

            return (
              <article
                key={t._id}
                className="bg-white rounded-xl border border-[#EDE8DF] p-6 sm:p-8 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star
                      key={`${t._id}-star-${i}`}
                      size={16}
                      className="fill-[#B8864E] text-[#B8864E]"
                    />
                  ))}
                </div>
                <p className="text-[#6B5B4E] italic leading-relaxed flex-1 mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="border-t border-[#EDE8DF] pt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B8864E] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                    {getInitials(name)}
                  </div>
                  <div>
                    <p className="font-medium text-[#1C1612] text-sm">{name}</p>
                    {subtitle && (
                      <p className="text-xs text-[#6B5B4E] mt-0.5">{subtitle}</p>
                    )}
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
