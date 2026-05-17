import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { MixedStrip } from '@/components/mixed-strip'
import type { OfferStripItem, NewsStripItem } from '@/components/mixed-strip'
import { FeaturedProducts } from '@/components/featured-products'
import { AboutStrip } from '@/components/about-strip'
import { ProcessStrip } from '@/components/process-strip'
import { ServicesSection } from '@/components/services-section'
import { GalleryTeaser } from '@/components/gallery-teaser'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { sanityFetchList } from '@/lib/sanity.client'
import { formatDateAlbanian } from '@/lib/format-date'
import {
  featuredProductsQuery,
  productCategoriesQuery,
  featuredServicesQuery,
  testimonialsQuery,
  latestNewsQuery,
  activeOffersQuery,
  homeGalleryQuery,
} from '@/lib/sanity.queries'
import type {
  SanityProduct,
  SanityOffer,
  SanityNews,
  SanityGalleryItem,
  SanityService,
  SanityTestimonial,
  ProductCategory,
} from '@/lib/sanity.types'

export const metadata: Metadata = {
  title: 'Almer | Mobilje Artizanale · Tiranë',
  description:
    'Që nga viti 1998, transformojmë hapësirat shqiptare me mobilje me porosi dhe material premium.',
}

async function getHomePageData() {
  const [products, categories, services, testimonials, news, offers, gallery] =
    await Promise.all([
      sanityFetchList<SanityProduct>({ query: featuredProductsQuery }),
      sanityFetchList<ProductCategory>({ query: productCategoriesQuery }),
      sanityFetchList<SanityService>({ query: featuredServicesQuery }),
      sanityFetchList<SanityTestimonial>({ query: testimonialsQuery }),
      sanityFetchList<SanityNews>({ query: latestNewsQuery }),
      sanityFetchList<SanityOffer>({ query: activeOffersQuery }),
      sanityFetchList<SanityGalleryItem>({ query: homeGalleryQuery }),
    ])

  const offersWithLabels: OfferStripItem[] = offers.map((offer) => ({
    ...offer,
    expiryLabel: offer.expiry ? formatDateAlbanian(offer.expiry, 'long') : undefined,
  }))

  const newsWithLabels: NewsStripItem[] = news.map((item) => ({
    ...item,
    publishedAtLabel: item.publishedAt
      ? formatDateAlbanian(item.publishedAt, 'short')
      : undefined,
  }))

  return {
    products,
    categories,
    services,
    testimonials,
    news: newsWithLabels,
    offers: offersWithLabels,
    gallery,
  }
}

export default async function Home() {
  const { products, categories, services, testimonials, news, offers, gallery } =
    await getHomePageData()

  const showMixedStrip =
    products.length > 0 || offers.length > 0 || news.length > 0

  return (
    <>
      <Navigation />
      <main>
        <Hero />

        <TrustStrip />

        {showMixedStrip && (
          <MixedStrip products={products} offers={offers} news={news} />
        )}

        {products.length > 0 && (
          <FeaturedProducts products={products} categories={categories} />
        )}

        <AboutStrip />

        <ProcessStrip />

        {services.length > 0 && <ServicesSection services={services} />}

        {gallery.length > 0 && <GalleryTeaser items={gallery} />}

        {testimonials.length > 0 && (
          <Testimonials testimonials={testimonials} />
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
