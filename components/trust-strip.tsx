export function TrustStrip() {
  const items = [
    'Druri premium',
    'Garanci në çdo punë',
    'Montim falas',
    'Dorëzim në kohë',
    '25 vite përvojë',
  ]

  return (
    <section className="bg-primary py-[clamp(0.625rem,1.5vh,0.875rem)]">
      <div className="container-page">
        <p className="text-center text-eyebrow text-primary-foreground font-medium leading-relaxed normal-case">
          {items.map((item, i) => (
            <span key={item}>
              {i > 0 && <span className="mx-2 sm:mx-3 opacity-70" aria-hidden>✦</span>}
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
