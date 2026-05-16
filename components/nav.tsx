'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { LogoMark } from './logo-mark'

const navItems = [
  { label: 'Produktet', href: '/products' },
  { label: 'Galeria', href: '/gallery' },
  { label: 'Shërbimet', href: '/services' },
  { label: 'Rreth Nesh', href: '/about' },
  { label: 'Kontakt', href: '/contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-[#EDE8DF] shadow-sm'
          : 'bg-white border-[#EDE8DF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 lg:h-[4.5rem]">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <LogoMark className="w-7 h-7" />
            <span className="font-serif text-xl font-semibold text-[#1C1612] tracking-tight">
              Almer
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-[#6B5B4E] hover:text-[#1C1612] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-[#B8864E] hover:bg-[#a67845] rounded-full transition-colors duration-200"
            >
              Konsultë Falas
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-[#1C1612] hover:bg-[#FAF7F2] transition-colors"
            aria-label="Hap menunë"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-[#EDE8DF] pt-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm text-[#6B5B4E] hover:text-[#1C1612] hover:bg-[#FAF7F2] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 text-center px-5 py-3 text-sm font-medium text-white bg-[#B8864E] rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Konsultë Falas
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
