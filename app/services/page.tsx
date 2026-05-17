import Link from 'next/link'
import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { CheckCircle } from 'lucide-react'
import { sanityFetchList } from '@/lib/sanity.client'
import { allServicesQuery } from '@/lib/sanity.queries'
import type { SanityService } from '@/lib/sanity.types'

export const metadata: Metadata = {
  title: 'Shërbimet | Almer',
  description: 'Kuzhina me porosi, dhoma gjumi, arredim i plotë dhe më shumë — nga dizajni deri te montimi.',
}

const process = [
  {
    number: '01',
    title: 'Konsultë',
    description:
      'Fillojmë duke kuptuar vizionin, stilin dhe buxhetin tuaj për një bazë të fortë projekti.',
  },
  {
    number: '02',
    title: 'Dizajn & Planifikim',
    description: 'Zhvillojmë plane dhe vizualizime 3D për të parë hapësirën para prodhimit.',
  },
  {
    number: '03',
    title: 'Prodhim & Urdhër',
    description: 'Punojmë mobiljen me porosi me kontroll cilësie në çdo fazë.',
  },
  {
    number: '04',
    title: 'Montim',
    description: 'Instalim profesional nga ekipi ynë — garanci në çdo punë.',
  },
]

export default async function ServicesPage() {
  const services = await sanityFetchList<SanityService>({ query: allServicesQuery })

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-[#FAF7F2] py-16 border-b border-[#EDE8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl text-[#1C1612] mb-4">Shërbimet tona</h1>
            <p className="text-lg text-[#6B5B4E] max-w-2xl">
              Nga kuzhina me porosi deri te arredimi i plotë i shtëpisë — një ekip, një standard premium.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard
                    key={service._id}
                    title={service.title}
                    description={service.description ?? ''}
                    icon={service.icon}
                    features={service.features}
                    image={service.image}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-[#6B5B4E] py-12">
                Nuk ka shërbime të publikuara ende. Shtoni shërbime në Sanity Studio.
              </p>
            )}
          </div>
        </section>

        <section className="py-20 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1612] mb-4">Si punojmë</h2>
              <p className="text-lg text-[#6B5B4E] max-w-2xl mx-auto">
                Një proces i qartë nga konsulta fillestare deri te montimi final.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="bg-white rounded-xl border border-[#EDE8DF] p-8 h-full">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#B8864E] text-white font-bold text-xl mb-4 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-xl text-[#1C1612] text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#6B5B4E] text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl text-[#1C1612] mb-8">Pse Almer?</h2>
                <div className="space-y-4">
                  {[
                    'Më shumë se 25 vite përvojë në zejtarinë shqiptare',
                    'Druri premium i zgjedhur me dorë',
                    'Planifikim 3D dhe konsultë falas',
                    'Montim profesional nga ekipi ynë',
                    'Garanci në çdo punë',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="text-[#B8864E] shrink-0 mt-1" size={20} />
                      <p className="text-[#1C1612]">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl aspect-square bg-[#EDE8DF] border border-[#EDE8DF]" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#1C1612]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FAF7F2] mb-6">
              Gati të filloni projektin?
            </h2>
            <p className="text-[#FAF7F2]/70 mb-8 max-w-2xl mx-auto">
              Rezervoni një konsultë falas dhe le të diskutojmë për hapësirën tuaj.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[#B8864E] text-white font-medium rounded-full hover:bg-[#a67845] transition-colors"
            >
              Konsultë falas
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
