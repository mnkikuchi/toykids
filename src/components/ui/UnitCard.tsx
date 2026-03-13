import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react'
import type { Unit } from '../../data/units'
import { MapCard } from './MapCard'
import { cn } from '../../utils/cn'

interface UnitCardProps {
  unit: Unit
  className?: string
}

function isPlaceholder(value: string): boolean {
  return value.startsWith('[INSERIR')
}

export function UnitCard({ unit, className }: UnitCardProps) {
  return (
    <article
      className={cn(
        'bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-cream-dark/20',
        className
      )}
    >
      <div className="p-6 sm:p-8">
        <h3 className="font-display font-bold text-xl text-text-dark mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-coral-soft shrink-0" />
          {unit.name}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-sm">
            <Navigation size={16} className="text-text-light mt-0.5 shrink-0" />
            <span className="text-text-medium">{unit.address}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone size={16} className="text-text-light shrink-0" />
            {isPlaceholder(unit.phone) ? (
              <span className="text-text-light italic">{unit.phone}</span>
            ) : (
              <a
                href={`tel:${unit.phone}`}
                className="text-text-medium hover:text-coral-medium transition-colors"
              >
                {unit.phone}
              </a>
            )}
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Clock size={16} className="text-text-light shrink-0" />
            {isPlaceholder(unit.hours) ? (
              <span className="text-text-light italic">{unit.hours}</span>
            ) : (
              <span className="text-text-medium">{unit.hours}</span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {isPlaceholder(unit.mapLink) ? (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-dark/30 text-text-light text-sm">
              <Navigation size={14} />
              Como chegar
            </span>
          ) : (
            <a
              href={unit.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-soft/20 text-blue-medium text-sm font-medium hover:bg-blue-soft/30 transition-colors"
            >
              <Navigation size={14} />
              Como chegar
            </a>
          )}

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-dark/30 text-text-light text-sm">
            <MessageCircle size={14} />
            Fale com a unidade
          </span>
        </div>
      </div>

      <MapCard embedUrl={unit.embedUrl} unitName={unit.name} />
    </article>
  )
}
