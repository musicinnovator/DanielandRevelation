import { ScriptureVerse, ScriptureChapter } from '../scriptureData';

export const revelation15Verses: ScriptureVerse[] = [
  { book: 'revelation', chapter: 15, verse: 1, text: "And I saw another sign in heaven, great and marvellous, seven angels having the seven last plagues; for in them is filled up the wrath of God.", keywords: ['seven last plagues', 'wrath of God filled up'], crossReferences: ['Revelation 16:1', 'Revelation 21:9'], sdaCommentary: "Seven last plagues are God's final judgments on unrepentant wicked after probation closes.", theme: 'judgment' },
  { book: 'revelation', chapter: 15, verse: 2, text: "And I saw as it were a sea of glass mingled with fire: and them that had gotten the victory over the beast, and over his image, and over his mark, and over the number of his name, stand on the sea of glass, having the harps of God.", keywords: ['sea of glass', 'victory over beast'], crossReferences: ['Revelation 4:6', 'Revelation 13:15-17'], sdaCommentary: "Redeemed who refused mark stand victorious in heaven. Fire = trials endured.", theme: 'victory' },
  { book: 'revelation', chapter: 15, verse: 3, text: "And they sing the song of Moses the servant of God, and the song of the Lamb, saying, Great and marvellous are thy works, Lord God Almighty; just and true are thy ways, thou King of saints.", keywords: ['song of Moses', 'song of Lamb'], crossReferences: ['Exodus 15:1-21', 'Deuteronomy 32:4'], sdaCommentary: "Moses' song celebrated deliverance from Egypt; Lamb's song celebrates deliverance from sin.", theme: 'worship' },
  { book: 'revelation', chapter: 15, verse: 4, text: "Who shall not fear thee, O Lord, and glorify thy name? for thou only art holy: for all nations shall come and worship before thee; for thy judgments are made manifest.", keywords: ['thou only art holy', 'judgments made manifest'], crossReferences: ['Psalm 86:9', 'Jeremiah 10:7'], sdaCommentary: "Universal worship acknowledges God's holiness and justice. His judgments revealed as righteous.", theme: 'worship' },
  { book: 'revelation', chapter: 15, verse: 5, text: "And after that I looked, and, behold, the temple of the tabernacle of the testimony in heaven was opened:", keywords: ['temple opened'], crossReferences: ['Revelation 11:19', 'Revelation 14:15'], sdaCommentary: "Heavenly sanctuary opens revealing Most Holy Place. Shows source of plagues - God's temple where law resides.", hasModel: true, modelId: 'heavenly-sanctuary', theme: 'judgment' },
  { book: 'revelation', chapter: 15, verse: 6, text: "And the seven angels came out of the temple, having the seven plagues, clothed in pure and white linen, and having their breasts girded with golden girdles.", keywords: ['seven angels', 'pure white linen', 'golden girdles'], crossReferences: ['Ezekiel 9:2', 'Revelation 1:13'], sdaCommentary: "Angels emerge from God's presence with plagues. White linen and gold show purity and authority.", theme: 'judgment' },
  { book: 'revelation', chapter: 15, verse: 7, text: "And one of the four beasts gave unto the seven angels seven golden vials full of the wrath of God, who liveth for ever and ever.", keywords: ['seven golden vials', 'wrath of God'], crossReferences: ['Revelation 4:6', 'Revelation 5:8'], sdaCommentary: "Cherubim give vials of wrath. God's judgments proceed from His throne.", theme: 'judgment' },
  { book: 'revelation', chapter: 15, verse: 8, text: "And the temple was filled with smoke from the glory of God, and from his power; and no man was able to enter into the temple, till the seven plagues of the seven angels were fulfilled.", keywords: ['temple filled with smoke', 'no man able to enter'], crossReferences: ['Exodus 40:34-35', '1 Kings 8:10-11'], sdaCommentary: "God's glory fills temple preventing entrance - probation closed. Christ's mediatorial work finished.", theme: 'judgment' }
];

export const revelation15Chapter: ScriptureChapter = {
  book: 'revelation',
  chapter: 15,
  title: "Preparation for the Seven Last Plagues",
  verses: revelation15Verses,
  summary: "Seven angels receive seven last plagues to complete God's wrath. Redeemed who overcame the beast stand on sea of glass singing song of Moses and Lamb. Temple opens, angels emerge with plagues. Temple fills with smoke - probation closed.",
  keyThemes: ['Seven last plagues', 'Victory over beast', 'Song of Moses and Lamb', 'Probation closed'],
  sdaInsights: ["Seven last plagues fall after probation closes", "Redeemed stand victorious having refused mark", "Plagues proceed from Most Holy Place", "Temple filled with smoke = intercession ceased"],
  relatedModels: ['heavenly-sanctuary'],
  timelinePeriod: 'After Probation Closes',
  chapterImageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg"
};
