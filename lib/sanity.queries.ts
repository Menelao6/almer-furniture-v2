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
  "href": coalesce(link, select(defined(slug.current) => "/products/" + slug.current, "/products"))
}`

export const latestNewsQuery = `*[_type == "news"] | order(publishedAt desc) [0...6] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "tag": coalesce(tag, "Lajm"),
  image
}`

export const homeGalleryQuery = `*[_type == "gallery" && featured == true] | order(featuredOnHome desc, _createdAt desc) [0...4] {
  _id,
  title,
  location,
  description,
  roomType,
  "image": image.asset->url,
  "tall": featuredOnHome
}`

export const allGalleryQuery = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  location,
  description,
  roomType,
  "image": image.asset->url,
  featured
}`

export const featuredServicesQuery = `*[_type == "service"] | order(featured desc, title asc) {
  _id,
  title,
  slug,
  description,
  icon,
  features,
  image,
  featured
}`

export const allServicesQuery = `*[_type == "service"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  icon,
  features,
  image,
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
