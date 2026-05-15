import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './sanity.client'

const builder = client ? createImageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) {
    // If client is not configured, extract URL directly from asset
    if (source?.asset?.url) {
      return {
        width: () => ({ height: () => ({ url: () => source.asset.url }) }),
      }
    }
    throw new Error('Image builder not configured and no asset URL found')
  }
  return builder.image(source)
}
