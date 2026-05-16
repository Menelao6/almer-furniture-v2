export function TrustStrip() {
  const items = [
    'Druri premium',
    'Garanci në çdo punë',
    'Montim falas',
    'Dorëzim në kohë',
    '25 vite përvojë',
  ]

  return (
    <section className="bg-[#B8864E] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#FAF7F2] font-medium leading-relaxed">
          {items.map((item, i) => (
            <span key={item}>
              {i > 0 && <span className="mx-2 sm:mx-3 opacity-70">✦</span>}
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
