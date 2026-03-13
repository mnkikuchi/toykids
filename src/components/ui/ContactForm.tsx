import { useState } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { sendContactMessage, type ContactFormData } from '../../services/contactService'
import { CTAButton } from './CTAButton'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')
    setErrors({})

    try {
      const response = await sendContactMessage(formData)
      setStatus('success')
      setStatusMessage(response.message)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
      setStatusMessage(
        err instanceof Error
          ? err.message
          : 'Erro ao enviar mensagem. Tente novamente.'
      )
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-cream-dark/20 text-center">
        <CheckCircle size={48} className="text-mint-dark mx-auto mb-4" />
        <h3 className="font-display font-bold text-xl text-text-dark mb-2">
          Mensagem enviada!
        </h3>
        <p className="text-text-medium text-sm mb-6">{statusMessage}</p>
        <CTAButton variant="secondary" onClick={() => setStatus('idle')}>
          Enviar outra mensagem
        </CTAButton>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-dark/20 space-y-5"
      noValidate
    >
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Nome <span className="text-coral-soft">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-cream-dark/30 bg-cream/50 text-text-dark text-sm placeholder:text-text-light/60 focus:border-blue-soft focus:bg-white focus:outline-none transition-colors"
          placeholder="Seu nome completo"
          disabled={status === 'loading'}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          E-mail <span className="text-coral-soft">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-cream-dark/30 bg-cream/50 text-text-dark text-sm placeholder:text-text-light/60 focus:border-blue-soft focus:bg-white focus:outline-none transition-colors"
          placeholder="seu@email.com"
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Telefone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-cream-dark/30 bg-cream/50 text-text-dark text-sm placeholder:text-text-light/60 focus:border-blue-soft focus:bg-white focus:outline-none transition-colors"
          placeholder="(00) 00000-0000"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Mensagem <span className="text-coral-soft">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2.5 rounded-xl border border-cream-dark/30 bg-cream/50 text-text-dark text-sm placeholder:text-text-light/60 focus:border-blue-soft focus:bg-white focus:outline-none transition-colors resize-none"
          placeholder="Escreva sua mensagem aqui..."
          disabled={status === 'loading'}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <CTAButton
        type="submit"
        size="lg"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar mensagem
          </>
        )}
      </CTAButton>
    </form>
  )
}
