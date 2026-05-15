'use client'

import Link from 'lucide-react'
import { ServiceCard } from './service-card'
import { ArrowRight } from 'lucide-react'

interface Service {
  _id: string
  title: string
  slug: { current: string }
  description: string
  icon?: string
  image?: any
}

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Shërbimet Tona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Përtej mobiljes, ne ofrojmë zgjidhje të plota të dizajnit të brendshëm të përshtatura me nevojat tuaja unike.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 3).map((service) => (
            <ServiceCard
              key={service._id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <a
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 group"
          >
            <span>Shfletoni Të Gjithë Shërbimet</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
