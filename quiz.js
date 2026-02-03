const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
};
const questions = [
  {
    text: "Qual estrutura celular é responsável pela síntese de proteínas?",
    options: { A: "Ribossomos", B: "Lisossomos", C: "Mitocôndrias", D: "Centríolos" },
    answer: "A",
    hint: "Ligada ao RNA."
  },
  {
    text: "Qual é o valor de log₁₀(1000)?",
    options: { A: "1", B: "3", C: "10", D: "100" },
    answer: "B",
    hint: "Potência de 10."
  },
  {
    text: "Em qual alternativa o 'porquê' está corretamente empregado?",
    options: {
      A: "Não sei porquê você faltou",
      B: "Ele faltou porquê estava doente",
      C: "Não entendi o porquê da decisão",
      D: "Porquê você não veio?"
    },
    answer: "C",
    hint: "Substantivo."
  },
  {
    text: "Em que ano ocorreu a Revolução Constitucionalista de São Paulo?",
    options: { A: "1930", B: "1934", C: "1929", D: "1932" },
    answer: "D",
    hint: "Era Vargas."
  },

  {
    text: "Qual gás compõe a maior parte da atmosfera terrestre?",
    options: { A: "Nitrogênio", B: "Oxigênio", C: "Gás carbônico", D: "Hélio" },
    answer: "A",
    hint: "Mais de 70%."
  },
  {
    text: "Quanto é 2³ × 3²?",
    options: { A: "36", B: "72", C: "18", D: "24" },
    answer: "B",
    hint: "Potências."
  },
  {
    text: "Qual figura de linguagem ocorre em 'o tempo voa'?",
    options: { A: "Hipérbole", B: "Ironia", C: "Metáfora", D: "Antítese" },
    answer: "C",
    hint: "Sentido figurado."
  },
  {
    text: "Qual tratado redefiniu fronteiras do Brasil em 1750?",
    options: { A: "Tordesilhas", B: "Versalhes", C: "Utrecht", D: "Madrid" },
    answer: "D",
    hint: "Portugal e Espanha."
  },

  {
    text: "Qual organela é responsável pela respiração celular?",
    options: { A: "Núcleo", B: "Mitocôndria", C: "Ribossomo", D: "Lisossomo" },
    answer: "B",
    hint: "Produz energia."
  },
  {
    text: "Quanto é √(81 × 16)?",
    options: { A: "18", B: "24", C: "36", D: "12" },
    answer: "A",
    hint: "Raiz do produto."
  },
  {
    text: "Qual alternativa apresenta um período composto?",
    options: {
      A: "O sol brilhou forte",
      B: "Choveu ontem",
      C: "Estudei e passei",
      D: "A aula terminou"
    },
    answer: "C",
    hint: "Dois verbos."
  },
  {
    text: "Quem liderou a Inconfidência Mineira?",
    options: { A: "Dom Pedro I", B: "José Bonifácio", C: "Tiradentes", D: "Getúlio Vargas" },
    answer: "C",
    hint: "Símbolo nacional."
  },

  {
    text: "Qual é a unidade de medida da força no SI?",
    options: { A: "Watt", B: "Joule", C: "Pascal", D: "Newton" },
    answer: "D",
    hint: "Lei da Física."
  },
  {
    text: "Quanto é 25% de 1,6?",
    options: { A: "0,2", B: "0,3", C: "0,4", D: "0,5" },
    answer: "C",
    hint: "Um quarto."
  },
  {
    text: "Qual classe gramatical é a palavra 'embora'?",
    options: { A: "Advérbio", B: "Conjunção", C: "Preposição", D: "Interjeição" },
    answer: "B",
    hint: "Ideia de concessão."
  },
  {
    text: "Em que ano foi promulgada a Constituição de 1988?",
    options: { A: "1985", B: "1990", C: "1986", D: "1988" },
    answer: "D",
    hint: "Redemocratização."
  },

  {
    text: "Qual camada da Terra é composta principalmente por magma?",
    options: { A: "Manto", B: "Crosta", C: "Núcleo externo", D: "Litosfera" },
    answer: "A",
    hint: "Entre crosta e núcleo."
  },
  {
    text: "Quanto é 7² − 5²?",
    options: { A: "12", B: "24", C: "14", D: "49" },
    answer: "B",
    hint: "Diferença de quadrados."
  },
  {
    text: "Qual alternativa contém um adjunto adnominal?",
    options: {
      A: "Ele chegou cedo",
      B: "Gosto de música",
      C: "Livro do aluno",
      D: "Ela falou bem"
    },
    answer: "C",
    hint: "Relaciona substantivo."
  },
  {
    text: "Qual movimento artístico marcou a Semana de Arte Moderna?",
    options: { A: "Realismo", B: "Barroco", C: "Modernismo", D: "Romantismo" },
    answer: "C",
    hint: "1922."
  },

  {
    text: "Qual tipo de ligação química envolve compartilhamento de elétrons?",
    options: { A: "Iônica", B: "Metálica", C: "Ponte de hidrogênio", D: "Covalente" },
    answer: "D",
    hint: "Não há transferência."
  },
  {
    text: "Quanto é (2/5) de 75?",
    options: { A: "25", B: "30", C: "35", D: "40" },
    answer: "B",
    hint: "Fração."
  },
  {
    text: "Qual voz verbal está em 'O livro foi lido'?",
    options: { A: "Ativa", B: "Reflexiva", C: "Passiva", D: "Recíproca" },
    answer: "C",
    hint: "Sujeito paciente."
  },
  {
    text: "Qual presidente instituiu o Estado Novo?",
    options: { A: "Juscelino Kubitschek", B: "Getúlio Vargas", C: "Floriano Peixoto", D: "Collor" },
    answer: "B",
    hint: "1937."
  },

  {
    text: "Qual fenômeno explica o desvio da luz em campos gravitacionais?",
    options: { A: "Refração", B: "Difração", C: "Relatividade", D: "Reflexão" },
    answer: "C",
    hint: "Einstein."
  },
  {
    text: "Quanto é 0,125 em forma de fração?",
    options: { A: "1/4", B: "1/8", C: "1/6", D: "1/5" },
    answer: "B",
    hint: "Potência de 2."
  },
  {
    text: "Qual termo NÃO é uma conjunção?",
    options: { A: "Mas", B: "Porque", C: "Embora", D: "Muito" },
    answer: "D",
    hint: "Intensidade."
  },
  {
    text: "Em que ano ocorreu o golpe militar no Brasil?",
    options: { A: "1964", B: "1968", C: "1954", D: "1970" },
    answer: "A",
    hint: "Ditadura."
  },

  {
    text: "Qual sistema regula os hormônios do corpo?",
    options: { A: "Nervoso", B: "Digestório", C: "Endócrino", D: "Respiratório" },
    answer: "C",
    hint: "Glândulas."
  },
  {
    text: "Quanto é 9³?",
    options: { A: "729", B: "243", C: "81", D: "512" },
    answer: "A",
    hint: "9 × 9 × 9."
  },
  {
    text: "Qual palavra é um pronome relativo?",
    options: { A: "Quem", B: "Muito", C: "Sempre", D: "Longe" },
    answer: "A",
    hint: "Retoma termo."
  },
  {
    text: "Qual foi o último presidente do regime militar?",
    options: { A: "Costa e Silva", B: "Geisel", C: "Figueiredo", D: "Médici" },
    answer: "C",
    hint: "Abertura política."
  }
];

