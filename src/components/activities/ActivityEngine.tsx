import React, { useState, useEffect } from 'react';
import { Clock, Trophy, Star, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { Activity, ActivityQuestion, calculateScore, checkAchievements } from '../../data/activitiesDatabase';
import { useProgress } from '../ui/ProgressTracker';

interface ActivityEngineProps {
  activity: Activity;
  onComplete: (score: number, achievements: any[]) => void;
  onExit: () => void;
}

const ActivityEngine: React.FC<ActivityEngineProps> = ({ activity, onComplete, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());
  const [showResult, setShowResult] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  const { progress, updateProgress } = useProgress();

  const currentQuestion = activity.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === activity.questions.length - 1;

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const handleAnswer = (answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));

    // Check if answer is correct
    const isCorrect = checkAnswer(currentQuestion, answer);
    if (isCorrect) {
      setCurrentStreak(prev => prev + 1);
      setConsecutiveCorrect(prev => Math.max(prev, currentStreak + 1));
    } else {
      setCurrentStreak(0);
    }

    setShowResult(true);

    // Auto-advance after showing result
    setTimeout(() => {
      if (isLastQuestion) {
        completeActivity();
      } else {
        nextQuestion();
      }
    }, 2000);
  };

  const checkAnswer = (question: ActivityQuestion, answer: any): boolean => {
    switch (question.type) {
      case 'multiple-choice':
      case 'true-false':
      case 'fill-blank':
        return answer === question.correctAnswer;
      case 'matching':
        return JSON.stringify(answer.sort()) === JSON.stringify(question.correctAnswer.sort());
      case 'ordering':
        return JSON.stringify(answer) === JSON.stringify(question.correctAnswer);
      case 'drag-drop':
        return JSON.stringify(answer.sort()) === JSON.stringify(question.correctAnswer.sort());
      default:
        return false;
    }
  };

  const nextQuestion = () => {
    setShowResult(false);
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const completeActivity = () => {
    const correctAnswers = Object.entries(answers).filter(([index, answer]) => 
      checkAnswer(activity.questions[parseInt(index)], answer)
    ).length;

    const score = calculateScore(activity, correctAnswers, activity.questions.length, timeSpent);
    const achievements = checkAchievements(activity, score, timeSpent, correctAnswers, consecutiveCorrect);

    // Update progress
    if (!progress.activitiesCompleted.includes(activity.id)) {
      updateProgress({
        activitiesCompleted: [...progress.activitiesCompleted, activity.id],
        totalPoints: progress.totalPoints + score
      });
    }

    setIsComplete(true);
    onComplete(score, achievements);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQuestion.question}
            </h3>
            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg border-2 border-transparent hover:border-blue-200 transition-all duration-200 disabled:opacity-50"
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 'true-false':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {currentQuestion.question}
            </h3>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleAnswer('True')}
                disabled={showResult}
                className="px-8 py-4 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                True
              </button>
              <button
                onClick={() => handleAnswer('False')}
                disabled={showResult}
                className="px-8 py-4 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                False
              </button>
            </div>
          </div>
        );

      case 'fill-blank':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {currentQuestion.question}
            </h3>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Type your answer..."
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-center text-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                    handleAnswer(e.currentTarget.value.trim().toLowerCase());
                  }
                }}
                disabled={showResult}
              />
            </div>
          </div>
        );

      case 'ordering':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {currentQuestion.question}
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800 mb-4">
                Drag and drop the items below to arrange them in the correct order:
              </p>
              <div className="space-y-2">
                {currentQuestion.options?.map((option, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white border-2 border-gray-200 rounded-lg cursor-move hover:border-blue-300 transition-colors"
                    draggable
                  >
                    {option}
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  // For now, use the original order as answer - in a full implementation,
                  // this would track the drag-and-drop reordering
                  const currentOrder = currentQuestion.options?.map((_, i) => i) || [];
                  handleAnswer(currentOrder);
                }}
                disabled={showResult}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                Submit Order
              </button>
            </div>
          </div>
        );

      case 'matching':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {currentQuestion.question}
            </h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800 mb-4">
                Match the related items by clicking on them:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options?.map((option, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-300 transition-colors"
                  >
                    {option}
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  // For now, accept the original matching - in a full implementation,
                  // this would track user selections and matching
                  handleAnswer(currentQuestion.correctAnswer);
                }}
                disabled={showResult}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Submit Matches
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-600">Question type not implemented yet.</p>
          </div>
        );
    }
  };

  if (isComplete) {
    const correctAnswers = Object.entries(answers).filter(([index, answer]) => 
      checkAnswer(activity.questions[parseInt(index)], answer)
    ).length;
    const score = calculateScore(activity, correctAnswers, activity.questions.length, timeSpent);
    const percentage = Math.round((correctAnswers / activity.questions.length) * 100);

    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Activity Complete!</h2>
          <p className="text-gray-600">Great job on completing {activity.title}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{score}</div>
            <div className="text-sm text-gray-600">Points Earned</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{percentage}%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">{correctAnswers}/{activity.questions.length}</div>
            <div className="text-sm text-gray-600">Correct Answers</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600">{formatTime(timeSpent)}</div>
            <div className="text-sm text-gray-600">Time Taken</div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <button
            onClick={onExit}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Back to Activities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{activity.title}</h2>
          <p className="text-gray-600">Question {currentQuestionIndex + 1} of {activity.questions.length}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            {formatTime(timeSpent)}
          </div>
          <button
            onClick={onExit}
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{Math.round(((currentQuestionIndex + 1) / activity.questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / activity.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        {renderQuestion()}
      </div>

      {/* Result Feedback */}
      {showResult && (
        <div className="mb-6">
          <div className={`p-4 rounded-lg flex items-center gap-3 ${
            checkAnswer(currentQuestion, answers[currentQuestionIndex])
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}>
            {checkAnswer(currentQuestion, answers[currentQuestionIndex]) ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <div>
              <div className="font-semibold">
                {checkAnswer(currentQuestion, answers[currentQuestionIndex]) ? 'Correct!' : 'Incorrect'}
              </div>
              <div className="text-sm mt-1">{currentQuestion.explanation}</div>
              {currentQuestion.scriptureRef && (
                <div className="text-sm mt-1 font-medium">
                  Scripture: {currentQuestion.scriptureRef}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Question Info */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div>Points: {currentQuestion.points}</div>
        {currentQuestion.timeLimit && (
          <div>Time Limit: {currentQuestion.timeLimit}s</div>
        )}
      </div>
    </div>
  );
};

export default ActivityEngine;