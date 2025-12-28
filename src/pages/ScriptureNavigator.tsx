import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Book, Search, Settings, Bookmark, Volume2, Sun, Moon, ZoomIn, ZoomOut } from 'lucide-react';

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

// Sample data for demonstration
const sampleChapter: ScriptureChapter = {
  book: 'daniel',
  chapter: 1,
  title: "Daniel's Faith in God's Health Protocol leads to God Blessing him with the visions of the Book of Daniel - the First Test",
  verses: [
    {
      book: 'daniel',
      chapter: 1,
      verse: 1,
      text: "In the third year of the reign of Jehoiakim king of Judah came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it.",
      keywords: ['Jehoiakim', 'Nebuchadnezzar', 'Babylon', 'Jerusalem'],
      crossReferences: ['2 Kings 24:1', '2 Chronicles 36:5-7', 'Jeremiah 25:1'],
      sdaCommentary: "This marks the beginning of the 'times of the Gentiles' and the 70-year Babylonian captivity prophesied by Jeremiah.",
      historicalContext: "Nebuchadnezzar's first campaign against Jerusalem established Babylonian dominance over Judah.",
      imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
      theme: 'prophecy'
    },
    {
      book: 'daniel',
      chapter: 1,
      verse: 8,
      text: "But Daniel purposed in his heart that he would not defile himself with the portion of the king's meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.",
      keywords: ['purposed in his heart', 'not defile', 'requested'],
      crossReferences: ['Leviticus 11', 'Acts 15:20', 'Romans 14:23'],
      sdaCommentary: "Daniel's decision demonstrates that faithfulness in small matters prepares us for greater tests.",
      historicalContext: "This decision required great courage as it could have resulted in death for refusing the king's provision.",
      hasModel: true,
      modelId: 'daniel-diet-test',
      symbolExplanation: "The heart represents the center of decision-making and moral choice.",
      imageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
      theme: 'worship'
    }
  ],
  summary: "Daniel and his three friends are taken captive to Babylon where they face their first test of faithfulness regarding God's dietary laws.",
  keyThemes: ['Faithfulness in small things', 'Health principles', 'God\'s sovereignty', 'Preparation for service'],
  sdaInsights: [
    "Health reform is part of the third angel's message",
    "Faithfulness in diet prepares for greater tests",
    "God honors those who honor Him"
  ],
  relatedModels: ['daniel-diet-test'],
  timelinePeriod: '605 BC',
  chapterImageUrl: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg"
};

const ScriptureNavigator: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedBook, setSelectedBook] = useState(searchParams.get('book') || 'daniel');
  const [selectedChapter, setSelectedChapter] = useState(parseInt(searchParams.get('chapter') || '1'));
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarkedVerses, setBookmarkedVerses] = useState<string[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [hoveredVerse, setHoveredVerse] = useState<string | null>(null);

  const currentChapter = sampleChapter; // Using sample data for now

  const handleVerseHover = (verseKey: string) => {
    setHoveredVerse(verseKey);
  };

  const handleVerseLeave = () => {
    setHoveredVerse(null);
  };

  const toggleBookmark = (verseKey: string) => {
    setBookmarkedVerses(prev => 
      prev.includes(verseKey) 
        ? prev.filter(v => v !== verseKey)
        : [...prev, verseKey]
    );
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-lg';
      case 'extra-large': return 'text-xl';
      default: return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'} py-8`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="text-4xl font-bold mb-4">
            Interactive Scripture Navigator
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore Daniel and Revelation with enhanced commentary, cross-references, and 3D models
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Book and Chapter Selection */}
            <div className="flex items-center gap-4">
              <select
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="daniel">Daniel</option>
                <option value="revelation">Revelation</option>
              </select>
              
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {Array.from({length: 12}, (_, i) => (
                  <option key={i+1} value={i+1}>Chapter {i+1}</option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search verses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>

            {/* Settings */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Font Size:</label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="px-3 py-1 border border-gray-200 rounded text-sm"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra Large</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Chapter Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Chapter Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h2 className="text-3xl font-bold mb-2">
              {currentChapter.book.charAt(0).toUpperCase() + currentChapter.book.slice(1)} {currentChapter.chapter}
            </h2>
            <h3 className="text-xl mb-4">{currentChapter.title}</h3>
            <p className="text-blue-100 mb-4">{currentChapter.summary}</p>
            <div className="flex flex-wrap gap-2">
              {currentChapter.keyThemes.map((theme, index) => (
                <span key={index} className="px-3 py-1 bg-blue-500 bg-opacity-50 rounded-full text-sm">
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Verses */}
          <div className="p-8">
            <div className={`space-y-4 ${getFontSizeClass()}`}>
              {currentChapter.verses.map((verse) => {
                const verseKey = `${verse.book}-${verse.chapter}-${verse.verse}`;
                const isBookmarked = bookmarkedVerses.includes(verseKey);
                const isHovered = hoveredVerse === verseKey;

                return (
                  <div
                    key={verseKey}
                    className={`relative group p-4 rounded-lg transition-all duration-200 cursor-pointer
                      ${isHovered ? 'bg-blue-50 shadow-md z-[1000]' : 'hover:bg-gray-50'}
                      ${verse.theme ? `border-l-4 border-${verse.theme === 'prophecy' ? 'purple' : verse.theme === 'worship' ? 'blue' : 'green'}-400` : ''}
                    `}
                    onMouseEnter={() => handleVerseHover(verseKey)}
                    onMouseLeave={handleVerseLeave}
                    style={{ position: 'relative', zIndex: isHovered ? 1000 : 1 }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        {verse.verse}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 leading-relaxed mb-2">{verse.text}</p>
                        
                        {/* Keywords */}
                        {verse.keywords && verse.keywords.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {verse.keywords.map((keyword, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* 3D Model Link */}
                        {verse.hasModel && (
                          <button className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors">
                            <Book className="w-3 h-3" />
                            View 3D Model
                          </button>
                        )}
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={() => toggleBookmark(verseKey)}
                        className={`p-1 rounded transition-colors ${isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Hover Tooltip */}
                    {isHovered && (
                      <div 
                        className="absolute left-full top-0 ml-4 w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4 overflow-visible"
                        style={{ 
                          zIndex: 9999,
                          transform: 'translateZ(0)',
                          pointerEvents: 'auto'
                        }}
                      >
                        {/* SDA Commentary */}
                        {verse.sdaCommentary && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-blue-600 mb-1">SDA Commentary</h4>
                            <p className="text-sm text-gray-700">{verse.sdaCommentary}</p>
                          </div>
                        )}

                        {/* Historical Context */}
                        {verse.historicalContext && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-green-600 mb-1">Historical Context</h4>
                            <p className="text-sm text-gray-700">{verse.historicalContext}</p>
                          </div>
                        )}

                        {/* Symbol Explanation */}
                        {verse.symbolExplanation && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-purple-600 mb-1">Symbolism</h4>
                            <p className="text-sm text-gray-700">{verse.symbolExplanation}</p>
                          </div>
                        )}

                        {/* Cross References */}
                        {verse.crossReferences && verse.crossReferences.length > 0 && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-orange-600 mb-1">Cross References</h4>
                            <div className="flex flex-wrap gap-1">
                              {verse.crossReferences.map((ref, index) => (
                                <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                                  {ref}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Image */}
                        {verse.imageUrl && (
                          <div className="mt-3">
                            <img 
                              src={verse.imageUrl} 
                              alt="Biblical illustration"
                              className="w-full h-32 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chapter Insights */}
          <div className="bg-gray-50 p-8">
            <h3 className="text-xl font-bold mb-4">SDA Insights</h3>
            <ul className="space-y-2">
              {currentChapter.sdaInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptureNavigator;