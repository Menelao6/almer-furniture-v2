'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Images } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import type { SanityGalleryItem } from '@/lib/sanity.types'
import { getCoverImage, getGalleryProjectPath, getGallerySlides } from '@/lib/gallery-utils'

interface GalleryTeaserProps {
  items: SanityGalleryItem[]
}

export function GalleryTeaser({ items }: GalleryTeaserProps) {
  if (items.length === 0) return null

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
          <GalleryTile
            item={tall}
            className="col-span-1 row-span-2 min-h-[clamp(16rem,42vw,24rem)]"
          />
          {rest.map((item) => (
            <GalleryTile key={item._id} item={item} />
          ))}
        </div>

        <p className="text-center mt-[var(--space-block)]">
          <Link
            href="/gallery"
            className="text-small text-muted-foreground hover:text-primary transition-colors touch-manipulation"
          >
            Shiko të gjitha projektet →
          </Link>
        </p>
      </div>
    </section>
  )
}

function GalleryTile({
  item,
  className = '',
}: {
  item: SanityGalleryItem
  className?: string
}) {
  const cover = getCoverImage(item)
  const photoCount = getGallerySlides(item).length
  const href = getGalleryProjectPath(item)

  return (
    <Link
      href={href}
      className={`group relative rounded-[var(--radius-lg)] overflow-hidden bg-muted block w-full h-full min-h-[clamp(8rem,18vw,11rem)] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 [-webkit-tap-highlight-color:transparent] ${className} ${!cover ? 'pointer-events-none opacity-60' : ''}`}
      aria-label={`Shiko ${photoCount} foto: ${item.title}`}
    >
      {cover ? (
        <Image
          src={cover}
          alt={item.title}
          fill
          className="object-cover pointer-events-none select-none transition-transform duration-500 group-active:scale-[1.02]"
          sizes="(max-width: 1024px) 50vw, 25vw"
          draggable={false}
        />
      ) : null}
      {photoCount > 1 ? (
        <span className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-wood-dark/75 px-2 py-0.5 text-[10px] font-medium text-white pointer-events-none">
          <Images size={10} aria-hidden />
          {photoCount}
        </span>
      ) : null}
      <div className="absolute inset-0 bg-wood-dark/30 sm:bg-wood-dark/0 sm:group-hover:bg-wood-dark/70 transition-colors duration-300 flex flex-col justify-end p-[var(--space-card)] pointer-events-none">
        <h3 className="font-serif text-h3 text-white drop-shadow-sm">{item.title}</h3>
        {item.location ? (
          <p className="text-small text-white/80 mb-1">{item.location}</p>
        ) : null}
        <span className="text-small text-primary font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          Shiko projektin →
        </span>
      </div>
    </Link>
  )
}
