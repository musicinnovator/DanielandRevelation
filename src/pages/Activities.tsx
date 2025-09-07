import React, { useState } from 'react';
import { Trophy, Target, Clock, Users, Star, Play, ArrowRight } from 'lucide-react';

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activityCategories = [
    {
      id: 'quiz',
      name: 'Quiz Games',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      activities: [
        {
          id: 'bible-bees',
          title: 'Bible Bees',
          description: 'Fast-paced quiz game testing your knowledge of Daniel and Revelation',
          difficulty: 'Medium',
          duration: '10-15 min',
          players: 'Single/Multi'
        },
        {
          id: 'multiple-choice',
          title: 'Multiple Choice Masters',
          description: 'Test knowledge of prophecies, symbols, characters, and places',
          difficulty: 'Easy',
          duration: '5-10 min',
          players: 'Single'
        },
        {
          id: 'true-false',
          title: 'True or False Challenge',
          description: 'Quick-fire true/false questions about biblical facts',
          difficulty: 'Easy',
          duration: '5 min',
          players: 'Single/Multi'
        }
      ]
    },
    {
      id: 'location',
      name: 'Location & Discovery',
      icon: Target,
      color: 'from-blue-500 to-purple-500',
      activities: [
        {
          id: 'wheres-that-found',
          title: "Where's That Found",
          description: 'Identify which chapter contains specific events or prophecies',
          difficulty: 'Medium',
          duration: '8-12 min',
          players: 'Single'
        },
        {
          id: 'where-did-it-happen',
          title: 'Where Did It Happen',
          description: 'Match events with their specific locations in Daniel and Revelation',
          difficulty: 'Hard',
          duration: '10-15 min',
          players: 'Single'
        },
        {
          id: 'who-did-what',
          title: 'Who Did What',
          description: 'Match characters with their actions and roles in prophecy',
          difficulty: 'Medium',
          duration: '8-10 min',
          players: 'Single'
        }
      ]
    },
    {
      id: 'construction',
      name: 'Text Construction',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      activities: [
        {
          id: 'build-chapter',
          title: 'Build the Chapter',
          description: 'Arrange verses from a chapter in correct biblical order',
          difficulty: 'Hard',
          duration: '15-20 min',
          players: 'Single'
        },
        {
          id: 'build-book',
          title: 'Build the Book',
          description: 'Arrange chapters in correct order with explanations',
          difficulty: 'Expert',
          duration: '20-30 min',
          players: 'Single'
        },
        {
          id: 'build-verse',
          title: 'Build the Verse',
          description: 'Reconstruct individual verses in proper KJV order',
          difficulty: 'Medium',
          duration: '5-8 min',
          players: 'Single'
        }
      ]
    },
    {
      id: 'memory',
      name: 'Memory & Matching',
      icon: Star,
      color: 'from-red-500 to-pink-500',
      activities: [
        {
          id: 'mix-match',
          title: 'Mix and Match',
          description: 'Connect related items: people, places, things, and times',
          difficulty: 'Medium',
          duration: '10-12 min',
          players: 'Single'
        },
        {
          id: 'missing-words',
          title: 'Missing Words',
          description: 'Find missing words or phrases in scripture passages',
          difficulty: 'Medium',
          duration: '8-10 min',
          players: 'Single'
        },
        {
          id: 'when-did-happen',
          title: 'When Did That Happen',
          description: 'Match events with their chronological timing',
          difficulty: 'Hard',
          duration: '12-15 min',
          players: 'Single'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Learning Activities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test and strengthen your knowledge of Daniel and Revelation through 
            engaging activities and challenges designed for all skill levels
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Different Activities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">1000+</div>
              <div className="text-sm text-gray-600">Questions Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-600">Difficulty Levels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">∞</div>
              <div className="text-sm text-gray-600">Learning Opportunities</div>
            </div>
          </div>
        </div>

        {/* Activity Categories */}
        <div className="space-y-12">
          {activityCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <category.icon className="w-8 h-8" />
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-white text-opacity-90">
                      {category.activities.length} activities available
                    </p>
                  </div>
                </div>
              </div>

              {/* Activities Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.activities.map((activity) => (
                    <div 
                      key={activity.id} 
                      className="activity-card p-6 rounded-xl cursor-pointer group"
                      onClick={() => setSelectedActivity(activity)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {activity.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                          {activity.difficulty}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {activity.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {activity.players}
                        </div>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group-hover:bg-blue-700">
                        <Play className="w-4 h-4" />
                        Start Activity
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Challenge of the Day */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Challenge of the Day</h2>
          <p className="text-xl text-purple-100 mb-6">
            Daily challenges to keep your prophetic knowledge sharp
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 mb-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              Today's Challenge: Symbolic Numbers
            </h3>
            <p className="text-purple-100 mb-4">
              "How many times does the number 7 appear in the book of Revelation and what does it symbolize?"
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Difficulty: Medium
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Estimated Time: 8 minutes
              </span>
            </div>
          </div>

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors transform hover:scale-105">
            Accept Today's Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;