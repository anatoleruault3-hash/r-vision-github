// flashcard.js — Moteur de flashcards avec shuffle pondéré et raccourcis clavier
// Dépendances: store.js chargé avant

var FlashcardEngine = (function () {

  var _cards       = [];
  var _deck        = [];
  var _currentIndex = 0;
  var _onComplete  = null;
  var _epreuve     = '';
  var _container   = null;
  var _keyHandler  = null;

  // Pondération par niveau :
  // 0 (jamais vu)  → poids 4 (apparaît 4× dans le deck)
  // 1 (difficile)  → poids 3
  // 2 (bien)       → poids 1
  // 3 (maîtrisé)  → exclu sauf 1 session sur 4
  function _buildDeck(cards, sessionCount) {
    var deck = [];
    var session = sessionCount || 1;

    cards.forEach(function (card) {
      var progress = Store.getCard(card.id);
      var niveau   = progress.niveau;

      if (niveau === 3) {
        // Cartes maîtrisées : seulement en session 4, 8, 12…
        if (session % 4 !== 0) return;
        deck.push(card);
        return;
      }

      var poids = niveau === 0 ? 4 : niveau === 1 ? 3 : 1;
      for (var i = 0; i < poids; i++) {
        deck.push(card);
      }
    });

    // Fallback : si tout est maîtrisé et pas session 4, inclure toutes les cartes
    if (deck.length === 0) {
      cards.forEach(function (card) { deck.push(card); });
    }

    return _shuffle(deck);
  }

  // Fisher-Yates + suppression des doublons consécutifs (pas de déduplication totale)
  function _shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    // Éviter deux mêmes cartes consécutives (confort de révision)
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i].id === a[i + 1].id) {
        for (var j = i + 2; j < a.length; j++) {
          if (a[j].id !== a[i].id) {
            var tmp = a[i + 1]; a[i + 1] = a[j]; a[j] = tmp;
            break;
          }
        }
      }
    }
    return a;
  }

  // --- Gestion du clavier ---

  function _bindKeyboard() {
    _unbindKeyboard();
    _keyHandler = function (e) {
      // Espace ou Entrée → retourner la carte (face avant uniquement)
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        var card = document.getElementById('fc-card');
        if (card && !card.classList.contains('flipped')) {
          card.classList.add('flipped');
        }
        return;
      }
      // 1 / 2 / 3 → noter (seulement si la carte est retournée)
      var card = document.getElementById('fc-card');
      if (!card || !card.classList.contains('flipped')) return;
      if (e.key === '1') { var b = document.querySelector('.btn-rate[data-niveau="1"]'); if (b) b.click(); }
      if (e.key === '2') { var b = document.querySelector('.btn-rate[data-niveau="2"]'); if (b) b.click(); }
      if (e.key === '3') { var b = document.querySelector('.btn-rate[data-niveau="3"]'); if (b) b.click(); }
    };
    document.addEventListener('keydown', _keyHandler);
  }

  function _unbindKeyboard() {
    if (_keyHandler) {
      document.removeEventListener('keydown', _keyHandler);
      _keyHandler = null;
    }
  }

  // --- Rendu d'une carte ---

  function _render() {
    var card     = _deck[_currentIndex];
    var progress = Store.getCard(card.id);
    var niveauLabel = ['Jamais vu', 'Difficile', 'Bien', 'Maîtrisé'][progress.niveau];
    var niveauClass = ['niveau-0', 'niveau-1', 'niveau-2', 'niveau-3'][progress.niveau];
    var pct = _deck.length ? Math.round((_currentIndex / _deck.length) * 100) : 0;

    _container.innerHTML =
      '<div class="fc-session-header">' +
        '<a href="#/' + _epreuve + '" class="btn-back">← ' + _epreuve.toUpperCase() + '</a>' +
        '<div class="fc-progress-text" style="margin-top:12px">' +
          '<span class="fc-counter">' + (_currentIndex + 1) + ' / ' + _deck.length + '</span>' +
          '<span class="fc-domaine tag-' + _epreuve + '">' + card.domaine + '</span>' +
        '</div>' +
        '<div class="fc-progress-bar"><div class="fc-progress-fill" style="width:' + pct + '%"></div></div>' +
      '</div>' +

      '<div class="fc-card-wrap">' +
        '<div class="fc-card" id="fc-card">' +
          '<div class="fc-face fc-front">' +
            (card.auteur ? '<div class="fc-auteur">' + card.auteur + '</div>' : '') +
            '<div class="fc-categorie">' + card.categorie + '</div>' +
            '<div class="fc-question">' + card.question + '</div>' +
            '<button class="btn-flip btn-' + _epreuve + '" id="btn-flip">Retourner</button>' +
          '</div>' +
          '<div class="fc-face fc-back">' +
            '<div class="fc-categorie">' + card.categorie + '</div>' +
            '<div class="fc-reponse">' + card.reponse + '</div>' +
            '<div class="fc-rating">' +
              '<span class="fc-rating-label">Comment tu t\'en es sorti ?</span>' +
              '<div class="fc-rating-btns">' +
                '<button class="btn-rate btn-difficile" data-niveau="1"><kbd>1</kbd> Difficile</button>' +
                '<button class="btn-rate btn-bien"      data-niveau="2"><kbd>2</kbd> Bien</button>' +
                '<button class="btn-rate btn-maitrise"  data-niveau="3"><kbd>3</kbd> Maîtrisé</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="fc-niveau-indicator ' + niveauClass + '">' + niveauLabel + '</div>' +
      '<div class="fc-keyboard-hint">Espace = retourner · 1 / 2 / 3 = noter</div>';

    // Flip au clic sur le bouton
    document.getElementById('btn-flip').addEventListener('click', function () {
      document.getElementById('fc-card').classList.add('flipped');
    });

    // Flip au clic sur la face avant
    _container.querySelector('.fc-front').addEventListener('click', function (e) {
      if (e.target.id === 'btn-flip') return;
      document.getElementById('fc-card').classList.add('flipped');
    });

    // Notation
    _container.querySelectorAll('.btn-rate').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var niveau = parseInt(btn.getAttribute('data-niveau'));
        Store.updateCard(card.id, niveau);
        _currentIndex++;
        if (_currentIndex >= _deck.length) {
          _unbindKeyboard();
          _renderComplete();
        } else {
          _render();
        }
      });
    });

    _bindKeyboard();
  }

  // --- Écran de fin de session ---

  function _renderComplete() {
    var stats = Store.getStats(_epreuve);

    _container.innerHTML =
      '<div class="fc-complete">' +
        '<div class="fc-complete-icon btn-' + _epreuve + '">✓</div>' +
        '<h2>Session terminée !</h2>' +
        '<p>' + _deck.length + ' carte' + (_deck.length > 1 ? 's' : '') + ' révisée' + (_deck.length > 1 ? 's' : '') + '</p>' +
        '<div class="fc-complete-stats">' +
          '<div class="stat-item">' +
            '<span class="stat-val niveau-3">' + stats.maitrisees + '</span>' +
            '<span class="stat-lbl">Maîtrisées</span>' +
          '</div>' +
          '<div class="stat-item">' +
            '<span class="stat-val">' + stats.vues + ' / ' + stats.totalCartes + '</span>' +
            '<span class="stat-lbl">Vues</span>' +
          '</div>' +
        '</div>' +
        '<div class="fc-complete-actions">' +
          '<button class="btn-secondary" id="btn-retry">Recommencer</button>' +
          '<a href="#/' + _epreuve + '" class="btn-primary btn-' + _epreuve + '">Retour</a>' +
        '</div>' +
      '</div>';

    document.getElementById('btn-retry').addEventListener('click', function () {
      FlashcardEngine.start(_cards, _container, _epreuve, _onComplete);
    });

    if (_onComplete) _onComplete(stats);
  }

  // --- API publique ---

  return {
    start: function (cards, container, epreuve, onComplete) {
      _unbindKeyboard();
      _cards        = cards;
      _container    = container;
      _epreuve      = epreuve;
      _onComplete   = onComplete || null;
      _currentIndex = 0;

      var sessionCount = Store.getSession(epreuve);
      Store.incrementSession(epreuve);

      _deck = _buildDeck(cards, sessionCount);

      if (!_deck.length) {
        container.innerHTML = '<div class="empty-state">Aucune carte disponible.</div>';
        return;
      }

      _render();
    },

    destroy: function () {
      _unbindKeyboard();
    }
  };

})();
