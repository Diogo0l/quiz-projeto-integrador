/**
 * ==========================================================================
 * CYBERSECURITY QUIZ - JAVASCRIPT LOGIC
 * Apresentação: Cybersegurança - Segurança de Computadores
 * ==========================================================================
 */

// Biblioteca de Ícones SVG puros (Sem emojis)
const ICONS = {
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  malware: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2"/><path d="m5 7 3 2"/><path d="m19 19-3-2"/><path d="m5 19 3-2"/><path d="M20 13h-4"/><path d="M4 13h4"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  phishing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><path d="M21 2l-2 2m-1.5 1.5L14 9l-2-2-4 4 2 2-3 3-2-2-3 3a4.24 4.24 0 0 0 6 6l3-3-2-2 3-3 2 2 4-4-2-2 3.5-3.5a1.5 1.5 0 0 0-2.12-2.12z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  sync: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`,
  wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><polyline points="20 6 9 17 4 12"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-inline-icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

// 10 Perguntas estritamente baseadas nos slides da apresentação
const QUIZ_QUESTIONS = [
  {
    id: 1,
    slideRef: "Slide 2 • O que é segurança de PCs?",
    category: "Fundamentos",
    iconKey: "shield",
    question: "De acordo com a apresentação, qual é o principal conceito e objetivo da segurança de computadores (PCs)?",
    options: [
      "Substituir manualmente todas as peças e cabos do computador a cada mês.",
      "Práticas que ajudam o usuário a proteger o computador, seus arquivos, contas e informações pessoais.",
      "Impedir permanentemente que o computador tenha acesso à internet.",
      "Permitir o uso do computador sem a necessidade de senhas ou antivírus."
    ],
    correctIndex: 1,
    explanation: "A segurança de PCs envolve práticas e bons hábitos que ajudam o usuário a proteger o computador, arquivos, contas e dados pessoais contra ameaças digitais."
  },
  {
    id: 2,
    slideRef: "Slide 3 • O Papel do Usuário",
    category: "Comportamento",
    iconKey: "user",
    question: "Por que o usuário é considerado uma 'parte fundamental' da segurança do computador?",
    options: [
      "Porque antivírus e ferramentas de proteção sozinhas não impedem descuidos como clicar em links falsos ou abrir arquivos suspeitos.",
      "Porque sistemas operacionais não possuem defesas nativas instaladas.",
      "Porque apenas hackers conseguem usar a internet sem infectar computadores.",
      "Porque o computador desliga automaticamente caso o usuário não altere o código-fonte."
    ],
    correctIndex: 0,
    explanation: "Mesmo com antivírus, ações descuidadas do usuário (como clicar em links falsos, baixar programas desconhecidos e ignorar atualizações) podem permitir a entrada de ameaças."
  },
  {
    id: 3,
    slideRef: "Slide 4 • Principais Ameaças",
    category: "Ameaças Digitais",
    iconKey: "malware",
    question: "Como o termo 'Malware' é definido na apresentação?",
    options: [
      "Softwares desenvolvidos para acelerar o carregamento da bateria.",
      "Programas criados para causar danos ou realizar ações sem a autorização do usuário.",
      "Peças físicas conectadas às portas USB para limpeza de disco.",
      "E-mails legítimos enviados por instituições bancárias oficiais."
    ],
    correctIndex: 1,
    explanation: "Malware é a denominação geral para qualquer programa malicioso criado com a intenção de causar danos, espionar ou realizar ações não autorizadas no sistema."
  },
  {
    id: 4,
    slideRef: "Slide 4 • Principais Ameaças",
    category: "Ameaças Digitais",
    iconKey: "lock",
    question: "Qual é a característica específica do ataque conhecido como 'Ransomware'?",
    options: [
      "Melhorar a velocidade de download de arquivos na rede.",
      "Limpar a lixeira e o histórico do navegador automaticamente.",
      "Malware que pode bloquear ou criptografar arquivos, impedindo o acesso do usuário.",
      "Enviar notificações de feliz aniversário aos contatos de e-mail."
    ],
    correctIndex: 2,
    explanation: "O Ransomware 'sequestra' os dados da vítima bloqueando ou criptografando arquivos essenciais para impedir seu uso."
  },
  {
    id: 5,
    slideRef: "Slide 5 • Phishing e Engenharia Social",
    category: "Golpes Virtuais",
    iconKey: "phishing",
    question: "Uma mensagem dizendo: 'Sua conta será bloqueada. Clique aqui para confirmar seus dados' é um exemplo clássico de:",
    options: [
      "Atualização rotineira de hardware do computador.",
      "Tentativa de Phishing e manipulação por Engenharia Social.",
      "Backup programado do sistema operacional.",
      "Comunicação técnica padrão enviada pela fabricante do monitor."
    ],
    correctIndex: 1,
    explanation: "O Phishing tenta fazer a vítima acreditar que está acessando uma mensagem ou site legítimo, usando o senso de urgência para roubar informações e credenciais."
  },
  {
    id: 6,
    slideRef: "Slide 5 • Phishing e Engenharia Social",
    category: "Prevenção",
    iconKey: "search",
    question: "Quais são as práticas recomendadas no slide para evitar cair em Phishing e Engenharia Social?",
    options: [
      "Clicar rapidamente no link para não perder o prazo informado.",
      "Verificar o remetente, conferir o endereço do site, desconfiar de mensagens urgentes e nunca fornecer senhas ou códigos.",
      "Responder à mensagem informando seus dados pessoais para validar o cadastro.",
      "Desativar todas as proteções para verificar se o link é real."
    ],
    correctIndex: 1,
    explanation: "Para não cair em golpes: verifique o remetente, confira a URL do site com atenção, desconfie de mensagens alarmistas/urgentes e JAMAIS forneça senhas ou códigos de segurança."
  },
  {
    id: 7,
    slideRef: "Slide 6 • Senhas e Autenticação",
    category: "Autenticação",
    iconKey: "key",
    question: "Segundo o slide 'Senhas e Autenticação', o que compõe uma boa senha e qual é o papel do MFA?",
    options: [
      "Senhas curtas e iguais para tudo; o MFA serve para dispensar a digitação de senhas.",
      "Senhas com datas de aniversário óbvias; o MFA serve para trocar a senha a cada hora.",
      "Senha longa, difícil de adivinhar, diferente em cada conta e sem dados óbvios; o MFA adiciona uma segunda etapa de verificação.",
      "Qualquer palavra com 4 letras; o MFA é exclusivo para grandes servidores governamentais."
    ],
    correctIndex: 2,
    explanation: "Uma boa senha é longa, difícil de adivinhar, única para cada conta e sem dados óbvios. O MFA (Autenticação Multifator) adiciona uma camada essencial de dupla confirmação."
  },
  {
    id: 8,
    slideRef: "Slide 7 • Downloads e Programas",
    category: "Boas Práticas",
    iconKey: "download",
    question: "Qual é a regra simples destacada na apresentação ao lidar com arquivos e programas da internet?",
    options: [
      "'Se você não sabe de onde veio, pense duas vezes antes de abrir.'",
      "'Sempre baixe versões modificadas e piratas para economizar recursos.'",
      "'Instale todos os programas sugeridos em pop-ups promocionais.'",
      "'Desative o antivírus ao fazer downloads para não corromper o arquivo.'"
    ],
    correctIndex: 0,
    explanation: "A regra de ouro: 'Se você não sabe de onde veio, pense duas vezes antes de abrir'. Baixe sempre de sites oficiais e evite programas piratas ou modificados."
  },
  {
    id: 9,
    slideRef: "Slide 8 • Atualizações e Antivírus",
    category: "Sistemas & Defesa",
    iconKey: "sync",
    question: "Sobre o papel das Atualizações e do Antivírus, qual das alternativas está correta?",
    options: [
      "O antivírus sozinho substitui totalmente qualquer cuidado ou bom hábito do usuário.",
      "As atualizações mantêm o sistema protegido contra vulnerabilidades conhecidas e o antivírus bloqueia malwares, devendo ser combinados com o comportamento seguro do usuário.",
      "Atualizações de segurança devem ser ignoradas pois deixam o computador lento.",
      "Antivírus e atualizações só funcionam se o usuário nunca reiniciar o computador."
    ],
    correctIndex: 1,
    explanation: "Atualizações corrigem falhas conhecidas e o antivírus detecta ameaças, mas essas ferramentas NÃO substituem o usuário atento. O ideal é somar tecnologia e bons hábitos."
  },
  {
    id: 10,
    slideRef: "Slide 9 • USB, Wi-Fi e Compartilhados",
    category: "Ambientes Conectados",
    iconKey: "wifi",
    question: "Ao utilizar redes Wi-Fi públicas ou computadores compartilhados, quais são as recomendações do slide?",
    options: [
      "Salvar senhas no navegador para agilizar acessos futuros.",
      "Conectar qualquer pendrive encontrado para descobrir quem é o dono.",
      "Evitar pendrives desconhecidos, ter cuidado em Wi-Fi público e nunca salvar senhas nem deixar contas abertas em PCs compartilhados.",
      "Deixar sessões bancárias e redes sociais conectadas ao sair."
    ],
    correctIndex: 2,
    explanation: "Evite pendrives suspeitos, redobre a atenção em redes abertas/Wi-Fi público e em computadores compartilhados nunca salve senhas e sempre faça logout (sair) das contas."
  }
];

// Estado da Aplicação
const quizState = {
  currentIndex: 0,
  score: 0,
  answers: [],
  isAnswered: false,
  soundEnabled: true
};

// Web Audio API Synthesizer (Sons Sci-Fi gerados dinamicamente)
class CyberAudio {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    if (!quizState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'sine';

      osc1.frequency.setValueAtTime(659.25, now);
      osc1.frequency.exponentialRampToValueAtTime(987.77, now + 0.18);

      osc2.frequency.setValueAtTime(329.63, now);
      osc2.frequency.exponentialRampToValueAtTime(493.88, now + 0.18);

      gainNode.gain.setValueAtTime(0.01, now);
      gainNode.gain.linearRampToValueAtTime(0.18, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.36);
      osc2.stop(now + 0.36);
    } catch (e) {
      // Audio fallback silencioso
    }
  }

  playWrong() {
    if (!quizState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.28);

      gainNode.gain.setValueAtTime(0.01, now);
      gainNode.gain.linearRampToValueAtTime(0.16, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.33);
    } catch (e) {
      // Audio fallback silencioso
    }
  }

  playClick() {
    if (!quizState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);

      gainNode.gain.setValueAtTime(0.05, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    } catch (e) {
      // Audio fallback silencioso
    }
  }
}

const audio = new CyberAudio();

// Referências do DOM
const DOM = {
  // Telas
  welcomeScreen: document.getElementById('welcomeScreen'),
  quizScreen: document.getElementById('quizScreen'),
  resultsScreen: document.getElementById('resultsScreen'),

  // Botões de Ação
  startQuizBtn: document.getElementById('startQuizBtn'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),
  restartQuizBtn: document.getElementById('restartQuizBtn'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  soundStateLabel: document.getElementById('soundStateLabel'),
  soundIconOn: document.querySelector('.sound-icon-on'),
  soundIconOff: document.querySelector('.sound-icon-off'),

  // HUD Quiz
  currentQuestionNum: document.getElementById('currentQuestionNum'),
  currentScoreDisplay: document.getElementById('currentScoreDisplay'),
  questionCategoryText: document.getElementById('questionCategoryText'),
  categoryIcon: document.getElementById('categoryIcon'),
  progressBarFill: document.getElementById('progressBarFill'),
  quizProgressBar: document.getElementById('quizProgressBar'),

  // Card da Questão
  slideReferenceBadge: document.getElementById('slideReferenceBadge'),
  questionTitle: document.getElementById('questionTitle'),
  optionsContainer: document.getElementById('optionsContainer'),
  selectionHint: document.getElementById('selectionHint'),
  nextBtnText: document.getElementById('nextBtnText'),

  // Feedback Card
  feedbackCard: document.getElementById('feedbackCard'),
  feedbackStatusBadge: document.getElementById('feedbackStatusBadge'),
  feedbackIcon: document.getElementById('feedbackIcon'),
  feedbackStatusText: document.getElementById('feedbackStatusText'),
  feedbackSource: document.getElementById('feedbackSource'),
  feedbackExplanation: document.getElementById('feedbackExplanation'),

  // Tela de Resultados
  finalScoreText: document.getElementById('finalScoreText'),
  scoreCircleProgress: document.getElementById('scoreCircleProgress'),
  evalTitle: document.getElementById('evalTitle'),
  evalDesc: document.getElementById('evalDesc'),
  correctStatsCount: document.getElementById('correctStatsCount'),
  wrongStatsCount: document.getElementById('wrongStatsCount'),
  percentageStat: document.getElementById('percentageStat'),
  reviewQuestionsList: document.getElementById('reviewQuestionsList')
};

// Alternar Telas
function switchScreen(activeScreen) {
  [DOM.welcomeScreen, DOM.quizScreen, DOM.resultsScreen].forEach(screen => {
    if (screen === activeScreen) {
      screen.classList.remove('hidden');
      screen.classList.add('active-view');
    } else {
      screen.classList.add('hidden');
      screen.classList.remove('active-view');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Iniciar Quiz
function startQuiz() {
  audio.init();
  audio.playClick();
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.answers = [];
  quizState.isAnswered = false;

  DOM.currentScoreDisplay.textContent = '0';
  renderQuestion(quizState.currentIndex);
  switchScreen(DOM.quizScreen);
}

// Renderizar Pergunta Atual
function renderQuestion(index) {
  const q = QUIZ_QUESTIONS[index];
  quizState.isAnswered = false;

  // Atualizar HUD
  DOM.currentQuestionNum.textContent = index + 1;
  DOM.currentScoreDisplay.textContent = quizState.score;
  DOM.questionCategoryText.textContent = q.category;
  DOM.categoryIcon.innerHTML = ICONS[q.iconKey] || ICONS.shield;
  DOM.slideReferenceBadge.textContent = q.slideRef;
  DOM.questionTitle.textContent = q.question;

  // Atualizar Barra de Progresso
  const progressPercent = ((index + 1) / QUIZ_QUESTIONS.length) * 100;
  DOM.progressBarFill.style.width = `${progressPercent}%`;
  DOM.quizProgressBar.setAttribute('aria-valuenow', progressPercent);

  // Esconder Feedback e Botão Próximo
  DOM.feedbackCard.classList.add('hidden');
  DOM.nextQuestionBtn.classList.add('hidden');
  DOM.selectionHint.classList.remove('hidden');
  DOM.selectionHint.textContent = "Selecione uma das 4 alternativas acima.";

  // Configurar texto do botão de avanço
  if (index === QUIZ_QUESTIONS.length - 1) {
    DOM.nextBtnText.textContent = "VER RESULTADO FINAL";
  } else {
    DOM.nextBtnText.textContent = "PRÓXIMA PERGUNTA";
  }

  // Renderizar Opções
  DOM.optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, optIndex) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.dataset.index = optIndex;

    btn.innerHTML = `
      <div class="option-main">
        <span class="option-letter">${letters[optIndex]}</span>
        <span class="option-text">${optText}</span>
      </div>
      <div class="option-status-icon" aria-hidden="true"></div>
    `;

    btn.addEventListener('click', () => handleOptionSelection(optIndex));
    DOM.optionsContainer.appendChild(btn);
  });
}

/**
 * Processar a Seleção da Alternativa
 * REQUISITO PRINCIPAL:
 * "quando resposta correta, a alternativa fique preenchida de verde,
 *  se errada, de vermelho."
 */
function handleOptionSelection(selectedIndex) {
  if (quizState.isAnswered) return;
  quizState.isAnswered = true;

  const currentQ = QUIZ_QUESTIONS[quizState.currentIndex];
  const isCorrect = (selectedIndex === currentQ.correctIndex);
  const optionButtons = DOM.optionsContainer.querySelectorAll('.option-btn');

  // Registrar resposta
  quizState.answers.push({
    questionId: currentQ.id,
    questionText: currentQ.question,
    slideRef: currentQ.slideRef,
    category: currentQ.category,
    options: currentQ.options,
    selectedIndex: selectedIndex,
    correctIndex: currentQ.correctIndex,
    isCorrect: isCorrect,
    explanation: currentQ.explanation
  });

  // Desativar todos os botões para impedir cliques múltiplos
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    const statusIcon = btn.querySelector('.option-status-icon');

    if (idx === selectedIndex) {
      btn.setAttribute('aria-checked', 'true');
      if (isCorrect) {
        // PREENCHIDA DE VERDE
        btn.classList.add('is-correct');
        statusIcon.innerHTML = ICONS.check;
      } else {
        // PREENCHIDA DE VERMELHO
        btn.classList.add('is-wrong');
        statusIcon.innerHTML = ICONS.cross;
      }
    } else if (idx === currentQ.correctIndex && !isCorrect) {
      // Destacar a alternativa correta em verde caso o usuário tenha errado
      btn.classList.add('is-correct-reveal');
      statusIcon.innerHTML = ICONS.check;
    } else {
      // Esmaecer outras opções
      btn.classList.add('is-dimmed');
    }
  });

  // Feedback e Sons
  if (isCorrect) {
    quizState.score++;
    DOM.currentScoreDisplay.textContent = quizState.score;
    audio.playCorrect();

    DOM.feedbackStatusBadge.className = 'feedback-status-badge status-correct';
    DOM.feedbackIcon.innerHTML = ICONS.check;
    DOM.feedbackStatusText.textContent = 'Resposta Correta!';
  } else {
    audio.playWrong();

    DOM.feedbackStatusBadge.className = 'feedback-status-badge status-wrong';
    DOM.feedbackIcon.innerHTML = ICONS.cross;
    DOM.feedbackStatusText.textContent = 'Resposta Incorreta!';
  }

  // Preencher Card de Feedback Educativo
  DOM.feedbackSource.textContent = currentQ.slideRef;
  DOM.feedbackExplanation.textContent = currentQ.explanation;
  DOM.feedbackCard.classList.remove('hidden');

  // Esconder texto de ajuda e exibir botão para avançar
  DOM.selectionHint.classList.add('hidden');
  DOM.nextQuestionBtn.classList.remove('hidden');
  DOM.nextQuestionBtn.focus();
}

// Avançar para a Próxima Pergunta ou Resultados
function nextQuestion() {
  audio.playClick();
  if (quizState.currentIndex < QUIZ_QUESTIONS.length - 1) {
    quizState.currentIndex++;
    renderQuestion(quizState.currentIndex);
  } else {
    showResults();
  }
}

// Apresentar Tela de Resultados
function showResults() {
  switchScreen(DOM.resultsScreen);

  const total = QUIZ_QUESTIONS.length;
  const score = quizState.score;
  const percentage = Math.round((score / total) * 100);
  const wrongCount = total - score;

  // Atualizar Textos de Estatísticas
  DOM.finalScoreText.textContent = score;
  DOM.correctStatsCount.textContent = score;
  DOM.wrongStatsCount.textContent = wrongCount;
  DOM.percentageStat.textContent = `${percentage}%`;

  // Animação do Círculo SVG de Progresso
  const circumference = 440;
  const offset = circumference - (percentage / 100) * circumference;
  
  DOM.scoreCircleProgress.style.strokeDashoffset = circumference;
  setTimeout(() => {
    DOM.scoreCircleProgress.style.strokeDashoffset = offset;
    if (percentage >= 80) {
      DOM.scoreCircleProgress.style.stroke = '#10b981';
    } else if (percentage >= 50) {
      DOM.scoreCircleProgress.style.stroke = '#00e5ff';
    } else {
      DOM.scoreCircleProgress.style.stroke = '#ef4444';
    }
  }, 100);

  // Diagnóstico sem emojis
  if (score === 10) {
    DOM.evalTitle.textContent = "Defesa Impenetrável!";
    DOM.evalDesc.textContent = "Parabéns! Você demonstrou domínio completo sobre os conceitos de segurança de PCs, prevenindo malwares, phishing e adotando as melhores práticas.";
  } else if (score >= 8) {
    DOM.evalTitle.textContent = "Excelente Consciência Digital!";
    DOM.evalDesc.textContent = "Muito bom! Você possui um ótimo senso de proteção cibernética e sabe identificar a grande maioria das armadilhas da internet.";
  } else if (score >= 6) {
    DOM.evalTitle.textContent = "Bom Conhecimento, com Pontos de Atenção!";
    DOM.evalDesc.textContent = "Você conhece os pontos básicos, mas algumas ameaças como engenharia social e senhas fracas ainda podem colocar seus dados em risco. Revise os conceitos fundamentais.";
  } else {
    DOM.evalTitle.textContent = "Alerta de Segurança: Risco Alto!";
    DOM.evalDesc.textContent = "Atenção redobrada! Vários hábitos descuidados foram identificados. Revise o conteúdo sobre segurança para se proteger de ameaças reais.";
  }

  // Renderizar Lista de Revisão das 10 Perguntas
  renderReviewList();
}

// Renderizar Gabarito Detalhado na Tela de Resultados (Sem emojis)
function renderReviewList() {
  DOM.reviewQuestionsList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  quizState.answers.forEach((ans, idx) => {
    const item = document.createElement('div');
    item.className = `review-item ${ans.isCorrect ? 'is-correct-item' : 'is-wrong-item'}`;

    const chosenLetter = letters[ans.selectedIndex];
    const chosenText = ans.options[ans.selectedIndex];
    const correctLetter = letters[ans.correctIndex];
    const correctText = ans.options[ans.correctIndex];

    const tagIcon = ans.isCorrect ? ICONS.check : ICONS.cross;

    item.innerHTML = `
      <div class="review-item-header">
        <span class="review-q-num">Questão ${idx + 1} • ${ans.slideRef}</span>
        <span class="review-tag ${ans.isCorrect ? 'tag-correct' : 'tag-wrong'}">
          ${tagIcon} <span>${ans.isCorrect ? 'ACERTOU' : 'ERROU'}</span>
        </span>
      </div>
      <p class="review-q-text">${ans.questionText}</p>
      <div class="review-answers-box">
        <div class="review-answer-row">
          <span class="ans-label">Sua resposta:</span>
          <span class="${ans.isCorrect ? 'ans-correct-txt' : 'ans-wrong-txt'}">
            (${chosenLetter}) ${chosenText}
          </span>
        </div>
        ${!ans.isCorrect ? `
          <div class="review-answer-row">
            <span class="ans-label">Correta:</span>
            <span class="ans-correct-txt">(${correctLetter}) ${correctText}</span>
          </div>
        ` : ''}
      </div>
      <p class="review-explanation"><strong>Explicação:</strong> ${ans.explanation}</p>
    `;

    DOM.reviewQuestionsList.appendChild(item);
  });
}

// Alternar Áudio
function toggleSound() {
  quizState.soundEnabled = !quizState.soundEnabled;
  if (quizState.soundEnabled) {
    DOM.soundStateLabel.textContent = "Ligado";
    DOM.soundIconOn.classList.remove('hidden');
    DOM.soundIconOff.classList.add('hidden');
    audio.playClick();
  } else {
    DOM.soundStateLabel.textContent = "Mudo";
    DOM.soundIconOn.classList.add('hidden');
    DOM.soundIconOff.classList.remove('hidden');
  }
}

// Atalhos de Teclado (Acessibilidade)
document.addEventListener('keydown', (e) => {
  if (!DOM.quizScreen.classList.contains('hidden') && !quizState.isAnswered) {
    const key = e.key.toUpperCase();
    const keyMap = { '1': 0, 'A': 0, '2': 1, 'B': 1, '3': 2, 'C': 2, '4': 3, 'D': 3 };
    if (keyMap.hasOwnProperty(key)) {
      e.preventDefault();
      handleOptionSelection(keyMap[key]);
    }
  }

  if (e.key === 'Enter') {
    if (!DOM.quizScreen.classList.contains('hidden') && !DOM.nextQuestionBtn.classList.contains('hidden')) {
      e.preventDefault();
      nextQuestion();
    }
  }
});

// Event Listeners
DOM.startQuizBtn.addEventListener('click', startQuiz);
DOM.nextQuestionBtn.addEventListener('click', nextQuestion);
DOM.restartQuizBtn.addEventListener('click', startQuiz);
DOM.soundToggleBtn.addEventListener('click', toggleSound);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  switchScreen(DOM.welcomeScreen);
});
