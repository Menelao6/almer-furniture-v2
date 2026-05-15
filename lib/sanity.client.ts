import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = '2024-01-01'

let client: ReturnType<typeof createClient> | null = null

if (projectId && dataset) {
  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
  })
}

export { client }

export async function sanityFetch({
  query,
  params = {},
}: {
  query: string
  params?: Record<string, any>
}) {
  if (!client) {
    console.warn('Sanity client not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET environment variables.')
    return null
  }
  return client.fetch(query, params)
}
