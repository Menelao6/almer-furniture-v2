'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Eye } from 'lucide-react'
import { urlFor } from '@/lib/sanity.image'

interface ProductCardProps {
  id: string
  name: string
  slug: string
  description: string
  image: any
  category: string
}

export function ProductCard({
  name,
  slug,
  description,
  image,
  category,
}: ProductCardProps) {
  let imageUrl = '/placeholder.jpg'
  
  if (image) {
    if (typeof image === 'string') {
      imageUrl = image
    } else {
      try {
        imageUrl = urlFor(image).width(400).height(400).url()
      } catch (e) {
        imageUrl = '/placeholder.jpg'
      }
    }
  }

  return (
    <Link href={`/products/${slug}`}>
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer h-full flex flex-col shadow-sm hover:shadow-md">
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Eye className="text-white" size={32} />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="mb-2">
            <p className="text-xs uppercase tracking-wider text-accent font-semibold">
              {category}
            </p>
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Action Button */}
          <div className="flex items-center space-x-2 text-primary hover:text-accent transition-colors pt-4 border-t border-border">
            <span className="text-sm font-medium">View Details</span>
            <ShoppingBag size={16} />
          </div>
        </div>
      </div>
    </Link>
  )
}
