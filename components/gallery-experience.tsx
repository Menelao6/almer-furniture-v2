'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Images, MapPin } from 'lucide-react'
import type { SanityGalleryItem } from '@/lib/sanity.types'
import { TapButton } from '@/components/tap-button'
import {
  ROOM_LABELS,
  countGalleryPhotos,
  getCoverImage,
  getGalleryProjectPath,
  getGallerySlides,
} from '@/lib/gallery-utils'

interface GalleryExperienceProps {
  items: SanityGalleryItem[]
}

export function GalleryExperience({ items }: GalleryExperienceProps) {
  const roomTypes = useMemo(() => {
    const types = new Set(items.map((i) => i.roomType).filter(Boolean) as string[])
    return Array.from(types)
  }, [items])

  const [selectedRoom, setSelectedRoom] = useState('all')

  const filtered = useMemo(
    () =>
      selectedRoom === 'all'
        ? items
        : items.filter((item) => item.roomType === selectedRoom),
    [items, selectedRoom]
  )

  const featured = filtered.find((p) => p.featured) ?? null
  const gridProjects = featured
    ? filtered.filter((p) => p._id !== featured._id)
    : filtered

  const totalPhotos = countGalleryPhotos(filtered)

  return (
    <>
      <section className="sticky top-16 z-40 border-b border-border bg-warm-white/95 backdrop-blur-md">
        <div className="container-page py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-small text-muted-foreground">
              <span className="font-semibold text-foreground">{filtered.length}</span> projekte
              <span className="mx-2 opacity-40" aria-hidden>
                ·
              </span>
              <span className="font-semibold text-foreground">{totalPhotos}</span> foto
            </p>

            {roomTypes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  active={selectedRoom === 'all'}
                  label="Të gjitha"
                  onSelect={() => setSelectedRoom('all')}
                />
                {roomTypes.map((room) => (
                  <FilterPill
                    key={room}
                    active={selectedRoom === room}
                    label={ROOM_LABELS[room] ?? room}
                    onSelect={() => setSelectedRoom(room)}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-background">
        <div className="container-page">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[var(--space-gap)] auto-rows-[minmax(clamp(9rem,22vw,12rem),1fr)]">
              {featured ? (
                <ProjectTile project={featured} variant="featured" />
              ) : null}

              {gridProjects.map((project, index) => (
                <ProjectTile
                  key={project._id}
                  project={project}
                  variant={index % 5 === 2 ? 'tall' : 'default'}
                />
              ))}
            </div>
          ) : (
            <EmptyState hasAny={items.length > 0} />
          )}

          {filtered.length > 0 ? (
            <div className="mt-[var(--space-block)] rounded-[var(--radius-lg)] bg-wood-dark text-warm-white p-[var(--space-card)] sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-eyebrow text-primary font-semibold mb-2">Inspirim për shtëpinë tuaj?</p>
                <h2 className="font-serif text-h3 text-warm-white leading-snug max-w-md">
                  Le të krijojmë diçka të ngjashme — me porosi, për ju.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-primary-foreground bg-primary hover:opacity-90 rounded-full transition-opacity touch-manipulation"
              >
                Konsultë falas →
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}

function FilterPill({
  active,
  label,
  onSelect,
}: {
  active: boolean
  label: string
  onSelect: () => void
}) {
  return (
    <TapButton
      onTap={onSelect}
      className={`shrink-0 min-h-10 px-4 py-2 rounded-full text-small font-medium border transition-colors ${
        active
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-card text-muted-foreground border-border hover:border-primary'
      }`}
    >
      {label}
    </TapButton>
  )
}

function ProjectTile({
  project,
  variant,
}: {
  project: SanityGalleryItem
  variant: 'featured' | 'tall' | 'default'
}) {
  const cover = getCoverImage(project)
  const photoCount = getGallerySlides(project).length
  const peek = project.images[1]?.url
  const href = getGalleryProjectPath(project)

  const layoutClass =
    variant === 'featured'
      ? 'col-span-2 row-span-2 min-h-[clamp(18rem,48vw,28rem)]'
      : variant === 'tall'
        ? 'col-span-1 row-span-2 min-h-[clamp(14rem,36vw,22rem)]'
        : 'min-h-[clamp(9rem,22vw,12rem)]'

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[var(--radius-lg)] bg-muted block w-full h-full touch-manipulation [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${layoutClass} ${!cover ? 'pointer-events-none opacity-60' : ''}`}
      aria-label={`Shiko ${photoCount} foto: ${project.title}`}
    >
      {peek ? (
        <div
          className="absolute inset-3 rounded-[calc(var(--radius-lg)-4px)] overflow-hidden opacity-40 scale-[0.96] translate-x-1 -translate-y-1 pointer-events-none hidden sm:block"
          aria-hidden
        >
          <Image
            src={peek}
            alt=""
            fill
            className="object-cover pointer-events-none"
            sizes="200px"
            draggable={false}
          />
        </div>
      ) : null}

      {cover ? (
        <Image
          src={cover}
          alt={project.title}
          fill
          className="object-cover pointer-events-none select-none transition-transform duration-500 group-active:scale-[1.02] sm:group-hover:scale-[1.03]"
          sizes={
            variant === 'featured'
              ? '(max-width: 768px) 100vw, 50vw'
              : '(max-width: 768px) 50vw, 25vw'
          }
          draggable={false}
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-wood-dark/20 to-transparent pointer-events-none" />

      {photoCount > 1 ? (
        <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-wood-dark/75 px-2.5 py-1 text-xs font-medium text-white pointer-events-none">
          <Images size={12} aria-hidden />
          {photoCount}
        </span>
      ) : null}

      {project.roomType ? (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground pointer-events-none">
          {ROOM_LABELS[project.roomType] ?? project.roomType}
        </span>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 pointer-events-none">
        <h3 className="font-serif text-h3 text-white leading-tight drop-shadow-sm line-clamp-2">
          {project.title}
        </h3>
        {project.location ? (
          <p className="mt-1 flex items-center gap-1 text-small text-white/75 line-clamp-1">
            <MapPin size={12} className="shrink-0 opacity-80" aria-hidden />
            {project.location}
          </p>
        ) : null}
        <span className="mt-2 inline-block text-small font-medium text-primary sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          Shiko projektin →
        </span>
      </div>
    </Link>
  )
}

function EmptyState({ hasAny }: { hasAny: boolean }) {
  return (
    <div className="text-center py-16 px-4 rounded-[var(--radius-lg)] border border-dashed border-border bg-card">
      <p className="font-serif text-h3 text-foreground mb-2">
        {hasAny ? 'Asnjë projekt në këtë kategori' : 'Galeria po përgatitet'}
      </p>
      <p className="text-small text-muted-foreground max-w-md mx-auto">
        {hasAny
          ? 'Provoni një filtër tjetër ose shikoni të gjitha projektet.'
          : 'Shtoni projekte me foto në Sanity Studio — mund të ngarkoni shumë imazhe për projekt.'}
      </p>
    </div>
  )
}
