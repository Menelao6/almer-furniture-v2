'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import { ImageLightbox } from '@/components/image-lightbox'

interface ImageGalleryProps {
  images: { image?: unknown }[]
  productName: string
}

function resolveImageUrl(image: unknown): string {
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
    return urlFor(image).width(1200).height(1200).url()
  } catch {
    return ''
  }
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Nuk ka imazhe</p>
      </div>
    )
  }

  const imageUrls = images.map((img) => resolveImageUrl(img.image))
  const mainImageUrl = imageUrls[selectedIndex] ?? ''

  return (
    <>
      <div className="mb-4">
        <button
          type="button"
          onClick={() => mainImageUrl && setLightboxOpen(true)}
          disabled={!mainImageUrl}
          className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted cursor-zoom-in group touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-default"
          aria-label="Zmadho imazhin"
        >
          {mainImageUrl ? (
            <Image
              src={mainImageUrl}
              alt={productName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Imazhi nuk është i disponueshëm</p>
            </div>
          )}
          {mainImageUrl ? (
            <span className="absolute bottom-3 right-3 rounded-full bg-wood-dark/70 px-3 py-1.5 text-xs font-medium text-white pointer-events-none sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              Prek për të zmadhuar
            </span>
          ) : null}
        </button>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scroll-touch-x">
          {images.map((img, index) => {
            const thumbUrl = resolveImageUrl(img.image)
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all touch-manipulation ${
                  selectedIndex === index
                    ? 'border-primary'
                    : 'border-border hover:border-primary'
                }`}
                aria-label={`Imazhi ${index + 1}`}
                aria-current={selectedIndex === index}
              >
                {thumbUrl ? (
                  <Image
                    src={thumbUrl}
                    alt={`${productName} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
              </button>
            )
          })}
        </div>
      )}

      <ImageLightbox
        open={lightboxOpen && Boolean(mainImageUrl)}
        onClose={() => setLightboxOpen(false)}
        src={mainImageUrl}
        alt={productName}
        title={productName}
      />
    </>
  )
}
