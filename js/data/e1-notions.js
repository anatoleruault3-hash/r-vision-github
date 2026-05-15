const E1_NOTIONS = [
  // --- Format de l'épreuve ---
  {
    id: "e1-format-questions-corpus",
    epreuve: "e1",
    domaine: "expression",
    categorie: "format-epreuve",
    question: "Quel est le format de l'épreuve E1 depuis 2025 ?",
    reponse: "2 parties : Partie 1 — Questions sur corpus (10 pts) : 3 questions d'analyse sur un dossier de documents hétérogènes. Partie 2 — Essai argumenté (10 pts) : développement personnel sur un sujet lié au thème. Durée : 3 h. Aucun matériel autorisé.",
    tags: ["format", "epreuve", "methode"]
  },
  {
    id: "e1-format-synthese-abandonne",
    epreuve: "e1",
    domaine: "expression",
    categorie: "format-epreuve",
    question: "La synthèse de documents est-elle encore demandée à l'E1 depuis 2025 ?",
    reponse: "Non. Depuis 2025, remplacée par des questions sur corpus. Les questions portent sur l'analyse (liens entre docs, regard de l'auteur, titre justifié) — pas de synthèse rédigée en continu.",
    tags: ["format", "epreuve", "2025"]
  },
  // --- Corpus et documents ---
  {
    id: "e1-corpus-definition",
    epreuve: "e1",
    domaine: "expression",
    categorie: "corpus",
    question: "Qu'est-ce qu'un corpus documentaire dans l'épreuve E1 ?",
    reponse: "Ensemble de documents réunis autour d'un même thème, proposant des points de vue complémentaires ou opposés. Types possibles : texte littéraire, essai, article de presse, document iconographique (photo, dessin), graphique.",
    tags: ["corpus", "documents", "definition"]
  },
  {
    id: "e1-corpus-types-documents",
    epreuve: "e1",
    domaine: "expression",
    categorie: "corpus",
    question: "Quels types de documents peut-on trouver dans un corpus E1 ? Donnez un exemple de chaque.",
    reponse: "1. Texte littéraire — registre autobiographique, ironique (ex : Vallès, L'Enfant). 2. Essai sociologique ou philosophique (ex : Lardellier, rites alimentaires). 3. Article de presse ou texte journalistique. 4. Document iconographique : photo, tableau, dessin. 5. Graphique ou tableau statistique. Chaque type impose une analyse distincte (registre, thèse, point de vue).",
    tags: ["corpus", "documents", "types"]
  },
  {
    id: "e1-theme-vs-problematique",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Quelle est la différence entre thème et problématique dans un corpus ?",
    reponse: "Thème : sujet général abordé par tous les documents (ex : 'le repas familial'). Problématique : question centrale née des tensions repérées (ex : 'Le repas familial est-il un espace de contrainte ou de lien ?'). Clé : la problématique interroge le thème — elle n'est pas le thème.",
    tags: ["theme", "problematique", "analyse"]
  },
  // --- Analyse de documents ---
  {
    id: "e1-analyse-registre",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Qu'est-ce que le registre d'un texte littéraire et comment l'identifier ?",
    reponse: "Le registre désigne le ton dominant et les effets produits sur le lecteur. Principaux registres : ironique (décalage dit/pensé), lyrique (émotions personnelles), tragique (destin inéluctable), didactique (instruire), polémique (critiquer, provoquer). On l'identifie par le vocabulaire, les figures de style, la ponctuation et la posture du narrateur.",
    tags: ["registre", "litterature", "analyse"]
  },
  {
    id: "e1-analyse-regard-retrospectif",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Qu'est-ce que le regard rétrospectif d'un narrateur et comment le caractériser ?",
    reponse: "Regard d'un narrateur adulte sur des événements passés. Combine : mémoire affective (souvenirs précis), distanciation critique (ironie, lucidité), relecture de l'expérience, parfois ambivalence (critique et reconnaissance mêlées). Ex : Vallès — regard ironique et lucide sur les repas imposés par sa mère.",
    tags: ["narrateur", "retrospectif", "analyse"]
  },
  {
    id: "e1-analyse-convergences-divergences",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Comment repérer convergences et divergences entre deux documents d'un corpus ?",
    reponse: "Convergences : thèmes communs, idées partagées, complémentarité. Divergences : points de vue opposés, registres différents, angles distincts. Méthode : formuler la thèse de chaque doc en une phrase → identifier ce qui se rejoint et s'oppose. Un même sujet peut unir des documents aux positions opposées.",
    tags: ["convergences", "divergences", "methode"]
  },
  {
    id: "e1-analyse-titre-corpus",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Quels critères doit respecter un titre proposé pour illustrer l'ensemble d'un corpus ?",
    reponse: "1. Couvrir tous les documents (chacun doit y trouver sa place). 2. Refléter l'enjeu transversal, pas seulement le thème. 3. Être précis et suggestif (éviter 'La famille'). 4. Se justifier doc par doc — la justification est obligatoire.",
    tags: ["titre", "corpus", "criteres"]
  },
  // --- Essai argumenté ---
  {
    id: "e1-essai-structure",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Quelle est la structure attendue d'un essai argumenté à l'épreuve E1 ?",
    reponse: "Introduction : accroche → reformulation du sujet → problématique → annonce du plan. Développement : 2-3 parties, chacune avec 2-3 paragraphes (thèse + exemple + analyse). Conclusion : bilan synthétique + ouverture ou prise de position. Schéma du paragraphe : idée directrice → argument → exemple → analyse.",
    tags: ["essai", "structure", "methode"]
  },
  {
    id: "e1-essai-plan-dialectique",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Qu'est-ce qu'un plan dialectique et quand l'utiliser dans un essai ?",
    reponse: "Plan thèse/antithèse/synthèse : I. Oui (arguments pour). II. Mais (limites, contre-arguments). III. En réalité (dépassement nuancé). À utiliser quand le sujet implique une tension (ex : 'Le repas renforce-t-il les liens ?'). La 3e partie doit apporter un vrai dépassement, pas un simple équilibre.",
    tags: ["plan", "dialectique", "essai"]
  },
  {
    id: "e1-essai-argument-complet",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Comment construire un argument complet dans un paragraphe d'essai ?",
    reponse: "Schéma en 4 temps : 1. Idée directrice — thèse du paragraphe en une phrase. 2. Argument — expliquer pourquoi. 3. Exemple — fait précis (œuvre, stat, extrait du corpus, événement). 4. Analyse — ce que l'exemple prouve par rapport à l'idée. Ne jamais laisser un exemple sans l'analyser.",
    tags: ["argument", "paragraphe", "essai"]
  },
  {
    id: "e1-essai-exemples",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Quels types d'exemples peut-on mobiliser dans un essai E1 ?",
    reponse: "1. Textes du corpus (à utiliser, non exclusivement). 2. Œuvres littéraires ou cinématographiques. 3. Faits de société ou actualité. 4. Statistiques ou études citées. 5. Expérience personnelle (avec modération). 6. Références culturelles (philo, histoire). Varier les types montre l'étendue de la culture personnelle.",
    tags: ["exemples", "culture", "essai"]
  },
  // --- Langue et style ---
  {
    id: "e1-connecteurs-addition",
    epreuve: "e1",
    domaine: "expression",
    categorie: "langue",
    question: "Quels connecteurs logiques expriment l'addition et le renforcement ?",
    reponse: "De plus, en outre, par ailleurs, également, qui plus est, de surcroît, non seulement… mais encore, à cela s'ajoute, il convient également de souligner.",
    tags: ["connecteurs", "addition", "langue"]
  },
  {
    id: "e1-connecteurs-opposition",
    epreuve: "e1",
    domaine: "expression",
    categorie: "langue",
    question: "Quels connecteurs logiques expriment l'opposition et la nuance ?",
    reponse: "Cependant, toutefois, néanmoins, or, en revanche, pourtant, malgré cela, il n'en demeure pas moins que, bien que (+ subjonctif), quoique (+ subjonctif), même si.",
    tags: ["connecteurs", "opposition", "langue"]
  },
  {
    id: "e1-connecteurs-cause-consequence",
    epreuve: "e1",
    domaine: "expression",
    categorie: "langue",
    question: "Quels connecteurs expriment la cause et la conséquence ?",
    reponse: "Cause : car, parce que, en raison de, du fait de, étant donné que, puisque, grâce à, faute de. Conséquence : donc, ainsi, c'est pourquoi, par conséquent, dès lors, de ce fait, il en résulte que, si bien que.",
    tags: ["connecteurs", "cause", "consequence", "langue"]
  },
  {
    id: "e1-connecteurs-illustration",
    epreuve: "e1",
    domaine: "expression",
    categorie: "langue",
    question: "Quels connecteurs introduisent une illustration ou un exemple ?",
    reponse: "Ainsi, par exemple, c'est le cas de, on peut citer, à titre d'illustration, comme en témoigne, tel est le cas lorsque, à l'image de, comme le montre, il suffit de penser à.",
    tags: ["connecteurs", "illustration", "langue"]
  },
  {
    id: "e1-regles-questions-corpus",
    epreuve: "e1",
    domaine: "expression",
    categorie: "methode",
    question: "Quelles sont les règles à respecter dans les questions sur corpus (Partie 1) ?",
    reponse: "1. S'appuyer sur des éléments précis des textes (citations ou reformulations). 2. Structurer la réponse : intro brève + développement + conclusion synthétique. 3. Pas d'avis personnel — rester objectif et analytique. 4. Vocabulaire précis : convergences, registre, thèse, posture de l'auteur. 5. Toujours justifier par une référence aux documents.",
    tags: ["regles", "questions", "corpus", "methode"]
  }
];
