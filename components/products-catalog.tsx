'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductCard } from './product-card'
import { TapButton } from '@/components/tap-button'
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
    <section className="section-padding-sm bg-background">
      <div className="container-page">
        <div className="mb-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            {categories.length > 0 && (
              <div className="min-w-0 flex-1">
                <p className="text-small font-semibold text-foreground mb-3">Kategoria</p>
                <div className="flex flex-wrap gap-2">
                  <CategoryPill
                    active={selectedCategory === 'all'}
                    label="Të gjitha"
                    onSelect={() => setSelectedCategory('all')}
                  />
                  {categories.map((cat) => (
                    <CategoryPill
                      key={cat._id}
                      active={selectedCategory === cat.slug}
                      label={cat.title}
                      onSelect={() => setSelectedCategory(cat.slug)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="shrink-0">
              <label htmlFor="product-sort" className="text-small font-semibold text-foreground mb-3 block">
                Renditni sipas
              </label>
              <select
                id="product-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="min-h-11 w-full min-w-[12rem] px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-small touch-manipulation"
              >
                <option value="featured">Të zgjedhurat</option>
                <option value="name-asc">Emri (A-Z)</option>
                <option value="name-desc">Emri (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        <p className="text-small text-muted-foreground mb-6">
          Duke treguar{' '}
          <span className="font-semibold text-foreground">{filteredProducts.length}</span> produkte
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-gap)]">
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
          <div className="text-center py-12">
            <p className="text-body text-muted-foreground">
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

function CategoryPill({
  active,
  label,
  onSelect,
}: {
  active: boolean
  label: string
  onSelect: () => void
}) {
  return (
    <TapButton
      onTap={onSelect}
      className={`shrink-0 min-h-11 px-4 py-2.5 rounded-full text-small font-medium border transition-colors ${
        active
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-card text-muted-foreground border-border hover:border-primary'
      }`}
    >
      {label}
    </TapButton>
  )
}
