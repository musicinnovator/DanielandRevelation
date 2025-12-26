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