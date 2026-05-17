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
    <section className="section-padding bg-wood-dark text-warm-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">
          <div>
            <p className="text-eyebrow text-primary font-semibold mb-4">Historia jonë</p>
            <h2 className="font-serif text-h2 text-warm-white leading-tight mb-[var(--space-block)]">
              Zejtari shqiptar,
              <br />
              ndërtuar për jetë.
            </h2>
            <p className="text-body text-warm-white/65 leading-relaxed mb-[var(--space-block)] max-w-lg">
              Që nga viti 1998, kemi transformuar dru shqiptar dhe europian në mobilje që
              familjet i mbajnë gjenerata. Çdo copë — me porosi, pa kompromise.
            </p>
            <ul className="space-y-3 mb-[var(--space-block)]">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-small text-warm-white/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="text-small font-medium text-primary hover:text-[#d4a96a] transition-colors"
            >
              Lexo historinë tonë →
            </Link>
          </div>

          <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden border border-[#2C1810] bg-[#2a221c]">
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
