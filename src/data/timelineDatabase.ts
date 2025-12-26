// Enhanced SDA Prophetic Timeline Database
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  book: string;
  chapter?: number;
  category: 'ancient' | 'medieval' | 'modern' | 'future';
  prophecy: string;
  significance: string;
  sdaInterpretation: string;
  historicalEvidence: string[];
  relatedEvents: string[];
  color: string;
  imageUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
    location: string;
  };
}

export const timelineDatabase: TimelineEvent[] = [
  // Ancient Period (605 BC - 476 AD)
  {
    id: 'babylon-conquers-judah',
    date: '605 BC',
    title: 'Babylon Conquers Judah',
    description: 'Beginning of the "Times of the Gentiles" - Daniel taken captive to Babylon',
    book: 'Daniel',
    chapter: 1,
    category: 'ancient',
    prophecy: 'Head of Gold begins - Babylonian supremacy',
    significance: 'Start of prophetic timeline and 70-year captivity',
    sdaInterpretation: 'Marks the beginning of Gentile dominion over God\'s people, fulfilling Jeremiah\'s prophecy of 70 years captivity. This event initiated the prophetic timeline that extends to Christ\'s second coming.',
    historicalEvidence: [
      'Babylonian Chronicle records Nebuchadnezzar\'s campaigns',
      'Archaeological evidence from Tel Dan and Lachish',
      'Cuneiform tablets documenting deportations'
    ],
    relatedEvents: ['nebuchadnezzar-dream', 'fiery-furnace'],
    color: 'bg-yellow-500',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 31.7683,
      lng: 35.2137,
      location: 'Jerusalem'
    }
  },
  {
    id: 'babylon-falls',
    date: '539 BC',
    title: 'Babylon Falls to Medo-Persia',
    description: 'The breast and arms of silver take power - Cyrus conquers Babylon',
    book: 'Daniel',
    chapter: 5,
    category: 'ancient',
    prophecy: 'Daniel 2 Image progression - Silver kingdom rises',
    significance: 'Second kingdom in prophetic succession',
    sdaInterpretation: 'Fulfills Daniel\'s interpretation of Nebuchadnezzar\'s dream. The Medo-Persian empire, represented by silver, was inferior to Babylon in magnificence but superior in extent. Cyrus\'s decree allowed Jews to return and rebuild.',
    historicalEvidence: [
      'Cyrus Cylinder documents Babylon\'s fall',
      'Nabonidus Chronicle records the peaceful conquest',
      'Archaeological evidence from Babylon'
    ],
    relatedEvents: ['cyrus-decree', 'temple-rebuilt'],
    color: 'bg-gray-400',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 32.5355,
      lng: 44.4275,
      location: 'Babylon'
    }
  },
  {
    id: 'greece-conquers-persia',
    date: '331 BC',
    title: 'Greece Conquers Persia',
    description: 'Alexander the Great fulfills the belly of bronze and the notable horn',
    book: 'Daniel',
    chapter: 8,
    category: 'ancient',
    prophecy: 'Ram and Goat vision - Goat with notable horn',
    significance: 'Third kingdom established with unprecedented speed',
    sdaInterpretation: 'Alexander\'s conquests fulfilled Daniel 8 with remarkable precision. The "notable horn" represents Alexander, and his empire\'s division among four generals after his death fulfills the prophecy of four horns replacing the notable horn.',
    historicalEvidence: [
      'Historical records of Alexander\'s campaigns',
      'Archaeological evidence from conquered territories',
      'Hellenistic cultural remains across the empire'
    ],
    relatedEvents: ['alexander-death', 'empire-divided'],
    color: 'bg-amber-600',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 30.0444,
      lng: 31.2357,
      location: 'Alexandria'
    }
  },
  {
    id: 'rome-dominance',
    date: '168 BC',
    title: 'Rome Becomes Dominant',
    description: 'The iron legs begin their rule - Battle of Pydna establishes Roman supremacy',
    book: 'Daniel',
    chapter: 2,
    category: 'ancient',
    prophecy: 'Fourth kingdom of iron - strong and crushing',
    significance: 'Dreadful beast power emerges',
    sdaInterpretation: 'Rome\'s iron strength crushed all opposition, fulfilling Daniel\'s prophecy perfectly. Unlike previous empires that absorbed conquered cultures, Rome imposed its will with iron discipline, breaking in pieces all before it.',
    historicalEvidence: [
      'Roman historical records of Mediterranean conquests',
      'Archaeological evidence of Roman infrastructure',
      'Inscriptions documenting Roman administrative system'
    ],
    relatedEvents: ['christ-birth', 'temple-destroyed'],
    color: 'bg-gray-700',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 41.9028,
      lng: 12.4964,
      location: 'Rome'
    }
  },
  {
    id: 'christ-crucifixion',
    date: '31 AD',
    title: 'Christ\'s Crucifixion',
    description: 'Messiah cut off in the midst of the 70th week',
    book: 'Daniel',
    chapter: 9,
    category: 'ancient',
    prophecy: '70 Week Prophecy fulfilled - Messiah cut off',
    significance: 'Covenant confirmed with many',
    sdaInterpretation: 'The most precise messianic prophecy in Scripture was fulfilled exactly. Christ was crucified in 31 AD, in the midst of the 70th week (27-34 AD), confirming the covenant with many through His sacrifice.',
    historicalEvidence: [
      'Gospel accounts of crucifixion',
      'Roman records of Pontius Pilate',
      'Early Christian historical documents'
    ],
    relatedEvents: ['ministry-begins', 'stephen-stoned'],
    color: 'bg-red-600',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 31.7683,
      lng: 35.2137,
      location: 'Jerusalem'
    }
  },

  // Medieval Period (476 AD - 1798 AD)
  {
    id: 'rome-divides',
    date: '476 AD',
    title: 'Roman Empire Divides',
    description: 'Feet of iron and clay - divided kingdoms of Europe emerge',
    book: 'Daniel',
    chapter: 2,
    category: 'medieval',
    prophecy: 'Feet and toes period begins',
    significance: 'Never to unite again',
    sdaInterpretation: 'The fall of Western Rome marked the beginning of the feet and toes period. Despite numerous attempts (Charlemagne, Napoleon, Hitler), Europe has never been united again, fulfilling "they shall not cleave one to another."',
    historicalEvidence: [
      'Historical records of Odoacer\'s conquest',
      'Archaeological evidence of barbarian settlements',
      'Documentation of tribal kingdoms'
    ],
    relatedEvents: ['papal-supremacy-begins', 'barbarian-invasions'],
    color: 'bg-orange-500',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 41.9028,
      lng: 12.4964,
      location: 'Rome'
    }
  },
  {
    id: 'papal-supremacy-begins',
    date: '538 AD',
    title: 'Papal Supremacy Begins',
    description: 'Little horn power established for 1260 years',
    book: 'Daniel',
    chapter: 7,
    category: 'medieval',
    prophecy: 'Time, times, and dividing of time',
    significance: 'Saints given into his hand',
    sdaInterpretation: 'Justinian\'s decree and the defeat of the Ostrogoths established papal supremacy. For 1260 years (538-1798), the papacy wielded both spiritual and temporal power, persecuting those who opposed its authority.',
    historicalEvidence: [
      'Justinian\'s Code establishing papal authority',
      'Historical records of Ostrogothic defeat',
      'Documentation of papal temporal power'
    ],
    relatedEvents: ['inquisition-begins', 'crusades-launched'],
    color: 'bg-purple-600',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 41.9028,
      lng: 12.4964,
      location: 'Rome'
    }
  },
  {
    id: 'islam-rises',
    date: '622 AD',
    title: 'Rise of Islam',
    description: 'Fifth trumpet - locusts from the bottomless pit',
    book: 'Revelation',
    chapter: 9,
    category: 'medieval',
    prophecy: 'Fifth trumpet judgment',
    significance: 'Torment for five months (150 years)',
    sdaInterpretation: 'The rise of Islam under Muhammad fulfilled the fifth trumpet. The 150-year period (622-772 AD) represents the initial expansion of Islam, tormenting the Eastern Roman Empire but not destroying it.',
    historicalEvidence: [
      'Islamic historical records of early expansion',
      'Byzantine records of Arab conquests',
      'Archaeological evidence of Islamic settlements'
    ],
    relatedEvents: ['constantinople-threatened', 'crusades-launched'],
    color: 'bg-green-600',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 24.7136,
      lng: 46.6753,
      location: 'Arabian Peninsula'
    }
  },
  {
    id: 'ottoman-empire',
    date: '1299 AD',
    title: 'Ottoman Empire Rises',
    description: 'Sixth trumpet - four angels loosed from Euphrates',
    book: 'Revelation',
    chapter: 9,
    category: 'medieval',
    prophecy: 'Sixth trumpet judgment',
    significance: 'Prepared for hour, day, month, year',
    sdaInterpretation: 'The Ottoman Empire fulfilled the sixth trumpet, being "prepared" for the exact time to slay the third part of men (the Eastern Roman Empire). The 391 years and 15 days (1449-1840) marked Ottoman supremacy.',
    historicalEvidence: [
      'Ottoman historical chronicles',
      'Byzantine records of Ottoman expansion',
      'Archaeological evidence of Ottoman conquests'
    ],
    relatedEvents: ['constantinople-falls', 'ottoman-decline'],
    color: 'bg-red-700',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 41.0082,
      lng: 28.9784,
      location: 'Constantinople'
    }
  },

  // Modern Period (1798 AD - Present)
  {
    id: 'papal-captivity',
    date: '1798 AD',
    title: 'Papal Captivity',
    description: 'Pope taken captive by French - deadly wound inflicted',
    book: 'Revelation',
    chapter: 13,
    category: 'modern',
    prophecy: 'Beast receives deadly wound',
    significance: '1260 years of supremacy end',
    sdaInterpretation: 'General Berthier\'s capture of Pope Pius VI ended the 1260 years of papal supremacy exactly as prophesied. This "deadly wound" marked the end of the papal temporal power, though the wound would later heal.',
    historicalEvidence: [
      'French military records of papal capture',
      'Vatican records of papal exile',
      'Contemporary newspaper accounts'
    ],
    relatedEvents: ['french-revolution', 'napoleon-wars'],
    color: 'bg-red-700',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 41.9028,
      lng: 12.4964,
      location: 'Rome'
    }
  },
  {
    id: 'investigative-judgment',
    date: '1844 AD',
    title: 'Investigative Judgment Begins',
    description: '2300 days end - sanctuary cleansing begins in heaven',
    book: 'Daniel',
    chapter: 8,
    category: 'modern',
    prophecy: 'Cleansing of sanctuary',
    significance: 'Judgment hour begins',
    sdaInterpretation: 'The 2300-day prophecy ended in 1844, marking the beginning of the investigative judgment in heaven\'s sanctuary. This pre-advent judgment determines who will receive eternal life at Christ\'s second coming.',
    historicalEvidence: [
      'Millerite movement documentation',
      'Contemporary religious revival records',
      'Seventh-day Adventist historical records'
    ],
    relatedEvents: ['great-disappointment', 'sda-church-organized'],
    color: 'bg-blue-600',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 42.3601,
      lng: -71.0589,
      location: 'Boston, Massachusetts'
    }
  },
  {
    id: 'usa-rises',
    date: '1776 AD',
    title: 'United States Independence',
    description: 'Beast from the earth - lamb-like horns speaking as dragon',
    book: 'Revelation',
    chapter: 13,
    category: 'modern',
    prophecy: 'Second beast with two horns',
    significance: 'Exercises authority of first beast',
    sdaInterpretation: 'The United States emerged as the second beast of Revelation 13, initially appearing lamb-like (Christian principles, civil and religious liberty) but destined to speak as a dragon in enforcing religious laws.',
    historicalEvidence: [
      'Declaration of Independence',
      'Constitutional Convention records',
      'Early American religious freedom documents'
    ],
    relatedEvents: ['religious-liberty', 'sunday-law-movement'],
    color: 'bg-blue-800',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg',
    coordinates: {
      lat: 39.9526,
      lng: -75.1652,
      location: 'Philadelphia'
    }
  },

  // Future Events
  {
    id: 'sunday-laws',
    date: 'Future',
    title: 'National Sunday Law',
    description: 'Mark of the beast enforced - image to the beast formed',
    book: 'Revelation',
    chapter: 13,
    category: 'future',
    prophecy: 'Mark of the beast crisis',
    significance: 'Final test of loyalty',
    sdaInterpretation: 'The United States will lead in enforcing Sunday observance as a mark of allegiance, creating an image to the papal beast. This will be the final test separating those who worship God from those who worship the beast.',
    historicalEvidence: [
      'Current Sunday law movements',
      'Religious liberty erosion trends',
      'Ecumenical movement developments'
    ],
    relatedEvents: ['three-angels-messages', 'loud-cry'],
    color: 'bg-red-800',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg'
  },
  {
    id: 'second-coming',
    date: 'Future',
    title: 'Christ\'s Second Coming',
    description: 'Stone kingdom destroys all earthly kingdoms',
    book: 'Daniel',
    chapter: 2,
    category: 'future',
    prophecy: 'Stone cut without hands',
    significance: 'God\'s eternal kingdom established',
    sdaInterpretation: 'Christ will return in power and glory to destroy all earthly kingdoms and establish His eternal kingdom. The stone that strikes the image represents this glorious event when sin and sinners are forever destroyed.',
    historicalEvidence: [
      'Biblical prophecies of second coming',
      'Signs of the times fulfillment',
      'Current world conditions'
    ],
    relatedEvents: ['millennium', 'new-earth'],
    color: 'bg-yellow-400',
    imageUrl: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg'
  }
];

export const getEventsByCategory = (category: TimelineEvent['category']): TimelineEvent[] => {
  return timelineDatabase.filter(event => event.category === category);
};

export const getEventsByBook = (book: string): TimelineEvent[] => {
  return timelineDatabase.filter(event => event.book.toLowerCase() === book.toLowerCase());
};

export const searchTimelineEvents = (query: string): TimelineEvent[] => {
  const lowercaseQuery = query.toLowerCase();
  return timelineDatabase.filter(event =>
    event.title.toLowerCase().includes(lowercaseQuery) ||
    event.description.toLowerCase().includes(lowercaseQuery) ||
    event.prophecy.toLowerCase().includes(lowercaseQuery) ||
    event.sdaInterpretation.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRelatedEvents = (eventId: string): TimelineEvent[] => {
  const event = timelineDatabase.find(e => e.id === eventId);
  if (!event) return [];
  
  return timelineDatabase.filter(e => 
    event.relatedEvents.includes(e.id) || e.relatedEvents.includes(eventId)
  );
};

export const getEventById = (id: string): TimelineEvent | undefined => {
  return timelineDatabase.find(event => event.id === id);
};

// Timeline calculation utilities
export const calculateYearFromBC = (bcDate: string): number => {
  const year = parseInt(bcDate.replace(' BC', ''));
  return -year; // Negative for BC dates
};

export const calculateYearFromAD = (adDate: string): number => {
  return parseInt(adDate.replace(' AD', ''));
};

export const sortEventsByDate = (events: TimelineEvent[]): TimelineEvent[] => {
  return events.sort((a, b) => {
    let yearA: number;
    let yearB: number;

    if (a.date === 'Future') yearA = 9999;
    else if (a.date.includes('BC')) yearA = calculateYearFromBC(a.date);
    else yearA = calculateYearFromAD(a.date);

    if (b.date === 'Future') yearB = 9999;
    else if (b.date.includes('BC')) yearB = calculateYearFromBC(b.date);
    else yearB = calculateYearFromAD(b.date);

    return yearA - yearB;
  });
};