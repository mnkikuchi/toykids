import { Helmet } from 'react-helmet-async'
import { ArrowRight, MapPin, Star, Sparkles } from 'lucide-react'
import { seoConfig } from '../config/seo'
import { siteContent } from '../data/siteContent'
import { categories } from '../data/categories'
import { units } from '../data/units'
import { CTAButton } from '../components/ui/CTAButton'
import { SectionTitle } from '../components/ui/SectionTitle'
import { CategoryCard } from '../components/ui/CategoryCard'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function HomePage() {
  const { home } = siteContent
  const seo = seoConfig.home
  const featuredCategories = categories.slice(0, 4)

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-coral-soft/5 via-cream to-blue-soft/10 py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-yellow-soft/25 blur-2xl" />
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-blue-soft/20 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-56 h-56 rounded-full bg-mint/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-yellow-soft/15 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-light/80 border border-yellow-soft/40 text-sm text-text-dark font-medium mb-8">
              <Sparkles size={14} className="text-yellow-soft" />
              {siteContent.brand.highlight}
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-dark mb-6 leading-tight">
              {home.hero.title}
            </h1>

            <p className="text-text-medium text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {home.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <CTAButton to="/unidades" size="lg">
                Conheça as unidades
                <ArrowRight size={18} />
              </CTAButton>
              <CTAButton to="/contato" variant="outline" size="lg">
                Entrar em contato
              </CTAButton>
              <CTAButton to="/categorias" variant="secondary" size="lg">
                Ver categorias
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre resumo */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title={home.about.title}
              subtitle={home.about.subtitle}
            />
            <p className="text-text-medium leading-relaxed text-base sm:text-lg -mt-6">
              {home.about.text}
            </p>
            <div className="mt-8">
              <CTAButton to="/sobre" variant="secondary">
                Saiba mais sobre a Toy Kids
                <ArrowRight size={16} />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias em destaque */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title={home.categories.title}
            subtitle={home.categories.subtitle}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredCategories.map((cat, index) => (
              <CategoryCard key={cat.id} category={cat} index={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/categorias" variant="outline">
              Ver todas as categorias
              <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Presença regional */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-coral-soft/5 to-blue-soft/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title={home.units.title}
            subtitle={home.units.subtitle}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-dark/20 shadow-sm hover:shadow-md transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-soft/20 text-yellow-soft mb-4">
                  <MapPin size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-text-dark mb-2">
                  {unit.name}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {unit.address}
                </p>
                <CTAButton to="/unidades" variant="secondary" size="sm">
                  Ver detalhes
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato rápido */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-coral-soft/8 to-blue-soft/10 rounded-3xl p-8 sm:p-12 lg:p-16 text-center border border-coral-soft/10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-soft/25 text-yellow-soft mb-6">
              <Star size={28} />
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-dark mb-4">
              {home.cta.title}
            </h2>
            <p className="text-text-medium text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              {home.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <CTAButton to="/contato" size="lg">
                Fale conosco
                <ArrowRight size={18} />
              </CTAButton>
              <CTAButton to="/unidades" variant="outline" size="lg">
                Nossas unidades
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </>
  )
}
