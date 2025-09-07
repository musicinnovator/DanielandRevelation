import React, { useState } from 'react';
import { Clock, Crown, Flame, Book, Calendar, ArrowRight, Play, Download, Share2 } from 'lucide-react';

const SpecialStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState('70-weeks');

  const specialStudies = [
    {
      id: '70-weeks',
      title: 'The 70 Week Prophecy',
      subtitle: 'Daniel 9:24-27',
      description: 'The most precise messianic prophecy in Scripture',
      color: 'from-blue-600 to-blue-800',
      icon: Calendar,
      duration: '45 minutes',
      difficulty: 'Intermediate',
      chapters: ['Daniel 9:24-27', 'Matthew 24', 'Luke 21'],
      keyPoints: [
        'Starts with the decree to restore Jerusalem (457 BC)',
        'Messiah appears after 69 weeks (27 AD)',
        'Messiah cut off in the midst of the 70th week (31 AD)',
        'Covenant confirmed with many for one week'
      ]
    },
    {
      id: 'daniel-2-image',
      title: 'The Great Image of Daniel 2',
      subtitle: 'World Kingdoms Timeline',
      description: 'From Babylon to the Stone Kingdom',
      color: 'from-yellow-600 to-orange-600',
      icon: Crown,
      duration: '35 minutes',
      difficulty: 'Beginner',
      chapters: ['Daniel 2:31-45', 'Daniel 7', 'Revelation 17'],
      keyPoints: [
        'Head of Gold: Babylon (605-539 BC)',
        'Chest/Arms of Silver: Medo-Persia (539-331 BC)',
        'Belly/Thighs of Bronze: Greece (331-168 BC)',
        'Legs of Iron: Rome (168 BC - 476 AD)',
        'Feet of Iron/Clay: Divided Europe (476 AD - Present)',
        'Stone Kingdom: Christ\'s Eternal Kingdom'
      ]
    },
    {
      id: 'fiery-furnace',
      title: 'The Fiery Furnace Test',
      subtitle: 'Daniel 3 and End-Time Parallels',
      description: 'Worship test connecting to Revelation 13',
      color: 'from-red-600 to-orange-600',
      icon: Flame,
      duration: '30 minutes',
      difficulty: 'Beginner',
      chapters: ['Daniel 3', 'Revelation 13:11-18', 'Revelation 14:9-12'],
      keyPoints: [
        'Universal worship decree enforced by death',
        'Music signal for worship (Sunday laws)',
        'Three faithful Hebrews refuse to bow',
        'Divine deliverance through the fourth man',
        'Connection to mark of the beast crisis'
      ]
    },
    {
      id: 'investigative-judgment',
      title: 'The Investigative Judgment',
      subtitle: 'Daniel 7:9-14 & 8:14',
      description: 'Pre-advent judgment scene in heaven',
      color: 'from-purple-600 to-blue-600',
      icon: Book,
      duration: '50 minutes',
      difficulty: 'Advanced',
      chapters: ['Daniel 7:9-14', 'Daniel 8:14', 'Revelation 14:6-7'],
      keyPoints: [
        'Ancient of Days takes His seat (1844)',
        'Books opened for judgment',
        'Son of Man receives kingdom',
        '2300 days end, sanctuary cleansed',
        'Hour of judgment message proclaimed'
      ]
    }
  ];

  const currentStudy = specialStudies.find(study => study.id === selectedStudy);

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
            Special Prophetic Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth exploration of key prophecies with SDA theological insights, 
            interactive models, and comprehensive study materials
          </p>
        </div>

        {/* Study Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Select a Study</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(study.id)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                  selectedStudy === study.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <study.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">{study.title}</h4>
                <p className="text-sm text-blue-600 font-medium mb-2">{study.subtitle}</p>
                <p className="text-xs text-gray-600">{study.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Study Details */}
        {currentStudy && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Study Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Study Header */}
              <div className={`bg-gradient-to-r ${currentStudy.color} rounded-2xl p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <currentStudy.icon className="w-12 h-12" />
                  <div>
                    <h2 className="text-3xl font-bold">{currentStudy.title}</h2>
                    <p className="text-xl text-white text-opacity-90">{currentStudy.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-white text-opacity-90 mb-6">
                  {currentStudy.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentStudy.difficulty)}`}>
                    {currentStudy.difficulty}
                  </span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-medium">
                    {currentStudy.duration}
                  </span>
                </div>
              </div>

              {/* Interactive Timeline (for 70 Weeks) */}
              {selectedStudy === '70-weeks' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Interactive 70 Week Timeline</h3>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    
                    {/* Timeline Points */}
                    <div className="relative flex justify-between items-start">
                      <div className="text-center">
                        <div className="w-6 h-6 bg-blue-600 rounded-full mb-2 relative z-10"></div>
                        <div className="font-bold text-sm text-blue-600">457 BC</div>
                        <div className="text-xs text-gray-600 max-w-20">Decree to Restore</div>
                      </div>
                      <div className="text-center">
                        <div className="w-6 h-6 bg-green-600 rounded-full mb-2 relative z-10"></div>
                        <div className="font-bold text-sm text-green-600">27 AD</div>
                        <div className="text-xs text-gray-600 max-w-20">Jesus Baptized</div>
                      </div>
                      <div className="text-center">
                        <div className="w-6 h-6 bg-red-600 rounded-full mb-2 relative z-10"></div>
                        <div className="font-bold text-sm text-red-600">31 AD</div>
                        <div className="text-xs text-gray-600 max-w-20">Messiah Cut Off</div>
                      </div>
                      <div className="text-center">
                        <div className="w-6 h-6 bg-purple-600 rounded-full mb-2 relative z-10"></div>
                        <div className="font-bold text-sm text-purple-600">34 AD</div>
                        <div className="text-xs text-gray-600 max-w-20">Stephen Stoned</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-2">7 Weeks (49 years)</h4>
                      <p className="text-sm text-blue-700">Jerusalem rebuilt in troublous times</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-2">62 Weeks (434 years)</h4>
                      <p className="text-sm text-green-700">Until Messiah the Prince appears</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-900 mb-2">1 Week (7 years)</h4>
                      <p className="text-sm text-red-700">Covenant confirmed, sacrifice ceases</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Great Image Study (for Daniel 2) */}
              {selectedStudy === 'daniel-2-image' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Great Image Kingdoms</h3>
                  <div className="space-y-6">
                    {[
                      { metal: 'Gold', kingdom: 'Babylon', period: '605-539 BC', color: 'bg-yellow-500', description: 'Head of finest gold representing Nebuchadnezzar\'s kingdom' },
                      { metal: 'Silver', kingdom: 'Medo-Persia', period: '539-331 BC', color: 'bg-gray-400', description: 'Chest and arms of silver, inferior to gold' },
                      { metal: 'Bronze', kingdom: 'Greece', period: '331-168 BC', color: 'bg-orange-600', description: 'Belly and thighs ruling over all the earth' },
                      { metal: 'Iron', kingdom: 'Rome', period: '168 BC-476 AD', color: 'bg-gray-700', description: 'Strong as iron, breaking all in pieces' },
                      { metal: 'Iron/Clay', kingdom: 'Divided Europe', period: '476 AD-Present', color: 'bg-red-600', description: 'Partly strong, partly broken, never unite' },
                      { metal: 'Stone', kingdom: 'God\'s Kingdom', period: 'Future', color: 'bg-blue-600', description: 'Cut out without hands, fills whole earth' }
                    ].map((kingdom, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className={`w-12 h-12 ${kingdom.color} rounded-full flex items-center justify-center text-white font-bold`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-gray-900">{kingdom.metal}</h4>
                            <span className="text-gray-500">•</span>
                            <span className="font-semibold text-blue-600">{kingdom.kingdom}</span>
                            <span className="text-sm text-gray-500">({kingdom.period})</span>
                          </div>
                          <p className="text-sm text-gray-600">{kingdom.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Study Materials */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Study Materials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900">Scripture References</h4>
                    {currentStudy.chapters.map((chapter, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Book className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-800">{chapter}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900">Study Actions</h4>
                    <button className="w-full flex items-center gap-3 p-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors">
                      <Play className="w-5 h-5" />
                      Start Interactive Study
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                      <Download className="w-5 h-5" />
                      Download Study Guide
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors">
                      <Share2 className="w-5 h-5" />
                      Share with Study Group
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Sidebar */}
            <div className="space-y-8">
              {/* Key Points */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Study Points</h3>
                <div className="space-y-3">
                  {currentStudy.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Study Progress</span>
                      <span className="font-medium">0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Activities Completed</span>
                      <span className="font-medium">0/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Studies */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Studies</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-gray-900">Daniel 7 Four Beasts</div>
                    <div className="text-sm text-gray-600">Parallel prophecy perspective</div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-gray-900">Revelation 13 Beast Powers</div>
                    <div className="text-sm text-gray-600">End-time fulfillment</div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-gray-900">Sanctuary Timeline</div>
                    <div className="text-sm text-gray-600">Ceremonial connections</div>
                  </button>
                </div>
              </div>

              {/* Study Tools */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Study Tools</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors">
                    <Calendar className="w-5 h-5" />
                    Timeline Calculator
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors">
                    <Book className="w-5 h-5" />
                    Cross-Reference Tool
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors">
                    <Crown className="w-5 h-5" />
                    Symbol Dictionary
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Study Comparison Feature */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Comparative Prophecy Studies
          </h2>
          <p className="text-xl text-purple-100 text-center mb-8">
            Explore how Daniel and Revelation prophecies complement and illuminate each other
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Kingdom Prophecies</h3>
              <p className="text-purple-100 mb-4">Compare Daniel 2, 7, 8 with Revelation 13, 17</p>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                Compare Now
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Time Prophecies</h3>
              <p className="text-purple-100 mb-4">1260 days, 42 months, time-times-dividing</p>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                Study Timeline
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Judgment Scenes</h3>
              <p className="text-purple-100 mb-4">Daniel 7:9-14 and Revelation 20:11-15</p>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                Explore 3D
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialStudies;