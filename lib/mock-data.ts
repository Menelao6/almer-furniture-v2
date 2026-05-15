// Të dhëna shëmbëllore për zhvillim - zëvendësimi me të dhëna reale të Sanity kur të jetë konfiguruar

export const mockProducts = [
  {
    _id: '1',
    name: 'Divan Velur Luksoz',
    slug: { current: 'luxe-velvet-sofa' },
    description: 'Një divan kontemporan i mahnitshëm me zë mbi në fabric velur premium.',
    images: [
      {
        image: {
          asset: { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop' },
        },
        alt: 'Divan Velur Luksoz',
      },
    ],
    category: 'sofas',
    price: 3500,
  },
  {
    _id: '2',
    name: 'Tavolë Kafeje Mermeri',
    slug: { current: 'marble-coffee-table' },
    description: 'Një tavolë kafeje me majë mermeri me kornizë arjendi vërtet e mahnitshme.',
    images: [
      {
        image: {
          asset: { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop' },
        },
        alt: 'Tavolë Kafeje Mermeri',
      },
    ],
    category: 'tables',
    price: 1200,
  },
  {
    _id: '3',
    name: 'Karrige Lëkure Puna',
    slug: { current: 'leather-accent-chair' },
    description: 'Një karrige puna lëkure e sofistikuar e përsosur për çdo vend këndore leximi.',
    images: [
      {
        image: {
          asset: { url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop' },
        },
        alt: 'Karrige Lëkure Puna',
      },
    ],
    category: 'chairs',
    price: 1800,
  },
  {
    _id: '4',
    name: 'Llambë Dyshemeje Arjendi',
    slug: { current: 'brass-floor-lamp' },
    description: 'Një llambë dyshemeje arjendi elegante me dizajn skulptural.',
    images: [
      {
        image: {
          asset: { url: 'https://images.unsplash.com/photo-1565636192335-14e06420265e?w=500&h=500&fit=crop' },
        },
        alt: 'Llambë Dyshemeje Arjendi',
      },
    ],
    category: 'lighting',
    price: 650,
  },
]

export const mockServices = [
  {
    _id: '1',
    name: 'Konsultë Dizajni i Brendshëm',
    slug: { current: 'interior-design-consultation' },
    description: 'Konsultë e ekspertit për të transformuar hapësirat tuaja jetese me mobilje luksoz dhe dizajn.',
  },
  {
    _id: '2',
    name: 'Dizajni Custom i Mobiljes',
    slug: { current: 'custom-furniture-design' },
    description: 'Pjesë mobilje bespoke të punuara sipas specifikimeve tuaja të sakta.',
  },
  {
    _id: '3',
    name: 'Planifikimi i Hapësirës dhe Plani',
    slug: { current: 'space-planning-layout' },
    description: 'Planifikimi profesional i hapësirës për të maksimizuar funksionalitetin dhe estetikën.',
  },
  {
    _id: '4',
    name: 'Instalimi dhe Dërgimi i Mobiljes',
    slug: { current: 'furniture-installation-delivery' },
    description: 'Shërbime profesionale të dërgimit dhe instalimit për mobiljen tuaj.',
  },
]

export const mockTestimonials = [
  {
    _id: '1',
    author: 'Lindita Shtypi',
    text: 'Ekipi transformoi dhomën time të ndenjes në një strehim. Çdo pjesë u zgjodh me kujdes dhe vëmendja ndaj detajit është e paraleljen.',
    rating: 5,
  },
  {
    _id: '2',
    author: 'Fatos Bardhi',
    text: 'Nga përzgjedhja në instalim, shërbimi ishte pa ndërprerje. Jam shumë i kënaqur me koleksionin e ri të mobiljes.',
    rating: 5,
  },
  {
    _id: '3',
    author: 'Arjola Kola',
    text: 'Cilësi premium në nivelin më të lartë. Artezonësia është evidente në çdo pjesë. Shumë të rekomanduar!',
    rating: 5,
  },
]

export const mockNews = [
  {
    _id: '1',
    title: 'Lançimi i Koleksionit të Ri: Luksi i Qëndrueshëm',
    slug: { current: 'new-collection-sustainable-luxury' },
    excerpt: 'Përfaqësimi i koleksionit tonë luksoz miqësor me materiale të zbulesuar në mënyrë të qëndrueshme.',
    author: 'Admin',
    publishedAt: '2024-05-01',
  },
  {
    _id: '2',
    title: 'Tendencat e Dizajnit të Brendshëm 2024',
    slug: { current: 'interior-design-trends-2024' },
    excerpt: 'Zbuloni tendencat kryesore të dizajnit të brendshëm që formësojnë shtëpitë moderne këtë vit.',
    author: 'Admin',
    publishedAt: '2024-04-15',
  },
]
