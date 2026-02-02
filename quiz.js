const questions = [
  {
    text: "Qual órgão do corpo humano é responsável por bombear o sangue?",
    options: ["A) Pulmão", "B) Cérebro", "C) Coração", "D) Fígado"],
    answer: "C",
    hint: "Trabalha sem parar."
  },
  // 👉 Aqui você coloca o restante das 50
];

let current = 0;
let timerInterval;

const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const answerInput = document.getElementById("answerInput");
const hintBtn = document.getElementById("hintBtn");
const revealBtn = document.getElementById("revealBtn");
const feedback = document.getElementById("feedback");
const controls = document.querySelector(".controls");

startBtn.onclick = startGame;

function startGame() {
  startBtn.classList.add("hidden");
  quiz.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.text;

  optionsEl.innerHTML = q.options.join("<br>");
  optionsEl.classList.add("hidden");
  answerInput.classList.add("hidden");
  controls.classList.add("hidden");
  feedback.textContent = "";

  startTimer(q.text.length);
}

function startTimer(length) {
  let time = length > 120 ? 20 : 15;

  timerEl.textContent = `Tempo: ${time}s`;

  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = `Tempo: ${time}s`;

    if (time === 0) {
      clearInterval(timerInterval);
      showOptions();
    }
  }, 1000);
}

function showOptions() {
  optionsEl.classList.remove("hidden");
  answerInput.classList.remove("hidden");
  controls.classList.remove("hidden");
}

hintBtn.onclick = () => {
  feedback.textContent = "Dica: " + questions[current].hint;
};

revealBtn.onclick = () => {
  feedback.textContent = "Resposta correta: " + questions[current].answer;
};
