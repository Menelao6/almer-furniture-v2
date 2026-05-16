import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = '2024-01-01'

export function isSanityConfigured() {
  return Boolean(projectId && dataset)
}

let client: ReturnType<typeof createClient> | null = null

if (isSanityConfigured()) {
  client = createClient({
    projectId: projectId!,
    dataset: dataset!,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
  })
}

export { client }

export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string
  params?: Record<string, unknown>
}): Promise<T | null> {
  if (!client) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        'Sanity client not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local'
      )
    }
    return null
  }
  return client.fetch<T>(query, params)
}

/** Fetch from Sanity; returns an empty array when unconfigured or on failure. */
export async function sanityFetchList<T>({
  query,
  params = {},
}: {
  query: string
  params?: Record<string, unknown>
}): Promise<T[]> {
  try {
    const result = await sanityFetch<T[]>({ query, params })
    return result ?? []
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return []
  }
}
