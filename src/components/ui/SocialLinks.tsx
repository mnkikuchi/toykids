import { Instagram } from 'lucide-react'
import { contactConfig } from '../../config/contact'

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={contactConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 text-sm font-medium hover:from-purple-500/20 hover:to-pink-500/20 transition-all"
        aria-label="Instagram da Toy Kids"
      >
        <Instagram size={18} />
        {contactConfig.instagram.handle}
      </a>
    </div>
  )
}
