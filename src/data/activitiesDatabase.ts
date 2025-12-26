// Comprehensive Learning Activities Database
export interface Activity {
  id: string;
  title: string;
  description: string;
  category: 'quiz' | 'location' | 'construction' | 'memory' | 'timeline' | 'symbol';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: string;
  players: 'single' | 'multi' | 'both';
  questions: ActivityQuestion[];
  instructions: string[];
  scoring: ScoringSystem;
  achievements: Achievement[];
}

export interface ActivityQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'matching' | 'ordering' | 'drag-drop';
  question: string;
  options?: string[];
  correctAnswer: string | string[] | number;
  explanation: string;
  scriptureRef?: string;
  points: number;
  timeLimit?: number;
}

export interface ScoringSystem {
  maxPoints: number;
  passingScore: number;
  bonusMultiplier: number;
  timeBonus: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
}

// ADDITIONAL QUIZ GAMES (10 MORE)
const additionalQuizActivities: Activity[] = [
  {
    id: 'prophecy-expert-challenge',
    title: 'Prophecy Expert Challenge',
    description: 'Advanced quiz on prophetic timelines and interpretations',
    category: 'quiz',
    difficulty: 'expert',
    duration: '15-20 min',
    players: 'single',
    instructions: [
      'Answer complex prophetic questions',
      'Focus on SDA interpretations',
      'Time pressure increases difficulty',
      'Unlock expert achievements'
    ],
    scoring: {
      maxPoints: 1500,
      passingScore: 1200,
      bonusMultiplier: 2.0,
      timeBonus: true
    },
    achievements: [
      {
        id: 'prophecy-master',
        name: 'Prophecy Master',
        description: 'Score 1400+ in Prophecy Expert Challenge',
        icon: '🔮',
        requirement: 'score >= 1400'
      }
    ],
    questions: [
      {
        id: 'prophecy-1',
        type: 'multiple-choice',
        question: 'According to SDA interpretation, when did the 1260-year period of papal supremacy end?',
        options: ['1798 AD', '1844 AD', '1863 AD', '1888 AD'],
        correctAnswer: '1798 AD',
        explanation: 'The papal captivity by Napoleon in 1798 ended the 1260 years of supremacy.',
        scriptureRef: 'Daniel 7:25',
        points: 25
      }
    ]
  },
  {
    id: 'sanctuary-service-quiz',
    title: 'Sanctuary Service Quiz',
    description: 'Test knowledge of earthly and heavenly sanctuary services',
    category: 'quiz',
    difficulty: 'advanced',
    duration: '12-15 min',
    players: 'single',
    instructions: [
      'Focus on sanctuary symbolism',
      'Connect earthly and heavenly services',
      'Understand SDA sanctuary doctrine',
      'Learn investigative judgment details'
    ],
    scoring: {
      maxPoints: 1000,
      passingScore: 750,
      bonusMultiplier: 1.5,
      timeBonus: false
    },
    achievements: [
      {
        id: 'sanctuary-scholar',
        name: 'Sanctuary Scholar',
        description: 'Perfect score in Sanctuary Service Quiz',
        icon: '⛪',
        requirement: 'score == 1000'
      }
    ],
    questions: [
      {
        id: 'sanctuary-1',
        type: 'multiple-choice',
        question: 'What does the cleansing of the sanctuary in Daniel 8:14 represent?',
        options: ['Temple rebuilding', 'Investigative judgment', 'Christ\'s baptism', 'Second coming'],
        correctAnswer: 'Investigative judgment',
        explanation: 'The cleansing represents the investigative judgment beginning in 1844.',
        scriptureRef: 'Daniel 8:14',
        points: 20
      }
    ]
  },
  {
    id: 'beast-powers-identification',
    title: 'Beast Powers Identification',
    description: 'Identify and understand the beast powers in Daniel and Revelation',
    category: 'quiz',
    difficulty: 'intermediate',
    duration: '10-12 min',
    players: 'single',
    instructions: [
      'Study beast characteristics',
      'Match beasts with kingdoms',
      'Understand prophetic symbols',
      'Learn historical fulfillment'
    ],
    scoring: {
      maxPoints: 800,
      passingScore: 560,
      bonusMultiplier: 1.3,
      timeBonus: true
    },
    achievements: [
      {
        id: 'beast-expert',
        name: 'Beast Expert',
        description: 'Identify all beast powers correctly',
        icon: '🦁',
        requirement: 'beast_identification == perfect'
      }
    ],
    questions: [
      {
        id: 'beast-1',
        type: 'matching',
        question: 'Match the beasts with their identifying features:',
        options: [
          'Lion - Eagle\'s wings',
          'Bear - Three ribs',
          'Leopard - Four heads',
          'Dreadful Beast - Ten horns'
        ],
        correctAnswer: [
          'Lion - Eagle\'s wings',
          'Bear - Three ribs',
          'Leopard - Four heads',
          'Dreadful Beast - Ten horns'
        ],
        explanation: 'Each beast has distinctive features that identify the kingdom.',
        scriptureRef: 'Daniel 7:3-7',
        points: 30
      }
    ]
  },
  {
    id: 'seven-churches-expert',
    title: 'Seven Churches Expert',
    description: 'Master the messages to the seven churches and their historical periods',
    category: 'quiz',
    difficulty: 'advanced',
    duration: '15-18 min',
    players: 'single',
    instructions: [
      'Study each church period',
      'Understand historical context',
      'Learn spiritual applications',
      'Connect to church history'
    ],
    scoring: {
      maxPoints: 1200,
      passingScore: 900,
      bonusMultiplier: 1.8,
      timeBonus: false
    },
    achievements: [
      {
        id: 'church-historian',
        name: 'Church Historian',
        description: 'Master all seven church periods',
        icon: '🕊️',
        requirement: 'churches_mastered >= 7'
      }
    ],
    questions: [
      {
        id: 'churches-1',
        type: 'multiple-choice',
        question: 'Which church period represents the Protestant Reformation?',
        options: ['Thyatira', 'Sardis', 'Philadelphia', 'Laodicea'],
        correctAnswer: 'Sardis',
        explanation: 'Sardis (1517-1798) represents the Protestant Reformation period.',
        scriptureRef: 'Revelation 3:1-6',
        points: 25
      }
    ]
  },
  {
    id: 'numbers-and-symbols',
    title: 'Numbers and Symbols Master',
    description: 'Decode biblical numbers and their prophetic significance',
    category: 'quiz',
    difficulty: 'intermediate',
    duration: '8-12 min',
    players: 'single',
    instructions: [
      'Learn symbolic numbers',
      'Understand time prophecies',
      'Apply day-year principle',
      'Calculate prophetic periods'
    ],
    scoring: {
      maxPoints: 900,
      passingScore: 630,
      bonusMultiplier: 1.4,
      timeBonus: true
    },
    achievements: [
      {
        id: 'number-decoder',
        name: 'Number Decoder',
        description: 'Decode 15 prophetic numbers correctly',
        icon: '🔢',
        requirement: 'numbers_decoded >= 15'
      }
    ],
    questions: [
      {
        id: 'numbers-1',
        type: 'fill-blank',
        question: 'The number 7 in Revelation represents ______.',
        correctAnswer: 'completeness',
        explanation: 'Seven represents divine completeness and perfection.',
        scriptureRef: 'Revelation 1:4',
        points: 15
      }
    ]
  },
  {
    id: 'end-time-events',
    title: 'End-Time Events Quiz',
    description: 'Test knowledge of final events and second coming signs',
    category: 'quiz',
    difficulty: 'advanced',
    duration: '12-16 min',
    players: 'single',
    instructions: [
      'Study end-time prophecies',
      'Learn signs of the times',
      'Understand final events sequence',
      'Prepare for Christ\'s return'
    ],
    scoring: {
      maxPoints: 1100,
      passingScore: 770,
      bonusMultiplier: 1.6,
      timeBonus: false
    },
    achievements: [
      {
        id: 'end-time-scholar',
        name: 'End-Time Scholar',
        description: 'Master end-time events sequence',
        icon: '⏰',
        requirement: 'end_time_mastery == true'
      }
    ],
    questions: [
      {
        id: 'endtime-1',
        type: 'ordering',
        question: 'Arrange these end-time events in correct order:',
        options: [
          'Sunday law enforcement',
          'Close of probation',
          'Seven last plagues',
          'Christ\'s second coming'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the SDA understanding of end-time event sequence.',
        scriptureRef: 'Revelation 13-19',
        points: 40
      }
    ]
  },
  {
    id: 'three-angels-messages',
    title: 'Three Angels\' Messages',
    description: 'Master the three angels\' messages and their significance',
    category: 'quiz',
    difficulty: 'intermediate',
    duration: '10-14 min',
    players: 'single',
    instructions: [
      'Study each angel\'s message',
      'Understand their timing',
      'Learn their application today',
      'Connect to SDA mission'
    ],
    scoring: {
      maxPoints: 850,
      passingScore: 595,
      bonusMultiplier: 1.3,
      timeBonus: true
    },
    achievements: [
      {
        id: 'message-bearer',
        name: 'Message Bearer',
        description: 'Perfect understanding of three angels\' messages',
        icon: '👼',
        requirement: 'angels_messages_perfect == true'
      }
    ],
    questions: [
      {
        id: 'angels-1',
        type: 'multiple-choice',
        question: 'What does the first angel\'s message proclaim?',
        options: ['Babylon is fallen', 'Fear God and give glory', 'Mark of the beast warning', 'Harvest time'],
        correctAnswer: 'Fear God and give glory',
        explanation: 'The first angel proclaims the everlasting gospel and judgment hour.',
        scriptureRef: 'Revelation 14:6-7',
        points: 20
      }
    ]
  },
  {
    id: 'millennium-quiz',
    title: 'Millennium and Final Judgment',
    description: 'Understand the 1000 years and final judgment events',
    category: 'quiz',
    difficulty: 'advanced',
    duration: '14-18 min',
    players: 'single',
    instructions: [
      'Study millennium events',
      'Understand resurrection timing',
      'Learn about final judgment',
      'Explore new earth promises'
    ],
    scoring: {
      maxPoints: 1000,
      passingScore: 750,
      bonusMultiplier: 1.5,
      timeBonus: false
    },
    achievements: [
      {
        id: 'millennium-master',
        name: 'Millennium Master',
        description: 'Complete understanding of millennium events',
        icon: '🌅',
        requirement: 'millennium_complete == true'
      }
    ],
    questions: [
      {
        id: 'millennium-1',
        type: 'true-false',
        question: 'During the millennium, the righteous will be in heaven judging the wicked.',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'The righteous will participate in the judgment during the 1000 years.',
        scriptureRef: 'Revelation 20:4',
        points: 15
      }
    ]
  },
  {
    id: 'health-message-quiz',
    title: 'Health Message and Daniel 1',
    description: 'Learn about biblical health principles and their importance',
    category: 'quiz',
    difficulty: 'beginner',
    duration: '8-10 min',
    players: 'single',
    instructions: [
      'Study Daniel\'s health choice',
      'Learn biblical health principles',
      'Understand body as temple',
      'Apply health message today'
    ],
    scoring: {
      maxPoints: 600,
      passingScore: 420,
      bonusMultiplier: 1.2,
      timeBonus: true
    },
    achievements: [
      {
        id: 'health-advocate',
        name: 'Health Advocate',
        description: 'Master biblical health principles',
        icon: '🥗',
        requirement: 'health_principles_mastered == true'
      }
    ],
    questions: [
      {
        id: 'health-1',
        type: 'multiple-choice',
        question: 'What did Daniel request instead of the king\'s food?',
        options: ['Bread and water', 'Vegetables and water', 'Fruits and milk', 'Grains and juice'],
        correctAnswer: 'Vegetables and water',
        explanation: 'Daniel requested pulse (vegetables) and water to avoid defilement.',
        scriptureRef: 'Daniel 1:12',
        points: 10
      }
    ]
  },
  {
    id: 'great-controversy-quiz',
    title: 'Great Controversy Theme',
    description: 'Understand the cosmic conflict between good and evil',
    category: 'quiz',
    difficulty: 'intermediate',
    duration: '12-15 min',
    players: 'single',
    instructions: [
      'Study the cosmic conflict',
      'Understand Satan\'s accusations',
      'Learn God\'s character vindication',
      'See the controversy\'s resolution'
    ],
    scoring: {
      maxPoints: 950,
      passingScore: 665,
      bonusMultiplier: 1.4,
      timeBonus: false
    },
    achievements: [
      {
        id: 'controversy-scholar',
        name: 'Controversy Scholar',
        description: 'Understand the great controversy theme',
        icon: '⚔️',
        requirement: 'controversy_understanding == complete'
      }
    ],
    questions: [
      {
        id: 'controversy-1',
        type: 'fill-blank',
        question: 'The great controversy began in ______ when Lucifer rebelled.',
        correctAnswer: 'heaven',
        explanation: 'The conflict started in heaven with Lucifer\'s rebellion against God.',
        scriptureRef: 'Revelation 12:7',
        points: 18
      }
    ]
  }
];

// ADDITIONAL LOCATION & DISCOVERY ACTIVITIES (10 MORE)
const additionalLocationActivities: Activity[] = [
  {
    id: 'find-the-vision',
    title: 'Find the Vision',
    description: 'Locate specific visions and dreams throughout Daniel and Revelation',
    category: 'location',
    difficulty: 'intermediate',
    duration: '10-12 min',
    players: 'single',
    instructions: [
      'Identify vision locations',
      'Match visions with chapters',
      'Understand vision contexts',
      'Learn prophetic sequences'
    ],
    scoring: {
      maxPoints: 750,
      passingScore: 525,
      bonusMultiplier: 1.3,
      timeBonus: false
    },
    achievements: [
      {
        id: 'vision-finder',
        name: 'Vision Finder',
        description: 'Locate 20 visions correctly',
        icon: '👁️',
        requirement: 'visions_found >= 20'
      }
    ],
    questions: [
      {
        id: 'vision-1',
        type: 'multiple-choice',
        question: 'In which chapter is the vision of the ram and goat found?',
        options: ['Daniel 7', 'Daniel 8', 'Daniel 9', 'Daniel 10'],
        correctAnswer: 'Daniel 8',
        explanation: 'The ram and goat vision is recorded in Daniel 8.',
        scriptureRef: 'Daniel 8',
        points: 15
      }
    ]
  },
  {
    id: 'throne-room-explorer',
    title: 'Throne Room Explorer',
    description: 'Navigate the heavenly throne room scenes in Revelation',
    category: 'location',
    difficulty: 'advanced',
    duration: '12-15 min',
    players: 'single',
    instructions: [
      'Explore heavenly scenes',
      'Identify throne room elements',
      'Understand worship sequences',
      'Learn about heavenly beings'
    ],
    scoring: {
      maxPoints: 900,
      passingScore: 630,
      bonusMultiplier: 1.5,
      timeBonus: false
    },
    achievements: [
      {
        id: 'throne-navigator',
        name: 'Throne Navigator',
        description: 'Master heavenly throne room geography',
        icon: '👑',
        requirement: 'throne_mastery == complete'
      }
    ],
    questions: [
      {
        id: 'throne-1',
        type: 'matching',
        question: 'Match throne room elements with their descriptions:',
        options: [
          'Rainbow - Around the throne',
          'Sea of glass - Before the throne',
          '24 Elders - Around the throne',
          'Four beasts - In midst of throne'
        ],
        correctAnswer: [
          'Rainbow - Around the throne',
          'Sea of glass - Before the throne',
          '24 Elders - Around the throne',
          'Four beasts - In midst of throne'
        ],
        explanation: 'Each element has a specific position in the throne room.',
        scriptureRef: 'Revelation 4',
        points: 25
      }
    ]
  },
  {
    id: 'babylon-geography',
    title: 'Babylon Geography',
    description: 'Explore the geographical and symbolic Babylon references',
    category: 'location',
    difficulty: 'intermediate',
    duration: '8-11 min',
    players: 'single',
    instructions: [
      'Study literal Babylon',
      'Understand symbolic Babylon',
      'Learn historical geography',
      'Connect prophecy to places'
    ],
    scoring: {
      maxPoints: 700,
      passingScore: 490,
      bonusMultiplier: 1.2,
      timeBonus: true
    },
    achievements: [
      {
        id: 'babylon-expert',
        name: 'Babylon Expert',
        description: 'Master both literal and symbolic Babylon',
        icon: '🏛️',
        requirement: 'babylon_understanding == complete'
      }
    ],
    questions: [
      {
        id: 'babylon-1',
        type: 'multiple-choice',
        question: 'Where was literal Babylon located?',
        options: ['Egypt', 'Mesopotamia', 'Palestine', 'Asia Minor'],
        correctAnswer: 'Mesopotamia',
        explanation: 'Babylon was located in Mesopotamia, modern-day Iraq.',
        scriptureRef: 'Daniel 1:1',
        points: 12
      }
    ]
  },
  {
    id: 'sanctuary-locations',
    title: 'Sanctuary Locations',
    description: 'Find references to earthly and heavenly sanctuary locations',
    category: 'location',
    difficulty: 'advanced',
    duration: '14-17 min',
    players: 'single',
    instructions: [
      'Locate sanctuary references',
      'Distinguish earthly vs heavenly',
      'Understand sanctuary geography',
      'Learn about holy places'
    ],
    scoring: {
      maxPoints: 1000,
      passingScore: 700,
      bonusMultiplier: 1.6,
      timeBonus: false
    },
    achievements: [
      {
        id: 'sanctuary-navigator',
        name: 'Sanctuary Navigator',
        description: 'Navigate both earthly and heavenly sanctuaries',
        icon: '⛪',
        requirement: 'sanctuary_navigation == expert'
      }
    ],
    questions: [
      {
        id: 'sanctuary-loc-1',
        type: 'true-false',
        question: 'The heavenly sanctuary has a Most Holy Place.',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'The heavenly sanctuary mirrors the earthly with Holy and Most Holy places.',
        scriptureRef: 'Hebrews 9:24',
        points: 18
      }
    ]
  },
  {
    id: 'persecution-places',
    title: 'Persecution Places',
    description: 'Identify locations where God\'s people faced persecution',
    category: 'location',
    difficulty: 'intermediate',
    duration: '9-12 min',
    players: 'single',
    instructions: [
      'Find persecution locations',
      'Study historical contexts',
      'Learn about faithful witnesses',
      'Understand prophetic fulfillment'
    ],
    scoring: {
      maxPoints: 650,
      passingScore: 455,
      bonusMultiplier: 1.3,
      timeBonus: true
    },
    achievements: [
      {
        id: 'persecution-historian',
        name: 'Persecution Historian',
        description: 'Master persecution history and locations',
        icon: '🕊️',
        requirement: 'persecution_knowledge == complete'
      }
    ],
    questions: [
      {
        id: 'persecution-1',
        type: 'multiple-choice',
        question: 'Where were the three Hebrews thrown into the fiery furnace?',
        options: ['Jerusalem', 'Babylon', 'Shushan', 'Damascus'],
        correctAnswer: 'Babylon',
        explanation: 'The fiery furnace incident occurred in Babylon.',
        scriptureRef: 'Daniel 3',
        points: 15
      }
    ]
  },
  {
    id: 'river-locations',
    title: 'River Locations',
    description: 'Find and understand the significance of rivers in prophecy',
    category: 'location',
    difficulty: 'beginner',
    duration: '6-9 min',
    players: 'single',
    instructions: [
      'Locate prophetic rivers',
      'Understand their symbolism',
      'Learn geographical context',
      'Connect to historical events'
    ],
    scoring: {
      maxPoints: 500,
      passingScore: 350,
      bonusMultiplier: 1.1,
      timeBonus: true
    },
    achievements: [
      {
        id: 'river-guide',
        name: 'River Guide',
        description: 'Navigate all prophetic rivers',
        icon: '🌊',
        requirement: 'rivers_mastered >= 5'
      }
    ],
    questions: [
      {
        id: 'river-1',
        type: 'fill-blank',
        question: 'Daniel received a vision by the river ______.',
        correctAnswer: 'Ulai',
        explanation: 'Daniel 8 vision was received by the river Ulai.',
        scriptureRef: 'Daniel 8:2',
        points: 12
      }
    ]
  },
  {
    id: 'mountain-symbolism',
    title: 'Mountain Symbolism',
    description: 'Explore mountains and their prophetic significance',
    category: 'location',
    difficulty: 'intermediate',
    duration: '10-13 min',
    players: 'single',
    instructions: [
      'Find mountain references',
      'Understand their symbolism',
      'Learn about holy mountains',
      'Connect to kingdom prophecies'
    ],
    scoring: {
      maxPoints: 750,
      passingScore: 525,
      bonusMultiplier: 1.4,
      timeBonus: false
    },
    achievements: [
      {
        id: 'mountain-climber',
        name: 'Mountain Climber',
        description: 'Ascend all prophetic mountains',
        icon: '⛰️',
        requirement: 'mountains_explored >= 8'
      }
    ],
    questions: [
      {
        id: 'mountain-1',
        type: 'multiple-choice',
        question: 'What does the stone becoming a great mountain represent?',
        options: ['Literal mountain', 'God\'s kingdom', 'Church building', 'Temple mount'],
        correctAnswer: 'God\'s kingdom',
        explanation: 'The stone becoming a mountain represents God\'s kingdom filling the earth.',
        scriptureRef: 'Daniel 2:35',
        points: 18
      }
    ]
  },
  {
    id: 'city-explorer',
    title: 'City Explorer',
    description: 'Navigate the cities mentioned in Daniel and Revelation',
    category: 'location',
    difficulty: 'beginner',
    duration: '7-10 min',
    players: 'single',
    instructions: [
      'Explore biblical cities',
      'Learn their historical significance',
      'Understand prophetic roles',
      'Connect to modern locations'
    ],
    scoring: {
      maxPoints: 600,
      passingScore: 420,
      bonusMultiplier: 1.2,
      timeBonus: true
    },
    achievements: [
      {
        id: 'city-guide',
        name: 'City Guide',
        description: 'Master biblical city geography',
        icon: '🏙️',
        requirement: 'cities_mastered >= 10'
      }
    ],
    questions: [
      {
        id: 'city-1',
        type: 'matching',
        question: 'Match cities with their significance:',
        options: [
          'Jerusalem - Holy city',
          'Babylon - Captivity location',
          'Shushan - Persian capital',
          'Patmos - Revelation received'
        ],
        correctAnswer: [
          'Jerusalem - Holy city',
          'Babylon - Captivity location',
          'Shushan - Persian capital',
          'Patmos - Revelation received'
        ],
        explanation: 'Each city has specific prophetic and historical significance.',
        scriptureRef: 'Various',
        points: 20
      }
    ]
  },
  {
    id: 'temple-locations',
    title: 'Temple Locations',
    description: 'Find and understand temple references in prophecy',
    category: 'location',
    difficulty: 'advanced',
    duration: '12-16 min',
    players: 'single',
    instructions: [
      'Locate temple references',
      'Distinguish earthly vs heavenly',
      'Understand temple symbolism',
      'Learn about temple services'
    ],
    scoring: {
      maxPoints: 850,
      passingScore: 595,
      bonusMultiplier: 1.5,
      timeBonus: false
    },
    achievements: [
      {
        id: 'temple-scholar',
        name: 'Temple Scholar',
        description: 'Master temple geography and symbolism',
        icon: '🏛️',
        requirement: 'temple_mastery == complete'
      }
    ],
    questions: [
      {
        id: 'temple-1',
        type: 'true-false',
        question: 'In the New Jerusalem, there will be no temple.',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Revelation 21:22 says there is no temple because God and the Lamb are the temple.',
        scriptureRef: 'Revelation 21:22',
        points: 20
      }
    ]
  },
  {
    id: 'wilderness-wanderings',
    title: 'Wilderness Wanderings',
    description: 'Explore wilderness locations and their prophetic meaning',
    category: 'location',
    difficulty: 'intermediate',
    duration: '8-11 min',
    players: 'single',
    instructions: [
      'Find wilderness references',
      'Understand their symbolism',
      'Learn about God\'s protection',
      'Connect to church history'
    ],
    scoring: {
      maxPoints: 700,
      passingScore: 490,
      bonusMultiplier: 1.3,
      timeBonus: true
    },
    achievements: [
      {
        id: 'wilderness-guide',
        name: 'Wilderness Guide',
        description: 'Navigate prophetic wilderness experiences',
        icon: '🏜️',
        requirement: 'wilderness_understanding == complete'
      }
    ],
    questions: [
      {
        id: 'wilderness-1',
        type: 'multiple-choice',
        question: 'Where does the woman flee in Revelation 12?',
        options: ['Mountains', 'Wilderness', 'Islands', 'Cities'],
        correctAnswer: 'Wilderness',
        explanation: 'The woman (church) flees to the wilderness for 1260 days.',
        scriptureRef: 'Revelation 12:6',
        points: 16
      }
    ]
  }
];

// ADDITIONAL TEXT CONSTRUCTION ACTIVITIES (10 MORE)
const additionalConstructionActivities: Activity[] = [
  {
    id: 'build-prophecy-sequence',
    title: 'Build Prophecy Sequence',
    description: 'Arrange prophetic events in their correct chronological order',
    category: 'construction',
    difficulty: 'expert',
    duration: '20-25 min',
    players: 'single',
    instructions: [
      'Study prophetic sequences',
      'Understand chronological order',
      'Apply SDA interpretations',
      'Build complete timelines'
    ],
    scoring: {
      maxPoints: 1500,
      passingScore: 1050,
      bonusMultiplier: 2.5,
      timeBonus: true
    },
    achievements: [
      {
        id: 'prophecy-architect',
        name: 'Prophecy Architect',
        description: 'Build perfect prophetic sequences',
        icon: '🏗️',
        requirement: 'prophecy_sequences_perfect >= 5'
      }
    ],
    questions: [
      {
        id: 'prophecy-seq-1',
        type: 'ordering',
        question: 'Arrange these prophetic periods in chronological order:',
        options: [
          'Babylon conquers Judah (605 BC)',
          'Medo-Persia conquers Babylon (539 BC)',
          'Greece conquers Persia (331 BC)',
          'Rome becomes dominant (168 BC)'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This represents the correct sequence of the four kingdoms.',
        scriptureRef: 'Daniel 2, 7, 8',
        points: 50
      }
    ]
  },
  {
    id: 'reconstruct-vision',
    title: 'Reconstruct Vision',
    description: 'Rebuild complete visions from scattered elements',
    category: 'construction',
    difficulty: 'advanced',
    duration: '15-20 min',
    players: 'single',
    instructions: [
      'Gather vision elements',
      'Arrange in proper sequence',
      'Understand vision flow',
      'Complete the picture'
    ],
    scoring: {
      maxPoints: 1200,
      passingScore: 840,
      bonusMultiplier: 2.0,
      timeBonus: false
    },
    achievements: [
      {
        id: 'vision-builder',
        name: 'Vision Builder',
        description: 'Reconstruct 3 complete visions perfectly',
        icon: '👁️‍🗨️',
        requirement: 'visions_reconstructed >= 3'
      }
    ],
    questions: [
      {
        id: 'vision-build-1',
        type: 'ordering',
        question: 'Arrange the elements of Daniel\'s vision in chapter 7:',
        options: [
          'Four winds striving on the sea',
          'Four great beasts come up',
          'Ancient of Days sits in judgment',
          'Son of man receives kingdom'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the correct sequence of Daniel 7 vision elements.',
        scriptureRef: 'Daniel 7',
        points: 45
      }
    ]
  },
  {
    id: 'assemble-sanctuary',
    title: 'Assemble Sanctuary',
    description: 'Build the sanctuary structure and understand its symbolism',
    category: 'construction',
    difficulty: 'advanced',
    duration: '18-22 min',
    players: 'single',
    instructions: [
      'Arrange sanctuary elements',
      'Understand their positions',
      'Learn symbolic meanings',
      'Connect to heavenly sanctuary'
    ],
    scoring: {
      maxPoints: 1100,
      passingScore: 770,
      bonusMultiplier: 1.8,
      timeBonus: false
    },
    achievements: [
      {
        id: 'sanctuary-builder',
        name: 'Sanctuary Builder',
        description: 'Perfectly assemble sanctuary structure',
        icon: '⛪',
        requirement: 'sanctuary_assembly == perfect'
      }
    ],
    questions: [
      {
        id: 'sanctuary-build-1',
        type: 'ordering',
        question: 'Arrange sanctuary furniture from outer court to Most Holy Place:',
        options: [
          'Altar of burnt offering',
          'Laver',
          'Table of showbread',
          'Ark of covenant'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the correct order from outer court to Most Holy Place.',
        scriptureRef: 'Exodus 25-40',
        points: 40
      }
    ]
  },
  {
    id: 'construct-timeline',
    title: 'Construct Timeline',
    description: 'Build comprehensive prophetic timelines with dates',
    category: 'construction',
    difficulty: 'expert',
    duration: '25-30 min',
    players: 'single',
    instructions: [
      'Calculate prophetic dates',
      'Apply day-year principle',
      'Build complete timelines',
      'Verify historical fulfillment'
    ],
    scoring: {
      maxPoints: 1800,
      passingScore: 1260,
      bonusMultiplier: 3.0,
      timeBonus: true
    },
    achievements: [
      {
        id: 'timeline-master',
        name: 'Timeline Master',
        description: 'Build perfect prophetic timelines',
        icon: '📅',
        requirement: 'timelines_perfect >= 3'
      }
    ],
    questions: [
      {
        id: 'timeline-1',
        type: 'ordering',
        question: 'Build the 70 week prophecy timeline:',
        options: [
          'Decree to restore Jerusalem (457 BC)',
          'Messiah appears (27 AD)',
          'Messiah cut off (31 AD)',
          'Covenant confirmed ends (34 AD)'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the correct 70 week prophecy timeline.',
        scriptureRef: 'Daniel 9:24-27',
        points: 60
      }
    ]
  },
  {
    id: 'build-judgment-scene',
    title: 'Build Judgment Scene',
    description: 'Construct the heavenly judgment scene from Daniel 7',
    category: 'construction',
    difficulty: 'advanced',
    duration: '16-20 min',
    players: 'single',
    instructions: [
      'Arrange judgment elements',
      'Understand the sequence',
      'Learn about participants',
      'Connect to investigative judgment'
    ],
    scoring: {
      maxPoints: 1000,
      passingScore: 700,
      bonusMultiplier: 1.7,
      timeBonus: false
    },
    achievements: [
      {
        id: 'judgment-architect',
        name: 'Judgment Architect',
        description: 'Perfectly construct judgment scene',
        icon: '⚖️',
        requirement: 'judgment_scene_perfect == true'
      }
    ],
    questions: [
      {
        id: 'judgment-1',
        type: 'ordering',
        question: 'Arrange the judgment scene elements:',
        options: [
          'Thrones are cast down',
          'Ancient of Days sits',
          'Books are opened',
          'Son of man receives kingdom'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the sequence of the judgment scene in Daniel 7.',
        scriptureRef: 'Daniel 7:9-14',
        points: 42
      }
    ]
  },
  {
    id: 'assemble-new-jerusalem',
    title: 'Assemble New Jerusalem',
    description: 'Build the holy city with all its components',
    category: 'construction',
    difficulty: 'expert',
    duration: '22-28 min',
    players: 'single',
    instructions: [
      'Arrange city components',
      'Understand measurements',
      'Learn about materials',
      'Visualize the holy city'
    ],
    scoring: {
      maxPoints: 1600,
      passingScore: 1120,
      bonusMultiplier: 2.8,
      timeBonus: false
    },
    achievements: [
      {
        id: 'city-architect',
        name: 'City Architect',
        description: 'Perfectly design New Jerusalem',
        icon: '🏙️',
        requirement: 'new_jerusalem_perfect == true'
      }
    ],
    questions: [
      {
        id: 'city-build-1',
        type: 'ordering',
        question: 'Build New Jerusalem from foundation up:',
        options: [
          'Twelve foundations with precious stones',
          'High wall with twelve gates',
          'Streets of pure gold',
          'River of life and tree of life'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This represents the construction order of New Jerusalem.',
        scriptureRef: 'Revelation 21-22',
        points: 55
      }
    ]
  },
  {
    id: 'construct-message',
    title: 'Construct Message',
    description: 'Build the three angels\' messages in proper order',
    category: 'construction',
    difficulty: 'intermediate',
    duration: '12-15 min',
    players: 'single',
    instructions: [
      'Arrange message components',
      'Understand their sequence',
      'Learn their significance',
      'Apply to modern times'
    ],
    scoring: {
      maxPoints: 900,
      passingScore: 630,
      bonusMultiplier: 1.5,
      timeBonus: true
    },
    achievements: [
      {
        id: 'message-builder',
        name: 'Message Builder',
        description: 'Perfectly construct the three angels\' messages',
        icon: '👼',
        requirement: 'messages_constructed == perfect'
      }
    ],
    questions: [
      {
        id: 'message-1',
        type: 'ordering',
        question: 'Arrange the three angels\' messages:',
        options: [
          'Fear God and give glory - judgment hour',
          'Babylon is fallen',
          'Mark of beast warning',
          'Patience of saints'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the correct order of the three angels\' messages.',
        scriptureRef: 'Revelation 14:6-12',
        points: 35
      }
    ]
  },
  {
    id: 'build-seals-sequence',
    title: 'Build Seals Sequence',
    description: 'Construct the seven seals in their proper order',
    category: 'construction',
    difficulty: 'advanced',
    duration: '14-18 min',
    players: 'single',
    instructions: [
      'Arrange the seven seals',
      'Understand their symbolism',
      'Learn historical fulfillment',
      'Connect to church periods'
    ],
    scoring: {
      maxPoints: 1050,
      passingScore: 735,
      bonusMultiplier: 1.8,
      timeBonus: false
    },
    achievements: [
      {
        id: 'seals-master',
        name: 'Seals Master',
        description: 'Perfectly arrange all seven seals',
        icon: '🔒',
        requirement: 'seals_sequence_perfect == true'
      }
    ],
    questions: [
      {
        id: 'seals-1',
        type: 'ordering',
        question: 'Arrange the first four seals (horses):',
        options: [
          'White horse - conquest',
          'Red horse - war',
          'Black horse - famine',
          'Pale horse - death'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the correct order of the four horsemen.',
        scriptureRef: 'Revelation 6:1-8',
        points: 38
      }
    ]
  },
  {
    id: 'assemble-trumpets',
    title: 'Assemble Trumpets',
    description: 'Build the seven trumpets sequence with their judgments',
    category: 'construction',
    difficulty: 'expert',
    duration: '18-24 min',
    players: 'single',
    instructions: [
      'Arrange trumpet judgments',
      'Understand their timing',
      'Learn historical fulfillment',
      'Connect to Roman Empire'
    ],
    scoring: {
      maxPoints: 1400,
      passingScore: 980,
      bonusMultiplier: 2.2,
      timeBonus: true
    },
    achievements: [
      {
        id: 'trumpet-master',
        name: 'Trumpet Master',
        description: 'Master all seven trumpet judgments',
        icon: '🎺',
        requirement: 'trumpets_mastered == complete'
      }
    ],
    questions: [
      {
        id: 'trumpets-1',
        type: 'ordering',
        question: 'Arrange the first four trumpet judgments:',
        options: [
          'Hail and fire - trees burned',
          'Mountain cast into sea',
          'Star falls - waters bitter',
          'Sun, moon, stars darkened'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the correct order of the first four trumpets.',
        scriptureRef: 'Revelation 8:7-12',
        points: 48
      }
    ]
  },
  {
    id: 'construct-plagues',
    title: 'Construct Plagues',
    description: 'Build the seven last plagues in their sequence',
    category: 'construction',
    difficulty: 'advanced',
    duration: '16-20 min',
    players: 'single',
    instructions: [
      'Arrange the seven plagues',
      'Understand their purpose',
      'Learn about God\'s wrath',
      'Connect to end-time events'
    ],
    scoring: {
      maxPoints: 1150,
      passingScore: 805,
      bonusMultiplier: 1.9,
      timeBonus: false
    },
    achievements: [
      {
        id: 'plagues-architect',
        name: 'Plagues Architect',
        description: 'Perfectly construct the seven last plagues',
        icon: '⚡',
        requirement: 'plagues_sequence_perfect == true'
      }
    ],
    questions: [
      {
        id: 'plagues-1',
        type: 'ordering',
        question: 'Arrange the seven last plagues:',
        options: [
          'Sores on beast worshippers',
          'Sea becomes blood',
          'Rivers become blood',
          'Sun scorches with fire'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This is the beginning sequence of the seven last plagues.',
        scriptureRef: 'Revelation 16:2-8',
        points: 44
      }
    ]
  }
];

// ADDITIONAL MEMORY & MATCHING ACTIVITIES (10 MORE)
const additionalMemoryActivities: Activity[] = [
  {
    id: 'symbol-memory-master',
    title: 'Symbol Memory Master',
    description: 'Memorize and match complex biblical symbols with meanings',
    category: 'memory',
    difficulty: 'advanced',
    duration: '15-18 min',
    players: 'single',
    instructions: [
      'Study symbol meanings',
      'Memorize associations',
      'Match symbols quickly',
      'Build symbol vocabulary'
    ],
    scoring: {
      maxPoints: 1200,
      passingScore: 840,
      bonusMultiplier: 2.0,
      timeBonus: true
    },
    achievements: [
      {
        id: 'symbol-savant',
        name: 'Symbol Savant',
        description: 'Memorize 50+ biblical symbols perfectly',
        icon: '🧠',
        requirement: 'symbols_memorized >= 50'
      }
    ],
    questions: [
      {
        id: 'symbol-mem-1',
        type: 'matching',
        question: 'Match these advanced symbols with meanings:',
        options: [
          'Winds - Strife and war',
          'Stars - Angels or leaders',
          'Horns - Kings or powers',
          'Waters - Peoples and nations'
        ],
        correctAnswer: [
          'Winds - Strife and war',
          'Stars - Angels or leaders',
          'Horns - Kings or powers',
          'Waters - Peoples and nations'
        ],
        explanation: 'These are key prophetic symbols with their biblical meanings.',
        scriptureRef: 'Various',
        points: 35
      }
    ]
  },
  {
    id: 'verse-completion-expert',
    title: 'Verse Completion Expert',
    description: 'Complete famous verses from Daniel and Revelation',
    category: 'memory',
    difficulty: 'intermediate',
    duration: '10-14 min',
    players: 'single',
    instructions: [
      'Read partial verses',
      'Complete with exact KJV wording',
      'Focus on key prophetic verses',
      'Build scripture memory'
    ],
    scoring: {
      maxPoints: 800,
      passingScore: 560,
      bonusMultiplier: 1.4,
      timeBonus: false
    },
    achievements: [
      {
        id: 'verse-master',
        name: 'Verse Master',
        description: 'Complete 25 verses perfectly',
        icon: '📜',
        requirement: 'verses_completed >= 25'
      }
    ],
    questions: [
      {
        id: 'verse-comp-1',
        type: 'fill-blank',
        question: 'But Daniel purposed in his _____ that he would not _____ himself.',
        correctAnswer: 'heart, defile',
        explanation: 'Daniel 1:8 - Daniel made a heart decision to remain faithful.',
        scriptureRef: 'Daniel 1:8',
        points: 20
      }
    ]
  },
  {
    id: 'character-connections',
    title: 'Character Connections',
    description: 'Connect biblical characters with their relationships and roles',
    category: 'memory',
    difficulty: 'intermediate',
    duration: '12-15 min',
    players: 'single',
    instructions: [
      'Study character relationships',
      'Learn their connections',
      'Understand their roles',
      'Build character knowledge'
    ],
    scoring: {
      maxPoints: 900,
      passingScore: 630,
      bonusMultiplier: 1.5,
      timeBonus: true
    },
    achievements: [
      {
        id: 'character-expert',
        name: 'Character Expert',
        description: 'Master all character connections',
        icon: '👥',
        requirement: 'character_connections == complete'
      }
    ],
    questions: [
      {
        id: 'char-conn-1',
        type: 'matching',
        question: 'Match characters with their relationships:',
        options: [
          'Daniel - Interpreter of dreams',
          'Shadrach - Fiery furnace survivor',
          'Belshazzar - Saw handwriting',
          'Darius - Threw Daniel to lions'
        ],
        correctAnswer: [
          'Daniel - Interpreter of dreams',
          'Shadrach - Fiery furnace survivor',
          'Belshazzar - Saw handwriting',
          'Darius - Threw Daniel to lions'
        ],
        explanation: 'Each character is connected to their primary biblical role.',
        scriptureRef: 'Daniel 2, 3, 5, 6',
        points: 28
      }
    ]
  },
  {
    id: 'number-significance',
    title: 'Number Significance',
    description: 'Match prophetic numbers with their symbolic meanings',
    category: 'memory',
    difficulty: 'advanced',
    duration: '14-17 min',
    players: 'single',
    instructions: [
      'Study prophetic numbers',
      'Learn their meanings',
      'Understand time calculations',
      'Apply day-year principle'
    ],
    scoring: {
      maxPoints: 1000,
      passingScore: 700,
      bonusMultiplier: 1.7,
      timeBonus: false
    },
    achievements: [
      {
        id: 'number-sage',
        name: 'Number Sage',
        description: 'Master all prophetic number meanings',
        icon: '🔢',
        requirement: 'numbers_mastered == complete'
      }
    ],
    questions: [
      {
        id: 'number-1',
        type: 'matching',
        question: 'Match numbers with their prophetic significance:',
        options: [
          '7 - Divine completeness',
          '12 - Divine government',
          '1260 - Persecution period',
          '144,000 - Sealed saints'
        ],
        correctAnswer: [
          '7 - Divine completeness',
          '12 - Divine government',
          '1260 - Persecution period',
          '144,000 - Sealed saints'
        ],
        explanation: 'These numbers have specific prophetic meanings in Scripture.',
        scriptureRef: 'Various',
        points: 32
      }
    ]
  },
  {
    id: 'color-symbolism',
    title: 'Color Symbolism',
    description: 'Match colors with their biblical and prophetic meanings',
    category: 'memory',
    difficulty: 'beginner',
    duration: '8-11 min',
    players: 'single',
    instructions: [
      'Study color meanings',
      'Learn their symbolism',
      'Understand contexts',
      'Build color vocabulary'
    ],
    scoring: {
      maxPoints: 600,
      passingScore: 420,
      bonusMultiplier: 1.2,
      timeBonus: true
    },
    achievements: [
      {
        id: 'color-expert',
        name: 'Color Expert',
        description: 'Master all biblical color meanings',
        icon: '🎨',
        requirement: 'colors_mastered >= 10'
      }
    ],
    questions: [
      {
        id: 'color-1',
        type: 'matching',
        question: 'Match colors with their biblical meanings:',
        options: [
          'White - Purity and righteousness',
          'Red - Sin or persecution',
          'Purple - Royalty or wealth',
          'Gold - Divine glory'
        ],
        correctAnswer: [
          'White - Purity and righteousness',
          'Red - Sin or persecution',
          'Purple - Royalty or wealth',
          'Gold - Divine glory'
        ],
        explanation: 'Colors have consistent symbolic meanings throughout Scripture.',
        scriptureRef: 'Various',
        points: 18
      }
    ]
  },
  {
    id: 'object-symbolism',
    title: 'Object Symbolism',
    description: 'Connect objects with their prophetic and spiritual meanings',
    category: 'memory',
    difficulty: 'intermediate',
    duration: '11-14 min',
    players: 'single',
    instructions: [
      'Study object meanings',
      'Learn their symbolism',
      'Understand applications',
      'Build symbol knowledge'
    ],
    scoring: {
      maxPoints: 750,
      passingScore: 525,
      bonusMultiplier: 1.3,
      timeBonus: false
    },
    achievements: [
      {
        id: 'object-master',
        name: 'Object Master',
        description: 'Master all object symbolism',
        icon: '🏺',
        requirement: 'objects_mastered >= 20'
      }
    ],
    questions: [
      {
        id: 'object-1',
        type: 'matching',
        question: 'Match objects with their symbolic meanings:',
        options: [
          'Sword - Word of God',
          'Crown - Victory or authority',
          'Key - Authority to open/close',
          'Seal - Ownership or security'
        ],
        correctAnswer: [
          'Sword - Word of God',
          'Crown - Victory or authority',
          'Key - Authority to open/close',
          'Seal - Ownership or security'
        ],
        explanation: 'These objects have specific symbolic meanings in prophecy.',
        scriptureRef: 'Various',
        points: 25
      }
    ]
  },
  {
    id: 'place-significance',
    title: 'Place Significance',
    description: 'Match places with their prophetic and historical significance',
    category: 'memory',
    difficulty: 'intermediate',
    duration: '10-13 min',
    players: 'single',
    instructions: [
      'Study place meanings',
      'Learn their significance',
      'Understand contexts',
      'Build geographical knowledge'
    ],
    scoring: {
      maxPoints: 700,
      passingScore: 490,
      bonusMultiplier: 1.3,
      timeBonus: true
    },
    achievements: [
      {
        id: 'place-historian',
        name: 'Place Historian',
        description: 'Master all place significance',
        icon: '🗺️',
        requirement: 'places_mastered >= 15'
      }
    ],
    questions: [
      {
        id: 'place-1',
        type: 'matching',
        question: 'Match places with their significance:',
        options: [
          'Babylon - Captivity and confusion',
          'Jerusalem - Holy city',
          'Patmos - Revelation received',
          'Wilderness - Protection and testing'
        ],
        correctAnswer: [
          'Babylon - Captivity and confusion',
          'Jerusalem - Holy city',
          'Patmos - Revelation received',
          'Wilderness - Protection and testing'
        ],
        explanation: 'Each place has specific prophetic and historical significance.',
        scriptureRef: 'Various',
        points: 22
      }
    ]
  },
  {
    id: 'time-period-matching',
    title: 'Time Period Matching',
    description: 'Match prophetic time periods with their historical fulfillment',
    category: 'memory',
    difficulty: 'expert',
    duration: '16-20 min',
    players: 'single',
    instructions: [
      'Study time prophecies',
      'Learn their fulfillment',
      'Apply day-year principle',
      'Understand SDA chronology'
    ],
    scoring: {
      maxPoints: 1300,
      passingScore: 910,
      bonusMultiplier: 2.1,
      timeBonus: false
    },
    achievements: [
      {
        id: 'time-master',
        name: 'Time Master',
        description: 'Master all prophetic time periods',
        icon: '⏰',
        requirement: 'time_periods_mastered == complete'
      }
    ],
    questions: [
      {
        id: 'time-1',
        type: 'matching',
        question: 'Match time periods with their fulfillment:',
        options: [
          '70 weeks - 457 BC to 34 AD',
          '1260 days - 538 to 1798 AD',
          '2300 days - 457 BC to 1844 AD',
          '391 years 15 days - Ottoman period'
        ],
        correctAnswer: [
          '70 weeks - 457 BC to 34 AD',
          '1260 days - 538 to 1798 AD',
          '2300 days - 457 BC to 1844 AD',
          '391 years 15 days - Ottoman period'
        ],
        explanation: 'These are key prophetic time periods with their SDA interpretations.',
        scriptureRef: 'Daniel 9:24, 7:25, 8:14, Revelation 9:15',
        points: 45
      }
    ]
  },
  {
    id: 'feast-symbolism',
    title: 'Feast Symbolism',
    description: 'Connect biblical feasts with their prophetic fulfillment',
    category: 'memory',
    difficulty: 'advanced',
    duration: '13-16 min',
    players: 'single',
    instructions: [
      'Study feast meanings',
      'Learn their fulfillment',
      'Understand symbolism',
      'Connect to Christ\'s work'
    ],
    scoring: {
      maxPoints: 950,
      passingScore: 665,
      bonusMultiplier: 1.6,
      timeBonus: true
    },
    achievements: [
      {
        id: 'feast-scholar',
        name: 'Feast Scholar',
        description: 'Master all feast symbolism',
        icon: '🍞',
        requirement: 'feasts_mastered >= 7'
      }
    ],
    questions: [
      {
        id: 'feast-1',
        type: 'matching',
        question: 'Match feasts with their prophetic fulfillment:',
        options: [
          'Passover - Christ\'s crucifixion',
          'Pentecost - Holy Spirit outpouring',
          'Day of Atonement - Investigative judgment',
          'Feast of Tabernacles - Final gathering'
        ],
        correctAnswer: [
          'Passover - Christ\'s crucifixion',
          'Pentecost - Holy Spirit outpouring',
          'Day of Atonement - Investigative judgment',
          'Feast of Tabernacles - Final gathering'
        ],
        explanation: 'The feasts were shadows pointing to Christ\'s work.',
        scriptureRef: 'Colossians 2:17',
        points: 38
      }
    ]
  },
  {
    id: 'metal-kingdom-memory',
    title: 'Metal Kingdom Memory',
    description: 'Memorize and match metals with their corresponding kingdoms',
    category: 'memory',
    difficulty: 'beginner',
    duration: '6-9 min',
    players: 'single',
    instructions: [
      'Study the great image',
      'Memorize metal-kingdom pairs',
      'Learn their characteristics',
      'Understand the progression'
    ],
    scoring: {
      maxPoints: 500,
      passingScore: 350,
      bonusMultiplier: 1.1,
      timeBonus: true
    },
    achievements: [
      {
        id: 'metal-master',
        name: 'Metal Master',
        description: 'Perfect metal-kingdom matching',
        icon: '🏆',
        requirement: 'metal_matching == perfect'
      }
    ],
    questions: [
      {
        id: 'metal-1',
        type: 'matching',
        question: 'Match metals with their kingdoms:',
        options: [
          'Gold - Babylon',
          'Silver - Medo-Persia',
          'Bronze - Greece',
          'Iron - Rome'
        ],
        correctAnswer: [
          'Gold - Babylon',
          'Silver - Medo-Persia',
          'Bronze - Greece',
          'Iron - Rome'
        ],
        explanation: 'Each metal represents a successive world empire.',
        scriptureRef: 'Daniel 2:32-33',
        points: 15
      }
    ]
  }
];

export const activitiesDatabase: Activity[] = [
  // Bible Bees - Quiz Games
  {
    id: 'bible-bees-daniel',
    title: 'Bible Bees: Daniel Edition',
    description: 'Fast-paced quiz testing your knowledge of the book of Daniel',
    category: 'quiz',
    difficulty: 'intermediate',
    duration: '10-15 min',
    players: 'both',
    instructions: [
      'Answer questions as quickly and accurately as possible',
      'Each correct answer earns points based on difficulty',
      'Time bonuses awarded for quick responses',
      'Three strikes and you\'re out!'
    ],
    scoring: {
      maxPoints: 1000,
      passingScore: 700,
      bonusMultiplier: 1.5,
      timeBonus: true
    },
    achievements: [
      {
        id: 'daniel-scholar',
        name: 'Daniel Scholar',
        description: 'Score 900+ points in Daniel Bible Bees',
        icon: '🏆',
        requirement: 'score >= 900'
      },
      {
        id: 'speed-reader',
        name: 'Speed Reader',
        description: 'Answer 10 questions in under 30 seconds',
        icon: '⚡',
        requirement: 'time < 30 && correct >= 10'
      }
    ],
    questions: [
      {
        id: 'daniel-1',
        type: 'multiple-choice',
        question: 'In what year did Nebuchadnezzar first come to Jerusalem?',
        options: ['605 BC', '586 BC', '597 BC', '562 BC'],
        correctAnswer: '605 BC',
        explanation: 'This was the third year of Jehoiakim\'s reign, marking the beginning of the 70-year captivity.',
        scriptureRef: 'Daniel 1:1',
        points: 10,
        timeLimit: 15
      },
      {
        id: 'daniel-2',
        type: 'true-false',
        question: 'Daniel requested vegetables and water instead of the king\'s food.',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Daniel asked for pulse (vegetables) and water to avoid defiling himself with the king\'s meat and wine.',
        scriptureRef: 'Daniel 1:12',
        points: 5,
        timeLimit: 10
      },
      {
        id: 'daniel-3',
        type: 'fill-blank',
        question: 'The head of the great image was made of ____.',
        correctAnswer: 'gold',
        explanation: 'The head of fine gold represented the Babylonian kingdom.',
        scriptureRef: 'Daniel 2:32',
        points: 15,
        timeLimit: 12
      },
      {
        id: 'daniel-4',
        type: 'multiple-choice',
        question: 'What did the stone that struck the image represent?',
        options: ['The Roman Empire', 'The Church', 'Christ\'s Kingdom', 'The Reformation'],
        correctAnswer: 'Christ\'s Kingdom',
        explanation: 'The stone cut without hands represents God\'s eternal kingdom established at Christ\'s second coming.',
        scriptureRef: 'Daniel 2:44',
        points: 20,
        timeLimit: 20
      },
      {
        id: 'daniel-5',
        type: 'matching',
        question: 'Match the metals with their kingdoms:',
        options: ['Gold - Babylon', 'Silver - Medo-Persia', 'Bronze - Greece', 'Iron - Rome'],
        correctAnswer: ['Gold - Babylon', 'Silver - Medo-Persia', 'Bronze - Greece', 'Iron - Rome'],
        explanation: 'Each metal represents a successive world empire in declining value but increasing strength.',
        scriptureRef: 'Daniel 2:32-33',
        points: 25,
        timeLimit: 30
      }
    ]
  },

  // Multiple Choice Masters - Quiz Games
  {
    id: 'multiple-choice-masters',
    title: 'Multiple Choice Masters',
    description: 'Test knowledge of prophecies, symbols, characters, and places',
    category: 'quiz',
    difficulty: 'beginner',
    duration: '5-10 min',
    players: 'single',
    instructions: [
      'Answer multiple choice questions about Daniel and Revelation',
      'Focus on prophecies, symbols, characters, and places',
      'Each question has one correct answer',
      'Build your knowledge systematically'
    ],
    scoring: {
      maxPoints: 500,
      passingScore: 350,
      bonusMultiplier: 1.2,
      timeBonus: false
    },
    achievements: [
      {
        id: 'prophecy-master',
        name: 'Prophecy Master',
        description: 'Score 450+ points in Multiple Choice Masters',
        icon: '🎯',
        requirement: 'score >= 450'
      }
    ],
    questions: [
      {
        id: 'mc-1',
        type: 'multiple-choice',
        question: 'Which kingdom does the head of gold represent in Daniel 2?',
        options: ['Babylon', 'Medo-Persia', 'Greece', 'Rome'],
        correctAnswer: 'Babylon',
        explanation: 'The head of fine gold represents the Babylonian kingdom under Nebuchadnezzar.',
        scriptureRef: 'Daniel 2:38',
        points: 10
      },
      {
        id: 'mc-2',
        type: 'multiple-choice',
        question: 'What does the woman in Revelation 12 represent?',
        options: ['The Catholic Church', 'Israel', 'The true church', 'Mary'],
        correctAnswer: 'The true church',
        explanation: 'The pure woman represents God\'s faithful church throughout history.',
        scriptureRef: 'Revelation 12:1',
        points: 15
      },
      {
        id: 'mc-3',
        type: 'multiple-choice',
        question: 'How many heads does the leopard beast have in Daniel 7?',
        options: ['Two', 'Four', 'Seven', 'Ten'],
        correctAnswer: 'Four',
        explanation: 'The leopard has four heads representing the four divisions of Alexander\'s empire.',
        scriptureRef: 'Daniel 7:6',
        points: 10
      }
    ]
  },

  // True or False Challenge - Quiz Games
  {
    id: 'true-false-challenge',
    title: 'True or False Challenge',
    description: 'Quick-fire true/false questions about biblical facts',
    category: 'quiz',
    difficulty: 'beginner',
    duration: '5 min',
    players: 'both',
    instructions: [
      'Answer true or false to biblical statements',
      'Think carefully about each statement',
      'Quick responses earn bonus points',
      'Learn from explanations after each answer'
    ],
    scoring: {
      maxPoints: 300,
      passingScore: 210,
      bonusMultiplier: 1.1,
      timeBonus: true
    },
    achievements: [
      {
        id: 'truth-seeker',
        name: 'Truth Seeker',
        description: 'Answer 20 true/false questions correctly in a row',
        icon: '✅',
        requirement: 'consecutive_correct >= 20'
      }
    ],
    questions: [
      {
        id: 'tf-1',
        type: 'true-false',
        question: 'Daniel was taken captive to Babylon in 605 BC.',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Daniel was indeed taken captive in the third year of Jehoiakim, which was 605 BC.',
        scriptureRef: 'Daniel 1:1',
        points: 5
      },
      {
        id: 'tf-2',
        type: 'true-false',
        question: 'The little horn in Daniel 7 represents Greece.',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'The little horn represents the papal power, not Greece.',
        scriptureRef: 'Daniel 7:8',
        points: 10
      }
    ]
  },

  // Where's That Found
  {
    id: 'wheres-that-found',
    title: "Where's That Found?",
    description: 'Identify which chapter contains specific events or prophecies',
    category: 'location',
    difficulty: 'intermediate',
    duration: '8-12 min',
    players: 'single',
    instructions: [
      'Read the event description carefully',
      'Select the correct chapter where it\'s found',
      'Some events span multiple chapters',
      'Pay attention to book references (Daniel vs Revelation)'
    ],
    scoring: {
      maxPoints: 800,
      passingScore: 560,
      bonusMultiplier: 1.2,
      timeBonus: false
    },
    achievements: [
      {
        id: 'chapter-master',
        name: 'Chapter Master',
        description: 'Correctly identify 15 chapters in a row',
        icon: '📖',
        requirement: 'consecutive_correct >= 15'
      }
    ],
    questions: [
      {
        id: 'location-1',
        type: 'multiple-choice',
        question: 'Where is the fiery furnace test found?',
        options: ['Daniel 2', 'Daniel 3', 'Daniel 6', 'Daniel 7'],
        correctAnswer: 'Daniel 3',
        explanation: 'Shadrach, Meshach, and Abed-nego were thrown into the fiery furnace in Daniel 3.',
        scriptureRef: 'Daniel 3',
        points: 15
      },
      {
        id: 'location-2',
        type: 'multiple-choice',
        question: 'In which chapter do we find the 70 week prophecy?',
        options: ['Daniel 8', 'Daniel 9', 'Daniel 10', 'Daniel 11'],
        correctAnswer: 'Daniel 9',
        explanation: 'The 70 week prophecy is found in Daniel 9:24-27.',
        scriptureRef: 'Daniel 9:24-27',
        points: 20
      },
      {
        id: 'location-3',
        type: 'multiple-choice',
        question: 'Where are the seven golden candlesticks described?',
        options: ['Revelation 1', 'Revelation 2', 'Revelation 4', 'Revelation 5'],
        correctAnswer: 'Revelation 1',
        explanation: 'The seven golden candlesticks are first described in Revelation 1:12-13.',
        scriptureRef: 'Revelation 1:12-13',
        points: 15
      }
    ]
  },

  // Where Did It Happen - Location & Discovery
  {
    id: 'where-did-it-happen',
    title: 'Where Did It Happen',
    description: 'Match events with their specific locations in Daniel and Revelation',
    category: 'location',
    difficulty: 'advanced',
    duration: '10-15 min',
    players: 'single',
    instructions: [
      'Match biblical events with their locations',
      'Consider both earthly and heavenly locations',
      'Think about geographical and symbolic places',
      'Use context clues from the passages'
    ],
    scoring: {
      maxPoints: 1000,
      passingScore: 700,
      bonusMultiplier: 1.5,
      timeBonus: false
    },
    achievements: [
      {
        id: 'geography-expert',
        name: 'Geography Expert',
        description: 'Correctly identify 15 locations without error',
        icon: '🗺️',
        requirement: 'correct_locations >= 15 && errors == 0'
      }
    ],
    questions: [
      {
        id: 'location-3',
        type: 'multiple-choice',
        question: 'Where did Daniel interpret Nebuchadnezzar\'s dream?',
        options: ['Jerusalem', 'Babylon', 'Shushan', 'Damascus'],
        correctAnswer: 'Babylon',
        explanation: 'Daniel was in Babylon when he interpreted the king\'s dream about the great image.',
        scriptureRef: 'Daniel 2',
        points: 15
      },
      {
        id: 'location-4',
        type: 'multiple-choice',
        question: 'Where does John receive the Revelation?',
        options: ['Jerusalem', 'Ephesus', 'Patmos', 'Rome'],
        correctAnswer: 'Patmos',
        explanation: 'John was on the isle of Patmos when he received the Revelation.',
        scriptureRef: 'Revelation 1:9',
        points: 10
      }
    ]
  },

  // Who Did What - Location & Discovery
  {
    id: 'who-did-what',
    title: 'Who Did What',
    description: 'Match characters with their actions and roles in prophecy',
    category: 'location',
    difficulty: 'intermediate',
    duration: '8-10 min',
    players: 'single',
    instructions: [
      'Match biblical characters with their actions',
      'Consider both historical and prophetic roles',
      'Think about cause and effect relationships',
      'Remember both positive and negative characters'
    ],
    scoring: {
      maxPoints: 700,
      passingScore: 490,
      bonusMultiplier: 1.3,
      timeBonus: false
    },
    achievements: [
      {
        id: 'character-analyst',
        name: 'Character Analyst',
        description: 'Match 20 characters with their actions perfectly',
        icon: '👥',
        requirement: 'character_matches >= 20 && accuracy == 1.0'
      }
    ],
    questions: [
      {
        id: 'character-1',
        type: 'matching',
        question: 'Match the characters with their actions:',
        options: [
          'Daniel - Interpreted dreams',
          'Nebuchadnezzar - Built golden image',
          'Belshazzar - Saw handwriting on wall',
          'Darius - Threw Daniel in lions\' den'
        ],
        correctAnswer: [
          'Daniel - Interpreted dreams',
          'Nebuchadnezzar - Built golden image',
          'Belshazzar - Saw handwriting on wall',
          'Darius - Threw Daniel in lions\' den'
        ],
        explanation: 'Each character is correctly matched with their primary action in Daniel.',
        scriptureRef: 'Daniel 2, 3, 5, 6',
        points: 25
      }
    ]
  },

  // Build the Chapter
  {
    id: 'build-chapter-daniel2',
    title: 'Build the Chapter: Daniel 2',
    description: 'Arrange verses from Daniel 2 in correct biblical order',
    category: 'construction',
    difficulty: 'advanced',
    duration: '15-20 min',
    players: 'single',
    instructions: [
      'Drag and drop verses into correct order',
      'Pay attention to the narrative flow',
      'Consider cause and effect relationships',
      'Use context clues to determine sequence'
    ],
    scoring: {
      maxPoints: 1200,
      passingScore: 840,
      bonusMultiplier: 2.0,
      timeBonus: true
    },
    achievements: [
      {
        id: 'verse-architect',
        name: 'Verse Architect',
        description: 'Perfectly arrange a chapter on first try',
        icon: '🏗️',
        requirement: 'perfect_order && attempts == 1'
      }
    ],
    questions: [
      {
        id: 'build-1',
        type: 'ordering',
        question: 'Arrange these events from Daniel 2 in chronological order:',
        options: [
          'Nebuchadnezzar has a troubling dream',
          'The wise men cannot interpret the dream',
          'Daniel asks for time to interpret',
          'God reveals the dream to Daniel',
          'Daniel interprets the dream for the king'
        ],
        correctAnswer: [0, 1, 2, 3, 4],
        explanation: 'This is the correct sequence of events in Daniel 2.',
        scriptureRef: 'Daniel 2',
        points: 50
      }
    ]
  },

  // Build the Book - Text Construction
  {
    id: 'build-book',
    title: 'Build the Book',
    description: 'Arrange chapters in correct order with explanations',
    category: 'construction',
    difficulty: 'expert',
    duration: '20-30 min',
    players: 'single',
    instructions: [
      'Arrange chapters in their correct biblical order',
      'Consider both chronological and thematic organization',
      'Provide explanations for your ordering choices',
      'Think about the overall narrative flow'
    ],
    scoring: {
      maxPoints: 2000,
      passingScore: 1400,
      bonusMultiplier: 3.0,
      timeBonus: true
    },
    achievements: [
      {
        id: 'book-architect',
        name: 'Book Architect',
        description: 'Perfectly arrange an entire book on first try',
        icon: '📚',
        requirement: 'perfect_book_order && attempts == 1'
      }
    ],
    questions: [
      {
        id: 'book-1',
        type: 'ordering',
        question: 'Arrange these Daniel chapters in correct order:',
        options: [
          'Daniel\'s diet test',
          'Nebuchadnezzar\'s dream of image',
          'Fiery furnace test',
          'Nebuchadnezzar\'s madness'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This follows the chronological order of events in Daniel 1-4.',
        scriptureRef: 'Daniel 1-4',
        points: 100
      }
    ]
  },

  // Build the Verse - Text Construction
  {
    id: 'build-verse',
    title: 'Build the Verse',
    description: 'Reconstruct individual verses in proper KJV order',
    category: 'construction',
    difficulty: 'intermediate',
    duration: '5-8 min',
    players: 'single',
    instructions: [
      'Arrange words to form complete KJV verses',
      'Pay attention to proper grammar and flow',
      'Consider the meaning and context',
      'Remember KJV language patterns'
    ],
    scoring: {
      maxPoints: 600,
      passingScore: 420,
      bonusMultiplier: 1.4,
      timeBonus: true
    },
    achievements: [
      {
        id: 'verse-builder',
        name: 'Verse Builder',
        description: 'Reconstruct 10 verses perfectly',
        icon: '📝',
        requirement: 'perfect_verses >= 10'
      }
    ],
    questions: [
      {
        id: 'verse-1',
        type: 'ordering',
        question: 'Arrange these words to form Daniel 2:44:',
        options: [
          'And in the days',
          'of these kings',
          'shall the God of heaven',
          'set up a kingdom'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'This forms the beginning of Daniel 2:44 about God\'s eternal kingdom.',
        scriptureRef: 'Daniel 2:44',
        points: 30
      }
    ]
  },

  // Mix and Match
  {
    id: 'mix-match-symbols',
    title: 'Mix and Match: Prophetic Symbols',
    description: 'Connect related items: people, places, things, and times',
    category: 'memory',
    difficulty: 'intermediate',
    duration: '10-12 min',
    players: 'single',
    instructions: [
      'Match symbols with their biblical meanings',
      'Consider SDA interpretations',
      'Some symbols may have multiple meanings',
      'Context determines specific application'
    ],
    scoring: {
      maxPoints: 600,
      passingScore: 420,
      bonusMultiplier: 1.3,
      timeBonus: false
    },
    achievements: [
      {
        id: 'symbol-sage',
        name: 'Symbol Sage',
        description: 'Match 20 symbols correctly without error',
        icon: '🔮',
        requirement: 'correct_matches >= 20 && errors == 0'
      }
    ],
    questions: [
      {
        id: 'match-1',
        type: 'matching',
        question: 'Match the beasts with their kingdoms:',
        options: [
          'Lion with Eagle Wings',
          'Bear with Three Ribs', 
          'Leopard with Four Heads',
          'Dreadful Beast with Ten Horns'
        ],
        correctAnswer: [
          'Lion with Eagle Wings - Babylon',
          'Bear with Three Ribs - Medo-Persia',
          'Leopard with Four Heads - Greece', 
          'Dreadful Beast with Ten Horns - Rome'
        ],
        explanation: 'These four beasts represent the same kingdoms as the metals in Daniel 2.',
        scriptureRef: 'Daniel 7:3-7',
        points: 30
      }
    ]
  },

  // Missing Words - Memory & Matching
  {
    id: 'missing-words',
    title: 'Missing Words',
    description: 'Find missing words or phrases in scripture passages',
    category: 'memory',
    difficulty: 'intermediate',
    duration: '8-10 min',
    players: 'single',
    instructions: [
      'Fill in the missing words from scripture passages',
      'Use context clues to determine the correct words',
      'Remember exact KJV wording',
      'Consider the theological meaning'
    ],
    scoring: {
      maxPoints: 800,
      passingScore: 560,
      bonusMultiplier: 1.6,
      timeBonus: false
    },
    achievements: [
      {
        id: 'word-master',
        name: 'Word Master',
        description: 'Complete 15 missing word challenges perfectly',
        icon: '📖',
        requirement: 'missing_words_perfect >= 15'
      }
    ],
    questions: [
      {
        id: 'missing-1',
        type: 'fill-blank',
        question: 'And in the days of these kings shall the God of heaven set up a _____ which shall never be destroyed.',
        correctAnswer: 'kingdom',
        explanation: 'God will establish His eternal kingdom that will never be destroyed.',
        scriptureRef: 'Daniel 2:44',
        points: 20
      },
      {
        id: 'missing-2',
        type: 'fill-blank',
        question: 'But Daniel purposed in his _____ that he would not defile himself.',
        correctAnswer: 'heart',
        explanation: 'Daniel made a heart decision to remain faithful to God\'s laws.',
        scriptureRef: 'Daniel 1:8',
        points: 15
      }
    ]
  },

  // When Did That Happen - Memory & Matching
  {
    id: 'when-did-happen',
    title: 'When Did That Happen',
    description: 'Match events with their chronological timing',
    category: 'memory',
    difficulty: 'advanced',
    duration: '12-15 min',
    players: 'single',
    instructions: [
      'Match events with their correct dates or time periods',
      'Consider both biblical and historical chronology',
      'Use prophetic time calculations where applicable',
      'Remember key dates in prophetic history'
    ],
    scoring: {
      maxPoints: 1200,
      passingScore: 840,
      bonusMultiplier: 2.0,
      timeBonus: true
    },
    achievements: [
      {
        id: 'chronology-master',
        name: 'Chronology Master',
        description: 'Match 25 events with perfect timing',
        icon: '⏰',
        requirement: 'chronology_perfect >= 25'
      }
    ],
    questions: [
      {
        id: 'timing-1',
        type: 'multiple-choice',
        question: 'When did Babylon fall to Medo-Persia?',
        options: ['605 BC', '586 BC', '539 BC', '331 BC'],
        correctAnswer: '539 BC',
        explanation: 'Babylon fell to Cyrus and the Medo-Persian empire in 539 BC.',
        scriptureRef: 'Daniel 5',
        points: 25
      },
      {
        id: 'timing-2',
        type: 'multiple-choice',
        question: 'When does the investigative judgment begin according to SDA understanding?',
        options: ['1798 AD', '1844 AD', '1863 AD', '1888 AD'],
        correctAnswer: '1844 AD',
        explanation: 'The 2300-day prophecy ended in 1844, beginning the investigative judgment.',
        scriptureRef: 'Daniel 8:14',
        points: 30
      }
    ]
  },

  // Timeline Challenge
  {
    id: 'timeline-challenge',
    title: 'Prophetic Timeline Challenge',
    description: 'Place historical events in correct chronological order',
    category: 'timeline',
    difficulty: 'expert',
    duration: '20-25 min',
    players: 'single',
    instructions: [
      'Study the historical events carefully',
      'Consider both biblical and secular history',
      'Use SDA prophetic interpretations',
      'Pay attention to date ranges and overlaps'
    ],
    scoring: {
      maxPoints: 1500,
      passingScore: 1050,
      bonusMultiplier: 2.5,
      timeBonus: true
    },
    achievements: [
      {
        id: 'time-master',
        name: 'Time Master',
        description: 'Complete expert timeline with 95% accuracy',
        icon: '⏰',
        requirement: 'accuracy >= 0.95 && difficulty == expert'
      }
    ],
    questions: [
      {
        id: 'timeline-1',
        type: 'ordering',
        question: 'Arrange these prophetic periods in chronological order:',
        options: [
          '70 Week Prophecy begins (457 BC)',
          'Babylon falls to Medo-Persia (539 BC)',
          'Papal supremacy begins (538 AD)',
          'Investigative Judgment begins (1844 AD)'
        ],
        correctAnswer: [1, 0, 2, 3],
        explanation: 'This represents the correct chronological sequence of major prophetic events.',
        scriptureRef: 'Daniel 9:25, Daniel 7:25, Daniel 8:14',
        points: 75
      }
    ]
  },

  // Symbol Recognition
  {
    id: 'symbol-recognition',
    title: 'Symbol Recognition Master',
    description: 'Identify biblical symbols and their SDA interpretations',
    category: 'symbol',
    difficulty: 'advanced',
    duration: '12-18 min',
    players: 'single',
    instructions: [
      'Look at the symbol description or image',
      'Choose the correct SDA interpretation',
      'Consider context from Daniel and Revelation',
      'Remember that symbols can have multiple applications'
    ],
    scoring: {
      maxPoints: 900,
      passingScore: 630,
      bonusMultiplier: 1.8,
      timeBonus: false
    },
    achievements: [
      {
        id: 'symbol-expert',
        name: 'Symbol Expert',
        description: 'Identify 25 symbols with 100% accuracy',
        icon: '🎯',
        requirement: 'symbols_correct >= 25 && accuracy == 1.0'
      }
    ],
    questions: [
      {
        id: 'symbol-1',
        type: 'multiple-choice',
        question: 'What does a "beast" represent in Bible prophecy?',
        options: ['A literal animal', 'A kingdom or political power', 'A false prophet', 'A natural disaster'],
        correctAnswer: 'A kingdom or political power',
        explanation: 'According to Daniel 7:17 and 23, beasts represent kingdoms.',
        scriptureRef: 'Daniel 7:17, 23',
        points: 20
      },
      {
        id: 'symbol-2',
        type: 'multiple-choice',
        question: 'In SDA interpretation, what does the "little horn" of Daniel 7 represent?',
        options: ['Antiochus Epiphanes', 'The Papal system', 'The Ottoman Empire', 'Modern atheism'],
        correctAnswer: 'The Papal system',
        explanation: 'SDA theology identifies the little horn as the papal power that arose from Rome.',
        scriptureRef: 'Daniel 7:8, 24-25',
        points: 25
      }
    ]
  },
  // ADD ALL NEW ACTIVITIES
  ...additionalQuizActivities,
  ...additionalLocationActivities,
  ...additionalConstructionActivities,
  ...additionalMemoryActivities
];

export const getActivitiesByCategory = (category: Activity['category']): Activity[] => {
  return activitiesDatabase.filter(activity => activity.category === category);
};

export const getActivitiesByDifficulty = (difficulty: Activity['difficulty']): Activity[] => {
  return activitiesDatabase.filter(activity => activity.difficulty === difficulty);
};

export const getActivityById = (id: string): Activity | undefined => {
  return activitiesDatabase.find(activity => activity.id === id);
};

export const searchActivities = (query: string): Activity[] => {
  const lowercaseQuery = query.toLowerCase();
  return activitiesDatabase.filter(activity =>
    activity.title.toLowerCase().includes(lowercaseQuery) ||
    activity.description.toLowerCase().includes(lowercaseQuery) ||
    activity.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Activity execution and scoring functions
export const calculateScore = (
  activity: Activity,
  correctAnswers: number,
  totalQuestions: number,
  timeSpent: number
): number => {
  const baseScore = (correctAnswers / totalQuestions) * activity.scoring.maxPoints;
  let finalScore = baseScore;

  // Apply time bonus if enabled
  if (activity.scoring.timeBonus) {
    const averageTimePerQuestion = timeSpent / totalQuestions;
    if (averageTimePerQuestion < 10) { // Under 10 seconds per question
      finalScore *= activity.scoring.bonusMultiplier;
    }
  }

  return Math.round(finalScore);
};

export const checkAchievements = (
  activity: Activity,
  score: number,
  timeSpent: number,
  correctAnswers: number,
  consecutiveCorrect: number
): Achievement[] => {
  const earnedAchievements: Achievement[] = [];

  activity.achievements.forEach(achievement => {
    let earned = false;

    // Parse achievement requirements (simplified)
    if (achievement.requirement.includes('score >=')) {
      const requiredScore = parseInt(achievement.requirement.match(/\d+/)?.[0] || '0');
      earned = score >= requiredScore;
    } else if (achievement.requirement.includes('consecutive_correct >=')) {
      const required = parseInt(achievement.requirement.match(/\d+/)?.[0] || '0');
      earned = consecutiveCorrect >= required;
    } else if (achievement.requirement.includes('accuracy >=')) {
      const requiredAccuracy = parseFloat(achievement.requirement.match(/[\d.]+/)?.[0] || '0');
      const accuracy = correctAnswers / activity.questions.length;
      earned = accuracy >= requiredAccuracy;
    }

    if (earned) {
      earnedAchievements.push(achievement);
    }
  });

  return earnedAchievements;
};