'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CATEGORY_LABELS } from '@/lib/mock-data'

interface Product {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  images?: { image: { asset?: { url?: string } } }[]
  category: string
}

interface Offer {
  _id: string
  discount: string
  title: string
  expiry: string
  href: string
}

interface NewsItem {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  tag?: string
}

interface MixedStripProps {
  products: Product[]
  offers: Offer[]
  news: NewsItem[]
}

function getImageUrl(product: Product) {
  return product.images?.[0]?.image?.asset?.url ?? ''
}

export function MixedStrip({ products, offers, news }: MixedStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.75
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  const p0 = products[0]
  const p1 = products[1] ?? products[0]
  const p2 = products[2] ?? products[0]
  const offer = offers[0]
  const newsItem = news[0]

  return (
    <section className="bg-[#FAF7F2] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1612]">
            Të rejat &amp; ofertat
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#EDE8DF] bg-white text-[#6B5B4E] hover:text-[#1C1612] hover:border-[#B8864E] flex items-center justify-center transition-colors"
              aria-label="Lëviz majtas"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#EDE8DF] bg-white text-[#6B5B4E] hover:text-[#1C1612] hover:border-[#B8864E] flex items-center justify-center transition-colors"
              aria-label="Lëviz djathtas"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {p0 && (
            <ProductStripCard
              name={p0.name}
              category={CATEGORY_LABELS[p0.category] ?? p0.category}
              image={getImageUrl(p0)}
              href={`/products/${p0.slug.current}`}
              width="w-[260px] sm:w-[280px]"
            />
          )}
          {offer && <OfferStripCard offer={offer} />}
          {p1 && (
            <ProductStripCard
              name={p1.name}
              category={CATEGORY_LABELS[p1.category] ?? p1.category}
              image={getImageUrl(p1)}
              href={`/products/${p1.slug.current}`}
              width="w-[240px] sm:w-[260px]"
            />
          )}
          {newsItem && <NewsStripCard item={newsItem} />}
          {p2 && (
            <ProductStripCard
              name={p2.name}
              category={CATEGORY_LABELS[p2.category] ?? p2.category}
              image={getImageUrl(p2)}
              href={`/products/${p2.slug.current}`}
              width="w-[260px] sm:w-[280px]"
            />
          )}
          <SeeAllCard />
        </div>

        <p className="text-center mt-8">
          <Link
            href="/products"
            className="text-sm text-[#6B5B4E] hover:text-[#B8864E] transition-colors"
          >
            Shiko të gjitha produktet →
          </Link>
        </p>
      </div>
    </section>
  )
}

function ProductStripCard({
  name,
  category,
  image,
  href,
  width,
}: {
  name: string
  category: string
  image: string
  href: string
  width: string
}) {
  return (
    <Link
      href={href}
      className={`${width} shrink-0 snap-start h-[320px] flex flex-col bg-white rounded-xl border border-[#EDE8DF] overflow-hidden hover:border-[#B8864E] hover:shadow-md transition-all group`}
    >
      <div className="relative flex-1 min-h-[180px] bg-[#EDE8DF]">
        {image && (
          <Image src={image} alt={name} fill className="object-cover" sizes="280px" />
        )}
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-[#B8864E] font-medium mb-1">
          {category}
        </p>
        <h3 className="font-serif text-lg text-[#1C1612] line-clamp-2 mb-2">{name}</h3>
        <span className="text-sm text-[#B8864E] group-hover:underline">Shiko →</span>
      </div>
    </Link>
  )
}

function OfferStripCard({ offer }: { offer: Offer }) {
  return (
    <Link
      href={offer.href}
      className="w-[220px] sm:w-[240px] shrink-0 snap-start h-[320px] flex flex-col justify-between bg-[#B8864E] rounded-xl p-6 text-white hover:bg-[#a67845] transition-colors group"
    >
      <div>
        <p className="text-4xl font-serif font-bold mb-2">{offer.discount}</p>
        <p className="text-sm text-white/80 mb-1">Ofertë</p>
        <h3 className="font-serif text-xl leading-snug">{offer.title}</h3>
      </div>
      <div>
        <p className="text-xs text-white/70 mb-4">Deri më {offer.expiry}</p>
        <span className="text-sm font-medium group-hover:underline">Shiko ofertën →</span>
      </div>
    </Link>
  )
}

function NewsStripCard({ item }: { item: NewsItem }) {
  const date = new Date(item.publishedAt).toLocaleDateString('sq-AL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Link
      href={`/news/${item.slug.current}`}
      className="w-[240px] sm:w-[260px] shrink-0 snap-start h-[320px] flex flex-col justify-between bg-[#1C1612] rounded-xl p-6 text-white hover:bg-[#2a221c] transition-colors group"
    >
      <div>
        <span className="inline-block text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-[#B8864E]/30 text-[#FAF7F2] mb-4">
          {item.tag ?? 'Lajm'}
        </span>
        <h3 className="font-serif text-xl leading-snug line-clamp-3">{item.title}</h3>
      </div>
      <div>
        <p className="text-xs text-white/50 mb-3">{date}</p>
        <span className="text-sm text-[#B8864E] group-hover:underline">Lexo më shumë →</span>
      </div>
    </Link>
  )
}

function SeeAllCard() {
  return (
    <Link
      href="/products"
      className="w-[180px] sm:w-[200px] shrink-0 snap-start h-[320px] flex items-center justify-center rounded-xl border-2 border-dashed border-[#EDE8DF] hover:border-[#B8864E] transition-colors group"
    >
      <span className="text-sm font-medium text-[#B8864E] text-center px-4 group-hover:underline">
        Shiko të gjitha →
      </span>
    </Link>
  )
}

