'use client'

import Link from 'next/link'
import { ServiceCard } from './service-card'
import { mockServices } from '@/lib/mock-data'

interface Service {
  _id: string
  title?: string
  name?: string
  description: string
  icon?: string
  features?: string[]
}

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const display =
    services.length >= 3
      ? services.slice(0, 3).map((s, i) => ({
          ...mockServices[i],
          ...s,
          title: s.title ?? s.name ?? mockServices[i]?.title ?? 'Shërbim',
        }))
      : mockServices

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1612]">Shërbimet tona</h2>
          <Link
            href="/services"
            className="text-sm text-[#6B5B4E] hover:text-[#B8864E] transition-colors"
          >
            Të gjitha shërbimet →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {display.map((service) => (
            <ServiceCard
              key={service._id}
              title={service.title ?? ''}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3.5 text-sm font-medium text-white bg-[#1C1612] hover:bg-[#2a221c] rounded-full transition-colors"
          >
            Shfletoni të gjithë shërbimet →
          </Link>
        </div>
      </div>
    </section>
  )
}
