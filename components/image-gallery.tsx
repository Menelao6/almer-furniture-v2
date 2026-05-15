'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { urlFor } from '@/lib/sanity.image'

interface ImageGalleryProps {
  images: any[]
  productName: string
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    )
  }

  const mainImage = images[selectedIndex]?.image
  const mainImageUrl = mainImage ? urlFor(mainImage).width(800).height(800).url() : null

  return (
    <>
      {/* Main Image */}
      <div className="mb-4">
        <div
          className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted cursor-zoom-in group"
          onClick={() => setLightboxOpen(true)}
        >
          {mainImageUrl ? (
            <Image
              src={mainImageUrl}
              alt={productName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Image unavailable</p>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
              Click to expand
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, index) => {
            const thumbUrl = img.image ? urlFor(img.image).width(100).height(100).url() : null
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  selectedIndex === index
                    ? 'border-accent'
                    : 'border-border hover:border-accent'
                }`}
              >
                {thumbUrl ? (
                  <Image
                    src={thumbUrl}
                    alt={`${productName} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && mainImageUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative w-full max-w-4xl aspect-square">
            <Image
              src={mainImageUrl}
              alt={productName}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>

          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg bg-black/50 text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
