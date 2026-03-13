interface WhatsAppOptions {
  phone?: string
  message?: string
}

export function getWhatsAppUrl(options: WhatsAppOptions = {}): string | null {
  const { phone, message } = options

  if (!phone || phone.includes('[INSERIR')) {
    return null
  }

  const cleanPhone = phone.replace(/\D/g, '')
  const params = new URLSearchParams()

  if (message) {
    params.set('text', message)
  }

  const query = params.toString()
  return `https://wa.me/${cleanPhone}${query ? `?${query}` : ''}`
}

export function isWhatsAppAvailable(phone?: string): boolean {
  return !!phone && !phone.includes('[INSERIR')
}
