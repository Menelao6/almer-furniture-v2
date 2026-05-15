import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { ServicesSection } from '@/components/services-section'
import { Testimonials } from '@/components/testimonials'
import { NewsSection } from '@/components/news-section'
import { CTASection } from '@/components/cta-section'
import { sanityFetch } from '@/lib/sanity.client'
import { mockProducts, mockServices, mockTestimonials, mockNews } from '@/lib/mock-data'

export const metadata: Metadata = {
  title: 'Luxury Furniture | Premium Interior Design',
  description: 'Discover our exclusive collection of luxury furniture and interior design solutions.',
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
          name,
          slug { current },
          description
        }`,
      }),
      sanityFetch({
        query: `*[_type == "testimonial"][0:6] {
          _id,
          author,
          text,
          rating
        }`,
      }),
      sanityFetch({
        query: `*[_type == "news"][0:6] {
          _id,
          title,
          slug { current },
          excerpt,
          author,
          publishedAt
        }`,
      }),
    ])

    // Use mock data if Sanity returns empty
    return { 
      products: products?.length > 0 ? products : mockProducts, 
      services: services?.length > 0 ? services : mockServices, 
      testimonials: testimonials?.length > 0 ? testimonials : mockTestimonials, 
      news: news?.length > 0 ? news : mockNews 
    }
  } catch (error) {
    console.error('Error fetching home page data:', error)
    // Fallback to mock data in development
    console.log('Using mock data - configure Sanity to use real data')
    return {
      products: mockProducts,
      services: mockServices,
      testimonials: mockTestimonials,
      news: mockNews,
    }
  }
}

export default async function Home() {
  const { products, services, testimonials, news } = await getHomePageData()

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {products.length > 0 && <FeaturedProducts products={products} />}
        {services.length > 0 && <ServicesSection services={services} />}
        {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
        {news.length > 0 && <NewsSection articles={news} />}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
