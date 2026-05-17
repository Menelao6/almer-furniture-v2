/** Deterministic Albanian dates — avoids SSR/client locale hydration mismatches. */

const MONTHS_LONG = [
  'janar',
  'shkurt',
  'mars',
  'prill',
  'maj',
  'qershor',
  'korrik',
  'gusht',
  'shtator',
  'tetor',
  'nëntor',
  'dhjetor',
] as const

const MONTHS_SHORT = [
  'jan',
  'shk',
  'mar',
  'pri',
  'maj',
  'qer',
  'kor',
  'gus',
  'sht',
  'tet',
  'nën',
  'dhj',
] as const

function parseDate(iso: string): Date | null {
  if (!iso) return null
  const d = new Date(iso.includes('T') ? iso : `${iso}T12:00:00`)
  return Number.isNaN(d.getTime()) ? null : d
}

export function formatDateAlbanian(
  iso: string,
  style: 'long' | 'short' = 'long',
): string {
  const d = parseDate(iso)
  if (!d) return ''

  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  const months = style === 'long' ? MONTHS_LONG : MONTHS_SHORT

  return `${day} ${months[month]} ${year}`
}
