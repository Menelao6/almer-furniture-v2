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
    <section
      className="relative flex flex-col"
      style={{ minHeight: 'var(--hero-min-h)' }}
    >
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
              'linear-gradient(to top right, rgba(28,22,18,0.78) 0%, rgba(28,22,18,0.4) 42%, transparent 72%)',
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end container-page pb-[clamp(5rem,12vh,7rem)] pt-[clamp(5rem,14vh,8rem)]">
        <p className="text-eyebrow text-white/80 mb-4 font-medium normal-case">
          Punime artizanale · Tiranë, Shqipëri
        </p>
        <h1 className="font-serif text-display font-semibold text-white leading-[1.08] max-w-[18ch] mb-6">
          Mobilje e punuar me dorë, për çdo dhomë të shtëpisë.
        </h1>
        <p className="text-body text-white/72 max-w-[42ch] mb-8 leading-relaxed">
          Që nga viti 1998, transformojmë hapësirat shqiptare me mobilje me porosi dhe
          material premium.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-white bg-primary hover:opacity-90 rounded-full transition-opacity"
          >
            Shiko punimet
            <ArrowRight size={16} aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-white border border-white/55 hover:bg-white/10 rounded-full transition-colors"
          >
            Ofertë falas
          </Link>
        </div>
      </div>

      <div className="relative z-20 bg-card border-t border-border py-[clamp(0.875rem,2vh,1.125rem)]">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-[var(--space-gap)] text-small text-foreground font-medium">
            {stats.map((stat, i) => (
              <span key={stat} className="flex items-center gap-[var(--space-gap)]">
                {i > 0 && (
                  <span className="hidden sm:inline text-border select-none" aria-hidden>
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
