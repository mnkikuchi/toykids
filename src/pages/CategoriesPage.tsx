import { Helmet } from 'react-helmet-async'
import { seoConfig } from '../config/seo'
import { siteContent } from '../data/siteContent'
import { categories } from '../data/categories'
import { PageHero } from '../components/ui/PageHero'
import { CategoryCard } from '../components/ui/CategoryCard'
import { EmptyIntegrationState } from '../components/ui/EmptyIntegrationState'

export function CategoriesPage() {
  const seo = seoConfig.categories

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <PageHero
        title={siteContent.home.categories.title}
        subtitle={siteContent.home.categories.subtitle}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat, index) => (
              <CategoryCard key={cat.id} category={cat} index={index} />
            ))}
          </div>

          <div className="mt-12">
            <EmptyIntegrationState message="A disponibilidade dos produtos pode variar por unidade." />
          </div>
        </div>
      </section>
    </>
  )
}
