import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '../../utils/cn'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/categorias', label: 'Categorias' },
  { to: '/unidades', label: 'Unidades' },
  { to: '/contato', label: 'Contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-cream-dark/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Toy Kids – Página inicial"
          >
            <img
              src="/logo.png"
              alt="Toy Kids"
              className="h-12 sm:h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Menu principal">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  location.pathname === link.to
                    ? 'bg-coral-soft/10 text-coral-soft font-semibold'
                    : 'text-text-medium hover:text-coral-soft hover:bg-cream-dark/50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-text-medium hover:text-coral-soft hover:bg-cream-dark/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav
            className="md:hidden pb-4 border-t border-cream-dark/30 pt-3"
            aria-label="Menu principal mobile"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                    location.pathname === link.to
                      ? 'bg-coral-soft/10 text-coral-soft font-semibold'
                      : 'text-text-medium hover:text-coral-soft hover:bg-cream-dark/50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
