# Rapport de test QA — 2026-05-14

Périmètre testé :
- Cas d’usage prioritaire 1 (Démarrer et terminer une session de quiz)
- Cas d’usage prioritaire 2 (Réviser en flashcards et retravailler les cartes ratées)
- Cas d’usage prioritaire 3 (Rédiger et évaluer une réponse type examen)

## Bug 1 — Le bonus de longueur en rédaction mélange des seuils en mots et en caractères
- **Étapes de reproduction**
  1. Ouvrir **Rédaction**.
  2. Saisir une réponse d’environ 90 à 110 mots, mais d’au moins 350 caractères.
  3. Cliquer sur **Évaluer**.
- **Résultat attendu**
  - Le bonus de longueur devrait reposer sur des critères homogènes ; une réponse de moins de 120 mots ne devrait pas bénéficier d’un seuil alternatif exprimé en caractères si la longueur est évaluée en mots.
- **Résultat observé**
  - Après le premier seuil `words.length >= 120`, la logique utilise `answer.length >= 350` (caractères), ce qui attribue un bonus selon une unité différente et rend le calcul incohérent avec le premier seuil.
- **Sévérité** : Moyenne.

## Bug 2 — Le bouton « Passer » du quiz enregistre immédiatement une erreur
- **Étapes de reproduction**
  1. Ouvrir **Quiz** et démarrer une session.
  2. Cliquer sur **Passer** avant de sélectionner une réponse.
- **Résultat attendu**
  - La question devrait être ignorée sans être comptée comme mauvaise réponse, ou passer à la suivante avec une logique explicite de saut.
- **Résultat observé**
  - L’application appelle `answerQuiz(-1)`, enregistre une correction avec `selected: "Passée"`, incrémente le total de la matière, et traite l’action comme une erreur.
- **Sévérité** : Moyenne.

## Bug 3 — Le compteur de cartes ratées peut brouiller la lecture de la file active
- **Étapes de reproduction**
  1. Dans **Flashcards**, marquer plusieurs cartes comme inconnues au fil des sessions.
  2. Changer le filtre par matière puis continuer à marquer des cartes comme connues.
  3. Observer **Pile ratées** dans les statistiques latérales.
- **Résultat attendu**
  - Le compteur devrait clairement représenter la file exploitable dans le périmètre en cours, ou distinguer explicitement le global du filtré.
- **Résultat observé**
  - `state.flash.missed.length` est affiché globalement, quel que soit le filtre actif, ce qui peut induire en erreur pendant une remédiation par matière.
- **Sévérité** : Faible.

## Synthèse de triage (courte)
- Nombre total d’anomalies : **3**
- Répartition par sévérité : **0 Élevée**, **2 Moyennes**, **1 Faible**
- Priorité recommandée : corriger d’abord la logique de saut du quiz (intégrité des statistiques d’apprentissage), puis la cohérence du bonus de rédaction, puis la clarté du compteur de cartes ratées.
