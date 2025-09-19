import React, { useState } from 'react';
import { Search, Book, Eye, Crown, Flame, Waves, Mountain } from 'lucide-react';

const SymbolismGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Symbols', icon: Book },
    { id: 'beasts', name: 'Beasts & Animals', icon: Eye },
    { id: 'objects', name: 'Objects & Items', icon: Crown },
    { id: 'natural', name: 'Natural Elements', icon: Mountain },
    { id: 'religious', name: 'Religious Symbols', icon: Flame },
    { id: 'time', name: 'Time Symbols', icon: Eye }
  ];

  const symbols = [
    {
      id: 1,
      name: "Beast",
      category: "beasts",
      biblicalDefinition: "Kingdom or political power",
      scriptureRef: "Daniel 7:17, 23",
      description: "In Bible prophecy, beasts represent kingdoms or political powers that rule over nations",
      examples: ["Lion (Babylon)", "Bear (Medo-Persia)", "Leopard (Greece)", "Dreadful Beast (Rome)"],
      relatedVerses: ["Da:7:17", "Da:7:23", "Re:13:1"],
      sdaNote: "Beasts rising from the sea represent kingdoms arising from populated areas"
    },
    {
      id: 2,
      name: "Woman (Pure)",
      category: "religious",
      biblicalDefinition: "True church or people of God",
      scriptureRef: "2 Corinthians 11:2, Ephesians 5:25-27",
      description: "A pure woman represents God's faithful church, clothed in righteousness",
      examples: ["Woman in Revelation 12", "Bride of Christ", "New Jerusalem"],
      relatedVerses: ["Re:12:1", "Re:19:7-8", "Re:21:2"],
      sdaNote: "Represents the faithful remnant church keeping God's commandments"
    },
    {
      id: 3,
      name: "Woman (Harlot)",
      category: "religious", 
      biblicalDefinition: "Apostate church or unfaithful people",
      scriptureRef: "Jeremiah 3:20, Ezekiel 16:32",
      description: "A harlot woman represents religious apostasy and unfaithfulness to God",
      examples: ["Babylon the Great", "Mother of Harlots", "Great Whore"],
      relatedVerses: ["Re:17:1", "Re:17:5", "Re:18:2"],
      sdaNote: "Represents religious systems that have departed from biblical truth"
    },
    {
      id: 4,
      name: "Horn",
      category: "objects",
      biblicalDefinition: "King, ruler, or political power",
      scriptureRef: "Daniel 7:24, 8:21",
      description: "Horns on beasts represent kings or rulers within that kingdom",
      examples: ["Ten horns (Ten kingdoms)", "Little horn (Papal power)", "Two horns (USA)"],
      relatedVerses: ["Da:7:8", "Da:7:24", "Re:13:11"],
      sdaNote: "The little horn represents the papal system's political and religious power"
    },
    {
      id: 5,
      name: "Day",
      category: "time",
      biblicalDefinition: "One prophetic year",
      scriptureRef: "Numbers 14:34, Ezekiel 4:6",
      description: "In prophetic time, one day equals one literal year",
      examples: ["1260 days = 1260 years", "2300 days = 2300 years", "70 weeks = 490 years"],
      relatedVerses: ["Nu:14:34", "Eze:4:6", "Da:9:24"],
      sdaNote: "Day-year principle is key to understanding prophetic time periods"
    },
    {
      id: 6,
      name: "Sea/Waters",
      category: "natural",
      biblicalDefinition: "Peoples, multitudes, nations, tongues",
      scriptureRef: "Revelation 17:15",
      description: "Waters represent populated areas where nations and peoples dwell",
      examples: ["Beast from sea (from populated Europe)", "Many waters (nations)", "River Euphrates (peoples)"],
      relatedVerses: ["Re:17:15", "Re:13:1", "Re:16:12"],
      sdaNote: "Beasts from sea arise from established civilizations"
    },
    {
      id: 7,
      name: "Wind",
      category: "natural",
      biblicalDefinition: "Strife, war, political commotion",
      scriptureRef: "Jeremiah 25:31-33, Daniel 7:2",
      description: "Winds represent political strife and warfare between nations",
      examples: ["Four winds of heaven", "Winds striving on great sea"],
      relatedVerses: ["Da:7:2", "Re:7:1", "Jer:25:31"],
      sdaNote: "Political upheavals that bring about changes in world powers"
    },
    {
      id: 8,
      name: "Stars",
      category: "natural",
      biblicalDefinition: "Angels or leaders of God's people",
      scriptureRef: "Revelation 1:20, Daniel 12:3",
      description: "Stars can represent angels, church leaders, or saints",
      examples: ["Seven stars (angels of churches)", "Stars cast down", "Morning star"],
      relatedVerses: ["Re:1:20", "Da:8:10", "Re:22:16"],
      sdaNote: "Context determines whether stars represent angels or faithful leaders"
    }
  ];

  const filteredSymbols = symbols.filter(symbol => {
    const matchesCategory = selectedCategory === 'all' || symbol.category === selectedCategory;
    const matchesSearch = symbol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         symbol.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         symbol.biblicalDefinition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Biblical Symbolism Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand prophetic symbols through their biblical definitions and 
            Seventh-day Adventist theological interpretations
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search symbols, definitions, or scripture references..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Symbols Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSymbols.map((symbol) => (
            <div key={symbol.id} className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{symbol.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  symbol.category === 'beasts' ? 'bg-orange-100 text-orange-800' :
                  symbol.category === 'religious' ? 'bg-purple-100 text-purple-800' :
                  symbol.category === 'objects' ? 'bg-blue-100 text-blue-800' :
                  symbol.category === 'natural' ? 'bg-green-100 text-green-800' :
                  symbol.category === 'time' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {categories.find(cat => cat.id === symbol.category)?.name}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Biblical Definition</h4>
                  <p className="text-gray-700 leading-relaxed">{symbol.biblicalDefinition}</p>
                  <p className="text-sm text-blue-600 mt-1 font-medium">{symbol.scriptureRef}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{symbol.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Examples in Prophecy</h4>
                  <div className="flex flex-wrap gap-2">
                    {symbol.examples.map((example, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">SDA Understanding</h4>
                  <p className="text-gray-600 text-sm leading-relaxed bg-blue-50 p-3 rounded-lg">
                    {symbol.sdaNote}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Related Verses</h4>
                  <div className="flex flex-wrap gap-2">
                    {symbol.relatedVerses.map((verse, index) => (
                      <button key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium hover:bg-blue-200 transition-colors">
                        {verse}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Symbol Connections */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Symbol Connections Between Daniel & Revelation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Beasts & Kingdoms</h3>
              <p className="text-blue-100 mb-4">Daniel's four beasts connect to Revelation's composite beast</p>
              <div className="text-sm space-y-1">
                <div>• Daniel 7:3-7 → Revelation 13:1-2</div>
                <div>• Same kingdoms, different perspective</div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Time Periods</h3>
              <p className="text-blue-100 mb-4">Parallel time prophecies in both books</p>
              <div className="text-sm space-y-1">
                <div>• 1260 days = 42 months = 3½ times</div>
                <div>• Same period, different expressions</div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Judgment Scenes</h3>
              <p className="text-blue-100 mb-4">Pre-advent and post-millennium judgments</p>
              <div className="text-sm space-y-1">
                <div>• Daniel 7:9-10 (Investigative)</div>
                <div>• Revelation 20:11-12 (Executive)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Biblical Research</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Expanding our symbolism database and ensuring theological accuracy requires dedicated study and research. Your support makes this possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* PayPal Donation Button */}
            <a
              href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg transition-all duration-300"
            >
              Donate via PayPal
            </a>

            {/* Stripe Payment Link Button */}
            <a
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
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

export default SymbolismGuide;