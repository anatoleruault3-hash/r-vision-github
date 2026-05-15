const E3_NOTIONS = [
  // ===== ÉCONOMIE =====
  {
    id: "e3-eco-agents-definition",
    epreuve: "e3",
    domaine: "economie",
    categorie: "agents-economiques",
    question: "Quels sont les 5 grands agents économiques et leur rôle principal ?",
    reponse: "1. Ménages : consomment des biens/services, fournissent du travail. 2. Entreprises : produisent des biens/services pour réaliser un profit. 3. Administrations publiques : fournissent des services publics, redistribuent les richesses. 4. Institutions financières : financent l'économie (banques, assurances). 5. Reste du monde : échanges internationaux. Leurs rôles sont complémentaires et interdépendants.",
    tags: ["agents", "economie", "definition"]
  },
  {
    id: "e3-eco-flux-reels-monetaires",
    epreuve: "e3",
    domaine: "economie",
    categorie: "agents-economiques",
    question: "Quelle est la différence entre flux réels et flux monétaires ?",
    reponse: "Flux réels : échanges de biens, services et facteurs de production (travail, capital). Ex : un salarié fournit du travail à une entreprise. Flux monétaires : contreparties financières des flux réels. Ex : l'entreprise verse un salaire en échange du travail. Ces flux sont toujours symétriques : tout flux réel génère un flux monétaire en sens inverse.",
    tags: ["flux", "economie", "circuit"]
  },
  {
    id: "e3-eco-marche-definition",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche",
    question: "Comment se forme le prix d'équilibre sur un marché ?",
    reponse: "Le marché est le lieu de rencontre entre l'offre (producteurs prêts à vendre) et la demande (consommateurs prêts à acheter). Le prix d'équilibre (ou prix de marché) est le prix auquel la quantité offerte est égale à la quantité demandée. Si le prix > équilibre : excès d'offre → pression à la baisse. Si prix < équilibre : excès de demande → pression à la hausse.",
    tags: ["marche", "prix", "offre", "demande"]
  },
  {
    id: "e3-eco-structures-marche",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche",
    question: "Quelles sont les 4 principales structures de marché ?",
    reponse: "1. Concurrence Pure et Parfaite (CPP) : nombreux offreurs et demandeurs, produit homogène, libre entrée/sortie. 2. Monopole : un seul offreur. 3. Oligopole : quelques offreurs dominants (ex : marché Notarius — 3 acteurs). 4. Concurrence monopolistique : nombreux offreurs avec produits différenciés. La structure influence les prix, les marges et les stratégies des entreprises.",
    tags: ["structures", "marche", "concurrence", "monopole"]
  },
  {
    id: "e3-eco-barrieres-entree",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche",
    question: "Quels sont les 4 types de barrières à l'entrée sur un marché ?",
    reponse: "1. Capitalistiques : investissements initiaux très élevés (R&D, équipements). 2. Technologiques : savoir-faire difficile à reproduire, brevets, expertise. 3. Réglementaires : licences, autorisations, normes sectorielles. 4. Réputation/fidélité : clientèle captive, image de marque établie. Ex : sur le marché Notarius, la technicité juridico-informatique et la fidélité des notaires constituent des barrières élevées.",
    tags: ["barrieres", "entree", "marche", "concurrence"]
  },
  {
    id: "e3-eco-marche-travail",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche-travail",
    question: "Comment fonctionne le marché du travail ? Qui est offreur, qui est demandeur ?",
    reponse: "Sur le marché du travail, l'offre de travail vient des salariés (ils proposent leurs compétences), la demande de travail vient des entreprises (elles cherchent à embaucher). Le salaire est le prix du travail. Si demande > offre (pénurie) : salaires augmentent, pouvoir de négociation des salariés s'accroît. Ex : développeurs informatiques — ratio de tension 2,5 offres pour 1 candidat.",
    tags: ["marche", "travail", "offre", "demande", "salaire"]
  },
  {
    id: "e3-eco-tension-travail",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche-travail",
    question: "Comment mesure-t-on la tension sur le marché du travail ?",
    reponse: "L'indice de tension = nombre d'offres d'emploi / nombre de candidats disponibles. Si > 1 : plus d'offres que de candidats → pénurie. Indicateurs complémentaires : intensité d'embauches (besoin de recrutement des entreprises), manque de main-d'œuvre disponible (insuffisance de l'offre), lien formation-emploi (inadéquation des formations). Ex : ingénieurs IT → tension 2,5, rang 4/30 sur l'indice Pôle Emploi.",
    tags: ["tension", "travail", "indicateurs", "penuries"]
  },
  {
    id: "e3-eco-role-etat",
    epreuve: "e3",
    domaine: "economie",
    categorie: "regulation",
    question: "Quelles sont les 3 fonctions économiques de l'État selon Musgrave ?",
    reponse: "1. Allocation : production de biens publics (routes, défense, éducation) que le marché ne fournit pas efficacement. 2. Redistribution : réduction des inégalités via impôts progressifs et prestations sociales. 3. Stabilisation (régulation) : politiques économiques pour lisser les cycles (relance en récession, modération en surchauffe). L'État peut aussi réguler la concurrence (droit de la concurrence, DGCCRF en France).",
    auteur: "Richard Musgrave",
    tags: ["etat", "fonctions", "regulation", "economie"]
  },
  {
    id: "e3-eco-inflation",
    epreuve: "e3",
    domaine: "economie",
    categorie: "macroeconomie",
    question: "Définissez l'inflation et ses effets sur le pouvoir d'achat des ménages.",
    reponse: "L'inflation est la hausse générale et durable du niveau des prix. Elle est mesurée par l'Indice des Prix à la Consommation (IPC). Effets : baisse du pouvoir d'achat des ménages (leur revenu réel diminue si les salaires n'augmentent pas autant que les prix), réduction de la valeur réelle des dettes (favorable aux emprunteurs), perturbation des décisions économiques. Relation avec le DIY : l'inflation pousse les ménages à 'faire eux-mêmes' pour économiser (cas Tout en perles 2025).",
    tags: ["inflation", "pouvoir-achat", "macroeconomie"]
  },
  {
    id: "e3-eco-innovation-schumpeter",
    epreuve: "e3",
    domaine: "economie",
    categorie: "innovation",
    question: "Comment Schumpeter définit-il l'innovation ? Quels sont ses 4 types ?",
    reponse: "Pour Schumpeter, l'innovation est le moteur de la croissance économique par 'destruction créatrice' : de nouvelles combinaisons de facteurs de production détruisent les anciennes. 4 types : 1. Innovation de produit (nouveau bien ou service). 2. Innovation de procédé (nouveau processus de production). 3. Innovation commerciale/organisationnelle (nouveau marché, nouvelle méthode). 4. Innovation de rupture (remet en cause l'ensemble du secteur). Ex : Notarius — IA dans logiciels notariaux = innovation de produit ET de procédé.",
    auteur: "Joseph Schumpeter",
    tags: ["innovation", "schumpeter", "destruction-creatrice"]
  },
  {
    id: "e3-eco-bilan-frng",
    epreuve: "e3",
    domaine: "economie",
    categorie: "gestion-financiere",
    question: "Qu'est-ce que le FRNG et comment le calcule-t-on ?",
    reponse: "Le Fonds de Roulement Net Global (FRNG) mesure l'excédent de ressources stables (capitaux propres + dettes financières LT) sur les emplois stables (immobilisations). Formule : FRNG = Ressources stables − Emplois stables. Si positif : les ressources LT couvrent les investissements ET dégagent un excédent pour financer l'exploitation. Ex Notarius 2022 : 4 340 − 4 251 = +89 K€ → structure LT saine mais FRNG insuffisant pour couvrir le BFR.",
    tags: ["bilan", "FRNG", "financement", "gestion"]
  },
  {
    id: "e3-eco-bilan-bfr-tn",
    epreuve: "e3",
    domaine: "economie",
    categorie: "gestion-financiere",
    question: "Qu'est-ce que le BFR et la trésorerie nette ? Quelle est la relation entre les trois indicateurs ?",
    reponse: "BFR (Besoin en Fonds de Roulement) = Actif circulant − Passif circulant. Mesure le besoin de financement du cycle d'exploitation. Si positif : l'entreprise paie ses fournisseurs avant d'encaisser ses clients → besoin de financement. Trésorerie Nette (TN) = FRNG − BFR. Si TN < 0 : l'entreprise recourt aux concours bancaires courants (découverts) → situation fragile. Ex Notarius : TN = 89 − 400 = −311 K€ → trésorerie négative, dépendance bancaire à court terme.",
    tags: ["BFR", "tresorerie", "bilan", "gestion"]
  },
  {
    id: "e3-eco-financement",
    epreuve: "e3",
    domaine: "economie",
    categorie: "gestion-financiere",
    question: "Quelles sont les principales sources de financement externe d'une entreprise ?",
    reponse: "1. Prêt bancaire classique : emprunts à moyen/long terme pour investissements. 2. Subventions publiques : aides d'État, régionales (ex : prêt croissance TPE/PME BPI France — 10 000 à 300 000 €). 3. Capital-risque / augmentation de capital : ouverture du capital à des investisseurs (compromet l'indépendance familiale). 4. Crédit-bail (leasing) : financement d'équipements sans achat immédiat. 5. Affacturage : cession des créances clients pour améliorer la trésorerie.",
    tags: ["financement", "pret", "capital", "tresorerie"]
  },
  {
    id: "e3-eco-gpec",
    epreuve: "e3",
    domaine: "economie",
    categorie: "rh",
    question: "Définissez la GPEC et ses 3 enjeux principaux.",
    reponse: "La GPEC (Gestion Prévisionnelle des Emplois et des Compétences) est une démarche stratégique visant à anticiper les besoins en ressources humaines à moyen terme. 3 enjeux : 1. Humains : attirer, fidéliser et développer les compétences des collaborateurs. 2. Organisationnels : adapter les effectifs et les compétences aux évolutions de la structure. 3. Économiques : optimiser les coûts RH et maintenir la compétitivité. Obligatoire dans les entreprises de +300 salariés.",
    tags: ["GPEC", "RH", "competences", "management"]
  },
  {
    id: "e3-eco-mondialisation",
    epreuve: "e3",
    domaine: "economie",
    categorie: "macroeconomie",
    question: "Définissez la mondialisation et ses principaux effets positifs et négatifs.",
    reponse: "La mondialisation est le processus d'intensification des échanges de biens, services, capitaux, informations et personnes entre les pays. Acteurs : entreprises multinationales, États, institutions internationales (FMI, OMC), consommateurs. Effets positifs : croissance économique, baisse des prix, transfert de technologies, diversification des débouchés. Effets négatifs : accentuation des inégalités, délocalisations, concurrence accrue, dépendances stratégiques.",
    tags: ["mondialisation", "echanges", "macroeconomie"]
  },

  // ===== DROIT =====
  {
    id: "e3-droit-sources",
    epreuve: "e3",
    domaine: "droit",
    categorie: "sources-droit",
    question: "Quelles sont les sources du droit, classées par ordre hiérarchique ?",
    reponse: "Pyramide de Kelsen (du plus élevé au plus bas) : 1. Constitution (norme suprême). 2. Droit européen (traités, règlements, directives). 3. Lois (votées par le Parlement). 4. Règlements (décrets, arrêtés — précisent les lois). 5. Conventions collectives / accords d'entreprise. Sources non écrites : jurisprudence (décisions des tribunaux qui font autorité), coutume (usage reconnu comme obligatoire). Une norme inférieure ne peut contredire une norme supérieure.",
    tags: ["sources", "droit", "hierarchie", "kelsen"]
  },
  {
    id: "e3-droit-formation-contrat",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-contrats",
    question: "Quelles sont les conditions de formation d'un contrat valable ?",
    reponse: "1. Accord de volontés : rencontre d'une offre (précise, ferme, extériorisée) et d'une acceptation (pure et simple). 2. Consentement libre et éclairé : absence de vices du consentement (erreur, dol, violence). 3. Capacité juridique des parties : aptitude à contracter (les mineurs non émancipés ont une capacité limitée). 4. Contenu licite et certain : l'objet du contrat doit être légal et déterminable. Sans ces conditions, le contrat peut être nul.",
    tags: ["contrat", "formation", "validite", "droit"]
  },
  {
    id: "e3-droit-vices-consentement",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-contrats",
    question: "Quels sont les 3 vices du consentement et leurs conséquences ?",
    reponse: "1. Erreur : méprise sur un élément essentiel du contrat (objet, qualité substantielle). 2. Dol : manœuvres frauduleuses ou mensonges pour tromper le cocontractant. 3. Violence : pression physique ou morale contraignant à contracter. Conséquence : nullité relative du contrat (la partie dont le consentement a été vicié peut demander l'annulation dans un délai de 5 ans). Le contrat nul est réputé n'avoir jamais existé.",
    tags: ["vices", "consentement", "contrat", "nullite"]
  },
  {
    id: "e3-droit-rc-conditions",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Quelles sont les 3 conditions cumulatives de la responsabilité civile ?",
    reponse: "1. Un fait générateur (faute, fait d'autrui ou fait de la chose). 2. Un préjudice : dommage certain, réel et prouvable — peut être matériel, corporel ou moral. 3. Un lien de causalité : relation directe entre le fait générateur et le préjudice. Ces 3 conditions sont CUMULATIVES. Si l'une manque, la responsabilité civile ne peut pas être engagée. Objectif : indemniser la victime (≠ responsabilité pénale qui punit l'auteur).",
    tags: ["responsabilite", "civile", "conditions", "droit"]
  },
  {
    id: "e3-droit-rc-contractuelle-delictuelle",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Quelle est la différence entre responsabilité civile contractuelle et délictuelle ?",
    reponse: "RC contractuelle : s'applique lorsqu'une partie ne respecte pas ses obligations issues d'un contrat (inexécution, mauvaise exécution, retard). RC délictuelle (art. 1240 CC) : s'applique en dehors de tout contrat, lorsqu'un tiers cause un dommage par sa faute, le fait d'une chose ou le fait d'autrui. Important : on ne peut pas cumuler les deux régimes pour un même fait. La concurrence déloyale relève de la RC délictuelle.",
    tags: ["responsabilite", "contractuelle", "delictuelle", "distinction"]
  },
  {
    id: "e3-droit-responsabilite-penale",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Quels sont les 3 types d'infractions pénales, par ordre de gravité ?",
    reponse: "1. Contravention (la moins grave) : sanctionnée par une amende (ex : infraction routière). 2. Délit : infraction plus grave, punie d'amendes importantes et/ou d'emprisonnement jusqu'à 10 ans (ex : vol, abus de confiance, violence). 3. Crime (la plus grave) : jugé en Cour d'Assises, puni de réclusion criminelle (ex : meurtre, viol). La responsabilité pénale vise à punir et dissuader (≠ RC qui vise à indemniser).",
    tags: ["penal", "infractions", "contravention", "delit", "crime"]
  },
  {
    id: "e3-droit-concurrence-deloyale-def",
    epreuve: "e3",
    domaine: "droit",
    categorie: "concurrence",
    question: "Quelles sont les 4 formes de concurrence déloyale ?",
    reponse: "1. Dénigrement : critiques injustifiées visant à nuire à la réputation d'un concurrent. 2. Imitation/confusion : utilisation de signes similaires (nom, logo) créant une confusion dans l'esprit des clients. 3. Parasitisme : tirer profit des investissements ou de la réputation d'un concurrent sans bourse délier. 4. Désorganisation : débauchage massif de salariés, détournement de clientèle. Relève de la responsabilité civile délictuelle (art. 1240 CC).",
    tags: ["concurrence", "deloyale", "formes", "droit"]
  },
  {
    id: "e3-droit-concurrence-deloyale-elements",
    epreuve: "e3",
    domaine: "droit",
    categorie: "concurrence",
    question: "Quels éléments faut-il prouver pour engager une action en concurrence déloyale ?",
    reponse: "3 éléments cumulatifs à prouver (art. 1240 CC) : 1. Une faute : comportement déloyal contraire aux usages du commerce (intentionnel ou non). 2. Un préjudice : perte de clientèle, atteinte à l'image, baisse du chiffre d'affaires. 3. Un lien de causalité direct entre la faute et le préjudice. La partie victime (demandeur) supporte la charge de la preuve. Sanction : dommages et intérêts + cessation du comportement déloyal.",
    tags: ["concurrence", "deloyale", "preuve", "elements"]
  },
  {
    id: "e3-droit-retractation",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-consommation",
    question: "Quel est le droit de rétractation du consommateur en vente à distance ? (art. L221-18 Code conso)",
    reponse: "Art. L221-18 : le consommateur dispose d'un délai de 14 jours calendaires pour exercer son droit de rétractation sur tout contrat conclu à distance ou hors établissement, sans avoir à motiver sa décision. Le délai court : pour les biens → à compter de la réception. Pour les services → à compter de la conclusion du contrat. Le professionnel doit rembourser dans les 14 jours suivant l'exercice du droit.",
    tags: ["retractation", "consommateur", "vente-distance", "14-jours"]
  },
  {
    id: "e3-droit-retractation-exceptions",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-consommation",
    question: "Dans quels cas le droit de rétractation ne s'applique-t-il pas ? (art. L221-28)",
    reponse: "Art. L221-28 — principales exceptions : 1. Biens confectionnés selon les spécifications du consommateur ou nettement personnalisés (ex : perle gravée avec portrait). 2. Biens susceptibles de se détériorer ou de se périmer rapidement. 3. Biens descellés après livraison ne pouvant être renvoyés pour raisons d'hygiène. 4. Services pleinement exécutés avant la fin du délai (avec accord préalable du consommateur). 5. Biens mélangés de manière indissociable après livraison.",
    tags: ["retractation", "exceptions", "L221-28", "consommateur"]
  },
  {
    id: "e3-droit-produits-defectueux",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Qui est responsable du fait des produits défectueux ? (art. 1245 CC)",
    reponse: "Art. 1245 CC : le producteur est responsable du dommage causé par un défaut de son produit, qu'il soit ou non lié par un contrat avec la victime. Est producteur : le fabricant du produit fini, d'un composant ou d'une matière première. Conditions : preuve du dommage, du défaut du produit, et du lien de causalité. Cas d'exonération : défaut inconnu selon l'état des connaissances scientifiques au moment de la mise en circulation (risque de développement).",
    tags: ["produits", "defectueux", "responsabilite", "1245"]
  },
  {
    id: "e3-droit-droit-auteur",
    epreuve: "e3",
    domaine: "droit",
    categorie: "propriete-intellectuelle",
    question: "Comment naît le droit d'auteur et que protège-t-il ? (art. L111-1 CPI)",
    reponse: "Art. L111-1 CPI : l'auteur d'une œuvre de l'esprit jouit de son droit d'auteur du seul fait de la création de l'œuvre, sans formalité ni dépôt. L'œuvre doit être originale (empreinte de la personnalité de l'auteur). Le droit d'auteur comprend : droits moraux (paternité, intégrité, divulgation — perpétuels) + droits patrimoniaux (reproduction, représentation — 70 ans après décès de l'auteur). Protège : livres, films, musiques, logiciels, tutoriels créatifs…",
    tags: ["droit-auteur", "propriete-intellectuelle", "CPI", "L111-1"]
  },
  {
    id: "e3-droit-videosurveillance",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-travail",
    question: "Quelles obligations pèsent sur l'employeur qui souhaite installer un système de vidéosurveillance ? (art. L1222-4 CT)",
    reponse: "Art. L1222-4 CT : aucune information concernant personnellement un salarié ne peut être collectée par un dispositif qui n'a pas été porté préalablement à sa connaissance. Obligations : (1) Information individuelle de chaque salarié. (2) Information collective : consultation des représentants du personnel (CSE). (3) Déclaration à la CNIL. Conséquence d'un défaut d'information : les images constituent une preuve illicite, irrecevable pour justifier une sanction disciplinaire (Cass. soc., 22/09/2021).",
    tags: ["videosurveillance", "salarié", "preuve", "L1222-4"]
  },
  {
    id: "e3-droit-rgpd",
    epreuve: "e3",
    domaine: "droit",
    categorie: "donnees-personnelles",
    question: "Qu'est-ce que le RGPD et quels en sont les principes fondamentaux ?",
    reponse: "Le RGPD (Règlement Général sur la Protection des Données, 2018) encadre la collecte, le traitement et la conservation des données personnelles dans l'UE. Principes : 1. Licéité, loyauté, transparence (base légale pour traiter). 2. Limitation des finalités (données collectées pour une finalité précise). 3. Minimisation des données (collecter le strict nécessaire). 4. Exactitude (données à jour). 5. Limitation de la conservation. 6. Sécurité et confidentialité. Droit des personnes : accès, rectification, effacement ('droit à l'oubli'), portabilité.",
    tags: ["RGPD", "donnees", "protection", "UE"]
  },
  {
    id: "e3-droit-sanctions-disciplinaires",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-travail",
    question: "Quelles sont les sanctions disciplinaires qu'un employeur peut prononcer contre un salarié ?",
    reponse: "Échelle des sanctions (du moins grave au plus grave) : 1. Avertissement (écrit). 2. Mise à pied disciplinaire (suspension temporaire avec retenue de salaire). 3. Mutation disciplinaire. 4. Rétrogradation. 5. Licenciement pour faute simple, grave ou lourde. Conditions : la sanction doit être proportionnée à la faute, notifiée dans les délais légaux, et précédée d'un entretien préalable pour les sanctions importantes. Un fait déjà sanctionné ne peut pas l'être une seconde fois.",
    tags: ["sanctions", "disciplinaires", "droit-travail", "employeur"]
  },

  // ===== MANAGEMENT =====
  {
    id: "e3-mgmt-likert-4-styles",
    epreuve: "e3",
    domaine: "management",
    categorie: "styles-management",
    question: "Quels sont les 4 styles de management de Rensis Likert ?",
    reponse: "1. Autoritaire exploiteur : décisions centralisées, motivation par la peur/sanctions, communication descendante uniquement, peu de confiance. 2. Autoritaire paternaliste : décisions au sommet mais récompenses accordées, légère communication ascendante. 3. Consultatif : avis sollicités mais décisions finales au sommet, communication dans les deux sens. 4. Participatif : forte autonomie, décisions collectives, communication bidirectionnelle, récompenses intrinsèques (responsabilités, reconnaissance).",
    auteur: "Rensis Likert",
    tags: ["likert", "styles", "management", "auteur"]
  },
  {
    id: "e3-mgmt-likert-participatif-detail",
    epreuve: "e3",
    domaine: "management",
    categorie: "styles-management",
    question: "Quelles sont les 4 caractéristiques précises du style participatif selon Likert ?",
    reponse: "1. Décisions prises collectivement : les salariés participent aux décisions stratégiques et opérationnelles. 2. Communication bidirectionnelle : information circule librement dans les deux sens (descendante et ascendante). 3. Forte autonomie : les collaborateurs sont responsabilisés sur leurs missions. 4. Récompenses intrinsèques : motivation par la reconnaissance, les responsabilités, le développement professionnel (≠ simples primes financières). Indicateurs textuels : 'j'en ai fait part à l'ensemble du personnel', 'prime de partage de la valeur', 'je passe saluer chacun'.",
    auteur: "Rensis Likert",
    tags: ["likert", "participatif", "criteres", "management"]
  },
  {
    id: "e3-mgmt-blake-mouton",
    epreuve: "e3",
    domaine: "management",
    categorie: "styles-management",
    question: "Comment fonctionne la grille managériale de Blake et Mouton ? Quels sont les 5 styles repères ?",
    reponse: "Grille 9×9 croisant deux axes : orientation vers la production (tâches, résultats) et orientation vers les personnes (relations humaines). 5 styles repères : 9.1 (fort résultats / faible personnes = autocrate). 1.9 (faible résultats / fort personnes = social). 1.1 (faible résultats / faible personnes = laisser-faire). 5.5 (équilibre modéré des deux = compromis). 9.9 (fort résultats / fort personnes = style intégrateur — idéal). Ex : Dominique Partol → profil 9.9 (exigence + humanisme).",
    auteur: "Robert Blake et Jane Mouton",
    tags: ["blake", "mouton", "grille", "management"]
  },
  {
    id: "e3-mgmt-diagnostic-interne",
    epreuve: "e3",
    domaine: "management",
    categorie: "diagnostic",
    question: "Quels sont les 4 types de ressources analysés dans un diagnostic interne ?",
    reponse: "1. Ressources humaines : effectifs, compétences, qualification, motivation, conditions de travail, politique de formation. 2. Ressources matérielles : équipements, locaux, technologies, outils de production. 3. Ressources financières : chiffre d'affaires, rentabilité, capacité d'endettement, trésorerie. 4. Ressources immatérielles : marque, réputation, brevets, savoir-faire, relations clients, licences. Le diagnostic interne identifie les forces (avantages concurrentiels) et faiblesses (vulnérabilités) de l'entreprise.",
    tags: ["diagnostic", "interne", "ressources", "management"]
  },
  {
    id: "e3-mgmt-pestel",
    epreuve: "e3",
    domaine: "management",
    categorie: "diagnostic",
    question: "Quels sont les 6 facteurs de l'analyse PESTEL ?",
    reponse: "P — Politique : stabilité gouvernementale, réglementations, fiscalité. E — Économique : croissance, inflation, chômage, taux d'intérêt, pouvoir d'achat. S — Socioculturel : démographie, valeurs, modes de consommation, tendances (ex : essor du DIY). T — Technologique : innovations, numérisation, R&D, intelligence artificielle. E — Écologique : contraintes environnementales, RSE, éco-conception. L — Légal : droit du travail, droit de la consommation, propriété intellectuelle.",
    tags: ["PESTEL", "diagnostic", "externe", "environnement"]
  },
  {
    id: "e3-mgmt-5-forces-porter",
    epreuve: "e3",
    domaine: "management",
    categorie: "diagnostic",
    question: "Quelles sont les 5 forces concurrentielles de Michael Porter ?",
    reponse: "1. Rivalité entre concurrents existants (intensité concurrentielle). 2. Menace de nouveaux entrants (barrières à l'entrée). 3. Menace des produits de substitution (alternatives). 4. Pouvoir de négociation des fournisseurs (dépendance amont). 5. Pouvoir de négociation des clients (dépendance aval). Plus ces forces sont fortes, moins le secteur est attractif. Ex : marché Notarius — faibles nouveaux entrants (barrières technologiques élevées), fort pouvoir des quelques acteurs en place.",
    auteur: "Michael Porter",
    tags: ["porter", "5-forces", "concurrence", "strategie"]
  },
  {
    id: "e3-mgmt-chaine-valeur",
    epreuve: "e3",
    domaine: "management",
    categorie: "strategie",
    question: "Comment fonctionne la chaîne de valeur de Porter ? Distinguez activités primaires et de soutien.",
    reponse: "La chaîne de valeur décompose les activités de l'entreprise créatrices de valeur. Activités primaires (5) : logistique entrante, production/opérations, logistique sortante, commercialisation/vente, service après-vente. Activités de soutien (4) : infrastructure (gestion générale), GRH, développement technologique, approvisionnements. La marge = valeur totale créée − coût de toutes les activités. Analyser la chaîne permet d'identifier où l'entreprise crée le plus de valeur et ce qu'il vaut mieux internaliser ou externaliser.",
    auteur: "Michael Porter",
    tags: ["chaine-valeur", "porter", "activites", "strategie"]
  },
  {
    id: "e3-mgmt-faire-faire-faire",
    epreuve: "e3",
    domaine: "management",
    categorie: "strategie",
    question: "Quand est-il préférable d'internaliser ('faire') plutôt qu'externaliser ('faire-faire') ?",
    reponse: "Internaliser ('faire') est préférable si : (1) l'activité est stratégique et génère un avantage concurrentiel clé. (2) La marge réalisée en interne est supérieure à l'achat externe. (3) L'entreprise souhaite maîtriser la qualité et éviter la dépendance fournisseur. Externaliser ('faire-faire') est préférable si : (1) l'activité est périphérique ou non stratégique. (2) Le fournisseur externe est plus compétent et moins coûteux. (3) L'entreprise veut se concentrer sur son cœur de métier. Ex : kits Tout en perles → marge 65% > marge globale 51% → internaliser est pertinent.",
    tags: ["faire", "faire-faire", "externalisation", "strategie"]
  },
  {
    id: "e3-mgmt-si-fonctions",
    epreuve: "e3",
    domaine: "management",
    categorie: "systeme-information",
    question: "Quelles sont les 4 fonctions d'un système d'information (SI) ?",
    reponse: "1. Collecter : recueillir les données internes (commandes, stocks) et externes (marché, clients). 2. Traiter : analyser et transformer les données brutes en informations utiles à la décision. 3. Stocker : conserver et sécuriser les données (bases de données, cloud). 4. Diffuser : transmettre les informations aux utilisateurs concernés (tableaux de bord, rapports, alertes). Un SI performant améliore la réactivité, la coordination et la qualité des décisions.",
    tags: ["SI", "systeme-information", "fonctions", "digital"]
  },
  {
    id: "e3-mgmt-structures-orga",
    epreuve: "e3",
    domaine: "management",
    categorie: "organisation",
    question: "Quels sont les 4 principaux types de structures organisationnelles ?",
    reponse: "1. Fonctionnelle : regroupement par fonctions (commercial, production, finance…). Avantage : spécialisation. Inconvénient : cloisonnement (silos). 2. Divisionnelle : regroupement par produit, marché ou zone géographique. 3. Matricielle : double rattachement (fonction + projet/produit). 4. Par projets : organisation temporaire autour d'équipes projet transversales. Ex Notarius : structure fonctionnelle en open space + projets transversaux et télétravail pour plus de flexibilité.",
    tags: ["structure", "organisation", "fonctionnelle", "matricielle"]
  },
  {
    id: "e3-mgmt-logique-entrepreneuriale",
    epreuve: "e3",
    domaine: "management",
    categorie: "entrepreneuriat",
    question: "Quelle est la différence entre logique entrepreneuriale et logique managériale ?",
    reponse: "Logique entrepreneuriale : identification d'une opportunité de marché, prise de risque, innovation, création de valeur nouvelle, vision long terme. Caractéristiques : initiative, créativité, tolérance à l'échec ('l'échec est un diplôme qui sert à grandir'). Logique managériale : coordination des ressources existantes, optimisation des processus, atteinte des objectifs fixés, gestion au quotidien. Un dirigeant peut combiner les deux logiques (ex : Dominique Partol — entrepreneur à l'origine + gestionnaire au quotidien).",
    tags: ["entrepreneurial", "managerial", "logique", "dirigeant"]
  },
  {
    id: "e3-mgmt-solopreneur",
    epreuve: "e3",
    domaine: "management",
    categorie: "entrepreneuriat",
    question: "Qu'est-ce qu'un solopreneur ?",
    reponse: "Un solopreneur est un entrepreneur indépendant, généralement digitalisé, qui a créé et qui dirige seul une entreprise unipersonnelle (ou très petite structure), en cohérence avec son style de vie. Il cumule les rôles de dirigeant, commercial, gestionnaire et parfois opérationnel. Caractéristiques : forte autonomie, polyvalence, utilisation intensive des outils numériques, modèle économique adapté à une gestion solo. Ex : Dominique Partol (Tout en perles) — dirigeant et gestionnaire de l'ensemble des fonctions de l'entreprise.",
    tags: ["solopreneur", "entrepreneuriat", "independant"]
  },
  {
    id: "e3-mgmt-prime-partage-valeur",
    epreuve: "e3",
    domaine: "management",
    categorie: "rh",
    question: "Qu'est-ce que la prime de partage de la valeur (ex-prime Macron) ?",
    reponse: "La prime de partage de la valeur (PPV, loi du 16 août 2022) est une prime facultative versée par l'employeur à ses salariés. Caractéristiques : montant plafonné (3 000 € ou 6 000 € avec accord d'intéressement), exonérée de cotisations sociales patronales et salariales (sous conditions de revenus), versée en une ou plusieurs fois dans l'année. Elle constitue un outil de reconnaissance et de motivation collective, permettant de partager les bénéfices de l'entreprise sans augmenter les salaires fixes.",
    tags: ["prime", "partage", "valeur", "RH", "motivation"]
  }
];
