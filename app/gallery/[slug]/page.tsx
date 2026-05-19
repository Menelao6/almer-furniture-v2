import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, MapPin } from 'lucide-react'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { GalleryProjectPhotos } from '@/components/gallery-project-photos'
import { sanityFetch } from '@/lib/sanity.client'
import { galleryBySlugQuery } from '@/lib/sanity.queries'
import type { SanityGalleryItem } from '@/lib/sanity.types'
import { ROOM_LABELS, getGallerySlides } from '@/lib/gallery-utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = await sanityFetch<SanityGalleryItem | null>({
    query: galleryBySlugQuery,
    params: { slug },
  })
  if (!project) return { title: 'Projekti | Galeria | Almer' }
  return {
    title: `${project.title} | Galeria | Almer`,
    description: project.description ?? `Foto nga projekti ${project.title} — Almer.`,
  }
}

export default async function GalleryProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = await sanityFetch<SanityGalleryItem | null>({
    query: galleryBySlugQuery,
    params: { slug },
  })

  if (!project) {
    notFound()
  }

  const photoCount = getGallerySlides(project).length

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
                href="/gallery"
                className="hover:text-primary transition-colors touch-manipulation"
              >
                Galeria
              </Link>
              <ChevronRight size={14} className="shrink-0 opacity-60" aria-hidden />
              <span className="text-foreground line-clamp-1">{project.title}</span>
            </nav>
          </div>
        </section>

        <section className="section-padding-sm bg-warm-white border-b border-border">
          <div className="container-page">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                {project.roomType ? (
                  <p className="text-eyebrow text-primary font-semibold mb-2 normal-case tracking-wider">
                    {ROOM_LABELS[project.roomType] ?? project.roomType}
                  </p>
                ) : null}
                <h1 className="font-serif text-h2 text-foreground leading-tight mb-3">
                  {project.title}
                </h1>
                {project.location ? (
                  <p className="flex items-center gap-2 text-body text-muted-foreground mb-3">
                    <MapPin size={16} className="shrink-0 text-primary" aria-hidden />
                    {project.location}
                  </p>
                ) : null}
                {project.description ? (
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                ) : null}
              </div>
              <p className="text-small text-muted-foreground shrink-0">
                <span className="font-semibold text-foreground">{photoCount}</span> foto
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding-sm bg-background">
          <div className="container-page">
            <GalleryProjectPhotos project={project} />

            <div className="mt-[var(--space-block)] flex flex-col sm:flex-row items-center justify-between gap-4 pt-[var(--space-block)] border-t border-border">
              <Link
                href="/gallery"
                className="text-small text-muted-foreground hover:text-primary transition-colors touch-manipulation"
              >
                ← Kthehu te galeria
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-primary-foreground bg-wood-dark hover:opacity-90 rounded-full transition-opacity touch-manipulation"
              >
                Konsultë falas për një projekt të ngjashëm →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
