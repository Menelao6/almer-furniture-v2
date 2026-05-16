export default {
  name: 'gallery',
  title: 'Gallery',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'roomType',
      title: 'Room Type',
      type: 'string',
      options: {
        list: [
          { title: 'Living Room', value: 'living' },
          { title: 'Bedroom', value: 'bedroom' },
          { title: 'Dining Room', value: 'dining' },
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
      title: 'Featured on gallery page',
      type: 'boolean',
    },
    {
      name: 'featuredOnHome',
      title: 'Featured on home (tall tile)',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
