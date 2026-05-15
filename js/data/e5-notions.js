const E5_NOTIONS = [
  // --- Portefeuille clients ---
  {
    id: "e5-portef-definition",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "portefeuille-clients",
    question: "Qu'est-ce qu'un portefeuille clients et selon quels critères le segmente-t-on ?",
    reponse: "Ensemble des clients actuels d'une entreprise. Segmentation selon 3 critères : 1. Valeur : CA historique réalisé. 2. Potentiel : CA futur possible (taille, secteur, projets). 3. Fidélité : ancienneté, fréquence des commandes, risque de churn. Objectif : hiérarchiser les clients pour adapter les efforts commerciaux.",
    tags: ["portefeuille", "clients", "segmentation", "commercial"]
  },
  {
    id: "e5-portef-pareto-abc",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "portefeuille-clients",
    question: "Expliquez la méthode ABC / règle de Pareto appliquée au portefeuille clients.",
    reponse: "Pareto (80/20) : 20% des clients génèrent 80% du CA. Méthode ABC : A (top 20%, ~80% CA) → priorité max, suivi personnalisé. B (30%, ~15% CA) → potentiel à développer. C (50%, ~5% CA) → traitement économique (téléphone, email, pas de visite). Ex Visio Plus : 15 premiers clients = 76% du CA → forte concentration.",
    tags: ["pareto", "ABC", "portefeuille", "segmentation"]
  },
  {
    id: "e5-portef-taux-marque",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "indicateurs-commerciaux",
    question: "Quelle est la formule du taux de marque brute et en quoi diffère-t-il du taux de marge ?",
    reponse: "Taux de marque = (PV HT − PA HT) / PV HT × 100 → marge en % du prix de vente. Taux de marge = (PV HT − PA HT) / PA HT × 100 → marge en % du prix d'achat. Différence : le dénominateur. Taux de marque toujours < taux de marge. Ex : PV=100, PA=60 → marque=40%, marge=66,7%.",
    tags: ["taux-marque", "marge", "formule", "calcul"]
  },
  {
    id: "e5-portef-remuneration-variable",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "organisation-commerciale",
    question: "Quelles sont les composantes d'une rémunération variable pour un commercial ?",
    reponse: "1. Fixe : salaire garanti, sécurise mais ne motive pas la performance. 2. Commission : % du CA réalisé (dès le 1er euro ou au-delà d'un seuil). 3. Prime sur objectif : versée si objectif atteint ou dépassé. 4. Bonus : prime exceptionnelle (grand compte, performance remarquable). Idéal : fixe attractif + variable avec seuil de déclenchement.",
    tags: ["remuneration", "variable", "commercial", "commission"]
  },
  // --- Indicateurs digitaux ---
  {
    id: "e5-digital-taux-ouverture",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux d'ouverture (email) et quel est son benchmark en B2B ?",
    reponse: "Taux d'ouverture = (emails ouverts / emails délivrés) × 100. Mesure l'attractivité de l'objet et la pertinence du timing. Benchmark B2B : ~20-25%. Leviers : personnaliser l'objet, tester les horaires (mardi-jeudi matin), segmenter la liste, nettoyer les inactifs.",
    tags: ["email", "ouverture", "benchmark", "emailing"]
  },
  {
    id: "e5-digital-taux-clics",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux de clics (CTR) en emailing et comment l'améliorer ?",
    reponse: "CTR = (clics / emails délivrés) × 100. Mesure l'engagement avec le contenu. Benchmark B2B : ~2-5%. Leviers : CTA clair et visible ('Demander un devis'), personnaliser le contenu selon le segment, limiter le texte, tester la couleur et position du bouton.",
    tags: ["CTR", "clics", "emailing", "CTA"]
  },
  {
    id: "e5-digital-taux-conversion",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux de conversion d'un site web et quel est son benchmark en e-commerce ?",
    reponse: "Taux de conversion = (actions réalisées / visiteurs) × 100. Action : achat, devis, inscription, téléchargement. Benchmark B2C : ~1-3%. Benchmark B2B : ~0,5-1,5%. Leviers : simplifier le tunnel, afficher les avis clients, rassurer sur la sécurité, réduire les étapes du formulaire.",
    tags: ["conversion", "e-commerce", "site-web", "benchmark"]
  },
  {
    id: "e5-digital-taux-rebond",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le taux de rebond et à partir de quel seuil est-il problématique ?",
    reponse: "% de visiteurs quittant le site après une seule page sans interaction. Seuil d'alerte : >60-70%. Causes : page non pertinente vs l'annonce, chargement lent (>3s), contenu flou, site non adapté au mobile, trafic non ciblé.",
    tags: ["rebond", "site-web", "UX", "optimisation"]
  },
  {
    id: "e5-digital-cac",
    epreuve: "e5",
    domaine: "digital",
    categorie: "indicateurs-digitaux",
    question: "Qu'est-ce que le Coût d'Acquisition Client (CAC) et comment l'utiliser ?",
    reponse: "CAC = dépenses marketing et commerciales / nouveaux clients acquis. Plus le CAC est bas → acquisition plus rentable. À comparer à la LTV (valeur totale générée par un client). Règle : LTV ≥ 3 × CAC. Permet de comparer l'efficacité des canaux (Instagram, email, SEO, bouche-à-oreille).",
    tags: ["CAC", "acquisition", "couts", "ROI"]
  },
  // --- CRM et relation client ---
  {
    id: "e5-crm-definition",
    epreuve: "e5",
    domaine: "digital",
    categorie: "crm",
    question: "Définissez le CRM et ses 3 objectifs principaux.",
    reponse: "Logiciel et stratégie centralisant toutes les données clients (coordonnées, historique d'achats, interactions, préférences). 3 objectifs : 1. Fidélisation : approfondir la relation dans la durée. 2. Personnalisation : adapter offres et communications par segment. 3. Automatisation : actions déclenchées automatiquement (email bienvenue, relance, anniversaire).",
    tags: ["CRM", "relation-client", "fidelisation", "digital"]
  },
  {
    id: "e5-crm-parcours-client",
    epreuve: "e5",
    domaine: "digital",
    categorie: "crm",
    question: "Qu'est-ce qu'un parcours client omnicanal ? Donnez ses étapes clés.",
    reponse: "Ensemble des interactions client-marque sur tous les canaux, de la découverte à la fidélisation. Étapes : 1. Découverte (réseaux, pub, bouche-à-oreille). 2. Considération (site, comparaison, avis). 3. Achat (site, marketplace, PDV). 4. Post-achat (email, SAV). 5. Fidélisation (programme, newsletter, offres perso). L'omnicanal garantit la cohérence à chaque étape.",
    tags: ["parcours-client", "omnicanal", "CRM", "digital"]
  },
  {
    id: "e5-crm-points-contact",
    epreuve: "e5",
    domaine: "digital",
    categorie: "crm",
    question: "Qu'est-ce qu'un point de contact dans un parcours client ? Donnez des exemples.",
    reponse: "Toute interaction entre un client et une marque. Numériques : publicité, email, site web, chat, app mobile, notification push. Physiques : point de vente, commercial terrain, salon, livraison. Médiatiques : presse, avis en ligne, bouche-à-oreille. Objectif : cohérence à chaque étape et guidage vers la suivante.",
    tags: ["points-contact", "parcours", "omnicanal", "canaux"]
  },
  // --- Distribution et canaux ---
  {
    id: "e5-distrib-canaux",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "distribution",
    question: "Quelle est la différence entre canal direct, canal indirect et stratégie omnicanale ?",
    reponse: "Canal direct : producteur → consommateur sans intermédiaire (ex : site propre). Canal indirect : via des intermédiaires (grossistes, marketplace Etsy). Multicanal : plusieurs canaux séparés. Omnicanal : intégration complète — le client passe fluidement d'un canal à l'autre (panier vu sur mobile retrouvé sur desktop).",
    tags: ["canaux", "distribution", "omnicanal", "multicanal"]
  },
  {
    id: "e5-distrib-pure-player",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "distribution",
    question: "Qu'est-ce qu'un pure player et quels sont ses avantages et limites ?",
    reponse: "Entreprise commerciale exclusivement en ligne, sans point de vente physique. Avantages : coûts réduits (pas de loyer), zone nationale/internationale, ouverture 24h/24. Limites : pas de contact physique, dépendance aux algorithmes, coûts logistiques, confiance à construire à distance.",
    tags: ["pure-player", "e-commerce", "digital", "canaux"]
  },
  {
    id: "e5-distrib-marketplace",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "distribution",
    question: "Comment fonctionne une marketplace et quels en sont les avantages/inconvénients pour un vendeur ?",
    reponse: "Plateforme mettant en relation vendeurs et acheteurs (Etsy, Amazon). Avantages : audience large immédiate, notoriété de la plateforme, infrastructure fournie. Inconvénients : commission 5-15%, forte concurrence entre vendeurs, dépendance à la plateforme, données clients appartenant à la plateforme.",
    tags: ["marketplace", "Etsy", "vente", "avantages"]
  },
  {
    id: "e5-distrib-extranet",
    epreuve: "e5",
    domaine: "digital",
    categorie: "outils-digitaux",
    question: "Qu'est-ce qu'un extranet client ? Quels en sont les avantages et inconvénients ?",
    reponse: "Extension privée du site web accessible aux seuls clients authentifiés. Fonctionnalités : suivi commandes, historique, factures, contact commercial. Avantages : fidélisation, réduction des appels SAV, différenciation. Inconvénients : coût de développement et maintenance, formation des clients, risques sécurité.",
    tags: ["extranet", "client", "B2B", "fidelisation"]
  },
  // --- Réseaux sociaux et community management ---
  {
    id: "e5-rs-community-manager",
    epreuve: "e5",
    domaine: "digital",
    categorie: "reseaux-sociaux",
    question: "Quel est le rôle d'un community manager (CM) dans une entreprise ?",
    reponse: "Représentant numérique de la marque sur les réseaux et plateformes. Missions : créer et publier des contenus (posts, stories, vidéos), animer et modérer la communauté, surveiller l'e-réputation, analyser les performances (engagement, portée, followers), gérer les influenceurs.",
    tags: ["community-manager", "reseaux-sociaux", "digital", "marque"]
  },
  {
    id: "e5-rs-usages-plateformes",
    epreuve: "e5",
    domaine: "digital",
    categorie: "reseaux-sociaux",
    question: "Quels sont les usages et cibles de Facebook, Instagram, LinkedIn et Twitter/X ?",
    reponse: "Facebook : 35-65 ans, B2C, notoriété locale, publicité ciblée, événements. Instagram : 18-35 ans, visuel fort (photos, reels, stories), artisanat/mode/bijoux, B2C. LinkedIn : réseau pro B2B, recrutement, prospection de décideurs, partage d'expertise. Twitter/X : info en temps réel, veille, CSP+ et journalistes.",
    tags: ["reseaux-sociaux", "Facebook", "Instagram", "LinkedIn", "cibles"]
  },
  {
    id: "e5-rs-fidelisation",
    epreuve: "e5",
    domaine: "commercial",
    categorie: "relation-client",
    question: "Quels sont les principaux outils de fidélisation client ?",
    reponse: "1. Programme de fidélité : points, récompenses progressives selon le CA. 2. Personnalisation via CRM (historique, préférences). 3. Contenu exclusif : tutoriels, avant-première (ex : tutoriels DIY Tout en perles). 4. Extranet client : suivi personnalisé, autonomie. 5. SAV réactif. 6. Email automation : relances, anniversaire, cross-selling/up-selling.",
    tags: ["fidelisation", "client", "CRM", "outils"]
  },
  // --- Site web e-commerce ---
  {
    id: "e5-web-rubriques-essentielles",
    epreuve: "e5",
    domaine: "digital",
    categorie: "site-web",
    question: "Quelles sont les rubriques essentielles d'un site web e-commerce performant ?",
    reponse: "1. Accueil : proposition de valeur claire + CTA visible. 2. Catalogue : filtres, photos, descriptifs, prix, avis. 3. Fiche produit : composition, disponibilité, livraison. 4. Tunnel d'achat simplifié (2-3 étapes, paiement sécurisé). 5. À propos (réassurance). 6. Contact : formulaire + téléphone + adresse. 7. FAQ et mentions légales.",
    tags: ["site-web", "e-commerce", "rubriques", "UX"]
  },
  {
    id: "e5-web-formulaire-contact",
    epreuve: "e5",
    domaine: "digital",
    categorie: "site-web",
    question: "Quels champs doit contenir un formulaire de contact B2B pour qualifier efficacement un prospect ?",
    reponse: "Champs indispensables : Nom, Prénom, Email pro, Entreprise, Secteur, Fonction, Type de besoin, Budget (fourchette). Champs optionnels : Téléphone, Message, Source. Objectif : qualifier le prospect pour le CRM et orienter vers le bon commercial. Maximum 6-8 champs.",
    tags: ["formulaire", "contact", "B2B", "qualification", "CRM"]
  }
];
