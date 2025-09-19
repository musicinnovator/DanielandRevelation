import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, Zap, Eye, Book } from 'lucide-react';

const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const timelinePeriods = [
    { id: 'all', name: 'Complete Timeline', range: '605 BC - Future' },
    { id: 'ancient', name: 'Pagan Kingdoms', range: '605 BC - 476 AD' },
    { id: 'dark_ages', name: 'Papal Kingdom and Dark Ages (Spiritual Darkness, Intellectual Darkness)', range: '476 AD - 1798 AD' },
    { id: 'modern', name: 'Modern Era', range: '1798 AD - Present' },
    { id: 'future', name: 'Future Events', range: 'Present - Eternity' }
  ];

  const timelineEvents = [
    {
      id: 1,
      date: "605 BC",
      title: "Babylon Conquers Judah",
      description: "Beginning of the 'Times of the Gentiles' - Daniel taken captive",
      book: "Daniel",
      chapter: 1,
      category: "ancient",
      prophecy: "Head of Gold begins",
      significance: "Start of prophetic timeline",
      color: "bg-yellow-500"
    },
    {
      id: 2,
      date: "539 BC",
      title: "Babylon Falls to Medo-Persia",
      description: "The breast and arms of silver take power",
      book: "Daniel",
      chapter: 5,
      category: "ancient",
      prophecy: "Daniel 2 Image progression",
      significance: "Second kingdom rises",
      color: "bg-gray-400"
    },
    {
      id: 3,
      date: "331 BC",
      title: "Greece Conquers Persia",
      description: "Alexander the Great fulfills the belly of bronze",
      book: "Daniel",
      chapter: 8,
      category: "ancient",
      prophecy: "Ram and Goat vision",
      significance: "Third kingdom established",
      color: "bg-amber-600"
    },
    {
      id: 4,
      date: "168 BC",
      title: "Rome Becomes Dominant",
      description: "The iron legs begin their rule over the known world",
      book: "Daniel",
      chapter: 2,
      category: "ancient",
      prophecy: "Fourth kingdom of iron",
      significance: "Dreadful beast power",
      color: "bg-gray-700"
    },
    {
      id: 5,
      date: "31 AD",
      title: "Christ's Crucifixion",
      description: "Messiah cut off in the midst of the 70th week",
      book: "Daniel",
      chapter: 9,
      category: "ancient",
      prophecy: "70 Week Prophecy fulfilled",
      significance: "Covenant confirmed",
      color: "bg-red-600"
    },
    {
      id: 6,
      date: "476 AD",
      title: "Roman Empire Divides",
      description: "Feet of iron and clay - divided kingdoms of Europe",
      book: "Daniel",
      chapter: 2,
      category: "medieval",
      prophecy: "Feet and toes period",
      significance: "Never unite again",
      color: "bg-orange-500"
    },
    {
      id: 7,
      date: "538 AD",
      title: "Papal Supremacy Begins",
      description: "Little horn power established for 1260 years",
      book: "Daniel",
      chapter: 7,
      category: "medieval",
      prophecy: "Time, times, and dividing of time",
      significance: "Saints given into his hand",
      color: "bg-purple-600"
    },
    {
      id: 8,
      date: "1798 AD",
      title: "Papal Captivity",
      description: "Pope taken captive by French - deadly wound",
      book: "Revelation",
      chapter: 13,
      category: "modern",
      prophecy: "Beast receives deadly wound",
      significance: "1260 years end",
      color: "bg-red-700"
    },
    {
      id: 9,
      date: "1844 AD",
      title: "Investigative Judgment Begins",
      description: "2300 days end - sanctuary cleansing begins",
      book: "Daniel",
      chapter: 8,
      category: "modern",
      prophecy: "Cleansing of sanctuary",
      significance: "Judgment hour begins",
      color: "bg-blue-600"
    }
  ];

  const filteredEvents = selectedPeriod === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedPeriod);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prophetic Timeline Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Journey through history and see how Bible prophecy has been fulfilled, is fulfilling, and will be fulfilled. 
            See how God reveals "His secret unto His servants the prophets" and that "the wise will understand" in the time of the end. 
          </p>
        </div>

        {/* Period Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Select Time Period
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {timelinePeriods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`p-4 rounded-lg text-left transition-all duration-300 ${
                  selectedPeriod === period.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <div className="font-semibold mb-1">{period.name}</div>
                <div className="text-sm opacity-80">{period.range}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            Interactive Prophetic Timeline
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {/* Timeline Events */}
            <div className="space-y-8">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`relative timeline-marker pl-20 fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 hover-lift cursor-pointer group"
                       onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-2 ${event.color}`}>
                          {event.date}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h4>
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {event.book} {event.chapter}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="font-medium text-blue-600">Prophecy:</span>
                          <span className="text-gray-700 ml-1">{event.prophecy}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>

                    {/* Expanded Details */}
                    {selectedEvent === event.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Prophetic Significance</h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {event.significance}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Related Studies</h5>
                            <div className="space-y-2">
                              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                                <Book className="w-4 h-4" />
                                View Scripture Context
                              </button>
                              <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium">
                                <Layers className="w-4 h-4" />
                                Related 3D Models
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Judgment Comparison */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              Investigative Judgment
            </h3>
            <p className="text-blue-100 mb-6">
              Daniel 7 - Pre-advent judgment in heaven's court
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">Begins 1844 AD</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">Ancient of Days presides</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">Books opened for judgment</span>
              </div>
            </div>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Explore in 3D
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Eye className="w-8 h-8 text-yellow-400" />
              Executive Judgment
            </h3>
            <p className="text-purple-100 mb-6">
              Revelation 20 - Final judgment after the millennium
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">After the 1000 years</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">Great White Throne</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">Execution of sentence</span>
              </div>
            </div>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Compare Judgments
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Timeline Research</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Maintaining accurate prophetic timelines requires ongoing research and updates. Help us keep this resource current and comprehensive.
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

export default Timeline;