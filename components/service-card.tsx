'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import type { SanityImage } from '@/lib/sanity.types'

const DEFAULT_FEATURES: Record<string, string[]> = {
  'Kuzhinat me porosi': ['Kabinete me porosi', 'Ishuj & sipërfaqe', 'Planifikim 3D falas'],
  'Dhoma gjumi': ['Gardërobë walk-in', 'Krevat & komodinë', 'Ndriçim i integruar'],
  'Arredim i plotë': ['Dizajn i gjithë shtëpisë', 'Koordinim i projektit', 'Montim & garanci'],
}

function resolveServiceImageUrl(image?: SanityImage | string | null): string {
  if (!image) return ''
  if (typeof image === 'string') return image
  if (image.asset?.url) return image.asset.url
  try {
    return urlFor(image).width(800).height(480).url()
  } catch {
    return ''
  }
}

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  features?: string[]
  image?: SanityImage | string | null
}

export function ServiceCard({
  title,
  description,
  icon = '🪵',
  features,
  image,
}: ServiceCardProps) {
  const bullets = features ?? DEFAULT_FEATURES[title] ?? [
    'Dizajn me porosi',
    'Material premium',
    'Instalim profesional',
  ]

  const imageUrl = resolveServiceImageUrl(image)

  return (
    <article className="group h-full flex flex-col bg-card rounded-[var(--radius-lg)] border border-border overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-0.5">
      {imageUrl ? (
        <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/20 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl m-6 mb-0 shrink-0">
          {icon}
        </div>
      )}

      <div className="flex flex-col flex-1 p-[var(--space-card)]">
        <h3 className="font-serif text-h3 text-foreground mb-3">{title}</h3>
        <p className="text-small text-muted-foreground leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2 mt-auto">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-small text-muted-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
