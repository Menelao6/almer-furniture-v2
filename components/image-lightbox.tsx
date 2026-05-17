'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export interface ImageLightboxProps {
  open: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
  description?: string
}

export function ImageLightbox({
  open,
  onClose,
  src,
  alt,
  title,
  description,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !src) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title ?? alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white touch-manipulation active:bg-white/25"
        aria-label="Mbyll"
      >
        <X size={22} aria-hidden />
      </button>

      <div
        className="relative flex w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[min(72vh,720px)] aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden bg-muted">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {(title || description) && (
          <div className="mt-4 max-w-lg text-center px-2">
            {title ? (
              <h3 className="font-serif text-xl text-white mb-1">{title}</h3>
            ) : null}
            {description ? (
              <p className="text-small text-white/75">{description}</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
