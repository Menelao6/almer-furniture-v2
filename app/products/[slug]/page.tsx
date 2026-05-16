import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ImageGallery } from '@/components/image-gallery'
import { QuoteForm } from '@/components/quote-form'
import { ProductCard } from '@/components/product-card'
import { sanityFetch } from '@/lib/sanity.client'
import { productBySlugQuery } from '@/lib/sanity.queries'
import type { SanityProduct } from '@/lib/sanity.types'
import { portableTextToPlain } from '@/lib/portable-text'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const product = await sanityFetch<SanityProduct>({
    query: productBySlugQuery,
    params: { slug },
  })
  if (!product) return { title: 'Produkti | Almer' }
  return {
    title: `${product.name} | Almer`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = await sanityFetch<SanityProduct>({
    query: productBySlugQuery,
    params: { slug },
  })

  if (!product) {
    notFound()
  }

  const fullDescription = portableTextToPlain(product.fullDescription)

  return (
    <>
      <Navigation />
      <main>
        <section className="border-b border-[#EDE8DF] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-[#6B5B4E]">
              <Link href="/" className="hover:text-[#B8864E] transition-colors">
                Shtëpia
              </Link>
              <ChevronRight size={16} />
              <Link href="/products" className="hover:text-[#B8864E] transition-colors">
                Produktet
              </Link>
              <ChevronRight size={16} />
              <span className="text-[#1C1612]">{product.name}</span>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <ImageGallery
                images={product.images ?? []}
                productName={product.name}
              />

              <div>
                {product.category?.title ? (
                  <p className="text-xs uppercase tracking-wider text-[#B8864E] font-medium mb-3">
                    {product.category.title}
                  </p>
                ) : null}
                <h1 className="font-serif text-4xl md:text-5xl text-[#1C1612] mb-4">
                  {product.name}
                </h1>
                {product.description ? (
                  <p className="text-lg text-[#6B5B4E] mb-8">{product.description}</p>
                ) : null}

                {product.materials && product.materials.length > 0 && (
                  <div className="mb-8 pb-8 border-b border-[#EDE8DF]">
                    <h3 className="text-lg font-semibold text-[#1C1612] mb-4">Materialet</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.materials.map((material) => (
                        <span
                          key={material}
                          className="px-4 py-2 bg-[#FAF7F2] rounded-full text-sm text-[#6B5B4E]"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.dimensions &&
                  (product.dimensions.width ||
                    product.dimensions.height ||
                    product.dimensions.depth) && (
                    <div className="mb-8 pb-8 border-b border-[#EDE8DF]">
                      <h3 className="text-lg font-semibold text-[#1C1612] mb-4">
                        Dimensionet
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {product.dimensions.width != null && (
                          <div>
                            <p className="text-sm text-[#6B5B4E]">Gjerësia</p>
                            <p className="text-2xl font-bold text-[#1C1612]">
                              {product.dimensions.width}
                              <span className="text-sm ml-1 font-normal">cm</span>
                            </p>
                          </div>
                        )}
                        {product.dimensions.height != null && (
                          <div>
                            <p className="text-sm text-[#6B5B4E]">Lartësia</p>
                            <p className="text-2xl font-bold text-[#1C1612]">
                              {product.dimensions.height}
                              <span className="text-sm ml-1 font-normal">cm</span>
                            </p>
                          </div>
                        )}
                        {product.dimensions.depth != null && (
                          <div>
                            <p className="text-sm text-[#6B5B4E]">Thellësia</p>
                            <p className="text-2xl font-bold text-[#1C1612]">
                              {product.dimensions.depth}
                              <span className="text-sm ml-1 font-normal">cm</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                {fullDescription.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#1C1612] mb-4">
                      Rreth produktit
                    </h3>
                    <div className="space-y-3">
                      {fullDescription.map((paragraph, idx) => (
                        <p key={idx} className="text-[#6B5B4E] leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {product.relatedProducts && product.relatedProducts.length > 0 && (
                  <>
                    <h2 className="font-serif text-2xl text-[#1C1612] mb-8">
                      Produkte të ngjashme
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {product.relatedProducts.map((prod) => (
                        <ProductCard
                          key={prod._id}
                          id={prod._id}
                          name={prod.name}
                          slug={prod.slug.current}
                          description={prod.description ?? ''}
                          image={prod.images?.[0]?.image}
                          category={prod.category}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
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
