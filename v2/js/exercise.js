// exercise.js — Moteur d'exercices guidés étape par étape
// Dépendances: store.js chargé avant

var ExerciseEngine = (function () {

  var _ex         = null;
  var _epreuve    = '';
  var _container  = null;
  var _currentStep = 0;
  var _revealed   = [];  // correction révélée pour chaque étape

  function _render() {
    var etape      = _ex.etapes[_currentStep];
    var totalSteps = _ex.etapes.length;
    var progress   = Store.getExercice(_ex.id);
    var isLast     = _currentStep === totalSteps - 1;

    // Points de navigation
    var stepsNav = '';
    for (var i = 0; i < totalSteps; i++) {
      var cls = 'step-dot';
      if (i < _currentStep)      cls += ' step-done';
      else if (i === _currentStep) cls += ' step-active';
      stepsNav += '<div class="' + cls + '" title="Étape ' + (i + 1) + '"></div>';
    }

    // Bloc correction (si révélée)
    var correctionHtml = '';
    if (_revealed[_currentStep]) {
      correctionHtml =
        '<div class="ex-correction">' +
          '<div class="ex-correction-header">Correction</div>' +
          '<div class="ex-correction-body">' + etape.correction.replace(/\n/g, '<br>') + '</div>' +
          '<div class="ex-conseil"><span class="conseil-icon">💡</span>' + etape.conseil + '</div>' +
        '</div>';
    }

    // Boutons d'action
    // La correction est toujours accessible mais optionnelle.
    // La navigation (précédente / suivante / terminer) est toujours visible.
    var actionsHtml =
      (!_revealed[_currentStep]
        ? '<button class="btn-correction btn-' + _epreuve + '" id="btn-voir-correction">Voir la correction</button>'
        : '') +
      (_currentStep > 0
        ? '<button class="btn-secondary" id="btn-prev">← Précédente</button>'
        : '') +
      (!isLast
        ? '<button class="btn-primary btn-' + _epreuve + '" id="btn-next">Étape suivante →</button>'
        : '<button class="btn-success" id="btn-finish">Terminer l\'exercice ✓</button>');

    _container.innerHTML =
      '<div class="ex-header">' +
        '<a href="#/' + _epreuve + '/methodes" class="btn-back">← Exercices</a>' +
        '<div class="ex-meta">' +
          '<span class="tag-epreuve tag-' + _epreuve + '">' + _epreuve.toUpperCase() + '</span>' +
          '<span class="ex-methodo">' + _ex.methodologie + '</span>' +
        '</div>' +
        '<h1 class="ex-titre">' + _ex.titre + '</h1>' +
        (progress.completions > 0
          ? '<div class="ex-completions">Complété ' + progress.completions + ' fois</div>'
          : '') +
      '</div>' +

      '<div class="ex-scenario">' +
        '<div class="ex-scenario-label">Mise en situation</div>' +
        '<div class="ex-scenario-body">' + _ex.scenario.replace(/\n/g, '<br>') + '</div>' +
      '</div>' +

      '<div class="ex-steps-nav">' + stepsNav + '</div>' +

      '<div class="ex-step">' +
        '<div class="ex-step-header">' +
          '<span class="ex-step-num btn-' + _epreuve + '">Étape ' + etape.numero + '</span>' +
          '<span class="ex-step-label">' + etape.label + '</span>' +
        '</div>' +
        '<div class="ex-step-instruction">' + etape.instruction + '</div>' +
        '<textarea class="ex-textarea" id="ex-textarea" placeholder="' + etape.placeholder + '" rows="5"></textarea>' +
        correctionHtml +
        '<div class="ex-step-actions">' + actionsHtml + '</div>' +
      '</div>';

    // Restaurer le texte saisi si on navigue entre les étapes
    var savedText = sessionStorage.getItem('ex_' + _ex.id + '_step_' + _currentStep);
    if (savedText) {
      document.getElementById('ex-textarea').value = savedText;
    }

    // Sauvegarder à chaque frappe
    document.getElementById('ex-textarea').addEventListener('input', function () {
      sessionStorage.setItem('ex_' + _ex.id + '_step_' + _currentStep, this.value);
    });

    // Voir la correction (optionnel)
    var btnCorrection = document.getElementById('btn-voir-correction');
    if (btnCorrection) {
      btnCorrection.addEventListener('click', function () {
        _revealed[_currentStep] = true;
        _render();
      });
    }

    // Précédente
    var btnPrev = document.getElementById('btn-prev');
    if (btnPrev) {
      btnPrev.addEventListener('click', function () {
        _currentStep--;
        _render();
        window.scrollTo(0, 0);
      });
    }

    // Suivante (toujours accessible, correction non requise)
    var btnNext = document.getElementById('btn-next');
    if (btnNext) {
      btnNext.addEventListener('click', function () {
        _currentStep++;
        _render();
        window.scrollTo(0, 0);
      });
    }

    // Terminer
    var btnFinish = document.getElementById('btn-finish');
    if (btnFinish) {
      btnFinish.addEventListener('click', function () {
        Store.completeExercice(_ex.id);
        _renderComplete();
      });
    }
  }

  function _renderComplete() {
    var progress = Store.getExercice(_ex.id);
    _container.innerHTML =
      '<div class="ex-complete">' +
        '<div class="ex-complete-icon btn-' + _epreuve + '">✓</div>' +
        '<h2>Exercice complété !</h2>' +
        '<p class="ex-complete-titre">' + _ex.titre + '</p>' +
        '<p>Complété ' + progress.completions + ' fois au total</p>' +
        '<div class="ex-complete-actions">' +
          '<button class="btn-secondary" id="btn-retry-ex">Recommencer</button>' +
          '<a href="#/' + _epreuve + '/methodes" class="btn-primary btn-' + _epreuve + '">Autres exercices</a>' +
        '</div>' +
      '</div>';

    document.getElementById('btn-retry-ex').addEventListener('click', function () {
      ExerciseEngine.start(_ex, _container, _epreuve);
    });

    window.scrollTo(0, 0);
  }

  return {
    start: function (ex, container, epreuve) {
      _ex          = ex;
      _container   = container;
      _epreuve     = epreuve;
      _currentStep = 0;
      _revealed    = ex.etapes.map(function () { return false; });
      _render();
    }
  };

})();
