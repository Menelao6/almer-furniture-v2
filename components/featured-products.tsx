'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from './product-card'

interface Product {
  _id: string
  name: string
  slug: { current: string }
  description: string
  images: { image: any }[]
  category: string
}

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Koleksioni i Zgjedhur
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pjesë të zgjedhura me kujdes nga koleksioni ynë ekskluziv, duke treguar më të mirën në dizajnin e mobiljes luksi.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              name={product.name}
              slug={product.slug.current}
              description={product.description}
              image={product.images?.[0]?.image}
              category={product.category}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 group"
          >
            <span>Shiko Të Gjithë Produktet</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
