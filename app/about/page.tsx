import Image from 'next/image'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Award, Users, Globe, Heart } from 'lucide-react'

const dummyTeam = [
  { _id: '1', name: 'Sara Jonson', position: 'Themelues & Drejtore Kreative', bio: 'Me më shumë se 15 vjet përvojë në dizajnin e brendshëm të luksosit.', image: null },
  { _id: '2', name: 'Mikel Çen', position: 'Dizajneri Kryesor', bio: 'I specializuar në estetika kontempore dhe minimalisht.', image: null },
  { _id: '3', name: 'Arjola Kola', position: 'Konsultuese Dizajni', bio: 'Eksperte në zgjidhje të dizajnit të qëndrueshëm dhe miqësor me mjedisin.', image: null },
  { _id: '4', name: 'Davit Parku', position: 'Menaxher Projekti', bio: 'Siguron që çdo projekt të ekzekutohet në përsosmëri.', image: null },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Rreth Luksit
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Duke krijuar hapësira të bukura me mobilje premium dhe shërbim të përcaktuar.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                  Historia Jonë
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Mobiljet Luksi filloi me një vizion të thjeshtë: të sillte dizajnin e mobiljes me klasë botërore për klientë diskretë që vlerësojnë cilësinë, artëzonësinë dhe elegantsën e përjetshme.
                  </p>
                  <p>
                    Themeluar në 2014, fillojmë si një showroom i vogël me një koleksion të kuruar me kujdes. Sot, jemi rritur në një firmë të plotë të dizajnit të brendshëm që shërben klientat në të gjithë rajonin.
                  </p>
                  <p>
                    Çdo pjesë në koleksionin tonë tregon një histori të artëzonësisë superior, burim të qëndrueshëm dhe vëmendje të kujdesshme ndaj detajit. Besojmë se mobilja e shkëlqyer nuk është vetëm për estetikën - bëhet për të krijuar hapësira ku ndodh jeta.
                  </p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-muted border-4 border-accent/20 flex items-center justify-center">
                <p className="text-muted-foreground">Image placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-foreground text-center mb-16">
              Vlerat Tona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Cilësia',
                  description: 'Ne kurrë nuk bini kompromis në cilësinë e materialeve, dizajnit ose artëzonësisë.',
                },
                {
                  icon: Heart,
                  title: 'Pasioni',
                  description: 'Ne dojmë atë që bëjmë dhe shihet në çdo projekt që ndërmarrim.',
                },
                {
                  icon: Globe,
                  title: 'Qëndrueshmëria',
                  description: 'Angazhuar ndaj praktikave miqësore me mjedisin dhe burim të përgjegjshëm.',
                },
                {
                  icon: Users,
                  title: 'Shërbimi',
                  description: 'Kënaqësia juaj është matja përfundimtare e suksesit ynë.',
                },
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-primary/10">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Talented professionals dedicated to creating your dream spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dummyTeam.map((member) => (
                <div key={member._id} className="bg-card rounded-lg border border-border overflow-hidden hover:border-accent transition-all duration-300">
                  <div className="aspect-square bg-muted flex items-center justify-center mb-4">
                    <p className="text-muted-foreground">Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Years in Business', value: '10+' },
                { label: 'Projects Completed', value: '500+' },
                { label: 'Happy Clients', value: '1000+' },
                { label: 'Design Awards', value: '15+' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80">
                    {stat.label}
                  </p>
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
