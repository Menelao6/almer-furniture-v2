'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export interface GallerySlide {
  src: string
  alt: string
}

export interface FullscreenGalleryProps {
  open: boolean
  onClose: () => void
  images: GallerySlide[]
  initialIndex?: number
  onIndexChange?: (index: number) => void
  title?: string
  description?: string
}

const SWIPE_THRESHOLD_PX = 48

export function FullscreenGallery({
  open,
  onClose,
  images,
  initialIndex = 0,
  onIndexChange,
  title,
  description,
}: FullscreenGalleryProps) {
  const [index, setIndex] = useState(initialIndex)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const [mounted, setMounted] = useState(false)

  const validImages = images.filter((img) => img.src)
  const count = validImages.length
  const current = validImages[index]

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (open) setIndex(Math.min(initialIndex, Math.max(0, validImages.length - 1)))
  }, [open, initialIndex, validImages.length])

  const goPrev = useCallback(() => {
    if (count <= 1) return
    setIndex((i) => {
      const next = i === 0 ? count - 1 : i - 1
      onIndexChange?.(next)
      return next
    })
  }, [count, onIndexChange])

  const goNext = useCallback(() => {
    if (count <= 1) return
    setIndex((i) => {
      const next = i === count - 1 ? 0 : i + 1
      onIndexChange?.(next)
      return next
    })
  }, [count, onIndexChange])

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
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, goPrev, goNext])

  if (!mounted || !open || !current) return null

  const content = (
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-black touch-none"
      style={{ height: '100dvh', width: '100dvw' }}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? current.alt}
    >
      <div className="relative z-30 flex shrink-0 items-center justify-between gap-3 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2">
        <div className="min-w-0 flex-1 pr-2">
          {title ? (
            <p className="font-serif text-base text-white truncate sm:text-lg">{title}</p>
          ) : null}
          {description ? (
            <p className="text-xs text-white/60 truncate sm:text-sm">{description}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white touch-manipulation active:bg-white/25"
          aria-label="Mbyll"
        >
          <X size={22} aria-hidden />
        </button>
      </div>

      <div
        className="relative flex flex-1 min-h-0 w-full items-center justify-center"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? 0
          touchDeltaX.current = 0
        }}
        onTouchMove={(e) => {
          if (!e.touches[0]) return
          touchDeltaX.current = e.touches[0].clientX - touchStartX.current
        }}
        onTouchEnd={() => {
          if (touchDeltaX.current > SWIPE_THRESHOLD_PX) goPrev()
          else if (touchDeltaX.current < -SWIPE_THRESHOLD_PX) goNext()
          touchDeltaX.current = 0
        }}
      >
        <div className="absolute inset-0 px-2 sm:px-4 pb-2">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain pointer-events-none select-none"
            sizes="100vw"
            priority
            draggable={false}
          />
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 sm:left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white touch-manipulation active:bg-black/70 sm:h-14 sm:w-14"
              aria-label="Imazhi i mëparshëm"
            >
              <ChevronLeft size={28} aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 sm:right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white touch-manipulation active:bg-black/70 sm:h-14 sm:w-14"
              aria-label="Imazhi tjetër"
            >
              <ChevronRight size={28} aria-hidden />
            </button>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <p className="shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 text-center text-sm text-white/70">
          {index + 1} / {count}
        </p>
      ) : (
        <div className="pb-[max(0.75rem,env(safe-area-inset-bottom))]" />
      )}
    </div>
  )

  return createPortal(content, document.body)
}
