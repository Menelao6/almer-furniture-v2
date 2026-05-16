'use client'

import Image from 'next/image'
import Link from 'next/link'

interface GalleryItem {
  _id: string
  title: string
  location: string
  image: string
  tall?: boolean
}

interface GalleryTeaserProps {
  items: GalleryItem[]
}

export function GalleryTeaser({ items }: GalleryTeaserProps) {
  const [tall, ...rest] = items

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1612]">Projektet tona</h2>
          <Link
            href="/gallery"
            className="text-sm text-[#6B5B4E] hover:text-[#B8864E] transition-colors"
          >
            Galeria e plotë →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px]">
          {tall && (
            <GalleryTile item={tall} className="col-span-1 row-span-2 min-h-[280px] sm:min-h-[376px]" />
          )}
          {rest.map((item) => (
            <GalleryTile key={item._id} item={item} />
          ))}
        </div>

        <p className="text-center mt-10">
          <Link
            href="/gallery"
            className="text-sm text-[#6B5B4E] hover:text-[#B8864E] transition-colors"
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
  item: GalleryItem
  className?: string
}) {
  return (
    <Link
      href="/gallery"
      className={`group relative rounded-xl overflow-hidden bg-[#EDE8DF] ${className}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-[#1C1612]/0 group-hover:bg-[#1C1612]/70 transition-colors duration-300 flex flex-col justify-end p-4 sm:p-5 opacity-0 group-hover:opacity-100">
        <h3 className="font-serif text-white text-base sm:text-lg">{item.title}</h3>
        <p className="text-white/70 text-xs sm:text-sm mb-2">{item.location}</p>
        <span className="text-sm text-[#B8864E] font-medium">Shiko →</span>
      </div>
    </Link>
  )
}
