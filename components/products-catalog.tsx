'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductCard } from './product-card'
import type { SanityProduct, ProductCategory } from '@/lib/sanity.types'

interface ProductsCatalogProps {
  products: SanityProduct[]
  categories: ProductCategory[]
}

export function ProductsCatalog({ products, categories }: ProductsCatalogProps) {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category?.slug === selectedCategory)
    }

    switch (sortBy) {
      case 'name-asc':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name))
      default:
        return filtered
    }
  }, [products, selectedCategory, sortBy])

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            {categories.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-[#1C1612] mb-3">Kategoria</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className={`min-h-11 px-4 py-2.5 rounded-full text-sm font-medium transition-all touch-manipulation select-none active:scale-[0.98] ${
                      selectedCategory === 'all'
                        ? 'bg-[#B8864E] text-white'
                        : 'bg-white text-[#6B5B4E] border border-[#EDE8DF] hover:border-[#B8864E]'
                    }`}
                  >
                    Të gjitha
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat._id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`min-h-11 px-4 py-2.5 rounded-full text-sm font-medium transition-all touch-manipulation select-none active:scale-[0.98] ${
                        selectedCategory === cat.slug
                          ? 'bg-[#B8864E] text-white'
                          : 'bg-white text-[#6B5B4E] border border-[#EDE8DF] hover:border-[#B8864E]'
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-[#1C1612] mb-3">Renditni sipas</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-[#EDE8DF] bg-white text-[#1C1612] cursor-pointer hover:border-[#B8864E] transition-colors text-sm"
              >
                <option value="featured">Të zgjedhurat</option>
                <option value="name-asc">Emri (A-Z)</option>
                <option value="name-desc">Emri (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm text-[#6B5B4E]">
            Duke treguar{' '}
            <span className="font-semibold text-[#1C1612]">{filteredProducts.length}</span>{' '}
            produkte
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-[#6B5B4E]">
              {products.length === 0
                ? 'Nuk ka produkte të publikuara ende. Shtoni produkte në Sanity Studio.'
                : 'Nuk u gjet asnjë produkt në këtë kategori.'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
