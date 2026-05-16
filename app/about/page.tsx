import Image from 'next/image'
import { Metadata } from 'next'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Award, Users, Globe, Heart } from 'lucide-react'
import { sanityFetchList } from '@/lib/sanity.client'
import { teamQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import type { SanityTeamMember } from '@/lib/sanity.types'

export const metadata: Metadata = {
  title: 'Rreth Nesh | Almer',
  description: 'Zejtari shqiptar që nga 1998 — mobilje me porosi, druri premium, garanci në çdo punë.',
}

export default async function AboutPage() {
  const team = await sanityFetchList<SanityTeamMember>({ query: teamQuery })

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-[#FAF7F2] py-16 border-b border-[#EDE8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl text-[#1C1612] mb-4">Rreth Almer</h1>
            <p className="text-lg text-[#6B5B4E] max-w-2xl">
              Zejtari shqiptar që nga 1998 — mobilje me porosi, druri premium, pa kompromise.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl text-[#1C1612] mb-6">Historia jonë</h2>
                <div className="space-y-4 text-lg text-[#6B5B4E] leading-relaxed">
                  <p>
                    Almer filloi me një vizion të thjeshtë: të transformojë drurin shqiptar dhe
                    europian në mobilje që familjet i mbajnë gjenerata.
                  </p>
                  <p>
                    Themeluar në 1998 në Tiranë, filluam si një atelier zejtari. Sot, shërbejmë
                    klientë në të gjithë Shqipërinë me kuzhina, dhoma gjumi dhe arredim të plotë me
                    porosi.
                  </p>
                  <p>
                    Çdo copë tregon artëzonëri, burim të përgjegjshëm dhe vëmendje ndaj detajit —
                    sepse mobilja e shkëlqyer krijon hapësira ku ndodh jeta.
                  </p>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-[#EDE8DF] border border-[#EDE8DF]" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-[#1C1612] text-center mb-16">Vlerat tona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Cilësia',
                  description: 'Asnjë kompromis në materiale, dizajn apo mbarim.',
                },
                {
                  icon: Heart,
                  title: 'Pasioni',
                  description: 'Çdo projekt trajtohet me kujdes artizanal.',
                },
                {
                  icon: Globe,
                  title: 'Qëndrueshmëria',
                  description: 'Druri i burimuar me përgjegjësi dhe qëndrueshmëri.',
                },
                {
                  icon: Users,
                  title: 'Shërbimi',
                  description: 'Kënaqësia juaj është standardi ynë.',
                },
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-[#B8864E]/10">
                        <Icon className="text-[#B8864E]" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1C1612] mb-2">{value.title}</h3>
                    <p className="text-[#6B5B4E]">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl text-[#1C1612] mb-4">Ekipi ynë</h2>
              <p className="text-lg text-[#6B5B4E] max-w-2xl mx-auto">
                Zejtarë dhe dizajnerë të dedikuar për projektin tuaj.
              </p>
            </div>

            {team.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member) => {
                  const imageUrl = member.image
                    ? urlFor(member.image).width(400).height(400).url()
                    : null
                  return (
                    <div
                      key={member._id}
                      className="rounded-xl border border-[#EDE8DF] overflow-hidden hover:border-[#B8864E] transition-colors bg-white"
                    >
                      <div className="relative aspect-square bg-[#EDE8DF]">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        ) : null}
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-lg text-[#1C1612] mb-1">{member.name}</h3>
                        <p className="text-sm text-[#B8864E] font-medium mb-3">{member.position}</p>
                        {member.bio ? (
                          <p className="text-sm text-[#6B5B4E]">{member.bio}</p>
                        ) : null}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-center text-[#6B5B4E]">
                Shtoni anëtarët e ekipit në Sanity Studio.
              </p>
            )}
          </div>
        </section>

        <section className="py-20 bg-[#1C1612]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Vite përvojë', value: '25+' },
                { label: 'Projekte', value: '1,500+' },
                { label: 'Klientë', value: '1,000+' },
                { label: 'Me porosi', value: '100%' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-serif font-bold text-[#FAF7F2] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[#FAF7F2]/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
