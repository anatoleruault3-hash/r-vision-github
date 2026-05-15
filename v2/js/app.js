// app.js — Routeur hash + renderers de vues
// Dépendances: store.js, flashcard.js, exercise.js + tous les fichiers data

var App = (function () {

  var _root = null;

  var EPREUVES = {
    e1: {
      code: 'e1',
      label: 'E1 — CGE',
      fullLabel: 'Culture Générale et Expression',
      color: 'e1',
      notions: function () { return typeof E1_NOTIONS !== 'undefined' ? E1_NOTIONS : []; },
      methodes: function () { return typeof E1_METHODES !== 'undefined' ? E1_METHODES : []; }
    },
    e3: {
      code: 'e3',
      label: 'E3 — CEJM',
      fullLabel: 'Culture Économique, Juridique et Managériale',
      color: 'e3',
      notions: function () { return typeof E3_NOTIONS !== 'undefined' ? E3_NOTIONS : []; },
      methodes: function () { return typeof E3_METHODES !== 'undefined' ? E3_METHODES : []; }
    },
    e5: {
      code: 'e5',
      label: 'E5 — Relation client',
      fullLabel: 'Relation client à distance et digitalisation',
      color: 'e5',
      notions: function () { return typeof E5_NOTIONS !== 'undefined' ? E5_NOTIONS : []; },
      methodes: function () { return typeof E5_METHODES !== 'undefined' ? E5_METHODES : []; }
    }
  };

  // --- Utilitaires ---

  function _setRoot(html) {
    _root.innerHTML = html;
  }

  function _pct(val, total) {
    if (!total) return 0;
    return Math.round((val / total) * 100);
  }

  function _progressBar(val, total, colorClass) {
    var pct = _pct(val, total);
    return '<div class="progress-bar"><div class="progress-fill ' + colorClass + '" style="width:' + pct + '%"></div></div>';
  }

  // --- Vue: Accueil ---

  function _renderHome() {
    var global = Store.getGlobalStats();

    var epreuveCards = '';
    Object.keys(EPREUVES).forEach(function (key) {
      var ep = EPREUVES[key];
      var stats = Store.getStats(key);
      epreuveCards +=
        '<div class="epreuve-card epreuve-card-' + key + '">' +
          '<div class="epreuve-card-top">' +
            '<span class="badge-' + key + '">' + key.toUpperCase() + '</span>' +
            '<h2>' + ep.label + '</h2>' +
          '</div>' +
          '<p class="epreuve-full-label">' + ep.fullLabel + '</p>' +
          '<div class="epreuve-mini-stats">' +
            '<div class="mini-stat">' +
              '<strong>' + stats.maitrisees + ' / ' + stats.totalCartes + '</strong>' +
              'notions maîtrisées' +
              _progressBar(stats.maitrisees, stats.totalCartes, 'fill-' + key) +
            '</div>' +
            '<div class="mini-stat">' +
              '<strong>' + stats.completedEx + ' / ' + stats.totalEx + '</strong>' +
              'exercices complétés' +
              _progressBar(stats.completedEx, stats.totalEx, 'fill-' + key) +
            '</div>' +
          '</div>' +
          '<div class="epreuve-actions">' +
            '<a href="#/' + key + '/notions" class="btn-primary btn-' + key + '">Flashcards</a>' +
            '<a href="#/' + key + '/methodes" class="btn-secondary">Exercices</a>' +
          '</div>' +
        '</div>';
    });

    _setRoot(
      '<header class="home-header">' +
        '<h1 class="app-title">Révision BTS NDRC</h1>' +
        '<p class="app-subtitle">3 épreuves · Flashcards + Exercices guidés</p>' +
      '</header>' +

      '<div class="global-stats">' +
        '<div class="global-stat">' +
          '<span class="global-num">' + global.maitrisees + ' / ' + global.totalCartes + '</span>' +
          '<span class="global-lbl">Notions maîtrisées</span>' +
          _progressBar(global.maitrisees, global.totalCartes, 'fill-global') +
        '</div>' +
        '<div class="global-stat">' +
          '<span class="global-num">' + global.completedEx + ' / ' + global.totalEx + '</span>' +
          '<span class="global-lbl">Exercices complétés</span>' +
          _progressBar(global.completedEx, global.totalEx, 'fill-global') +
        '</div>' +
      '</div>' +

      '<div class="epreuve-grid">' + epreuveCards + '</div>' +

      '<div class="home-reset">' +
        '<button class="btn-reset" id="btn-reset">Réinitialiser la progression</button>' +
      '</div>'
    );

    document.getElementById('btn-reset').addEventListener('click', function () {
      if (confirm('Réinitialiser toute la progression ? Cette action est irréversible.')) {
        Store.reset();
        _renderHome();
      }
    });
  }

  // --- Vue: Hub épreuve ---

  function _renderEpreuve(code) {
    var ep = EPREUVES[code];
    if (!ep) { _renderHome(); return; }

    var stats = Store.getStats(code);
    var notions = ep.notions();

    // Grouper par domaine pour la preview
    var domaines = {};
    notions.forEach(function (card) {
      if (!domaines[card.domaine]) domaines[card.domaine] = { total: 0, maitrisees: 0 };
      domaines[card.domaine].total++;
      var p = Store.getCard(card.id);
      if (p.niveau === 3) domaines[card.domaine].maitrisees++;
    });

    var domainesHtml = '';
    Object.keys(domaines).forEach(function (dom) {
      var d = domaines[dom];
      domainesHtml +=
        '<div class="domaine-row">' +
          '<span class="domaine-name">' + dom + '</span>' +
          '<span class="domaine-count">' + d.maitrisees + ' / ' + d.total + '</span>' +
          _progressBar(d.maitrisees, d.total, 'fill-' + code) +
        '</div>';
    });

    _setRoot(
      '<div class="ep-header ep-header-' + code + '">' +
        '<a href="#/" class="btn-back">← Accueil</a>' +
        '<div class="ep-badge badge-' + code + '">' + code.toUpperCase() + '</div>' +
        '<h1>' + ep.label + '</h1>' +
        '<p>' + ep.fullLabel + '</p>' +
      '</div>' +

      '<div class="ep-modes">' +

        '<div class="mode-card">' +
          '<div class="mode-icon">🃏</div>' +
          '<h2>Notions théoriques</h2>' +
          '<p>Flashcards avec progression adaptative</p>' +
          '<div class="mode-stats">' +
            '<div>' + domainesHtml + '</div>' +
            '<div class="mode-total">' + stats.maitrisees + ' / ' + stats.totalCartes + ' maîtrisées</div>' +
          '</div>' +
          '<a href="#/' + code + '/notions" class="btn-primary btn-' + code + ' btn-full">Commencer les flashcards</a>' +
        '</div>' +

        '<div class="mode-card">' +
          '<div class="mode-icon">📝</div>' +
          '<h2>Méthodologies</h2>' +
          '<p>Exercices guidés étape par étape</p>' +
          '<div class="mode-stats">' +
            '<div class="mode-total">' + stats.completedEx + ' / ' + stats.totalEx + ' exercices complétés</div>' +
            _progressBar(stats.completedEx, stats.totalEx, 'fill-' + code) +
          '</div>' +
          '<a href="#/' + code + '/methodes" class="btn-primary btn-' + code + ' btn-full">Voir les exercices</a>' +
        '</div>' +

      '</div>'
    );
  }

  // --- Vue: Session flashcards ---

  function _renderNotions(code) {
    var ep = EPREUVES[code];
    if (!ep) { _renderHome(); return; }

    var notions = ep.notions();
    if (!notions.length) {
      _setRoot('<div class="empty-state">Aucune notion disponible pour ' + code.toUpperCase() + '</div>');
      return;
    }

    _root.innerHTML = '<div id="fc-container"></div>';
    FlashcardEngine.start(notions, document.getElementById('fc-container'), code);
  }

  // --- Vue: Liste des exercices ---

  function _renderMethodesList(code) {
    var ep = EPREUVES[code];
    if (!ep) { _renderHome(); return; }

    var methodes = ep.methodes();

    var listHtml = '';
    methodes.forEach(function (ex) {
      var progress = Store.getExercice(ex.id);
      var done = progress.completions > 0;
      listHtml +=
        '<a href="#/' + code + '/methodes/' + ex.id + '" class="ex-list-item ' + (done ? 'ex-done' : '') + '">' +
          '<div class="ex-list-left">' +
            '<div class="ex-list-check ' + (done ? 'check-done btn-' + code : 'check-empty') + '">' + (done ? '✓' : '') + '</div>' +
            '<div class="ex-list-info">' +
              '<div class="ex-list-titre">' + ex.titre + '</div>' +
              '<div class="ex-list-meta">' +
                '<span class="ex-methodo-tag">' + ex.methodologie + '</span>' +
                '<span class="ex-steps-count">' + ex.etapes.length + ' étapes</span>' +
                (done ? '<span class="ex-completions-tag">' + progress.completions + '× complété</span>' : '') +
              '</div>' +
            '</div>' +
          '</div>' +
          '<span class="ex-list-arrow">→</span>' +
        '</a>';
    });

    _setRoot(
      '<div class="ep-header ep-header-' + code + '">' +
        '<a href="#/" class="btn-back">← Accueil</a>' +
        '<h1>Méthodologies · ' + ep.label + '</h1>' +
        '<p>' + methodes.length + ' exercices guidés</p>' +
      '</div>' +
      '<div class="ex-list">' + listHtml + '</div>'
    );
  }

  // --- Vue: Exercice individuel ---

  function _renderExercice(code, exId) {
    var ep = EPREUVES[code];
    if (!ep) { _renderHome(); return; }

    var methodes = ep.methodes();
    var ex = null;
    for (var i = 0; i < methodes.length; i++) {
      if (methodes[i].id === exId) { ex = methodes[i]; break; }
    }

    if (!ex) {
      window.location.hash = '#/' + code + '/methodes';
      return;
    }

    _root.innerHTML = '<div id="ex-container"></div>';
    ExerciseEngine.start(ex, document.getElementById('ex-container'), code);
  }

  // --- Routeur ---

  function _route() {
    var hash = window.location.hash || '#/';
    // Supprimer le # initial
    var path = hash.replace(/^#/, '') || '/';
    var parts = path.split('/').filter(function (p) { return p !== ''; });

    // #/ → accueil
    if (parts.length === 0) {
      _renderHome();
      return;
    }

    var code = parts[0]; // e1 | e3 | e5

    if (!EPREUVES[code]) {
      _renderHome();
      return;
    }

    if (parts.length === 1) {
      // #/e1 → hub épreuve
      _renderEpreuve(code);
      return;
    }

    var section = parts[1]; // notions | methodes

    if (section === 'notions') {
      _renderNotions(code);
      return;
    }

    if (section === 'methodes') {
      if (parts.length === 2) {
        _renderMethodesList(code);
      } else {
        // #/e1/methodes/e1-methode-xxx
        _renderExercice(code, parts[2]);
      }
      return;
    }

    _renderHome();
  }

  // --- Init ---

  return {
    init: function () {
      _root = document.getElementById('app');
      window.addEventListener('hashchange', function () {
        _route();
        window.scrollTo(0, 0);
      });
      _route();
    }
  };

})();

// Lancement au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  App.init();
});
