'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ProductCard } from './product-card'
import type { SanityProduct, ProductCategory } from '@/lib/sanity.types'

interface FeaturedProductsProps {
  products: SanityProduct[]
  categories: ProductCategory[]
}

export function FeaturedProducts({ products, categories }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? products.filter((p) => p.category?.slug === activeCategory)
    : products

  const display = filtered.slice(0, 4)

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1612]">Koleksioni ynë</h2>
          <Link
            href="/products"
            className="text-sm text-[#6B5B4E] hover:text-[#B8864E] transition-colors shrink-0"
          >
            Shiko të gjitha produktet →
          </Link>
        </div>

        {categories.length > 0 && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-4 py-2 text-sm rounded-full border transition-colors ${
                activeCategory === null
                  ? 'bg-[#B8864E] text-white border-[#B8864E]'
                  : 'bg-white text-[#6B5B4E] border-[#EDE8DF] hover:bg-[#B8864E] hover:text-white hover:border-[#B8864E]'
              }`}
            >
              Të gjitha
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`shrink-0 px-4 py-2 text-sm rounded-full border transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-[#B8864E] text-white border-[#B8864E]'
                    : 'bg-white text-[#6B5B4E] border-[#EDE8DF] hover:bg-[#B8864E] hover:text-white hover:border-[#B8864E]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {display.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              name={product.name}
              slug={product.slug.current}
              description={product.description ?? ''}
              image={product.images?.[0]?.image}
              category={product.category}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3.5 text-sm font-medium text-[#B8864E] border border-[#B8864E] rounded-full hover:bg-[#B8864E] hover:text-white transition-colors"
          >
            Shiko të gjitha produktet →
          </Link>
        </div>
      </div>
    </section>
  )
}
