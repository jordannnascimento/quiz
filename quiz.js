// ==================================================
// 50 PERGUNTAS
// ==================================================
const questions = [
  // -------- FÁCEIS (1–20)
  {
    text: "Qual órgão do corpo humano bombeia o sangue?",
    options: { A: "Pulmão", B: "Cérebro", C: "Coração", D: "Fígado" },
    answer: "C",
    hint: "Ele bate sem parar."
  },
  {
    text: "Qual planeta é conhecido como planeta vermelho?",
    options: { A: "Terra", B: "Marte", C: "Vênus", D: "Júpiter" },
    answer: "B",
    hint: "Deus da guerra."
  },
  {
    text: "Quanto é 7 × 8?",
    options: { A: "54", B: "56", C: "58", D: "64" },
    answer: "B",
    hint: "Mais que 55."
  },
  {
    text: "Quanto é 100 ÷ 4?",
    options: { A: "20", B: "25", C: "40", D: "50" },
    answer: "B",
    hint: "Um quarto de 100."
  },
  {
    text: "Plural de cidadão é:",
    options: { A: "Cidadões", B: "Cidadãos", C: "Cidadães", D: "Cidadõeses" },
    answer: "B",
    hint: "Termina com ãos."
  },
  {
    text: "Qual palavra está correta?",
    options: { A: "Exceção", B: "Excessão", C: "Exesão", D: "Exeção" },
    answer: "A",
    hint: "Sem SS."
  },
  {
    text: "Em que ano o Brasil foi descoberto?",
    options: { A: "1492", B: "1500", C: "1530", D: "1822" },
    answer: "B",
    hint: "Século XVI."
  },
  {
    text: "Primeiro presidente do Brasil?",
    options: { A: "Getúlio Vargas", B: "Deodoro da Fonseca", C: "Dom Pedro I", D: "JK" },
    answer: "B",
    hint: "Era marechal."
  },
  {
    text: "Capital do Brasil?",
    options: { A: "São Paulo", B: "Rio de Janeiro", C: "Brasília", D: "Salvador" },
    answer: "C",
    hint: "Inaugurada em 1960."
  },
  {
    text: "Quanto é 9 + 6?",
    options: { A: "14", B: "15", C: "16", D: "17" },
    answer: "B",
    hint: "Mais que 14."
  },
  {
    text: "Animal conhecido como rei da selva?",
    options: { A: "Tigre", B: "Leão", C: "Onça", D: "Elefante" },
    answer: "B",
    hint: "Tem juba."
  },
  {
    text: "Qual oceano banha o Brasil?",
    options: { A: "Pacífico", B: "Índico", C: "Atlântico", D: "Ártico" },
    answer: "C",
    hint: "Leste do país."
  },
  {
    text: "Quanto é 10 × 10?",
    options: { A: "10", B: "50", C: "100", D: "1000" },
    answer: "C",
    hint: "Base decimal."
  },
  {
    text: "Feminino de ator?",
    options: { A: "Atora", B: "Atriz", C: "Atores", D: "Artista" },
    answer: "B",
    hint: "Cinema."
  },
  {
    text: "Instrumento que mede temperatura?",
    options: { A: "Barômetro", B: "Termômetro", C: "Régua", D: "Higrômetro" },
    answer: "B",
    hint: "Febre."
  },
  {
    text: "Cor da bandeira que representa florestas?",
    options: { A: "Azul", B: "Amarelo", C: "Verde", D: "Branco" },
    answer: "C",
    hint: "Natureza."
  },
  {
    text: "Qual desses é um verbo?",
    options: { A: "Casa", B: "Bonito", C: "Correr", D: "Azul" },
    answer: "C",
    hint: "Ação."
  },
  {
    text: "Maior planeta do sistema solar?",
    options: { A: "Terra", B: "Saturno", C: "Júpiter", D: "Netuno" },
    answer: "C",
    hint: "Gigante gasoso."
  },
  {
    text: "Quanto é 5²?",
    options: { A: "10", B: "15", C: "25", D: "30" },
    answer: "C",
    hint: "5 × 5."
  },
  {
    text: "Estado físico do gelo?",
    options: { A: "Líquido", B: "Gasoso", C: "Sólido", D: "Plasma" },
    answer: "C",
    hint: "Frio."
  },

  // -------- MÉDIAS (21–40)
  {
    text: "Gás essencial para respiração humana?",
    options: { A: "Nitrogênio", B: "Oxigênio", C: "Hidrogênio", D: "CO₂" },
    answer: "B",
    hint: "Presente no ar."
  },
  {
    text: "Raiz quadrada de 144?",
    options: { A: "10", B: "11", C: "12", D: "14" },
    answer: "C",
    hint: "12 × 12."
  },
  {
    text: "Frase correta:",
    options: {
      A: "Haviam muitas pessoas",
      B: "Havia muitas pessoas",
      C: "Houveram pessoas",
      D: "Haviam gente"
    },
    answer: "B",
    hint: "Verbo impessoal."
  },
  {
    text: "Ano da abolição da escravidão no Brasil?",
    options: { A: "1822", B: "1850", C: "1888", D: "1891" },
    answer: "C",
    hint: "Lei Áurea."
  },
  {
    text: "Órgão que filtra o sangue?",
    options: { A: "Pulmão", B: "Fígado", C: "Rim", D: "Coração" },
    answer: "C",
    hint: "São dois."
  },
  {
    text: "15% de 200 é:",
    options: { A: "20", B: "25", C: "30", D: "35" },
    answer: "C",
    hint: "10% é 20."
  },
  {
    text: "Palavra que é advérbio:",
    options: { A: "Rápido", B: "Rapidamente", C: "Rapidez", D: "Rápida" },
    answer: "B",
    hint: "-mente."
  },
  {
    text: "Quem proclamou a independência do Brasil?",
    options: { A: "Dom João VI", B: "Dom Pedro I", C: "Tiradentes", D: "Vargas" },
    answer: "B",
    hint: "Ipiranga."
  },
  {
    text: "Planeta famoso por seus anéis?",
    options: { A: "Marte", B: "Saturno", C: "Júpiter", D: "Urano" },
    answer: "B",
    hint: "Anéis visíveis."
  },
  {
    text: "Quanto é 3³?",
    options: { A: "9", B: "18", C: "27", D: "30" },
    answer: "C",
    hint: "3×3×3."
  },
  {
    text: "Sujeito oculto aparece em:",
    options: {
      A: "Eu estudo",
      B: "Choveu muito",
      C: "Estudei ontem",
      D: "As crianças brincam"
    },
    answer: "C",
    hint: "Não está escrito."
  },
  {
    text: "Primeira capital do Brasil?",
    options: { A: "Rio de Janeiro", B: "Salvador", C: "São Paulo", D: "Recife" },
    answer: "B",
    hint: "Colonial."
  },
  {
    text: "Sistema responsável pela digestão?",
    options: { A: "Respiratório", B: "Digestório", C: "Nervoso", D: "Circulatório" },
    answer: "B",
    hint: "Alimentos."
  },
  {
    text: "Quanto é 40% de 50?",
    options: { A: "15", B: "20", C: "25", D: "30" },
    answer: "B",
    hint: "Metade de 40."
  },
  {
    text: "Classe gramatical de “feliz”:",
    options: { A: "Verbo", B: "Substantivo", C: "Adjetivo", D: "Advérbio" },
    answer: "C",
    hint: "Qualidade."
  },
  {
    text: "Tratado que dividiu terras entre Portugal e Espanha?",
    options: {
      A: "Versalhes",
      B: "Tordesilhas",
      C: "Madrid",
      D: "Utrecht"
    },
    answer: "B",
    hint: "Linha imaginária."
  },
  {
    text: "Principal fonte de energia da Terra?",
    options: { A: "Lua", B: "Sol", C: "Vento", D: "Água" },
    answer: "B",
    hint: "Estrela."
  },
  {
    text: "Quanto é 6²?",
    options: { A: "12", B: "24", C: "36", D: "48" },
    answer: "C",
    hint: "6×6."
  },
  {
    text: "Coletivo de peixes?",
    options: { A: "Manada", B: "Cardume", C: "Alcateia", D: "Bando" },
    answer: "B",
    hint: "No mar."
  },
  {
    text: "Movimento artístico de 1922 no Brasil?",
    options: {
      A: "Barroco",
      B: "Romantismo",
      C: "Modernismo",
      D: "Realismo"
    },
    answer: "C",
    hint: "Semana de Arte."
  },

  // -------- DIFÍCEIS (41–50)
  {
    text: "Função principal dos ribossomos?",
    options: {
      A: "Produzir energia",
      B: "Produzir proteínas",
      C: "Armazenar DNA",
      D: "Controlar célula"
    },
    answer: "B",
    hint: "Síntese."
  },
  {
    text: "Quanto é 3² + 4²?",
    options: { A: "14", B: "25", C: "49", D: "7" },
    answer: "B",
    hint: "Pitágoras."
  },
  {
    text: "Uso correto do 'porque':",
    options: {
      A: "Não fui porque estava doente",
      B: "Porque você veio?",
      C: "Não sei porque.",
      D: "Estudo porque."
    },
    answer: "A",
    hint: "Causa."
  },
  {
    text: "Primeiro ciclo econômico do Brasil?",
    options: { A: "Café", B: "Ouro", C: "Açúcar", D: "Borracha" },
    answer: "C",
    hint: "Colonial."
  },
  {
    text: "Quem propôs a teoria da relatividade?",
    options: { A: "Newton", B: "Darwin", C: "Einstein", D: "Galileu" },
    answer: "C",
    hint: "E=mc²."
  },
  {
    text: "Capital do Brasil antes de Brasília?",
    options: {
      A: "Salvador",
      B: "São Paulo",
      C: "Rio de Janeiro",
      D: "Recife"
    },
    answer: "C",
    hint: "Até 1960."
  },
  {
    text: "Quanto é 1/4 de 0,8?",
    options: { A: "0,1", B: "0,2", C: "0,3", D: "0,4" },
    answer: "B",
    hint: "Divisão."
  },
  {
    text: "Figura de linguagem em 'choveu lágrimas':",
    options: {
      A: "Ironia",
      B: "Metáfora",
      C: "Hipérbole",
      D: "Antítese"
    },
    answer: "B",
    hint: "Sentido figurado."
  },
  {
    text: "Sistema que coordena ações do corpo?",
    options: {
      A: "Digestório",
      B: "Respiratório",
      C: "Nervoso",
      D: "Circulatório"
    },
    answer: "C",
    hint: "Cérebro."
  },
  {
    text: "Ano da Proclamação da República no Brasil?",
    options: { A: "1822", B: "1888", C: "1889", D: "1891" },
    answer: "C",
    hint: "Um ano após a abolição."
  }
];

// ==================================================
// LÓGICA DO JOGO (10s + Próxima)
// ==================================================
let current = 0;
let timer;
let timeLeft;
let answered = false;

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const hintBtn = document.getElementById("hintBtn");
const revealBtn = document.getElementById("revealBtn");
const feedback = document.getElementById("feedback");
const actions = document.querySelector(".actions");

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
};

function loadQuestion() {
  answered = false;
  nextBtn.classList.add("hidden");
  optionsEl.innerHTML = "";
  feedback.textContent = "";

  const q = questions[current];
  questionEl.textContent = q.text;

  optionsEl.classList.add("hidden");
  actions.classList.add("hidden");

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  timerEl.textContent = `${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showOptions();
    }
  }, 1000);
}

function showOptions() {
  const q = questions[current];
  Object.entries(q.options).forEach(([key, value]) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = `${key}) ${value}`;
    btn.onclick = () => selectOption(btn, key);
    optionsEl.appendChild(btn);
  });

  optionsEl.classList.remove("hidden");
  actions.classList.remove("hidden");
}

function selectOption(button, selected) {
  if (answered) return;
  answered = true;

  const correct = questions[current].answer;
  if (selected === correct) {
    button.classList.add("correct");
    feedback.textContent = "Resposta correta!";
  } else {
    button.classList.add("wrong");
    feedback.textContent = `Resposta correta: ${correct}`;
  }
  nextBtn.classList.remove("hidden");
}

hintBtn.onclick = () => {
  feedback.textContent = "Dica: " + questions[current].hint;
};

revealBtn.onclick = () => {
  feedback.textContent = "Resposta correta: " + questions[current].answer;
  nextBtn.classList.remove("hidden");
};

nextBtn.onclick = () => {
  current++;
  if (current >= questions.length) {
    questionEl.textContent = "Fim do jogo 🎉";
    optionsEl.innerHTML = "";
    actions.classList.add("hidden");
    nextBtn.classList.add("hidden");
    timerEl.textContent = "";
    feedback.textContent = "Vocês completaram as 50 perguntas!";
    return;
  }
  loadQuestion();
};
