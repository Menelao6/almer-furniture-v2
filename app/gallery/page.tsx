import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'
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
        <section className="bg-[#FAF7F2] py-16 border-b border-[#EDE8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl text-[#1C1612] mb-4">Projektet tona</h1>
            <p className="text-lg text-[#6B5B4E] max-w-2xl">
              Hapësira reale të transformuara me mobilje me porosi — nga koncepti deri te montimi.
            </p>
          </div>
        </section>
        <GalleryGrid items={items} />
      </main>
      <Footer />
    </>
  )
}
