export const mockProducts = [
  {
    _id: '1',
    name: 'Kuzhinë Moderne Ash',
    slug: { current: 'kuzhine-moderne-ash' },
    description: 'Kabinete me porosi, ishull qendror dhe sipërfaqe kuarc — dizajn i pastër për familje moderne.',
    images: [
      {
        image: {
          asset: {
            url: 'https://images.unsplash.com/photo-1556912173-46c7f0a8c9c5?w=800&h=500&fit=crop',
          },
        },
        alt: 'Kuzhinë Moderne Ash',
      },
    ],
    category: 'kuzhina',
  },
  {
    _id: '2',
    name: 'Gardërobë Walk-in Lisi',
    slug: { current: 'garderobe-walk-in-lisi' },
    description: 'Gardërobë e integruar me ndriçim LED dhe organizim të personalizuar.',
    images: [
      {
        image: {
          asset: {
            url: 'https://images.unsplash.com/photo-1616594039964-40861a91a042?w=800&h=500&fit=crop',
          },
        },
        alt: 'Gardërobë Walk-in',
      },
    ],
    category: 'dhoma-gjumi',
  },
  {
    _id: '3',
    name: 'Bibliotekë & TV Wall',
    slug: { current: 'biblioteke-tv-wall' },
    description: 'Mobilje murale për dhomën e ndenjes me dru lisi natyral dhe hapësira të fshehura.',
    images: [
      {
        image: {
          asset: {
            url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop',
          },
        },
        alt: 'Bibliotekë TV Wall',
      },
    ],
    category: 'dhoma-ndenje',
  },
  {
    _id: '4',
    name: 'Dyer Dyshemeje Premium',
    slug: { current: 'dyer-dyshemeje-premium' },
    description: 'Dyer të brendshme me kornizë druri masiv dhe xham mat — instalim i përfshirë.',
    images: [
      {
        image: {
          asset: {
            url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
          },
        },
        alt: 'Dyer Premium',
      },
    ],
    category: 'dyer-dritare',
  },
  {
    _id: '5',
    name: 'Tavolinë Zjarri Ash',
    slug: { current: 'tavoline-zjarri-ash' },
    description: 'Tavolinë ngrënieje me bazë druri dhe sipërfaqe guri — për 6–8 persona.',
    images: [
      {
        image: {
          asset: {
            url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=500&fit=crop',
          },
        },
        alt: 'Tavolinë Zjarri',
      },
    ],
    category: 'tavolina',
  },
  {
    _id: '6',
    name: 'Apartament i Plotë — Bllok',
    slug: { current: 'apartament-i-plote-bllok' },
    description: 'Arredim i plotë për apartament 85m² — kuzhinë, dhoma, banjo dhe hapësira ndenjeje.',
    images: [
      {
        image: {
          asset: {
            url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
          },
        },
        alt: 'Apartament i Plotë',
      },
    ],
    category: 'shtepi-e-plote',
  },
]

export const mockOffers = [
  {
    _id: 'offer-1',
    discount: '–15%',
    title: 'Kuzhinat e vjeshtës',
    expiry: '30 Qershor 2026',
    href: '/products?offer=spring',
  },
]

export const mockServices = [
  {
    _id: '1',
    title: 'Kuzhinat me porosi',
    slug: { current: 'kuzhina-me-porosi' },
    description: 'Kabinete, ishuj dhe sipërfaqe pune të dizajnuara për hapësirën dhe stilin tuaj.',
    icon: '🍳',
    features: ['Kabinete me porosi', 'Ishuj & sipërfaqe', 'Planifikim 3D falas'],
  },
  {
    _id: '2',
    title: 'Dhoma gjumi',
    slug: { current: 'dhoma-gjumi' },
    description: 'Shtretër, gardëroba dhe mobilje plotësuese për një dhomë gjumi harmonike.',
    icon: '🛏️',
    features: ['Gardëroba walk-in', 'Krevat & komodinë', 'Ndriçim i integruar'],
  },
  {
    _id: '3',
    title: 'Arredim i plotë',
    slug: { current: 'arredim-i-plote' },
    description: 'Çdo dhomë, një projekt — nga koncepti deri te montimi final nga ekipi ynë.',
    icon: '🏠',
    features: ['Dizajn i gjithë shtëpisë', 'Koordinim i projektit', 'Montim & garanci'],
  },
]

export const mockTestimonials = [
  {
    _id: '1',
    clientName: 'Lindita Shtypi',
    clientTitle: 'Tiranë · Kuzhinë',
    quote:
      'Ekipi transformoi kuzhinën tonë në një hapësirë që e përdorim çdo ditë me krenari. Cilësia e drurit dhe precizioni i montimit janë të jashtëzakonshme.',
    rating: 5,
  },
  {
    _id: '2',
    clientName: 'Fatos Bardhi',
    clientTitle: 'Durrës · Arredim i plotë',
    quote:
      'Nga konsulta fillestare deri te dorëzimi, gjithçka ishte profesionale. Mobiljet duken sikur janë bërë për shtëpinë tonë — sepse janë.',
    rating: 5,
  },
  {
    _id: '3',
    clientName: 'Arjola Kola',
    clientTitle: 'Tiranë · Dhoma gjumi',
    quote:
      'Gardëroba walk-in dhe mobiljet e dhomës së gjumit tejkaluan pritshmëritë. Rekomandoj Almer pa hezitim.',
    rating: 5,
  },
]

export const mockNews = [
  {
    _id: '1',
    title: 'Projekti i ri: Kuzhinë në Bllok',
    slug: { current: 'projekti-kuzhine-bllok' },
    excerpt: 'Transformim i plotë i një kuzhine 18m² me dru lisi dhe sipërfaqe kuarc.',
    publishedAt: '2026-04-10',
    tag: 'Projekt',
  },
  {
    _id: '2',
    title: 'Materialet premium që përdorim',
    slug: { current: 'materialet-premium' },
    excerpt: 'Një vështrim i afërt te druri shqiptar dhe europian në punimet tona.',
    publishedAt: '2026-03-22',
    tag: 'Lajm',
  },
]

export const mockGallery = [
  {
    _id: 'g1',
    title: 'Kuzhinë Moderne',
    location: 'Tiranë, Bllok',
    image:
      'https://images.unsplash.com/photo-1556912173-46c7f0a8c9c5?w=600&h=900&fit=crop',
    tall: true,
  },
  {
    _id: 'g2',
    title: 'Dhoma Gjumi Ash',
    location: 'Tiranë',
    image:
      'https://images.unsplash.com/photo-1616594039964-40861a91a042?w=600&h=400&fit=crop',
    tall: false,
  },
  {
    _id: 'g3',
    title: 'Dhoma Ndenjeje',
    location: 'Durrës',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop',
    tall: false,
  },
  {
    _id: 'g4',
    title: 'Dyer & Detaje',
    location: 'Tiranë',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    tall: false,
  },
]

export const CATEGORY_LABELS: Record<string, string> = {
  kuzhina: 'Kuzhinat',
  'dhoma-gjumi': 'Dhoma gjumi',
  'dhoma-ndenje': 'Dhoma ndenje',
  'dyer-dritare': 'Dyer & dritare',
  tavolina: 'Tavolina',
  'shtepi-e-plote': 'Shtëpi e plotë',
}

export const CATEGORY_SLUGS = [
  { slug: 'kuzhina', label: 'Kuzhinat' },
  { slug: 'dhoma-gjumi', label: 'Dhoma gjumi' },
  { slug: 'dhoma-ndenje', label: 'Dhoma ndenje' },
  { slug: 'dyer-dritare', label: 'Dyer & dritare' },
  { slug: 'tavolina', label: 'Tavolina' },
  { slug: 'shtepi-e-plote', label: 'Shtëpi e plotë' },
]
