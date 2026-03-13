import { Map } from 'lucide-react'
import { mapsConfig } from '../../config/maps'

interface MapCardProps {
  embedUrl: string
  unitName: string
}

function isPlaceholder(value: string): boolean {
  return value.startsWith('[INSERIR')
}

export function MapCard({ embedUrl, unitName }: MapCardProps) {
  if (isPlaceholder(embedUrl)) {
    return (
      <div className="bg-cream-dark/20 border-t border-cream-dark/30 p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
        <Map size={32} className="text-text-light/40 mb-3" />
        <p className="text-sm text-text-light">{mapsConfig.placeholderText}</p>
      </div>
    )
  }

  return (
    <div className="border-t border-cream-dark/30">
      <iframe
        src={embedUrl}
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa da unidade ${unitName}`}
      />
    </div>
  )
}
