// quiz-bank.js — Banque de questions QCM BTS NDRC
// Structure : m = module (CEJM | Culture générale | Digitalisation)
//             t = thème, q = question, a = réponses (a[0] = bonne réponse), e = explication

const QUIZ_BANK = [

  // ===== CEJM =====

  // — Économie —
  {m:"CEJM",t:"Économie",q:"Si la demande augmente fortement alors que l'offre reste limitée, le prix tend à…",a:["Augmenter","Baisser","Rester fixe","Disparaître"],e:"La rareté relative fait monter le prix."},
  {m:"CEJM",t:"Économie",q:"Les trois rôles du marché sont…",a:["Ajustement, incitatif, informatif","Social, fiscal, juridique","Production, stockage, vente","Croissance, emploi, inflation"],e:"Le prix ajuste, incite et informe."},
  {m:"CEJM",t:"Économie",q:"Une entreprise forme ses salariés, ce qui améliore aussi le bassin d'emploi local. C'est une…",a:["Externalité positive","Externalité négative","Clause pénale","Politique de rigueur"],e:"Un tiers bénéficie de l'action sans payer directement."},
  {m:"CEJM",t:"Économie",q:"Une banque exige bulletins de salaire et avis d'imposition avant un prêt pour réduire…",a:["L'asymétrie d'information","La croissance externe","La clause d'indexation","La focalisation"],e:"Elle cherche à mieux connaître le risque."},
  {m:"CEJM",t:"Économie",q:"La politique de relance budgétaire consiste notamment à…",a:["Augmenter les dépenses publiques ou réduire les impôts","Augmenter les taux d'intérêt","Réduire toute demande","Interdire la concurrence"],e:"Elle vise croissance et emploi."},
  {m:"CEJM",t:"Économie",q:"Le déficit commercial existe lorsque…",a:["Les importations dépassent les exportations","Les exportations dépassent les importations","Le PIB augmente","Les prix baissent"],e:"C'est un déséquilibre extérieur."},
  {m:"CEJM",t:"Économie",q:"Une externalité négative justifie souvent l'intervention publique car…",a:["Le coût subi par les tiers n'est pas intégré dans le prix de marché","La demande disparaît toujours","Le contrat devient automatiquement nul","La concurrence devient parfaite"],e:"L'État peut corriger les défaillances de marché par réglementation, taxe, subvention ou information."},

  // — Droit —
  {m:"CEJM",t:"Droit",q:"La force obligatoire du contrat signifie que…",a:["Le contrat s'impose aux parties","Le contrat est toujours gratuit","Le contrat est facultatif après signature","Le contrat ne crée jamais d'obligation"],e:"Les parties doivent respecter leurs engagements."},
  {m:"CEJM",t:"Droit",q:"Un vendeur ment volontairement sur la constructibilité d'un terrain. Il y a…",a:["Dol","Erreur seule","Violence","Monopsone"],e:"Le vendeur provoque l'erreur."},
  {m:"CEJM",t:"Droit",q:"La clause de réserve de propriété permet au vendeur de…",a:["Rester propriétaire jusqu'au paiement complet","Rompre le contrat sans raison","Augmenter le prix sans indice","Interdire toute négociation"],e:"Elle protège contre le non-paiement."},
  {m:"CEJM",t:"Droit",q:"Responsabilité civile : quelles sont les 3 conditions cumulatives ?",a:["Dommage, faute, lien de causalité","Erreur, dol, violence","Offre, demande, prix","Travail, capital, matière"],e:"Sans l'une d'elles, la responsabilité civile est fragilisée."},
  {m:"CEJM",t:"Droit",q:"Responsabilité pénale et civile : différence principale ?",a:["Pénale = punir ; civile = réparer","Pénale = réparer ; civile = recruter","Pénale = manager ; civile = vendre","Aucune différence"],e:"La pénale protège la société."},
  {m:"CEJM",t:"Droit",q:"Une entreprise collecte des emails sans consentement commercial. Notion concernée ?",a:["RGPD / opt-in","Dol uniquement","FRNG","PESTEL"],e:"L'usage commercial suppose un consentement clair."},
  {m:"CEJM",t:"Droit",q:"Si un contrat est signé après une manœuvre volontaire destinée à tromper l'autre partie, le vice du consentement est…",a:["Le dol","La clause pénale","L'externalité","Le monopsone"],e:"Le dol suppose une tromperie intentionnelle ayant provoqué le consentement."},
  {m:"CEJM",t:"Droit",q:"Une clause limitative de responsabilité sert principalement à…",a:["Plafonner la réparation due en cas de dommage, si elle est valable","Transférer automatiquement la propriété","Fixer un salaire minimum","Créer une entente anticoncurrentielle"],e:"Elle encadre le risque juridique, mais peut être écartée dans certains cas."},

  // — Management —
  {m:"CEJM",t:"Management",q:"Les 3 finalités principales d'une entreprise selon le programme CEJM ?",a:["Financière, économique, sociétale","Pénale, civile, commerciale","Directe, courte, longue","Amont, aval, géographique"],e:"La sociétale intègre salariés, éthique, développement durable."},
  {m:"CEJM",t:"Management",q:"Dans SWOT, les opportunités relèvent du…",a:["Diagnostic externe","Diagnostic interne","Compte de résultat","Contrat de travail"],e:"Externe = opportunités et menaces."},
  {m:"CEJM",t:"Management",q:"Une entreprise rachète un concurrent : croissance…",a:["Externe","Organique uniquement","Interne","Passive"],e:"Rachat, fusion, acquisition = croissance externe."},
  {m:"CEJM",t:"Management",q:"Une marque mise sur l'image premium et le service. Stratégie ?",a:["Différenciation","Domination par les coûts","Politique de rigueur","Entente"],e:"Elle cherche à être perçue comme unique."},
  {m:"CEJM",t:"Management",q:"Une décision stratégique se distingue d'une décision opérationnelle car elle…",a:["Engage durablement l'entreprise et son positionnement","Concerne uniquement une tâche quotidienne","Ne nécessite aucun diagnostic","Est toujours prise par un client"],e:"La stratégie engage l'entreprise à moyen ou long terme et modifie ses choix majeurs."},
  {m:"CEJM",t:"Management",q:"Dans un diagnostic SWOT, une compétence forte de l'équipe commerciale est…",a:["Une force interne","Une menace externe","Une opportunité externe","Une politique monétaire"],e:"Les forces et faiblesses sont internes ; les opportunités et menaces sont externes."},

  // — Organisation —
  {m:"CEJM",t:"Organisation",q:"Externaliser une activité peu créatrice de valeur permet surtout de…",a:["Se concentrer sur le cœur de métier","Supprimer toute dépendance","Créer automatiquement un brevet","Annuler le contrat"],e:"C'est une logique de chaîne de valeur."},

  // — Finance —
  {m:"CEJM",t:"Finance",q:"Un BFR qui augmente fortement peut signaler…",a:["Un besoin de financement lié aux stocks, créances ou délais de paiement","Une absence totale d'activité","Une baisse automatique du chiffre d'affaires","Une clause de réserve de propriété"],e:"Le BFR vient du décalage entre décaissements et encaissements d'exploitation."},

  // — Travail —
  {m:"CEJM",t:"Travail",q:"Clause de non-concurrence valable si elle est notamment…",a:["Limitée et compensée financièrement","Illimitée et gratuite","Toujours orale","Toujours interdite"],e:"Elle encadre une liberté du salarié."},
  {m:"CEJM",t:"Travail",q:"Une clause de mobilité est valable notamment si elle…",a:["Définit une zone géographique précise et respecte l'intérêt de l'entreprise","Permet de muter partout dans le monde sans limite","Supprime le contrat de travail","Remplace la rémunération"],e:"Les clauses du contrat de travail doivent être encadrées et proportionnées."},

  // — Méthode —
  {m:"CEJM",t:"Méthode",q:"Dans une réponse CEJM, l'erreur la plus pénalisante est souvent de…",a:["Réciter une notion sans l'appliquer au cas","Citer un fait du dossier","Conclure clairement","Identifier le champ droit, économie ou management"],e:"L'épreuve évalue la capacité à mobiliser les notions pour éclairer une situation d'entreprise."},

  // ===== CULTURE GÉNÉRALE =====

  // — Épreuve —
  {m:"Culture générale",t:"Épreuve 2026",q:"Depuis la session 2025, l'épreuve ponctuelle de Culture générale et expression comporte principalement…",a:["Des questions sur corpus et un essai","Une synthèse de documents et une écriture personnelle","Un QCM et une dictée","Un oral de négociation"],e:"Le nouveau format officiel prévoit une partie questions sur corpus et une partie essai, chacune notée sur 10."},

  // — Corpus —
  {m:"Culture générale",t:"Corpus",q:"Dans une réponse à une question de corpus, il faut…",a:["Confronter les documents sans avis personnel gratuit","Donner uniquement son opinion","Utiliser surtout des exemples extérieurs","Ignorer les documents difficiles"],e:"La réponse doit s'appuyer sur les documents et répondre précisément à la question."},
  {m:"Culture générale",t:"Corpus",q:"Un paragraphe efficace sur corpus commence plutôt par…",a:["Une idée qui répond à la question","Une anecdote personnelle","Une opinion tranchée sans document","Une conclusion générale hors sujet"],e:"Puis on justifie avec un ou plusieurs documents."},
  {m:"Culture générale",t:"Corpus",q:"Une réponse solide à une question sur corpus doit surtout…",a:["Répondre précisément à la question en s'appuyant sur les documents","Résumer tous les documents dans l'ordre","Donner uniquement son avis personnel","Citer longuement un seul document"],e:"La réponse attendue est ciblée, argumentée et fondée sur le corpus."},

  // — Essai —
  {m:"Culture générale",t:"Essai",q:"Dans l'essai, les exemples sont…",a:["Obligatoires ou fortement attendus","Interdits","Uniquement issus du corpus","Toujours juridiques"],e:"Ils soutiennent ton argumentation et peuvent venir du corpus, des lectures ou de ta culture."},
  {m:"Culture générale",t:"Essai",q:"Dans l'essai de Culture générale, les exemples doivent…",a:["Soutenir un argument et être reliés au sujet","Être accumulés sans analyse","Venir uniquement du corpus","Remplacer la problématique"],e:"Un exemple vaut des points s'il éclaire une idée et fait avancer la réponse."},
  {m:"Culture générale",t:"Essai",q:"La meilleure problématisation d'un sujet consiste à…",a:["Repérer une tension ou une limite dans la question","Transformer le sujet en définition de cours","Répondre oui ou non dès l'introduction sans nuance","Éviter toute prise de position"],e:"L'essai valorise une pensée nuancée, pas une réponse mécanique."},

  // — Thème 2026 —
  {m:"Culture générale",t:"Thème 2026",q:"Pour le thème 2026, la notion d'anthropomorphisme désigne…",a:["Le fait d'attribuer des caractéristiques humaines à l'animal","Le refus de toute relation avec les animaux","Une méthode de calcul statistique","La disparition des espèces domestiques"],e:"Cette notion aide à analyser les représentations de l'animal dans les textes et images."},
  {m:"Culture générale",t:"Thème 2026",q:"Dans un essai sur le rapport humain-animal, une copie solide doit éviter…",a:["Le catalogue d'exemples sans idée directrice","La nuance dans les arguments","L'appui sur le corpus","Une conclusion qui répond au sujet"],e:"Les exemples doivent être sélectionnés et interprétés, pas simplement listés."},

  // — Lecture —
  {m:"Culture générale",t:"Lecture",q:"Face à un document iconographique dans le corpus, il faut d'abord…",a:["Identifier ce qui est représenté, le point de vue et l'effet produit","Ignorer le document car ce n'est pas un texte","Le décrire sans le relier au sujet","Le remplacer par un exemple personnel"],e:"Un document visuel se lit aussi : composition, message, contexte, lien au thème."},

  // — Argumentation —
  {m:"Culture générale",t:"Argumentation",q:"Un argument nuancé est un argument qui…",a:["Reconnaît une limite ou une condition à l'idée défendue","Change de sujet au milieu du paragraphe","Utilise seulement des connecteurs compliqués","Refuse toute prise de position"],e:"La nuance montre que tu sais raisonner et éviter les réponses simplistes."},

  // — Méthode —
  {m:"Culture générale",t:"Méthode",q:"QQQOCCP sert à…",a:["Analyser le sujet","Calculer une part de marché","Sanctionner une faute","Mesurer le NPS"],e:"Qui, Quoi, Quand, Où, Comment, Combien, Pourquoi."},

  // ===== DIGITALISATION =====

  // — Marché —
  {m:"Digitalisation",t:"Marché",q:"Une étude qualitative sert surtout à…",a:["Comprendre en profondeur les besoins et attitudes","Mesurer un grand échantillon uniquement","Rédiger un contrat","Calculer la TVA"],e:"Elle explore les motivations."},

  // — Site web —
  {m:"Digitalisation",t:"Site web",q:"Un site catalogue se distingue du site vitrine car il…",a:["Présente les produits avec détails, références ou prix","Vend toujours en ligne","Ne contient aucune offre","Remplace le CRM"],e:"Il va plus loin que la simple présentation."},
  {m:"Digitalisation",t:"Site web",q:"Le maillage interne sert à…",a:["Relier les pages et faciliter la navigation","Héberger le site","Créer un nom de domaine","Supprimer les cookies"],e:"Il aide aussi le référencement naturel et le parcours utilisateur."},

  // — CRC —
  {m:"Digitalisation",t:"CRC",q:"La méthode CERC concerne…",a:["Les appels entrants","Les appels sortants","La synthèse de documents","Le SWOT"],e:"Contact, Écoute, Réponse, Conclusion."},
  {m:"Digitalisation",t:"CRC",q:"La méthode CROC concerne…",a:["Les appels sortants","Les appels entrants","La responsabilité civile","La croissance"],e:"Contact, Raison, Objet, Congé."},

  // — Emailing / Newsletter —
  {m:"Digitalisation",t:"Emailing",q:"AIDA signifie…",a:["Attention, Intérêt, Désir, Action","Analyse, Idée, Droit, Achat","Accueil, Information, Devis, Accord","Actif, Interne, Durable, Aval"],e:"Structure classique d'un message commercial."},
  {m:"Digitalisation",t:"Emailing",q:"Une newsletter a un bon taux d'ouverture mais un faible taux de clic. L'action prioritaire est de…",a:["Améliorer le contenu, l'offre et les appels à l'action","Changer uniquement l'heure d'envoi","Supprimer le lien de désinscription","Conclure que la campagne est parfaite"],e:"L'objet attire, mais le message ne transforme pas assez l'attention en action."},

  // — Omnicanal —
  {m:"Digitalisation",t:"Omnicanal",q:"Le parcours client sans couture correspond à…",a:["L'omnicanal","Le monocanal","Le monopsone","Le contrat pénal"],e:"Les canaux sont fusionnés et cohérents."},
  {m:"Digitalisation",t:"Omnicanal",q:"Un client commence une réclamation sur le chat puis doit tout répéter au téléphone. Le problème principal est…",a:["Une rupture dans le parcours omnicanal","Une hausse du taux de conversion","Une bonne exploitation du dossier client","Une stratégie de différenciation réussie"],e:"L'omnicanal suppose continuité, cohérence et partage de l'information entre canaux."},

  // — CRM —
  {m:"Digitalisation",t:"CRM",q:"Un CRM permet principalement de…",a:["Collecter, analyser, utiliser et mesurer les données clients","Produire le PIB","Signer un CDD","Créer un brevet"],e:"Il offre une vue unique du client."},
  {m:"Digitalisation",t:"CRM",q:"Une fiche client incomplète dans le CRM risque surtout de…",a:["Réduire la personnalisation et la qualité du suivi commercial","Garantir automatiquement la conformité RGPD","Augmenter mécaniquement le panier moyen","Remplacer le besoin de reporting"],e:"La data client sert à comprendre, personnaliser, suivre et mesurer la relation."},

  // — RGPD —
  {m:"Digitalisation",t:"RGPD",q:"Collecter la date de naissance d'un prospect sans utilité commerciale claire pose surtout un problème de…",a:["Minimisation des données","Taux de clic","Maillage interne","CROC"],e:"Le RGPD impose de collecter seulement les données nécessaires à une finalité déterminée."},

  // — Satisfaction —
  {m:"Digitalisation",t:"Satisfaction",q:"Le CES mesure…",a:["L'effort fourni par le client","La recommandation uniquement","Le chiffre d'affaires","Le coût d'achat"],e:"Moins l'effort est élevé, plus la fidélité peut augmenter."},

  // — Performance —
  {m:"Digitalisation",t:"Performance",q:"Pour évaluer une campagne d'acquisition, l'indicateur le plus directement lié au coût des nouveaux clients est…",a:["Le coût d'acquisition client","Le taux de rebond uniquement","La durée de conservation RGPD","La clause pénale"],e:"Le CAC rapporte les dépenses marketing ou commerciales au nombre de nouveaux clients obtenus."},

  // — E-commerce —
  {m:"Digitalisation",t:"E-commerce",q:"Un taux de rebond élevé sur une page produit peut indiquer…",a:["Une page peu pertinente, lente ou insuffisamment rassurante","Une fidélité client très forte","Une excellente conversion","Une absence totale de visiteurs"],e:"Le rebond signale souvent un problème d'expérience, de ciblage ou de contenu."},

  // — Benchmarking —
  {m:"Digitalisation",t:"Benchmark",q:"Le benchmarking consiste à…",a:["Comparer ses pratiques à celles d'autres entreprises","Fixer une peine pénale","Faire une synthèse objective","Augmenter les taux d'intérêt"],e:"But : progresser en s'inspirant des meilleurs."},

  // — Contenu / Inbound —
  {m:"Digitalisation",t:"Contenu digital",q:"Un contenu digital utile en inbound marketing doit d'abord…",a:["Répondre à un besoin de la cible pour attirer le prospect","Interrompre le client sans ciblage","Masquer l'identité de l'entreprise","Supprimer tout appel à l'action"],e:"L'inbound attire par la valeur du contenu avant de convertir."},

  // — E5 méthode —
  {m:"Digitalisation",t:"E5",q:"Dans une étude de cas E5, une recommandation digitale est convaincante si elle…",a:["Répond au problème du cas et prévoit des indicateurs de suivi","Liste tous les réseaux sociaux existants","Ignore les contraintes de l'entreprise","Se limite à définir le CRM"],e:"Le jury attend une action adaptée au contexte, justifiée et mesurable."}

];
