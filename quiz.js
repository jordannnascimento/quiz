document.addEventListener("DOMContentLoaded", () => {
  // ==================================================
  // 50 PERGUNTAS DIFÍCEIS (respostas alternadas A/B/C/D)
  // ==================================================
  const questions = [
    // 1 (A)
    { text:"Qual organela é responsável pela síntese de proteínas?", options:{A:"Ribossomos",B:"Lisossomos",C:"Mitocôndrias",D:"Complexo de Golgi"}, answer:"A", hint:"Relacionada ao RNA mensageiro." },
    // 2 (B)
    { text:"Qual é o valor de log₁₀(1000)?", options:{A:"2",B:"3",C:"10",D:"100"}, answer:"B", hint:"10 elevado a esse número dá 1000." },
    // 3 (C)
    { text:"Em qual alternativa o 'porquê' está correto?", options:{A:"Não sei porquê você faltou",B:"Ele saiu porquê queria",C:"Não entendi o porquê da mudança",D:"Porquê você não veio?"}, answer:"C", hint:"É um substantivo: 'o motivo'." },
    // 4 (D)
    { text:"Em que ano ocorreu a Revolução Constitucionalista de São Paulo?", options:{A:"1930",B:"1934",C:"1929",D:"1932"}, answer:"D", hint:"Aconteceu durante a Era Vargas." },

    // 5 (A)
    { text:"Qual gás é mais abundante na atmosfera terrestre?", options:{A:"Nitrogênio",B:"Oxigênio",C:"Gás carbônico",D:"Argônio"}, answer:"A", hint:"Passa de 70%." },
    // 6 (B)
    { text:"Quanto é 2³ × 3²?", options:{A:"36",B:"72",C:"18",D:"24"}, answer:"B", hint:"Potências: 8 × 9." },
    // 7 (C)
    { text:"Figura de linguagem em 'o tempo voa' é:", options:{A:"Ironia",B:"Hipérbole",C:"Metáfora",D:"Eufemismo"}, answer:"C", hint:"Sentido figurado." },
    // 8 (D)
    { text:"Qual tratado redefiniu fronteiras luso-espanholas no Brasil em 1750?", options:{A:"Tordesilhas",B:"Utrecht",C:"Versalhes",D:"Madrid"}, answer:"D", hint:"Foi assinado no século XVIII." },

    // 9 (A)
    { text:"Qual parte do encéfalo está mais associada ao equilíbrio?", options:{A:"Cerebelo",B:"Hipotálamo",C:"Bulbo",D:"Tálamo"}, answer:"A", hint:"Coordenação motora fina." },
    // 10 (B)
    { text:"Qual é o valor de √(81 × 16)?", options:{A:"18",B:"36",C:"12",D:"24"}, answer:"B", hint:"81×16 = 1296." },
    // 11 (C)
    { text:"Em 'Vendem-se casas', a oração está na voz:", options:{A:"Ativa",B:"Passiva analítica",C:"Passiva sintética",D:"Reflexiva"}, answer:"C", hint:"Partícula apassivadora." },
    // 12 (D)
    { text:"Qual lei (1850) proibiu o tráfico transatlântico de escravizados para o Brasil?", options:{A:"Lei Eusébio de Queirós",B:"Lei do Ventre Livre",C:"Lei dos Sexagenários",D:"Lei Eusébio de Queirós"}, answer:"D", hint:"Nome do ministro da Justiça." },

    // 13 (A)
    { text:"Em Química, pH 3 indica uma solução:", options:{A:"Ácida",B:"Neutra",C:"Básica",D:"Saturada"}, answer:"A", hint:"Abaixo de 7." },
    // 14 (B)
    { text:"Quanto é 7² − 5²?", options:{A:"12",B:"24",C:"14",D:"49"}, answer:"B", hint:"Diferença de quadrados." },
    // 15 (C)
    { text:"Qual é o sujeito em 'É necessário estudar'?", options:{A:"Estudar",B:"Necessário",C:"Sujeito inexistente",D:"É"}, answer:"C", hint:"Verbo impessoal em construção típica." },
    // 16 (D)
    { text:"Qual evento de 1968 marcou o endurecimento do regime militar no Brasil?", options:{A:"Diretas Já",B:"Plano Real",C:"AI-1",D:"AI-5"}, answer:"D", hint:"Ato Institucional." },

    // 17 (A)
    { text:"Qual tipo de ligação envolve compartilhamento de elétrons?", options:{A:"Covalente",B:"Iônica",C:"Metálica",D:"Dativa (sempre)"} , answer:"A", hint:"Não há transferência total." },
    // 18 (B)
    { text:"0,125 em forma de fração é:", options:{A:"1/6",B:"1/8",C:"1/5",D:"1/4"}, answer:"B", hint:"Divida por 0,125." },
    // 19 (C)
    { text:"Em 'Ele, que chegou cedo, sentou', o trecho entre vírgulas é:", options:{A:"Adjunto adverbial",B:"Aposto",C:"Oração subordinada adjetiva explicativa",D:"Oração coordenada"}, answer:"C", hint:"Explica o termo anterior." },
    // 20 (D)
    { text:"Em que ano ocorreu o Golpe Militar no Brasil?", options:{A:"1954",B:"1968",C:"1970",D:"1964"}, answer:"D", hint:"Início da ditadura." },

    // 21 (A)
    { text:"Qual é a unidade SI de força?", options:{A:"Newton",B:"Joule",C:"Watt",D:"Pascal"}, answer:"A", hint:"N = kg·m/s²." },
    // 22 (B)
    { text:"Quanto é (2/5) de 75?", options:{A:"25",B:"30",C:"35",D:"40"}, answer:"B", hint:"75×2 ÷5." },
    // 23 (C)
    { text:"Em 'Se eu soubesse, teria ido', o modo verbal em 'soubesse' é:", options:{A:"Indicativo",B:"Imperativo",C:"Subjuntivo",D:"Infinitivo"}, answer:"C", hint:"Hipótese/condição." },
    // 24 (D)
    { text:"Qual presidente instituiu o Estado Novo (1937)?", options:{A:"JK",B:"Dutra",C:"Jânio",D:"Getúlio Vargas"}, answer:"D", hint:"Centralização e censura." },

    // 25 (A)
    { text:"Qual sistema do corpo humano produz hormônios?", options:{A:"Endócrino",B:"Digestório",C:"Respiratório",D:"Excretor"}, answer:"A", hint:"Glândulas." },
    // 26 (B)
    { text:"Qual é o valor de 9³?", options:{A:"243",B:"729",C:"81",D:"512"}, answer:"B", hint:"9×9×9." },
    // 27 (C)
    { text:"Qual palavra é pronome relativo?", options:{A:"Muito",B:"Sempre",C:"Quem",D:"Longe"}, answer:"C", hint:"Retoma termo anterior." },
    // 28 (D)
    { text:"Qual foi o último presidente do regime militar brasileiro?", options:{A:"Geisel",B:"Médici",C:"Costa e Silva",D:"Figueiredo"}, answer:"D", hint:"Abertura política." },

    // 29 (A)
    { text:"Em Biologia, a molécula que armazena informação genética é:", options:{A:"DNA",B:"ATP",C:"Glicose",D:"Hemoglobina"}, answer:"A", hint:"Dupla hélice." },
    // 30 (B)
    { text:"Se uma função é f(x)=2x+3, então f(7) é:", options:{A:"15",B:"17",C:"19",D:"21"}, answer:"B", hint:"2×7 + 3." },
    // 31 (C)
    { text:"Em 'Apesar de chover, saí', a expressão inicial indica ideia de:", options:{A:"Causa",B:"Condição",C:"Concessão",D:"Finalidade"}, answer:"C", hint:"Mesmo assim." },
    // 32 (D)
    { text:"Qual ciclo econômico foi predominante no Brasil colonial por mais tempo no início da colonização?", options:{A:"Ouro",B:"Café",C:"Borracha",D:"Açúcar"}, answer:"D", hint:"Engenhos no litoral." },

    // 33 (A)
    { text:"Qual fenômeno explica a produção de energia no Sol?", options:{A:"Fusão nuclear",B:"Fissão nuclear",C:"Combustão",D:"Eletrólise"}, answer:"A", hint:"Junção de núcleos." },
    // 34 (B)
    { text:"Qual é a soma dos ângulos internos de um triângulo?", options:{A:"90°",B:"180°",C:"270°",D:"360°"}, answer:"B", hint:"Geometria básica." },
    // 35 (C)
    { text:"Em 'Faz três anos que...', o verbo 'fazer' é:", options:{A:"Pessoal",B:"Auxiliar",C:"Impessoal",D:"Transitivo direto obrigatório"}, answer:"C", hint:"Tempo decorrido." },
    // 36 (D)
    { text:"Qual foi o principal órgão de repressão política durante a ditadura militar, associado a prisões e interrogatórios?", options:{A:"IBGE",B:"TSE",C:"BNH",D:"DOI-CODI"}, answer:"D", hint:"Órgão de informação." },

    // 37 (A)
    { text:"Qual é a velocidade aproximada da luz no vácuo?", options:{A:"3×10⁸ m/s",B:"3×10⁶ m/s",C:"3×10⁴ m/s",D:"3×10² m/s"}, answer:"A", hint:"Cerca de 300 mil km/s." },
    // 38 (B)
    { text:"Se 4x − 8 = 20, então x é:", options:{A:"5",B:"7",C:"6",D:"8"}, answer:"B", hint:"Some 8 e divida por 4." },
    // 39 (C)
    { text:"Qual é a função sintática de 'de manhã' em 'Saí de manhã'?", options:{A:"Adjunto adnominal",B:"Objeto direto",C:"Adjunto adverbial",D:"Predicativo"}, answer:"C", hint:"Tempo." },
    // 40 (D)
    { text:"Em que ano foi promulgada a Constituição brasileira atual?", options:{A:"1985",B:"1990",C:"1986",D:"1988"}, answer:"D", hint:"Redemocratização." },

    // 41 (A)
    { text:"Qual organela modifica e empacota proteínas para secreção?", options:{A:"Complexo de Golgi",B:"Ribossomos",C:"Centríolos",D:"Nucleólo"}, answer:"A", hint:"Aparelho de Golgi." },
    // 42 (B)
    { text:"Qual é o valor de 25% de 1,6?", options:{A:"0,2",B:"0,4",C:"0,5",D:"0,3"}, answer:"B", hint:"Um quarto." },
    // 43 (C)
    { text:"Em qual alternativa há uma oração subordinada adverbial condicional?", options:{A:"Quando cheguei, ele saiu",B:"Porque choveu, não fui",C:"Se chover, eu fico",D:"Embora doa, vou"}, answer:"C", hint:"Começa com 'se'." },
    // 44 (D)
    { text:"Qual medida econômica marcou o início do Plano Real em 1994?", options:{A:"URV (Unidade Real de Valor)",B:"Cruzado Novo",C:"Confisco da poupança",D:"URV (Unidade Real de Valor)"}, answer:"D", hint:"Unidade de transição antes do Real." },

    // 45 (A)
    { text:"Qual é o principal pigmento responsável pela fotossíntese?", options:{A:"Clorofila",B:"Hemoglobina",C:"Melanina",D:"Queratina"}, answer:"A", hint:"Verde nas plantas." },
    // 46 (B)
    { text:"Quanto é 1/4 de 0,8?", options:{A:"0,1",B:"0,2",C:"0,3",D:"0,4"}, answer:"B", hint:"Divida por 4." },
    // 47 (C)
    { text:"Figura de linguagem em 'morri de rir' é:", options:{A:"Metáfora",B:"Eufemismo",C:"Hipérbole",D:"Antítese"}, answer:"C", hint:"Exagero." },
    // 48 (D)
    { text:"Qual evento marcou a Proclamação da República no Brasil?", options:{A:"Grito do Ipiranga",B:"Lei Áurea",C:"Revolta da Vacina",D:"Deposição de Dom Pedro II (1889)"}, answer:"D", hint:"Fim do Império." },

    // 49 (A)
    { text:"O que mede um barômetro?", options:{A:"Pressão atmosférica",B:"Temperatura",C:"Umidade",D:"Velocidade do vento"}, answer:"A", hint:"Clima/tempo." },
    // 50 (B)
    { text:"Se a média de 4, 6 e 8 é:", options:{A:"5",B:"6",C:"7",D:"8"}, answer:"B", hint:"Soma/3." }
  ];

  // ==================================================
  // ELEMENTOS
  // ==================================================
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const hintBtn = document.getElementById("hintBtn");
  const revealBtn = document.getElementById("revealBtn");

  const startScreen = document.getElementById("startScreen");
  const quizScreen = document.getElementById("quizScreen");

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const timerEl = document.getElementById("timer");
  const feedbackEl = document.getElementById("feedback");
  const actionsEl = document.getElementById("actions");
  const progressEl = document.getElementById("progress");

  // Guarda de segurança: se algo estiver faltando, mostra erro no console
  const required = { startBtn, nextBtn, hintBtn, revealBtn, startScreen, quizScreen, questionEl, optionsEl, timerEl, feedbackEl, actionsEl, progressEl };
  for (const [k, v] of Object.entries(required)) {
    if (!v) {
      console.error("Elemento não encontrado no HTML:", k);
    }
  }

  // ==================================================
  // ESTADO
  // ==================================================
  let current = 0;
  let readingTimer = null;
  let timeLeft = 10;
  let answered = false;

  // ==================================================
  // FUNÇÕES
  // ==================================================
  function startGame() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    current = 0;
    loadQuestion();
  }

  function loadQuestion() {
    answered = false;
    nextBtn.classList.add("hidden");
    feedbackEl.textContent = "";

    // esconder opções e botões até acabar leitura
    optionsEl.classList.add("hidden");
    actionsEl.classList.add("hidden");
    optionsEl.innerHTML = "";

    const q = questions[current];
    progressEl.textContent = `Pergunta ${current + 1}/${questions.length}`;
    questionEl.textContent = q.text;

    startReadingCountdown(10);
  }

  function startReadingCountdown(seconds) {
    clearInterval(readingTimer);
    timeLeft = seconds;
    timerEl.textContent = String(timeLeft);

    readingTimer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = String(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(readingTimer);
        showOptions();
      }
    }, 1000);
  }

  function showOptions() {
    const q = questions[current];

    // cria botões A–D
    for (const [key, value] of Object.entries(q.options)) {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.textContent = `${key}) ${value}`;
      btn.addEventListener("click", () => selectOption(btn, key));
      optionsEl.appendChild(btn);
    }

    optionsEl.classList.remove("hidden");
    actionsEl.classList.remove("hidden");
  }

  function selectOption(button, selected) {
    if (answered) return;
    answered = true;

    const correct = questions[current].answer;

    if (selected === correct) {
      button.classList.add("correct");
      feedbackEl.textContent = "Resposta correta!";
    } else {
      button.classList.add("wrong");
      feedbackEl.textContent = `Resposta correta: ${correct}`;
    }

    nextBtn.classList.remove("hidden");
  }

  function revealAnswer() {
    feedbackEl.textContent = `Resposta correta: ${questions[current].answer}`;
    nextBtn.classList.remove("hidden");
  }

  function showHint() {
    feedbackEl.textContent = `Dica: ${questions[current].hint}`;
  }

  function nextQuestion() {
    current++;
    if (current >= questions.length) {
      endGame();
      return;
    }
    loadQuestion();
  }

  function endGame() {
    clearInterval(readingTimer);
    timerEl.textContent = "0";
    progressEl.textContent = `Fim • ${questions.length}/${questions.length}`;
    questionEl.textContent = "Fim do jogo 🎉";
    optionsEl.innerHTML = "";
    optionsEl.classList.add("hidden");
    actionsEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
    feedbackEl.textContent = "Vocês completaram as 50 perguntas difíceis!";
  }

  // ==================================================
  // EVENTOS (GARANTINDO START)
  // ==================================================
  startBtn.addEventListener("click", startGame);
  hintBtn.addEventListener("click", showHint);
  revealBtn.addEventListener("click", revealAnswer);
  nextBtn.addEventListener("click", nextQuestion);
});

