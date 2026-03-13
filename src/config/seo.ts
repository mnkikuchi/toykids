interface PageSeo {
  title: string
  description: string
}

export const seoConfig: Record<string, PageSeo> = {
  home: {
    title: 'Toy Kids – Brinquedos, Jogos e Presentes | Valinhos e Vinhedo',
    description:
      'A Toy Kids é uma loja especializada em brinquedos, jogos e presentes para crianças e famílias na região de Valinhos e Vinhedo.',
  },
  about: {
    title: 'Sobre a Toy Kids – Nossa História | Valinhos e Vinhedo',
    description:
      'Conheça a Toy Kids, loja especializada em brinquedos e artigos recreativos com presença em Valinhos e Vinhedo desde 2006.',
  },
  categories: {
    title: 'Categorias de Brinquedos – Toy Kids | Valinhos e Vinhedo',
    description:
      'Explore as categorias de brinquedos da Toy Kids: jogos de tabuleiro, bonecas, carrinhos, instrumentos musicais, fantasias, pelúcias e cartas colecionáveis.',
  },
  units: {
    title: 'Nossas Unidades – Toy Kids | Valinhos e Vinhedo',
    description:
      'Encontre a unidade Toy Kids mais próxima de você. Lojas em Valinhos e Vinhedo com brinquedos, jogos e presentes.',
  },
  contact: {
    title: 'Contato – Toy Kids | Fale Conosco',
    description:
      'Entre em contato com a Toy Kids. Encontre nossos canais de atendimento e envie uma mensagem.',
  },
}
