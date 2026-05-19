import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { GalleryExperience } from '@/components/gallery-experience'
import { sanityFetchList } from '@/lib/sanity.client'
import { allGalleryQuery } from '@/lib/sanity.queries'
import type { SanityGalleryItem } from '@/lib/sanity.types'

export const metadata: Metadata = {
  title: 'Galeria | Almer',
  description: 'Projektet tona — kuzhina, dhoma gjumi dhe hapësira të arreduara me mobilje Almer.',
}

export default async function GalleryPage() {
  const items = await sanityFetchList<SanityGalleryItem>({ query: allGalleryQuery })

  return (
    <>
      <Navigation />
      <main>
        <section className="section-padding-sm bg-warm-white border-b border-border">
          <div className="container-page">
            <p className="text-eyebrow text-primary font-semibold mb-3">Portofoli</p>
            <h1 className="font-serif text-h2 text-foreground leading-tight max-w-2xl mb-4">
              Hapësira që kemi transformuar
            </h1>
            <p className="text-body text-muted-foreground max-w-xl mb-6">
              Çdo projekt është një histori — nga vizualizimi 3D deri te montimi final. Prekni një
              projekt për të parë të gjitha fotot.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-small font-medium text-primary hover:underline touch-manipulation"
            >
              Dëshironi diçka të ngjashme? Konsultë falas →
            </Link>
          </div>
        </section>

        <GalleryExperience items={items} />
      </main>
      <Footer />
    </>
  )
}
