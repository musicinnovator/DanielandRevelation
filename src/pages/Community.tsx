import React, { useState } from 'react';
import { Users, MessageSquare, BookOpen, Trophy, User, Calendar, ThumbsUp, Reply, Star, Award } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: "Understanding the 2300 Day Prophecy",
      author: "Sarah Johnson",
      category: "Daniel 8",
      replies: 23,
      likes: 45,
      lastActivity: "2 hours ago",
      preview: "I've been studying the connection between Daniel 8:14 and the investigative judgment. The mathematical precision is fascinating...",
      isSticky: true
    },
    {
      id: 2,
      title: "Daniel 3 and Revelation 13 Connections",
      author: "Michael Chen",
      category: "Comparative Study",
      replies: 18,
      likes: 32,
      lastActivity: "4 hours ago",
      preview: "The parallels between the golden image and the mark of the beast are striking. Both involve worship...",
      isSticky: false
    },
    {
      id: 3,
      title: "Seven Churches Historical Timeline",
      author: "Ruth Martinez",
      category: "Revelation 2-3",
      replies: 41,
      likes: 78,
      lastActivity: "6 hours ago",
      preview: "Each church period seems to have distinct characteristics that match historical church eras...",
      isSticky: false
    },
    {
      id: 4,
      title: "Sanctuary Service and Revelation",
      author: "David Thompson",
      category: "Sanctuary Doctrine",
      replies: 29,
      likes: 56,
      lastActivity: "1 day ago",
      preview: "The heavenly sanctuary scenes in Revelation mirror the earthly sanctuary services perfectly...",
      isSticky: false
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Johnson", points: 2847, badge: "Scripture Scholar", avatar: "SJ", color: "bg-yellow-500" },
    { rank: 2, name: "Michael Chen", points: 2341, badge: "Prophecy Expert", avatar: "MC", color: "bg-gray-400" },
    { rank: 3, name: "Ruth Martinez", points: 2156, badge: "Timeline Master", avatar: "RM", color: "bg-orange-600" },
    { rank: 4, name: "David Thompson", points: 1987, badge: "Symbol Sage", avatar: "DT", color: "bg-blue-500" },
    { rank: 5, name: "Lisa Anderson", points: 1823, badge: "Activity Champion", avatar: "LA", color: "bg-purple-500" }
  ];

  const recentActivity = [
    { user: "John Doe", action: "completed", target: "Bible Bees Challenge", time: "30 min ago", icon: Trophy },
    { user: "Emma Wilson", action: "started", target: "70 Week Prophecy Study", time: "1 hour ago", icon: BookOpen },
    { user: "Alex Johnson", action: "posted in", target: "Daniel 7 Discussion", time: "2 hours ago", icon: MessageSquare },
    { user: "Maria Garcia", action: "earned", target: "Prophecy Master Badge", time: "3 hours ago", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Study Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow students, share insights, and grow together in 
            understanding Daniel and Revelation prophecies
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'discussions', name: 'Discussions', icon: MessageSquare },
              { id: 'leaderboard', name: 'Leaderboard', icon: Trophy },
              { id: 'activity', name: 'Recent Activity', icon: Calendar }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Study Discussions</h2>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      New Discussion
                    </button>
                  </div>

                  <div className="space-y-4">
                    {discussions.map((discussion) => (
                      <div key={discussion.id} className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                        discussion.isSticky 
                          ? 'border-yellow-200 bg-yellow-50' 
                          : 'border-gray-200 bg-white hover:border-blue-200'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {discussion.isSticky && (
                                <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                                  Pinned
                                </span>
                              )}
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {discussion.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                              {discussion.title}
                            </h3>
                            <p className="text-gray-600 mt-2 leading-relaxed">
                              {discussion.preview}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {discussion.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Reply className="w-4 h-4" />
                              {discussion.replies} replies
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              {discussion.likes} likes
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">{discussion.lastActivity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  Community Leaderboard
                </h2>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={user.rank} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' :
                        index === 2 ? 'bg-orange-600' :
                        'bg-blue-500'
                      }`}>
                        #{user.rank}
                      </div>
                      <div className={`w-12 h-12 ${user.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {user.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.badge}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{user.points.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-blue-500" />
                  Recent Community Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">
                          <span className="font-semibold">{activity.user}</span> {activity.action}{' '}
                          <span className="font-medium text-blue-600">{activity.target}</span>
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Community Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">89</div>
                  <div className="text-sm text-gray-600">Discussions Today</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">456</div>
                  <div className="text-sm text-gray-600">Questions Answered</div>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Investigative Judgment</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">42 posts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Mark of the Beast</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">38 posts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Second Coming</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">29 posts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">70 Week Prophecy</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">24 posts</span>
                </div>
              </div>
            </div>

            {/* Study Groups */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Active Study Groups</h3>
              <div className="space-y-3">
                <div className="p-3 border border-blue-200 rounded-lg">
                  <div className="font-medium text-gray-900">Daniel 2 Deep Dive</div>
                  <div className="text-sm text-gray-600">15 members • Meeting Weekly</div>
                </div>
                <div className="p-3 border border-purple-200 rounded-lg">
                  <div className="font-medium text-gray-900">Revelation Symbols</div>
                  <div className="text-sm text-gray-600">23 members • Daily discussions</div>
                </div>
                <div className="p-3 border border-green-200 rounded-lg">
                  <div className="font-medium text-gray-900">Prophecy Timeline</div>
                  <div className="text-sm text-gray-600">31 members • Bi-weekly</div>
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Browse All Groups
              </button>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scripture-Centered</h3>
              <p className="text-blue-100">All discussions should be grounded in biblical text and SDA theological understanding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Respectful Dialog</h3>
              <p className="text-blue-100">Maintain Christian love and respect in all interactions and disagreements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Content</h3>
              <p className="text-blue-100">Share thoughtful insights and questions that contribute to collective learning</p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Community Features</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Maintaining discussion forums, leaderboards, and community features requires ongoing server costs and moderation. Your support keeps our community thriving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* PayPal Donation Button */}
            <a
              href="https://https://www.paypal.com/donate/?hosted_button_id=Z2T57WZMGV9UQ"
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

export default Community;