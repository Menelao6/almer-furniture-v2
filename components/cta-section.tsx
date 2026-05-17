'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/355691234567?text=P%C3%ABrsh%C3%ABndetje%2C%20d%C3%ABshiroj%20nj%C3%AB%20konsult%C3%AB%20falas%20p%C3%ABr%20mobilje%20Almer.'

const steps = ['01 Konsultë', '02 Dizajn 3D', '03 Montim']

export function CTASection() {
  return (
    <section className="section-padding bg-wood-dark">
      <div className="container-page max-w-3xl text-center">
        <p className="text-eyebrow text-primary font-semibold mb-4">Filloni sot</p>
        <h2 className="font-serif text-h2 text-warm-white leading-tight mb-4">
          Gati të transformoni hapësirën tuaj?
        </h2>
        <p className="text-body text-warm-white/60 mb-8">
          Konsultë falas · Planifikim 3D · Ofertë pa detyrim
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-[var(--space-block)]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full transition-colors"
          >
            <MessageCircle size={18} aria-hidden />
            Chato në WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-primary border border-primary hover:bg-primary/10 rounded-full transition-colors"
          >
            Kërko ofertë
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-small text-warm-white/50">
          {steps.map((step, i) => (
            <span key={step} className="flex items-center gap-3 sm:gap-6">
              {i > 0 && <span className="text-warm-white/25 hidden sm:inline" aria-hidden>──</span>}
              <span>{step}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
