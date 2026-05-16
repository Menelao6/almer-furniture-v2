'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import type { SanityGalleryItem } from '@/lib/sanity.types'

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
                onClick={() => setSelectedRoom('all')}
                label="Të gjitha"
              />
              {roomTypes.map((room) => (
                <FilterButton
                  key={room}
                  active={selectedRoom === room}
                  onClick={() => setSelectedRoom(room)}
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
                <button
                  key={item._id}
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group relative overflow-hidden rounded-xl aspect-square bg-[#EDE8DF] cursor-pointer text-left"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-[#1C1612]/0 group-hover:bg-[#1C1612]/60 transition-colors flex items-end">
                    <div className="w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h3 className="font-serif text-xl text-white mb-1">{item.title}</h3>
                      {item.location ? (
                        <p className="text-white/80 text-sm">{item.location}</p>
                      ) : null}
                    </div>
                  </div>
                </button>
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

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Mbyll"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full">
            {lightbox.image && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-[#EDE8DF]">
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            )}
            <div className="text-center">
              <h3 className="font-serif text-2xl text-white mb-2">{lightbox.title}</h3>
              {lightbox.location ? (
                <p className="text-white/70 text-sm mb-2">{lightbox.location}</p>
              ) : null}
              {lightbox.description ? (
                <p className="text-white/80">{lightbox.description}</p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? 'bg-[#B8864E] text-white'
          : 'bg-white text-[#6B5B4E] border border-[#EDE8DF] hover:border-[#B8864E]'
      }`}
    >
      {label}
    </button>
  )
}
