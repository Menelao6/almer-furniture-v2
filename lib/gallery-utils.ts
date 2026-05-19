import type { SanityGalleryItem, SanityGalleryPhoto } from '@/lib/sanity.types'
import type { GallerySlide } from '@/components/fullscreen-gallery'

export const ROOM_LABELS: Record<string, string> = {
  living: 'Dhoma ndenjeje',
  bedroom: 'Dhoma gjumi',
  dining: 'Dhoma ngrënieje',
  office: 'Zyrë',
  kitchen: 'Kuzhinë',
  bathroom: 'Banjo',
}

export function getCoverImage(item: Pick<SanityGalleryItem, 'coverImage' | 'images'>): string {
  return item.coverImage || item.images[0]?.url || ''
}

export function getGallerySlides(
  item: Pick<SanityGalleryItem, 'title' | 'images' | 'coverImage'>
): GallerySlide[] {
  if (item.images.length > 0) {
    return item.images.map((photo, i) => ({
      src: photo.url,
      alt: photo.alt || `${item.title} ${i + 1}`,
    }))
  }
  if (item.coverImage) {
    return [{ src: item.coverImage, alt: item.title }]
  }
  return []
}

export function getLightboxDescription(item: SanityGalleryItem): string | undefined {
  const parts: string[] = []
  if (item.location) parts.push(item.location)
  if (item.roomType) parts.push(ROOM_LABELS[item.roomType] ?? item.roomType)
  if (item.description) parts.push(item.description)
  return parts.length > 0 ? parts.join(' · ') : undefined
}

export function countGalleryPhotos(items: SanityGalleryItem[]): number {
  return items.reduce((sum, item) => sum + Math.max(item.images.length, item.coverImage ? 1 : 0), 0)
}

export function getGalleryProjectPath(item: Pick<SanityGalleryItem, 'slug' | '_id'>): string {
  const slug = item.slug?.current?.trim()
  return slug ? `/gallery/${slug}` : `/gallery/${item._id}`
}
