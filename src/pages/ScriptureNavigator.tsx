import React, { useState, useEffect } from 'react';
import { Book, Search, Settings, Moon, Sun, Volume2, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { scriptureDatabase, getScriptureChapter, searchScripture, ScriptureVerse, ScriptureChapter } from '../data/scriptureData';

const ScriptureNavigator: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<string>('daniel');
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [currentChapter, setCurrentChapter] = useState<ScriptureChapter | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ScriptureVerse[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<string>('text-base');
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Set<string>>(new Set());
  const [hoveredVerse, setHoveredVerse] = useState<string | null>(null);

  useEffect(() => {
    const chapter = getScriptureChapter(selectedBook, selectedChapter);
    setCurrentChapter(chapter);
  }, [selectedBook, selectedChapter]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchScripture(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleBookmarkVerse = (verseId: string) => {
    const newBookmarks = new Set(bookmarkedVerses);
    if (newBookmarks.has(verseId)) {
      newBookmarks.delete(verseId);
    } else {
      newBookmarks.add(verseId);
    }
    setBookmarkedVerses(newBookmarks);
  };

  const getVerseId = (verse: ScriptureVerse) => {
    return `${verse.book}-${verse.chapter}-${verse.verse}`;
  };

  const getThemeColor = (theme?: string) => {
    switch (theme) {
      case 'prophecy': return 'border-l-purple-500 bg-purple-50';
      case 'judgment': return 'border-l-red-500 bg-red-50';
      case 'salvation': return 'border-l-green-500 bg-green-50';
      case 'worship': return 'border-l-blue-500 bg-blue-50';
      case 'persecution': return 'border-l-orange-500 bg-orange-50';
      case 'victory': return 'border-l-yellow-500 bg-yellow-50';
      default: return 'border-l-gray-300 bg-gray-50';
    }
  };

  const availableBooks = ['daniel', 'revelation'];
  const availableChapters = scriptureDatabase
    .filter(ch => ch.book === selectedBook)
    .map(ch => ch.chapter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Book className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scripture Navigator
            </h1>
          </div>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search scriptures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>

            {/* Settings Toggle */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className={`mb-6 p-4 rounded-lg border ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
          }`}>
            <h3 className="text-lg font-semibold mb-4">Reading Settings</h3>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Font Size</label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className={`px-3 py-2 rounded border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="text-sm">Small</option>
                  <option value="text-base">Medium</option>
                  <option value="text-lg">Large</option>
                  <option value="text-xl">Extra Large</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Book Selection */}
          <div className={`p-4 rounded-lg border ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
          }`}>
            <h3 className="text-lg font-semibold mb-3">Select Book</h3>
            <div className="flex gap-2">
              {availableBooks.map(book => (
                <button
                  key={book}
                  onClick={() => {
                    setSelectedBook(book);
                    setSelectedChapter(1);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedBook === book
                      ? 'bg-blue-600 text-white'
                      : darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {book.charAt(0).toUpperCase() + book.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Selection */}
          <div className={`p-4 rounded-lg border ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
          }`}>
            <h3 className="text-lg font-semibold mb-3">Select Chapter</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedChapter(Math.max(1, selectedChapter - 1))}
                disabled={selectedChapter <= 1}
                className={`p-2 rounded ${
                  selectedChapter <= 1 
                    ? 'opacity-50 cursor-not-allowed' 
                    : darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(Number(e.target.value))}
                className={`px-3 py-2 rounded border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {availableChapters.map(chapter => (
                  <option key={chapter} value={chapter}>
                    Chapter {chapter}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setSelectedChapter(Math.min(availableChapters.length, selectedChapter + 1))}
                disabled={selectedChapter >= availableChapters.length}
                className={`p-2 rounded ${
                  selectedChapter >= availableChapters.length 
                    ? 'opacity-50 cursor-not-allowed' 
                    : darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className={`mb-6 p-4 rounded-lg border ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
          }`}>
            <h3 className="text-lg font-semibold mb-3">Search Results ({searchResults.length})</h3>
            <div className="space-y-2">
              {searchResults.slice(0, 10).map((verse, index) => (
                <div
                  key={index}
                  className={`p-3 rounded border-l-4 ${getThemeColor(verse.theme)} cursor-pointer hover:shadow-md transition-shadow`}
                  onClick={() => {
                    setSelectedBook(verse.book);
                    setSelectedChapter(verse.chapter);
                    setSearchQuery('');
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold text-blue-600">
                        {verse.book.charAt(0).toUpperCase() + verse.book.slice(1)} {verse.chapter}:{verse.verse}
                      </span>
                      <p className={`mt-1 ${fontSize}`}>{verse.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chapter Content */}
        {currentChapter && (
          <div className={`p-6 rounded-lg border ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
          }`}>
            {/* Chapter Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {currentChapter.book.charAt(0).toUpperCase() + currentChapter.book.slice(1)} Chapter {currentChapter.chapter}
              </h2>
              <h3 className="text-lg text-blue-600 mb-4">{currentChapter.title}</h3>
              <p className={`${fontSize} text-gray-600 mb-4`}>{currentChapter.summary}</p>
              
              {/* Key Themes */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentChapter.keyThemes.map((theme, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Scripture Text */}
            <div className="space-y-4">
              {currentChapter.verses.map((verse) => {
                const verseId = getVerseId(verse);
                const isBookmarked = bookmarkedVerses.has(verseId);
                const isHovered = hoveredVerse === verseId;

                return (
                  <div
                    key={verseId}
                    className={`relative p-4 rounded-lg border-l-4 transition-all duration-200 ${
                      getThemeColor(verse.theme)
                    } ${isHovered ? 'shadow-lg transform scale-[1.02]' : 'hover:shadow-md'}`}
                    onMouseEnter={() => setHoveredVerse(verseId)}
                    onMouseLeave={() => setHoveredVerse(null)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {verse.verse}
                      </span>
                      <div className="flex-1">
                        <p className={`${fontSize} leading-relaxed font-serif`}>
                          {verse.text}
                        </p>
                        
                        {/* Verse Actions */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => handleBookmarkVerse(verseId)}
                            className={`p-1 rounded transition-colors ${
                              isBookmarked 
                                ? 'text-yellow-500 hover:text-yellow-600' 
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                          >
                            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                          </button>
                          
                          {verse.hasModel && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">
                              3D Model Available
                            </span>
                          )}
                          
                          {verse.theme && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                              {verse.theme}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Hover Tooltip */}
                    {isHovered && verse.sdaCommentary && (
                      <div className={`absolute z-10 left-0 top-full mt-2 p-4 rounded-lg shadow-xl border max-w-md ${
                        darkMode ? 'bg-gray-900 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                      }`}>
                        <h4 className="font-semibold text-blue-600 mb-2">SDA Commentary</h4>
                        <p className="text-sm mb-3">{verse.sdaCommentary}</p>
                        
                        {verse.historicalContext && (
                          <>
                            <h5 className="font-semibold text-green-600 mb-1">Historical Context</h5>
                            <p className="text-sm mb-3">{verse.historicalContext}</p>
                          </>
                        )}
                        
                        {verse.symbolExplanation && (
                          <>
                            <h5 className="font-semibold text-purple-600 mb-1">Symbol Explanation</h5>
                            <p className="text-sm mb-3">{verse.symbolExplanation}</p>
                          </>
                        )}
                        
                        {verse.crossReferences && verse.crossReferences.length > 0 && (
                          <>
                            <h5 className="font-semibold text-orange-600 mb-1">Cross References</h5>
                            <div className="flex flex-wrap gap-1">
                              {verse.crossReferences.map((ref, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                                >
                                  {ref}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {verse.imageUrl && (
                          <div className="mt-3">
                            <img
                              src={verse.imageUrl}
                              alt="Biblical context"
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

            {/* Chapter Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-3">SDA Insights</h4>
              <ul className="space-y-2">
                {currentChapter.sdaInsights.map((insight, index) => (
                  <li key={index} className={`${fontSize} flex items-start gap-2`}>
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScriptureNavigator;