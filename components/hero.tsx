'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop'

const stats = [
  '25+ vite',
  '1,500+ projekte',
  '100% me porosi',
  'Konsultim falas',
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Kuzhinë dhe dhomë ndenjeje Almer"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top right, rgba(28,22,18,0.75) 0%, rgba(28,22,18,0.35) 45%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-28 pt-32">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 mb-4 font-medium">
          Punime artizanale · Tiranë, Shqipëri
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] max-w-3xl mb-6">
          Mobilje e punuar
          <br />
          me dorë, për çdo
          <br />
          dhomë të shtëpisë.
        </h1>
        <p className="text-base sm:text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
          Që nga viti 1998, transformojmë hapësirat shqiptare me mobilje me porosi
          dhe material premium.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#B8864E] hover:bg-[#a67845] rounded-full transition-colors"
          >
            Shiko punimet
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white border border-white/60 hover:bg-white/10 rounded-full transition-colors"
          >
            Ofertë falas
          </Link>
        </div>
      </div>

      <div className="relative z-20 bg-white border-t border-[#EDE8DF] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-6 text-sm text-[#1C1612] font-medium">
            {stats.map((stat, i) => (
              <span key={stat} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="hidden sm:inline text-[#EDE8DF] select-none" aria-hidden>
                    ·
                  </span>
                )}
                <span>{stat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
