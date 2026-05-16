export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {
          name: 'width',
          title: 'Width (cm)',
          type: 'number',
        },
        {
          name: 'height',
          title: 'Height (cm)',
          type: 'number',
        },
        {
          name: 'depth',
          title: 'Depth (cm)',
          type: 'number',
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'productCategory' }],
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show on home page',
    },
    {
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0.image',
    },
  },
}
