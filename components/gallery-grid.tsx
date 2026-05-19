'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import type { SanityGalleryItem } from '@/lib/sanity.types'
import { ImageLightbox } from '@/components/image-lightbox'
import { TapButton } from '@/components/tap-button'
import { useReliableTap } from '@/lib/use-reliable-tap'

const ROOM_LABELS: Record<string, string> = {
  living: 'Dhoma ndenjeje',
  bedroom: 'Dhoma gjumi',
  dining: 'Dhoma ngrënieje',
  office: 'Zyrë',
  kitchen: 'Kuzhinë',
  bathroom: 'Banjo',
}

interface GalleryGridProps {
  items: SanityGalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const roomTypes = useMemo(() => {
    const types = new Set(items.map((i) => i.roomType).filter(Boolean) as string[])
    return Array.from(types)
  }, [items])

  const [selectedRoom, setSelectedRoom] = useState('all')
  const [lightbox, setLightbox] = useState<SanityGalleryItem | null>(null)

  const filtered =
    selectedRoom === 'all'
      ? items
      : items.filter((item) => item.roomType === selectedRoom)

  return (
    <>
      {roomTypes.length > 0 && (
        <section className="py-8 bg-[#FAF7F2] border-b border-[#EDE8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-[#1C1612] mb-4">Filtro sipas dhomës</p>
            <div className="flex flex-wrap gap-2">
              <FilterButton
                active={selectedRoom === 'all'}
                onSelect={() => setSelectedRoom('all')}
                label="Të gjitha"
              />
              {roomTypes.map((room) => (
                <FilterButton
                  key={room}
                  active={selectedRoom === room}
                  onSelect={() => setSelectedRoom(room)}
                  label={ROOM_LABELS[room] ?? room}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <GalleryImageButton
                  key={item._id}
                  item={item}
                  onOpen={() => setLightbox(item)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-[#6B5B4E]">
              {items.length === 0
                ? 'Nuk ka projekte në galeri ende. Shtoni imazhe në Sanity Studio.'
                : 'Nuk u gjet asnjë projekt në këtë kategori.'}
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        open={Boolean(lightbox?.image)}
        onClose={() => setLightbox(null)}
        src={lightbox?.image ?? ''}
        alt={lightbox?.title ?? ''}
        title={lightbox?.title}
        description={lightbox?.location}
      />
    </>
  )
}

function GalleryImageButton({
  item,
  onOpen,
}: {
  item: SanityGalleryItem
  onOpen: () => void
}) {
  const openTap = useReliableTap(() => {
    if (item.image) onOpen()
  })

  return (
    <button
      type="button"
      disabled={!item.image}
      className="group relative overflow-hidden rounded-xl aspect-square bg-[#EDE8DF] cursor-zoom-in text-left touch-manipulation [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8864E] focus-visible:ring-offset-2 disabled:cursor-default"
      aria-label={`Zmadho: ${item.title}`}
      {...openTap}
    >
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover pointer-events-none select-none transition-transform duration-500 group-active:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          draggable={false}
        />
      ) : null}
      <div className="absolute inset-0 bg-[#1C1612]/35 sm:bg-[#1C1612]/0 sm:group-hover:bg-[#1C1612]/60 transition-colors flex items-end pointer-events-none">
        <div className="w-full p-6 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform">
          <h3 className="font-serif text-xl text-white mb-1 drop-shadow-sm">{item.title}</h3>
          {item.location ? (
            <p className="text-white/80 text-sm">{item.location}</p>
          ) : null}
        </div>
      </div>
    </button>
  )
}

function FilterButton({
  active,
  onSelect,
  label,
}: {
  active: boolean
  onSelect: () => void
  label: string
}) {
  return (
    <TapButton
      onTap={onSelect}
      className={`min-h-11 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
        active
          ? 'bg-[#B8864E] text-white'
          : 'bg-white text-[#6B5B4E] border border-[#EDE8DF] hover:border-[#B8864E]'
      }`}
    >
      {label}
    </TapButton>
  )
}
