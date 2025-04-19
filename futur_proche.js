// Conjugation data for futur proche
const aller_present_conjugations = {
  "je": "vais",
  "tu": "vas",
  "il": "va",
  "elle": "va",
  "on": "va",
  "nous": "allons",
  "vous": "allez",
  "ils": "vont",
  "elles": "vont"
};

// Subject pronouns for the quiz
const subjects = ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"];

// Verbs and suffixes for the quiz with neighborhood theme
const proche = [
  {
    "infinitive": "marcher",
    "translation": "to walk",
    "suffixes": [
      "chez le médecin",
      "à la pharmacie",
      "au parc"
    ]
  },
  {
    "infinitive": "tondre",
    "translation": "to mow",
    "suffixes": [
      "la pelouse",
      "le jardin",
      "le terrain devant la maison"
    ]
  },
  {
    "infinitive": "nettoyer",
    "translation": "to clean",
    "suffixes": [
      "le trottoir",
      "les gouttières",
      "la voiture"
    ]
  },
  {
    "infinitive": "faire",
    "translation": "to do",
    "suffixes": [
      "les courses",
      "du jogging",
      "du vélo dans le quartier"
    ]
  },
  {
    "infinitive": "rencontrer",
    "translation": "to meet",
    "suffixes": [
      "les voisins",
      "un ami au café",
      "le facteur devant la maison"
    ]
  },
  {
    "infinitive": "arroser",
    "translation": "to water",
    "suffixes": [
      "les fleurs",
      "le jardin",
      "les plantes d'intérieur"
    ]
  },
  {
    "infinitive": "promener",
    "translation": "to walk (the dog)",
    "suffixes": [
      "le chien dans le parc",
      "le chien autour du quartier",
      "le chien près du lac"
    ]
  },
  {
    "infinitive": "jouer",
    "translation": "to play",
    "suffixes": [
      "au football dans la rue",
      "au basket au terrain local",
      "aux cartes chez le voisin"
    ]
  },
  {
    "infinitive": "ranger",
    "translation": "to tidy up",
    "suffixes": [
      "le garage",
      "la maison",
      "le jardin"
    ]
  },
  {
    "infinitive": "acheter",
    "translation": "to buy",
    "suffixes": [
      "du pain à la boulangerie",
      "des légumes au marché",
      "un café au coin de la rue"
    ]
  },
  {
    "infinitive": "jardiner",
    "translation": "to garden",
    "suffixes": [
      "dans le potager",
      "autour de la maison",
      "avec les enfants"
    ]
  },
  {
    "infinitive": "ramasser",
    "translation": "to pick up",
    "suffixes": [
      "les feuilles mortes",
      "les déchets dans la rue",
      "le courrier"
    ]
  },
  {
    "infinitive": "visiter",
    "translation": "to visit",
    "suffixes": [
      "la bibliothèque du quartier",
      "le centre communautaire",
      "le voisin malade"
    ]
  },
  {
    "infinitive": "discuter",
    "translation": "to chat",
    "suffixes": [
      "avec les voisins",
      "au café du coin",
      "au parc"
    ]
  },
  {
    "infinitive": "organiser",
    "translation": "to organize",
    "suffixes": [
      "une fête de quartier",
      "un barbecue",
      "une réunion communautaire"
    ]
  },
  {
    "infinitive": "laver",
    "translation": "to wash",
    "suffixes": [
      "la voiture dans l'allée",
      "les fenêtres",
      "la terrasse"
    ]
  },
  {
    "infinitive": "courir",
    "translation": "to run",
    "suffixes": [
      "dans le parc",
      "autour du lac",
      "le matin dans le quartier"
    ]
  },
  {
    "infinitive": "sortir",
    "translation": "to go out",
    "suffixes": [
      "à la pâtisserie",
      "au cinéma local",
      "au restaurant voisin"
    ]
  },
  {
    "infinitive": "prendre",
    "translation": "to take",
    "suffixes": [
      "un café à emporter",
      "le journal chez le marchand",
      "le bus au coin de la rue"
    ]
  },
  {
    "infinitive": "réparer",
    "translation": "to repair",
    "suffixes": [
      "la clôture",
      "la bicyclette",
      "la porte du garage"
    ]
  },
  {
    "infinitive": "observer",
    "translation": "to observe",
    "suffixes": [
      "les oiseaux dans le jardin",
      "le coucher du soleil du balcon",
      "les étoiles la nuit"
    ]
  },
  {
    "infinitive": "peindre",
    "translation": "to paint",
    "suffixes": [
      "la clôture",
      "la façade de la maison",
      "la porte d'entrée"
    ]
  },
  {
    "infinitive": "balayer",
    "translation": "to sweep",
    "suffixes": [
      "le trottoir",
      "l'allée",
      "les escaliers devant la maison"
    ]
  },
  {
    "infinitive": "planter",
    "translation": "to plant",
    "suffixes": [
      "des fleurs",
      "un arbre",
      "des légumes dans le jardin"
    ]
  },
  {
    "infinitive": "se détendre",
    "translation": "to relax",
    "suffixes": [
      "dans le jardin",
      "sur la terrasse",
      "au parc"
    ]
  },
  {
    "infinitive": "faire du vélo",
    "translation": "to cycle",
    "suffixes": [
      "autour du quartier",
      "jusqu'au marché",
      "dans le parc"
    ]
  },
  {
    "infinitive": "livrer",
    "translation": "to deliver",
    "suffixes": [
      "des colis aux voisins",
      "le courrier",
      "les journaux"
    ]
  },
  {
    "infinitive": "installer",
    "translation": "to install",
    "suffixes": [
      "une nouvelle boîte aux lettres",
      "une balançoire dans le jardin",
      "des lumières extérieures"
    ]
  },
  {
    "infinitive": "tailler",
    "translation": "to trim",
    "suffixes": [
      "les haies",
      "les arbustes",
      "les arbres du jardin"
    ]
  },
  {
    "infinitive": "recycler",
    "translation": "to recycle",
    "suffixes": [
      "les bouteilles en plastique",
      "le carton",
      "les déchets alimentaires"
    ]
  },
  {
    "infinitive": "fermer",
    "translation": "to close",
    "suffixes": [
      "la porte du garage",
      "les fenêtres avant la nuit",
      "le portail du jardin"
    ]
  },
  {
    "infinitive": "ouvrir",
    "translation": "to open",
    "suffixes": [
      "les rideaux le matin",
      "la porte au livreur",
      "la fenêtre pour aérer"
    ]
  },
  {
    "infinitive": "arroser",
    "translation": "to water",
    "suffixes": [
      "les plantes",
      "le jardin potager",
      "les fleurs sur le balcon"
    ]
  },
  {
    "infinitive": "allumer",
    "translation": "to turn on",
    "suffixes": [
      "les lumières extérieures",
      "le barbecue",
      "la fontaine de jardin"
    ]
  },
  {
    "infinitive": "éteindre",
    "translation": "to turn off",
    "suffixes": [
      "les lumières la nuit",
      "le barbecue après utilisation",
      "l'arrosage automatique"
    ]
  },
  {
    "infinitive": "inviter",
    "translation": "to invite",
    "suffixes": [
      "les voisins pour un café",
      "des amis pour dîner",
      "la famille pour un barbecue"
    ]
  },
  {
    "infinitive": "cuisiner",
    "translation": "to cook",
    "suffixes": [
      "pour les voisins",
      "dans le jardin",
      "un repas pour la famille"
    ]
  },
  {
    "infinitive": "bricoler",
    "translation": "to do DIY projects",
    "suffixes": [
      "dans le garage",
      "autour de la maison",
      "sur la terrasse"
    ]
  },
  {
    "infinitive": "jouer",
    "translation": "to play",
    "suffixes": [
      "avec les enfants dans le jardin",
      "au frisbee dans le parc",
      "aux échecs avec un voisin"
    ]
  },
  {
    "infinitive": "profiter",
    "translation": "to enjoy",
    "suffixes": [
      "du soleil sur le balcon",
      "du calme du quartier",
      "d'une promenade tranquille"
    ]
  },
//];
// Verbs and suffixes for the quiz with vacation theme
//const vacation_proche = [
  {
    "infinitive": "voyager",
    "translation": "to travel",
    "suffixes": [
      "en Italie",
      "en avion",
      "avec des amis"
    ]
  },
  {
    "infinitive": "réserver",
    "translation": "to book",
    "suffixes": [
      "un hôtel cinq étoiles",
      "une chambre avec vue sur mer",
      "un séjour tout inclus"
    ]
  },
  {
    "infinitive": "bronzer",
    "translation": "to tan",
    "suffixes": [
      "sur la plage",
      "près de la piscine",
      "au soleil"
    ]
  },
  {
    "infinitive": "visiter",
    "translation": "to visit",
    "suffixes": [
      "des monuments historiques",
      "un musée célèbre",
      "une petite ville charmante"
    ]
  },
  {
    "infinitive": "goûter",
    "translation": "to taste",
    "suffixes": [
      "la cuisine locale",
      "des spécialités régionales",
      "des fruits exotiques"
    ]
  },
  {
    "infinitive": "nager",
    "translation": "to swim",
    "suffixes": [
      "dans la mer",
      "dans une cascade naturelle",
      "dans une piscine chauffée"
    ]
  },
  {
    "infinitive": "acheter",
    "translation": "to buy",
    "suffixes": [
      "des souvenirs",
      "des cartes postales",
      "un maillot de bain"
    ]
  },
  {
    "infinitive": "explorer",
    "translation": "to explore",
    "suffixes": [
      "une forêt tropicale",
      "des grottes mystérieuses",
      "les ruines antiques"
    ]
  },
  {
    "infinitive": "photographier",
    "translation": "to photograph",
    "suffixes": [
      "le coucher du soleil",
      "les paysages montagneux",
      "les marchés locaux"
    ]
  },
  {
    "infinitive": "se détendre",
    "translation": "to relax",
    "suffixes": [
      "dans un spa",
      "au bord de l'eau",
      "dans un hamac"
    ]
  },
  {
    "infinitive": "marcher",
    "translation": "to walk",
    "suffixes": [
      "le long de la plage",
      "dans les rues pittoresques",
      "dans un parc naturel"
    ]
  },
  {
    "infinitive": "déguster",
    "translation": "to savor",
    "suffixes": [
      "un repas gastronomique",
      "un cocktail exotique",
      "une glace artisanale"
    ]
  },
  {
    "infinitive": "prendre",
    "translation": "to take",
    "suffixes": [
      "un bain de soleil",
      "un tour en bateau",
      "le train panoramique"
    ]
  },
  {
    "infinitive": "séjourner",
    "translation": "to stay",
    "suffixes": [
      "dans une villa luxueuse",
      "dans une auberge traditionnelle",
      "chez l'habitant"
    ]
  },
  {
    "infinitive": "faire",
    "translation": "to do",
    "suffixes": [
      "du snorkeling",
      "une randonnée",
      "du shopping"
    ]
  },
  {
    "infinitive": "admirer",
    "translation": "to admire",
    "suffixes": [
      "le panorama",
      "les étoiles la nuit",
      "l'architecture locale"
    ]
  },
  {
    "infinitive": "participer",
    "translation": "to participate",
    "suffixes": [
      "à une fête locale",
      "à une excursion organisée",
      "à une visite guidée"
    ]
  },
  {
    "infinitive": "découvrir",
    "translation": "to discover",
    "suffixes": [
      "un marché caché",
      "une plage secrète",
      "une tradition locale"
    ]
  },
  {
    "infinitive": "camper",
    "translation": "to camp",
    "suffixes": [
      "dans une forêt",
      "près d'un lac",
      "sous les étoiles"
    ]
  },
  {
    "infinitive": "planifier",
    "translation": "to plan",
    "suffixes": [
      "une escapade romantique",
      "des vacances en famille",
      "un road trip"
    ]
  },
  {
    "infinitive": "assister",
    "translation": "to attend",
    "suffixes": [
      "à un festival musical",
      "à un spectacle traditionnel",
      "à un événement sportif"
    ]
  },
  {
    "infinitive": "embarquer",
    "translation": "to board",
    "suffixes": [
      "sur un bateau de croisière",
      "dans un avion privé",
      "dans un train de luxe"
    ]
  },
  {
    "infinitive": "faire du vélo",
    "translation": "to cycle",
    "suffixes": [
      "autour du lac",
      "en campagne",
      "dans une ville historique"
    ]
  },
  {
    "infinitive": "observer",
    "translation": "to watch",
    "suffixes": [
      "des dauphins",
      "des oiseaux exotiques",
      "le lever du soleil"
    ]
  },
  {
    "infinitive": "skier",
    "translation": "to ski",
    "suffixes": [
      "dans les Alpes",
      "sur une piste débutante",
      "hors piste"
    ]
  },
  {
    "infinitive": "profiter",
    "translation": "to enjoy",
    "suffixes": [
      "du beau temps",
      "des vacances",
      "de la vie nocturne"
    ]
  },
  {
    "infinitive": "rencontrer",
    "translation": "to meet",
    "suffixes": [
      "des locaux sympathiques",
      "des voyageurs intéressants",
      "un guide touristique"
    ]
  },
  {
    "infinitive": "danser",
    "translation": "to dance",
    "suffixes": [
      "dans une discothèque",
      "sur la plage",
      "lors d'un concert"
    ]
  },
  {
    "infinitive": "pêcher",
    "translation": "to fish",
    "suffixes": [
      "en haute mer",
      "dans une rivière calme",
      "dans un lac isolé"
    ]
  },
  {
    "infinitive": "se baigner",
    "translation": "to bathe",
    "suffixes": [
      "dans une source thermale",
      "dans une crique",
      "dans une piscine naturelle"
    ]
  },
  {
    "infinitive": "s'amuser",
    "translation": "to have fun",
    "suffixes": [
      "dans un parc d'attractions",
      "en faisant du surf",
      "pendant une soirée locale"
    ]
  },
  {
    "infinitive": "se promener",
    "translation": "to stroll",
    "suffixes": [
      "dans un jardin botanique",
      "dans les marchés nocturnes",
      "le long des quais"
    ]
  },
  {
    "infinitive": "escalader",
    "translation": "to climb",
    "suffixes": [
      "une montagne",
      "un mur d'escalade",
      "un volcan éteint"
    ]
  },
  {
    "infinitive": "faire du kayak",
    "translation": "to kayak",
    "suffixes": [
      "sur une rivière",
      "dans une baie tranquille",
      "près des falaises"
    ]
  },
  {
    "infinitive": "flâner",
    "translation": "to wander",
    "suffixes": [
      "dans le centre historique",
      "dans les boutiques locales",
      "dans un marché artisanal"
    ]
  },
  {
    "infinitive": "cueillir",
    "translation": "to pick",
    "suffixes": [
      "des fruits frais",
      "des fleurs sauvages",
      "des légumes bio"
    ]
  },
  {
    "infinitive": "séjourner",
    "translation": "to stay",
    "suffixes": [
      "dans une cabane dans les arbres",
      "dans un château rénové",
      "sur une île privée"
    ]
  },
  {
    "infinitive": "essayer",
    "translation": "to try",
    "suffixes": [
      "une nouvelle activité",
      "un plat exotique",
      "la plongée sous-marine"
    ]
  },
  {
    "infinitive": "embarquer",
    "translation": "to embark",
    "suffixes": [
      "pour une aventure inoubliable",
      "pour un voyage autour du monde",
      "pour une croisière tropicale"
    ]
  },
  {
    "infinitive": "faire une pause",
    "translation": "to take a break",
    "suffixes": [
      "dans un café pittoresque",
      "au sommet d'une colline",
      "sur une terrasse ensoleillée"
    ]
  },
//];
// Verbs and suffixes for the quiz with space theme
//const space_proche = [
  {
    "infinitive": "atterrir",
    "translation": "to land",
    "suffixes": [
      "sur Mars",
      "sur la Lune",
      "en douceur"
    ]
  },
  {
    "infinitive": "décoller",
    "translation": "to take off",
    "suffixes": [
      "dans cinq minutes",
      "vers Saturne",
      "rapidement"
    ]
  },
  {
    "infinitive": "orbiter",
    "translation": "to orbit",
    "suffixes": [
      "autour de Jupiter",
      "autour de la Terre",
      "dans l'espace profond"
    ]
  },
  {
    "infinitive": "explorer",
    "translation": "to explore",
    "suffixes": [
      "une nouvelle galaxie",
      "un astéroïde",
      "une planète inconnue"
    ]
  },
  {
    "infinitive": "observer",
    "translation": "to observe",
    "suffixes": [
      "les étoiles",
      "une éclipse",
      "un phénomène spatial rare"
    ]
  },
  {
    "infinitive": "réparer",
    "translation": "to repair",
    "suffixes": [
      "le télescope spatial",
      "le moteur du vaisseau",
      "une antenne satellite"
    ]
  },
  {
    "infinitive": "construire",
    "translation": "to build",
    "suffixes": [
      "une colonie lunaire",
      "un laboratoire orbital",
      "une base sur Mars"
    ]
  },
  {
    "infinitive": "piloter",
    "translation": "to pilot",
    "suffixes": [
      "un vaisseau spatial",
      "une navette lunaire",
      "un drone spatial"
    ]
  },
  {
    "infinitive": "capturer",
    "translation": "to capture",
    "suffixes": [
      "des images de la nébuleuse",
      "un astéroïde",
      "un signal extraterrestre"
    ]
  },
  {
    "infinitive": "analyser",
    "translation": "to analyze",
    "suffixes": [
      "des échantillons lunaires",
      "l'atmosphère de Vénus",
      "des données spatiales"
    ]
  },
  {
    "infinitive": "communiquer",
    "translation": "to communicate",
    "suffixes": [
      "avec l'équipage",
      "avec une station terrestre",
      "avec des extraterrestres"
    ]
  },
  {
    "infinitive": "programmer",
    "translation": "to program",
    "suffixes": [
      "le pilote automatique",
      "un robot explorateur",
      "une trajectoire spatiale"
    ]
  },
  {
    "infinitive": "activer",
    "translation": "to activate",
    "suffixes": [
      "le bouclier thermique",
      "les panneaux solaires",
      "les propulseurs"
    ]
  },
  {
    "infinitive": "collecter",
    "translation": "to collect",
    "suffixes": [
      "des roches martiennes",
      "des échantillons d'eau lunaire",
      "des particules spatiales"
    ]
  },
  {
    "infinitive": "scanner",
    "translation": "to scan",
    "suffixes": [
      "la surface de la planète",
      "une zone d'atterrissage",
      "un objet inconnu"
    ]
  },
  {
    "infinitive": "installer",
    "translation": "to install",
    "suffixes": [
      "une antenne satellite",
      "un habitat spatial",
      "un télescope"
    ]
  },
  {
    "infinitive": "voyager",
    "translation": "to travel",
    "suffixes": [
      "à travers un trou noir",
      "dans le temps",
      "à la vitesse de la lumière"
    ]
  },
  {
    "infinitive": "naviguer",
    "translation": "to navigate",
    "suffixes": [
      "dans un champ d'astéroïdes",
      "à travers une tempête solaire",
      "entre deux galaxies"
    ]
  },
  {
    "infinitive": "mesurer",
    "translation": "to measure",
    "suffixes": [
      "la gravité sur Mars",
      "la température de Mercure",
      "la distance aux étoiles"
    ]
  },
  {
    "infinitive": "transmettre",
    "translation": "to transmit",
    "suffixes": [
      "un message vers la Terre",
      "des données vers la base",
      "une vidéo spatiale"
    ]
  },
  {
    "infinitive": "sécuriser",
    "translation": "to secure",
    "suffixes": [
      "le vaisseau avant le décollage",
      "les échantillons collectés",
      "la station orbitale"
    ]
  },
  {
    "infinitive": "s'amarrer",
    "translation": "to dock",
    "suffixes": [
      "à la station spatiale",
      "avec un autre vaisseau",
      "au port lunaire"
    ]
  },
  {
    "infinitive": "survivre",
    "translation": "to survive",
    "suffixes": [
      "à une tempête solaire",
      "dans l'espace profond",
      "sur une planète hostile"
    ]
  },
  {
    "infinitive": "charger",
    "translation": "to charge",
    "suffixes": [
      "les batteries du rover",
      "les propulseurs",
      "les systèmes vitaux"
    ]
  },
  {
    "infinitive": "cartographier",
    "translation": "to map",
    "suffixes": [
      "la surface martienne",
      "une galaxie lointaine",
      "les cratères lunaires"
    ]
  },
  {
    "infinitive": "s'entraîner",
    "translation": "to train",
    "suffixes": [
      "en apesanteur",
      "pour une sortie spatiale",
      "dans un simulateur"
    ]
  },
  {
    "infinitive": "détecter",
    "translation": "to detect",
    "suffixes": [
      "une anomalie spatiale",
      "un signal extraterrestre",
      "des radiations dangereuses"
    ]
  },
  {
    "infinitive": "déployer",
    "translation": "to deploy",
    "suffixes": [
      "un satellite",
      "un robot explorateur",
      "un ballon atmosphérique"
    ]
  },
  {
    "infinitive": "tester",
    "translation": "to test",
    "suffixes": [
      "les nouveaux équipements",
      "la résistance des matériaux",
      "le système de propulsion"
    ]
  },
  {
    "infinitive": "préparer",
    "translation": "to prepare",
    "suffixes": [
      "une mission spatiale",
      "l'équipage pour le décollage",
      "la prochaine expédition"
    ]
  }
];

// Game state variables
let currentVerb;
let currentSubject;
let currentSuffix;
let isNegative;
let score = 0;
let streak = 0;
let questionsAnswered = 0;
const totalQuestions = 10;

// DOM elements
const verbTranslation = document.getElementById('verbTranslation');
const questionText = document.getElementById('questionText');
const subjectSelection = document.getElementById('subjectSelection');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('scoreDisplay');
const progressBar = document.getElementById('progressBar');
const streakBadge = document.getElementById('streakBadge');
const streakCount = document.getElementById('streakCount');
const themeToggle = document.getElementById('themeToggle');

// Initialize the game
function initGame() {
  score = 0;
  streak = 0;
  questionsAnswered = 0;
  scoreDisplay.textContent = score;
  updateProgress();
  
  // Set up theme toggle
  themeToggle.addEventListener('click', toggleTheme);
  
  // Event listeners for main controls
  submitBtn.addEventListener('click', checkAnswer);
  nextBtn.addEventListener('click', nextQuestion);
  answerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !submitBtn.classList.contains('hidden')) {
      checkAnswer();
    } else if (e.key === 'Enter' && !nextBtn.classList.contains('hidden')) {
      nextQuestion();
    }
  });
  
  nextQuestion();
}

// Toggle between regular and space theme
function toggleTheme() {
  document.body.classList.toggle('theme-space');
  themeToggle.textContent = document.body.classList.contains('theme-space') ? '🌎' : '🚀';
}

// Update progress bar
function updateProgress() {
  const percentage = (questionsAnswered / totalQuestions) * 100;
  progressBar.style.width = `${percentage}%`;
}

// Update streak display
function updateStreak() {
  if (streak >= 2) {
    streakBadge.classList.remove('hidden');
    streakCount.textContent = streak;
  } else {
    streakBadge.classList.add('hidden');
  }
}

// Select a random subject for the question
function selectRandomSubject() {
  const randomIndex = Math.floor(Math.random() * subjects.length);
  return subjects[randomIndex];
}

// Show next question
function nextQuestion() {
  // Reset UI
  answerInput.value = '';
  feedback.classList.add('hidden');
  submitBtn.classList.remove('hidden');
  nextBtn.classList.add('hidden');
  
  // Select random verb and suffix
  const randomVerbIndex = Math.floor(Math.random() * proche.length);
  currentVerb = proche[randomVerbIndex];
  
  const randomSuffixIndex = Math.floor(Math.random() * currentVerb.suffixes.length);
  currentSuffix = currentVerb.suffixes[randomSuffixIndex];
  
  // Select random subject
  currentSubject = selectRandomSubject();
  
  // Randomly decide if this should be a negative form question (30% chance)
  isNegative = Math.random() < 0.3;
  
  // Display verb translation
  verbTranslation.textContent = `(${currentVerb.translation})`;
  
  // Display question with the randomly selected subject and negative form if applicable
  let promptPrefix = currentSubject;
  
  questionText.innerHTML = `Complétez avec <strong>${currentVerb.infinitive}</strong> au futur proche ${isNegative ? '(forme négative)' : ''}:<br><br>${promptPrefix} _____ ${currentSuffix}`;
  
  // Focus on input
  answerInput.focus();
}

// Check the answer
function checkAnswer() {
  
  questionsAnswered++;
  updateProgress();
  
  const userAnswer = answerInput.value.trim().toLowerCase();
  
  // For the futur proche, we need "aller" conjugated + infinitive verb
  let correctAnswer = `${aller_present_conjugations[currentSubject]} ${currentVerb.infinitive}`;
  if (isNegative) {
    correctAnswer = `ne ${aller_present_conjugations[currentSubject]} pas ${currentVerb.infinitive}`
  }

  if (userAnswer === correctAnswer) {
    // Correct answer
    score++;
    streak++;
    updateStreak();
    scoreDisplay.textContent = score;
    feedback.textContent = `Correct! ✅`;
    feedback.classList.remove('incorrect');
    feedback.classList.add('correct');
    
    if (streak % 3 === 0 && streak > 0) {
      // Celebration for 3 correct answers in a row
      createConfetti();
    }
  } else {
    // Incorrect answer
    streak = 0;
    updateStreak();
    
    let explanation = `La forme correcte est: "${correctAnswer}"`;
    
    // Check for common errors and give targeted feedback
    if (!userAnswer.includes(currentVerb.infinitive)) {
      explanation += `<br><br>N'oubliez pas d'utiliser l'infinitif "${currentVerb.infinitive}" après la forme conjuguée de "aller".`;
    }
    
    if (!userAnswer.includes(aller_present_conjugations[currentSubject])) {
      explanation += `<br><br>Pour le sujet "${currentSubject}", on conjugue "aller" comme "${aller_present_conjugations[currentSubject]}".`;
    }
    
    feedback.innerHTML = `Incorrect! ❌<br><div class="explanation">${explanation}</div>`;
    feedback.classList.remove('correct');
    feedback.classList.add('incorrect');
  }
  
  feedback.classList.remove('hidden');
  submitBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');
  
  // Check if this was the last question
  if (questionsAnswered >= totalQuestions) {
    nextBtn.textContent = "Voir le résultat final";
  }
  
  // Check if quiz is complete
  if (questionsAnswered >= totalQuestions && !nextBtn.classList.contains('hidden')) {
    nextBtn.removeEventListener('click', nextQuestion);
    nextBtn.addEventListener('click', showFinalResult);
  }
}

// Show final result
function showFinalResult() {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  questionText.innerHTML = `<h2>Quiz Terminé!</h2>`;
  verbTranslation.textContent = '';
  
  let feedbackMessage;
  if (percentage >= 90) {
    feedbackMessage = `Excellent! 🌟 Vous avez obtenu ${score}/${totalQuestions} (${percentage}%).<br>Vous maîtrisez très bien le futur proche!`;
    createConfetti(30);
  } else if (percentage >= 70) {
    feedbackMessage = `Très bien! 👍 Vous avez obtenu ${score}/${totalQuestions} (${percentage}%).<br>Vous comprenez bien le futur proche.`;
  } else if (percentage >= 50) {
    feedbackMessage = `Pas mal! 🙂 Vous avez obtenu ${score}/${totalQuestions} (${percentage}%).<br>Continuez à pratiquer le futur proche.`;
  } else {
    feedbackMessage = `Courage! 💪 Vous avez obtenu ${score}/${totalQuestions} (${percentage}%).<br>Il faut réviser la formation du futur proche.`;
  }
  
  feedback.innerHTML = feedbackMessage;
  feedback.classList.remove('incorrect');
  feedback.classList.add('correct');
  feedback.classList.remove('hidden');
  
  nextBtn.textContent = "Rejouer";
  nextBtn.removeEventListener('click', showFinalResult);
  nextBtn.addEventListener('click', resetGame);
}

// Reset game
function resetGame() {
  initGame();
}

// Create confetti effect
function createConfetti(count = 15) {
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.opacity = Math.random() + 0.5;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);
