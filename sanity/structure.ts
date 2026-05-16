import type { StructureResolver } from 'sanity/structure'

const HIDDEN_FROM_AUTO_LIST = [
  'productCategory',
  'product',
  'offer',
  'service',
  'gallery',
  'news',
  'testimonial',
  'team',
  'siteSettings',
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Almer')
    .items([
      S.listItem()
        .title('Cilësimet e faqes')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Cilësimet e faqes'),
        ),

      S.divider(),

      S.listItem()
        .title('Produktet')
        .child(
          S.list()
            .title('Produktet')
            .items([
              S.documentTypeListItem('productCategory').title('Kategoritë'),
              S.documentTypeListItem('product').title('Të gjitha produktet'),
            ]),
        ),

      S.documentTypeListItem('offer').title('Ofertat'),
      S.documentTypeListItem('service').title('Shërbimet'),
      S.documentTypeListItem('gallery').title('Galeria'),
      S.documentTypeListItem('news').title('Lajme & projekte'),
      S.documentTypeListItem('testimonial').title('Dëshmitë klientësh'),
      S.documentTypeListItem('team').title('Ekipi'),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !HIDDEN_FROM_AUTO_LIST.includes(item.getId()!),
      ),
    ])
