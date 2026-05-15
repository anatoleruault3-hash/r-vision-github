const E1_NOTIONS = [
  // --- Format de l'épreuve ---
  {
    id: "e1-format-questions-corpus",
    epreuve: "e1",
    domaine: "expression",
    categorie: "format-epreuve",
    question: "Quel est le format de l'épreuve E1 depuis 2025 ?",
    reponse: "Deux parties : Partie 1 — Questions sur corpus (10 pts) : 3 questions d'analyse sur un dossier de documents hétérogènes. Partie 2 — Essai argumenté (10 pts) : développement personnel sur un sujet lié au thème du corpus. Durée : 3 heures. Aucun matériel autorisé.",
    tags: ["format", "epreuve", "methode"]
  },
  {
    id: "e1-format-synthese-abandonne",
    epreuve: "e1",
    domaine: "expression",
    categorie: "format-epreuve",
    question: "La synthèse de documents est-elle encore demandée à l'E1 depuis 2025 ?",
    reponse: "Non. Depuis 2025, la synthèse de documents a été remplacée par des questions sur corpus. Les questions portent sur l'analyse des documents (liens, regard de l'auteur, titre justifié) mais n'exigent plus la production d'une synthèse rédigée en continu.",
    tags: ["format", "epreuve", "2025"]
  },
  // --- Corpus et documents ---
  {
    id: "e1-corpus-definition",
    epreuve: "e1",
    domaine: "expression",
    categorie: "corpus",
    question: "Qu'est-ce qu'un corpus documentaire dans l'épreuve E1 ?",
    reponse: "Ensemble de documents réunis autour d'un même thème de culture générale. Les documents proposent des points de vue complémentaires ou opposés. Ils peuvent être de natures variées : texte littéraire, essai, article de presse, document iconographique (photo, dessin), graphique.",
    tags: ["corpus", "documents", "definition"]
  },
  {
    id: "e1-corpus-types-documents",
    epreuve: "e1",
    domaine: "expression",
    categorie: "corpus",
    question: "Quels types de documents peut-on trouver dans un corpus E1 ? Donnez un exemple de chaque.",
    reponse: "1. Texte littéraire (ex : Jules Vallès, L'Enfant — registre autobiographique et ironique). 2. Essai sociologique ou philosophique (ex : Pascal Lardellier, sur les rites alimentaires). 3. Article de presse ou texte journalistique. 4. Document iconographique : photographie, tableau, dessin. 5. Graphique, tableau statistique. Chaque type impose un traitement différent (analyse du registre, de la thèse, du point de vue).",
    tags: ["corpus", "documents", "types"]
  },
  {
    id: "e1-theme-vs-problematique",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Quelle est la différence entre thème et problématique dans un corpus ?",
    reponse: "Le thème est le sujet général abordé par tous les documents (ex : 'le repas familial'). La problématique est la question centrale que pose ce thème à partir des tensions et enjeux repérés dans les documents (ex : 'Le repas familial est-il davantage un espace de contrainte ou de lien ?'). La problématique n'est pas le thème — elle l'interroge.",
    tags: ["theme", "problematique", "analyse"]
  },
  // --- Analyse de documents ---
  {
    id: "e1-analyse-registre",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Qu'est-ce que le registre d'un texte littéraire et comment l'identifier ?",
    reponse: "Le registre désigne le ton dominant et les effets produits sur le lecteur. Principaux registres : ironique (décalage entre ce qui est dit et ce qui est pensé), lyrique (expression des émotions personnelles), tragique (destin inéluctable), didactique (volonté d'instruire), polémique (critique, provocation). On l'identifie par le choix des mots, les figures de style, la ponctuation et la posture du narrateur.",
    tags: ["registre", "litterature", "analyse"]
  },
  {
    id: "e1-analyse-regard-retrospectif",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Qu'est-ce que le regard rétrospectif d'un narrateur et comment le caractériser ?",
    reponse: "Le regard rétrospectif est celui d'un narrateur adulte qui raconte des événements de son enfance ou passé avec une distance temporelle. Il combine : une mémoire sensorielle et affective (souvenirs précis), une distanciation critique (ironie, lucidité), une relecture de l'expérience (ce que ça a signifié), parfois une ambivalence (entre critique et reconnaissance). Ex : Vallès — regard ironique et lucide sur les repas imposés par sa mère.",
    tags: ["narrateur", "retrospectif", "analyse"]
  },
  {
    id: "e1-analyse-convergences-divergences",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Comment repérer convergences et divergences entre deux documents d'un corpus ?",
    reponse: "Convergences : thèmes communs, idées partagées, complémentarité. Divergences : points de vue opposés, registres différents, angles d'analyse distincts. Méthode : pour chaque document, formuler la thèse principale en une phrase → identifier ce qui se rejoint et ce qui s'oppose. Les convergences peuvent être thématiques (même sujet) sans être idéologiques (positions différentes).",
    tags: ["convergences", "divergences", "methode"]
  },
  {
    id: "e1-analyse-titre-corpus",
    epreuve: "e1",
    domaine: "expression",
    categorie: "analyse",
    question: "Quels critères doit respecter un titre proposé pour illustrer l'ensemble d'un corpus ?",
    reponse: "Un bon titre de corpus doit : (1) couvrir tous les documents — vérifier que chaque document y trouve sa place. (2) Refléter l'enjeu transversal — pas seulement le thème mais la tension ou l'enjeu central. (3) Être précis et suggestif — éviter les formulations trop vagues comme 'La famille'. (4) Sa justification est obligatoire : montrer document par document comment le titre s'applique.",
    tags: ["titre", "corpus", "criteres"]
  },
  // --- Essai argumenté ---
  {
    id: "e1-essai-structure",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Quelle est la structure attendue d'un essai argumenté à l'épreuve E1 ?",
    reponse: "Introduction : accroche, reformulation du sujet, problématique, annonce du plan. Développement : 2 ou 3 parties, chacune avec 2-3 paragraphes argumentés (thèse + exemple + analyse). Conclusion : bilan synthétique des idées + ouverture ou prise de position. Chaque paragraphe suit le schéma : idée directrice → argument → exemple concret → analyse de l'exemple.",
    tags: ["essai", "structure", "methode"]
  },
  {
    id: "e1-essai-plan-dialectique",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Qu'est-ce qu'un plan dialectique et quand l'utiliser dans un essai ?",
    reponse: "Plan dialectique (thèse/antithèse/synthèse) : I. Oui (arguments pour la proposition) → II. Mais non (limites, contre-arguments) → III. En réalité / Vers une conception plus nuancée (dépassement). À utiliser lorsque le sujet implique une tension ou une opposition (ex : 'Le repas renforce-t-il les liens ?'). Éviter le plan dialectique trop binaire — la 3e partie doit apporter un vrai dépassement.",
    tags: ["plan", "dialectique", "essai"]
  },
  {
    id: "e1-essai-argument-complet",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Comment construire un argument complet dans un paragraphe d'essai ?",
    reponse: "Schéma en 4 temps : (1) Idée directrice — énoncer la thèse du paragraphe en une phrase claire. (2) Argument — expliquer pourquoi cette idée est valide. (3) Exemple — illustrer avec un fait précis (œuvre, statistique, événement, extrait du corpus). (4) Analyse — montrer ce que l'exemple prouve par rapport à l'idée directrice. Ne jamais laisser un exemple sans l'analyser.",
    tags: ["argument", "paragraphe", "essai"]
  },
  {
    id: "e1-essai-exemples",
    epreuve: "e1",
    domaine: "expression",
    categorie: "essai",
    question: "Quels types d'exemples peut-on mobiliser dans un essai E1 ?",
    reponse: "1. Textes du corpus (à utiliser, mais pas exclusivement). 2. Œuvres littéraires ou cinématographiques (romans, films). 3. Faits de société ou actualité. 4. Statistiques ou études citées. 5. Expérience personnelle (avec modération — ne pas dominer le développement). 6. Références culturelles (philosophie, histoire). Varier les types d'exemples montre l'étendue de la culture personnelle.",
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
    reponse: "Cependant, toutefois, néanmoins, or, en revanche, pourtant, malgré cela, il n'en demeure pas moins que, si… il faut nuancer, bien que (+ subjonctif), quoique (+ subjonctif), même si.",
    tags: ["connecteurs", "opposition", "langue"]
  },
  {
    id: "e1-connecteurs-cause-consequence",
    epreuve: "e1",
    domaine: "expression",
    categorie: "langue",
    question: "Quels connecteurs expriment la cause et la conséquence ?",
    reponse: "Cause : car, parce que, en raison de, du fait de, étant donné que, puisque, grâce à, faute de. Conséquence : donc, ainsi, c'est pourquoi, par conséquent, dès lors, de ce fait, aussi (en tête de phrase), il en résulte que, si bien que.",
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
    reponse: "1. S'appuyer sur des éléments précis des textes (citations courtes reformulées ou entre guillemets). 2. Structurer la réponse : introduction brève, développement, conclusion synthétique. 3. Ne pas donner d'avis personnel dans les questions — rester objectif et analytique. 4. Utiliser un vocabulaire précis (convergences, registre, thèse, posture de l'auteur). 5. Toujours justifier ses affirmations par des références aux documents.",
    tags: ["regles", "questions", "corpus", "methode"]
  }
];
