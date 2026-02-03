const questions = [
  {
    text: "Qual órgão do corpo humano é responsável por bombear o sangue?",
    options: ["A) Pulmão", "B) Cérebro", "C) Coração", "D) Fígado"],
    answer: "C",
    hint: "Trabalha sem parar."
  }
];

let current = 0;
let timer;
let timeLeft;

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const answerInput = document.getElementById("answerInput");
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
  const q = questions[current];

  questionEl.textContent = q.text;
  optionsEl.innerHTML = q.options.map(o => `<div>${o}</div>`).join("");

  optionsEl.classList.add("hidden");
  answerInput.classList.add("hidden");
  actions.classList.add("hidden");
  feedback.textContent = "";

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
  optionsEl.classList.remove("hidden");
  answerInput.classList.remove("hidden");
  actions.classList.remove("hidden");
}

hintBtn.onclick = () => {
  feedback.textContent = "Dica: " + questions[current].hint;
};

revealBtn.onclick = () => {
  feedback.textContent = "Resposta correta: " + questions[current].answer;
};

answerInput.addEventListener("input", () => {
  answerInput.value = answerInput.value.toUpperCase();
});

revealBtn.onclick = () => {
  feedback.textContent = "Resposta correta: " + questions[current].answer;
};

