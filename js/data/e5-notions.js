const E5_NOTIONS = [
  // --- Portefeuille clients ---
  {
    id: "e5-portef-definition",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "portefeuille-clients",
    question: "Qu'est-ce qu'un portefeuille clients et selon quels critères le segmente-t-on ?",
    reponse: "Le portefeuille clients est l'ensemble des clients actuels d'une entreprise. On le segmente selon 3 critères principaux : 1. Valeur : CA réalisé avec le client (historique). 2. Potentiel : CA que le client pourrait générer dans le futur (taille de l'entreprise cliente, secteur, projets). 3. Fidélité : ancienneté, fréquence des commandes, risque de churn. L'objectif est de hiérarchiser les clients pour adapter les efforts commerciaux (temps, fréquence de contact, offres).",
    tags: ["portefeuille", "clients", "segmentation", "commercial"]
  },
  {
    id: "e5-portef-pareto-abc",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "portefeuille-clients",
    question: "Expliquez la méthode ABC / règle de Pareto appliquée au portefeuille clients.",
    reponse: "Règle de Pareto (80/20) : environ 20% des clients génèrent 80% du chiffre d'affaires. Méthode ABC : Catégorie A (top 20% des clients, ~80% du CA) → priorité maximale, suivi personnalisé. Catégorie B (30% des clients, ~15% du CA) → potentiel à développer. Catégorie C (50% des clients, ~5% du CA) → traitement économique (téléphone, email, pas de visite terrain). Ex Visio Plus : 15 premiers clients = 76% du CA → forte concentration, risque si départ d'un client A.",
    tags: ["pareto", "ABC", "portefeuille", "segmentation"]
  },
  {
    id: "e5-portef-taux-marque",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "indicateurs-commerciaux",
    question: "Quelle est la formule du taux de marque brute et en quoi diffère-t-il du taux de marge ?",
    reponse: "Taux de marque brute = (Prix de vente HT − Prix d'achat HT) / Prix de vente HT × 100. Exprime la marge en % du prix de vente. Taux de marge commerciale = (Prix de vente HT − Prix d'achat HT) / Prix d'achat HT × 100. Exprime la marge en % du prix d'achat. Différence clé : dénominateur différent. Taux de marque toujours < taux de marge (pour le même produit). Ex : PV=100, PA=60 → marge=40 → taux de marque=40%, taux de marge=66,7%.",
    tags: ["taux-marque", "marge", "formule", "calcul"]
  },
  {
    id: "e5-portef-remuneration-variable",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "organisation-commerciale",
    question: "Quelles sont les composantes d'une rémunération variable pour un commercial ?",
    reponse: "1. Partie fixe : salaire garanti versé indépendamment des résultats. Sécurise le revenu mais ne motive pas la performance. 2. Commission : % du CA réalisé (dès le 1er euro ou au-delà d'un seuil). 3. Prime sur objectif : versée si un objectif est atteint ou dépassé. 4. Bonus : prime exceptionnelle (acquisition d'un grand compte, performance remarquable). L'architecture idéale : fixe attractif + variable incitatif avec seuil de déclenchement pour protéger l'entreprise si performances insuffisantes.",
    tags: ["remuneration", "variable", "commercial", "commission"]
  },
  // --- Indicateurs digitaux ---
  {
    id: "e5-digital-taux-ouverture",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux d'ouverture (email) et quel est son benchmark en B2B ?",
    reponse: "Taux d'ouverture = (Nombre d'emails ouverts / Nombre d'emails délivrés) × 100. Mesure l'attractivité de l'objet de l'email et la pertinence du moment d'envoi. Benchmark B2B : ~20-25%. Leviers d'amélioration : personnaliser l'objet (prénom, entreprise), tester les heures/jours d'envoi (mardi-jeudi matin souvent efficaces), segmenter la liste, nettoyer les contacts inactifs.",
    tags: ["email", "ouverture", "benchmark", "emailing"]
  },
  {
    id: "e5-digital-taux-clics",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux de clics (CTR) en emailing et comment l'améliorer ?",
    reponse: "CTR (Click-Through Rate) = (Nombre de clics / Nombre d'emails délivrés) × 100. Mesure l'engagement avec le contenu de l'email (intérêt pour l'offre, l'appel à l'action). Benchmark B2B : ~2-5%. Leviers d'amélioration : rédiger un CTA (call-to-action) clair et visible ('Demander un devis', 'Voir les offres'), personnaliser le contenu selon le segment, réduire le texte et privilégier les visuels, tester les couleurs/positions du bouton CTA.",
    tags: ["CTR", "clics", "emailing", "CTA"]
  },
  {
    id: "e5-digital-taux-conversion",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux de conversion d'un site web et quel est son benchmark en e-commerce ?",
    reponse: "Taux de conversion = (Nombre d'actions réalisées / Nombre de visiteurs) × 100. L'action peut être : achat, demande de devis, inscription, téléchargement. Benchmark e-commerce B2C : ~1-3%. Benchmark B2B : ~0,5-1,5%. Leviers d'amélioration : simplifier le tunnel d'achat, afficher les avis clients, rassurer sur la sécurité du paiement, réduire les étapes du formulaire, optimiser la vitesse du site, personnaliser selon le segment.",
    tags: ["conversion", "e-commerce", "site-web", "benchmark"]
  },
  {
    id: "e5-digital-taux-rebond",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux de rebond et à partir de quel seuil est-il problématique ?",
    reponse: "Taux de rebond = % de visiteurs qui quittent le site après avoir consulté une seule page, sans interaction. Seuil d'alerte : > 60-70% est préoccupant (signifie que la page d'entrée ne répond pas aux attentes). Causes : page d'accueil non pertinente vs l'annonce cliquée, temps de chargement trop long (>3 secondes), contenu peu clair, site non adapté au mobile, visiteurs non ciblés. L'objectif est de maintenir les visiteurs sur le site et de les guider vers la conversion.",
    tags: ["rebond", "site-web", "UX", "optimisation"]
  },
  {
    id: "e5-digital-cac",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le Coût d'Acquisition Client (CAC) et comment l'utiliser ?",
    reponse: "CAC = Total des dépenses marketing et commerciales / Nombre de nouveaux clients acquis sur la période. Mesure l'efficacité économique des actions d'acquisition. Plus le CAC est bas, plus l'acquisition est rentable. À mettre en relation avec la LTV (Lifetime Value) — valeur totale générée par un client sur toute sa durée de vie. Règle : LTV > CAC (idéalement LTV ≥ 3×CAC). Utilisation : comparer l'efficacité des canaux (Instagram, email, SEO, bouche-à-oreille).",
    tags: ["CAC", "acquisition", "couts", "ROI"]
  },
  // --- CRM et relation client ---
  {
    id: "e5-crm-definition",
    epreuve: "e5",
    domaine: "digital",
    categorie: "crm",
    question: "Définissez le CRM et ses 3 objectifs principaux.",
    reponse: "CRM (Customer Relationship Management) est un logiciel et une stratégie de gestion de la relation client. Il centralise toutes les données clients (coordonnées, historique d'achats, interactions, préférences). 3 objectifs : 1. Fidélisation : maintenir et approfondir la relation client dans la durée. 2. Personnalisation : adapter les offres et communications à chaque segment ou client. 3. Automatisation : déclencher des actions commerciales automatisées (email de bienvenue, relance panier, anniversaire, devis de suivi). Le CRM est le pivot de toute stratégie omnicanale.",
    tags: ["CRM", "relation-client", "fidelisation", "digital"]
  },
  {
    id: "e5-crm-parcours-client",
    epreuve: "e5",
    domaine: "digital",
    categorie: "crm",
    question: "Qu'est-ce qu'un parcours client omnicanal ? Donnez ses étapes clés.",
    reponse: "Le parcours client omnicanal est l'ensemble des interactions qu'un client a avec une marque, sur tous les canaux, de la découverte à la fidélisation. Étapes : 1. Awareness (découverte) : réseaux sociaux, pub, bouche-à-oreille. 2. Considération : visite site, comparaison, lecture d'avis. 3. Achat : site web, marketplace, point de vente. 4. Post-achat : confirmation email, SAV, satisfaction. 5. Fidélisation : programme fidélité, newsletter, offres personnalisées. L'omnicanal garantit la cohérence de l'expérience sur tous les points de contact.",
    tags: ["parcours-client", "omnicanal", "CRM", "digital"]
  },
  {
    id: "e5-crm-points-contact",
    epreuve: "e5",
    domaine: "digital",
    categorie: "crm",
    question: "Qu'est-ce qu'un point de contact dans un parcours client ? Donnez des exemples.",
    reponse: "Un point de contact est toute interaction entre un client et une marque, quel que soit le canal. Points de contact numériques : publicité Instagram, email, site web, chat en ligne, application mobile, notification push. Points de contact physiques : point de vente, commercial terrain, salon professionnel, livraison. Points de contact médiatiques : article de presse, avis en ligne, bouche-à-oreille. L'objectif : que chaque point de contact soit cohérent avec l'image de marque et guide vers l'étape suivante.",
    tags: ["points-contact", "parcours", "omnicanal", "canaux"]
  },
  // --- Distribution et canaux ---
  {
    id: "e5-distrib-canaux",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "distribution",
    question: "Quelle est la différence entre canal direct, canal indirect et stratégie omnicanale ?",
    reponse: "Canal direct : le producteur vend directement au consommateur sans intermédiaire (ex : site propre de Tout en perles, boutique en propre). Canal indirect : vente via des intermédiaires (grossistes, détaillants, marketplace comme Etsy). Multicanal : plusieurs canaux coexistent mais séparément (site propre + Etsy = multicanal). Omnicanal : intégration complète de tous les canaux pour une expérience client homogène — le client passe fluidement de l'un à l'autre (voir son panier abandonné sur mobile puis le retrouver sur desktop).",
    tags: ["canaux", "distribution", "omnicanal", "multicanal"]
  },
  {
    id: "e5-distrib-pure-player",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "distribution",
    question: "Qu'est-ce qu'un pure player et quels sont ses avantages et limites ?",
    reponse: "Un pure player est une entreprise dont l'activité commerciale se déroule exclusivement en ligne, sans point de vente physique. Ex : Tout en perles (site internet uniquement). Avantages : coûts de structure réduits (pas de loyer boutique), zone de chalandise nationale/internationale, ouverture 24h/24, personnalisation facile. Limites : absence de contact physique (frein pour certains acheteurs), dépendance aux algorithmes de référencement, coûts logistiques (emballage, retours), confiance à construire à distance.",
    tags: ["pure-player", "e-commerce", "digital", "canaux"]
  },
  {
    id: "e5-distrib-marketplace",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "distribution",
    question: "Comment fonctionne une marketplace et quels en sont les avantages/inconvénients pour un vendeur ?",
    reponse: "Une marketplace (place de marché) est une plateforme mettant en relation vendeurs et acheteurs (ex : Etsy, Amazon, Leboncoin). Le vendeur référence ses produits, la plateforme gère le paiement et la visibilité. Avantages vendeur : accès immédiat à une large base de clients, notoriété de la plateforme, infrastructure technique fournie. Inconvénients : commission sur chaque vente (5-15%), forte concurrence entre vendeurs, dépendance à la plateforme (risque de déréférencement), données clients appartenant à la plateforme, image de marque moins maîtrisée.",
    tags: ["marketplace", "Etsy", "vente", "avantages"]
  },
  {
    id: "e5-distrib-extranet",
    epreuve: "e5",
    domaine: "digital",
    categorie: "outils-digitaux",
    question: "Qu'est-ce qu'un extranet client ? Quels en sont les avantages et inconvénients ?",
    reponse: "Un extranet client est une extension privée du site web d'une entreprise, accessible uniquement aux clients authentifiés. Fonctionnalités : suivi des commandes en temps réel, historique des achats, factures, contact direct avec le commercial. Avantages : fidélisation accrue (autonomie du client), réduction des appels SAV, renforcement de la relation, différenciation concurrentielle. Inconvénients : coût de développement et de maintenance élevé, formation des clients nécessaire, risques de sécurité informatique à gérer.",
    tags: ["extranet", "client", "B2B", "fidelisation"]
  },
  // --- Réseaux sociaux et community management ---
  {
    id: "e5-rs-community-manager",
    epreuve: "e5",
    domaine: "digital",
    categorie: "reseaux-sociaux",
    question: "Quel est le rôle d'un community manager (CM) dans une entreprise ?",
    reponse: "Le community manager est le représentant numérique de la marque sur les réseaux sociaux et plateformes en ligne. Missions : créer et publier des contenus (posts, stories, vidéos), animer et modérer la communauté (répondre aux commentaires, messages), surveiller l'e-réputation, analyser les performances (engagement, portée, followers), interagir avec les influenceurs. Il est l'interface entre la marque et ses communautés numériques.",
    tags: ["community-manager", "reseaux-sociaux", "digital", "marque"]
  },
  {
    id: "e5-rs-usages-plateformes",
    epreuve: "e5",
    domaine: "digital",
    categorie: "reseaux-sociaux",
    question: "Quels sont les usages et cibles de Facebook, Instagram, LinkedIn et Twitter/X ?",
    reponse: "Facebook : large audience (35-65 ans), B2C, notoriété locale, publicité ciblée, événements. Instagram : audience jeune (18-35 ans), contenu visuel fort (photos, reels, stories), idéal pour produits esthétiques (artisanat, mode, bijoux, restauration), B2C. LinkedIn : réseau professionnel B2B, recrutement, prospection de décideurs, image d'expertise, partage de contenu professionnel. Twitter/X : information en temps réel, prise de position, veille, audience plutôt CSP+ et journalistes. Choisir le réseau selon la cible et le type de contenu.",
    tags: ["reseaux-sociaux", "Facebook", "Instagram", "LinkedIn", "cibles"]
  },
  {
    id: "e5-rs-fidelisation",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "relation-client",
    question: "Quels sont les principaux outils de fidélisation client ?",
    reponse: "1. Programme de fidélité : points, récompenses, avantages progressifs selon l'ancienneté ou le CA. 2. Personnalisation : offres et communications adaptées au profil du client (historique, préférences) via CRM. 3. Contenu exclusif : tutoriels, conseils, accès en avant-première (ex : tutoriels DIY de Tout en perles). 4. Extranet client : suivi personnalisé des commandes, autonomie. 5. Service après-vente réactif : satisfaction et résolution rapide des problèmes. 6. Email automation : relances, anniversaire, cross-selling/up-selling personnalisé.",
    tags: ["fidelisation", "client", "CRM", "outils"]
  },
  // --- Site web e-commerce ---
  {
    id: "e5-web-rubriques-essentielles",
    epreuve: "e5",
    domaine: "digital",
    categorie: "site-web",
    question: "Quelles sont les rubriques essentielles d'un site web e-commerce performant ?",
    reponse: "Rubriques indispensables : 1. Page d'accueil claire avec proposition de valeur immédiate et CTA visible. 2. Catalogue produits avec filtres, photos, descriptifs, prix, avis clients. 3. Fiche produit détaillée (composition, dimensions, disponibilité, livraison). 4. Tunnel d'achat simplifié (panier, paiement sécurisé en 2-3 étapes). 5. Page 'À propos' / histoire de l'entreprise (réassurance). 6. Page contact avec formulaire + téléphone + adresse. 7. FAQ et mentions légales. Bonus : blog/actualités (SEO), programme fidélité, chat en ligne.",
    tags: ["site-web", "e-commerce", "rubriques", "UX"]
  },
  {
    id: "e5-web-formulaire-contact",
    epreuve: "e5",
    domaine: "digital",
    categorie: "site-web",
    question: "Quels champs doit contenir un formulaire de contact B2B pour qualifier efficacement un prospect ?",
    reponse: "Champs obligatoires pour qualification : Nom, Prénom, Email professionnel, Nom de l'entreprise, Secteur d'activité (liste déroulante), Fonction/poste, Type de besoin ou projet, Budget estimé (fourchette). Champs optionnels : Téléphone, Message libre, Comment avez-vous entendu parler de nous ? (source). Ces informations permettent au CRM de qualifier automatiquement le prospect, de l'orienter vers le bon commercial et de personnaliser la réponse. Ne pas surcharger le formulaire : 6-8 champs maximum.",
    tags: ["formulaire", "contact", "B2B", "qualification", "CRM"]
  }
];
