/** Extract plain text paragraphs from Sanity portable text blocks */
export function portableTextToPlain(blocks: unknown): string[] {
  if (!blocks || !Array.isArray(blocks)) return []

  return blocks
    .filter((block): block is { _type?: string; children?: { text?: string }[] } =>
      typeof block === 'object' && block !== null
    )
    .filter((block) => block._type === 'block' && Array.isArray(block.children))
    .map((block) =>
      block.children!.map((child) => child.text ?? '').join('').trim()
    )
    .filter(Boolean)
}
