export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

export async function sendContactMessage(
  _data: ContactFormData
): Promise<ContactResponse> {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // TODO: Enviar _data para API real
  const isSuccess = Math.random() > 0.1

  if (isSuccess) {
    return {
      success: true,
      message:
        'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    }
  }

  throw new Error(
    'Não foi possível enviar a mensagem. Por favor, tente novamente.'
  )
}
