// Biblical imagery database with Pexels URLs for educational use
export interface BiblicalImage {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'prophecy' | 'historical' | 'symbolic' | 'geographical' | 'architectural';
  tags: string[];
  scriptureRef?: string;
}

export const biblicalImages: BiblicalImage[] = [
  // Prophetic Images
  {
    id: 'nebuchadnezzar-statue',
    title: "Ancient Golden Statue",
    description: "Representing Nebuchadnezzar's great image of gold, silver, bronze, iron and clay",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'prophecy',
    tags: ['daniel', 'statue', 'kingdoms', 'prophecy'],
    scriptureRef: 'Daniel 2:31-35'
  },
  {
    id: 'lion-with-wings',
    title: "Majestic Lion",
    description: "Representing Babylon in Daniel's vision of four beasts",
    url: "https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg",
    category: 'prophecy',
    tags: ['daniel', 'lion', 'babylon', 'beast'],
    scriptureRef: 'Daniel 7:4'
  },
  {
    id: 'bear-standing',
    title: "Standing Bear",
    description: "Representing Medo-Persia raised up on one side",
    url: "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
    category: 'prophecy',
    tags: ['daniel', 'bear', 'medo-persia', 'beast'],
    scriptureRef: 'Daniel 7:5'
  },
  {
    id: 'leopard-spotted',
    title: "Spotted Leopard",
    description: "Representing Greece with four heads and wings",
    url: "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg",
    category: 'prophecy',
    tags: ['daniel', 'leopard', 'greece', 'beast'],
    scriptureRef: 'Daniel 7:6'
  },
  {
    id: 'dragon-fierce',
    title: "Fierce Dragon",
    description: "Representing the dreadful fourth beast of Rome",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'prophecy',
    tags: ['daniel', 'dragon', 'rome', 'beast'],
    scriptureRef: 'Daniel 7:7'
  },
  {
    id: 'golden-candlesticks',
    title: "Golden Menorah",
    description: "Seven golden candlesticks representing the seven churches",
    url: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg",
    category: 'prophecy',
    tags: ['revelation', 'candlesticks', 'churches', 'golden'],
    scriptureRef: 'Revelation 1:12-13'
  },
  {
    id: 'throne-room',
    title: "Heavenly Throne",
    description: "God's throne room with rainbow and crystal sea",
    url: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
    category: 'prophecy',
    tags: ['revelation', 'throne', 'heaven', 'rainbow'],
    scriptureRef: 'Revelation 4:2-6'
  },
  {
    id: 'ram-horns',
    title: "Ram with Horns",
    description: "Ram representing Medo-Persia with two unequal horns",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'prophecy',
    tags: ['daniel', 'ram', 'medo-persia', 'horns'],
    scriptureRef: 'Daniel 8:3-4'
  },
  {
    id: 'goat-horn',
    title: "Goat with Notable Horn",
    description: "Goat representing Greece with notable horn between eyes",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'prophecy',
    tags: ['daniel', 'goat', 'greece', 'alexander'],
    scriptureRef: 'Daniel 8:5-8'
  },
  {
    id: 'holy-city',
    title: "Golden City",
    description: "New Jerusalem descending from heaven",
    url: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
    category: 'prophecy',
    tags: ['revelation', 'jerusalem', 'city', 'golden'],
    scriptureRef: 'Revelation 21:10-21'
  },

  // Historical Images
  {
    id: 'babylon-ruins',
    title: "Ancient Babylon Ruins",
    description: "Archaeological remains of ancient Babylon",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'historical',
    tags: ['babylon', 'ruins', 'archaeology', 'ancient'],
    scriptureRef: 'Daniel 1:1'
  },
  {
    id: 'persian-palace',
    title: "Persian Palace",
    description: "Ancient Persian architectural remains",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'historical',
    tags: ['persia', 'palace', 'ancient', 'architecture'],
    scriptureRef: 'Daniel 6:1'
  },
  {
    id: 'greek-columns',
    title: "Greek Columns",
    description: "Classical Greek architecture representing the Greek empire",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'historical',
    tags: ['greece', 'columns', 'architecture', 'classical'],
    scriptureRef: 'Daniel 8:21'
  },
  {
    id: 'roman-colosseum',
    title: "Roman Architecture",
    description: "Roman architectural might representing the iron kingdom",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'historical',
    tags: ['rome', 'architecture', 'empire', 'iron'],
    scriptureRef: 'Daniel 2:40'
  },

  // Symbolic Images
  {
    id: 'crown-golden',
    title: "Golden Crown",
    description: "Crown representing kingship and authority",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'symbolic',
    tags: ['crown', 'authority', 'kingship', 'golden'],
    scriptureRef: 'Revelation 4:4'
  },
  {
    id: 'sword-sharp',
    title: "Sharp Sword",
    description: "Two-edged sword representing God's word",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'symbolic',
    tags: ['sword', 'word', 'sharp', 'truth'],
    scriptureRef: 'Revelation 1:16'
  },
  {
    id: 'book-sealed',
    title: "Ancient Scroll",
    description: "Sealed book representing hidden prophecies",
    url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    category: 'symbolic',
    tags: ['book', 'scroll', 'sealed', 'prophecy'],
    scriptureRef: 'Revelation 5:1'
  },
  {
    id: 'trumpet-golden',
    title: "Golden Trumpet",
    description: "Trumpet representing divine announcements",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'symbolic',
    tags: ['trumpet', 'announcement', 'golden', 'divine'],
    scriptureRef: 'Revelation 8:2'
  },
  {
    id: 'key-golden',
    title: "Golden Key",
    description: "Key representing authority and access",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'symbolic',
    tags: ['key', 'authority', 'access', 'golden'],
    scriptureRef: 'Revelation 1:18'
  },

  // Geographical Images
  {
    id: 'jerusalem-ancient',
    title: "Ancient Jerusalem",
    description: "Historical view of Jerusalem",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'geographical',
    tags: ['jerusalem', 'ancient', 'city', 'holy'],
    scriptureRef: 'Daniel 9:25'
  },
  {
    id: 'river-euphrates',
    title: "Great River",
    description: "River representing the Euphrates",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'geographical',
    tags: ['river', 'euphrates', 'water', 'boundary'],
    scriptureRef: 'Revelation 16:12'
  },
  {
    id: 'mountain-holy',
    title: "Holy Mountain",
    description: "Mountain representing God's holy mountain",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'geographical',
    tags: ['mountain', 'holy', 'zion', 'sacred'],
    scriptureRef: 'Daniel 9:16'
  },

  // Architectural Images
  {
    id: 'temple-ancient',
    title: "Ancient Temple",
    description: "Temple representing the sanctuary",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'architectural',
    tags: ['temple', 'sanctuary', 'worship', 'ancient'],
    scriptureRef: 'Daniel 8:14'
  },
  {
    id: 'altar-sacrifice',
    title: "Altar of Sacrifice",
    description: "Altar representing sacrifice and worship",
    url: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    category: 'architectural',
    tags: ['altar', 'sacrifice', 'worship', 'stone'],
    scriptureRef: 'Revelation 8:3'
  }
];

export const getImagesByCategory = (category: BiblicalImage['category']): BiblicalImage[] => {
  return biblicalImages.filter(image => image.category === category);
};

export const getImagesByTags = (tags: string[]): BiblicalImage[] => {
  return biblicalImages.filter(image => 
    tags.some(tag => image.tags.includes(tag.toLowerCase()))
  );
};

export const getImageById = (id: string): BiblicalImage | undefined => {
  return biblicalImages.find(image => image.id === id);
};

export const searchImages = (query: string): BiblicalImage[] => {
  const lowercaseQuery = query.toLowerCase();
  return biblicalImages.filter(image =>
    image.title.toLowerCase().includes(lowercaseQuery) ||
    image.description.toLowerCase().includes(lowercaseQuery) ||
    image.tags.some(tag => tag.includes(lowercaseQuery)) ||
    (image.scriptureRef && image.scriptureRef.toLowerCase().includes(lowercaseQuery))
  );
};