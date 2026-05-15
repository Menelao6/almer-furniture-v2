'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { urlFor } from '@/lib/sanity.image'

interface Testimonial {
  _id: string
  clientName: string
  clientTitle?: string
  image?: any
  quote: string
  rating: number
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Çfarë Thonë Klientët Tanë
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Përvoja reale të klientëve të kënaqur që kanë transformuar shtëpitë e tyre me mobiljen tonë.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-card rounded-lg border border-border p-8 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`${testimonial._id}-star-${i}`}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 border-t border-border pt-6">
                {testimonial.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(testimonial.image).width(48).height(48).url()}
                      alt={testimonial.clientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.clientName}
                  </p>
                  {testimonial.clientTitle && (
                    <p className="text-sm text-muted-foreground">
                      {testimonial.clientTitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
