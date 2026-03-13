import { Helmet } from 'react-helmet-async'
import { Building2, Calendar, FileText, Hash } from 'lucide-react'
import { seoConfig } from '../config/seo'
import { siteContent } from '../data/siteContent'
import { PageHero } from '../components/ui/PageHero'
import { SectionTitle } from '../components/ui/SectionTitle'
import { CTAButton } from '../components/ui/CTAButton'

export function AboutPage() {
  const { about } = siteContent
  const seo = seoConfig.about

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <PageHero title={about.hero.title} subtitle={about.hero.subtitle} />

      {/* Introdução */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle title={about.intro.title} />
          <div className="space-y-6 -mt-6">
            {about.intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-text-medium text-base sm:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-yellow-light/60 to-blue-soft/15 border border-yellow-soft/30 text-center">
            <p className="font-display font-semibold text-lg sm:text-xl text-text-dark">
              "{siteContent.brand.highlight}"
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder para foto */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-cream-dark/20 rounded-2xl border-2 border-dashed border-cream-dark/40 p-12 sm:p-16 text-center">
            <Building2 size={40} className="text-text-light/30 mx-auto mb-4" />
            <p className="text-text-light text-sm">[INSERIR FOTO DA LOJA]</p>
          </div>
        </div>
      </section>

      {/* Dados institucionais */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title={about.legal.title}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Valinhos */}
            <div className="bg-cream/60 rounded-2xl p-6 sm:p-8 border border-cream-dark/20">
              <h3 className="font-display font-bold text-lg text-text-dark mb-5">
                Valinhos
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2
                    size={16}
                    className="text-text-light mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                      Razão Social
                    </p>
                    <p className="text-sm text-text-dark">
                      {about.legal.valinhos.razaoSocial}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hash size={16} className="text-text-light mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                      CNPJ
                    </p>
                    <p className="text-sm text-text-dark">
                      {about.legal.valinhos.cnpj}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar
                    size={16}
                    className="text-text-light mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                      Data de Abertura
                    </p>
                    <p className="text-sm text-text-dark">
                      {about.legal.valinhos.dataAbertura}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText
                    size={16}
                    className="text-text-light mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                      CNAE Principal
                    </p>
                    <p className="text-sm text-text-dark">
                      {about.legal.valinhos.cnae}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vinhedo */}
            <div className="bg-cream/60 rounded-2xl p-6 sm:p-8 border border-cream-dark/20">
              <h3 className="font-display font-bold text-lg text-text-dark mb-5">
                Vinhedo
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2
                    size={16}
                    className="text-text-light mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                      Razão Social
                    </p>
                    <p className="text-sm text-text-dark">
                      {about.legal.vinhedo.razaoSocial}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hash size={16} className="text-text-light mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                      CNPJ
                    </p>
                    <p className="text-sm text-text-dark">
                      {about.legal.vinhedo.cnpj}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar
                    size={16}
                    className="text-text-light mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                      Fundação
                    </p>
                    <p className="text-sm text-text-dark">
                      {about.legal.vinhedo.fundacao}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <CTAButton to="/unidades" size="lg">
            Conheça nossas unidades
          </CTAButton>
        </div>
      </section>
    </>
  )
}
