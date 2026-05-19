const productFields = `
  _id,
  name,
  slug,
  description,
  "images": images[] {
    alt,
    "image": image {
      asset->{ _id, url }
    }
  },
  category->{
    _id,
    title,
    "slug": slug.current
  },
  featured
`

export const featuredProductsQuery = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...8] {
  ${productFields}
}`

export const allProductsQuery = `*[_type == "product"] | order(name asc) {
  ${productFields}
}`

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  ${productFields},
  fullDescription,
  materials,
  dimensions,
  "relatedProducts": relatedProducts[]->{
    ${productFields}
  }
}`

export const productCategoriesQuery = `*[_type == "productCategory"] | order(sortOrder asc, title asc) {
  _id,
  title,
  "slug": slug.current
}`

export const activeOffersQuery = `*[_type == "offer" && active == true && featuredOnHome == true] | order(expiryDate asc) {
  _id,
  title,
  discount,
  "expiry": expiryDate,
  "href": coalesce(link, select(defined(slug.current) => "/products/" + slug.current, "/products")),
  image {
    asset->{ url }
  }
}`

export const latestNewsQuery = `*[_type == "news"] | order(publishedAt desc) [0...6] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "tag": coalesce(tag, "Lajm"),
  image {
    asset->{ url }
  }
}`

const galleryFields = `
  _id,
  title,
  slug,
  location,
  description,
  roomType,
  featured,
  featuredOnHome,
  "coverImage": coalesce(images[0].asset->url, image.asset->url),
  "images": coalesce(
    images[]{
      "url": asset->url,
      "alt": coalesce(alt, ^.title)
    }[defined(url)],
    select(defined(image.asset->url) => [{
      "url": image.asset->url,
      "alt": title
    }])
  )
`

export const homeGalleryQuery = `*[_type == "gallery" && featuredOnHome == true] | order(_createdAt desc) [0...4] {
  ${galleryFields},
  "tall": featuredOnHome
}`

export const allGalleryQuery = `*[_type == "gallery"] | order(featured desc, _createdAt desc) {
  ${galleryFields}
}`

export const galleryBySlugQuery = `*[_type == "gallery" && (slug.current == $slug || _id == $slug)][0] {
  ${galleryFields}
}`

export const featuredServicesQuery = `*[_type == "service"] | order(featured desc, title asc) {
  _id,
  title,
  slug,
  description,
  icon,
  features,
  image {
    asset->{ url }
  },
  featured
}`

export const allServicesQuery = `*[_type == "service"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  icon,
  features,
  image {
    asset->{ url }
  },
  featured
}`

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  clientName,
  clientTitle,
  quote,
  rating,
  image
}`

export const teamQuery = `*[_type == "team"] | order(name asc) {
  _id,
  name,
  position,
  bio,
  email,
  image
}`
