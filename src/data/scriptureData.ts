// Enhanced Scripture Data with full KJV text and interactive features
export interface ScriptureVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  keywords?: string[];
  crossReferences?: string[];
  sdaCommentary?: string;
  hasModel?: boolean;
  modelId?: string;
}

export interface ScriptureChapter {
  book: string;
  chapter: number;
  title: string;
  verses: ScriptureVerse[];
  summary: string;
  keyThemes: string[];
  sdaInsights: string[];
  relatedModels: string[];
  timelinePeriod?: string;
}

// Daniel Chapter 1 - Complete KJV Text
const daniel1Verses: ScriptureVerse[] = [
  {
    book: 'daniel',
    chapter: 1,
    verse: 1,
    text: "In the third year of the reign of Jehoiakim king of Judah came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it.",
    keywords: ['Jehoiakim', 'Nebuchadnezzar', 'Babylon', 'Jerusalem'],
    crossReferences: ['2 Kings 24:1', '2 Chronicles 36:5-7'],
    sdaCommentary: "This marks the beginning of the 'times of the Gentiles' and the 70-year Babylonian captivity prophesied by Jeremiah."
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 2,
    text: "And the Lord gave Jehoiakim king of Judah into his hand, with part of the vessels of the house of God: which he carried into the land of Shinar to the house of his god; and he brought the vessels into the treasure house of his god.",
    keywords: ['Lord', 'vessels', 'house of God', 'Shinar'],
    crossReferences: ['2 Chronicles 36:7', 'Jeremiah 27:19-20'],
    sdaCommentary: "God permitted this captivity as judgment for Judah's apostasy, yet He remained sovereign over the situation."
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 3,
    text: "And the king spake unto Ashpenaz the master of his eunuchs, that he should bring certain of the children of Israel, and of the king's seed, and of the princes;",
    keywords: ['Ashpenaz', 'eunuchs', 'children of Israel', 'princes'],
    crossReferences: ['Isaiah 39:7'],
    sdaCommentary: "Nebuchadnezzar's policy was to educate the nobility of conquered nations to serve in his administration."
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 4,
    text: "Children in whom was no blemish, but well favoured, and skilful in all wisdom, and cunning in knowledge, and understanding science, and such as had ability in them to stand in the king's palace, and whom they might teach the learning and the tongue of the Chaldeans.",
    keywords: ['no blemish', 'wisdom', 'knowledge', 'science', 'Chaldeans'],
    crossReferences: ['1 Kings 12:8'],
    sdaCommentary: "God's people were chosen for their excellence, demonstrating that faithfulness to God enhances rather than diminishes human capabilities."
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 5,
    text: "And the king appointed them a daily provision of the king's meat, and of the wine which he drank: so nourishing them three years, that at the end thereof they might stand before the king.",
    keywords: ['daily provision', 'king\'s meat', 'wine', 'three years'],
    crossReferences: ['Genesis 43:34'],
    sdaCommentary: "The king's food likely included items forbidden by God's dietary laws, creating the first test of faithfulness."
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 6,
    text: "Now among these were of the children of Judah, Daniel, Hananiah, Mishael, and Azariah:",
    keywords: ['Daniel', 'Hananiah', 'Mishael', 'Azariah', 'Judah'],
    crossReferences: ['Ezekiel 14:14'],
    sdaCommentary: "These four Hebrew youth would become God's witnesses in the Babylonian court, demonstrating His power and wisdom."
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 7,
    text: "Unto whom the prince of the eunuchs gave names: for he gave unto Daniel the name of Belteshazzar; and to Hananiah, of Shadrach; and to Mishael, of Meshach; and to Azariah, of Abed-nego.",
    keywords: ['Belteshazzar', 'Shadrach', 'Meshach', 'Abed-nego'],
    crossReferences: ['2 Kings 24:17'],
    sdaCommentary: "The name changes were intended to erase Hebrew identity and connect them with Babylonian gods, but their character remained unchanged."
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 8,
    text: "But Daniel purposed in his heart that he would not defile himself with the portion of the king's meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.",
    keywords: ['purposed in his heart', 'not defile', 'requested'],
    crossReferences: ['Leviticus 11', 'Acts 15:20'],
    sdaCommentary: "Daniel's decision demonstrates that faithfulness in small matters prepares us for greater tests. Health principles are part of God's law.",
    hasModel: true,
    modelId: 'daniel-diet-test'
  }
  // Additional verses would continue here...
];

// Daniel Chapter 2 - Nebuchadnezzar's Dream
const daniel2Verses: ScriptureVerse[] = [
  {
    book: 'daniel',
    chapter: 2,
    verse: 31,
    text: "Thou, O king, sawest, and behold a great image. This great image, whose brightness was excellent, stood before thee; and the form thereof was terrible.",
    keywords: ['great image', 'brightness', 'terrible'],
    crossReferences: ['Daniel 7:1-8'],
    sdaCommentary: "The great image represents the succession of world empires from Babylon to the end times.",
    hasModel: true,
    modelId: 'nebuchadnezzars-image'
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 32,
    text: "This image's head was of fine gold, his breast and his arms of silver, his belly and his thighs of brass,",
    keywords: ['head', 'gold', 'breast', 'arms', 'silver', 'belly', 'thighs', 'brass'],
    crossReferences: ['Daniel 7:4-6'],
    sdaCommentary: "Each metal represents a successive world empire: gold (Babylon), silver (Medo-Persia), brass (Greece)."
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 33,
    text: "His legs of iron, his feet part of iron and part of clay.",
    keywords: ['legs', 'iron', 'feet', 'clay'],
    crossReferences: ['Daniel 7:7', 'Daniel 7:24'],
    sdaCommentary: "Iron represents Rome; iron and clay represent divided Europe that would never unite again."
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 34,
    text: "Thou sawest till that a stone was cut out without hands, which smote the image upon his feet that were of iron and clay, and brake them to pieces.",
    keywords: ['stone', 'cut out without hands', 'smote', 'brake to pieces'],
    crossReferences: ['Daniel 7:13-14', 'Revelation 19:11-16'],
    sdaCommentary: "The stone represents Christ's kingdom that will destroy all earthly kingdoms at His second coming."
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 35,
    text: "Then was the iron, the clay, the brass, the silver, and the gold, broken to pieces together, and became like the chaff of the summer threshingfloors; and the wind carried them away, that no place was found for them: and the stone became a great mountain, and filled the whole earth.",
    keywords: ['broken to pieces', 'chaff', 'wind carried away', 'great mountain', 'filled whole earth'],
    crossReferences: ['Psalm 2:9', 'Revelation 11:15'],
    sdaCommentary: "All earthly kingdoms will be completely destroyed and replaced by God's eternal kingdom."
  }
  // Additional verses would continue...
];

export const scriptureDatabase: ScriptureChapter[] = [
  {
    book: 'daniel',
    chapter: 1,
    title: "Daniel's Faith in God's Health Protocol leads to God Blessing him with the visions of the Book of Daniel - the First Test (Thou shalt not kill Exodus 20:13)",
    verses: daniel1Verses,
    summary: "Daniel and his three friends are taken captive to Babylon where they face their first test of faithfulness regarding God's dietary laws. Their commitment to God's health principles results in superior physical and mental capabilities.",
    keyThemes: ['Faithfulness in small things', 'Health principles', 'God\'s sovereignty', 'Preparation for service'],
    sdaInsights: [
      "Health reform is part of the third angel's message",
      "Faithfulness in diet prepares for greater tests",
      "God honors those who honor Him",
      "Education should develop the whole person - physical, mental, and spiritual"
    ],
    relatedModels: ['daniel-diet-test'],
    timelinePeriod: '605 BC'
  },
  {
    book: 'daniel',
    chapter: 2,
    title: "Nebuchadnezzar's 1st Dream (The 4 Great Kingdoms of World History) - The Great Image and its interpretation by God given through Daniel",
    verses: daniel2Verses,
    summary: "Nebuchadnezzar dreams of a great image representing successive world empires. Daniel interprets the dream, revealing God's sovereignty over human history and the ultimate establishment of His eternal kingdom.",
    keyThemes: ['Prophetic history', 'God\'s sovereignty', 'World empires', 'Christ\'s kingdom'],
    sdaInsights: [
      "History is moving toward the establishment of God's kingdom",
      "Human empires will all pass away",
      "God reveals the future to His servants",
      "The stone kingdom represents Christ's second coming and eternal reign"
    ],
    relatedModels: ['nebuchadnezzars-image', 'stone-kingdom'],
    timelinePeriod: '603 BC'
  }
  // Additional chapters would be added here...
];

export const getScriptureChapter = (book: string, chapter: number): ScriptureChapter | null => {
  return scriptureDatabase.find(ch => ch.book === book && ch.chapter === chapter) || null;
};

export const searchScripture = (query: string): ScriptureVerse[] => {
  const results: ScriptureVerse[] = [];
  const lowercaseQuery = query.toLowerCase();
  
  scriptureDatabase.forEach(chapter => {
    chapter.verses.forEach(verse => {
      if (verse.text.toLowerCase().includes(lowercaseQuery) ||
          verse.keywords?.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))) {
        results.push(verse);
      }
    });
  });
  
  return results;
};

export const getVersesByKeyword = (keyword: string): ScriptureVerse[] => {
  const results: ScriptureVerse[] = [];
  const lowercaseKeyword = keyword.toLowerCase();
  
  scriptureDatabase.forEach(chapter => {
    chapter.verses.forEach(verse => {
      if (verse.keywords?.some(k => k.toLowerCase().includes(lowercaseKeyword))) {
        results.push(verse);
      }
    });
  });
  
  return results;
};

export const formatScriptureContent = (verses: ScriptureVerse[]): string => {
  return verses.map(verse => {
    const verseClass = verse.hasModel ? 'verse-with-model' : '';
    const modelLink = verse.hasModel ? ` <span class="model-link" data-model="${verse.modelId}">[3D Model]</span>` : '';
    
    return `<div class="scripture-verse ${verseClass}" data-verse="${verse.book}-${verse.chapter}-${verse.verse}">
      <span class="verse-number">${verse.verse}</span>
      <span class="verse-text">${verse.text}</span>
      ${modelLink}
      ${verse.sdaCommentary ? `<div class="sda-commentary">${verse.sdaCommentary}</div>` : ''}
    </div>`;
  }).join('\n');
};

export const getCrossReferences = (verse: ScriptureVerse): string[] => {
  return verse.crossReferences || [];
};

export const getChaptersByBook = (book: string): ScriptureChapter[] => {
  return scriptureDatabase.filter(chapter => chapter.book === book);
};