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
  const hasDimensions =
    product.dimensions &&
    (product.dimensions.width || product.dimensions.height || product.dimensions.depth)
  const related = product.relatedProducts ?? []

  return (
    <>
      <Navigation />
      <main>
        <section className="border-b border-border bg-card">
          <div className="container-page py-3">
            <nav
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors touch-manipulation">
                Shtëpia
              </Link>
              <ChevronRight size={14} className="shrink-0 opacity-60" aria-hidden />
              <Link
                href="/products"
                className="hover:text-primary transition-colors touch-manipulation"
              >
                Produktet
              </Link>
              <ChevronRight size={14} className="shrink-0 opacity-60" aria-hidden />
              <span className="text-foreground line-clamp-1">{product.name}</span>
            </nav>
          </div>
        </section>

        <section className="section-padding-sm bg-background">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 lg:items-start">
              <ImageGallery images={product.images ?? []} productName={product.name} />

              <div className="min-w-0 flex flex-col gap-5">
                {product.category?.title ? (
                  <p className="text-eyebrow text-primary font-semibold normal-case tracking-wider">
                    {product.category.title}
                  </p>
                ) : null}
                <h1 className="font-serif text-h2 text-foreground leading-tight">{product.name}</h1>
                {product.description ? (
                  <p className="text-body text-muted-foreground">{product.description}</p>
                ) : null}

                {product.materials && product.materials.length > 0 ? (
                  <div className="pt-4 border-t border-border">
                    <h2 className="text-small font-semibold text-foreground mb-3">Materialet</h2>
                    <div className="flex flex-wrap gap-2">
                      {product.materials.map((material) => (
                        <span
                          key={material}
                          className="px-3 py-1.5 bg-secondary rounded-full text-small text-muted-foreground"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {hasDimensions ? (
                  <div className="pt-4 border-t border-border">
                    <h2 className="text-small font-semibold text-foreground mb-3">Dimensionet</h2>
                    <dl className="grid grid-cols-3 gap-3">
                      {product.dimensions!.width != null && (
                        <div>
                          <dt className="text-small text-muted-foreground">Gjerësia</dt>
                          <dd className="font-serif text-xl text-foreground">
                            {product.dimensions!.width}
                            <span className="text-small font-sans text-muted-foreground ml-0.5">
                              cm
                            </span>
                          </dd>
                        </div>
                      )}
                      {product.dimensions!.height != null && (
                        <div>
                          <dt className="text-small text-muted-foreground">Lartësia</dt>
                          <dd className="font-serif text-xl text-foreground">
                            {product.dimensions!.height}
                            <span className="text-small font-sans text-muted-foreground ml-0.5">
                              cm
                            </span>
                          </dd>
                        </div>
                      )}
                      {product.dimensions!.depth != null && (
                        <div>
                          <dt className="text-small text-muted-foreground">Thellësia</dt>
                          <dd className="font-serif text-xl text-foreground">
                            {product.dimensions!.depth}
                            <span className="text-small font-sans text-muted-foreground ml-0.5">
                              cm
                            </span>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                ) : null}

                {fullDescription.length > 0 ? (
                  <div className="pt-4 border-t border-border">
                    <h2 className="text-small font-semibold text-foreground mb-3">
                      Rreth produktit
                    </h2>
                    <div className="space-y-2 text-small text-muted-foreground leading-relaxed">
                      {fullDescription.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="lg:hidden pt-2">
                  <QuoteForm productName={product.name} />
                </div>
              </div>
            </div>

            <div
              className={`mt-8 lg:mt-10 grid gap-8 ${related.length > 0 ? 'lg:grid-cols-[1fr_minmax(18rem,22rem)] lg:gap-10 lg:items-start' : 'lg:grid-cols-1'}`}
            >
              {related.length > 0 ? (
                <div>
                  <h2 className="font-serif text-h3 text-foreground mb-4">Produkte të ngjashme</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-gap)]">
                    {related.map((prod) => (
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
                </div>
              ) : null}

              <div className={`hidden lg:block ${related.length === 0 ? 'max-w-md mx-auto w-full' : 'lg:sticky lg:top-24'}`}>
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
