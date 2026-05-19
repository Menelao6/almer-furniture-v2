'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Expand } from 'lucide-react'
import { urlFor } from '@/lib/sanity.image'
import { FullscreenGallery } from '@/components/fullscreen-gallery'
import { useReliableTap } from '@/lib/use-reliable-tap'

interface ImageGalleryProps {
  images: { image?: unknown; alt?: string }[]
  productName: string
}

function resolveImageUrl(image: unknown, size = 1200): string {
  if (!image) return ''
  if (typeof image === 'string') return image
  if (
    typeof image === 'object' &&
    image !== null &&
    'asset' in image &&
    (image as { asset?: { url?: string } }).asset?.url
  ) {
    return (image as { asset: { url: string } }).asset.url
  }
  try {
    return urlFor(image).width(size).height(size).url()
  } catch {
    return ''
  }
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = useReliableTap(() => setLightboxOpen(true))

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] bg-muted rounded-[var(--radius-lg)] flex items-center justify-center">
        <p className="text-muted-foreground text-small">Nuk ka imazhe</p>
      </div>
    )
  }

  const slides = images
    .map((img, i) => ({
      src: resolveImageUrl(img.image, 1600),
      alt: img.alt || `${productName} ${i + 1}`,
    }))
    .filter((s) => s.src)

  const mainImageUrl = slides[selectedIndex]?.src ?? slides[0]?.src ?? ''

  const selectThumb = (index: number) => setSelectedIndex(index)

  return (
    <>
      <div className="space-y-3">
        <button
          type="button"
          disabled={!mainImageUrl}
          className="relative w-full aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-muted cursor-zoom-in touch-manipulation [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-default"
          aria-label="Hap imazhin në ekran të plotë"
          {...openLightbox}
        >
          {mainImageUrl ? (
            <Image
              src={mainImageUrl}
              alt={productName}
              fill
              className="object-contain pointer-events-none select-none"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              draggable={false}
            />
          ) : (
            <div className="flex h-full items-center justify-center pointer-events-none">
              <p className="text-muted-foreground text-small">Imazhi nuk është i disponueshëm</p>
            </div>
          )}
          {mainImageUrl ? (
            <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-wood-dark/75 px-3 py-1.5 text-xs font-medium text-white pointer-events-none">
              <Expand size={14} aria-hidden />
              Zmadho
            </span>
          ) : null}
        </button>

        {slides.length > 1 ? (
          <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:overflow-x-auto sm:scroll-touch-x sm:pb-1">
            {slides.map((slide, index) => (
              <ThumbButton
                key={`${slide.src}-${index}`}
                active={selectedIndex === index}
                onSelect={() => selectThumb(index)}
                src={resolveImageUrl(images[index]?.image, 200)}
                alt={slide.alt}
                index={index}
              />
            ))}
          </div>
        ) : null}
      </div>

      <FullscreenGallery
        open={lightboxOpen && slides.length > 0}
        onClose={() => setLightboxOpen(false)}
        images={slides}
        initialIndex={selectedIndex}
        onIndexChange={setSelectedIndex}
        title={productName}
      />
    </>
  )
}

function ThumbButton({
  active,
  onSelect,
  src,
  alt,
  index,
}: {
  active: boolean
  onSelect: () => void
  src: string
  alt: string
  index: number
}) {
  const selectTap = useReliableTap(onSelect)

  return (
    <button
        type="button"
        className={`relative h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-colors touch-manipulation [-webkit-tap-highlight-color:transparent] ${
          active ? 'border-primary' : 'border-border'
        }`}
        aria-label={`Imazhi ${index + 1}`}
        aria-current={active}
        {...selectTap}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover pointer-events-none select-none"
            sizes="80px"
            draggable={false}
          />
        ) : (
          <div className="h-full w-full bg-muted pointer-events-none" />
        )}
    </button>
  )
}
