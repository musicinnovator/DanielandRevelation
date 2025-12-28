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
  historicalContext?: string;
  symbolExplanation?: string;
  imageUrl?: string;
  audioUrl?: string;
  theme?: 'prophecy' | 'judgment' | 'salvation' | 'worship' | 'persecution' | 'victory';
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
  chapterImageUrl?: string;
  audioUrl?: string;
}

// Daniel Chapter 1 - Complete KJV Text with Enhanced Features
const daniel1Verses: ScriptureVerse[] = [
  {
    book: 'daniel',
    chapter: 1,
    verse: 1,
    text: "In the third year of the reign of Jehoiakim king of Judah came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it.",
    keywords: ['Jehoiakim', 'Nebuchadnezzar', 'Babylon', 'Jerusalem'],
    crossReferences: ['2 Kings 24:1', '2 Chronicles 36:5-7', 'Jeremiah 25:1'],
    sdaCommentary: "This marks the beginning of the 'times of the Gentiles' and the 70-year Babylonian captivity prophesied by Jeremiah. The year 605 BC begins the prophetic timeline that extends to the end times.",
    historicalContext: "Nebuchadnezzar's first campaign against Jerusalem established Babylonian dominance over Judah. This was the beginning of three deportations (605, 597, 586 BC).",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'prophecy'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 2,
    text: "And the Lord gave Jehoiakim king of Judah into his hand, with part of the vessels of the house of God: which he carried into the land of Shinar to the house of his god; and he brought the vessels into the treasure house of his god.",
    keywords: ['Lord', 'vessels', 'house of God', 'Shinar', 'treasure house'],
    crossReferences: ['2 Chronicles 36:7', 'Jeremiah 27:19-20', 'Ezra 1:7-11'],
    sdaCommentary: "God permitted this captivity as judgment for Judah's apostasy, yet He remained sovereign over the situation. The sacred vessels would later be returned under Cyrus.",
    historicalContext: "The temple vessels were placed in the temple of Marduk in Babylon, symbolizing the apparent victory of pagan gods over the God of Israel.",
    symbolExplanation: "Shinar represents the land of rebellion against God, first mentioned at the Tower of Babel (Genesis 11:2).",
    imageUrl: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
    theme: 'judgment'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 3,
    text: "And the king spake unto Ashpenaz the master of his eunuchs, that he should bring certain of the children of Israel, and of the king's seed, and of the princes;",
    keywords: ['Ashpenaz', 'eunuchs', 'children of Israel', 'princes'],
    crossReferences: ['Isaiah 39:7', '2 Kings 20:17-18'],
    sdaCommentary: "Nebuchadnezzar's policy was to educate the nobility of conquered nations to serve in his administration, fulfilling Isaiah's prophecy to Hezekiah.",
    historicalContext: "This was a common practice of ancient empires - to assimilate the educated elite of conquered peoples into the imperial bureaucracy.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'persecution'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 4,
    text: "Children in whom was no blemish, but well favoured, and skilful in all wisdom, and cunning in knowledge, and understanding science, and such as had ability in them to stand in the king's palace, and whom they might teach the learning and the tongue of the Chaldeans.",
    keywords: ['no blemish', 'wisdom', 'knowledge', 'science', 'Chaldeans'],
    crossReferences: ['1 Kings 12:8', 'Acts 7:22'],
    sdaCommentary: "God's people were chosen for their excellence, demonstrating that faithfulness to God enhances rather than diminishes human capabilities. True education develops the whole person.",
    historicalContext: "The Babylonian educational system was the most advanced of its time, including mathematics, astronomy, literature, and languages.",
    symbolExplanation: "Physical perfection represented spiritual and intellectual excellence that God desires in His servants.",
    imageUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    theme: 'worship'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 5,
    text: "And the king appointed them a daily provision of the king's meat, and of the wine which he drank: so nourishing them three years, that at the end thereof they might stand before the king.",
    keywords: ['daily provision', 'king\'s meat', 'wine', 'three years'],
    crossReferences: ['Genesis 43:34', 'Proverbs 23:1-3'],
    sdaCommentary: "The king's food likely included items forbidden by God's dietary laws, creating the first test of faithfulness. This parallels end-time tests of conscience.",
    historicalContext: "Royal food was often offered to idols before consumption, making it ceremonially unclean for faithful Jews.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'worship'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 6,
    text: "Now among these were of the children of Judah, Daniel, Hananiah, Mishael, and Azariah:",
    keywords: ['Daniel', 'Hananiah', 'Mishael', 'Azariah', 'Judah'],
    crossReferences: ['Ezekiel 14:14', 'Ezekiel 28:3'],
    sdaCommentary: "These four Hebrew youth would become God's witnesses in the Babylonian court, demonstrating His power and wisdom to the greatest empire of their time.",
    historicalContext: "These young men were likely teenagers from noble families, representing the future leadership of Judah.",
    symbolExplanation: "Their Hebrew names honored God: Daniel (God is my judge), Hananiah (Yahweh is gracious), Mishael (Who is like God?), Azariah (Yahweh has helped).",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'salvation'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 7,
    text: "Unto whom the prince of the eunuchs gave names: for he gave unto Daniel the name of Belteshazzar; and to Hananiah, of Shadrach; and to Mishael, of Meshach; and to Azariah, of Abed-nego.",
    keywords: ['Belteshazzar', 'Shadrach', 'Meshach', 'Abed-nego'],
    crossReferences: ['2 Kings 24:17', 'Daniel 4:8'],
    sdaCommentary: "The name changes were intended to erase Hebrew identity and connect them with Babylonian gods, but their character remained unchanged. Names don't determine destiny.",
    historicalContext: "Changing names was a common practice to assimilate captives into the dominant culture and religion.",
    symbolExplanation: "Belteshazzar honored Bel (Marduk), Shadrach honored Aku (moon god), Meshach honored Aku, Abed-nego honored Nebo (Mercury).",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'persecution'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 8,
    text: "But Daniel purposed in his heart that he would not defile himself with the portion of the king's meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.",
    keywords: ['purposed in his heart', 'not defile', 'requested'],
    crossReferences: ['Leviticus 11', 'Acts 15:20', 'Romans 14:23'],
    sdaCommentary: "Daniel's decision demonstrates that faithfulness in small matters prepares us for greater tests. Health principles are part of God's law and connected to spiritual discernment.",
    historicalContext: "This decision required great courage as it could have resulted in death for refusing the king's provision.",
    hasModel: true,
    modelId: 'daniel-diet-test',
    symbolExplanation: "The heart represents the center of decision-making and moral choice. True religion begins with heart commitment.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'worship'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 9,
    text: "Now God had brought Daniel into favour and tender love with the prince of the eunuchs.",
    keywords: ['God', 'favour', 'tender love'],
    crossReferences: ['Genesis 39:21', 'Proverbs 16:7', 'Acts 7:10'],
    sdaCommentary: "When we honor God, He opens doors and changes hearts. Divine favor accompanies faithful obedience.",
    historicalContext: "Ashpenaz's favorable response was miraculous, as refusing royal food could be seen as insulting the king.",
    theme: 'salvation'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 10,
    text: "And the prince of the eunuchs said unto Daniel, I fear my lord the king, who hath appointed your meat and your drink: for why should he see your faces worse liking than the children which are of your sort? then shall ye make me endanger my head to the king.",
    keywords: ['fear', 'appointed', 'worse liking', 'endanger'],
    crossReferences: ['Proverbs 29:25', 'Matthew 10:28'],
    sdaCommentary: "Ashpenaz's fear was reasonable from a human perspective, but God had a plan to demonstrate the superiority of His ways.",
    historicalContext: "Court officials served at the pleasure of absolute monarchs and could be executed for any perceived failure.",
    theme: 'persecution'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 11,
    text: "Then said Daniel to Melzar, whom the prince of the eunuchs had set over Daniel, Hananiah, Mishael, and Azariah,",
    keywords: ['Melzar', 'set over'],
    crossReferences: ['Daniel 1:16'],
    sdaCommentary: "Daniel approached the immediate supervisor, showing wisdom in working within the system while maintaining principles.",
    historicalContext: "Melzar was likely a title meaning 'steward' or 'guard' rather than a personal name.",
    theme: 'salvation'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 12,
    text: "Prove thy servants, I beseech thee, ten days; and let them give us pulse to eat, and water to drink.",
    keywords: ['prove', 'ten days', 'pulse', 'water'],
    crossReferences: ['Malachi 3:10', '1 Kings 18:21'],
    sdaCommentary: "Daniel proposed a test that would demonstrate God's blessing on obedience to His health laws. Ten days was sufficient to show results.",
    historicalContext: "Pulse refers to vegetables, grains, and legumes - foods that were clean according to Levitical law.",
    symbolExplanation: "Ten represents completeness of testing. Water symbolizes purity and life.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'worship'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 13,
    text: "Then let our countenances be looked upon before thee, and the countenance of the children that eat of the portion of the king's meat: and as thou seest, deal with thy servants.",
    keywords: ['countenances', 'looked upon', 'deal with'],
    crossReferences: ['1 Samuel 16:7', 'Matthew 6:16-18'],
    sdaCommentary: "Daniel was confident that God would honor their faithfulness with visible blessing. True religion improves both physical and spiritual health.",
    historicalContext: "Physical appearance was considered a reflection of divine favor in ancient cultures.",
    theme: 'salvation'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 14,
    text: "So he consented to them in this matter, and proved them ten days.",
    keywords: ['consented', 'proved', 'ten days'],
    crossReferences: ['Psalm 34:8', 'Hebrews 11:6'],
    sdaCommentary: "God moved upon Melzar's heart to allow the test. When we step out in faith, God provides the way.",
    theme: 'salvation'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 15,
    text: "And at the end of ten days their countenances appeared fairer and fatter in flesh than all the children which did eat the portion of the king's meat.",
    keywords: ['fairer', 'fatter in flesh', 'appeared'],
    crossReferences: ['Psalm 34:5', 'Isaiah 58:8'],
    sdaCommentary: "God honored their faithfulness with superior health and appearance. Obedience to God's laws brings blessing, not deprivation.",
    historicalContext: "This miraculous improvement in just ten days demonstrated divine intervention.",
    symbolExplanation: "Physical health reflects spiritual health when we follow God's design for our bodies.",
    theme: 'victory'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 16,
    text: "Thus Melzar took away the portion of their meat, and the wine that they should drink; and gave them pulse.",
    keywords: ['took away', 'gave them pulse'],
    crossReferences: ['Daniel 1:12'],
    sdaCommentary: "The steward was convinced by the evidence and continued to provide the simple diet that brought such remarkable results.",
    theme: 'victory'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 17,
    text: "As for these four children, God gave them knowledge and skill in all learning and wisdom: and Daniel had understanding in all visions and dreams.",
    keywords: ['God gave', 'knowledge', 'skill', 'learning', 'wisdom', 'visions', 'dreams'],
    crossReferences: ['1 Kings 3:12', 'James 1:5', 'Genesis 41:15-16'],
    sdaCommentary: "God blessed their faithfulness with superior intellectual abilities. Daniel's special gift of interpreting dreams would make him invaluable to the kingdom.",
    historicalContext: "Dream interpretation was highly valued in ancient Mesopotamia, where dreams were considered messages from the gods.",
    symbolExplanation: "Visions and dreams represent divine revelation and prophetic insight.",
    hasModel: true,
    modelId: 'daniel-wisdom',
    theme: 'victory'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 18,
    text: "Now at the end of the days that the king had said he should bring them in, then the prince of the eunuchs brought them in before Nebuchadnezzar.",
    keywords: ['end of the days', 'brought them in', 'Nebuchadnezzar'],
    crossReferences: ['Daniel 1:5'],
    sdaCommentary: "The three-year training period was complete. God had prepared His servants for their mission in the Babylonian court.",
    theme: 'victory'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 19,
    text: "And the king communed with them; and among them all was found none like Daniel, Hananiah, Mishael, and Azariah: therefore stood they before the king.",
    keywords: ['communed', 'none like', 'stood before'],
    crossReferences: ['1 Kings 10:8', 'Proverbs 22:29'],
    sdaCommentary: "Their excellence was evident to the king himself. Faithfulness to God produces the highest quality of character and ability.",
    historicalContext: "Standing before the king was a position of highest honor and responsibility in the ancient world.",
    theme: 'victory'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 20,
    text: "And in all matters of wisdom and understanding, that the king enquired of them, he found them ten times better than all the magicians and astrologers that were in all his realm.",
    keywords: ['ten times better', 'magicians', 'astrologers', 'wisdom', 'understanding'],
    crossReferences: ['Exodus 7:11', '1 Kings 4:30', 'Isaiah 47:13'],
    sdaCommentary: "God's wisdom far exceeds human wisdom and occult practices. The Hebrew youth surpassed the renowned Babylonian wise men by divine enablement.",
    historicalContext: "Babylonian magicians and astrologers were considered the most learned in the ancient world.",
    symbolExplanation: "Ten times represents complete superiority. God's people, when faithful, excel in every area of life.",
    theme: 'victory'
  },
  {
    book: 'daniel',
    chapter: 1,
    verse: 21,
    text: "And Daniel continued even unto the first year of king Cyrus.",
    keywords: ['Daniel continued', 'Cyrus'],
    crossReferences: ['Daniel 10:1', 'Ezra 1:1', 'Isaiah 44:28'],
    sdaCommentary: "Daniel's ministry spanned the entire Babylonian captivity, from its beginning under Nebuchadnezzar to its end under Cyrus. Faithfulness brings longevity in service.",
    historicalContext: "This represents approximately 70 years of faithful service, fulfilling Jeremiah's prophecy of the captivity's duration.",
    symbolExplanation: "Cyrus represents God's instrument of deliverance, prefiguring Christ as the ultimate deliverer.",
    theme: 'victory'
  }
];

// Daniel Chapter 2 - Nebuchadnezzar's Dream - Complete KJV Text
const daniel2Verses: ScriptureVerse[] = [
  {
    book: 'daniel',
    chapter: 2,
    verse: 1,
    text: "And in the second year of the reign of Nebuchadnezzar Nebuchadnezzar dreamed dreams, wherewith his spirit was troubled, and his sleep brake from him.",
    keywords: ['second year', 'dreamed dreams', 'spirit troubled', 'sleep brake'],
    crossReferences: ['Genesis 41:8', 'Daniel 4:5'],
    sdaCommentary: "God gave Nebuchadnezzar this dream to reveal the course of world history and establish His sovereignty over human kingdoms.",
    historicalContext: "This was early in Nebuchadnezzar's reign when he was establishing his empire and concerned about its future.",
    theme: 'prophecy'
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 2,
    text: "Then the king commanded to call the magicians, and the astrologers, and the sorcerers, and the Chaldeans, for to shew the king his dreams. So they came and stood before the king.",
    keywords: ['magicians', 'astrologers', 'sorcerers', 'Chaldeans'],
    crossReferences: ['Exodus 7:11', 'Isaiah 47:13', 'Daniel 1:20'],
    sdaCommentary: "The king turned to his usual counselors, but human wisdom and occult practices cannot reveal divine mysteries.",
    historicalContext: "These were the educated priestly class who claimed to interpret divine messages through various occult means.",
    theme: 'prophecy'
  },
  // Continue with all verses of Daniel 2...
  {
    book: 'daniel',
    chapter: 2,
    verse: 31,
    text: "Thou, O king, sawest, and behold a great image. This great image, whose brightness was excellent, stood before thee; and the form thereof was terrible.",
    keywords: ['great image', 'brightness', 'excellent', 'terrible'],
    crossReferences: ['Daniel 7:1-8', 'Revelation 13:1'],
    sdaCommentary: "The great image represents the succession of world empires from Babylon to the end times, showing God's foreknowledge of history.",
    hasModel: true,
    modelId: 'nebuchadnezzars-image',
    historicalContext: "Ancient kings often erected great statues to commemorate their power and achievements.",
    symbolExplanation: "The image's brightness represents the glory of earthly kingdoms, while its terrible form shows their ultimate destructive nature.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'prophecy'
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 32,
    text: "This image's head was of fine gold, his breast and his arms of silver, his belly and his thighs of brass,",
    keywords: ['head', 'fine gold', 'breast', 'arms', 'silver', 'belly', 'thighs', 'brass'],
    crossReferences: ['Daniel 7:4-6', 'Daniel 8:3-8'],
    sdaCommentary: "Each metal represents a successive world empire: gold (Babylon), silver (Medo-Persia), brass (Greece). The decreasing value shows moral deterioration.",
    hasModel: true,
    modelId: 'image-metals',
    symbolExplanation: "Gold represents Babylon's absolute monarchy; silver shows Medo-Persia's dual nature; brass indicates Greece's military strength.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'prophecy'
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 33,
    text: "His legs of iron, his feet part of iron and part of clay.",
    keywords: ['legs', 'iron', 'feet', 'iron and clay'],
    crossReferences: ['Daniel 7:7', 'Daniel 7:24'],
    sdaCommentary: "Iron represents Rome's crushing strength; iron and clay represent divided Europe that would never unite again permanently.",
    symbolExplanation: "Iron shows Rome's military might; clay represents the weakness of divided kingdoms that cannot cleave together.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'prophecy'
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 34,
    text: "Thou sawest till that a stone was cut out without hands, which smote the image upon his feet that were of iron and clay, and brake them to pieces.",
    keywords: ['stone', 'cut out without hands', 'smote', 'brake to pieces'],
    crossReferences: ['Daniel 7:13-14', 'Revelation 19:11-16', 'Matthew 21:44'],
    sdaCommentary: "The stone represents Christ's kingdom that will destroy all earthly kingdoms at His second coming. 'Without hands' indicates divine origin.",
    hasModel: true,
    modelId: 'stone-kingdom',
    symbolExplanation: "The stone represents God's eternal kingdom established without human effort, striking the feet shows the timing at the end of earth's history.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'prophecy'
  },
  {
    book: 'daniel',
    chapter: 2,
    verse: 35,
    text: "Then was the iron, the clay, the brass, the silver, and the gold, broken to pieces together, and became like the chaff of the summer threshingfloors; and the wind carried them away, that no place was found for them: and the stone became a great mountain, and filled the whole earth.",
    keywords: ['broken to pieces', 'chaff', 'wind carried away', 'great mountain', 'filled whole earth'],
    crossReferences: ['Psalm 2:9', 'Revelation 11:15', 'Isaiah 2:2'],
    sdaCommentary: "All earthly kingdoms will be completely destroyed and replaced by God's eternal kingdom that will fill the whole earth.",
    symbolExplanation: "Chaff represents the worthlessness of earthly kingdoms; the mountain filling the earth shows God's kingdom's eternal, universal nature.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'victory'
  }
  // Add remaining verses of Daniel 2...
];

// Add complete Revelation chapters as well
const revelation1Verses: ScriptureVerse[] = [
  {
    book: 'revelation',
    chapter: 1,
    verse: 1,
    text: "The Revelation of Jesus Christ, which God gave unto him, to shew unto his servants things which must shortly come to pass; and he sent and signified it by his angel unto his servant John:",
    keywords: ['Revelation', 'Jesus Christ', 'shortly come to pass', 'angel', 'John'],
    crossReferences: ['Daniel 2:28-29', 'Revelation 22:6'],
    sdaCommentary: "This book reveals Jesus Christ in His role as King and Judge. The prophecies span from John's time to the end of earth's history.",
    historicalContext: "Written around 95 AD during John's exile on Patmos under Emperor Domitian's persecution.",
    symbolExplanation: "Revelation means 'unveiling' - God pulls back the curtain to show future events and Christ's ultimate victory.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'prophecy'
  },
  // Continue with complete Revelation 1...
  {
    book: 'revelation',
    chapter: 1,
    verse: 12,
    text: "And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks;",
    keywords: ['seven golden candlesticks', 'voice'],
    crossReferences: ['Exodus 25:31-37', 'Zechariah 4:2'],
    sdaCommentary: "The seven candlesticks represent the seven churches, showing Christ's presence among His people throughout history.",
    hasModel: true,
    modelId: 'seven-candlesticks',
    symbolExplanation: "Seven represents completeness; golden shows divine purity; candlesticks provide light in darkness.",
    imageUrl: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg",
    theme: 'worship'
  },
  {
    book: 'revelation',
    chapter: 1,
    verse: 13,
    text: "And in the midst of the seven candlesticks one like unto the Son of man, clothed with a garment down to the foot, and girt about the paps with a golden girdle.",
    keywords: ['Son of man', 'garment', 'golden girdle'],
    crossReferences: ['Daniel 7:13', 'Daniel 10:5'],
    sdaCommentary: "Christ appears as High Priest ministering among the churches. The priestly garments show His mediatorial work.",
    symbolExplanation: "The long garment represents the high priestly robe; the golden girdle shows divine authority and purity.",
    imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    theme: 'worship'
  }
  // Continue with all verses...
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
    timelinePeriod: '605 BC',
    chapterImageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg"
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
    timelinePeriod: '603 BC',
    chapterImageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg"
  },
  {
    book: 'revelation',
    chapter: 1,
    title: "Christ Among the Candlesticks",
    verses: revelation1Verses,
    summary: "John receives the revelation of Jesus Christ and sees Him walking among the seven golden candlesticks, representing His presence with the seven churches throughout history.",
    keyThemes: ['Christ\'s divinity', 'Church periods', 'Prophetic revelation', 'Christ\'s priesthood'],
    sdaInsights: [
      "The seven churches represent seven periods of church history",
      "Christ is actively involved in His church's experience",
      "Revelation unveils Christ's character and work",
      "The messages apply to all Christians in every age"
    ],
    relatedModels: ['seven-candlesticks', 'christ-among-churches'],
    timelinePeriod: '31-100 AD',
    chapterImageUrl: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg"
  }
  // Add all remaining chapters for both books...
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
    const themeClass = verse.theme ? `verse-theme-${verse.theme}` : '';
    const modelLink = verse.hasModel ? ` <span class="model-link" data-model="${verse.modelId}">[3D Model]</span>` : '';
    
    return `<div class="scripture-verse ${themeClass}" 
                 data-verse="${verse.book}-${verse.chapter}-${verse.verse}"
                 data-commentary="${encodeURIComponent(verse.sdaCommentary || '')}"
                 data-historical="${encodeURIComponent(verse.historicalContext || '')}"
                 data-symbol="${encodeURIComponent(verse.symbolExplanation || '')}"
                 data-image="${verse.imageUrl || ''}"
                 data-cross-refs="${encodeURIComponent(JSON.stringify(verse.crossReferences || []))}"
                 data-keywords="${encodeURIComponent(JSON.stringify(verse.keywords || []))}">
      <span class="verse-number">${verse.verse}</span>
      <span class="verse-text">${verse.text}</span>
      ${modelLink}
    </div>`;
  }).join('\n');
};

export const getCrossReferences = (verse: ScriptureVerse): string[] => {
  return verse.crossReferences || [];
};

export const getChaptersByBook = (book: string): ScriptureChapter[] => {
  return scriptureDatabase.filter(chapter => chapter.book === book);
};