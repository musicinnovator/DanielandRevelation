import React, { useState } from 'react';
import { Trophy, Target, Clock, Users, Star, Play, ArrowRight } from 'lucide-react';
import { useProgress } from '../components/ui/ProgressTracker';
import { activitiesDatabase, getActivitiesByCategory, getActivityById, Activity } from '../data/activitiesDatabase';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ActivityEngine from '../components/activities/ActivityEngine';
import ActivitySelector from '../components/activities/ActivitySelector';

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [showActivityEngine, setShowActivityEngine] = useState(false);

  const activityCategories = [
    {
      id: 'quiz',
      name: 'Quiz Games',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      activities: getActivitiesByCategory('quiz')
    },
    {
      id: 'location',
      name: 'Location & Discovery',
      icon: Target,
      color: 'from-blue-500 to-purple-500',
      activities: getActivitiesByCategory('location')
    },
    {
      id: 'construction',
      name: 'Text Construction',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      activities: getActivitiesByCategory('construction')
    },
    {
      id: 'memory',
      name: 'Memory & Matching',
      icon: Star,
      color: 'from-red-500 to-pink-500',
      activities: getActivitiesByCategory('memory')
    }
  ];

  const { progress, updateProgress } = useProgress();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleActivityStart = (activityId: string) => {
    // Map display IDs to database IDs
    const activityMap: { [key: string]: string } = {
      'bible-bees': 'bible-bees-daniel',
      'multiple-choice': 'multiple-choice-masters',
      'true-false': 'true-false-challenge',
      'wheres-that-found': 'wheres-that-found',
      'where-did-it-happen': 'where-did-it-happen',
      'who-did-what': 'who-did-what',
      'build-chapter': 'build-chapter-daniel2',
      'build-book': 'build-book',
      'build-verse': 'build-verse',
      'mix-match': 'mix-match-symbols',
      'missing-words': 'missing-words',
      'when-did-happen': 'when-did-happen'
    };
    
    const dbActivityId = activityMap[activityId] || activityId;
    const activity = getActivityById(dbActivityId);
    if (activity) {
      setSelectedActivity(activity);
      setShowActivityEngine(true);
    }
  };

  const handleActivityComplete = (score: number, achievements: any[]) => {
    // Track activity completion
    if (selectedActivity && !progress.activitiesCompleted.includes(selectedActivity.id)) {
      updateProgress({
        activitiesCompleted: [...progress.activitiesCompleted, selectedActivity.id],
        totalPoints: progress.totalPoints + score
      });
    }
    
    // Show completion message or return to activities
    setShowActivityEngine(false);
    setSelectedActivity(null);
  };

  const handleActivityExit = () => {
    setShowActivityEngine(false);
    setSelectedActivity(null);
  };

  // If activity engine is active, show it
  if (showActivityEngine && selectedActivity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ActivityEngine 
            activity={selectedActivity}
            onComplete={handleActivityComplete}
            onExit={handleActivityExit}
          />
        </div>
      </div>
    );
  }

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
              <div className="text-3xl font-bold text-blue-600">{activitiesDatabase.length}</div>
              <div className="text-sm text-gray-600">Different Activities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{activitiesDatabase.reduce((total, activity) => total + activity.questions.length, 0)}+</div>
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
                    <div key={activity.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                      
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

                      <div className="flex items-center justify-between mb-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                          {activity.difficulty}
                        </span>
                      </div>

                      <button 
                        onClick={() => handleActivityStart(activity.id)}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
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

        {/* Support Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Learning Activities</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Developing engaging educational activities and games takes time and creativity. Help us create more interactive learning experiences.
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

export default Activities;