// store.js — Persistance localStorage avec cache mémoire
var STORE_KEY = 'ndrc_progress';

var Store = (function () {

  // Cache in-memory : évite de lire/parser localStorage à chaque appel
  var _cache = null;

  function _load() {
    if (_cache) return _cache;
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        _cache = JSON.parse(raw);
        return _cache;
      }
    } catch (e) {}
    _cache = { flashcards: {}, exercices: {}, sessions: {} };
    return _cache;
  }

  function _save(data) {
    _cache = data;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  return {

    // --- Flashcards ---

    getCard: function (id) {
      var data = _load();
      return data.flashcards[id] || { vues: 0, niveau: 0, derniereVue: null };
    },

    updateCard: function (id, niveau) {
      var data = _load();
      if (!data.flashcards[id]) {
        data.flashcards[id] = { vues: 0, niveau: 0, derniereVue: null };
      }
      data.flashcards[id].niveau = niveau;
      data.flashcards[id].vues += 1;
      data.flashcards[id].derniereVue = new Date().toISOString();
      _save(data);
    },

    // --- Sessions (pour la pondération des flashcards) ---

    getSession: function (epreuve) {
      var data = _load();
      return (data.sessions && data.sessions[epreuve]) || 1;
    },

    incrementSession: function (epreuve) {
      var data = _load();
      if (!data.sessions) data.sessions = {};
      data.sessions[epreuve] = (data.sessions[epreuve] || 1) + 1;
      _save(data);
    },

    // --- Exercices ---

    getExercice: function (id) {
      var data = _load();
      return data.exercices[id] || { completions: 0, derniereFois: null };
    },

    completeExercice: function (id) {
      var data = _load();
      if (!data.exercices[id]) {
        data.exercices[id] = { completions: 0, derniereFois: null };
      }
      data.exercices[id].completions += 1;
      data.exercices[id].derniereFois = new Date().toISOString();
      _save(data);
    },

    // --- Stats par épreuve ---

    getStats: function (epreuve) {
      var data = _load();
      var notions = [];
      var methodes = [];

      if (epreuve === 'e1') {
        notions  = typeof E1_NOTIONS   !== 'undefined' ? E1_NOTIONS   : [];
        methodes = typeof E1_METHODES  !== 'undefined' ? E1_METHODES  : [];
      } else if (epreuve === 'e3') {
        notions  = typeof E3_NOTIONS   !== 'undefined' ? E3_NOTIONS   : [];
        methodes = typeof E3_METHODES  !== 'undefined' ? E3_METHODES  : [];
      } else if (epreuve === 'e5') {
        notions  = typeof E5_NOTIONS   !== 'undefined' ? E5_NOTIONS   : [];
        methodes = typeof E5_METHODES  !== 'undefined' ? E5_METHODES  : [];
      }

      var totalCartes = notions.length;
      var vues = 0;
      var maitrisees = 0;

      notions.forEach(function (card) {
        var p = data.flashcards[card.id];
        if (p && p.vues > 0)     vues++;
        if (p && p.niveau === 3) maitrisees++;
      });

      var totalEx = methodes.length;
      var completedEx = 0;

      methodes.forEach(function (ex) {
        var p = data.exercices[ex.id];
        if (p && p.completions > 0) completedEx++;
      });

      return { totalCartes, vues, maitrisees, totalEx, completedEx };
    },

    // --- Stats globales ---

    getGlobalStats: function () {
      var e1 = this.getStats('e1');
      var e3 = this.getStats('e3');
      var e5 = this.getStats('e5');
      return {
        totalCartes:  e1.totalCartes  + e3.totalCartes  + e5.totalCartes,
        vues:         e1.vues         + e3.vues          + e5.vues,
        maitrisees:   e1.maitrisees   + e3.maitrisees    + e5.maitrisees,
        totalEx:      e1.totalEx      + e3.totalEx       + e5.totalEx,
        completedEx:  e1.completedEx  + e3.completedEx   + e5.completedEx
      };
    },

    // --- Reset complet ---

    reset: function () {
      _cache = null;
      try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    }

  };
})();
