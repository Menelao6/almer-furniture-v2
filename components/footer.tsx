'use client'

import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { LogoMark } from './logo-mark'

const productLinks = [
  { label: 'Kuzhinat', href: '/products?category=kuzhina' },
  { label: 'Dhoma gjumi', href: '/products?category=dhoma-gjumi' },
  { label: 'Dhoma ndenje', href: '/products?category=dhoma-ndenje' },
  { label: 'Dyer & dritare', href: '/products?category=dyer-dritare' },
  { label: 'Të gjitha produktet', href: '/products' },
]

const companyLinks = [
  { label: 'Rreth Nesh', href: '/about' },
  { label: 'Shërbimet', href: '/services' },
  { label: 'Galeria', href: '/gallery' },
  { label: 'Kontakt', href: '/contact' },
  { label: 'Konsultë falas', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#130C08] text-[#FAF7F2]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <LogoMark className="w-7 h-7" />
              <span className="font-serif text-xl text-[#FAF7F2]">Almer</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Mobilje artizanale me porosi — druri premium, zejtari shqiptar që nga 1998.
            </p>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#B8864E] shrink-0" />
                <a href="tel:+35541234567" className="hover:text-[#FAF7F2] transition-colors">
                  +355 4 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#B8864E] shrink-0" />
                <a
                  href="mailto:info@almer.al"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  info@almer.al
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#B8864E] shrink-0 mt-0.5" />
                <span>Rr. e Kavajës, Tiranë 1001, Shqipëri</span>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#FAF7F2]/15 flex items-center justify-center hover:border-[#B8864E] hover:text-[#B8864E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#FAF7F2]/15 flex items-center justify-center hover:border-[#B8864E] hover:text-[#B8864E] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[#FAF7F2] text-sm font-medium mb-4">Produktet</h3>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FAF7F2] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[#FAF7F2] text-sm font-medium mb-4">Kompania</h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="hover:text-[#FAF7F2] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[#FAF7F2] text-sm font-medium mb-4">Orari i punës</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>E Hënë – E Premte: 08:00 – 18:00</li>
              <li>E Shtunë: 09:00 – 14:00</li>
              <li>E Dielë: Mbyllur</li>
            </ul>
            <a
              href="https://maps.google.com/?q=Tirane+Albania"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#B8864E] hover:text-[#d4a96a] transition-colors"
            >
              Shiko në hartë →
            </a>
          </div>
        </div>

        <div className="border-t border-[#FAF7F2]/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#FAF7F2]/40">
          <p>© 2025 Almer · Tiranë, Shqipëri</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-[#FAF7F2]/70 transition-colors">
              Politika e privatësisë
            </Link>
            <Link href="#" className="hover:text-[#FAF7F2]/70 transition-colors">
              Kushtet e shërbimit
            </Link>
            <Link href="#" className="hover:text-[#FAF7F2]/70 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
