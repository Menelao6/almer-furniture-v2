'use client'

import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ImageGallery } from '@/components/image-gallery'
import { QuoteForm } from '@/components/quote-form'
import { ProductCard } from '@/components/product-card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Dummy product data for now
const dummyProduct = {
  name: 'Premium Leather Sofa',
  slug: 'premium-leather-sofa',
  description: 'A sophisticated and comfortable leather sofa perfect for any modern living space.',
  fullDescription: [
    'This premium leather sofa combines luxury with comfort, featuring hand-stitched details and a robust frame made from sustainably sourced hardwood.',
    'The sofa accommodates 3-4 people comfortably with deep cushioning and ergonomic design.',
    'Available in multiple colors and customizable configurations to match your interior design.',
  ],
  images: [
    { image: null, alt: 'Main view' },
    { image: null, alt: 'Side view' },
    { image: null, alt: 'Detail view' },
  ],
  materials: ['Premium Leather', 'Hardwood Frame', 'High-Density Foam'],
  dimensions: {
    width: 240,
    height: 90,
    depth: 100,
  },
  category: 'sofas',
  relatedProducts: [
    { _id: '1', name: 'Accent Chair', slug: { current: 'accent-chair' }, description: 'Perfect companion piece', images: [{ image: null }], category: 'chairs' },
    { _id: '2', name: 'Coffee Table', slug: { current: 'coffee-table' }, description: 'Modern design table', images: [{ image: null }], category: 'tables' },
    { _id: '3', name: 'Ottoman', slug: { current: 'ottoman' }, description: 'Matching ottoman', images: [{ image: null }], category: 'accessories' },
  ],
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = dummyProduct // In real app, fetch based on params.slug

  return (
    <>
      <Navigation />
      <main>
        {/* Breadcrumb */}
        <section className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-primary hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight size={16} className="text-muted-foreground" />
              <Link href="/products" className="text-primary hover:text-accent transition-colors">
                Products
              </Link>
              <ChevronRight size={16} className="text-muted-foreground" />
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Images */}
              <div>
                <ImageGallery images={product.images} productName={product.name} />
              </div>

              {/* Info */}
              <div>
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">
                    {product.category}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                {/* Materials */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material) => (
                      <span
                        key={material}
                        className="px-4 py-2 bg-muted rounded-full text-sm text-foreground"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dimensions */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Dimensions</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Width</p>
                      <p className="text-2xl font-bold text-foreground">
                        {product.dimensions.width}
                        <span className="text-sm ml-1">cm</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Height</p>
                      <p className="text-2xl font-bold text-foreground">
                        {product.dimensions.height}
                        <span className="text-sm ml-1">cm</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Depth</p>
                      <p className="text-2xl font-bold text-foreground">
                        {product.dimensions.depth}
                        <span className="text-sm ml-1">cm</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">About This Product</h3>
                  <div className="space-y-3">
                    {product.fullDescription.map((desc, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form and Related */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                  Related Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.relatedProducts.map((prod) => (
                    <ProductCard
                      key={prod._id}
                      id={prod._id}
                      name={prod.name}
                      slug={prod.slug.current}
                      description={prod.description}
                      image={prod.images?.[0]?.image}
                      category={prod.category}
                    />
                  ))}
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <QuoteForm productName={product.name} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
