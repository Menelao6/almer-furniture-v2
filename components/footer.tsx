'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Kompania',
      links: [
        { label: 'Rreth Nesh', href: '/about' },
        { label: 'Shërbimet', href: '/services' },
        { label: 'Galeria', href: '/gallery' },
        { label: 'Kontakt', href: '/contact' },
      ],
    },
    {
      title: 'Produktet',
      links: [
        { label: 'Të Gjithë Produktet', href: '/products' },
        { label: 'Divane', href: '/products?category=sofas' },
        { label: 'Karrige', href: '/products?category=chairs' },
        { label: 'Tryeza', href: '/products?category=tables' },
      ],
    },
    {
      title: 'Mbështetje',
      links: [
        { label: 'Pyetje të Shpeshta', href: '#' },
        { label: 'Informacione Dërgimi', href: '#' },
        { label: 'Këmbimet', href: '#' },
        { label: 'Politika e Privatësisë', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">L</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">Luksi</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Mobilje luksi të zgjedhura për shtëpinë e ëndrrave tuaja.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-semibold text-foreground mb-4">Informacione Kontakti</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Rruga e Dizajnit, 123</p>
                <p className="text-sm text-muted-foreground">Tiranë, Shqipëri 1001</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone size={20} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">+355 (04) 123-4567</p>
                <p className="text-sm text-muted-foreground">E Hënë-E Premte 9AM-6PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail size={20} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">hello@luksi.al</p>
                <p className="text-sm text-muted-foreground">Përgjigje brenda 24 orësh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mobilje Luksi. Të gjitha të drejtat e ruajtura.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politika e Privatësisë
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Kushtet e Shërbimit
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cilësimet e Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
