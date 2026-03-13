import { Instagram } from 'lucide-react'
import { contactConfig } from '../../config/contact'

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={contactConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral-soft/10 to-blue-medium/10 text-coral-soft text-sm font-medium hover:from-coral-soft/20 hover:to-blue-medium/20 transition-all"
        aria-label="Instagram da Toy Kids"
      >
        <Instagram size={18} />
        {contactConfig.instagram.handle}
      </a>
    </div>
  )
}
