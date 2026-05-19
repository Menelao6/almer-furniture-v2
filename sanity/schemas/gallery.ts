export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'images',
      title: 'Project photos',
      type: 'array',
      description:
        'Upload all photos for this project at once. The first photo is used as the cover.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.custom((images: unknown[] | undefined, context: { document?: { image?: unknown } }) => {
          const doc = context.document
          if ((!images || images.length === 0) && !doc?.image) {
            return 'Add at least one project photo (or a legacy cover image below).'
          }
          return true
        }),
    },
    {
      name: 'image',
      title: 'Cover image (legacy)',
      type: 'image',
      description:
        'Optional fallback if you only have one image. Prefer using “Project photos” above.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'roomType',
      title: 'Room type',
      type: 'string',
      options: {
        list: [
          { title: 'Living room', value: 'living' },
          { title: 'Bedroom', value: 'bedroom' },
          { title: 'Dining room', value: 'dining' },
          { title: 'Office', value: 'office' },
          { title: 'Kitchen', value: 'kitchen' },
          { title: 'Bathroom', value: 'bathroom' },
        ],
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Tiranë, Bllok',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Highlight on gallery page',
      type: 'boolean',
      description: 'Large featured tile at the top of the gallery grid.',
    },
    {
      name: 'featuredOnHome',
      title: 'Featured on home page',
      type: 'boolean',
      description:
        'Shows this project in the home page gallery (up to 4). The first project in the list appears as the large tile.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      fallback: 'image',
      photoCount: 'images',
    },
    prepare({
      title,
      media,
      fallback,
      photoCount,
    }: {
      title: string
      media?: unknown
      fallback?: unknown
      photoCount?: unknown[]
    }) {
      const count = Array.isArray(photoCount) ? photoCount.length : 0
      return {
        title,
        subtitle: count > 0 ? `${count} foto` : 'Pa foto',
        media: media ?? fallback,
      }
    },
  },
}
