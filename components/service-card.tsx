'use client'

import Image from 'next/image'

const DEFAULT_FEATURES: Record<string, string[]> = {
  'Kuzhinat me porosi': ['Kabinete me porosi', 'Ishuj & sipërfaqe', 'Planifikim 3D falas'],
  'Dhoma gjumi': ['Gardërobë walk-in', 'Krevat & komodinë', 'Ndriçim i integruar'],
  'Arredim i plotë': ['Dizajn i gjithë shtëpisë', 'Koordinim i projektit', 'Montim & garanci'],
}

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  features?: string[]
  image?: any // Sanity image asset
  imageUrl?: string // resolved URL from urlFor()
}

export function ServiceCard({
  title,
  description,
  icon = '🪵',
  features,
  image,
  imageUrl,
}: ServiceCardProps) {
  const bullets = features ?? DEFAULT_FEATURES[title] ?? [
    'Dizajn me porosi',
    'Material premium',
    'Instalim profesional',
  ]

  const hasImage = !!(imageUrl || image)

  return (
    <article className="group h-full flex flex-col bg-white rounded-xl border border-[#EDE8DF] overflow-hidden transition-all duration-300 hover:border-[#B8864E] hover:shadow-lg hover:-translate-y-0.5">
      {/* Image area — shown when a Sanity image exists */}
      {hasImage ? (
        <div className="relative w-full h-44 bg-[#EDE8DF] overflow-hidden shrink-0">
          <Image
            src={imageUrl ?? ''}
            alt={title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* subtle dark gradient so text below stays readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      ) : (
        /* Fallback: icon block when no image */
        <div className="w-14 h-14 rounded-xl bg-[#B8864E]/10 flex items-center justify-center text-2xl m-6 mb-0 shrink-0">
          {icon}
        </div>
      )}

      {/* Text body */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">

        <h3 className="font-serif text-xl text-[#1C1612] mb-3">{title}</h3>
        <p className="text-sm text-[#6B5B4E] leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2 mt-auto">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[#6B5B4E]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B8864E] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
