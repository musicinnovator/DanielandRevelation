// Comprehensive SDA Symbolism Database
export interface BiblicalSymbol {
  id: string;
  name: string;
  category: 'beasts' | 'objects' | 'natural' | 'religious' | 'time' | 'colors' | 'numbers';
  biblicalDefinition: string;
  scriptureRef: string[];
  description: string;
  examples: string[];
  relatedVerses: string[];
  sdaNote: string;
  imageUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const symbolismDatabase: BiblicalSymbol[] = [
  // Existing symbols (preserved)
  {
    id: 'beast',
    name: "Beast",
    category: "beasts",
    biblicalDefinition: "Kingdom or political power",
    scriptureRef: ["Daniel 7:17", "Daniel 7:23"],
    description: "In Bible prophecy, beasts represent kingdoms or political powers that rule over nations",
    examples: ["Lion (Babylon)", "Bear (Medo-Persia)", "Leopard (Greece)", "Dreadful Beast (Rome)"],
    relatedVerses: ["Da:7:17", "Da:7:23", "Re:13:1"],
    sdaNote: "Beasts rising from the sea represent kingdoms arising from populated areas",
    imageUrl: "https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'woman-pure',
    name: "Woman (Pure)",
    category: "religious",
    biblicalDefinition: "True church or people of God",
    scriptureRef: ["2 Corinthians 11:2", "Ephesians 5:25-27"],
    description: "A pure woman represents God's faithful church, clothed in righteousness",
    examples: ["Woman in Revelation 12", "Bride of Christ", "New Jerusalem"],
    relatedVerses: ["Re:12:1", "Re:19:7-8", "Re:21:2"],
    sdaNote: "Represents the faithful remnant church keeping God's commandments",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },

  // NEW SYMBOLS - Beasts & Creatures (15 additional)
  {
    id: 'dragon',
    name: "Dragon",
    category: "beasts",
    biblicalDefinition: "Satan, the devil, or satanic power",
    scriptureRef: ["Revelation 12:9", "Revelation 20:2"],
    description: "The great red dragon represents Satan and his earthly agents",
    examples: ["Great Red Dragon", "Old Serpent", "Devil and Satan"],
    relatedVerses: ["Re:12:3", "Re:12:9", "Re:13:2", "Re:20:2"],
    sdaNote: "Satan works through earthly powers to oppose God's people and truth",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },
  {
    id: 'lamb',
    name: "Lamb",
    category: "beasts",
    biblicalDefinition: "Jesus Christ, the sacrifice for sin",
    scriptureRef: ["John 1:29", "Revelation 5:6"],
    description: "The Lamb represents Christ's sacrificial death and His role as Redeemer",
    examples: ["Lamb of God", "Lamb slain from foundation", "Marriage of the Lamb"],
    relatedVerses: ["Jn:1:29", "Re:5:6", "Re:5:12", "Re:19:7"],
    sdaNote: "Christ's dual nature as sacrifice (Lamb) and King is central to salvation",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'horses-four',
    name: "Horses (Four Colors)",
    category: "beasts",
    biblicalDefinition: "Instruments of divine judgment and conquest",
    scriptureRef: ["Revelation 6:1-8", "Zechariah 6:1-8"],
    description: "White, red, black, and pale horses represent different aspects of divine judgment",
    examples: ["White horse (conquest)", "Red horse (war)", "Black horse (famine)", "Pale horse (death)"],
    relatedVerses: ["Re:6:2", "Re:6:4", "Re:6:5", "Re:6:8"],
    sdaNote: "Represent the spread of the gospel and its rejection leading to judgment",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },
  {
    id: 'locusts',
    name: "Locusts",
    category: "beasts",
    biblicalDefinition: "Destructive armies or false teachings",
    scriptureRef: ["Revelation 9:3-11", "Joel 2:25"],
    description: "Locusts represent destructive forces, often spiritual deception",
    examples: ["Fifth trumpet locusts", "Army of locusts", "Destroying locusts"],
    relatedVerses: ["Re:9:3", "Re:9:7", "Joel:2:25"],
    sdaNote: "Often represents the rise of Islam and its impact on Christianity",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'advanced'
  },
  {
    id: 'frogs',
    name: "Frogs",
    category: "beasts",
    biblicalDefinition: "Unclean spirits or false doctrines",
    scriptureRef: ["Revelation 16:13-14"],
    description: "Three unclean spirits like frogs represent deceptive spiritual influences",
    examples: ["Spirits of devils", "Unclean spirits", "Miracle-working spirits"],
    relatedVerses: ["Re:16:13", "Re:16:14"],
    sdaNote: "Represents the threefold union of dragon, beast, and false prophet",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'advanced'
  },
  {
    id: 'eagles',
    name: "Eagles",
    category: "beasts",
    biblicalDefinition: "Swift judgment or divine protection",
    scriptureRef: ["Revelation 12:14", "Matthew 24:28"],
    description: "Eagles represent either God's protective care or swift divine judgment",
    examples: ["Eagle's wings", "Eagles gathered", "Two wings of great eagle"],
    relatedVerses: ["Re:12:14", "Mt:24:28", "Ex:19:4"],
    sdaNote: "God's protection of His people during times of persecution",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },

  // Objects & Items (15 additional)
  {
    id: 'sword',
    name: "Sword",
    category: "objects",
    biblicalDefinition: "Word of God or divine judgment",
    scriptureRef: ["Ephesians 6:17", "Revelation 1:16"],
    description: "Two-edged sword represents God's word that divides truth from error",
    examples: ["Sword of the Spirit", "Sharp two-edged sword", "Sword from mouth"],
    relatedVerses: ["Eph:6:17", "Re:1:16", "Re:19:15", "Heb:4:12"],
    sdaNote: "God's word is the ultimate weapon against Satan's deceptions",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'crown',
    name: "Crown",
    category: "objects",
    biblicalDefinition: "Authority, victory, or reward",
    scriptureRef: ["Revelation 4:4", "1 Corinthians 9:25"],
    description: "Crowns represent royal authority or the reward of faithful service",
    examples: ["Golden crowns", "Crown of life", "Crown of righteousness"],
    relatedVerses: ["Re:4:4", "Re:2:10", "2Ti:4:8"],
    sdaNote: "Faithful Christians will receive crowns as rewards for overcoming",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'seal',
    name: "Seal",
    category: "objects",
    biblicalDefinition: "Authentication, ownership, or security",
    scriptureRef: ["Revelation 7:2-3", "Ephesians 4:30"],
    description: "Seals represent God's mark of ownership and protection on His people",
    examples: ["Seal of God", "Seven seals", "Sealed foreheads"],
    relatedVerses: ["Re:7:3", "Re:5:1", "Eph:4:30"],
    sdaNote: "God's seal is His law written in the heart and observed in life",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },
  {
    id: 'key',
    name: "Key",
    category: "objects",
    biblicalDefinition: "Authority to open or shut, control access",
    scriptureRef: ["Revelation 1:18", "Revelation 3:7"],
    description: "Keys represent divine authority over death, hell, and salvation",
    examples: ["Keys of death and hell", "Key of David", "Key of bottomless pit"],
    relatedVerses: ["Re:1:18", "Re:3:7", "Re:9:1", "Re:20:1"],
    sdaNote: "Christ holds ultimate authority over life, death, and access to God",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },
  {
    id: 'book',
    name: "Book/Scroll",
    category: "objects",
    biblicalDefinition: "Divine revelation or record of deeds",
    scriptureRef: ["Revelation 5:1", "Revelation 20:12"],
    description: "Books represent God's revealed will or the record of human actions",
    examples: ["Book with seven seals", "Books of judgment", "Little book"],
    relatedVerses: ["Re:5:1", "Re:10:2", "Re:20:12", "Da:12:1"],
    sdaNote: "God's word and the record of our lives are both preserved in heaven",
    imageUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'trumpet',
    name: "Trumpet",
    category: "objects",
    biblicalDefinition: "Divine announcement or call to attention",
    scriptureRef: ["Revelation 8:2", "1 Corinthians 15:52"],
    description: "Trumpets announce important divine events or judgments",
    examples: ["Seven trumpets", "Last trump", "Great trumpet"],
    relatedVerses: ["Re:8:2", "1Co:15:52", "Mt:24:31"],
    sdaNote: "Each trumpet represents a specific historical judgment upon the Roman Empire",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },

  // Natural Elements (10 additional)
  {
    id: 'fire',
    name: "Fire",
    category: "natural",
    biblicalDefinition: "Purification, judgment, or God's presence",
    scriptureRef: ["Revelation 20:9", "Malachi 3:2"],
    description: "Fire represents God's purifying presence or consuming judgment",
    examples: ["Lake of fire", "Refiner's fire", "Fire from heaven"],
    relatedVerses: ["Re:20:14", "Mal:3:2", "Re:13:13"],
    sdaNote: "Fire ultimately destroys sin and sinners, purifying the universe",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'blood',
    name: "Blood",
    category: "natural",
    biblicalDefinition: "Life, sacrifice, or judgment",
    scriptureRef: ["Revelation 7:14", "Leviticus 17:11"],
    description: "Blood represents the life principle, Christ's sacrifice, or divine judgment",
    examples: ["Blood of the Lamb", "Rivers of blood", "Blood on doorposts"],
    relatedVerses: ["Re:7:14", "Re:16:3", "Ex:12:13"],
    sdaNote: "Christ's blood is the only means of cleansing from sin",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'oil',
    name: "Oil",
    category: "natural",
    biblicalDefinition: "Holy Spirit or divine anointing",
    scriptureRef: ["Revelation 11:4", "1 Samuel 16:13"],
    description: "Oil represents the Holy Spirit's presence and anointing power",
    examples: ["Two olive trees", "Oil for lamps", "Anointing oil"],
    relatedVerses: ["Re:11:4", "Mt:25:3", "1Sa:16:13"],
    sdaNote: "The Holy Spirit empowers God's people for service and witness",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },
  {
    id: 'wine',
    name: "Wine",
    category: "natural",
    biblicalDefinition: "Joy, blessing, or wrath of God",
    scriptureRef: ["Revelation 14:10", "Revelation 19:15"],
    description: "Wine can represent either divine blessing or the wine of God's wrath",
    examples: ["Wine of wrath", "New wine", "Wine of Babylon"],
    relatedVerses: ["Re:14:10", "Re:17:2", "Re:19:15"],
    sdaNote: "Context determines whether wine represents blessing or judgment",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },

  // Colors & Materials (8 additional)
  {
    id: 'white',
    name: "White",
    category: "colors",
    biblicalDefinition: "Purity, righteousness, victory",
    scriptureRef: ["Revelation 3:4", "Revelation 7:9"],
    description: "White represents the righteousness of Christ and purity of character",
    examples: ["White robes", "White horse", "White throne"],
    relatedVerses: ["Re:3:4", "Re:6:2", "Re:20:11"],
    sdaNote: "White garments represent Christ's righteousness covering the believer",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'red',
    name: "Red/Scarlet",
    category: "colors",
    biblicalDefinition: "Sin, war, or persecution",
    scriptureRef: ["Revelation 12:3", "Isaiah 1:18"],
    description: "Red often represents sin, bloodshed, or persecution",
    examples: ["Great red dragon", "Red horse", "Scarlet beast"],
    relatedVerses: ["Re:12:3", "Re:6:4", "Re:17:3"],
    sdaNote: "Red is associated with Satan's persecution of God's people",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'purple',
    name: "Purple",
    category: "colors",
    biblicalDefinition: "Royalty, wealth, or false religion",
    scriptureRef: ["Revelation 17:4", "Revelation 18:16"],
    description: "Purple represents royal authority or the wealth of false religion",
    examples: ["Purple and scarlet", "Clothed in purple", "Purple robe"],
    relatedVerses: ["Re:17:4", "Re:18:16", "Mk:15:17"],
    sdaNote: "Often associated with the papal system's claims to authority",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  },

  // Numbers & Time (7 additional)
  {
    id: 'seven',
    name: "Seven",
    category: "numbers",
    biblicalDefinition: "Completeness, perfection, divine fullness",
    scriptureRef: ["Revelation 1:4", "Genesis 2:2"],
    description: "Seven represents divine completeness and perfection",
    examples: ["Seven churches", "Seven seals", "Seven trumpets"],
    relatedVerses: ["Re:1:4", "Re:5:1", "Re:8:2"],
    sdaNote: "Seven indicates God's complete work in creation and redemption",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'three-half',
    name: "Three and a Half",
    category: "numbers",
    biblicalDefinition: "Period of persecution or tribulation",
    scriptureRef: ["Daniel 7:25", "Revelation 12:14"],
    description: "3½ times represents the period of papal supremacy (538-1798 AD)",
    examples: ["Time, times, dividing of time", "42 months", "1260 days"],
    relatedVerses: ["Da:7:25", "Re:11:2", "Re:12:6"],
    sdaNote: "Represents 1260 years of papal persecution using day-year principle",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'advanced'
  },
  {
    id: 'twelve',
    name: "Twelve",
    category: "numbers",
    biblicalDefinition: "Divine government, organized religion",
    scriptureRef: ["Revelation 21:12", "Matthew 19:28"],
    description: "Twelve represents God's organized government and people",
    examples: ["Twelve tribes", "Twelve apostles", "Twelve gates"],
    relatedVerses: ["Re:21:12", "Re:7:4", "Mt:19:28"],
    sdaNote: "Represents the complete organization of God's people",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'beginner'
  },
  {
    id: 'thousand',
    name: "Thousand",
    category: "numbers",
    biblicalDefinition: "Completeness, long period, or multitude",
    scriptureRef: ["Revelation 20:2", "2 Peter 3:8"],
    description: "Thousand represents a complete period or vast multitude",
    examples: ["Thousand years", "Thousands of thousands", "144,000"],
    relatedVerses: ["Re:20:2", "Re:5:11", "Re:7:4"],
    sdaNote: "The millennium is a literal thousand-year period after Christ's return",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    difficulty: 'intermediate'
  }
];

export const getSymbolsByCategory = (category: BiblicalSymbol['category']): BiblicalSymbol[] => {
  return symbolismDatabase.filter(symbol => symbol.category === category);
};

export const getSymbolsByDifficulty = (difficulty: BiblicalSymbol['difficulty']): BiblicalSymbol[] => {
  return symbolismDatabase.filter(symbol => symbol.difficulty === difficulty);
};

export const searchSymbols = (query: string): BiblicalSymbol[] => {
  const lowercaseQuery = query.toLowerCase();
  return symbolismDatabase.filter(symbol =>
    symbol.name.toLowerCase().includes(lowercaseQuery) ||
    symbol.biblicalDefinition.toLowerCase().includes(lowercaseQuery) ||
    symbol.description.toLowerCase().includes(lowercaseQuery) ||
    symbol.examples.some(example => example.toLowerCase().includes(lowercaseQuery)) ||
    symbol.sdaNote.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRelatedSymbols = (symbolId: string): BiblicalSymbol[] => {
  const symbol = symbolismDatabase.find(s => s.id === symbolId);
  if (!symbol) return [];
  
  return symbolismDatabase.filter(s => 
    s.id !== symbolId && 
    (s.category === symbol.category || 
     s.relatedVerses.some(verse => symbol.relatedVerses.includes(verse)))
  ).slice(0, 5);
};