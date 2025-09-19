import React, { useState, useEffect } from 'react';
import { Book, Eye, ArrowLeft, ArrowRight, ExternalLink, Layers } from 'lucide-react';

const ScriptureNavigator = () => {
  const [selectedBook, setSelectedBook] = useState('daniel');
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [showModels, setShowModels] = useState(false);

  const books = {
    daniel: { name: 'Daniel', chapters: 12, color: 'blue' },
    revelation: { name: 'Revelation', chapters: 22, color: 'purple' }
  };

  const danielChapterTitles = {
    1: "Daniel's Faith in God's Health Protocol leads to God Blessing him with the visions of the Book of Daniel - the First Test",
    2: "Nebuchadnezzar's Dream (The 4 Great Kingdoms of World History)- The Great Image and its interpretation by God given through Daniel",
    3: "The Fiery Furnace Test - the Second Test",
    4: "Nebuchadnezzar's Tree Dream and Its Fulfillment as given in his own testimony",
    5: "Belshazzar's Feast - The Handwriting on the Wall with the Judgment/Execution on Babylon",
    6: "Daniel in the Lion's Den - the Third Test",
    7: "The Four Beasts Vision (Lion, Bear, Leopard, Terrible Beast) - ",
    8: "The Ram and Goat Vision",
    9: "The 70 Week Prophecy",
    10: "Daniel's Final Vision Begins",
    11: "Kings of North and South",
    12: "The Time of the End"
  };

  const revelationChapterTitles = {
    1: "Christ Among the Candlesticks",
    2: "Messages to Ephesus, Smyrna, Pergamos, Thyatira",
    3: "Messages to Sardis, Philadelphia, Laodicea",
    4: "The Throne Room of Heaven",
    5: "The Lamb and the Seven Seals",
    6: "The First Six Seals",
    7: "The 144,000 and Great Multitude",
    8: "The Seventh Seal and First Four Trumpets",
    9: "The Fifth and Sixth Trumpets",
    10: "The Mighty Angel and Little Book",
    11: "The Two Witnesses",
    12: "The Woman and the Dragon",
    13: "The Beast from Sea and Earth",
    14: "The 144,000 and Three Angels",
    15: "The Seven Last Plagues",
    16: "The Seven Vials of Wrath",
    17: "The Great Whore",
    18: "Babylon's Fall",
    19: "Christ's Second Coming",
    20: "The Millennium and Final Judgment",
    21: "New Heaven and New Earth",
    22: "The River of Life and Final Words"
  };

  const getCurrentTitle = () => {
    const titles = selectedBook === 'daniel' ? danielChapterTitles : revelationChapterTitles;
    return titles[selectedChapter] || '';
  };

  const sampleVerse = selectedBook === 'daniel' && selectedChapter === 2 
    ? "Da:2:31: Thou, O king, sawest, and behold a great image. This great image, whose brightness was excellent, stood before thee; and the form thereof was terrible."
    : selectedBook === 'revelation' && selectedChapter === 1
    ? "Re:1:12: And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks;"
    : "Select a chapter to view scripture text with interactive models and commentary.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scripture Navigator
          </h1>
          <p className="text-xl text-gray-600">
            Explore Daniel and Revelation with linked 3D models and SDA commentary
          </p>
        </div>

        {/* Book Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => {
                setSelectedBook('daniel');
                setSelectedChapter(1);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedBook === 'daniel'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Book className="w-5 h-5" />
              Daniel
            </button>
            <button
              onClick={() => {
                setSelectedBook('revelation');
                setSelectedChapter(1);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedBook === 'revelation'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Eye className="w-5 h-5" />
              Revelation
            </button>
          </div>
        </div>

        {/* Chapter Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {books[selectedBook].name} - Chapter {selectedChapter}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedChapter(Math.max(1, selectedChapter - 1))}
                disabled={selectedChapter === 1}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedChapter(Math.min(books[selectedBook].chapters, selectedChapter + 1))}
                disabled={selectedChapter === books[selectedBook].chapters}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            {getCurrentTitle()}
          </h3>

          {/* Chapter Grid */}
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2 mb-8">
            {Array.from({ length: books[selectedBook].chapters }, (_, i) => i + 1).map((chapter) => (
              <button
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className={`aspect-square rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedChapter === chapter
                    ? selectedBook === 'daniel'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-purple-600 text-white shadow-lg'
                    : selectedBook === 'daniel'
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                }`}
              >
                {chapter}
              </button>
            ))}
          </div>
        </div>

        {/* Scripture Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scripture Text */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Scripture Text (KJV)
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowModels(!showModels)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    showModels
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  3D Models
                </button>
              </div>
            </div>

            <div className="scripture-verse text-gray-800 text-lg leading-relaxed">
              {sampleVerse}
            </div>

            {/* Interactive Elements */}
            {showModels && (
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Related 3D Models
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedBook === 'daniel' && selectedChapter === 2 && (
                    <>
                      <div className="model-container">
                        <div className="model-placeholder">
                          Nebuchadnezzar's Image
                        </div>
                      </div>
                      <div className="model-container">
                        <div className="model-placeholder">
                          The Stone Kingdom
                        </div>
                      </div>
                    </>
                  )}
                  {selectedBook === 'revelation' && selectedChapter === 1 && (
                    <>
                      <div className="model-container">
                        <div className="model-placeholder">
                          Seven Golden Candlesticks
                        </div>
                      </div>
                      <div className="model-container">
                        <div className="model-placeholder">
                          Christ Among Candlesticks
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Commentary Sidebar */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              SDA Commentary
            </h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-900 mb-2">Key Insight</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedBook === 'daniel' && selectedChapter === 2
                    ? "The great image represents the succession of world empires from Babylon to the end times, culminating in Christ's eternal kingdom."
                    : selectedBook === 'revelation' && selectedChapter === 1
                    ? "The seven golden candlesticks represent the seven churches, showing Christ's presence among His people throughout history."
                    : "Select a chapter to view detailed SDA commentary and theological insights."
                  }
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cross References</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer">
                    <ExternalLink className="w-3 h-3" />
                    Daniel 7:13-14
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer">
                    <ExternalLink className="w-3 h-3" />
                    Revelation 19:11-16
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Prophetic Timeline</h4>
                <p className="text-gray-700 text-sm">
                  This chapter connects to the prophetic timeline at 605 BC - 1844 AD period.
                </p>
                <button className="mt-2 text-green-600 hover:text-green-800 text-sm font-medium flex items-center gap-1">
                  View on Timeline <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <button className="p-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-800 font-medium transition-colors">
              Daniel 2 Image
            </button>
            <button className="p-3 bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-800 font-medium transition-colors">
              Four Beasts
            </button>
            <button className="p-3 bg-green-100 hover:bg-green-200 rounded-lg text-green-800 font-medium transition-colors">
              70 Week Prophecy
            </button>
            <button className="p-3 bg-orange-100 hover:bg-orange-200 rounded-lg text-orange-800 font-medium transition-colors">
              Seven Churches
            </button>
            <button className="p-3 bg-red-100 hover:bg-red-200 rounded-lg text-red-800 font-medium transition-colors">
              Seven Seals
            </button>
            <button className="p-3 bg-teal-100 hover:bg-teal-200 rounded-lg text-teal-800 font-medium transition-colors">
              New Jerusalem
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Support This Ministry</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Help us continue providing free biblical study tools with your generous support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* PayPal Donation Button */}
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=Z2T57WZMGV9UQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg transition-all duration-300"
            >
              Donate via PayPal
            </a>

            {/* Stripe Payment Link Button */}
            <a
              href="https://buy.stripe.com/eVq9AUaZD7aoeUE3MU4Vy00"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-all duration-300"
            >
              Donate via Stripe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptureNavigator;