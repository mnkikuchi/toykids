interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-coral-soft/8 via-blue-soft/10 to-yellow-soft/10 py-16 sm:py-24">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-soft/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-soft/15 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-dark mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-text-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
