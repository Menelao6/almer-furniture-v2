import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/section-header'

const steps = [
  {
    number: '01',
    title: 'Konsultë falas',
    description:
      'Takojmë në showroom ose në shtëpinë tuaj — dëgjojmë nevojat, stilin dhe matjet.',
    image: '/assets/consult.jpg',
  },
  {
    number: '02',
    title: 'Dizajn & vizualizim',
    description:
      'Propozojmë plane, materiale dhe vizualizime para se të fillojë prodhimi.',
    image: '/assets/design.jpg',
  },
  {
    number: '03',
    title: 'Prodhim artizanal',
    description:
      'Punojmë drurin me CNC dhe mbarim manual në atelierin tonë në Tiranë.',
    image: '/assets/manufactoring.jpg',
  },
  {
    number: '04',
    title: 'Montim & garanci',
    description: 'Instalimi nga ekipi ynë — me garanci në çdo punë.',
    image: '/assets/montim.jpg',
  },
]

const highlights = [
  'Konsultë dhe planifikim 3D falas',
  'Materiale premium të zgjedhura me dorë',
  'Montim nga ekipi ynë — pa surpriza',
]

export function ProcessStrip() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] gap-[clamp(2rem,5vw,4rem)] items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Si punojmë"
              title="Nga ideja te montimi — në katër hapa"
              description="Një proces i qartë, pa surpriza. Ju e dini çfarë po ndodh në çdo fazë."
              className="mb-[var(--space-block)]"
            />
            <ul className="space-y-3 mb-[var(--space-block)]">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-small text-muted-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[var(--btn-px)] py-[var(--btn-py)] text-small font-medium text-primary-foreground bg-wood-dark hover:opacity-90 rounded-full transition-opacity touch-manipulation"
            >
              Rezervo konsultën falas →
            </Link>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-gap)]">
            {steps.map((step) => (
              <li
                key={step.number}
                className="group flex flex-col bg-card rounded-[var(--radius-lg)] border border-border overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-md"
              >
                <div className="relative w-full aspect-[16/10] min-h-[11.5rem] bg-muted overflow-hidden shrink-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/55 via-wood-dark/10 to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-primary text-primary-foreground font-serif text-lg font-semibold shadow-sm pointer-events-none">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-[var(--space-card)]">
                  <h3 className="font-serif text-h3 text-foreground mb-2">{step.title}</h3>
                  <p className="text-small text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
