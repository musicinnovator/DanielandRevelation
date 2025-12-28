import React, { useState, useEffect } from 'react';
import { Book, Search, Bookmark, Settings, ChevronDown, ChevronRight, Eye, Volume2, ExternalLink } from 'lucide-react';
import { 
  scriptureDatabase, 
  getScriptureChapter, 
  searchScripture, 
  getVersesByKeyword,
  ScriptureChapter,
  ScriptureVerse 
} from '../data/scriptureData';

const ScriptureNavigator: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<string>('daniel');
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [currentChapter, setCurrentChapter] = useState<ScriptureChapter | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ScriptureVerse[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(16);
  const [showCommentary, setShowCommentary] = useState<boolean>(true);
  const [hoveredVerse, setHoveredVerse] = useState<string | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<{[key: string]: boolean}>({});

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

  const toggleBookmark = (verseId: string) => {
    setBookmarks(prev => 
      prev.includes(verseId) 
        ? prev.filter(id => id !== verseId)
        : [...prev, verseId]
    );
  };

  const toggleChapterExpansion = (book: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [book]: !prev[book]
    }));
  };

  const getVerseId = (verse: ScriptureVerse) => 
    `${verse.book}-${verse.chapter}-${verse.verse}`;

  const getThemeColor = (theme?: string) => {
    const colors = {
      prophecy: 'border-l-blue-500 bg-blue-50',
      judgment: 'border-l-red-500 bg-red-50',
      salvation: 'border-l-green-500 bg-green-50',
      worship: 'border-l-purple-500 bg-purple-50',
      persecution: 'border-l-orange-500 bg-orange-50',
      victory: 'border-l-yellow-500 bg-yellow-50'
    };
    return colors[theme as keyof typeof colors] || 'border-l-gray-500 bg-gray-50';
  };

  const availableBooks = [...new Set(scriptureDatabase.map(ch => ch.book))];
  const availableChapters = scriptureDatabase
    .filter(ch => ch.book === selectedBook)
    .map(ch => ch.chapter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Book className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-800">Interactive Scripture Navigator</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search scriptures, keywords, or themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-3">Reading Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Font Size</label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">{fontSize}px</span>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={showCommentary}
                      onChange={(e) => setShowCommentary(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Show Commentary</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Book and Chapter Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Navigation</h2>
              
              {/* Book Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-700">Books</h3>
                {availableBooks.map(book => (
                  <div key={book} className="mb-2">
                    <button
                      onClick={() => toggleChapterExpansion(book)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                        selectedBook === book ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="capitalize font-medium">{book}</span>
                      {expandedChapters[book] ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                      }
                    </button>
                    
                    {expandedChapters[book] && (
                      <div className="ml-4 mt-2 space-y-1">
                        {scriptureDatabase
                          .filter(ch => ch.book === book)
                          .map(chapter => (
                            <button
                              key={`${book}-${chapter.chapter}`}
                              onClick={() => {
                                setSelectedBook(book);
                                setSelectedChapter(chapter.chapter);
                              }}
                              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                                selectedBook === book && selectedChapter === chapter.chapter
                                  ? 'bg-blue-500 text-white'
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              Chapter {chapter.chapter}
                            </button>
                          ))
                        }
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bookmarks */}
              {bookmarks.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2 text-gray-700 flex items-center">
                    <Bookmark className="w-4 h-4 mr-1" />
                    Bookmarks
                  </h3>
                  <div className="space-y-1">
                    {bookmarks.slice(0, 5).map(bookmark => (
                      <div key={bookmark} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        {bookmark}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Search Results ({searchResults.length})
                </h2>
                <div className="space-y-4">
                  {searchResults.slice(0, 10).map(verse => (
                    <div
                      key={getVerseId(verse)}
                      className={`p-4 rounded-lg border-l-4 ${getThemeColor(verse.theme)} hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-blue-600 capitalize">
                              {verse.book} {verse.chapter}:{verse.verse}
                            </span>
                            {verse.theme && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {verse.theme}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-700 leading-relaxed" style={{ fontSize: `${fontSize}px` }}>
                            {verse.text}
                          </p>
                          {showCommentary && verse.sdaCommentary && (
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-800 italic">{verse.sdaCommentary}</p>
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => toggleBookmark(getVerseId(verse))}
                          className={`ml-4 p-1 rounded ${
                            bookmarks.includes(getVerseId(verse))
                              ? 'text-yellow-500'
                              : 'text-gray-400 hover:text-yellow-500'
                          }`}
                        >
                          <Bookmark className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Current Chapter */}
            {currentChapter && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {currentChapter.title}
                  </h1>
                  <p className="text-gray-600 mb-4">{currentChapter.summary}</p>
                  
                  {/* Chapter Metadata */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Key Themes</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentChapter.keyThemes.map(theme => (
                          <span key={theme} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Time Period</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {currentChapter.timelinePeriod}
                      </span>
                    </div>
                  </div>

                  {/* SDA Insights */}
                  {showCommentary && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-700 mb-2">SDA Insights</h3>
                      <ul className="space-y-2">
                        {currentChapter.sdaInsights.map((insight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Verses */}
                <div className="space-y-4">
                  {currentChapter.verses.map(verse => (
                    <div
                      key={getVerseId(verse)}
                      className={`relative p-4 rounded-lg border-l-4 ${getThemeColor(verse.theme)} hover:shadow-md transition-all duration-200`}
                      onMouseEnter={() => setHoveredVerse(getVerseId(verse))}
                      onMouseLeave={() => setHoveredVerse(null)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-bold text-blue-600 text-lg">
                              {verse.verse}
                            </span>
                            {verse.theme && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {verse.theme}
                              </span>
                            )}
                            {verse.hasModel && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                3D Model
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: `${fontSize}px` }}>
                            {verse.text}
                          </p>

                          {/* Keywords */}
                          {verse.keywords && verse.keywords.length > 0 && (
                            <div className="mb-3">
                              <span className="text-sm font-medium text-gray-600 mr-2">Keywords:</span>
                              <div className="inline-flex flex-wrap gap-1">
                                {verse.keywords.map(keyword => (
                                  <span key={keyword} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Commentary and Context */}
                          {showCommentary && (
                            <div className="space-y-3">
                              {verse.sdaCommentary && (
                                <div className="p-3 bg-blue-50 rounded-lg">
                                  <h4 className="font-medium text-blue-800 mb-1">SDA Commentary</h4>
                                  <p className="text-sm text-blue-700">{verse.sdaCommentary}</p>
                                </div>
                              )}
                              
                              {verse.historicalContext && (
                                <div className="p-3 bg-green-50 rounded-lg">
                                  <h4 className="font-medium text-green-800 mb-1">Historical Context</h4>
                                  <p className="text-sm text-green-700">{verse.historicalContext}</p>
                                </div>
                              )}
                              
                              {verse.symbolExplanation && (
                                <div className="p-3 bg-purple-50 rounded-lg">
                                  <h4 className="font-medium text-purple-800 mb-1">Symbolic Meaning</h4>
                                  <p className="text-sm text-purple-700">{verse.symbolExplanation}</p>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Cross References */}
                          {verse.crossReferences && verse.crossReferences.length > 0 && (
                            <div className="mt-3">
                              <span className="text-sm font-medium text-gray-600 mr-2">Cross References:</span>
                              <div className="inline-flex flex-wrap gap-1">
                                {verse.crossReferences.map(ref => (
                                  <span key={ref} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded cursor-pointer hover:bg-yellow-200">
                                    {ref}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col space-y-2 ml-4">
                          <button
                            onClick={() => toggleBookmark(getVerseId(verse))}
                            className={`p-2 rounded-lg transition-colors ${
                              bookmarks.includes(getVerseId(verse))
                                ? 'text-yellow-500 bg-yellow-50'
                                : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
                            }`}
                          >
                            <Bookmark className="w-4 h-4" />
                          </button>
                          
                          {verse.audioUrl && (
                            <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                              <Volume2 className="w-4 h-4" />
                            </button>
                          )}
                          
                          {verse.hasModel && (
                            <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Hover Tooltip */}
                      {hoveredVerse === getVerseId(verse) && verse.keywords && (
                        <div className="absolute top-0 right-0 transform translate-x-full -translate-y-2 ml-4 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-[9999] max-w-xs">
                          <div className="font-medium mb-1">Quick Info</div>
                          <div className="text-xs opacity-90">
                            Keywords: {verse.keywords.join(', ')}
                          </div>
                          {verse.theme && (
                            <div className="text-xs opacity-90 mt-1">
                              Theme: {verse.theme}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptureNavigator;