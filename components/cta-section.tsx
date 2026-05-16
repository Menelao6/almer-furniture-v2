'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/355691234567?text=P%C3%ABrsh%C3%ABndetje%2C%20d%C3%ABshiroj%20nj%C3%AB%20konsult%C3%AB%20falas%20p%C3%ABr%20mobilje%20Almer.'

const steps = ['01 Konsultë', '02 Dizajn 3D', '03 Montim']

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-[#1C1612]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#B8864E] font-semibold mb-4">
          Filloni sot
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] leading-tight mb-4">
          Gati të transformoni
          <br />
          hapësirën tuaj?
        </h2>
        <p className="text-[#FAF7F2]/60 text-sm sm:text-base mb-8">
          Konsultë falas · Planifikim 3D · Ofertë pa detyrim
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full transition-colors"
          >
            <MessageCircle size={18} />
            Chato në WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-[#B8864E] border border-[#B8864E] hover:bg-[#B8864E]/10 rounded-full transition-colors"
          >
            Kërko ofertë
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#FAF7F2]/50">
          {steps.map((step, i) => (
            <span key={step} className="flex items-center gap-3 sm:gap-6">
              {i > 0 && <span className="text-[#FAF7F2]/25 hidden sm:inline">──</span>}
              <span>{step}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
