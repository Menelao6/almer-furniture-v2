'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FullscreenGallery } from '@/components/fullscreen-gallery'
import { useReliableTap } from '@/lib/use-reliable-tap'
import type { SanityGalleryItem } from '@/lib/sanity.types'
import { getGallerySlides, getLightboxDescription } from '@/lib/gallery-utils'

interface GalleryProjectPhotosProps {
  project: SanityGalleryItem
}

export function GalleryProjectPhotos({ project }: GalleryProjectPhotosProps) {
  const slides = getGallerySlides(project)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (slides.length === 0) {
    return (
      <p className="text-body text-muted-foreground py-12 text-center">
        Ky projekt nuk ka foto të publikuara ende.
      </p>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[var(--space-gap)]">
        {slides.map((slide, index) => (
          <PhotoCell
            key={`${slide.src}-${index}`}
            src={slide.src}
            alt={slide.alt}
            index={index}
            featured={index === 0}
            onOpen={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      <FullscreenGallery
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        images={slides}
        initialIndex={lightboxIndex ?? 0}
        onIndexChange={(i) => setLightboxIndex(i)}
        title={project.title}
        description={getLightboxDescription(project)}
      />
    </>
  )
}

function PhotoCell({
  src,
  alt,
  index,
  featured,
  onOpen,
}: {
  src: string
  alt: string
  index: number
  featured: boolean
  onOpen: () => void
}) {
  const openTap = useReliableTap(onOpen)

  return (
    <button
      type="button"
      className={`group relative overflow-hidden rounded-[var(--radius-lg)] bg-muted text-left w-full touch-manipulation cursor-zoom-in [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        featured
          ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[clamp(16rem,40vw,24rem)]'
          : 'aspect-square'
      }`}
      aria-label={`Zmadho foto ${index + 1}`}
      {...openTap}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover pointer-events-none select-none transition-transform duration-500 group-active:scale-[1.02] sm:group-hover:scale-[1.03]"
        sizes={featured ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 50vw, 20vw'}
        draggable={false}
      />
      <span className="absolute inset-0 bg-wood-dark/0 group-active:bg-wood-dark/15 sm:group-hover:bg-wood-dark/15 transition-colors pointer-events-none" />
      <span className="absolute bottom-2 right-2 rounded-full bg-wood-dark/70 px-2 py-0.5 text-[10px] font-medium text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity pointer-events-none">
        Zmadho
      </span>
    </button>
  )
}
