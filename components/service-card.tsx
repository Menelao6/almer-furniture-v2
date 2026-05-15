'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity.image'
import * as Icons from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  image?: any
}

export function ServiceCard({
  title,
  description,
  icon,
  image,
}: ServiceCardProps) {
  // Map icon names to lucide components
  const iconMap: Record<string, any> = {
    Sofa: Icons.Armchair,
    Palette: Icons.Palette,
    Hammer: Icons.Hammer,
    Sparkles: Icons.Sparkles,
    Users: Icons.Users,
    Truck: Icons.Truck,
  }

  const IconComponent = icon && iconMap[icon] ? iconMap[icon] : Icons.Square

  const imageUrl = image ? urlFor(image).width(400).height(300).url() : null

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
      {/* Image or Icon */}
      {imageUrl ? (
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <IconComponent className="text-primary" size={48} />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <div className="flex items-center text-primary group-hover:text-accent transition-colors pt-4 border-t border-border">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )
}
