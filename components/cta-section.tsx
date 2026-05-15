'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
          Transformoni Hapësirën Tuaj Sot
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Merrni konsultë të personalizuar të dizajnit nga ekspertët tanë të mobiljes luksi. Le të krijojmë shtëpinë e ëndrrave tuaja së bashku.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors duration-200 group"
        >
          <span>Planifiko Konsultën</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
