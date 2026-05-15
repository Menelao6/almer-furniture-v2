import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { CheckCircle } from 'lucide-react'

const dummyServices = [
  {
    _id: '1',
    title: 'Konsultë Dizajni i Brendshëm',
    slug: { current: 'interior-design' },
    description: 'Konsultë profesionale për transformimin e hapësirës tuaj.',
    icon: 'Palette',
    image: null,
  },
  {
    _id: '2',
    title: 'Kurimi i Mobiljes',
    slug: { current: 'furniture-curation' },
    description: 'Përzgjedhje eksperte e pjesëve të përshtatura me stilin tuaj.',
    icon: 'Sofa',
    image: null,
  },
  {
    _id: '3',
    title: 'Fabrikimi Custom',
    slug: { current: 'custom-fabrication' },
    description: 'Mobilje bespoke të punuara sipas specifikimeve tuaja të sakta.',
    icon: 'Hammer',
    image: null,
  },
  {
    _id: '4',
    title: 'Vizualizimi 3D i Dizajnit',
    slug: { current: '3d-visualization' },
    description: 'Shikoni hapësirën tuaj përpara se të bëni ndonjë ndryshim.',
    icon: 'Sparkles',
    image: null,
  },
  {
    _id: '5',
    title: 'Menaxhimi i Projektit',
    slug: { current: 'project-management' },
    description: 'Koordinimi end-to-end i projektit të brendshëm.',
    icon: 'Users',
    image: null,
  },
  {
    _id: '6',
    title: 'Dërgim & Instalim',
    slug: { current: 'delivery-installation' },
    description: 'Dërgim profesional dhe instalim pa ndërprerje.',
    icon: 'Truck',
    image: null,
  },
]

const process = [
  {
    number: '01',
    title: 'Konsultë',
    description: 'Fillojmë duke kuptuar vizionin tuaj, preferencat e stilit dhe buxhetin për të krijuar një bazë të fortë për projektin tuaj.',
  },
  {
    number: '02',
    title: 'Dizajn & Planifikimi',
    description: 'Ekipi ynë zhvillon dizajne të detajuar dhe vizualizime 3D, duke paraqitur opsione të shumta për shqyrtim.',
  },
  {
    number: '03',
    title: 'Përzgjedhja & Urdhërim',
    description: 'Ju udhëzojmë përmes përzgjedhjes së pjesëve dhe menaxhojmë të gjitha urdhërimet, kontrollet e cilësisë dhe logjistikën.',
  },
  {
    number: '04',
    title: 'Instalimi & Stil',
    description: 'Instalim profesional i ndjekur nga puna përfundimtare e stilit për ta sjellë vizionin tuaj në jetë në mënyrë të përsosur.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive interior design and furniture services to transform your space.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {dummyServices.map((service) => (
                <ServiceCard
                  key={service._id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to bringing your interior design dreams to reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[50%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  )}

                  {/* Card */}
                  <div className="relative bg-background rounded-lg border border-border p-8 h-full">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
                  Why Choose Us?
                </h2>
                <div className="space-y-4">
                  {[
                    'Expert team with 10+ years of experience',
                    'Access to premium furniture collections',
                    '3D design visualization before execution',
                    'Professional installation and support',
                    'Flexible payment and delivery options',
                    'Aftercare and maintenance guidance',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <p className="text-lg text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden aspect-square bg-muted border-4 border-accent/20 flex items-center justify-center">
                <p className="text-muted-foreground">Image placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your space into something extraordinary.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
