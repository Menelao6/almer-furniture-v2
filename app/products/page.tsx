'use client'

import { useState, useMemo } from 'react'
import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { useSearchParams } from 'next/navigation'

interface Product {
  _id: string
  name: string
  slug: { current: string }
  description: string
  images: { image: any }[]
  category: string
}

// Të dhëna shëmbëllore për tani - do të zëvendësohen me marrje të Sanity
const dummyProducts: Product[] = [
  {
    _id: '1',
    name: 'Divan Lëkure Premium',
    slug: { current: 'premium-leather-sofa' },
    description: 'Divan lëkure luksoz me rehat të thellë.',
    images: [{ image: null }],
    category: 'sofas',
  },
  {
    _id: '2',
    name: 'Karrige Minimalisht',
    slug: { current: 'minimalist-chair' },
    description: 'Karrige moderne me linja të pastra.',
    images: [{ image: null }],
    category: 'chairs',
  },
  {
    _id: '3',
    name: 'Tavolë Ngrënie Mermeri',
    slug: { current: 'marble-dining-table' },
    description: 'Tavolë elegante mermeri për darkë.',
    images: [{ image: null }],
    category: 'tables',
  },
  {
    _id: '4',
    name: 'Korniza e Shtratit King Size',
    slug: { current: 'king-size-bed' },
    description: 'Korniza e shtratit të qëndrueshme king size.',
    images: [{ image: null }],
    category: 'beds',
  },
  {
    _id: '5',
    name: 'Kabineti i Ruajtjes',
    slug: { current: 'storage-cabinet' },
    description: 'Zgjidhje moderne e ruajtjes.',
    images: [{ image: null }],
    category: 'storage',
  },
  {
    _id: '6',
    name: 'Drita Varur',
    slug: { current: 'pendant-light' },
    description: 'Ndriçim varur kontemporan.',
    images: [{ image: null }],
    category: 'lighting',
  },
]

const categories = [
  { value: 'all', label: 'Të Gjithë Produktet' },
  { value: 'sofas', label: 'Divane' },
  { value: 'chairs', label: 'Karrige' },
  { value: 'tables', label: 'Tryeza' },
  { value: 'beds', label: 'Shtrat' },
  { value: 'storage', label: 'Ruajtje' },
  { value: 'lighting', label: 'Ndriçim' },
  { value: 'accessories', label: 'Aksesorë' },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let filtered = dummyProducts

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Sort
    switch (sortBy) {
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name))
      default:
        return filtered
    }
  }, [selectedCategory, sortBy])

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Produktet Tona
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Shfletoni koleksionin tonë të plotë të mobiljes luksi, të zgjedhur me kujdes për cilësi dhe stil.
            </p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                {/* Category Filter */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Kategoria</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          selectedCategory === cat.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Renditni Sipas</p>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-border bg-background text-foreground cursor-pointer hover:border-accent transition-colors"
                  >
                    <option value="featured">I Zgjedhur</option>
                    <option value="name-asc">Emri (A-Z)</option>
                    <option value="name-desc">Emri (Z-A)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">
                Duke treguar <span className="font-semibold text-foreground">{filteredProducts.length}</span> produkte
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
