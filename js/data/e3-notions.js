const E3_NOTIONS = [
  // ===== ÉCONOMIE =====
  {
    id: "e3-eco-agents-definition",
    epreuve: "e3",
    domaine: "economie",
    categorie: "agents-economiques",
    question: "Quels sont les 5 grands agents économiques et leur rôle principal ?",
    reponse: "1. Ménages : consomment, fournissent du travail. 2. Entreprises : produisent pour réaliser un profit. 3. Administrations publiques : services publics, redistribution. 4. Institutions financières : financent l'économie (banques, assurances). 5. Reste du monde : échanges internationaux.",
    tags: ["agents", "economie", "definition"]
  },
  {
    id: "e3-eco-flux-reels-monetaires",
    epreuve: "e3",
    domaine: "economie",
    categorie: "agents-economiques",
    question: "Quelle est la différence entre flux réels et flux monétaires ?",
    reponse: "Flux réels : échanges de biens, services et facteurs de production (travail, capital). Ex : un salarié fournit du travail. Flux monétaires : contreparties financières des flux réels. Ex : l'entreprise verse un salaire. Toujours symétriques et de sens inverse.",
    tags: ["flux", "economie", "circuit"]
  },
  {
    id: "e3-eco-marche-definition",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche",
    question: "Comment se forme le prix d'équilibre sur un marché ?",
    reponse: "Prix d'équilibre = prix auquel quantité offerte = quantité demandée. Si prix > équilibre : excès d'offre → pression à la baisse. Si prix < équilibre : excès de demande → pression à la hausse.",
    tags: ["marche", "prix", "offre", "demande"]
  },
  {
    id: "e3-eco-structures-marche",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche",
    question: "Quelles sont les 4 principales structures de marché ?",
    reponse: "1. Concurrence Pure et Parfaite (CPP) : nombreux offreurs, produit homogène, libre entrée/sortie. 2. Monopole : un seul offreur. 3. Oligopole : quelques offreurs dominants (ex : Notarius — 3 acteurs). 4. Concurrence monopolistique : nombreux offreurs avec produits différenciés.",
    tags: ["structures", "marche", "concurrence", "monopole"]
  },
  {
    id: "e3-eco-barrieres-entree",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche",
    question: "Quels sont les 4 types de barrières à l'entrée sur un marché ?",
    reponse: "1. Capitalistiques : investissements initiaux très élevés (R&D, équipements). 2. Technologiques : savoir-faire difficile à reproduire, brevets. 3. Réglementaires : licences, autorisations, normes. 4. Réputation/fidélité : clientèle captive, image de marque établie.",
    tags: ["barrieres", "entree", "marche", "concurrence"]
  },
  {
    id: "e3-eco-marche-travail",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche-travail",
    question: "Comment fonctionne le marché du travail ? Qui est offreur, qui est demandeur ?",
    reponse: "Offre de travail : les salariés (proposent leurs compétences). Demande de travail : les entreprises (cherchent à embaucher). Salaire = prix du travail. Si demande > offre (pénurie) : salaires augmentent, pouvoir de négociation des salariés s'accroît (ex : développeurs IT — 2,5 offres/candidat).",
    tags: ["marche", "travail", "offre", "demande", "salaire"]
  },
  {
    id: "e3-eco-tension-travail",
    epreuve: "e3",
    domaine: "economie",
    categorie: "marche-travail",
    question: "Comment mesure-t-on la tension sur le marché du travail ?",
    reponse: "Indice de tension = offres d'emploi / candidats disponibles. Si > 1 : pénurie. Indicateurs complémentaires : intensité d'embauches, manque de main-d'œuvre, inadéquation formation-emploi. Ex : ingénieurs IT → tension 2,5, rang 4/30 (Pôle Emploi).",
    tags: ["tension", "travail", "indicateurs", "penuries"]
  },
  {
    id: "e3-eco-role-etat",
    epreuve: "e3",
    domaine: "economie",
    categorie: "regulation",
    question: "Quelles sont les 3 fonctions économiques de l'État selon Musgrave ?",
    reponse: "1. Allocation : produire les biens publics que le marché ne fournit pas (routes, défense, éducation). 2. Redistribution : réduire les inégalités via impôts progressifs et prestations sociales. 3. Stabilisation : lisser les cycles économiques (relance en récession). Peut aussi réguler la concurrence (DGCCRF).",
    auteur: "Richard Musgrave",
    tags: ["etat", "fonctions", "regulation", "economie"]
  },
  {
    id: "e3-eco-inflation",
    epreuve: "e3",
    domaine: "economie",
    categorie: "macroeconomie",
    question: "Définissez l'inflation et ses effets sur le pouvoir d'achat des ménages.",
    reponse: "Hausse générale et durable des prix, mesurée par l'IPC. Effets : baisse du pouvoir d'achat (si salaires n'augmentent pas autant), réduction de la valeur réelle des dettes (favorable aux emprunteurs), perturbation des décisions économiques. Lien DIY : l'inflation pousse à 'faire soi-même' pour économiser.",
    tags: ["inflation", "pouvoir-achat", "macroeconomie"]
  },
  {
    id: "e3-eco-innovation-schumpeter",
    epreuve: "e3",
    domaine: "economie",
    categorie: "innovation",
    question: "Comment Schumpeter définit-il l'innovation ? Quels sont ses 4 types ?",
    reponse: "Moteur de la croissance par 'destruction créatrice' : nouvelles combinaisons de facteurs détruisent les anciennes. 4 types : 1. Produit (nouveau bien ou service). 2. Procédé (nouveau processus de production). 3. Commerciale/organisationnelle (nouveau marché, méthode). 4. Rupture (remet en cause tout le secteur).",
    auteur: "Joseph Schumpeter",
    tags: ["innovation", "schumpeter", "destruction-creatrice"]
  },
  {
    id: "e3-eco-bilan-frng",
    epreuve: "e3",
    domaine: "economie",
    categorie: "gestion-financiere",
    question: "Qu'est-ce que le FRNG et comment le calcule-t-on ?",
    reponse: "FRNG = Ressources stables − Emplois stables. Si positif : les ressources LT couvrent les investissements et dégagent un excédent pour l'exploitation. Ex Notarius : 4 340 − 4 251 = +89 K€ → structure LT saine, mais FRNG insuffisant pour couvrir le BFR.",
    tags: ["bilan", "FRNG", "financement", "gestion"]
  },
  {
    id: "e3-eco-bilan-bfr-tn",
    epreuve: "e3",
    domaine: "economie",
    categorie: "gestion-financiere",
    question: "Qu'est-ce que le BFR et la trésorerie nette ? Quelle est la relation entre les trois indicateurs ?",
    reponse: "BFR = Actif circulant − Passif circulant. Si positif : l'entreprise paie avant d'encaisser → besoin de financement. Trésorerie Nette (TN) = FRNG − BFR. Si TN < 0 : recours aux découverts bancaires → situation fragile. Ex Notarius : TN = 89 − 400 = −311 K€.",
    tags: ["BFR", "tresorerie", "bilan", "gestion"]
  },
  {
    id: "e3-eco-financement",
    epreuve: "e3",
    domaine: "economie",
    categorie: "gestion-financiere",
    question: "Quelles sont les principales sources de financement externe d'une entreprise ?",
    reponse: "1. Prêt bancaire : emprunts MT/LT pour investissements. 2. Subventions publiques : aides d'État, BPI France (prêt croissance 10 000–300 000 €). 3. Capital-risque : ouverture du capital à des investisseurs. 4. Crédit-bail (leasing) : financer des équipements sans achat immédiat. 5. Affacturage : cession des créances clients pour améliorer la trésorerie.",
    tags: ["financement", "pret", "capital", "tresorerie"]
  },
  {
    id: "e3-eco-gpec",
    epreuve: "e3",
    domaine: "economie",
    categorie: "rh",
    question: "Définissez la GPEC et ses 3 enjeux principaux.",
    reponse: "Démarche anticipant les besoins en RH à moyen terme. 3 enjeux : 1. Humains : attirer, fidéliser, développer les compétences. 2. Organisationnels : adapter effectifs et compétences aux évolutions. 3. Économiques : optimiser les coûts RH et maintenir la compétitivité. Obligatoire dans les entreprises de +300 salariés.",
    tags: ["GPEC", "RH", "competences", "management"]
  },
  {
    id: "e3-eco-mondialisation",
    epreuve: "e3",
    domaine: "economie",
    categorie: "macroeconomie",
    question: "Définissez la mondialisation et ses principaux effets positifs et négatifs.",
    reponse: "Intensification des échanges de biens, services, capitaux et personnes entre pays. Effets positifs : croissance, baisse des prix, transfert technologique, diversification des débouchés. Effets négatifs : inégalités, délocalisations, concurrence accrue, dépendances stratégiques.",
    tags: ["mondialisation", "echanges", "macroeconomie"]
  },

  // ===== DROIT =====
  {
    id: "e3-droit-sources",
    epreuve: "e3",
    domaine: "droit",
    categorie: "sources-droit",
    question: "Quelles sont les sources du droit, classées par ordre hiérarchique ?",
    reponse: "Pyramide de Kelsen (du plus élevé au plus bas) : 1. Constitution. 2. Droit européen (traités, règlements, directives). 3. Lois. 4. Règlements (décrets, arrêtés). 5. Conventions collectives. Sources non écrites : jurisprudence, coutume. Une norme inférieure ne peut contredire une norme supérieure.",
    tags: ["sources", "droit", "hierarchie", "kelsen"]
  },
  {
    id: "e3-droit-formation-contrat",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-contrats",
    question: "Quelles sont les conditions de formation d'un contrat valable ?",
    reponse: "1. Accord de volontés : offre (précise, ferme) + acceptation (pure et simple). 2. Consentement libre et éclairé : pas de vice (erreur, dol, violence). 3. Capacité juridique des parties. 4. Contenu licite et certain. Si une condition manque → contrat nul.",
    tags: ["contrat", "formation", "validite", "droit"]
  },
  {
    id: "e3-droit-vices-consentement",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-contrats",
    question: "Quels sont les 3 vices du consentement et leurs conséquences ?",
    reponse: "1. Erreur : méprise sur un élément essentiel (objet, qualité). 2. Dol : manœuvres frauduleuses ou mensonges. 3. Violence : pression physique ou morale. Conséquence : nullité relative — délai de 5 ans pour demander l'annulation. Le contrat nul est réputé n'avoir jamais existé.",
    tags: ["vices", "consentement", "contrat", "nullite"]
  },
  {
    id: "e3-droit-rc-conditions",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Quelles sont les 3 conditions cumulatives de la responsabilité civile ?",
    reponse: "3 conditions CUMULATIVES : 1. Fait générateur (faute, fait d'autrui ou de la chose). 2. Préjudice : certain, réel, prouvable (matériel, corporel ou moral). 3. Lien de causalité direct. Si une condition manque → pas de RC. Objectif : indemniser la victime (≠ pénal qui punit).",
    tags: ["responsabilite", "civile", "conditions", "droit"]
  },
  {
    id: "e3-droit-rc-contractuelle-delictuelle",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Quelle est la différence entre responsabilité civile contractuelle et délictuelle ?",
    reponse: "RC contractuelle : inexécution ou mauvaise exécution d'un contrat. RC délictuelle (art. 1240 CC) : dommage causé hors contrat (faute, fait d'une chose ou d'autrui). Règle : impossible de cumuler les deux pour un même fait. La concurrence déloyale relève de la RC délictuelle.",
    tags: ["responsabilite", "contractuelle", "delictuelle", "distinction"]
  },
  {
    id: "e3-droit-responsabilite-penale",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Quels sont les 3 types d'infractions pénales, par ordre de gravité ?",
    reponse: "1. Contravention : amende (ex : infraction routière). 2. Délit : amende + emprisonnement ≤ 10 ans (vol, abus de confiance, violence). 3. Crime : réclusion criminelle, jugé en Cour d'Assises (meurtre, viol). But : punir et dissuader (≠ RC qui indemnise).",
    tags: ["penal", "infractions", "contravention", "delit", "crime"]
  },
  {
    id: "e3-droit-concurrence-deloyale-def",
    epreuve: "e3",
    domaine: "droit",
    categorie: "concurrence",
    question: "Quelles sont les 4 formes de concurrence déloyale ?",
    reponse: "1. Dénigrement : critiques injustifiées nuisant à la réputation. 2. Imitation/confusion : signes similaires créant confusion chez les clients. 3. Parasitisme : profiter des investissements d'un concurrent sans contrepartie. 4. Désorganisation : débauchage massif, détournement de clientèle. Relève de la RC délictuelle (art. 1240 CC).",
    tags: ["concurrence", "deloyale", "formes", "droit"]
  },
  {
    id: "e3-droit-concurrence-deloyale-elements",
    epreuve: "e3",
    domaine: "droit",
    categorie: "concurrence",
    question: "Quels éléments faut-il prouver pour engager une action en concurrence déloyale ?",
    reponse: "3 éléments cumulatifs (art. 1240 CC) : 1. Faute : comportement déloyal contraire aux usages du commerce. 2. Préjudice : perte de clientèle, baisse du CA, atteinte à l'image. 3. Lien de causalité direct. La preuve est à la charge du demandeur. Sanction : dommages et intérêts + cessation du comportement.",
    tags: ["concurrence", "deloyale", "preuve", "elements"]
  },
  {
    id: "e3-droit-retractation",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-consommation",
    question: "Quel est le droit de rétractation du consommateur en vente à distance ? (art. L221-18 Code conso)",
    reponse: "Art. L221-18 : 14 jours calendaires pour se rétracter sans motif. Délai : à compter de la réception (biens) ou de la conclusion du contrat (services). Remboursement par le professionnel : dans les 14 jours suivant l'exercice du droit.",
    tags: ["retractation", "consommateur", "vente-distance", "14-jours"]
  },
  {
    id: "e3-droit-retractation-exceptions",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-consommation",
    question: "Dans quels cas le droit de rétractation ne s'applique-t-il pas ? (art. L221-28)",
    reponse: "Art. L221-28 — principales exceptions : 1. Biens personnalisés selon les spécifications du client (ex : perle gravée). 2. Biens périssables. 3. Biens descellés non retournables pour hygiène. 4. Services pleinement exécutés avec accord préalable du consommateur. 5. Biens mélangés de façon indissociable après livraison.",
    tags: ["retractation", "exceptions", "L221-28", "consommateur"]
  },
  {
    id: "e3-droit-produits-defectueux",
    epreuve: "e3",
    domaine: "droit",
    categorie: "responsabilite",
    question: "Qui est responsable du fait des produits défectueux ? (art. 1245 CC)",
    reponse: "Art. 1245 CC : le producteur est responsable du dommage causé par un défaut de son produit, même sans contrat avec la victime. Conditions : preuve du dommage + du défaut + du lien de causalité. Exonération possible : défaut inconnu selon l'état des connaissances lors de la mise en circulation.",
    tags: ["produits", "defectueux", "responsabilite", "1245"]
  },
  {
    id: "e3-droit-droit-auteur",
    epreuve: "e3",
    domaine: "droit",
    categorie: "propriete-intellectuelle",
    question: "Comment naît le droit d'auteur et que protège-t-il ? (art. L111-1 CPI)",
    reponse: "Art. L111-1 CPI : naît automatiquement à la création, sans formalité ni dépôt. L'œuvre doit être originale. Comprend : droits moraux (paternité, intégrité — perpétuels) + droits patrimoniaux (reproduction, représentation — 70 ans après décès). Protège : livres, films, musiques, logiciels, tutoriels créatifs.",
    tags: ["droit-auteur", "propriete-intellectuelle", "CPI", "L111-1"]
  },
  {
    id: "e3-droit-videosurveillance",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-travail",
    question: "Quelles obligations pèsent sur l'employeur qui souhaite installer un système de vidéosurveillance ? (art. L1222-4 CT)",
    reponse: "Art. L1222-4 CT : tout dispositif de surveillance doit être porté à la connaissance du salarié. Obligations : 1. Information individuelle de chaque salarié. 2. Consultation du CSE. 3. Déclaration à la CNIL. Défaut d'information → preuve illicite, irrecevable en disciplinaire (Cass. soc. 22/09/2021).",
    tags: ["videosurveillance", "salarié", "preuve", "L1222-4"]
  },
  {
    id: "e3-droit-rgpd",
    epreuve: "e3",
    domaine: "droit",
    categorie: "donnees-personnelles",
    question: "Qu'est-ce que le RGPD et quels en sont les principes fondamentaux ?",
    reponse: "Règlement UE (2018) encadrant collecte, traitement et conservation des données personnelles. 6 principes : 1. Licéité, loyauté, transparence. 2. Limitation des finalités. 3. Minimisation des données. 4. Exactitude. 5. Limitation de conservation. 6. Sécurité. Droits des personnes : accès, rectification, effacement, portabilité.",
    tags: ["RGPD", "donnees", "protection", "UE"]
  },
  {
    id: "e3-droit-sanctions-disciplinaires",
    epreuve: "e3",
    domaine: "droit",
    categorie: "droit-travail",
    question: "Quelles sont les sanctions disciplinaires qu'un employeur peut prononcer contre un salarié ?",
    reponse: "Échelle (du moins au plus grave) : 1. Avertissement. 2. Mise à pied disciplinaire (suspension + retenue de salaire). 3. Mutation disciplinaire. 4. Rétrogradation. 5. Licenciement (faute simple, grave ou lourde). Règles : proportionnée à la faute, entretien préalable pour les sanctions importantes, un fait déjà sanctionné ne peut l'être une 2e fois.",
    tags: ["sanctions", "disciplinaires", "droit-travail", "employeur"]
  },

  // ===== MANAGEMENT =====
  {
    id: "e3-mgmt-likert-4-styles",
    epreuve: "e3",
    domaine: "management",
    categorie: "styles-management",
    question: "Quels sont les 4 styles de management de Rensis Likert ?",
    reponse: "1. Autoritaire exploiteur : décisions centralisées, motivation par la peur, communication descendante uniquement. 2. Autoritaire paternaliste : décisions au sommet + récompenses, légère communication ascendante. 3. Consultatif : avis sollicités mais décisions finales au sommet. 4. Participatif : autonomie, décisions collectives, communication bidirectionnelle, récompenses intrinsèques.",
    auteur: "Rensis Likert",
    tags: ["likert", "styles", "management", "auteur"]
  },
  {
    id: "e3-mgmt-likert-participatif-detail",
    epreuve: "e3",
    domaine: "management",
    categorie: "styles-management",
    question: "Quelles sont les 4 caractéristiques précises du style participatif selon Likert ?",
    reponse: "1. Décisions collectives : salariés impliqués dans les décisions stratégiques et opérationnelles. 2. Communication bidirectionnelle : information circule librement dans les deux sens. 3. Forte autonomie : collaborateurs responsabilisés. 4. Récompenses intrinsèques : reconnaissance, responsabilités, développement (pas seulement primes financières).",
    auteur: "Rensis Likert",
    tags: ["likert", "participatif", "criteres", "management"]
  },
  {
    id: "e3-mgmt-blake-mouton",
    epreuve: "e3",
    domaine: "management",
    categorie: "styles-management",
    question: "Comment fonctionne la grille managériale de Blake et Mouton ? Quels sont les 5 styles repères ?",
    reponse: "Grille 9×9 : axe résultats (production) × axe personnes (relations humaines). 5 styles : 9.1 = autocrate (fort résultats, faible personnes). 1.9 = social (faible résultats, fort personnes). 1.1 = laisser-faire. 5.5 = compromis. 9.9 = intégrateur — idéal (fort sur les deux axes).",
    auteur: "Robert Blake et Jane Mouton",
    tags: ["blake", "mouton", "grille", "management"]
  },
  {
    id: "e3-mgmt-diagnostic-interne",
    epreuve: "e3",
    domaine: "management",
    categorie: "diagnostic",
    question: "Quels sont les 4 types de ressources analysés dans un diagnostic interne ?",
    reponse: "1. Ressources humaines : effectifs, compétences, motivation, formation. 2. Ressources matérielles : équipements, locaux, technologies. 3. Ressources financières : CA, rentabilité, trésorerie. 4. Ressources immatérielles : marque, brevets, savoir-faire, relations clients. Identifie les forces (avantages) et faiblesses (vulnérabilités).",
    tags: ["diagnostic", "interne", "ressources", "management"]
  },
  {
    id: "e3-mgmt-pestel",
    epreuve: "e3",
    domaine: "management",
    categorie: "diagnostic",
    question: "Quels sont les 6 facteurs de l'analyse PESTEL ?",
    reponse: "P — Politique : stabilité, fiscalité, réglementations. E — Économique : croissance, inflation, pouvoir d'achat. S — Socioculturel : démographie, tendances (ex : essor du DIY). T — Technologique : innovations, IA, numérisation. E — Écologique : RSE, normes environnementales. L — Légal : droit du travail, consommation, propriété intellectuelle.",
    tags: ["PESTEL", "diagnostic", "externe", "environnement"]
  },
  {
    id: "e3-mgmt-5-forces-porter",
    epreuve: "e3",
    domaine: "management",
    categorie: "diagnostic",
    question: "Quelles sont les 5 forces concurrentielles de Michael Porter ?",
    reponse: "1. Rivalité entre concurrents existants. 2. Menace de nouveaux entrants (barrières à l'entrée). 3. Menace des produits de substitution. 4. Pouvoir de négociation des fournisseurs. 5. Pouvoir de négociation des clients. Plus ces forces sont fortes → secteur moins attractif.",
    auteur: "Michael Porter",
    tags: ["porter", "5-forces", "concurrence", "strategie"]
  },
  {
    id: "e3-mgmt-chaine-valeur",
    epreuve: "e3",
    domaine: "management",
    categorie: "strategie",
    question: "Comment fonctionne la chaîne de valeur de Porter ? Distinguez activités primaires et de soutien.",
    reponse: "Décompose les activités créatrices de valeur. Activités primaires (5) : logistique entrante, production, logistique sortante, commercialisation/vente, SAV. Activités de soutien (4) : infrastructure, GRH, R&D technologique, approvisionnements. Marge = valeur créée − coût de toutes les activités.",
    auteur: "Michael Porter",
    tags: ["chaine-valeur", "porter", "activites", "strategie"]
  },
  {
    id: "e3-mgmt-faire-faire-faire",
    epreuve: "e3",
    domaine: "management",
    categorie: "strategie",
    question: "Quand est-il préférable d'internaliser ('faire') plutôt qu'externaliser ('faire-faire') ?",
    reponse: "Internaliser si : activité stratégique/cœur de métier, marge interne > coût externe, qualité à maîtriser. Externaliser si : activité périphérique, fournisseur plus compétent et moins coûteux, volonté de se concentrer sur le cœur de métier. Ex : kits Tout en perles → marge 65% > marge globale 51% → internaliser pertinent.",
    tags: ["faire", "faire-faire", "externalisation", "strategie"]
  },
  {
    id: "e3-mgmt-si-fonctions",
    epreuve: "e3",
    domaine: "management",
    categorie: "systeme-information",
    question: "Quelles sont les 4 fonctions d'un système d'information (SI) ?",
    reponse: "1. Collecter : données internes (commandes, stocks) et externes (marché, clients). 2. Traiter : transformer les données brutes en informations utiles à la décision. 3. Stocker : conserver et sécuriser. 4. Diffuser : transmettre aux utilisateurs (tableaux de bord, rapports, alertes).",
    tags: ["SI", "systeme-information", "fonctions", "digital"]
  },
  {
    id: "e3-mgmt-structures-orga",
    epreuve: "e3",
    domaine: "management",
    categorie: "organisation",
    question: "Quels sont les 4 principaux types de structures organisationnelles ?",
    reponse: "1. Fonctionnelle : regroupement par fonctions (commercial, finance...) — spécialisation mais cloisonnement (silos). 2. Divisionnelle : par produit, marché ou zone géographique. 3. Matricielle : double rattachement (fonction + projet). 4. Par projets : équipes transversales temporaires.",
    tags: ["structure", "organisation", "fonctionnelle", "matricielle"]
  },
  {
    id: "e3-mgmt-logique-entrepreneuriale",
    epreuve: "e3",
    domaine: "management",
    categorie: "entrepreneuriat",
    question: "Quelle est la différence entre logique entrepreneuriale et logique managériale ?",
    reponse: "Entrepreneuriale : identifier une opportunité, prendre des risques, innover, créer de la valeur nouvelle (initiative, créativité, tolérance à l'échec). Managériale : coordonner les ressources existantes, optimiser les processus, atteindre les objectifs fixés. Un dirigeant peut combiner les deux (ex : Dominique Partol).",
    tags: ["entrepreneurial", "managerial", "logique", "dirigeant"]
  },
  {
    id: "e3-mgmt-solopreneur",
    epreuve: "e3",
    domaine: "management",
    categorie: "entrepreneuriat",
    question: "Qu'est-ce qu'un solopreneur ?",
    reponse: "Entrepreneur indépendant qui crée et dirige seul une structure unipersonnelle. Cumule les rôles de dirigeant, commercial, gestionnaire et opérationnel. Forte autonomie, polyvalence, usage intensif du numérique. Ex : Dominique Partol (Tout en perles).",
    tags: ["solopreneur", "entrepreneuriat", "independant"]
  },
  {
    id: "e3-mgmt-prime-partage-valeur",
    epreuve: "e3",
    domaine: "management",
    categorie: "rh",
    question: "Qu'est-ce que la prime de partage de la valeur (ex-prime Macron) ?",
    reponse: "Prime facultative (PPV, loi août 2022) versée par l'employeur. Plafond : 3 000 € (ou 6 000 € avec accord d'intéressement). Exonérée de cotisations sociales (sous conditions de revenus). Outil de motivation collective permettant de partager les bénéfices sans hausse des salaires fixes.",
    tags: ["prime", "partage", "valeur", "RH", "motivation"]
  }
];
