'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Subtitle */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-semibold">
              Dizajn Premium i Brendshëm
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight">
            Mobilje Luksi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
              Për Shtëpinë Tuaj
            </span>
          </h1>

          {/* Subtitle Text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Zbuloni koleksionin tonë ekskluziv të mobiljes luksi të punuar me dorë dhe zgjidhjeve të dizajnit premium të brendshëm të kuruar për shijen më të kërkuese.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            <Link
              href="/products"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2 group"
            >
              <span>Shfletoni Koleksionin</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-card border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Konsultë Falas
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Produktet</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">1000+</p>
              <p className="text-sm text-muted-foreground">Klientët</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10 vjet</p>
              <p className="text-sm text-muted-foreground">Përvojë</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
