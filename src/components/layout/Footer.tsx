import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { contactConfig } from '../../config/contact'
import { siteContent } from '../../data/siteContent'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-dark text-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img
                src="/logo.png"
                alt="Toy Kids"
                className="h-12 w-auto brightness-110"
              />
            </Link>
            <p className="text-sm leading-relaxed text-cream/60">
              {siteContent.footer.text}
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/sobre', label: 'Sobre' },
                { to: '/categorias', label: 'Categorias' },
                { to: '/unidades', label: 'Unidades' },
                { to: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-yellow-soft transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
              Unidades
            </h3>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>Centro – Valinhos</li>
              <li>Vila Bissoto – Valinhos</li>
              <li>Centro – Vinhedo</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-cream mb-4 text-sm uppercase tracking-wider">
              Redes Sociais
            </h3>
            <a
              href={contactConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-yellow-soft transition-colors"
              aria-label="Instagram da Toy Kids"
            >
              <Instagram size={18} />
              {contactConfig.instagram.handle}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {currentYear} Toy Kids. Todos os direitos reservados.
          </p>
          <p className="text-xs text-cream/40">
            {siteContent.footer.note}
          </p>
        </div>
      </div>
    </footer>
  )
}
