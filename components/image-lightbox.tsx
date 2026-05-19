'use client'

import { FullscreenGallery } from '@/components/fullscreen-gallery'

export interface ImageLightboxProps {
  open: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
  description?: string
}

/** Single-image fullscreen viewer (used on gallery teaser / grid). */
export function ImageLightbox({
  open,
  onClose,
  src,
  alt,
  title,
  description,
}: ImageLightboxProps) {
  return (
    <FullscreenGallery
      open={open}
      onClose={onClose}
      images={src ? [{ src, alt }] : []}
      title={title}
      description={description}
    />
  )
}
