import Link from 'next/link'
import Image from 'next/image'

const bullets = [
  'Druri i zgjedhur me dorë',
  'Precizion CNC + mbarim manual',
  'Konsultë dhe planifikim 3D falas',
  'Instalim nga ekipi ynë',
]

const WORKSHOP_IMAGE =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=1000&fit=crop'

export function AboutStrip() {
  return (
    <section className="bg-[#1C1612] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#B8864E] font-semibold mb-4">
              Historia jonë
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] leading-tight mb-6">
              Zejtari shqiptar,
              <br />
              ndërtuar për jetë.
            </h2>
            <p className="text-[#FAF7F2]/65 leading-relaxed mb-8 max-w-lg">
              Që nga viti 1998, kemi transformuar dru shqiptar dhe europian në mobilje që
              familjet i mbajnë gjenerata. Çdo copë — me porosi, pa kompromise.
            </p>
            <ul className="space-y-3 mb-8">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#FAF7F2]/80 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B8864E] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="text-sm font-medium text-[#B8864E] hover:text-[#d4a96a] transition-colors"
            >
              Lexo historinë tonë →
            </Link>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#2C1810] bg-[#2a221c]">
            <Image
              src={WORKSHOP_IMAGE}
              alt="Atelier Almer — punime druri"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
