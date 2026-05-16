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
import { sanityFetch } from '@/lib/sanity.client'
import {
  mockProducts,
  mockServices,
  mockTestimonials,
  mockNews,
  mockOffers,
  mockGallery,
} from '@/lib/mock-data'

export const metadata: Metadata = {
  title: 'Almer | Mobilje Artizanale · Tiranë',
  description:
    'Që nga viti 1998, transformojmë hapësirat shqiptare me mobilje me porosi dhe material premium.',
}

async function getHomePageData() {
  try {
    const [products, services, testimonials, news] = await Promise.all([
      sanityFetch({
        query: `*[_type == "product" && featured == true][0:8] | order(_createdAt desc) {
          _id,
          name,
          slug { current },
          description,
          "images": images[] { image { asset->{url} }, alt },
          category
        }`,
      }),
      sanityFetch({
        query: `*[_type == "service"][0:4] {
          _id,
          title,
          slug { current },
          description,
          icon
        }`,
      }),
      sanityFetch({
        query: `*[_type == "testimonial"][0:6] {
          _id,
          clientName,
          clientTitle,
          quote,
          rating
        }`,
      }),
      sanityFetch({
        query: `*[_type == "news"][0:6] {
          _id,
          title,
          slug { current },
          excerpt,
          publishedAt
        }`,
      }),
    ])

    return {
      products: products?.length > 0 ? products : mockProducts,
      services: services?.length > 0 ? services : mockServices,
      testimonials: testimonials?.length > 0 ? testimonials : mockTestimonials,
      news: news?.length > 0 ? news : mockNews,
      offers: mockOffers,
      gallery: mockGallery,
    }
  } catch {
    return {
      products: mockProducts,
      services: mockServices,
      testimonials: mockTestimonials,
      news: mockNews,
      offers: mockOffers,
      gallery: mockGallery,
    }
  }
}

export default async function Home() {
  const { products, services, testimonials, news, offers, gallery } =
    await getHomePageData()

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <MixedStrip products={products} offers={offers} news={news} />
        {products.length > 0 && <FeaturedProducts products={products} />}
        <AboutStrip />
        <ServicesSection services={services} />
        <GalleryTeaser items={gallery} />
        {testimonials.length > 0 && (
          <Testimonials testimonials={testimonials} />
        )}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
