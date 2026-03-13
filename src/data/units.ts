export interface Unit {
  id: string
  name: string
  city: string
  neighborhood: string
  address: string
  phone: string
  hours: string
  mapLink: string
  embedUrl: string
}

export const units: Unit[] = [
  {
    id: 'valinhos-centro',
    name: 'Centro – Valinhos',
    city: 'Valinhos',
    neighborhood: 'Centro',
    address: 'Rua Dr. Heitor Penteado, 125 – Centro – Valinhos/SP',
    phone: '[INSERIR TELEFONE]',
    hours: '[INSERIR HORÁRIO]',
    mapLink: '[INSERIR LINK GOOGLE MAPS]',
    embedUrl: '[INSERIR EMBED MAPA]',
  },
  {
    id: 'valinhos-vila-bissoto',
    name: 'Vila Bissoto – Valinhos',
    city: 'Valinhos',
    neighborhood: 'Vila Bissoto',
    address: 'Av. dos Esportes, 819 – Vila Bissoto – Valinhos/SP',
    phone: '[INSERIR TELEFONE]',
    hours: '[INSERIR HORÁRIO]',
    mapLink: '[INSERIR LINK GOOGLE MAPS]',
    embedUrl: '[INSERIR EMBED MAPA]',
  },
  {
    id: 'vinhedo-centro',
    name: 'Centro – Vinhedo',
    city: 'Vinhedo',
    neighborhood: 'Centro',
    address: 'Av. Benedito Storani, 405 – Centro – Vinhedo/SP',
    phone: '[INSERIR TELEFONE]',
    hours: '[INSERIR HORÁRIO]',
    mapLink: '[INSERIR LINK GOOGLE MAPS]',
    embedUrl: '[INSERIR EMBED MAPA]',
  },
]
