const questions = [
  {
    text: "Qual órgão do corpo humano é responsável por bombear o sangue?",
    options: {
      A: "Pulmão",
      B: "Cérebro",
      C: "Coração",
      D: "Fígado"
    },
    answer: "C",
    hint: "Trabalha sem parar."
  }
  // 👉 depois você adiciona o resto
];

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

  startReadingTimer(q.text.length);
}

function startReadingTimer(textLength) {
  clearInterval(timer);

  timeLeft = textLength > 120 ? 20 : 15;
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
  feedback.textContent =
    "Resposta correta: " + questions[current].answer;
};


