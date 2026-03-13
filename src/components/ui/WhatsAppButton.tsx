import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, isWhatsAppAvailable } from '../../utils/whatsapp'
import { contactConfig } from '../../config/contact'
import { cn } from '../../utils/cn'

interface WhatsAppButtonProps {
  phone?: string
  message?: string
  className?: string
  variant?: 'floating' | 'inline'
}

export function WhatsAppButton({
  phone,
  message = 'Olá! Gostaria de saber mais sobre a Toy Kids.',
  className,
  variant = 'floating',
}: WhatsAppButtonProps) {
  const whatsappPhone = phone || contactConfig.whatsapp
  const available = isWhatsAppAvailable(whatsappPhone)
  const url = getWhatsAppUrl({ phone: whatsappPhone, message })

  if (variant === 'floating') {
    if (!available) return null

    return (
      <a
        href={url!}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-200 hover:scale-105',
          className
        )}
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    )
  }

  if (!available) {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-text-light text-sm',
          className
        )}
      >
        <MessageCircle size={18} />
        <span>WhatsApp em atualização</span>
      </div>
    )
  }

  return (
    <a
      href={url!}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors',
        className
      )}
      aria-label="Conversar pelo WhatsApp"
    >
      <MessageCircle size={18} />
      <span>WhatsApp</span>
    </a>
  )
}
