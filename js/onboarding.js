// onboarding.js — Modal prénom, guide interactif, widget "ils charbonnent"
// Dépendance: gun.js chargé avant (CDN)

var Onboarding = (function () {

  var _nom = null;
  var _gun = null;
  var GUN_KEY = 'revision-ndrc-v2-noms-2025';

  // --- Prénom ---

  function _getNom() {
    return localStorage.getItem('ndrc_nom') || null;
  }

  function _setNom(val) {
    _nom = val;
    localStorage.setItem('ndrc_nom', val);
  }

  // --- GUN.js (P2P, aucun serveur requis) ---

  function _initGun() {
    if (typeof Gun === 'undefined') return;
    if (_gun) return;
    _gun = Gun({
      peers: [
        'https://peer.wallie.io/gun',
        'https://gun-manhattan.herokuapp.com/gun'
      ]
    });
  }

  function _registerNom() {
    if (!_gun || !_nom) return;
    var key = _nom.toLowerCase().replace(/[^a-z0-9]/g, '-');
    _gun.get(GUN_KEY).get(key).put({ nom: _nom, ts: Date.now() });
  }

  // --- Widget "Ils charbonnent aussi" ---

  function _renderWidget(container) {
    if (!container) return;

    // Afficher son propre prénom immédiatement en attente de sync
    var noms = {};
    if (_nom) noms[_nom] = { nom: _nom, ts: Date.now() };
    _updateWidget(container, noms);

    if (!_gun) return;

    _gun.get(GUN_KEY).map().on(function (data) {
      if (!data || !data.nom) return;
      // Ignorer les entrées > 48h
      if (Date.now() - data.ts > 172800000) return;
      noms[data.nom] = data;
      _updateWidget(container, noms);
    });
  }

  function _updateWidget(container, noms) {
    var entries = Object.values(noms).sort(function (a, b) { return b.ts - a.ts; });
    if (!entries.length) { container.innerHTML = ''; return; }

    var chips = entries.map(function (d) {
      var isMe = d.nom === _nom;
      return '<span class="nom-chip' + (isMe ? ' nom-chip-me' : '') + '">' +
        d.nom.charAt(0).toUpperCase() + d.nom.slice(1) +
        '</span>';
    }).join('');

    var count = entries.length;
    var label = count > 1
      ? count + ' camarades révisent aussi'
      : 'Tu révises en solo pour l\'instant';

    container.innerHTML =
      '<div class="charbonnent-widget">' +
        '<div class="charbonnent-header">' +
          '<span class="charbonnent-title">Ils charbonnent aussi</span>' +
          '<span class="charbonnent-count">' + label + '</span>' +
        '</div>' +
        '<div class="charbonnent-chips">' + chips + '</div>' +
      '</div>';
  }

  // --- Modal prénom (premier accès) ---

  function _showModal(onDone) {
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML =
      '<div class="modal-card" role="dialog" aria-modal="true">' +
        '<div class="modal-deco"></div>' +
        '<h2 class="modal-title">Bienvenue !</h2>' +
        '<p class="modal-subtitle">Entre ton prénom pour commencer à réviser</p>' +
        '<input class="modal-input" id="modal-nom" type="text" ' +
          'placeholder="Ton prénom…" maxlength="20" autocomplete="off" spellcheck="false">' +
        '<button class="modal-btn" id="modal-submit">C\'est parti →</button>' +
      '</div>';

    document.body.appendChild(overlay);

    var input = document.getElementById('modal-nom');
    var btn   = document.getElementById('modal-submit');
    setTimeout(function () { input.focus(); }, 50);

    function submit() {
      var val = input.value.trim();
      if (!val) {
        input.classList.add('modal-input-error');
        setTimeout(function () { input.classList.remove('modal-input-error'); }, 600);
        return;
      }
      _setNom(val);
      overlay.classList.add('modal-closing');
      setTimeout(function () { overlay.remove(); onDone(val); }, 280);
    }

    btn.addEventListener('click', submit);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  }

  // --- Guide interactif ---

  var STEPS = [
    { icon: '🎯', title: 'Choisis une épreuve', desc: 'E1 · E3 · E5 — chaque carte a ses flashcards et exercices' },
    { icon: '🃏', title: 'Flashcards adaptatives', desc: 'Les cartes difficiles reviennent plus souvent jusqu\'à ce que tu maîtrises' },
    { icon: '⌨️', title: 'Raccourcis clavier', desc: '<kbd>Espace</kbd> pour retourner · <kbd>1</kbd> difficile · <kbd>2</kbd> bien · <kbd>3</kbd> maîtrisé' },
    { icon: '📝', title: 'Exercices guidés', desc: 'Suis les étapes, rédige ta réponse, révèle la correction quand tu veux' }
  ];

  function _showGuide(nom) {
    var overlay = document.createElement('div');
    overlay.className = 'guide-overlay';

    var stepsHtml = STEPS.map(function (s, i) {
      return '<div class="guide-step" style="animation-delay:' + (i * 0.1) + 's">' +
        '<div class="guide-step-icon">' + s.icon + '</div>' +
        '<div class="guide-step-body">' +
          '<div class="guide-step-title">' + s.title + '</div>' +
          '<div class="guide-step-desc">' + s.desc + '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    overlay.innerHTML =
      '<div class="guide-card">' +
        '<div class="guide-greeting">Salut <strong>' + nom + '</strong> ! Voici comment ça marche :</div>' +
        '<div class="guide-steps">' + stepsHtml + '</div>' +
        '<button class="guide-btn" id="guide-close">Commencer la révision →</button>' +
        '<button class="guide-skip" id="guide-skip">Passer</button>' +
      '</div>';

    document.body.appendChild(overlay);

    function close() {
      overlay.classList.add('modal-closing');
      setTimeout(function () { overlay.remove(); }, 280);
    }

    document.getElementById('guide-close').addEventListener('click', close);
    document.getElementById('guide-skip').addEventListener('click', close);
  }

  // --- API publique ---

  return {

    // onReady est appelé dès que le prénom est connu (existant ou nouveau)
    init: function (onReady) {
      _nom = _getNom();
      _initGun();

      if (!_nom) {
        _showModal(function (nom) {
          _initGun();
          _registerNom();
          if (onReady) onReady();   // app démarre ici (nom confirmé)
          _showGuide(nom);          // guide s'affiche par-dessus
        });
      } else {
        _registerNom();
        if (onReady) onReady();
      }
    },

    renderWidget: function (container) {
      _renderWidget(container);
    },

    showGuide: function () {
      _showGuide(_nom || '');
    },

    getNom: function () {
      return _nom;
    }
  };

})();
