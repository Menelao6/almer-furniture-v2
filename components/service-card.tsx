'use client'

const DEFAULT_FEATURES: Record<string, string[]> = {
  'Kuzhinat me porosi': ['Kabinete me porosi', 'Ishuj & sipërfaqe', 'Planifikim 3D falas'],
  'Dhoma gjumi': ['Gardërobë walk-in', 'Krevat & komodinë', 'Ndriçim i integruar'],
  'Arredim i plotë': ['Dizajn i gjithë shtëpisë', 'Koordinim i projektit', 'Montim & garanci'],
}

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  features?: string[]
}

export function ServiceCard({
  title,
  description,
  icon = '🪵',
  features,
}: ServiceCardProps) {
  const bullets = features ?? DEFAULT_FEATURES[title] ?? [
    'Dizajn me porosi',
    'Material premium',
    'Instalim profesional',
  ]

  return (
    <article className="group h-full flex flex-col bg-white rounded-xl border border-[#EDE8DF] p-6 sm:p-8 transition-all duration-300 hover:border-[#B8864E] hover:shadow-lg hover:-translate-y-0.5">
      <div className="w-14 h-14 rounded-xl bg-[#B8864E]/10 flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-[#1C1612] mb-3">{title}</h3>
      <p className="text-sm text-[#6B5B4E] leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2 mt-auto">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-[#6B5B4E]">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B8864E] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
