import React from 'react';
import { Play, Clock, Users, Trophy, Target, Star } from 'lucide-react';
import { Activity } from '../../data/activitiesDatabase';

interface ActivitySelectorProps {
  activities: Activity[];
  onSelectActivity: (activity: Activity) => void;
}

const ActivitySelector: React.FC<ActivitySelectorProps> = ({ activities, onSelectActivity }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'quiz': return Trophy;
      case 'location': return Target;
      case 'construction': return Users;
      case 'memory': return Star;
      case 'timeline': return Clock;
      case 'symbol': return Star;
      default: return Play;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'quiz': return 'from-yellow-500 to-orange-500';
      case 'location': return 'from-blue-500 to-purple-500';
      case 'construction': return 'from-green-500 to-teal-500';
      case 'memory': return 'from-red-500 to-pink-500';
      case 'timeline': return 'from-indigo-500 to-blue-500';
      case 'symbol': return 'from-purple-500 to-indigo-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity) => {
        const CategoryIcon = getCategoryIcon(activity.category);
        
        return (
          <div 
            key={activity.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer group"
            onClick={() => onSelectActivity(activity)}
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${getCategoryColor(activity.category)} p-6 text-white`}>
              <div className="flex items-center gap-3 mb-3">
                <CategoryIcon className="w-6 h-6" />
                <span className="text-sm font-medium opacity-90 capitalize">{activity.category}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:scale-105 transition-transform duration-200">
                {activity.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed">
                {activity.description}
              </p>

              {/* Metadata */}
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

              {/* Difficulty & Questions */}
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                  {activity.difficulty}
                </span>
                <span className="text-sm text-gray-500">
                  {activity.questions.length} questions
                </span>
              </div>

              {/* Action Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group-hover:bg-blue-700">
                <Play className="w-4 h-4" />
                Start Activity
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivitySelector;