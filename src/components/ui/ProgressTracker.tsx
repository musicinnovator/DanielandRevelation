import React, { createContext, useContext, useState, useEffect } from 'react';
import { Trophy, Star, Target, Clock } from 'lucide-react';

interface UserProgress {
  userId: string;
  chaptersRead: string[];
  activitiesCompleted: string[];
  modelsViewed: string[];
  symbolsLearned: string[];
  achievements: Achievement[];
  totalPoints: number;
  studyStreak: number;
  lastActivity: Date;
  preferences: UserPreferences;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: Date;
  points: number;
}

interface UserPreferences {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  studyReminders: boolean;
  dailyGoal: number;
  favoriteBook: 'daniel' | 'revelation' | 'both';
}

interface ProgressContextType {
  progress: UserProgress;
  updateProgress: (update: Partial<UserProgress>) => void;
  addAchievement: (achievement: Achievement) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>({
    userId: 'guest',
    chaptersRead: [],
    activitiesCompleted: [],
    modelsViewed: [],
    symbolsLearned: [],
    achievements: [],
    totalPoints: 0,
    studyStreak: 0,
    lastActivity: new Date(),
    preferences: {
      difficulty: 'beginner',
      studyReminders: true,
      dailyGoal: 30,
      favoriteBook: 'both'
    }
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('danielRevelationProgress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setProgress({
          ...parsed,
          lastActivity: new Date(parsed.lastActivity)
        });
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('danielRevelationProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (update: Partial<UserProgress>) => {
    setProgress(prev => ({
      ...prev,
      ...update,
      lastActivity: new Date()
    }));
  };

  const addAchievement = (achievement: Achievement) => {
    setProgress(prev => ({
      ...prev,
      achievements: [...prev.achievements, achievement],
      totalPoints: prev.totalPoints + achievement.points
    }));
  };

  const incrementStreak = () => {
    const today = new Date();
    const lastActivity = new Date(progress.lastActivity);
    const daysDiff = Math.floor((today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 1) {
      // Consecutive day
      setProgress(prev => ({
        ...prev,
        studyStreak: prev.studyStreak + 1,
        lastActivity: today
      }));
    } else if (daysDiff === 0) {
      // Same day, just update last activity
      setProgress(prev => ({
        ...prev,
        lastActivity: today
      }));
    } else {
      // Streak broken, reset to 1
      setProgress(prev => ({
        ...prev,
        studyStreak: 1,
        lastActivity: today
      }));
    }
  };

  const resetStreak = () => {
    setProgress(prev => ({
      ...prev,
      studyStreak: 0
    }));
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      updateProgress,
      addAchievement,
      incrementStreak,
      resetStreak
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

// Progress Dashboard Component
export const ProgressDashboard: React.FC = () => {
  const { progress } = useProgress();

  const getStreakColor = (streak: number) => {
    if (streak >= 30) return 'text-purple-600';
    if (streak >= 14) return 'text-blue-600';
    if (streak >= 7) return 'text-green-600';
    if (streak >= 3) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getProgressLevel = (points: number) => {
    if (points >= 10000) return { level: 'Master Scholar', color: 'bg-purple-600' };
    if (points >= 5000) return { level: 'Advanced Student', color: 'bg-blue-600' };
    if (points >= 2000) return { level: 'Dedicated Learner', color: 'bg-green-600' };
    if (points >= 500) return { level: 'Growing Student', color: 'bg-yellow-600' };
    return { level: 'New Student', color: 'bg-gray-600' };
  };

  const level = getProgressLevel(progress.totalPoints);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Your Progress</h3>
      
      {/* Level and Points */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Level</span>
          <span className="text-sm font-bold text-gray-900">{progress.totalPoints} points</span>
        </div>
        <div className={`${level.color} text-white px-3 py-1 rounded-full text-sm font-medium text-center`}>
          {level.level}
        </div>
      </div>

      {/* Study Streak */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-orange-500" />
          <span className="font-medium text-gray-900">Study Streak</span>
        </div>
        <div className={`text-2xl font-bold ${getStreakColor(progress.studyStreak)}`}>
          {progress.studyStreak} days
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{progress.chaptersRead.length}</div>
          <div className="text-sm text-gray-600">Chapters Read</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{progress.activitiesCompleted.length}</div>
          <div className="text-sm text-gray-600">Activities Done</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{progress.modelsViewed.length}</div>
          <div className="text-sm text-gray-600">Models Viewed</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">{progress.symbolsLearned.length}</div>
          <div className="text-sm text-gray-600">Symbols Learned</div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          Recent Achievements
        </h4>
        {progress.achievements.length > 0 ? (
          <div className="space-y-2">
            {progress.achievements.slice(-3).map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{achievement.name}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No achievements yet. Keep studying!</p>
        )}
      </div>
    </div>
  );
};

// Achievement notification component
export const AchievementNotification: React.FC<{ 
  achievement: Achievement; 
  onClose: () => void;
  show: boolean;
}> = ({ achievement, onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-2xl shadow-xl p-6 max-w-sm animate-slide-in">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">{achievement.icon}</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Achievement Unlocked!</h3>
          <p className="text-sm text-gray-600">{achievement.name}</p>
          <p className="text-xs text-gray-500">+{achievement.points} points</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        ×
      </button>
    </div>
  );
};