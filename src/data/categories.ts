export interface Category {
  id: string
  title: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    id: 'jogos-tabuleiro',
    title: 'Jogos de Tabuleiro',
    description:
      'Jogos que reúnem a família e estimulam o raciocínio lógico, a estratégia e a diversão em grupo.',
    icon: 'Dices',
  },
  {
    id: 'bonecas',
    title: 'Bonecas',
    description:
      'Bonecas e acessórios que incentivam a criatividade e o faz de conta, encantando crianças de todas as idades.',
    icon: 'Baby',
  },
  {
    id: 'carrinhos',
    title: 'Carrinhos',
    description:
      'Carrinhos, pistas e veículos em miniatura para estimular a imaginação e a coordenação motora.',
    icon: 'Car',
  },
  {
    id: 'instrumentos-musicais',
    title: 'Instrumentos Musicais Infantis',
    description:
      'Instrumentos musicais desenvolvidos especialmente para crianças, despertando o interesse pela música.',
    icon: 'Music',
  },
  {
    id: 'fantasias',
    title: 'Fantasias',
    description:
      'Fantasias e acessórios para brincar de faz de conta, festas e ocasiões especiais.',
    icon: 'Crown',
  },
  {
    id: 'pelucia',
    title: 'Bichos de Pelúcia',
    description:
      'Pelúcias macias e encantadoras, companheiras ideais para brincadeiras e momentos de aconchego.',
    icon: 'Heart',
  },
  {
    id: 'cartas-colecao',
    title: 'Cartas Colecionáveis',
    description:
      'Cartas colecionáveis e card games para crianças e jovens apaixonados por estratégia e coleção.',
    icon: 'Layers',
  },
]
