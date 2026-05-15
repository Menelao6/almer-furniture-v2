export default {
  name: 'news',
  title: 'News & Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Design Trends', value: 'design' },
          { title: 'Interior Tips', value: 'tips' },
          { title: 'New Collections', value: 'collections' },
          { title: 'News', value: 'news' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      date: 'publishedAt',
    },
    prepare(selection: any) {
      return {
        ...selection,
        subtitle: selection.date && new Date(selection.date).toLocaleDateString(),
      }
    },
  },
}
