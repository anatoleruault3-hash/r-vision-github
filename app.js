const STORAGE = "ndrc_revision_platform_complete_v2";
const SUBJECTS = ["CEJM", "Culture générale", "Digitalisation"];

const SUBJECT_META = {
  CEJM: { className: "cejm", short: "CEJM" },
  "Culture générale": { className: "culture", short: "Culture" },
  Digitalisation: { className: "digital", short: "Digital" },
};

const EXAM_SECTIONS = [
  {
    subject: "CEJM",
    title: "Économie / droit / management",
    items: [
      "Durée indicative : 4 h, coefficient 3, dossier contextualisé d’entreprise.",
      "Économie : mécanisme, documents, indicateurs, conséquence pour l’entreprise.",
      "Droit : règle, faits utiles, application, conclusion juridique proportionnée.",
      "Management : diagnostic, choix stratégique ou opérationnel, indicateurs de suivi.",
    ],
  },
  {
    subject: "Culture générale",
    title: "Questions sur corpus + essai",
    items: [
      "Format ponctuel depuis 2025 : 3 h, deux parties d’égale importance.",
      "Partie 1 : 2 à 4 questions sur un corpus de 2 à 3 documents.",
      "Partie 2 : essai choisi parmi deux sujets, argumenté et nuancé.",
      "Session 2026 : thème annuel “Les animaux et nous”.",
    ],
  },
  {
    subject: "Digitalisation",
    title: "E5 relation client à distance",
    items: [
      "Écrit : étude de cas de 3 h sur un contexte réel d’organisation.",
      "Maîtriser : omnicanal, dossier client, data, téléacteurs, e-relation.",
      "Produire ou améliorer : contenus digitaux, site, e-commerce, relation à distance.",
      "Mesurer : NPS, CES, conversion, clic, rebond, panier moyen, réclamation.",
    ],
  },
];

const WRITING_CRITERIA = [
  { id: "intro", label: "Introduction claire", points: 2 },
  { id: "problem", label: "Problématique ou enjeu explicite", points: 2 },
  { id: "notions", label: "Notions définies", points: 3 },
  { id: "case", label: "Application au cas", points: 4 },
  { id: "structure", label: "Plan visible", points: 3 },
  { id: "examples", label: "Exemples ou faits précis", points: 2 },
  { id: "advice", label: "Solutions ou conclusion exploitable", points: 3 },
  { id: "language", label: "Expression et orthographe relues", points: 1 },
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const state = loadState();
let currentMethod = "cejm";
let quizSession = null;
let flashDeck = [];
let flashIndex = 0;
let flashFlipped = false;

function loadState() {
  const loaded = JSON.parse(localStorage.getItem(STORAGE) || "{}");
  loaded.tasks ||= {};
  loaded.bestScore ??= null;
  loaded.quizMistakes ||= [];
  loaded.quizHistory ||= [];
  loaded.subjectScores ||= {};
  loaded.reviewedCourses ||= {};
  loaded.flash ||= { known: {}, missed: [] };
  loaded.flash.known ||= {};
  loaded.flash.missed ||= [];
  loaded.writing ||= {};
  loaded.flashSuccess ||= 0;
  loaded.flashFail ||= 0;
  return loaded;
}

function save() {
  localStorage.setItem(STORAGE, JSON.stringify(state));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function subjectClass(subject) {
  return SUBJECT_META[subject]?.className || "neutral";
}

function subjectBadge(subject) {
  return `<span class="badge ${subjectClass(subject)}">${subject}</span>`;
}

function flashId(card) {
  return `${card[0]}::${card[1]}`;
}

function courseId(course) {
  return `${course.m}::${course.t}`;
}

function taskStats() {
  const total = plan.reduce((sum, day) => sum + day.items.length, 0);
  const done = Object.values(state.tasks).filter(Boolean).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function flashMasteryStats(subject = "all") {
  const cards = subject === "all" ? flashcards : flashcards.filter((card) => card[0] === subject);
  const knownFromCards = cards.filter((card) => state.flash.known[flashId(card)]).length;
  const legacyKnown = subject === "all" ? Math.min(cards.length, state.flashSuccess || 0) : 0;
  const known = Math.max(knownFromCards, legacyKnown);
  const pct = cards.length ? Math.round((known / cards.length) * 100) : 0;
  return { total: cards.length, known, pct };
}

function getQuizScore(subject) {
  const score = state.subjectScores[subject];
  if (!score || !score.total) return { pct: 0, correct: 0, total: 0 };
  return {
    pct: Math.round((score.correct / score.total) * 100),
    correct: score.correct,
    total: score.total,
  };
}

function setWidth(id, pct) {
  const node = $(id);
  if (node) node.style.width = `${clamp(pct, 0, 100)}%`;
}

function activatePage(pageId) {
  $$(".nav-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.page === pageId));
  $$(".page").forEach((page) => page.classList.toggle("active", page.id === pageId));
  renderAll();
}

function bindNavigation() {
  $$(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => activatePage(btn.dataset.page));
  });

  $$("[data-subject-shortcut]").forEach((btn) => {
    btn.addEventListener("click", () => {
      $("#courseFilter").value = btn.dataset.subjectShortcut;
      activatePage("cours");
    });
  });
}

function renderHome() {
  const stats = taskStats();
  const mastery = flashMasteryStats();
  $("#globalPercent").textContent = `${stats.pct}%`;
  $("#homeGlobalPercent").textContent = `${stats.pct}%`;
  $("#sidebarProgress").textContent = `${stats.pct}%`;
  setWidth("#globalBar", stats.pct);
  setWidth("#sidebarProgressBar", stats.pct);

  $("#bestScore").textContent = state.bestScore === null ? "—" : `${state.bestScore}%`;
  $("#baseCount").textContent = courses.length + glossary.length + quizBank.length + cases.length;
  $("#flashMasteryHome").textContent = `${mastery.pct}%`;
  $("#flashMasteryDetail").textContent = `${mastery.known}/${mastery.total} cartes connues`;

  const next = findNextTask();
  const nextTask = $("#nextTask");
  if (next) {
    nextTask.innerHTML = `
      <span class="badge neutral">${next.day} · ${next.time}</span>
      <strong>${next.label}</strong>
      <button class="btn primary" data-complete-task="${next.id}">Marquer fait</button>
    `;
  } else {
    nextTask.innerHTML = "<strong>Planning terminé</strong><p class=\"case-text\">Passe aux erreurs de quiz et aux cartes ratées.</p>";
  }

  const scoreGrid = $("#homeSubjectScores");
  scoreGrid.innerHTML = SUBJECTS.map((subject) => {
    const score = getQuizScore(subject);
    return `
      <div class="score-row">
        ${subjectBadge(subject)}
        <strong>${score.pct}%</strong>
        <small>${score.correct}/${score.total} réponses correctes</small>
        <div class="meter"><span style="width:${score.pct}%"></span></div>
      </div>
    `;
  }).join("");
}

function findNextTask() {
  for (let dayIndex = 0; dayIndex < plan.length; dayIndex += 1) {
    for (let itemIndex = 0; itemIndex < plan[dayIndex].items.length; itemIndex += 1) {
      const id = `task-${dayIndex}-${itemIndex}`;
      if (!state.tasks[id]) {
        const [time, label] = plan[dayIndex].items[itemIndex];
        return { id, time, label, day: plan[dayIndex].day };
      }
    }
  }
  return null;
}

function renderTimeline() {
  $("#timeline").innerHTML = plan.map((day, dayIndex) => `
    <article class="day-card">
      <h3>${day.day}</h3>
      ${day.items.map((item, itemIndex) => {
        const id = `task-${dayIndex}-${itemIndex}`;
        const checked = Boolean(state.tasks[id]);
        return `
          <div class="task-row">
            <input type="checkbox" data-task="${id}" ${checked ? "checked" : ""} aria-label="Terminer ${item[1]}">
            <div>
              <strong>${item[1]}</strong>
              <small>${item[0]}</small>
            </div>
            <span class="badge neutral">${checked ? "fait" : "à faire"}</span>
          </div>
        `;
      }).join("")}
    </article>
  `).join("");
}

function renderSubjectFilters(targetId, selectId, renderFn) {
  const target = $(targetId);
  target.innerHTML = ["all", ...SUBJECTS].map((subject) => {
    const label = subject === "all" ? "Toutes" : subject;
    return `<button class="chip ${$(selectId).value === subject ? "active" : ""}" data-filter-subject="${subject}">${label}</button>`;
  }).join("");

  $$("[data-filter-subject]", target).forEach((btn) => {
    btn.addEventListener("click", () => {
      $(selectId).value = btn.dataset.filterSubject;
      renderFn();
    });
  });
}

function renderCourses() {
  renderSubjectFilters("#courseSubjectFilters", "#courseFilter", renderCourses);
  const filter = $("#courseFilter").value;
  const query = $("#courseSearch").value.trim().toLowerCase();
  const terms = query.split(/\s+/).filter(Boolean);
  const filtered = courses.filter((course) => {
    const haystack = `${course.m} ${course.t} ${course.k.join(" ")} ${course.f}`.toLowerCase();
    return (filter === "all" || course.m === filter) && terms.every((term) => haystack.includes(term));
  });

  $("#courseList").innerHTML = filtered.map((course) => {
    const id = courseId(course);
    const reviewed = Boolean(state.reviewedCourses[id]);
    return `
      <article class="course-card">
        ${subjectBadge(course.m)}
        <h3>${course.t}</h3>
        <ul>${course.k.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p class="formula">${course.f}</p>
        <button class="review-btn ${reviewed ? "done" : ""}" data-review-course="${id}">
          ${reviewed ? "Révisé" : "Marquer comme révisé"}
        </button>
      </article>
    `;
  }).join("") || "<p class=\"case-text\">Aucun chapitre ne correspond à la recherche.</p>";
}

function renderGlossary() {
  const filter = $("#glossaryFilter").value;
  const terms = $("#glossarySearch").value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = glossary.filter((entry) => {
    const haystack = entry.join(" ").toLowerCase();
    return (filter === "all" || entry[0] === filter) && terms.every((term) => haystack.includes(term));
  });

  $("#glossaryList").innerHTML = filtered.map((entry) => `
    <article class="list-item">
      ${subjectBadge(entry[0])}
      <strong>${entry[1]}</strong>
      <p>${entry[2]}</p>
    </article>
  `).join("") || "<p class=\"case-text\">Aucun terme trouvé.</p>";
}

function buildQuizSession() {
  const subject = $("#quizSubject").value;
  const mode = $("#quizMode").value;
  const source = selectQuizQuestions(subject, mode);
  const questions = source.map((question) => {
    const correct = question.a[question.c];
    const answers = shuffle(question.a);
    return { ...question, a: answers, c: answers.indexOf(correct), originalAnswer: correct };
  });

  quizSession = {
    questions,
    index: 0,
    score: 0,
    answered: false,
    corrections: [],
    startedAt: Date.now(),
  };
  renderQuiz();
}

function selectQuizQuestions(subject, mode) {
  const source = subject === "all" ? quizBank : quizBank.filter((question) => question.m === subject);
  if (mode === "all") return shuffle(source);

  if (mode === "quick") {
    if (subject !== "all") return shuffle(source).slice(0, 10);
    return balancedQuestions({ CEJM: 4, "Culture générale": 3, Digitalisation: 3 });
  }

  if (mode === "exam" && subject === "all") {
    return balancedQuestions({ CEJM: 10, Digitalisation: 8, "Culture générale": 6 });
  }

  return shuffle(source).slice(0, Math.min(source.length, 24));
}

function balancedQuestions(targets) {
  const picked = [];
  Object.entries(targets).forEach(([subject, count]) => {
    picked.push(...shuffle(quizBank.filter((question) => question.m === subject)).slice(0, count));
  });
  return shuffle(picked);
}

function renderQuiz() {
  if (!quizSession || !quizSession.questions.length) buildQuizSession();
  const question = quizSession.questions[quizSession.index];
  const progress = quizSession.questions.length ? (quizSession.index / quizSession.questions.length) * 100 : 0;
  setWidth("#quizProgress", progress);
  $("#quizCounter").textContent = `Question ${quizSession.index + 1}/${quizSession.questions.length}`;
  $("#quizTheme").textContent = `${question.m} · ${question.t}`;
  $("#quizQuestion").textContent = question.q;
  $("#quizFeedback").hidden = true;
  $("#nextQuizBtn").disabled = true;
  $("#quizLiveScore").textContent = `${quizSession.score}/${quizSession.questions.length}`;
  $("#quizAnswers").innerHTML = question.a.map((answer, index) => `
    <button type="button" data-answer="${index}">${answer}</button>
  `).join("");
  renderQuizCorrections();
}

function answerQuiz(index) {
  if (!quizSession || quizSession.answered) return;
  quizSession.answered = true;
  const question = quizSession.questions[quizSession.index];
  const isCorrect = index === question.c;
  if (isCorrect) quizSession.score += 1;

  $$("#quizAnswers button").forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === question.c) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  const correction = {
    subject: question.m,
    theme: question.t,
    question: question.q,
    selected: question.a[index],
    answer: question.a[question.c],
    explanation: question.e,
    correct: isCorrect,
    at: new Date().toISOString(),
  };
  quizSession.corrections.push(correction);
  updateSubjectScore(question.m, isCorrect);
  if (!isCorrect) state.quizMistakes.push(correction);
  save();

  const feedback = $("#quizFeedback");
  feedback.hidden = false;
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Incorrect"}</strong>
    <p>Bonne réponse : ${question.a[question.c]}</p>
    <p>${question.e}</p>
  `;
  $("#nextQuizBtn").disabled = false;
  $("#quizLiveScore").textContent = `${quizSession.score}/${quizSession.questions.length}`;
  renderQuizCorrections();
}

function skipQuiz() {
  if (!quizSession || quizSession.answered) return;
  quizSession.answered = true;
  const question = quizSession.questions[quizSession.index];

  $$("#quizAnswers button").forEach((button) => {
    button.disabled = true;
  });

  const correction = {
    subject: question.m,
    theme: question.t,
    question: question.q,
    selected: "Passée",
    answer: question.a[question.c],
    explanation: question.e,
    correct: null,
    at: new Date().toISOString(),
  };
  quizSession.corrections.push(correction);
  save();

  const feedback = $("#quizFeedback");
  feedback.hidden = false;
  feedback.innerHTML = `
    <strong>Question passée</strong>
    <p>Bonne réponse : ${question.a[question.c]}</p>
    <p>${question.e}</p>
  `;
  $("#nextQuizBtn").disabled = false;
  renderQuizCorrections();
}

function updateSubjectScore(subject, correct) {
  state.subjectScores[subject] ||= { correct: 0, total: 0 };
  state.subjectScores[subject].total += 1;
  if (correct) state.subjectScores[subject].correct += 1;
}

function nextQuiz() {
  if (!quizSession) return;
  if (!quizSession.answered) {
    skipQuiz();
    return;
  }
  if (quizSession.index < quizSession.questions.length - 1) {
    quizSession.index += 1;
    quizSession.answered = false;
    renderQuiz();
    return;
  }
  finishQuiz();
}

function finishQuiz() {
  const pct = Math.round((quizSession.score / quizSession.questions.length) * 100);
  state.bestScore = state.bestScore === null ? pct : Math.max(state.bestScore, pct);
  state.quizHistory.unshift({
    score: quizSession.score,
    total: quizSession.questions.length,
    pct,
    mode: $("#quizMode").value,
    subject: $("#quizSubject").value,
    at: new Date().toISOString(),
  });
  state.quizHistory = state.quizHistory.slice(0, 8);
  save();

  $("#quizQuestion").textContent = `Résultat : ${quizSession.score}/${quizSession.questions.length} · ${pct}%`;
  $("#quizAnswers").innerHTML = "";
  $("#quizFeedback").hidden = false;
  $("#quizFeedback").innerHTML = buildQuizSummary(pct);
  $("#nextQuizBtn").disabled = true;
  setWidth("#quizProgress", 100);
  renderQuizCorrections();
  renderAll();
}

function buildQuizSummary(pct) {
  const errors = quizSession.corrections.filter((item) => !item.correct);
  const advice = pct >= 80
    ? "Niveau solide : passe à la rédaction ou au mode examen."
    : "Reprends la liste d'erreurs, puis relance 10 questions rapides sur la matière la plus faible.";
  return `
    <strong>${advice}</strong>
    ${errors.length ? `<p>${errors.length} erreur(s) à revoir automatiquement ajoutée(s) à la progression.</p>` : "<p>Aucune erreur sur cette session.</p>"}
  `;
}

function renderQuizCorrections() {
  const list = $("#quizCorrectionList");
  if (!quizSession?.corrections.length) {
    list.innerHTML = "<p>Aucune correction pour l'instant.</p>";
    return;
  }
  list.innerHTML = quizSession.corrections.map((item) => `
    <div class="compact-item">
      <strong>${item.correct ? "✓" : "✕"} ${item.subject} · ${item.theme}</strong>
      <span>${item.question}</span>
      <small>Ta réponse : ${item.selected}</small>
      <small>Bonne réponse : ${item.answer}</small>
      <small>${item.explanation}</small>
    </div>
  `).join("");
}

function restartFlashcards() {
  const mode = $("#flashMode").value;
  const missedIds = new Set(state.flash.missed);
  const source = mode === "missed"
    ? flashcards.filter((card) => missedIds.has(flashId(card)))
    : mode === "all"
      ? flashcards
      : flashcards.filter((card) => card[0] === mode);
  flashDeck = shuffle(source);
  flashIndex = 0;
  flashFlipped = false;
  renderFlashcards();
}

function renderFlashcards() {
  if (!flashDeck.length) {
    $("#flashTheme").textContent = "Pile vide";
    $("#flashCounter").textContent = "0/0";
    $("#flashText").textContent = "Aucune carte dans ce filtre";
    $("#flashText").disabled = true;
  } else {
    const card = flashDeck[flashIndex];
    $("#flashText").disabled = false;
    $("#flashTheme").textContent = card[0];
    $("#flashCounter").textContent = `Carte ${flashIndex + 1}/${flashDeck.length}`;
    $("#flashText").textContent = flashFlipped ? card[2] : card[1];
  }

  const global = flashMasteryStats();
  $("#flashMastery").textContent = `${global.pct}%`;
  const missedIds = new Set(state.flash.missed);
  const missedInDeck = flashDeck.filter((card) => missedIds.has(flashId(card))).length;
  $("#flashStats").innerHTML = SUBJECTS.map((subject) => {
    const stats = flashMasteryStats(subject);
    return `
      <div class="mastery-item">
        ${subjectBadge(subject)}
        <strong>${stats.known}/${stats.total}</strong>
        <div class="meter"><span style="width:${stats.pct}%"></span></div>
      </div>
    `;
  }).join("") + `
    <div class="mastery-item">
      <span class="badge neutral">Pile ratées</span>
      <strong>${missedInDeck}</strong>
    </div>
  `;
}

function markFlash(known) {
  if (!flashDeck.length) return;
  const card = flashDeck[flashIndex];
  const id = flashId(card);
  if (known) {
    state.flash.known[id] = true;
    state.flash.missed = state.flash.missed.filter((missedId) => missedId !== id);
    state.flashSuccess += 1;
  } else {
    state.flash.known[id] = false;
    if (!state.flash.missed.includes(id)) state.flash.missed.push(id);
    state.flashFail += 1;
  }
  save();
  flashIndex = flashDeck.length ? (flashIndex + 1) % flashDeck.length : 0;
  flashFlipped = false;
  renderFlashcards();
  renderHome();
}

function loadCase() {
  const selected = Number($("#caseSelect").value || 0);
  const current = cases[selected];
  $("#caseTitle").textContent = current.title;
  $("#caseText").textContent = current.text;
  $("#caseSubjectBadge").textContent = inferSubject(current.title);
  $("#caseSubjectBadge").className = `badge ${subjectClass(inferSubject(current.title))}`;
  $("#caseStructure").innerHTML = current.structure.map((item) => `<li>${item}</li>`).join("");
  $("#caseAnswer").value = state.writing[selected]?.answer || "";
  renderWritingChecklist(current);
  $("#writingFeedback").hidden = true;
}

function inferSubject(title) {
  return SUBJECTS.find((subject) => title.includes(subject)) || "CEJM";
}

function renderWritingChecklist(current) {
  const structureChecks = current.structure.slice(0, 4).map((item, index) => ({
    id: `structure-${index}`,
    label: item,
    points: 1,
  }));
  const checks = [...WRITING_CRITERIA, ...structureChecks];
  $("#writingChecklist").innerHTML = checks.map((item) => `
    <label class="check-item">
      <input type="checkbox" data-writing-check="${item.id}" data-points="${item.points}">
      <span>${item.label}</span>
    </label>
  `).join("");
}

function evaluateWriting() {
  const selected = Number($("#caseSelect").value || 0);
  const answer = $("#caseAnswer").value.trim();
  state.writing[selected] = { answer, at: new Date().toISOString() };
  const checked = $$("[data-writing-check]:checked");
  const manualScore = checked.reduce((sum, input) => sum + Number(input.dataset.points), 0);
  const words = answer.split(/\s+/).filter(Boolean);
  const lengthBonus = words.length >= 150 ? 2 : words.length >= 100 ? 1 : 0;
  const rawScore = manualScore + lengthBonus;
  const score = clamp(Math.round((rawScore / 24) * 20), 0, 20);
  const missing = $$("[data-writing-check]:not(:checked)").slice(0, 5).map((input) => input.nextElementSibling.textContent);
  const automaticAdvice = getWritingAdvice(answer);
  const advice = missing.length
    ? missing.map((item) => `<li>${item}</li>`).join("")
    : "<li>Renforce maintenant la précision des exemples et la qualité de la conclusion.</li>";

  $("#writingFeedback").hidden = false;
  $("#writingFeedback").innerHTML = `
    <strong>Score estimé : ${score}/20</strong>
    <p>${words.length} mots détectés. ${words.length < 120 ? "Développement probablement trop court pour sécuriser une copie." : "Volume correct pour un entraînement court."}</p>
    <p>${score >= 14 ? "Copie exploitable. Vise davantage de précision pour sécuriser les points." : "Structure encore fragile. Priorise les éléments manquants ci-dessous."}</p>
    <ul>${advice}${automaticAdvice.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
  save();
}

function getWritingAdvice(answer) {
  const text = answer.toLowerCase();
  const advice = [];
  if (!/(cependant|toutefois|néanmoins|en revanche|mais)/.test(text)) {
    advice.push("Ajoute une nuance explicite : cependant, toutefois, limite, contre-argument.");
  }
  if (!/(donc|ainsi|par conséquent|cela montre|on peut en conclure)/.test(text)) {
    advice.push("Ajoute des liens logiques pour montrer le raisonnement.");
  }
  if (!/(exemple|document|cas|entreprise|client|corpus)/.test(text)) {
    advice.push("Ancre davantage ta réponse dans le corpus, le cas ou un exemple précis.");
  }
  return advice.slice(0, 3);
}

function clearWriting() {
  $("#caseAnswer").value = "";
  $$("[data-writing-check]").forEach((input) => { input.checked = false; });
  $("#writingFeedback").hidden = true;
}

function renderExamMode() {
  $("#examGrid").innerHTML = EXAM_SECTIONS.map((section) => `
    <article class="exam-card">
      ${subjectBadge(section.subject)}
      <h3>${section.title}</h3>
      <ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderMethods() {
  $("#methodContent").innerHTML = methods[currentMethod].map((method) => `
    <article class="method-card">
      <span class="badge neutral">${method[0]}</span>
      <h3>${method[1]}</h3>
    </article>
  `).join("");
}

function renderProgression() {
  const stats = taskStats();
  const mastery = flashMasteryStats();
  $("#doneTasks").textContent = `${stats.done}/${stats.total}`;
  $("#reviewedCoursesCount").textContent = `${Object.values(state.reviewedCourses).filter(Boolean).length}/${courses.length}`;
  $("#flashDone").textContent = mastery.known;
  $("#quizMistakes").textContent = state.quizMistakes.length;

  const weakBySubject = state.quizMistakes.reduce((acc, item) => {
    const subject = typeof item === "string" ? "À classer" : item.subject;
    acc[subject] = (acc[subject] || 0) + 1;
    return acc;
  }, {});
  $("#weakList").innerHTML = Object.entries(weakBySubject)
    .sort((a, b) => b[1] - a[1])
    .map(([subject, count]) => `<div class="compact-item"><strong>${subject}</strong><span>${count} erreur(s) enregistrée(s)</span></div>`)
    .join("") || "<p>Aucun point faible enregistré.</p>";

  $("#quizHistory").innerHTML = state.quizHistory
    .map((item) => `<div class="compact-item"><strong>${item.pct}% · ${item.subject}</strong><span>${item.score}/${item.total} · ${item.mode}</span></div>`)
    .join("") || "<p>Aucun quiz terminé.</p>";
}

function renderAll() {
  renderHome();
  if ($("#planning").classList.contains("active")) renderTimeline();
  if ($("#cours").classList.contains("active")) renderCourses();
  if ($("#glossaire").classList.contains("active")) renderGlossary();
  if ($("#progression").classList.contains("active")) renderProgression();
}

function bindEvents() {
  bindNavigation();
  $("#resetTasksBtn").addEventListener("click", () => {
    state.tasks = {};
    save();
    renderAll();
  });
  $("#resetAllBtn").addEventListener("click", () => {
    if (!confirm("Remettre à zéro toute la progression locale ?")) return;
    localStorage.removeItem(STORAGE);
    Object.assign(state, loadState());
    buildQuizSession();
    restartFlashcards();
    renderAll();
  });

  $("#courseSearch").addEventListener("input", renderCourses);
  $("#courseFilter").addEventListener("change", renderCourses);
  $("#glossarySearch").addEventListener("input", renderGlossary);
  $("#glossaryFilter").addEventListener("change", renderGlossary);

  $("#startQuizBtn").addEventListener("click", buildQuizSession);
  $("#nextQuizBtn").addEventListener("click", nextQuiz);
  $("#skipQuizBtn").addEventListener("click", () => answerQuiz(-1));
  $("#quizAnswers").addEventListener("click", (event) => {
    const button = event.target.closest("[data-answer]");
    if (button) answerQuiz(Number(button.dataset.answer));
  });

  $("#flashMode").addEventListener("change", restartFlashcards);
  $("#restartFlashBtn").addEventListener("click", restartFlashcards);
  $("#flashText").addEventListener("click", () => {
    flashFlipped = !flashFlipped;
    renderFlashcards();
  });
  $("#flipFlashBtn").addEventListener("click", () => {
    flashFlipped = !flashFlipped;
    renderFlashcards();
  });
  $("#unknownFlashBtn").addEventListener("click", () => markFlash(false));
  $("#knownFlashBtn").addEventListener("click", () => markFlash(true));

  $("#caseSelect").addEventListener("change", loadCase);
  $("#caseAnswer").addEventListener("input", () => {
    const selected = Number($("#caseSelect").value || 0);
    state.writing[selected] = { answer: $("#caseAnswer").value, at: new Date().toISOString() };
    save();
  });
  $("#evaluateWritingBtn").addEventListener("click", evaluateWriting);
  $("#clearWritingBtn").addEventListener("click", clearWriting);

  $$(".chip[data-method]").forEach((button) => {
    button.addEventListener("click", () => {
      currentMethod = button.dataset.method;
      $$(".chip[data-method]").forEach((chip) => chip.classList.toggle("active", chip === button));
      renderMethods();
    });
  });

  document.body.addEventListener("change", (event) => {
    const taskInput = event.target.closest("[data-task]");
    if (taskInput) {
      state.tasks[taskInput.dataset.task] = taskInput.checked;
      save();
      renderTimeline();
      renderHome();
    }
  });

  document.body.addEventListener("click", (event) => {
    const complete = event.target.closest("[data-complete-task]");
    if (complete) {
      state.tasks[complete.dataset.completeTask] = true;
      save();
      renderHome();
    }

    const review = event.target.closest("[data-review-course]");
    if (review) {
      state.reviewedCourses[review.dataset.reviewCourse] = !state.reviewedCourses[review.dataset.reviewCourse];
      save();
      renderCourses();
      renderHome();
    }
  });
}

function init() {
  $("#caseSelect").innerHTML = cases.map((item, index) => `<option value="${index}">${item.title}</option>`).join("");
  bindEvents();
  renderTimeline();
  renderCourses();
  renderGlossary();
  renderExamMode();
  renderMethods();
  buildQuizSession();
  restartFlashcards();
  loadCase();
  renderAll();
  if (new URL(window.location.href).searchParams.has("audit")) {
    setTimeout(runSelfAudit, 80);
  }
}

document.addEventListener("DOMContentLoaded", init);

function runSelfAudit() {
  const snapshot = localStorage.getItem(STORAGE);
  const report = {
    ok: true,
    checks: {},
    errors: [],
  };

  try {
    report.checks.counts = {
      courses: courses.length,
      glossary: glossary.length,
      quiz: quizBank.length,
      flashcards: flashcards.length,
      cases: cases.length,
    };

    activatePage("cours");
    $("#courseFilter").value = "Culture générale";
    $("#courseSearch").value = "essai";
    renderCourses();
    report.checks.courseSearch = {
      cards: $$("#courseList .course-card").length,
      containsEssay: $("#courseList").innerText.toLowerCase().includes("essai"),
    };

    activatePage("quiz");
    $("#quizSubject").value = "all";
    $("#quizMode").value = "exam";
    buildQuizSession();
    report.checks.quizStart = $("#quizCounter").innerText;
    $("#quizAnswers button")?.click();
    report.checks.quizFeedback = !$("#quizFeedback").hidden;
    $("#nextQuizBtn").click();
    report.checks.quizNext = $("#quizCounter").innerText;
    report.checks.quizCorrectionItems = $$("#quizCorrectionList .compact-item").length;

    activatePage("flashcards");
    const firstCard = $("#flashText").innerText;
    $("#flashText").click();
    const firstAnswer = $("#flashText").innerText;
    $("#unknownFlashBtn").click();
    $("#flashMode").value = "missed";
    restartFlashcards();
    report.checks.flashcards = {
      firstCardLength: firstCard.length,
      flipped: firstAnswer !== firstCard,
      missedDeck: $("#flashCounter").innerText,
    };

    activatePage("redaction");
    $("#caseSelect").value = String(Math.min(10, cases.length - 1));
    loadCase();
    $("#caseAnswer").value = "Le sujet pose une tension claire. Le corpus montre une relation affective, cependant il révèle aussi des pratiques d'exploitation. Cela montre que l'analyse doit rester nuancée. Par conséquent, il faut définir les notions, utiliser un exemple précis et conclure en répondant au sujet.";
    $$("[data-writing-check]").forEach((input, index) => { input.checked = index < 5; });
    evaluateWriting();
    report.checks.writingFeedback = $("#writingFeedback").innerText.includes("/20");

    activatePage("exam");
    report.checks.examMode = $("#examGrid").innerText.includes("Questions sur corpus") && $("#examGrid").innerText.includes("E5");
  } catch (error) {
    report.ok = false;
    report.errors.push(error.message);
  } finally {
    if (snapshot === null) localStorage.removeItem(STORAGE);
    else localStorage.setItem(STORAGE, snapshot);
  }

  const pre = document.createElement("pre");
  pre.id = "auditResults";
  pre.textContent = JSON.stringify(report, null, 2);
  document.body.appendChild(pre);
}
