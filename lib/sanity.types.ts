export type SanitySlug = { current: string }

export type ProductCategory = {
  _id: string
  title: string
  slug: string
}

export type SanityImageAsset = {
  _id?: string
  url: string
}

export type SanityImage = {
  asset?: SanityImageAsset
}

export type ProductImage = {
  image?: SanityImage
  alt?: string
}

export type SanityProduct = {
  _id: string
  name: string
  slug: SanitySlug
  description?: string
  fullDescription?: unknown[]
  images?: ProductImage[]
  materials?: string[]
  dimensions?: { width?: number; height?: number; depth?: number }
  category?: ProductCategory | null
  featured?: boolean
  relatedProducts?: SanityProduct[]
}

export type SanityOffer = {
  _id: string
  title: string
  discount: string
  expiry: string
  href: string
}

export type SanityNews = {
  _id: string
  title: string
  slug: SanitySlug
  excerpt?: string
  publishedAt: string
  tag?: string
  image?: SanityImage
}

export type SanityGalleryItem = {
  _id: string
  title: string
  slug?: SanitySlug
  location?: string
  description?: string
  roomType?: string
  image: string
  tall?: boolean
}

export type SanityService = {
  _id: string
  title: string
  slug?: SanitySlug
  description?: string
  icon?: string
  features?: string[]
  image?: SanityImage
  featured?: boolean
}

export type SanityTestimonial = {
  _id: string
  clientName: string
  clientTitle?: string
  quote: string
  rating?: number
  image?: SanityImage
}

export type SanityTeamMember = {
  _id: string
  name: string
  position: string
  bio?: string
  email?: string
  image?: SanityImage
}
