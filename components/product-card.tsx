'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.image'
import type { ProductCategory } from '@/lib/sanity.types'

interface ProductCardProps {
  id: string
  name: string
  slug: string
  description: string
  image: unknown
  category?: ProductCategory | null
}

export function ProductCard({
  name,
  slug,
  description,
  image,
  category,
}: ProductCardProps) {
  let imageUrl = ''

  if (image) {
    if (typeof image === 'string') {
      imageUrl = image
    } else if (
      typeof image === 'object' &&
      image !== null &&
      'asset' in image &&
      (image as { asset?: { url?: string } }).asset?.url
    ) {
      imageUrl = (image as { asset: { url: string } }).asset.url
    } else {
      try {
        imageUrl = urlFor(image).width(600).height(400).url()
      } catch {
        imageUrl = ''
      }
    }
  }

  const categoryLabel = category?.title ?? ''

  return (
    <Link href={`/products/${slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-white rounded-xl border border-[#EDE8DF] overflow-hidden transition-all duration-300 hover:border-[#B8864E] hover:shadow-lg hover:-translate-y-0.5">
        <div className="relative aspect-video bg-[#EDE8DF] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          ) : null}
        </div>
        <div className="p-5 flex flex-col flex-1">
          {categoryLabel ? (
            <p className="text-xs uppercase tracking-wider text-[#B8864E] font-medium mb-2">
              {categoryLabel}
            </p>
          ) : null}
          <h3 className="font-serif text-lg text-[#1C1612] mb-2 line-clamp-2">{name}</h3>
          <p className="text-sm text-[#6B5B4E] line-clamp-2 flex-1 mb-4">{description}</p>
          <span className="text-sm text-[#B8864E] font-medium group-hover:underline mt-auto">
            Shiko detajet →
          </span>
        </div>
      </article>
    </Link>
  )
}
