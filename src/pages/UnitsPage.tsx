import { Helmet } from 'react-helmet-async'
import { Info } from 'lucide-react'
import { seoConfig } from '../config/seo'
import { siteContent } from '../data/siteContent'
import { units } from '../data/units'
import { PageHero } from '../components/ui/PageHero'
import { UnitCard } from '../components/ui/UnitCard'

export function UnitsPage() {
  const seo = seoConfig.units

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <PageHero
        title={siteContent.home.units.title}
        subtitle={siteContent.home.units.subtitle}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {units.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 p-4 rounded-xl bg-blue-soft/10 border border-blue-soft/20 text-sm text-text-medium">
            <Info size={18} className="text-blue-medium shrink-0" />
            <span>
              Recomendamos confirmar horário de atendimento antes da visita.
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
