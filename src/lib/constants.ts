import { Quote, Affirmation, WealthPrinciple, SpiritualPractice } from './types';

export const motivationalQuotes: Quote[] = [
  {
    text: "A disciplina é a ponte entre objetivos e conquistas.",
    author: "Jim Rohn",
    category: "discipline"
  },
  {
    text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    author: "Robert Collier",
    category: "motivation"
  },
  {
    text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    author: "Provérbios 3:5",
    category: "spiritual"
  },
  {
    text: "Não trabalhe pelo dinheiro, faça o dinheiro trabalhar para você.",
    author: "Robert Kiyosaki",
    category: "wealth"
  },
  {
    text: "Seja você a mudança que deseja ver no mundo.",
    author: "Mahatma Gandhi",
    category: "motivation"
  }
];

export const powerfulAffirmations: Affirmation[] = [
  { text: "Eu sou o criador da minha realidade", category: "strength" },
  { text: "Mereço abundância e prosperidade", category: "abundance" },
  { text: "Cada desafio me torna mais forte", category: "strength" },
  { text: "Minha disciplina é meu superpoder", category: "strength" },
  { text: "Eu atraio oportunidades incríveis", category: "success" },
  { text: "Sou grato por tudo que tenho e recebo", category: "abundance" },
  { text: "Deus tem um plano perfeito para minha vida", category: "faith" },
  { text: "Sou capaz de alcançar todos os meus objetivos", category: "success" }
];

export const wealthPrinciples: WealthPrinciple[] = [
  {
    title: "Pague-se primeiro",
    description: "Sempre reserve uma porcentagem da sua renda antes de pagar qualquer conta.",
    author: "Warren Buffett",
    category: "strategy"
  },
  {
    title: "Invista no que você entende",
    description: "Nunca invista em algo que você não compreende completamente.",
    author: "Peter Lynch",
    category: "investment"
  },
  {
    title: "Tempo é mais valioso que dinheiro",
    description: "Você pode recuperar dinheiro perdido, mas não pode recuperar tempo perdido.",
    author: "Jim Rohn",
    category: "mindset"
  },
  {
    title: "Renda passiva é liberdade",
    description: "Trabalhe para criar fontes de renda que não dependam do seu tempo.",
    author: "Robert Kiyosaki",
    category: "strategy"
  },
  {
    title: "Conhecimento é o melhor investimento",
    description: "Invista em educação e conhecimento, pois ninguém pode tirar isso de você.",
    author: "Benjamin Franklin",
    category: "investment"
  },
  {
    title: "Disciplina supera talento",
    description: "A disciplina consistente sempre vence o talento sem disciplina.",
    author: "John C. Maxwell",
    category: "discipline"
  }
];

export const spiritualPractices: SpiritualPractice[] = [
  {
    name: "Oração Matinal",
    duration: 10,
    description: "Comece o dia conectando-se com Deus através da oração",
    benefits: ["Paz interior", "Direcionamento divino", "Força espiritual"]
  },
  {
    name: "Leitura Bíblica",
    duration: 15,
    description: "Leia e medite nas escrituras sagradas",
    benefits: ["Sabedoria", "Conhecimento de Deus", "Transformação pessoal"]
  },
  {
    name: "Meditação e Reflexão",
    duration: 20,
    description: "Momento de silêncio para ouvir a voz de Deus",
    benefits: ["Clareza mental", "Discernimento", "Intimidade com Deus"]
  },
  {
    name: "Gratidão Noturna",
    duration: 5,
    description: "Agradeça pelas bênçãos do dia antes de dormir",
    benefits: ["Contentamento", "Perspectiva positiva", "Sono tranquilo"]
  }
];

export const habitTechniques = [
  {
    name: "Regra dos 2 Minutos",
    description: "Se uma tarefa leva menos de 2 minutos para ser concluída, faça-a imediatamente.",
    application: "Ideal para pequenas tarefas que tendemos a procrastinar."
  },
  {
    name: "Stack de Hábitos",
    description: "Conecte um novo hábito a um hábito já estabelecido.",
    application: "Depois de [hábito atual], eu vou [novo hábito]."
  },
  {
    name: "Regra do 1%",
    description: "Melhore apenas 1% a cada dia. Pequenas melhorias compostas geram grandes resultados.",
    application: "Foque em progresso, não perfeição."
  },
  {
    name: "Ambiente de Design",
    description: "Modifique seu ambiente para tornar bons hábitos óbvios e maus hábitos invisíveis.",
    application: "Deixe o livro na mesa de cabeceira, esconda o celular durante o estudo."
  },
  {
    name: "Rastreamento de Hábitos",
    description: "Registre seus hábitos diariamente para manter a consistência.",
    application: "Use um calendário ou app para marcar cada dia que você pratica o hábito."
  }
];

export const biblicalVerses = [
  {
    verse: "Tudo posso naquele que me fortalece",
    reference: "Filipenses 4:13",
    theme: "Força e capacidade"
  },
  {
    verse: "Os planos do Senhor permanecem para sempre",
    reference: "Salmos 33:11",
    theme: "Propósito divino"
  },
  {
    verse: "Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar",
    reference: "Josué 1:9",
    theme: "Coragem e presença de Deus"
  },
  {
    verse: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais",
    reference: "Jeremias 29:11",
    theme: "Esperança e futuro"
  },
  {
    verse: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará",
    reference: "Salmos 37:5",
    theme: "Confiança e entrega"
  }
];

export const millionaireMindsetPrinciples = [
  {
    principle: "Pense em abundância, não escassez",
    description: "Acredite que há oportunidades suficientes para todos prosperarem.",
    action: "Celebre o sucesso dos outros e veja-o como prova de que é possível."
  },
  {
    principle: "Invista em você mesmo primeiro",
    description: "Seu maior ativo é você mesmo. Invista em educação, habilidades e saúde.",
    action: "Reserve pelo menos 10% da sua renda para desenvolvimento pessoal."
  },
  {
    principle: "Crie múltiplas fontes de renda",
    description: "Não dependa apenas de uma fonte de renda. Diversifique seus ganhos.",
    action: "Desenvolva pelo menos 3 fontes diferentes de renda."
  },
  {
    principle: "Pense a longo prazo",
    description: "Decisões baseadas em gratificação instantânea raramente levam à riqueza.",
    action: "Faça planos de 5, 10 e 20 anos para seus objetivos financeiros."
  },
  {
    principle: "Cerque-se de pessoas prósperas",
    description: "Você se torna a média das 5 pessoas com quem mais convive.",
    action: "Busque mentores e amigos que tenham a mentalidade que você deseja desenvolver."
  }
];