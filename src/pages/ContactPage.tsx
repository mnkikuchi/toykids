import { Helmet } from 'react-helmet-async'
import { Instagram, Phone, Mail, MessageCircle } from 'lucide-react'
import { seoConfig } from '../config/seo'
import { siteContent } from '../data/siteContent'
import { contactConfig } from '../config/contact'
import { PageHero } from '../components/ui/PageHero'
import { SectionTitle } from '../components/ui/SectionTitle'
import { ContactForm } from '../components/ui/ContactForm'
import { ContactInfoCard } from '../components/ui/ContactInfoCard'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

function isPlaceholder(value: string): boolean {
  return value.startsWith('[INSERIR')
}

export function ContactPage() {
  const { contact } = siteContent
  const seo = seoConfig.contact

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <PageHero title={contact.hero.title} subtitle={contact.hero.subtitle} />

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
            {/* Canais de contato */}
            <div>
              <SectionTitle
                title={contact.channels.title}
                subtitle={contact.channels.subtitle}
                align="left"
              />

              <div className="space-y-4 -mt-4">
                <ContactInfoCard
                  icon={<Instagram size={20} />}
                  label="Instagram"
                  value={contactConfig.instagram.handle}
                  href={contactConfig.instagram.url}
                />

                <ContactInfoCard
                  icon={<Phone size={20} />}
                  label="Telefone"
                  value={contactConfig.phone}
                  isPlaceholder={isPlaceholder(contactConfig.phone)}
                />

                <ContactInfoCard
                  icon={<MessageCircle size={20} />}
                  label="WhatsApp"
                  value={contactConfig.whatsapp}
                  isPlaceholder={isPlaceholder(contactConfig.whatsapp)}
                />

                <ContactInfoCard
                  icon={<Mail size={20} />}
                  label="E-mail"
                  value={contactConfig.email}
                  isPlaceholder={isPlaceholder(contactConfig.email)}
                />
              </div>

              <div className="mt-6">
                <WhatsAppButton variant="inline" />
              </div>
            </div>

            {/* Formulário */}
            <div>
              <SectionTitle
                title={contact.form.title}
                subtitle={contact.form.subtitle}
                align="left"
              />
              <div className="-mt-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
