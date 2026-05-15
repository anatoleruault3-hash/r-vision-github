// quiz.js — Moteur de quiz QCM généré depuis les flashcards
// Dépendances: store.js, flashcard.js chargés avant

var QuizEngine = (function () {

  var _cards       = [];
  var _epreuve     = '';
  var _container   = null;
  var _questions   = [];
  var _currentIndex = 0;
  var _results     = []; // { card, correct, chosenIndex, correctIndex }
  var _timerInterval = null;
  var _timeLeft    = 0;
  var _keyHandler  = null;

  // --- Utilitaires ---

  function _shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // Extraire la première phrase d'une réponse (pour les options QCM)
  function _firstSentence(text) {
    text = text.replace(/^\d+\.\s*/, ''); // supprimer préfixe numéroté
    var m = text.match(/^[^.!?]+[.!?]/);
    var result = m ? m[0].trim() : text.trim();
    if (result.length > 160) result = result.slice(0, 157) + '…';
    return result;
  }

  // --- Génération des questions QCM ---

  function _buildQuestions(pool, count) {
    var cards = _shuffle(pool.slice());
    if (count && cards.length > count) cards = cards.slice(0, count);

    return cards.map(function (card) {
      // Leurres : autres cartes, même domaine en priorité
      var sameDomain = pool.filter(function (c) {
        return c.id !== card.id && c.domaine === card.domaine;
      });
      var otherDomain = pool.filter(function (c) {
        return c.id !== card.id && c.domaine !== card.domaine;
      });
      var candidates = _shuffle(sameDomain).concat(_shuffle(otherDomain));
      var leurres = candidates.slice(0, 3).map(function (c) {
        return _firstSentence(c.reponse);
      });

      if (leurres.length < 3) return null;

      var correctText = _firstSentence(card.reponse);
      var options = _shuffle([correctText].concat(leurres));
      var correctIndex = options.indexOf(correctText);

      return { card: card, options: options, correctIndex: correctIndex };
    }).filter(Boolean);
  }

  function _buildByDomaine(domaine) {
    var filtered = _cards.filter(function (c) { return c.domaine === domaine; });
    return _buildQuestions(filtered, null);
  }

  // --- Sélection du mode ---

  function _renderModeSelect() {
    _cleanup();

    var domaines = [];
    var seen = {};
    _cards.forEach(function (c) {
      if (!seen[c.domaine]) { seen[c.domaine] = true; domaines.push(c.domaine); }
    });

    var domainesBtns = domaines.map(function (d) {
      var count = _cards.filter(function (c) { return c.domaine === d; }).length;
      return '<button class="quiz-mode-btn" data-domaine="' + d + '">' +
        '<span class="quiz-mode-icon">📌</span>' +
        '<div class="quiz-mode-info">' +
          '<span class="quiz-mode-name">' + d.charAt(0).toUpperCase() + d.slice(1) + '</span>' +
          '<span class="quiz-mode-count">' + count + ' questions</span>' +
        '</div>' +
      '</button>';
    }).join('');

    _container.innerHTML =
      '<div class="quiz-mode-screen">' +
        '<div class="ep-header ep-header-' + _epreuve + '">' +
          '<a href="#/' + _epreuve + '" class="btn-back">← ' + _epreuve.toUpperCase() + '</a>' +
          '<h1>Quiz · ' + _epreuve.toUpperCase() + '</h1>' +
          '<p>Choisir un mode</p>' +
        '</div>' +
        '<div class="quiz-modes">' +
          '<button class="quiz-mode-btn quiz-mode-featured" id="mode-eclair">' +
            '<span class="quiz-mode-icon">⚡</span>' +
            '<div class="quiz-mode-info">' +
              '<span class="quiz-mode-name">Éclair</span>' +
              '<span class="quiz-mode-count">10 questions · sans limite de temps</span>' +
            '</div>' +
          '</button>' +
          '<button class="quiz-mode-btn quiz-mode-featured" id="mode-examen">' +
            '<span class="quiz-mode-icon">🎓</span>' +
            '<div class="quiz-mode-info">' +
              '<span class="quiz-mode-name">Examen</span>' +
              '<span class="quiz-mode-count">20 questions · 10 minutes</span>' +
            '</div>' +
          '</button>' +
          '<div class="quiz-domaines-title">Par domaine</div>' +
          domainesBtns +
        '</div>' +
      '</div>';

    document.getElementById('mode-eclair').addEventListener('click', function () {
      _questions = _buildQuestions(_cards, 10);
      _startQuiz(false);
    });
    document.getElementById('mode-examen').addEventListener('click', function () {
      _questions = _buildQuestions(_cards, 20);
      _startQuiz(true);
    });
    _container.querySelectorAll('[data-domaine]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        _questions = _buildByDomaine(btn.getAttribute('data-domaine'));
        _startQuiz(false);
      });
    });
  }

  // --- Démarrer le quiz ---

  function _startQuiz(withTimer) {
    _currentIndex = 0;
    _results = [];

    if (!_questions.length) {
      _container.innerHTML = '<div class="empty-state">Pas assez de cartes pour générer un quiz.</div>';
      return;
    }

    if (withTimer) {
      _timeLeft = 600;
      _timerInterval = setInterval(function () {
        _timeLeft--;
        var el = document.getElementById('quiz-timer');
        if (!el) { clearInterval(_timerInterval); _timerInterval = null; return; }
        var min = Math.floor(_timeLeft / 60);
        var sec = _timeLeft % 60;
        el.textContent = min + ':' + (sec < 10 ? '0' : '') + sec;
        if (_timeLeft <= 60) el.classList.add('quiz-timer-urgent');
        if (_timeLeft <= 0) { clearInterval(_timerInterval); _timerInterval = null; _renderScore(); }
      }, 1000);
    }

    _renderQuestion();
  }

  // --- Question ---

  function _renderQuestion() {
    if (_currentIndex >= _questions.length) { _renderScore(); return; }

    var q = _questions[_currentIndex];
    var pct = Math.round((_currentIndex / _questions.length) * 100);
    var letters = ['A', 'B', 'C', 'D'];

    var timerHtml = (_timeLeft > 0)
      ? '<div class="quiz-timer" id="quiz-timer">' +
          Math.floor(_timeLeft / 60) + ':' + (_timeLeft % 60 < 10 ? '0' : '') + (_timeLeft % 60) +
        '</div>'
      : '';

    var optionsHtml = q.options.map(function (opt, i) {
      return '<button class="quiz-option" data-index="' + i + '">' +
        '<span class="quiz-option-letter">' + letters[i] + '</span>' +
        '<span class="quiz-option-text">' + opt + '</span>' +
      '</button>';
    }).join('');

    _container.innerHTML =
      '<div class="quiz-header">' +
        '<div class="quiz-progress-row">' +
          '<span class="fc-counter">' + (_currentIndex + 1) + ' / ' + _questions.length + '</span>' +
          timerHtml +
          '<span class="fc-domaine tag-' + _epreuve + '">' + q.card.domaine + '</span>' +
        '</div>' +
        '<div class="fc-progress-bar"><div class="fc-progress-fill" style="width:' + pct + '%"></div></div>' +
      '</div>' +

      '<div class="quiz-question-card">' +
        '<div class="fc-categorie">' + q.card.categorie + '</div>' +
        '<div class="quiz-question-text">' + q.card.question + '</div>' +
      '</div>' +

      '<div class="quiz-options" id="quiz-options">' + optionsHtml + '</div>' +

      '<div class="fc-keyboard-hint">A · B · C · D = répondre</div>';

    _container.querySelectorAll('.quiz-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        _answer(parseInt(btn.getAttribute('data-index')));
      });
    });

    _bindKeyboard();
  }

  function _answer(chosenIndex) {
    _unbindKeyboard();
    var q = _questions[_currentIndex];
    var correct = chosenIndex === q.correctIndex;

    _results.push({ card: q.card, correct: correct, chosenIndex: chosenIndex, correctIndex: q.correctIndex });

    // Feedback visuel sur les boutons
    _container.querySelectorAll('.quiz-option').forEach(function (btn, i) {
      btn.disabled = true;
      if (i === q.correctIndex) btn.classList.add('quiz-option-correct');
      else if (i === chosenIndex && !correct) btn.classList.add('quiz-option-wrong');
    });

    // Bouton suivant
    var nextBtn = document.createElement('button');
    nextBtn.className = 'btn-primary btn-' + _epreuve + ' quiz-next-btn';
    nextBtn.textContent = (_currentIndex + 1 >= _questions.length) ? 'Voir le score →' : 'Question suivante →';
    document.getElementById('quiz-options').appendChild(nextBtn);

    nextBtn.addEventListener('click', function () {
      _currentIndex++;
      _renderQuestion();
    });

    // Entrée = suivant
    var enterHandler = function (e) {
      if (e.key === 'Enter') { document.removeEventListener('keydown', enterHandler); nextBtn.click(); }
    };
    document.addEventListener('keydown', enterHandler);
  }

  // --- Score ---

  function _renderScore() {
    _cleanup();

    var total  = _results.length;
    var nbOk   = _results.filter(function (r) { return r.correct; }).length;
    var pct    = total ? Math.round((nbOk / total) * 100) : 0;
    var errors = _results.filter(function (r) { return !r.correct; });
    var grade  = pct >= 80 ? 'quiz-grade-great' : pct >= 50 ? 'quiz-grade-ok' : 'quiz-grade-low';

    var errorsHtml = errors.map(function (r) {
      return '<div class="quiz-recap-item">' +
        '<div class="quiz-recap-q">' + r.card.question + '</div>' +
        '<div class="quiz-recap-a">✓ ' + _firstSentence(r.card.reponse) + '</div>' +
      '</div>';
    }).join('');

    _container.innerHTML =
      '<div class="quiz-score-screen">' +
        '<div class="quiz-score-circle ' + grade + '">' +
          '<span class="quiz-score-num">' + nbOk + '</span>' +
          '<span class="quiz-score-denom">/ ' + total + '</span>' +
        '</div>' +
        '<div class="quiz-score-pct">' + pct + '\u00a0%</div>' +
        '<div class="fc-progress-bar" style="margin: 12px 0 24px">' +
          '<div class="fc-progress-fill" style="width:' + pct + '%"></div>' +
        '</div>' +

        (errors.length ?
          '<div class="quiz-recap-section">' +
            '<div class="quiz-recap-title">À retravailler · ' + errors.length + ' erreur' + (errors.length > 1 ? 's' : '') + '</div>' +
            errorsHtml +
          '</div>'
        : '<div class="quiz-parfait">Parfait — aucune erreur !</div>') +

        '<div class="quiz-score-actions">' +
          (errors.length ?
            '<button class="btn-secondary" id="btn-revoir">Revoir les erreurs en flashcards</button>'
          : '') +
          '<button class="btn-secondary" id="btn-replay">Rejouer</button>' +
          '<a href="#/' + _epreuve + '" class="btn-primary btn-' + _epreuve + '">Retour</a>' +
        '</div>' +
      '</div>';

    if (errors.length) {
      document.getElementById('btn-revoir').addEventListener('click', function () {
        var errorCards = errors.map(function (r) { return r.card; });
        _container.innerHTML = '<div id="fc-container"></div>';
        FlashcardEngine.start(errorCards, document.getElementById('fc-container'), _epreuve);
      });
    }

    document.getElementById('btn-replay').addEventListener('click', function () {
      _renderModeSelect();
    });
  }

  // --- Clavier ---

  function _bindKeyboard() {
    _unbindKeyboard();
    _keyHandler = function (e) {
      var map = { 'a': 0, 'A': 0, 'b': 1, 'B': 1, 'c': 2, 'C': 2, 'd': 3, 'D': 3 };
      if (map[e.key] !== undefined) {
        var btns = _container.querySelectorAll('.quiz-option:not([disabled])');
        if (btns.length) _answer(map[e.key]);
      }
    };
    document.addEventListener('keydown', _keyHandler);
  }

  function _unbindKeyboard() {
    if (_keyHandler) { document.removeEventListener('keydown', _keyHandler); _keyHandler = null; }
  }

  function _cleanup() {
    _unbindKeyboard();
    if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
    _timeLeft = 0;
  }

  // --- API publique ---

  return {
    start: function (cards, container, epreuve) {
      _cleanup();
      _cards     = cards;
      _container = container;
      _epreuve   = epreuve;
      _questions = [];
      _results   = [];
      _renderModeSelect();
    }
  };

})();
