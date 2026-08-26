
export const projects = [
  { slug: 'o-veterano', number: '01', category: 'JORNALISMO · EDITORIAL', title: 'O Veterano', description: 'O periódico estudantil da FGV, com edições semanais sobre economia, política, cultura e assuntos internacionais.', role: 'Editora-Chefe', image: '/images/o-veterano.png', imagePosition: 'center top', heroImage: '/images/o-veterano-capa.png' },
  { slug: 'pesquisa-politica', number: '02', category: 'PESQUISA · POLÍTICA', title: 'Midiatização da Política', description: 'Bolsa de iniciação científica em comunicação política, dedicada ao estudo da midiatização política, do espetáculo digital e da lógica da automediatização, com foco na relação entre entretenimento, celebridade e construção de imagem política a partir do caso da deputada Erika Hilton.', role: 'Pesquisadora, PIBIC', image: '/images/pibic.png' },
  { slug: 'assessoria-de-imprensa', number: '03', category: 'ASSESSORIA DE IMPRENSA', title: 'Assessoria de Imprensa na FGV Comunicação', description: 'Como aluna, atuei ao lado da FGV Comunicação cobrindo eventos institucionais como imprensa, roteirizando e realizando entrevistas em vídeo.', role: 'Colaboradora', image: '/images/assessoria-de-imprensa.jpeg', imagePosition: 'center 30%', href: '/entrevistas', cta: 'Ver entrevistas' },
  { slug: 'midiometro', number: '04', category: 'JORNALISMO DE DADOS', title: 'Midiômetro', description: 'Um extrator diário de notícias que compara relevância, tendências e possíveis vieses entre veículos de imprensa.', role: 'Desenvolvimento e concepção', image: '/images/midiometro.png' },
  { slug: 'jogo-justo', number: '05', category: 'TECNOLOGIA E PROTEÇÃO DIGITAL', title: 'Índice Jogo Justo', description: 'Uma ferramenta que avalia e pontua, de 0 a 100, o quanto um videogame protege quem joga. Em parceria com a Prefeitura do Rio de Janeiro e a FGV Quest, analisa mecânicas predatórias de monetização para certificar jogos e orientar famílias e escolas.', role: 'Concepção da ideia, desenvolvimento da ferramenta e fundamentação teórica', image: '/images/jogo-justo.png' },
] as const
export type Project = typeof projects[number]

// Galerias de design ao pé de cada página. Imagens com dois nomes aparecem em duas galerias,
// na posição indicada pelo nome do arquivo original.
export const designGalleries: Record<string, string[]> = {
  'o-veterano': ['/images/design/vet1.jpeg','/images/design/vet2.jpeg','/images/design/vet3-traj1.jpeg','/images/design/vet4.jpeg','/images/design/vet5.jpeg'],
  imprensa: ['/images/design/imp1.jpeg','/images/design/sobre1-imp2.jpeg','/images/design/imp3-traj2.jpeg','/images/design/imp4.jpeg'],
  sobre: ['/images/design/sobre1-imp2.jpeg','/images/design/sobre2.jpeg','/images/design/sobre2b.jpeg','/images/design/sobre3.jpeg','/images/design/sobre4.jpeg','/images/design/sobre5.jpeg'],
  trajetoria: ['/images/design/vet3-traj1.jpeg','/images/design/imp3-traj2.jpeg','/images/design/traj3.jpeg','/images/design/traj4.jpeg'],
  'jogo-justo': ['/images/design/indice1.jpeg'],
}
