const E1_METHODES = [
  {
    id: "e1-methode-mise-en-relation",
    epreuve: "e1",
    methodologie: "questions-corpus",
    titre: "Mettre en relation deux documents du corpus",
    scenario: "Documents 1 et 2 de l'annale 2025 — thème \"À table ! : formes et enjeux du repas\"\n\nDocument 1 : Jules Vallès, L'Enfant (1878) — texte autobiographique dans lequel l'auteur adulte évoque avec ironie les repas de son enfance : l'oignon imposé malgré le dégoût, les poireaux adorés mais interdits car aimés, le gigot répété jusqu'à l'écœurement. La mère utilise la nourriture comme outil d'éducation et de volonté.\n\nDocument 2 : Pascal Lardellier, Risques, rites et plaisirs alimentaires (2013) — essai sociologique analysant le repas familial comme espace de construction de la mémoire collective, de distribution des rôles et de socialisation. L'auteur affirme : \"Manger, c'est toujours plus que manger, c'est dire qui on est.\"\n\nQuestion : Quels liens établissez-vous entre les textes 1 et 2 ?",
    etapes: [
      {
        numero: 1,
        label: "Identifier la nature, la thèse et le registre de chaque document",
        instruction: "Pour chaque document, précisez : (1) sa nature (type de texte), (2) sa thèse principale en une phrase, (3) son registre dominant.",
        placeholder: "Document 1 : nature = ..., thèse = ..., registre = ...\nDocument 2 : nature = ..., thèse = ..., registre = ...",
        correction: "Document 1 (Vallès) : nature = texte autobiographique littéraire ; thèse = le repas familial est un espace de contrainte éducative imposée par la mère, qui utilise la nourriture pour forger la volonté de son fils ; registre = ironique et lyrique (humour, distance, hyperboles : 'comme on arrache un pistolet des mains d'un criminel').\n\nDocument 2 (Lardellier) : nature = essai sociologique ; thèse = le repas familial est un espace central de construction de la mémoire collective, de distribution des rôles sociaux et de socialisation ; registre = analytique et objectif, avec quelques accents poétiques ('le cœur de la famille, c'est la table').",
        conseil: "Commencez toujours par la nature du document — cela conditionne la façon dont vous allez l'analyser. Un texte littéraire parle à travers des images et des émotions ; un essai argumente de façon logique."
      },
      {
        numero: 2,
        label: "Repérer les convergences et les divergences",
        instruction: "Listez au moins 2 convergences (points communs) et 2 divergences (différences de point de vue ou de traitement) entre les deux textes. Appuyez-vous sur des éléments précis.",
        placeholder: "Convergences :\n1. ...\n2. ...\n\nDivergences :\n1. ...\n2. ...",
        correction: "Convergences :\n1. Les deux textes montrent que le repas familial dépasse la simple alimentation — il est un espace de transmission de valeurs et d'éducation (Vallès : la méthode de la mère pour forger la volonté ; Lardellier : 'Manger c'est toujours plus que manger').\n2. Les deux textes soulignent la dimension affective et mémorielle du repas — il laisse des souvenirs durables et forge l'identité ('je me souvenais trop' chez Vallès ; 'une mémoire familiale s'écrit' chez Lardellier).\n\nDivergences :\n1. Vallès insiste sur la contrainte, la souffrance et l'absurdité (registre ironique), tandis que Lardellier adopte un regard analytique et nuancé sur les rites alimentaires.\n2. La perspective est différente : Vallès témoigne d'une expérience personnelle et subjective ; Lardellier généralise à partir d'une analyse sociologique distanciée.",
        conseil: "Ne vous contentez pas de dire 'les deux parlent du repas' — c'est trop vague. Les convergences thématiques doivent être approfondies : comment les deux textes traitent-ils le même aspect ? Les divergences doivent porter sur la position, le ton ou l'angle, pas seulement sur la forme."
      },
      {
        numero: 3,
        label: "Rédiger la mise en relation structurée avec citations",
        instruction: "Rédigez un paragraphe de mise en relation (8-12 lignes) qui articule convergences et divergences, en citant brièvement et en reformulant les deux textes.",
        placeholder: "Les deux textes s'accordent sur... En effet, Vallès montre que... tandis que Lardellier confirme que... Cependant, là où Vallès...",
        correction: "Les deux textes s'accordent sur le fait que le repas familial est bien plus qu'un acte alimentaire : il est un espace chargé de sens, d'éducation et de mémoire. Vallès le montre à travers ses souvenirs d'enfance marqués par la contrainte — l'oignon imposé malgré le dégoût, les poireaux adorés mais interdits — révélant que la table est pour sa mère un terrain d'apprentissage de la volonté. Lardellier confirme cette dimension en affirmant que 'manger, c'est toujours plus que manger, c'est dire qui on est' et en analysant le repas comme le lieu où 'une mémoire familiale s'écrit, se régénère, se perpétue'.\n\nCependant, les deux textes divergent profondément dans leur registre et leur perspective. Là où Vallès adopte une posture ironique et subjective pour dénoncer l'absurdité des méthodes maternelles — en comparant le retrait des poireaux à l'action d'arracher 'un pistolet des mains d'un criminel' — Lardellier choisit la distanciation sociologique et analyse le repas comme un rituel structurant des rôles familiaux. Le premier parle depuis sa blessure d'enfant ; le second observe depuis l'extérieur.",
        conseil: "Utilisez des connecteurs de liaison clairs ('cependant', 'là où', 'en revanche', 'de même') pour articuler les deux mouvements. N'oubliez pas : citez court, reformulez beaucoup."
      }
    ]
  },
  {
    id: "e1-methode-titre-corpus",
    epreuve: "e1",
    methodologie: "questions-corpus",
    titre: "Proposer un titre justifié pour un corpus",
    scenario: "Corpus complet de l'annale 2025 — thème \"À table ! : formes et enjeux du repas\"\n\nDocument 1 : Jules Vallès, L'Enfant (1878) — repas imposés, contrainte, souffrance, ironie.\nDocument 2 : Pascal Lardellier, essai sociologique (2013) — repas comme rituel social, mémoire familiale, distribution des rôles.\nDocument 3 : Photographie extraite d'un article sur les repas réguliers en famille (2020) — image d'un repas familial convivial, chaleureux.\n\nQuestion : Donnez un titre qui illustre les trois documents du corpus en justifiant précisément votre choix.",
    etapes: [
      {
        numero: 1,
        label: "Dégager l'apport spécifique de chaque document",
        instruction: "En une phrase par document, formulez ce que chaque document apporte de spécifique (ce qu'on ne trouve que dans lui et pas dans les autres).",
        placeholder: "Document 1 apporte : ...\nDocument 2 apporte : ...\nDocument 3 apporte : ...",
        correction: "Document 1 (Vallès) apporte : la dimension de contrainte et de souffrance du repas — le registre subjectif et ironique d'une expérience vécue douloureusement, la table comme lieu d'imposition et de résistance.\n\nDocument 2 (Lardellier) apporte : le regard analytique et sociologique — la table comme espace de construction sociale, de ritualisation des rôles et de production de mémoire collective.\n\nDocument 3 (photographie) apporte : la dimension visuelle et positive — l'image de la convivialité, du rassemblement physique, de la chaleur du repas partagé.",
        conseil: "Chaque document doit 'trouver sa place' dans le titre. Si votre titre ne couvre que 2 documents sur 3, il est insuffisant."
      },
      {
        numero: 2,
        label: "Identifier l'enjeu transversal qui rassemble tous les documents",
        instruction: "Formulez en 2-3 phrases l'enjeu commun qui traverse les trois documents. Qu'est-ce qui les unit malgré leurs différences ?",
        placeholder: "Les trois documents partagent l'idée que le repas familial...",
        correction: "Les trois documents partagent l'idée que le repas familial est un espace symbolique fort, qui dépasse la simple alimentation. Qu'il soit vécu comme contrainte (Vallès), analysé comme rituel social (Lardellier), ou représenté comme moment de convivialité (photographie), le repas est toujours porteur d'enjeux relationnels, éducatifs et identitaires. L'enjeu central est la tension entre ce que le repas impose (normes, rôles, obligations) et ce qu'il offre (lien, mémoire, appartenance).",
        conseil: "L'enjeu transversal est plus subtil que le simple thème ('le repas'). Il doit refléter une tension ou une complexité — c'est cela qui rend le titre riche."
      },
      {
        numero: 3,
        label: "Formuler le titre et le justifier document par document",
        instruction: "Proposez un titre (entre guillemets), puis justifiez-le en montrant comment il s'applique précisément à chacun des trois documents.",
        placeholder: "Titre proposé : \"...\"\n\nJustification :\n- Document 1 : ce titre s'y applique car...\n- Document 2 : ce titre s'y applique car...\n- Document 3 : ce titre s'y applique car...",
        correction: "Titre proposé : \"Le repas familial : entre transmission, contrainte et convivialité\"\n\nJustification :\n- Document 1 (Vallès) : le mot 'contrainte' renvoie directement aux repas imposés par la mère (l'oignon malgré le dégoût, le gigot répété). 'Transmission' s'y retrouve aussi : la mère cherche à transmettre la valeur de la volonté à travers la nourriture ('souviens-toi du hachis aux oignons').\n- Document 2 (Lardellier) : 'transmission' est central — le repas comme espace où 'une mémoire familiale s'écrit, se régénère'. 'Contrainte' apparaît également avec l'idée que les membres de la famille sont 'assignés à prendre ensemble leurs repas'.\n- Document 3 (photographie) : 'convivialité' illustre directement l'image d'un repas chaleureux et uni, vecteur de lien et de bien-être.",
        conseil: "La justification est aussi importante que le titre lui-même. Un bon titre mal justifié sera pénalisé. Utilisez des termes issus du titre dans vos justifications pour montrer la correspondance."
      }
    ]
  },
  {
    id: "e1-methode-essai-argumente",
    epreuve: "e1",
    methodologie: "essai-argumente",
    titre: "Rédiger un essai argumenté",
    scenario: "Sujet de l'annale 2025 (au choix) :\n\"Selon vous, prendre son repas ensemble contribue-t-il à renforcer les liens familiaux ?\"\nVous traiterez le sujet de façon personnelle et argumentée en vous appuyant notamment sur vos lectures, sur le corpus et sur votre culture personnelle.",
    etapes: [
      {
        numero: 1,
        label: "Analyser le sujet et formuler la problématique",
        instruction: "Identifiez les mots-clés du sujet et définissez-les brièvement. Reformulez la question en la complexifiant. Proposez une problématique (question ouverte).",
        placeholder: "Mots-clés : ...\nReformulation : ...\nProblématique : ...",
        correction: "Mots-clés :\n- 'prendre son repas ensemble' : rituel partagé, présence physique commune, régularité.\n- 'contribue-t-il' : le repas est-il un facteur parmi d'autres ? Peut-il suffire seul ?\n- 'renforcer' : intensifier des liens déjà existants (pas simplement créer).\n- 'liens familiaux' : cohésion, solidarité, affection, communication au sein de la famille.\n\nReformulation : La question demande si le fait de partager régulièrement un repas en famille peut intensifier et consolider les relations entre ses membres.\n\nProblématique : Le repas partagé est-il un vecteur fiable et suffisant de cohésion familiale, malgré les tensions qu'il peut générer et les transformations contemporaines de la vie de famille ?",
        conseil: "La problématique ne doit pas être une question fermée (oui/non) mais une question ouverte qui appelle un raisonnement nuancé. Elle annonce implicitement votre plan."
      },
      {
        numero: 2,
        label: "Construire le plan dialectique en 3 parties",
        instruction: "Proposez un plan en 3 parties (thèse / antithèse / dépassement) avec 2 sous-parties chacune. Formulez l'intitulé de chaque partie et de chaque sous-partie.",
        placeholder: "I. ...\n  A. ...\n  B. ...\nII. ...\n  A. ...\n  B. ...\nIII. ...\n  A. ...\n  B. ...",
        correction: "I. Le repas partagé, vecteur de cohésion et de transmission familiale\n  A. Un espace de communication et d'échange au quotidien\n  B. Un rituel porteur de mémoire, de valeurs et d'identité familiale\n\nII. Mais le repas peut aussi devenir un espace de tension et de contrainte\n  A. Le repas comme lieu de conflits, de rapports de pouvoir et de frustrations\n  B. L'évolution des modes de vie qui fragilise le rituel (écrans, agendas, individualisme)\n\nIII. Vers une redéfinition du repas familial : un lien à réinventer\n  A. La qualité des échanges prime sur la quantité (mieux vaut un repas hebdomadaire authentique que sept mécaniques)\n  B. De nouvelles formes de partage adaptées aux réalités contemporaines",
        conseil: "La 3e partie ne doit pas être un simple 'c'est plus compliqué que ça'. Elle doit apporter une vraie réponse nuancée, une prise de position argumentée qui dépasse la contradiction des deux premières parties."
      },
      {
        numero: 3,
        label: "Rédiger l'introduction complète",
        instruction: "Rédigez une introduction complète avec : accroche, présentation du sujet, problématique, annonce du plan.",
        placeholder: "Dans nos sociétés...",
        correction: "Dans nos sociétés contemporaines marquées par l'individualisme, la multiplication des écrans et la fragmentation des emplois du temps, le repas familial semble parfois menacé. Pourtant, ce rituel demeure, pour beaucoup, un moment structurant de la vie quotidienne. Comme le souligne le sociologue Pascal Lardellier, la table familiale est le véritable 'cœur de la famille', le lieu où 'une mémoire familiale s'écrit, se régénère, se perpétue'. Prendre son repas ensemble contribue-t-il réellement à renforcer les liens familiaux ? Si le repas partagé constitue en premier lieu un espace privilégié d'échange et de transmission, il peut aussi devenir le théâtre de contraintes et de tensions — comme en témoigne Jules Vallès dans son récit autobiographique L'Enfant. Nous verrons d'abord que le repas partagé est un vecteur de cohésion familiale, avant de montrer qu'il peut aussi générer conflits et frustrations, pour enfin interroger les conditions qui en font un lien vivant et authentique.",
        conseil: "L'accroche doit être originale — ni trop vague ('De tout temps les hommes ont mangé') ni trop anecdotique. Privilégiez une citation, un paradoxe, une statistique ou une observation de société. L'annonce de plan doit être claire sans être trop mécanique ('dans un premier temps... dans un deuxième temps...')."
      },
      {
        numero: 4,
        label: "Développer un argument complet avec exemple",
        instruction: "Rédigez un paragraphe complet développant la sous-partie I.A (le repas comme espace de communication). Respectez le schéma : idée directrice → argument → exemple → analyse.",
        placeholder: "Premièrement, le repas partagé constitue...",
        correction: "Premièrement, le repas partagé constitue un espace quotidien de communication qui favorise le dialogue et le renforcement des liens affectifs. C'est en effet l'un des rares moments où les membres d'une famille se trouvent réunis physiquement, libérés de leurs activités individuelles, et disponibles pour échanger. Les études sociologiques montrent que les familles qui partagent régulièrement des repas ont des niveaux de communication plus élevés et des relations plus solides. Pascal Lardellier le confirme dans son essai : 'quelle autre activité remplit cette fonction avec autant de constance pour les membres d'une famille ?' Il voit dans le dîner 'le temps symbolique de la mise en présence des individus'. Ainsi, à table, on partage non seulement des plats mais des récits de journée, des inquiétudes, des projets — autant d'échanges qui tissent, imperceptiblement, le tissu du lien familial.",
        conseil: "Ne négligez jamais l'analyse de l'exemple. Dire 'Pascal Lardellier dit que...' sans expliquer ce que cela prouve est une erreur classique. L'exemple sert votre thèse — montrez explicitement comment."
      }
    ]
  }
];
