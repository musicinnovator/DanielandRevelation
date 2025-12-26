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
  }
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