import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { MixedStrip } from '@/components/mixed-strip'
import { FeaturedProducts } from '@/components/featured-products'
import { AboutStrip } from '@/components/about-strip'
import { ServicesSection } from '@/components/services-section'
import { GalleryTeaser } from '@/components/gallery-teaser'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { NewsSection } from '@/components/news-section'
import { sanityFetchList } from '@/lib/sanity.client'
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

  return { products, categories, services, testimonials, news, offers, gallery, posts: news }
}

export default async function Home() {
  const { products, categories, services, testimonials, news, offers, gallery, posts } =
    await getHomePageData()

  const showMixedStrip =
    products.length > 0 || offers.length > 0 || news.length > 0 || posts.length > 0

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
        {posts.length > 0 && <NewsSection articles={posts} />}
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
