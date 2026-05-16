export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-16'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'almer2',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '5glz4h4d',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
