'use client'

import Link from 'next/link'
import { ServiceCard } from './service-card'
import { SectionHeader } from '@/components/section-header'
import type { SanityService } from '@/lib/sanity.types'

interface ServicesSectionProps {
  services: SanityService[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const display = services.slice(0, 3)

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-page">
        <SectionHeader
          title="Shërbimet tona"
          description="Nga kuzhina me porosi deri te arredimi i plotë — një ekip, një standard."
          link={{ href: '/services', label: 'Të gjitha shërbimet →' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-gap)] mb-[var(--space-block)]">
          {display.map((service) => (
            <ServiceCard
              key={service._id}
              title={service.title}
              description={service.description ?? ''}
              icon={service.icon}
              features={service.features}
              image={service.image}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-primary-foreground bg-wood-dark hover:opacity-90 rounded-full transition-opacity"
          >
            Shfletoni të gjithë shërbimet →
          </Link>
        </div>
      </div>
    </section>
  )
}
