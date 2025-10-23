import React, { useState } from 'react';
import { Layers, Search, Filter, Eye, ArrowRight, Play, Book, Info } from 'lucide-react';
import NebuchadnezzarsImage from '../components/models/NebuchadnezzarsImage';
import FourBeasts from '../components/models/FourBeasts';
import SevenCandlesticks from '../components/models/SevenCandlesticks';
import HeavenlySanctuary from '../components/models/HeavenlySanctuary';
import RamAndGoat from '../components/models/RamAndGoat';
import NewJerusalem from '../components/models/NewJerusalem';

const ThreeDModels = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);

  const categories = [
    { id: 'all', name: 'All Models', count: 42 },
    { id: 'daniel', name: 'Daniel', count: 18 },
    { id: 'revelation', name: 'Revelation', count: 24 },
    { id: 'beasts', name: 'Prophetic Beasts', count: 8 },
    { id: 'sanctuary', name: 'Sanctuary', count: 6 },
    { id: 'timeline', name: 'Timeline Events', count: 10 }
  ];

  const models = [
    {
      id: 1,
      title: "Nebuchadnezzar's Image",
      book: "Daniel",
      chapter: 2,
      category: "daniel",
      description: "The great image representing world empires from Babylon to the Stone Kingdom",
      difficulty: "Beginner",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      interactive: true,
      verses: ["Da:2:31-35", "Da:2:44-45"],
      component: NebuchadnezzarsImage,
      details: "Interactive model showing the head of gold (Babylon), chest of silver (Medo-Persia), belly of bronze (Greece), legs of iron (Rome), feet of iron and clay (divided Europe), and the stone kingdom (Christ's eternal kingdom). Click the stone to see it strike the image!"
    },
    {
      id: 2,
      title: "Four Beasts of Daniel 7",
      book: "Daniel",
      chapter: 7,
      category: "beasts",
      description: "Lion, Bear, Leopard, and Dreadful Beast representing world kingdoms",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
      interactive: true,
      verses: ["Da:7:3-8", "Da:7:17-24"],
      component: FourBeasts,
      details: "Detailed 3D models of the four beasts rising from the sea: Lion with eagle's wings (Babylon), Bear with three ribs (Medo-Persia), Leopard with four heads and wings (Greece), and the Dreadful Beast with ten horns and little horn (Rome/Papal power)."
    },
    {
      id: 3,
      title: "Seven Golden Candlesticks",
      book: "Revelation",
      chapter: 1,
      category: "revelation",
      description: "The seven churches with Christ walking among them",
      difficulty: "Beginner",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      interactive: true,
      verses: ["Re:1:12-13", "Re:1:20", "Re:2:1"],
      component: SevenCandlesticks,
      details: "Seven golden candlesticks representing the seven churches of Revelation 2-3, with Christ in the midst clothed with a garment down to the foot and girded about with a golden girdle. Each candlestick represents a different period of church history."
    },
    {
      id: 4,
      title: "The Heavenly Sanctuary",
      book: "Revelation",
      chapter: 4,
      category: "sanctuary",
      description: "God's throne room with 24 elders and four living creatures",
      difficulty: "Advanced",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      interactive: true,
      verses: ["Re:4:2-6", "Re:4:8-11"],
      component: HeavenlySanctuary,
      details: "The throne room of heaven with God's throne, rainbow round about, 24 elders on thrones with golden crowns, four living creatures with six wings, seven lamps of fire (seven Spirits of God), and the sea of glass like crystal."
    },
    {
      id: 5,
      title: "The Ram and Goat",
      book: "Daniel",
      chapter: 8,
      category: "beasts",
      description: "Media-Persia and Greece in prophetic conflict",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
      interactive: true,
      verses: ["Da:8:3-8", "Da:8:20-25"],
      component: RamAndGoat,
      details: "Interactive battle scene showing the ram with two horns (Medo-Persia) being defeated by the goat with the notable horn (Greece/Alexander). Watch as the notable horn is broken and four horns rise, followed by the little horn. Click to start the animation!"
    },
    {
      id: 6,
      title: "New Jerusalem",
      book: "Revelation",
      chapter: 21,
      category: "revelation",
      description: "The holy city descending from heaven with precious foundations",
      difficulty: "Advanced",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      interactive: true,
      verses: ["Re:21:10-21", "Re:22:1-5"],
      component: NewJerusalem,
      details: "The foursquare holy city with 12 gates of pearl, 12 foundations of precious stones, streets of gold, river of life, and tree of life. No temple is needed for the Lord God Almighty and the Lamb are the temple. Click to see the city descend from heaven!"
    }
  ];

  const filteredModels = models.filter(model => {
    const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
    const matchesSearch = model.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive 3D Models
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore prophetic imagery from Daniel and Revelation through detailed, 
            scripturally accurate 3D models with SDA theological interpretations
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search models, descriptions, or scripture references..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Models Grid */}
        {selectedModel ? (
          <div className="space-y-8">
            {/* Model Viewer */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedModel.title}</h2>
                    <p className="text-blue-100">{selectedModel.book} {selectedModel.chapter}</p>
                  </div>
                  <button
                    onClick={() => setSelectedModel(null)}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                  >
                    ← Back to Gallery
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <selectedModel.component />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      Model Details
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {selectedModel.details}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedModel.difficulty)}`}>
                        {selectedModel.difficulty}
                      </span>
                      {selectedModel.interactive && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          Interactive
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Book className="w-5 h-5 text-blue-600" />
                      Scripture References
                    </h3>
                    <div className="space-y-2">
                      {selectedModel.verses.map((verse, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                          <Book className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-blue-800">{verse}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Controls</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>• Left click + drag: Rotate camera</div>
                        <div>• Mouse wheel: Zoom in/out</div>
                        <div>• Right click + drag: Pan view</div>
                        {selectedModel.interactive && (
                          <div className="text-green-700 font-medium">• Click objects for interactions!</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((model) => (
            <div 
              key={model.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer"
              onClick={() => setSelectedModel(model)}
            >
              {/* Model Preview */}
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.title}
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Layers className="w-12 h-12 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-white font-semibold">3D Model</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(model.difficulty)}`}>
                    {model.difficulty}
                  </span>
                </div>
                {model.interactive && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Interactive
                    </span>
                  </div>
                )}
              </div>

              {/* Model Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {model.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {model.book} {model.chapter}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {model.description}
                </p>

                {/* Scripture References */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Scripture References:</div>
                  <div className="flex flex-wrap gap-2">
                    {model.verses.map((verse, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {verse}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedModel(model);
                    }}
                  >
                    <Eye className="w-4 h-4" />
                    Explore Model
                  </button>
                  <button 
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedModel(model);
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Featured Model Spotlight */}
        {!selectedModel && (
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Interactive 3D Biblical Prophecy</h2>
            <p className="text-xl text-blue-100">
              Experience Bible prophecy like never before with fully interactive 3D models
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 rounded-xl p-4">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Babylon.js Powered</h3>
                <p className="text-blue-100">Advanced 3D graphics engine for smooth, interactive experiences</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Scripturally Accurate</h3>
                <p className="text-blue-100">Every detail based on biblical descriptions and SDA understanding</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-4">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Educational Focus</h3>
                <p className="text-blue-100">Designed to enhance understanding of prophetic imagery</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Explore Key Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-black" />
                  </div>
                  <span>Click and drag to rotate and explore models</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-black" />
                  </div>
                  <span>Interactive animations showing prophetic fulfillment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-black" />
                  </div>
                  <span>Detailed labels and scripture references</span>
                </li>
              </ul>
              <button 
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2"
                onClick={() => setSelectedModel(models[0])}
              >
                <Play className="w-5 h-5" />
                Start Exploring Models
              </button>
            </div>
          </div>
          </div>
        )}

        {/* Support Section */}
        {!selectedModel && (
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support 3D Model Development</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Creating detailed 3D models requires significant time and resources. Your support helps us develop more interactive biblical visualizations.
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
        )}
      </div>
    </div>
  );
};

export default ThreeDModels;