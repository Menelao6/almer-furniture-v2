'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ProductCard } from './product-card'
import { SectionHeader } from '@/components/section-header'
import { TapButton } from '@/components/tap-button'
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
    <section className="section-padding bg-card">
      <div className="container-page">
        <SectionHeader
          title="Koleksioni ynë"
          description="Mobilje me porosi — zgjidhni kategorinë dhe shikoni modelet tona."
          link={{ href: '/products', label: 'Shiko të gjitha produktet →' }}
        />

        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 pb-2 mb-[var(--space-block)] sm:flex-nowrap sm:overflow-x-auto sm:scrollbar-hide sm:scroll-touch-x sm:-mx-[var(--container-px)] sm:px-[var(--container-px)] lg:mx-0 lg:px-0">
            <CategoryPill
              active={activeCategory === null}
              onSelect={() => setActiveCategory(null)}
              label="Të gjitha"
            />
            {categories.map((cat) => (
              <CategoryPill
                key={cat._id}
                active={activeCategory === cat.slug}
                onSelect={() => setActiveCategory(cat.slug)}
                label={cat.title}
              />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-gap)] mb-[var(--space-block)]">
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
            className="inline-flex items-center px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Shiko të gjitha produktet →
          </Link>
        </div>
      </div>
    </section>
  )
}

function CategoryPill({
  active,
  onSelect,
  label,
}: {
  active: boolean
  onSelect: () => void
  label: string
}) {
  return (
    <TapButton
      onTap={onSelect}
      className={`shrink-0 min-h-11 px-4 py-2.5 text-small rounded-full border transition-colors ${
        active
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-card text-muted-foreground border-border hover:border-primary'
      }`}
    >
      {label}
    </TapButton>
  )
}
