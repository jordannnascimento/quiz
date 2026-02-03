const questions = [
  // =========================
  // 🟢 FÁCEIS (20)
  // =========================
  {
    text: "Qual órgão do corpo humano é responsável por bombear o sangue?",
    options: { A: "Pulmão", B: "Cérebro", C: "Coração", D: "Fígado" },
    answer: "C",
    hint: "Ele trabalha sem parar."
  },
  {
    text: "Qual planeta é conhecido como planeta vermelho?",
    options: { A: "Terra", B: "Marte", C: "Júpiter", D: "Vênus" },
    answer: "B",
    hint: "Tem o nome do deus da guerra."
  },
  {
    text: "Quanto é 7 × 8?",
    options: { A: "54", B: "56", C: "58", D: "64" },
    answer: "B",
    hint: "É maior que 55."
  },
  {
    text: "Quanto é 100 ÷ 4?",
    options: { A: "20", B: "25", C: "40", D: "50" },
    answer: "B",
    hint: "É um quarto de 100."
  },
  {
    text: "Qual é o plural da palavra “cidadão”?",
    options: { A: "Cidadões", B: "Cidadãos", C: "Cidadõeses", D: "Cidadãs" },
    answer: "B",
    hint: "Termina com 'ãos'."
  },
  {
    text: "Qual palavra está escrita corretamente?",
    options: { A: "Excesão", B: "Excessão", C: "Exceção", D: "Exeção" },
    answer: "C",
    hint: "Tem apenas um S."
  },
  {
    text: "Em que ano o Brasil foi descoberto?",
    options: { A: "1492", B: "1500", C: "1530", D: "1822" },
    answer: "B",
    hint: "Começa com 15."
  },
  {
    text: "Quem foi o primeiro presidente do Brasil?",
    options: { A: "Getúlio Vargas", B: "Deodoro da Fonseca", C: "Dom Pedro I", D: "Juscelino Kubitschek" },
    answer: "B",
    hint: "Era marechal."
  },
  {
    text: "Qual é o maior planeta do sistema solar?",
    options: { A: "Terra", B: "Saturno", C: "Júpiter", D: "Netuno" },
    answer: "C",
    hint: "Tem uma grande mancha vermelha."
  },
  {
    text: "Quanto é 5²?",
    options: { A: "10", B: "20", C: "25", D: "30" },
    answer: "C",
    hint: "5 vezes 5."
  },
  {
    text: "Qual dessas palavras é um verbo?",
    options: { A: "Casa", B: "Bonito", C: "Correr", D: "Azul" },
    answer: "C",
    hint: "Indica ação."
  },
  {
    text: "Qual oceano banha o Brasil?",
    options: { A: "Pacífico", B: "Índico", C: "Atlântico", D: "Ártico" },
    answer: "C",
    hint: "Fica a leste do país."
  },
  {
    text: "Qual animal é conhecido como o rei da selva?",
    options: { A: "Elefante", B: "Tigre", C: "Leão", D: "Onça" },
    answer: "C",
    hint: "Tem juba."
  },
  {
    text: "Qual é a capital do Brasil?",
    options: { A: "Rio de Janeiro", B: "São Paulo", C: "Brasília", D: "Salvador" },
    answer: "C",
    hint: "Foi inaugurada em 1960."
  },
  {
    text: "Quanto é 9 + 6?",
    options: { A: "13", B: "14", C: "15", D: "16" },
    answer: "C",
    hint: "É maior que 14."
  },
  {
    text: "Qual desses é um estado físico da água?",
    options: { A: "Quente", B: "Frio", C: "Sólido", D: "Molhado" },
    answer: "C",
    hint: "É o gelo."
  },
  {
    text: "Qual é o feminino de ator?",
    options: { A: "Atriz", B: "Atora", C: "Atores", D: "Artista" },
    answer: "A",
    hint: "Muito comum no cinema."
  },
  {
    text: "Qual instrumento mede a temperatura?",
    options: { A: "Barômetro", B: "Termômetro", C: "Régua", D: "Higrômetro" },
    answer: "B",
    hint: "Usado em febre."
  },
  {
    text: "Qual é a cor da bandeira do Brasil que representa as florestas?",
    options: { A: "Azul", B: "Amarelo", C: "Verde", D: "Branco" },
    answer: "C",
    hint: "É a cor predominante."
  },
  {
    text: "Quanto é 10 × 10?",
    options: { A: "10", B: "50", C: "100", D: "1000" },
    answer: "C",
    hint: "Base do sistema decimal."
  },

  // =========================
  // 🟡 MÉDIAS (20)
  // =========================
  {
    text: "Qual gás é essencial para a respiração humana?",
    options: { A: "Hidrogênio", B: "Oxigênio", C: "Nitrogênio", D: "Gás carbônico" },
    answer: "B",
    hint: "Está presente no ar."
  },
  {
    text: "Qual é a raiz quadrada de 144?",
    options: { A: "10", B: "11", C: "12", D: "14" },
    answer: "C",
    hint: "12 × 12."
  },
  {
    text: "Qual frase está gramaticalmente correta?",
    options: { A: "Haviam muitas pessoas", B: "Havia muitas pessoas", C: "Haviam muita gente", D: "Houveram pessoas" },
    answer: "B",
    hint: "Verbo impessoal."
  },
  {
    text: "Em que ano a escravidão foi abolida no Brasil?",
    options: { A: "1822", B: "1850", C: "1888", D: "1891" },
    answer: "C",
    hint: "Lei Áurea."
  },
  {
    text: "Qual órgão é responsável pela filtragem do sangue?",
    options: { A: "Pulmão", B: "Rim", C: "Fígado", D: "Coração" },
    answer: "B",
    hint: "São dois."
  },
  {
    text: "Quanto é 15% de 200?",
    options: { A: "20", B: "25", C: "30", D: "35" },
    answer: "C",
    hint: "10% de 200 é 20."
  },
  {
    text: "Qual destas palavras é um advérbio?",
    options: { A: "Rápido", B: "Rapidamente", C: "Rapidez", D: "Rápida" },
    answer: "B",
    hint: "Termina em -mente."
  },
  {
    text: "Quem proclamou a independência do Brasil?",
    options: { A: "Dom João VI", B: "Dom Pedro I", C: "Tiradentes", D: "Getúlio Vargas" },
    answer: "B",
    hint: "Grito do Ipiranga."
  },
  {
    text: "Qual planeta possui anéis visíveis?",
    options: { A: "Marte", B: "Júpiter", C: "Saturno", D: "Urano" },
    answer: "C",
    hint: "É o mais famoso por isso."
  },
  {
    text: "Quanto é 3³?",
    options: { A: "6", B: "9", C: "18", D: "27" },
    answer: "D",
    hint: "3 × 3 × 3."
  },

  // =========================
  // 🔴 DIFÍCEIS (10)
  // =========================
  {
    text: "Qual é a principal função dos ribossomos?",
    options: { A: "Produzir energia", B: "Produzir proteínas", C: "Armazenar DNA", D: "Controlar a célula" },
    answer: "B",
    hint: "Ligado à síntese."
  },
  {
    text: "Quanto é 3² + 4²?",
    options: { A: "14", B: "25", C: "49", D: "7" },
    answer: "B",
    hint: "Teorema famoso."
  },
  {
    text: "Em qual frase o “porque” está correto?",
    options: {
      A: "Não fui porque estava doente",
      B: "Porque você não veio?",
      C: "Não sei porque",
      D: "Estudo porque."
    },
    answer: "A",
    hint: "Indica causa."
  },
  {
    text: "Qual foi o primeiro ciclo econômico do Brasil?",
    options: { A: "Café", B: "Ouro", C: "Açúcar", D: "Borracha" },
    answer: "C",
    hint: "Colonial."
  },
  {
    text: "Qual cientista propôs a teoria da relatividade?",
    options: { A: "Newton", B: "Galileu", C: "Einstein", D: "Darwin" },
    answer: "C",
    hint: "E = mc²."
  }
];

// =========================
// LÓGICA DO JOGO
// =========================
let current = 0;
let timer;
let timeLeft;
let answered = false;

const startBtn = document.getElementById("startBtn");
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
  const q = questions[current];

  questionEl.textContent = q.text;
  optionsEl.innerHTML = "";
  feedback.textContent = "";

  optionsEl.classList.add("hidden");
  actions.classList.add("hidden");

  startReadingTimer();
}

function startReadingTimer() {
  clearInterval(timer);

  timeLeft = 10; // ⏱️ TEMPO FIXO DE 10s
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
}

hintBtn.onclick = () => {
  feedback.textContent = "Dica: " + questions[current].hint;
};

revealBtn.onclick = () => {
  feedback.textContent = "Resposta correta: " + questions[current].answer;
};

