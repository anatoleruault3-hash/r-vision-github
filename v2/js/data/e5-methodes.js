const E5_METHODES = [
  {
    id: "e5-methode-portefeuille-clients",
    epreuve: "e5",
    methodologie: "analyse-portefeuille",
    titre: "Analyser un portefeuille clients",
    scenario: "Contexte (annale E5 2019 — Visio Plus) :\n\nVisio Plus est une entreprise de communication visuelle (enseignes, signalétique, véhicules, objets publicitaires). Son portefeuille est de 5 000 clients dont 2% actifs en 2018. CA total 2018 = 2 408 K€.\n\nRépartition par secteur :\n- Services (dont financiers) : 908 K€ — 37,8% du CA — taux de marque 42%\n- Commerces : 674 K€ — 28% du CA — taux de marque 38%\n- Construction/BTP : 419 K€ — 17,4% du CA — taux de marque 31%\n- Administrations : 287 K€ — 11,9% du CA — taux de marque 35%\n- Industrie : 120 K€ — 5% du CA — taux de marque 28%\n\nLes 15 premiers clients représentent 76% du CA. L'entreprise a perdu son unique commercial (retraite) et cherche à se concentrer sur les clients à potentiel.",
    etapes: [
      {
        numero: 1,
        label: "Analyser le CA par segment et identifier les segments clés",
        instruction: "Commentez la répartition du CA par secteur. Croisez le volume (CA) et la rentabilité (taux de marque). Identifiez les segments les plus stratégiques.",
        placeholder: "Le secteur dominant est ...\nEn croisant CA et marge, les segments les plus stratégiques sont ...",
        correction: "Le secteur dominant est les Services (37,8% du CA, 908 K€) avec le meilleur taux de marque de l'entreprise (42%). C'est le secteur combinant le plus grand volume ET la meilleure rentabilité → segment prioritaire absolu.\n\nLes Commerces arrivent en 2e position (28% du CA, 38% de marge) : bon équilibre volume/rentabilité → à maintenir et développer.\n\nLa Construction/BTP représente 17,4% du CA mais avec un taux de marque faible (31%) → segment moyen, à surveiller sur sa rentabilité réelle.\n\nLes Administrations (11,9%, marque 35%) présentent une rentabilité correcte mais un volume limité.\n\nL'Industrie est marginale (5% du CA) avec la marge la plus basse (28%) → coûts de commercialisation vraisemblablement élevés pour un revenu faible → à déprioriser.\n\nConstat clé : forte concentration du CA sur les 15 premiers clients (76%) → risque de dépendance client élevé. Le départ d'un ou deux clients A pourrait significativement fragiliser l'entreprise.",
        conseil: "Ne commentez pas les chiffres seuls — croisez toujours volume ET marge. Un secteur à fort CA mais faible marge peut être moins intéressant qu'un secteur à CA moyen et marge élevée. C'est ce raisonnement croisé qui valorise votre analyse."
      },
      {
        numero: 2,
        label: "Appliquer la méthode ABC et hiérarchiser les cibles",
        instruction: "Appliquez la règle de Pareto (80/20) et la méthode ABC à ce portefeuille. Classifiez les clients et identifiez les cibles prioritaires pour le futur commercial.",
        placeholder: "Catégorie A : ...\nCatégorie B : ...\nCatégorie C : ...\nCibles prioritaires pour le commercial : ...",
        correction: "Application de la méthode ABC :\n\nCatégorie A (top clients, ~80% du CA) : les 15 premiers clients représentent 76% du CA → ce sont les clients A. Ils sont à traiter en priorité absolue : suivi personnalisé, visites régulières, plan de compte dédié, attention aux signaux de risque de départ.\n\nCatégorie B (clients à potentiel, ~15% du CA) : les clients moyens des secteurs Services et Commerces ayant un potentiel de développement (commandes ponctuelles, budgets à développer). À traiter avec des actions de développement (propositions d'offres complémentaires, relances ciblées).\n\nCatégorie C (petits clients, ~5% du CA) : le reste du portefeuille, notamment dans l'Industrie et la partie inactive des 5 000 clients. À traiter de façon économique (email, appels téléphoniques périodiques, pas de visite terrain).\n\nCibles prioritaires pour le commercial : (1) Les 15 premiers clients A → sécuriser et développer le CA existant. (2) Les établissements financiers et entreprises de services non encore clients → prospection ciblée dans le secteur le plus rentable.",
        conseil: "La méthode ABC n'est pas magique : elle doit s'accompagner d'une recommandation concrète sur le temps commercial à allouer à chaque catégorie. Un commercial qui passe 50% de son temps sur des clients C est inefficace."
      },
      {
        numero: 3,
        label: "Identifier les informations manquantes pour affiner l'analyse",
        instruction: "Listez les informations absentes du fichier clients qui permettraient d'affiner la segmentation et les recommandations commerciales.",
        placeholder: "Informations manquantes : ...",
        correction: "Informations manquantes pour affiner l'analyse :\n\n1. Potentiel de développement de chaque client : taille de l'entreprise cliente (effectif, CA total), budget annuel dédié à la communication visuelle → permet d'estimer le CA captable.\n\n2. Historique et fréquence des commandes : ancienneté de la relation, fréquence des achats, évolution du CA par client dans le temps → permet de distinguer clients fidèles et clients à risque.\n\n3. Niveau de satisfaction : NPS (Net Promoter Score) ou retours clients → identifier les clients susceptibles de partir.\n\n4. Informations sur le décisionnaire : nom du contact, fonction, coordonnées directes → réduit les délais de vente.\n\n5. Coûts de commercialisation spécifiques par client : temps commercial passé, déplacements → permet de calculer la marge nette réelle par client (et pas seulement le taux de marque brute).\n\n6. Projets en cours ou à venir : renouvellement d'enseigne, déménagement, nouvelle ouverture → opportunités commerciales immédiates.",
        conseil: "Les informations manquantes doivent être formulées comme des besoins précis, pas comme des généralités ('il faut plus d'infos sur les clients'). Chaque information doit être justifiée par son utilité analytique ou commerciale."
      },
      {
        numero: 4,
        label: "Proposer des actions commerciales différenciées par segment",
        instruction: "Proposez des actions commerciales concrètes adaptées à chaque catégorie de clients (A, B, C) et à chaque priorité sectorielle.",
        placeholder: "Pour les clients A : ...\nPour les clients B du secteur Services : ...\nPour les clients C (industrie, inactifs) : ...",
        correction: "Pour les clients A (15 premiers clients, 76% du CA) :\n→ Plan de compte individualisé : rendez-vous trimestriel, analyse des besoins spécifiques, offres personnalisées.\n→ Programme de fidélisation : tarifs préférentiels sur volume, réactivité prioritaire en SAV, invitation aux événements.\n→ Cartographie du risque : identifier les clients A dont les contrats arrivent à expiration ou dont la satisfaction est incertaine.\n\nPour les clients B à potentiel (Services, Commerces) :\n→ Actions de développement : proposer des devis proactifs sur les produits non encore commandés (ex : un client Commerces qui achète de la signalétique mais pas d'enseignes).\n→ Prospection dans les secteurs Services : démarchage d'établissements financiers, cabinets médicaux, agences immobilières — fort potentiel et bonne marge.\n\nPour les clients C (Industrie, inactifs) :\n→ Traitement économique : email de relance automatique annuel, pas de visite terrain.\n→ Envisager de purger le fichier des clients inactifs depuis + de 3 ans (allège le portefeuille et permet de se concentrer sur le potentiel réel).",
        conseil: "Les actions commerciales doivent être DIFFÉRENCIÉES selon la catégorie — une même action pour tous les clients n'est pas de la gestion de portefeuille. Soyez concret : 'rendez-vous trimestriel' est plus précis que 'suivi régulier'."
      }
    ]
  },
  {
    id: "e5-methode-indicateurs-digitaux",
    epreuve: "e5",
    methodologie: "indicateurs-digitaux",
    titre: "Analyser des indicateurs digitaux de performance",
    scenario: "Contexte :\n\nVisio Plus a mené une campagne emailing en T4 2018 et dispose des indicateurs suivants :\n\nEmailing :\n- Taux d'ouverture : 18%\n- Taux de clics (CTR) : 2,5%\n\nSite web :\n- Taux de conversion : 0,8%\n- Taux de rebond : 72%\n\nBenchmarks secteur B2B :\n- Taux d'ouverture moyen : ~22%\n- CTR moyen : ~3,2%\n- Taux de conversion moyen : ~1,5%\n- Taux de rebond seuil d'alerte : > 60%\n\nM. Albert, le nouveau PDG, veut comprendre ce que ces chiffres révèlent et quelles actions prendre.",
    etapes: [
      {
        numero: 1,
        label: "Définir et interpréter chaque indicateur par rapport aux benchmarks",
        instruction: "Pour chaque indicateur, donnez sa définition, son calcul, son niveau actuel vs benchmark, et le diagnostic que cela implique.",
        placeholder: "Taux d'ouverture (18%) : définition = ..., situation vs benchmark = ..., diagnostic = ...\n\nCTR (2,5%) : ...\n\nTaux de conversion (0,8%) : ...\n\nTaux de rebond (72%) : ...",
        correction: "Taux d'ouverture (18%) :\nDéfinition : % de destinataires ayant ouvert l'email / total emails délivrés. Mesure l'attractivité de l'objet et la pertinence du moment d'envoi.\nSituation : 18% < benchmark B2B 22% → sous-performance de 4 points.\nDiagnostic : L'objet des emails n'est pas suffisamment accrocheur, ou la liste n'est pas assez segmentée (emails envoyés à des contacts peu ciblés).\n\nCTR (2,5%) :\nDéfinition : % de destinataires ayant cliqué dans l'email / total emails délivrés. Mesure l'engagement avec le contenu de l'email.\nSituation : 2,5% < benchmark 3,2% → le contenu et l'appel à l'action (CTA) sont insuffisamment convaincants.\nDiagnostic : Le CTA ('Demander un devis', 'Voir nos réalisations') est peu visible ou peu incitatif ; le contenu est trop générique.\n\nTaux de conversion (0,8%) :\nDéfinition : % de visiteurs réalisant une action cible (devis, contact) / total visiteurs. Mesure l'efficacité du site à transformer les visites en leads.\nSituation : 0,8% < benchmark 1,5% → taux très inférieur à la moyenne ; problème dans le tunnel de conversion sur le site.\nDiagnostic : Le parcours sur le site est trop long, les formulaires sont mal conçus, ou la réassurance est insuffisante.\n\nTaux de rebond (72%) :\nDéfinition : % de visiteurs quittant le site après une seule page, sans interaction. Mesure la pertinence de la page d'entrée.\nSituation : 72% > seuil d'alerte 60% → niveau préoccupant.\nDiagnostic : La page d'arrivée ne correspond pas aux attentes des visiteurs, ou le temps de chargement est trop lent.",
        conseil: "Chaque indicateur doit être traité dans l'ordre : définition → calcul → lecture (bien/mauvais) → diagnostic de la cause probable. Ne sautez pas l'étape du diagnostic : c'est ce qui prouve votre capacité à analyser, pas seulement à lire des chiffres."
      },
      {
        numero: 2,
        label: "Identifier les points de friction et leurs causes probables",
        instruction: "Synthétisez le diagnostic : où se perdent les contacts potentiels dans le parcours email → site → conversion ? Identifiez les principaux goulots d'étranglement.",
        placeholder: "Le parcours présente les points de friction suivants :\n1. ...\n2. ...\n3. ...",
        correction: "Le parcours présente 4 points de friction principaux :\n\n1. À l'ouverture de l'email : 18% seulement ouvrent → 82% des contacts ne voient jamais le message. Cause probable : objet de l'email peu différenciant, liste non segmentée, envoi au mauvais moment de la journée/semaine.\n\n2. Au clic dans l'email : sur les 18% qui ouvrent, 2,5% cliquent → seulement 14% des ouvreurs passent à l'action. Cause probable : le contenu de l'email ne crée pas assez d'envie ou d'urgence ; le CTA est trop générique ou mal positionné visuellement.\n\n3. À l'entrée sur le site (taux de rebond 72%) : 72% des visiteurs partent immédiatement. Cause probable : page d'accueil peu claire ou non alignée avec le message de l'email ; temps de chargement trop long (>3 secondes pénalise fortement) ; site non adapté au mobile.\n\n4. À la conversion (0,8%) : sur les visiteurs restants, seul 0,8% contactent ou demandent un devis. Cause probable : formulaire de contact trop simple (ne crée pas confiance), absence de réassurance (avis clients, certifications), pas de CTA secondaire pour les visiteurs non encore prêts à acheter.",
        conseil: "Structurez le diagnostic comme un entonnoir : ouverture → clic → visite → conversion. Montrez que chaque étape filtre davantage de contacts. Cela prouve que vous comprenez la logique du parcours digital end-to-end."
      },
      {
        numero: 3,
        label: "Proposer des actions correctives priorisées",
        instruction: "Proposez au moins 4 actions correctives concrètes, classées par priorité (haute/moyenne/faible) et en indiquant l'indicateur ciblé par chaque action.",
        placeholder: "Action 1 (priorité haute, indicateur ciblé : ...) : ...\nAction 2 ...",
        correction: "Action 1 (priorité haute — taux d'ouverture + CTR) : Segmenter la base de contacts par secteur d'activité et personnaliser l'objet et le contenu des emails. Ex : un email dédié aux Commerces avec des références de vitrines réalisées pour ce secteur, un autre pour les Services avec des cas d'usage enseignes de bureau. → Améliore la pertinence = hausse du taux d'ouverture et du CTR.\n\nAction 2 (priorité haute — taux de conversion) : Simplifier et enrichir le formulaire de devis sur le site : ajouter des champs de qualification (secteur, type de besoin, budget), intégrer des avis clients B2B, ajouter un bouton 'Rappel sous 24h' comme alternative légère. → Réduit les frictions à la conversion.\n\nAction 3 (priorité haute — taux de rebond) : Créer des landing pages dédiées par campagne email, cohérentes avec le message envoyé (visuel et offre identiques). Optimiser la vitesse de chargement. → Réduit le rebond en offrant une continuité entre l'email et la page.\n\nAction 4 (priorité moyenne — ensemble) : Mettre en place un outil CRM pour tracker les interactions clients, automatiser les relances et mesurer l'efficacité des campagnes par segment. → Améliore la personnalisation sur le long terme et réduit le travail manuel.",
        conseil: "Chaque action doit être rattachée à un indicateur précis et justifiée par son impact attendu. Évitez les actions vagues ('améliorer le site'). La priorisation (haute/moyenne) montre votre sens des priorités opérationnelles — ce qui sera apprécié."
      }
    ]
  },
  {
    id: "e5-methode-parcours-omnicanal",
    epreuve: "e5",
    methodologie: "parcours-omnicanal",
    titre: "Analyser un parcours client omnicanal et le rôle du CRM",
    scenario: "Contexte :\n\nParcours type d'un client de 'Tout en perles' :\n\n1. Découverte : le client voit une story Instagram sponsorisée de 'Tout en perles' présentant un kit de bijoux.\n2. Visite du site : il clique sur le lien, visite le site toutenperles.fr, consulte 3 fiches produits.\n3. Abandon de panier : il ajoute 2 articles au panier mais quitte le site sans finaliser sa commande.\n4. Relance automatique : 2h plus tard, il reçoit un email 'Vous avez oublié quelque chose ?' avec une photo des articles abandonnés.\n5. Conversion : il clique sur l'email et finalise sa commande.\n6. Post-achat : il reçoit un email de confirmation + un email de suivi de livraison.\n\nQuestion : Analyser ce parcours omnicanal et le rôle du CRM à chaque étape.",
    etapes: [
      {
        numero: 1,
        label: "Cartographier les points de contact et le rôle du CRM à chaque étape",
        instruction: "Pour chacune des 6 étapes, identifiez : (a) le canal utilisé, (b) ce qui se passe pour le client, (c) le rôle du CRM à cette étape.",
        placeholder: "Étape 1 — Canal : ..., Ce qui se passe : ..., Rôle du CRM : ...\nÉtape 2 — ...",
        correction: "Étape 1 (Découverte — Instagram) :\nCanal : réseau social (Instagram Ads). Ce qui se passe : le client est exposé à la publicité, découvre la marque. Rôle du CRM : enregistre la source d'acquisition (attribution) dès le premier clic via pixel de tracking → sait que ce visiteur vient d'Instagram.\n\nÉtape 2 (Visite site) :\nCanal : site web. Ce qui se passe : le client consulte des fiches produits. Rôle du CRM : si le client est déjà connu (cookie ou login), le CRM identifie sa session et enrichit son profil (produits consultés, durée de visite). Pour un nouveau visiteur, un cookie est créé pour le reconnaître à la prochaine visite.\n\nÉtape 3 (Abandon de panier) :\nCanal : site web → CRM. Ce qui se passe : le client part sans acheter. Rôle du CRM : détecte l'abandon de panier en temps réel, enregistre les articles concernés, déclenche automatiquement le scénario de relance email après un délai paramétré (ici 2h).\n\nÉtape 4 (Relance email) :\nCanal : email automatique. Ce qui se passe : le client reçoit l'email personnalisé avec ses articles. Rôle du CRM : envoie l'email personnalisé, trace l'ouverture et le clic, met à jour le profil client (engagé, intéressé).\n\nÉtape 5 (Conversion) :\nCanal : site web. Ce qui se passe : le client finalise sa commande. Rôle du CRM : enregistre la commande, met à jour le profil (client actif), calcule le CA attribué au canal Instagram, déclenche le scénario post-achat.\n\nÉtape 6 (Post-achat) :\nCanal : email transactionnel. Ce qui se passe : le client reçoit confirmation et suivi. Rôle du CRM : automatise les emails transactionnels, prépare les scénarios de réengagement futur (upsell, avis, programme fidélité).",
        conseil: "Le CRM n'est pas qu'un carnet d'adresses — c'est un système actif qui déclenche des actions, trace des comportements et personnalise les communications. Montrez à chaque étape son rôle opérationnel précis."
      },
      {
        numero: 2,
        label: "Repérer les ruptures et frictions dans le parcours",
        instruction: "Identifiez les moments où le parcours peut se briser ou créer une mauvaise expérience. Pour chaque friction, expliquez son origine.",
        placeholder: "Rupture 1 (entre étape X et Y) : ...\nRupture 2 : ...\nFriction : ...",
        correction: "Rupture 1 (Instagram → site web) : si la landing page sur laquelle arrive le client ne correspond pas exactement à la story vue (produit différent, prix absent, proposition de valeur floue), l'expérience est incohérente → taux de rebond élevé probable. L'omnicanal exige une cohérence parfaite entre le message vu sur le canal d'acquisition et la page d'arrivée.\n\nRupture 2 (visite → abandon de panier) : moment critique. Causes possibles : découverte tardive des frais de livraison (affichés seulement à l'étape de validation → sentiment de tromperie), doute sur la qualité (pas d'avis clients sur la fiche produit), besoin de comparer avant d'acheter, interruption externe (notification, appel).\n\nFriction dans la relance email (étape 4) : si l'email de relance arrive sur une adresse email non vérifiée (adresse email anonyme lors de la navigation) → rupture du canal. Solution : inciter à la création de compte dès la visite pour capturer un email qualifié.\n\nFriction potentielle post-achat : si le suivi de livraison est sur un autre canal (SMS du transporteur vs email de 'Tout en perles') → expérience fragmentée, sentiment de déconnexion. Un CRM bien configuré centralise toutes les communications.",
        conseil: "Les ruptures sont les ennemies de l'omnicanal. Une rupture = un client potentiel perdu. Soyez précis sur l'origine de chaque rupture (technique, UX, message incohérent) et pas seulement sur son constat."
      },
      {
        numero: 3,
        label: "Proposer des améliorations pour fluidifier le parcours",
        instruction: "Pour chaque rupture ou friction identifiée, proposez une amélioration concrète. Indiquez comment le CRM peut y contribuer.",
        placeholder: "Amélioration 1 (pour la rupture Instagram → site) : ...\nAmélioration 2 (pour l'abandon de panier) : ...\nAmélioration 3 (pour la relance email) : ...\nAmélioration 4 (post-achat) : ...",
        correction: "Amélioration 1 — Cohérence omnicanale (rupture Instagram → site) : créer des landing pages dédiées par campagne Instagram, reproduisant exactement le visuel et l'offre de la story. La landing page doit afficher immédiatement le produit présenté, son prix, ses avis et un bouton 'Ajouter au panier' sans navigation supplémentaire.\n\nAmélioration 2 — Réduction des frictions à l'abandon (étape 3) : afficher les frais de livraison dès la fiche produit (pas de surprise au panier). Ajouter un widget de réassurance sur la page panier ('Retours gratuits 14 jours', 'Paiement sécurisé', 'Expédition en 48h'). Proposer un 'Save my cart' pour les visiteurs qui partent : bouton 'Enregistrer mon panier et y revenir plus tard'.\n\nAmélioration 3 — Enrichissement du scénario CRM (relance email) : si la 1ère relance (2h) ne convertit pas, programmer une 2e relance à J+24h avec un avantage léger ('Votre panier vous attend — livraison offerte jusqu'à ce soir'). Si toujours pas de conversion à J+3 : classement du contact comme 'difficile à convertir' et passage en programme de nurturing long terme.\n\nAmélioration 4 — Post-achat fidélisant : déclencher via CRM à J+7 un email de satisfaction ('Comment s'est passée votre expérience ?') + à J+14 une recommandation de produits complémentaires (accessoires pour la bague achetée). À J+30 : invitation au programme de fidélité 'Tout en perles'.",
        conseil: "Les améliorations doivent être concrètes et actionnables, pas des généralités ('améliorer l'expérience client'). Montrez comment chaque amélioration s'intègre dans le CRM — c'est ce qui distingue une réponse orientée digital d'une réponse généraliste."
      }
    ]
  },
  {
    id: "e5-methode-remuneration-variable",
    epreuve: "e5",
    methodologie: "remuneration-variable",
    titre: "Calculer et comparer des systèmes de rémunération variable",
    scenario: "Contexte (annale E5 2019 — Visio Plus) :\n\nM. Albert souhaite recruter un commercial et mettre en place un nouveau système de rémunération. L'objectif actuel mensuel est de 80 000 € de CA. Il envisage de l'augmenter de 25% (soit 100 000 €/mois).\n\nDeux propositions sont sur la table :\n\nProposition 1 : Fixe 2 000 €/mois + 3% de commission sur la totalité du CA réalisé\n\nProposition 2 : Fixe 1 500 €/mois + 5% de commission sur le CA dépassant 50 000 €/mois\n\nQuestion : Calculez la rémunération mensuelle dans chaque proposition pour les deux niveaux d'objectif (80 000 € et 100 000 €). Concluez sur la pertinence du nouveau système.",
    etapes: [
      {
        numero: 1,
        label: "Calculer la rémunération pour chaque proposition et chaque scénario",
        instruction: "Calculez la rémunération mensuelle brute pour la Proposition 1 et la Proposition 2, pour un CA réalisé de 80 000 € et de 100 000 €. Détaillez chaque calcul.",
        placeholder: "Pour CA = 80 000 € :\nProposition 1 : ...\nProposition 2 : ...\n\nPour CA = 100 000 € :\nProposition 1 : ...\nProposition 2 : ...",
        correction: "Pour CA réalisé = 80 000 € (objectif actuel) :\n\nProposition 1 : Fixe + commission sur tout le CA\n= 2 000 + (80 000 × 3%)\n= 2 000 + 2 400\n= 4 400 €/mois\n\nProposition 2 : Fixe + commission sur CA > 50 000 €\n= 1 500 + ((80 000 − 50 000) × 5%)\n= 1 500 + (30 000 × 5%)\n= 1 500 + 1 500\n= 3 000 €/mois\n\nPour CA réalisé = 100 000 € (objectif majoré de 25%) :\n\nProposition 1 :\n= 2 000 + (100 000 × 3%)\n= 2 000 + 3 000\n= 5 000 €/mois\n\nProposition 2 :\n= 1 500 + ((100 000 − 50 000) × 5%)\n= 1 500 + (50 000 × 5%)\n= 1 500 + 2 500\n= 4 000 €/mois",
        conseil: "Détaillez impérativement chaque calcul étape par étape — ne donnez jamais un résultat sans la décomposition. En cas d'erreur de calcul, les points partiels sont accordés si la méthode est correcte. Le jury note la démarche, pas seulement le résultat."
      },
      {
        numero: 2,
        label: "Comparer les deux propositions et identifier les incitations",
        instruction: "Comparez les deux propositions du point de vue du commercial (attractivité) et du point de vue de l'entreprise (coût, incitation à la performance). Identifiez à partir de quel niveau de CA la Proposition 2 devient plus avantageuse pour le commercial.",
        placeholder: "Du point de vue du commercial : ...\nDu point de vue de l'entreprise : ...\nPoint de bascule entre P1 et P2 : ...",
        correction: "Du point de vue du commercial :\nLa Proposition 1 est plus avantageuse dans les deux scénarios : +1 400 € à 80 000 € de CA, +1 000 € à 100 000 €. De plus, la commission démarre dès le 1er euro de CA (pas de seuil de déclenchement) et le fixe est plus élevé (2 000 € vs 1 500 €) → sécurité financière supérieure. La P1 est plus attractive pour attirer un candidat.\n\nDu point de vue de l'entreprise :\nLa Proposition 1 génère des commissions dès le 1er euro de CA → coût même en cas de faible performance. La Proposition 2 protège l'entreprise : les commissions ne démarrent qu'à 50 000 € de CA → si le commercial sous-performe, le coût est limité au fixe (1 500 €). Au-delà du seuil, le taux de 5% est plus incitatif que 3% → stimule davantage les performances élevées.\n\nPoint de bascule :\nP1 = P2 → 2 000 + (CA × 3%) = 1 500 + ((CA − 50 000) × 5%)\n2 000 + 0,03 × CA = 1 500 + 0,05 × CA − 2 500\n2 000 + 0,03 × CA = −1 000 + 0,05 × CA\n3 000 = 0,02 × CA\nCA = 150 000 €\nAu-delà de 150 000 €/mois, la P2 devient plus avantageuse pour le commercial (commission 5% > 3% sur gros volumes).",
        conseil: "La recherche du point de bascule (équation P1=P2) est un bonus qui montre une maîtrise analytique. Pour les concours comme le BTS, ce niveau de calcul n'est pas toujours demandé mais sera valorisé s'il est présent. Présentez-le clairement avec les étapes de résolution."
      },
      {
        numero: 3,
        label: "Conclure sur la pertinence et formuler une recommandation",
        instruction: "Quelle proposition recommandez-vous ? Argumentez en tenant compte des intérêts de l'entreprise ET de l'attractivité pour le candidat.",
        placeholder: "Pour Visio Plus, la proposition à recommander est ...",
        correction: "Pour Visio Plus, dans la situation actuelle (départ du commercial, urgence de recrutement, marché concurrentiel autour de Bordeaux), la Proposition 2 est plus pertinente du point de vue de l'entreprise, mais elle comporte un risque d'attractivité à corriger.\n\nArguments en faveur de la P2 pour l'entreprise :\n1. Protection contre la sous-performance : si le nouveau commercial met du temps à monter en puissance, le coût est limité au fixe de 1 500 €.\n2. Incitation supérieure au-delà du seuil : un taux de 5% au-delà de 50 000 € motive davantage les performances élevées qu'un taux flat de 3%.\n3. Cohérence avec l'objectif majoré : à 100 000 €, la P2 verse 4 000 € — rémunération qui reste raisonnable pour l'entreprise.\n\nLimite : la P2 peut être difficile à 'vendre' au candidat (fixe plus bas, seuil de déclenchement). Pour la rendre plus attractive, M. Albert pourrait envisager de relever le fixe à 1 700-1 800 € ou d'abaisser le seuil à 40 000 €.\n\nConclusion : recommander la P2 avec un fixe revu à la hausse (1 800 €) pour concilier protection de l'entreprise et attractivité du poste.",
        conseil: "Une bonne conclusion de système de rémunération doit prendre en compte les deux parties : l'entreprise ET le commercial. Une recommandation qui n'avantage qu'une partie est incomplète. Montrez que vous comprenez les enjeux des deux côtés."
      }
    ]
  },
  {
    id: "e5-methode-site-web",
    epreuve: "e5",
    methodologie: "analyse-site-web",
    titre: "Analyser un site web et proposer des améliorations",
    scenario: "Contexte (annale E5 2019 — Visio Plus) :\n\nVisio Plus dispose d'un site web B2B (communication visuelle : enseignes, signalétique, véhicules, objets publicitaires). Le site présente :\n- Une page d'accueil avec présentation générale de l'entreprise\n- Une galerie de réalisations (photos)\n- Une page 'Nos prestations' listant les services\n- Une page contact avec formulaire : Nom / Email / Message uniquement\n- Des liens vers Facebook et Twitter\n- Pas de blog, pas de chat, pas de devis en ligne, pas de témoignages clients\n\nM. Albert réfléchit à une présence sur Instagram. L'entreprise est déjà sur Facebook et Twitter.",
    etapes: [
      {
        numero: 1,
        label: "Analyser les rubriques existantes (points forts et manques)",
        instruction: "Évaluez chaque rubrique existante (force ou faiblesse). Identifiez les rubriques et fonctionnalités manquantes les plus critiques pour un site web B2B de ce secteur.",
        placeholder: "Points forts :\n1. ...\n2. ...\n\nPoints faibles / manques critiques :\n1. ...\n2. ...\n3. ...",
        correction: "Points forts :\n1. Galerie de réalisations : preuve sociale et visuelle essentielle dans un secteur de communication visuelle. Les prospects peuvent se projeter en voyant des réalisations concrètes.\n2. Page 'Nos prestations' : clarté sur l'offre de l'entreprise, utile pour l'orientation du visiteur.\n3. Présence sur les réseaux sociaux : début de visibilité digitale.\n\nPoints faibles et manques critiques :\n1. Formulaire de contact insuffisant : 3 champs seulement (Nom, Email, Message) → impossible de qualifier un prospect ou de l'orienter vers le bon commercial. Aucune donnée utile pour le CRM.\n2. Absence d'appel à l'action (CTA) fort : pas de bouton 'Demander un devis en ligne' ou 'Être rappelé sous 24h' sur la page d'accueil → les visiteurs n'ont pas de chemin clair vers la conversion.\n3. Absence de témoignages ou avis clients B2B : en B2B, la réassurance par les pairs est cruciale pour décider → frein à la conversion.\n4. Pas de blog ou actualités : pénalise le référencement naturel (SEO) et prive l'entreprise d'un levier d'expertise visible.\n5. Pas de chat en ligne : les prospects B2B qui ont une question urgente quittent le site si aucune réponse rapide n'est disponible.",
        conseil: "L'analyse doit être équilibrée — mentionner les points forts d'abord (cela montre de l'objectivité), puis être précis et argumenté sur les manques. Ne pas simplement lister des manques évidents sans expliquer pourquoi ils pénalisent l'entreprise."
      },
      {
        numero: 2,
        label: "Proposer les champs du formulaire de contact pour qualifier les prospects",
        instruction: "Proposez un formulaire de contact optimisé pour un contexte B2B. Justifiez l'utilité de chaque champ ajouté.",
        placeholder: "Formulaire amélioré :\n- Nom + Prénom : ...\n- Entreprise : ...\n- ...",
        correction: "Formulaire de contact B2B optimisé pour Visio Plus :\n\n1. Nom + Prénom → identification basique du contact.\n\n2. Nom de l'entreprise → indispensable pour qualifier le prospect (taille, secteur, potentiel).\n\n3. Secteur d'activité (liste déroulante : Services / Commerces / Construction-BTP / Administration / Industrie / Autre) → permet une orientation automatique vers le bon devis-type et une segmentation CRM immédiate.\n\n4. Type de besoin (cases à cocher : Enseigne / Signalétique / Marquage véhicule / Objets publicitaires / Autre) → oriente vers le bon interlocuteur ou service, accélère la réponse commerciale.\n\n5. Budget estimé (liste déroulante : < 1 000 € / 1 000-5 000 € / > 5 000 €) → qualifie le prospect (petit projet vs grand compte), aide à prioriser les rappels.\n\n6. Email professionnel + Téléphone (optionnel) → canal de rappel et vérification que le contact est bien professionnel.\n\n7. Message libre → permet au prospect d'exprimer son besoin spécifique.\n\nNote : ne pas surcharger le formulaire (7-8 champs maximum). Moins de champs = moins d'abandons.",
        conseil: "Justifiez CHAQUE champ — pourquoi il est là et ce qu'il apporte à l'entreprise. Un formulaire n'est pas une liste de questions : c'est un outil de qualification commerciale et d'alimentation du CRM."
      },
      {
        numero: 3,
        label: "Évaluer la pertinence d'Instagram et recommander une stratégie réseaux sociaux",
        instruction: "Évaluez si Instagram est pertinent pour Visio Plus. Recommandez une stratégie réseaux sociaux globale (quels réseaux, pour quoi, pour qui).",
        placeholder: "Pertinence d'Instagram pour Visio Plus : ...\n\nStratégie réseaux sociaux recommandée : ...",
        correction: "Pertinence d'Instagram pour Visio Plus :\nOui, Instagram est pertinent pour Visio Plus, pour 3 raisons :\n1. Réseau visuel par excellence → les réalisations de Visio Plus (enseignes colorées, véhicules personnalisés, vitrines de commerces) sont naturellement photogéniques et s'exposent bien en galerie et stories.\n2. Audience de gérants de commerces : les commerçants indépendants (cible B2B de Visio Plus) sont actifs sur Instagram, notamment pour leur propre communication.\n3. Différenciation : permettrait de montrer les coulisses de la production (time-lapse de pose d'enseigne) et des réalisations avant/après → contenu engageant et viral.\n\nStratégie réseaux sociaux recommandée :\n1. LinkedIn (priorité 1) : réseau B2B de référence. Créer une page entreprise avec présentation des réalisations, témoignages clients B2B, actualités (nouveau client, événement). Cibler les directeurs commerciaux, gérants de PME, directeurs marketing en Nouvelle-Aquitaine.\n2. Instagram (priorité 2) : galerie de réalisations esthétiques, stories 'making-of', mises en avant de clients. Adapter le ton au B2B visuel (professionnel mais accessible).\n3. Facebook (priorité 3) : maintenir pour la notoriété locale et la publicité géolocalisée (audience locale dans les Landes et Nouvelle-Aquitaine).\n4. Twitter/X (à déprioritiser) : public peu pertinent pour un acteur B2B régional de ce secteur.",
        conseil: "La recommandation doit être hiérarchisée — ne pas dire 'il faut être sur tous les réseaux'. Un PDG a des ressources limitées. Priorisez selon la cible, le type de contenu possible et la valeur attendue. LinkedIn est souvent prioritaire en B2B, même s'il n'était pas dans les options initiales."
      }
    ]
  }
];
