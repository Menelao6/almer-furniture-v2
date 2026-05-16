import { Suspense } from 'react'
import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ProductsCatalog } from '@/components/products-catalog'
import { sanityFetchList } from '@/lib/sanity.client'
import { allProductsQuery, productCategoriesQuery } from '@/lib/sanity.queries'
import type { SanityProduct, ProductCategory } from '@/lib/sanity.types'

export const metadata: Metadata = {
  title: 'Produktet | Almer',
  description: 'Shfletoni koleksionin tonë të mobiljes me porosi — kuzhina, dhoma gjumi dhe më shumë.',
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    sanityFetchList<SanityProduct>({ query: allProductsQuery }),
    sanityFetchList<ProductCategory>({ query: productCategoriesQuery }),
  ])

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-[#FAF7F2] py-16 border-b border-[#EDE8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl text-[#1C1612] mb-4">Produktet tona</h1>
            <p className="text-lg text-[#6B5B4E] max-w-2xl">
              Mobilje me porosi, të punuara me dorë nga druri premium — për çdo dhomë të shtëpisë.
            </p>
          </div>
        </section>

        <Suspense
          fallback={
            <div className="py-16 text-center text-[#6B5B4E]">Duke ngarkuar produktet…</div>
          }
        >
          <ProductsCatalog products={products} categories={categories} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
