'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { urlFor } from '@/lib/sanity.image'

interface NewsArticle {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  image?: any
  author?: string
  publishedAt: string
  category?: string
}

interface NewsSectionProps {
  articles: NewsArticle[]
}

export function NewsSection({ articles }: NewsSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sq-AL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Lajmet dhe Përvojat e Fundit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qëndroni të përditësuar me trendet e dizajnit, këshilla dhe historitjat nga bota e mobiljes luksi.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.slice(0, 3).map((article) => (
            <Link key={article._id} href={`/news/${article.slug.current}`}>
              <div className="group bg-background rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md cursor-pointer">
                {/* Image */}
                {article.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <Image
                      src={urlFor(article.image).width(400).height(300).url()}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    {article.author && (
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                    {article.excerpt || 'Discover more about this article.'}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-primary group-hover:text-accent transition-colors pt-4 border-t border-border">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 group"
          >
            <span>Read All Articles</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
