export default {
  name: 'offer',
  title: 'Offers',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'discount',
      title: 'Discount label',
      type: 'string',
      description: 'e.g. –15%',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'link',
      title: 'Link URL',
      type: 'string',
      description: 'Optional. e.g. /products?category=kuzhina',
    },
    {
      name: 'expiryDate',
      title: 'Expiry date',
      type: 'date',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featuredOnHome',
      title: 'Show on home strip',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'discount',
    },
  },
}
