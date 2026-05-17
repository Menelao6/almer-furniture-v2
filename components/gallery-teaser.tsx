'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/section-header'
import { ImageLightbox } from '@/components/image-lightbox'

interface GalleryItem {
  _id: string
  title: string
  location: string
  image: string
  tall?: boolean
}

interface GalleryTeaserProps {
  items: GalleryItem[]
}

export function GalleryTeaser({ items }: GalleryTeaserProps) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)
  const [tall, ...rest] = items

  return (
    <section className="section-padding bg-card">
      <div className="container-page">
        <SectionHeader
          title="Projektet tona"
          description="Hapësira reale të realizuara për familje në Tiranë dhe gjithë Shqipërinë."
          link={{ href: '/gallery', label: 'Galeria e plotë →' }}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-gap)] auto-rows-[minmax(clamp(8rem,18vw,11rem),1fr)]">
          {tall && (
            <GalleryTile
              item={tall}
              className="col-span-1 row-span-2 min-h-[clamp(16rem,42vw,24rem)]"
              onOpen={() => setLightbox(tall)}
            />
          )}
          {rest.map((item) => (
            <GalleryTile key={item._id} item={item} onOpen={() => setLightbox(item)} />
          ))}
        </div>

        <p className="text-center mt-[var(--space-block)]">
          <Link
            href="/gallery"
            className="text-small text-muted-foreground hover:text-primary transition-colors"
          >
            Shiko të gjitha projektet →
          </Link>
        </p>
      </div>

      <ImageLightbox
        open={Boolean(lightbox)}
        onClose={() => setLightbox(null)}
        src={lightbox?.image ?? ''}
        alt={lightbox?.title ?? ''}
        title={lightbox?.title}
        description={lightbox?.location}
      />
    </section>
  )
}

function GalleryTile({
  item,
  className = '',
  onOpen,
}: {
  item: GalleryItem
  className?: string
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative rounded-[var(--radius-lg)] overflow-hidden bg-muted text-left w-full h-full min-h-[clamp(8rem,18vw,11rem)] touch-manipulation cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
      aria-label={`Zmadho: ${item.title}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-active:scale-[1.02]"
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-wood-dark/30 sm:bg-wood-dark/0 sm:group-hover:bg-wood-dark/70 transition-colors duration-300 flex flex-col justify-end p-[var(--space-card)] pointer-events-none">
        <h3 className="font-serif text-h3 text-white drop-shadow-sm">{item.title}</h3>
        {item.location ? (
          <p className="text-small text-white/80 mb-1">{item.location}</p>
        ) : null}
        <span className="text-small text-primary font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          Zmadho →
        </span>
      </div>
    </button>
  )
}


