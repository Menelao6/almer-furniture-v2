'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import type { SanityProduct, SanityOffer, SanityNews } from '@/lib/sanity.types'

const DEFAULT_OFFER_IMAGE =
  'https://images.unsplash.com/photo-1556912173-46c7f0a8c9c5?w=600&h=800&fit=crop'

export type OfferStripItem = SanityOffer & { expiryLabel?: string }
export type NewsStripItem = SanityNews & { publishedAtLabel?: string }

interface MixedStripProps {
  products: SanityProduct[]
  offers: OfferStripItem[]
  news: NewsStripItem[]
}

function getProductImageUrl(product: SanityProduct) {
  return product.images?.[0]?.image?.asset?.url ?? ''
}

function getCmsImageUrl(image?: { asset?: { url?: string } }) {
  return image?.asset?.url ?? ''
}

export function MixedStrip({ products, offers, news }: MixedStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.75
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  const p0 = products[0]
  const p1 = products[1]
  const p2 = products[2]
  const offer = offers[0]
  const newsItem = news[0]

  return (
    <section className="section-padding-sm bg-warm-white">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-[var(--space-block)]">
          <SectionHeader
            title="Të rejat & ofertat"
            description="Produkte të zgjedhura, oferta aktive dhe projektet e fundit."
            className="mb-0 flex-1"
          />
          <div className="flex gap-2 shrink-0 pb-1">
            <ScrollButton dir="left" onClick={() => scroll('left')} />
            <ScrollButton dir="right" onClick={() => scroll('right')} />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-[var(--space-gap)] overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1 -mx-[var(--container-px)] px-[var(--container-px)] sm:mx-0 sm:px-0"
        >
          {p0 && (
            <ProductStripCard
              name={p0.name}
              category={p0.category?.title ?? ''}
              image={getProductImageUrl(p0)}
              href={`/products/${p0.slug.current}`}
              widthClass="strip-card-w-wide"
            />
          )}
          {offer && (
            <MediaStripCard
              href={offer.href ?? '/products'}
              imageUrl={getCmsImageUrl(offer.image) || DEFAULT_OFFER_IMAGE}
              imageAlt={offer.title}
              overlay="accent"
              badge="Ofertë"
              title={offer.title}
              meta={offer.expiryLabel ? `Deri më ${offer.expiryLabel}` : undefined}
              cta="Shiko ofertën →"
              headline={offer.discount}
              widthClass="strip-card-w-narrow"
            />
          )}
          {p1 && (
            <ProductStripCard
              name={p1.name}
              category={p1.category?.title ?? ''}
              image={getProductImageUrl(p1)}
              href={`/products/${p1.slug.current}`}
              widthClass="strip-card-w"
            />
          )}
          {newsItem && (
            <MediaStripCard
              href={`/news/${newsItem.slug.current}`}
              imageUrl={getCmsImageUrl(newsItem.image)}
              imageAlt={newsItem.title}
              overlay="dark"
              badge={newsItem.tag ?? 'Lajm'}
              title={newsItem.title}
              meta={newsItem.publishedAtLabel}
              cta="Lexo më shumë →"
              widthClass="strip-card-w"
            />
          )}
          {p2 && (
            <ProductStripCard
              name={p2.name}
              category={p2.category?.title ?? ''}
              image={getProductImageUrl(p2)}
              href={`/products/${p2.slug.current}`}
              widthClass="strip-card-w-wide"
            />
          )}
          <SeeAllCard />
        </div>

        <p className="text-center mt-[var(--space-block)]">
          <Link
            href="/products"
            className="text-small text-muted-foreground hover:text-primary transition-colors"
          >
            Shiko të gjitha produktet →
          </Link>
        </p>
      </div>
    </section>
  )
}

function ScrollButton({
  dir,
  onClick,
}: {
  dir: 'left' | 'right'
  onClick: () => void
}) {
  const Icon = dir === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary flex items-center justify-center transition-colors"
      aria-label={dir === 'left' ? 'Lëviz majtas' : 'Lëviz djathtas'}
    >
      <Icon size={18} />
    </button>
  )
}

function ProductStripCard({
  name,
  category,
  image,
  href,
  widthClass,
}: {
  name: string
  category: string
  image: string
  href: string
  widthClass: string
}) {
  return (
    <Link
      href={href}
      className={`strip-card ${widthClass} flex flex-col bg-card rounded-[var(--radius-lg)] border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all group`}
    >
      <div className="relative flex-1 min-h-[55%] bg-muted">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 640px) 45vw, 280px"
          />
        ) : null}
      </div>
      <div className="p-[var(--space-card)]">
        {category ? (
          <p className="text-eyebrow text-primary font-medium mb-1.5 normal-case tracking-wider">
            {category}
          </p>
        ) : null}
        <h3 className="font-serif text-h3 text-foreground line-clamp-2 mb-2">{name}</h3>
        <span className="text-small text-primary group-hover:underline">Shiko →</span>
      </div>
    </Link>
  )
}

function MediaStripCard({
  href,
  imageUrl,
  imageAlt,
  overlay,
  badge,
  headline,
  title,
  meta,
  cta,
  widthClass,
}: {
  href: string
  imageUrl?: string
  imageAlt: string
  overlay: 'accent' | 'dark'
  badge: string
  headline?: string
  title: string
  meta?: string
  cta: string
  widthClass: string
}) {
  const fallbackBg = overlay === 'accent' ? 'bg-primary' : 'bg-wood-dark'
  const hasImage = Boolean(imageUrl)

  return (
    <Link
      href={href}
      className={`strip-card ${widthClass} relative flex flex-col justify-between rounded-[var(--radius-lg)] overflow-hidden group`}
    >
      {hasImage ? (
        <>
          <Image
            src={imageUrl!}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 640px) 45vw, 260px"
          />
          <div
            className={`absolute inset-0 ${
              overlay === 'accent'
                ? 'bg-gradient-to-t from-[#1C1612]/85 via-[#B8864E]/50 to-[#B8864E]/20'
                : 'bg-gradient-to-t from-black/85 via-black/40 to-black/10'
            }`}
          />
        </>
      ) : (
        <div className={`absolute inset-0 ${fallbackBg}`} />
      )}

      <div className="relative z-10 p-[var(--space-card)] flex flex-col justify-between h-full text-white">
        <div>
          {headline ? (
            <p className="font-serif text-[clamp(1.75rem,6vw,2.5rem)] font-bold leading-none mb-1">
              {headline}
            </p>
          ) : null}
          <span className="inline-block text-eyebrow normal-case tracking-wider px-2 py-1 rounded bg-white/15 text-white/90 mb-3">
            {badge}
          </span>
          <h3 className="font-serif text-h3 leading-snug line-clamp-3">{title}</h3>
        </div>
        <div>
          {meta ? <p className="text-small text-white/60 mb-3">{meta}</p> : null}
          <span className="text-small font-medium text-[#d4a96a] group-hover:underline">{cta}</span>
        </div>
      </div>
    </Link>
  )
}

function SeeAllCard() {
  return (
    <Link
      href="/products"
      className="strip-card strip-card-w-narrow flex items-center justify-center rounded-[var(--radius-lg)] border-2 border-dashed border-border hover:border-primary transition-colors group"
    >
      <span className="text-small font-medium text-primary text-center px-4 group-hover:underline">
        Shiko të gjitha →
      </span>
    </Link>
  )
}
