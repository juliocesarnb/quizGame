// =============================
// CUSTOMIZATION: QUESTIONS
// Edite este array para trocar perguntas, fotos e respostas.
// "correct" pode ser:
// - número (índice da opção correta, ex.: 2)
// - array de índices (mais de uma correta, ex.: [0, 1, 2, 3])
// =============================
const questions = [
  {
    question: "O que eu mais admiro em você?",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    options: ["Seu sorriso", "Sua inteligência", "Seu coração", "Seu senso de humor"],
    correct: 3
  },
  {
    question: "Qual parte de você eu acho mais linda?",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&w=900&q=80",
    options: ["Seus olhos", "Seu sorriso", "Seu cabelo"],
    correct: 0
  },
  {
    question: "O que em você sempre melhora meu dia?",
    image: "https://images.unsplash.com/photo-1516589091380-5d60138c4f7f?auto=format&fit=crop&w=900&q=80",
    options: ["Seu abraço", "Sua risada", "Suas mensagens", "Sua presença"],
    correct: 3
  },
  {
    question: "O que eu mais gosto de fazer com você?",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    options: ["Assistir algo juntos", "Sair para comer", "Conversar por horas", "Qualquer coisa, desde que seja com você"],
    correct: 0
  },
  {
    question: "Qual qualidade sua eu mais admiro?",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    options: ["Seu carinho", "Sua força", "Sua dedicação", "Seu jeito único"],
    correct: 2
  },
  {
    question: "O que mais faz você feliz?",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    options: ["Estar com quem ama", "Comer algo que gosta", "Fazer algo que ama", "Rir muito"],
    correct: 2
  },
  {
    question: "Qual é uma das suas maiores qualidades?",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80",
    options: ["Ser carinhosa", "Ser determinada", "Ser divertida", "Ser incrível"],
    correct: 1
  },
  {
    question: "Quando você sorri, o que acontece comigo?",
    image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?auto=format&fit=crop&w=900&q=80",
    options: ["Eu sorrio junto", "Eu esqueço tudo", "Meu dia melhora", "Tudo acima"],
    correct: 3
  },
  {
    question: "O que te faz especial para mim?",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&w=900&q=80",
    options: ["Seu jeito", "Seu carinho", "Sua personalidade", "Tudo isso"],
    correct: 0
  },
  {
    question: "O que eu penso quando olho para você?",
    image: "https://images.unsplash.com/photo-1516589091380-5d60138c4f7f?auto=format&fit=crop&w=900&q=80",
    options: ["Que tenho muita sorte", "Que você é linda", "Que você é especial", "Tudo isso"],
    correct: 3
  },
  {
    question: "Qual é a resposta certa para essa pergunta? \"Você sabe que eu gosto muito de você?\"",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=900&q=80",
    options: ["Sim ❤️", "Claro ❤️", "Com certeza ❤️", "É óbvio ❤️"],
    correct: [0, 1, 2, 3]
  }
];

// =============================
// CUSTOMIZATION: FINAL MESSAGES
// =============================
const finalMainMessage = "Feliz Dia das Mulheres ❤️ Obrigado por fazer minha vida mais bonita.";
const secretText = "Você é uma das melhores coisas que já aconteceram na minha vida ❤️";

// =============================
// CUSTOMIZATION: GALLERY PHOTOS
// Substitua por suas fotos locais (ex.: "nossa-foto1.jpg")
// =============================
const galleryPhotos = [
  "https://images.unsplash.com/photo-1516589091380-5d60138c4f7f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80"
];

// =============================
// CUSTOMIZATION: MUSIC FILE
// Troque para seu arquivo (ex.: "musica-romantica.mp3")
// =============================
const musicFile = "https://www.bensound.com/bensound-music/bensound-love.mp3";

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const progress = document.getElementById("progress");
const questionText = document.getElementById("questionText");
const questionImage = document.getElementById("questionImage");
const optionsContainer = document.getElementById("optionsContainer");
const scoreText = document.getElementById("scoreText");
const finalMessage = document.getElementById("finalMessage");
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const heartsBg = document.getElementById("heartsBg");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let currentQuestion = 0;
let score = 0;
let musicPlaying = false;

function showScreen(screenToShow) {
  [startScreen, quizScreen, resultScreen].forEach((screen) => {
    screen.classList.add("hidden");
    screen.classList.remove("active");
  });
  screenToShow.classList.remove("hidden");
  requestAnimationFrame(() => screenToShow.classList.add("active"));
}

function renderQuestion() {
  const data = questions[currentQuestion];
  progress.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  questionText.textContent = data.question;
  questionImage.src = data.image;
  questionImage.alt = `Imagem da pergunta ${currentQuestion + 1}`;
  optionsContainer.innerHTML = "";

  data.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(index, btn));
    optionsContainer.appendChild(btn);
  });

  quizScreen.classList.remove("question-transition");
  void quizScreen.offsetWidth;
  quizScreen.classList.add("question-transition");
}

function handleAnswer(selectedIndex, buttonEl) {
  const data = questions[currentQuestion];
  buttonEl.classList.add("selected");
  const isCorrect = Array.isArray(data.correct)
    ? data.correct.includes(selectedIndex)
    : selectedIndex === data.correct;
  if (isCorrect) score += 1;

  setTimeout(() => {
    currentQuestion += 1;
    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 360);
}

function showResult() {
  showScreen(resultScreen);
  scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas`;
  finalMessage.textContent = finalMainMessage;
  createHeartBurst();
}

function createGallery() {
  galleryGrid.innerHTML = "";
  galleryPhotos.forEach((photo, index) => {
    const img = document.createElement("img");
    img.src = photo;
    img.alt = `Nossa foto ${index + 1}`;
    img.className = "gallery-item";
    img.addEventListener("click", () => openLightbox(photo, index));
    galleryGrid.appendChild(img);
  });
}

function openLightbox(photo, index) {
  lightboxImage.src = photo;
  lightboxImage.alt = `Foto ampliada ${index + 1}`;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function setupSecretMessage() {
  secretBtn.addEventListener("click", () => {
    secretMessage.textContent = secretText;
    secretMessage.classList.remove("hidden");
  });
}

function spawnHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  const size = Math.random() * 14 + 10;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.animationDuration = `${Math.random() * 5 + 7}s`;
  heart.style.opacity = `${Math.random() * 0.4 + 0.3}`;
  heartsBg.appendChild(heart);

  setTimeout(() => heart.remove(), 13000);
}

function startHearts() {
  for (let i = 0; i < 18; i += 1) {
    setTimeout(spawnHeart, i * 260);
  }
  setInterval(spawnHeart, 900);
}

function createHeartBurst() {
  const total = 34;
  for (let i = 0; i < total; i += 1) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = i % 5 === 0 ? "✨" : "💖";
    heart.style.left = "50%";
    heart.style.top = "42%";
    const x = `${(Math.random() - 0.5) * 320}px`;
    const y = `${(Math.random() - 0.7) * 340}px`;
    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

function setupMusic() {
  bgMusic.src = musicFile;
  bgMusic.volume = 0.45;

  musicToggle.addEventListener("click", () => {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      musicToggle.textContent = "🔈";
    } else {
      bgMusic.play().catch(() => {});
      musicPlaying = true;
      musicToggle.textContent = "🔊";
    }
  });
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showScreen(quizScreen);
  renderQuestion();
  musicToggle.classList.remove("hidden");

  if (!musicPlaying) {
    bgMusic.play().then(() => {
      musicPlaying = true;
      musicToggle.textContent = "🔊";
    }).catch(() => {
      musicToggle.textContent = "🔈";
    });
  }
}

function setupEvents() {
  startBtn.addEventListener("click", startQuiz);
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

function init() {
  createGallery();
  setupSecretMessage();
  setupMusic();
  setupEvents();
  startHearts();
}

init();
