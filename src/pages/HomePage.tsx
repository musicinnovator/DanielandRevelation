import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Book, 
  Eye, 
  Clock, 
  Layers, 
  Users, 
  Trophy, 
  Search,
  ArrowRight,
  Play,
  Globe,
  Zap,
  Heart
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Layers,
      title: "Interactive 3D Models",
      description: "Explore detailed 3D representations of all prophetic imagery from Daniel and Revelation",
      link: "/models",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Book,
      title: "Scripture Navigator",
      description: "Navigate through verses with linked visual models and SDA commentary",
      link: "/scripture",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: Clock,
      title: "Prophetic Timeline",
      description: "Interactive timeline of fulfilled prophecies according to SDA theology",
      link: "/timeline",
      color: "from-emerald-600 to-emerald-800"
    },
    {
      icon: Eye,
      title: "Symbolism Guide",
      description: "Comprehensive encyclopedia of biblical symbols with scriptural definitions",
      link: "/symbolism",
      color: "from-orange-600 to-orange-800"
    },
    {
      icon: Trophy,
      title: "Learning Activities",
      description: "Bible Bees, quizzes, and interactive challenges to test your knowledge",
      link: "/activities",
      color: "from-red-600 to-red-800"
    },
    {
      icon: Users,
      title: "Community Study",
      description: "Join discussions and share insights with fellow students",
      link: "/community",
      color: "from-teal-600 to-teal-800"
    }
  ];

  const specialStudies = [
    {
      title: "The 70 Week Prophecy",
      chapter: "Daniel 9:24-27",
      description: "Explore the messianic prophecy and its fulfillment",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
    },
    {
      title: "The 2300 Day Prophecy",
      chapter: "Daniel 8:14",
      description: "Understanding the cleansing of the sanctuary",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg"
    },
    {
      title: "Investigative Judgment",
      chapter: "Daniel 7",
      description: "The pre-advent judgment scene in heaven",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Daniel & Revelation
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
            Interactive Study Platform
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Explore the prophetic books of Daniel and Revelation through immersive 3D models, 
            interactive timelines, and comprehensive study tools based on Seventh-day Adventist theology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              to="/scripture" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Book className="w-5 h-5" />
              Start Exploring Scripture
            </Link>
            <Link 
              to="/models" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              View 3D Models
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">12+22</div>
              <div className="text-sm text-blue-200">Chapters Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">100+</div>
              <div className="text-sm text-blue-200">3D Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">25+</div>
              <div className="text-sm text-blue-200">Learning Activities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">∞</div>
              <div className="text-sm text-blue-200">Insights to Discover</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Immersive Biblical Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience prophecy like never before through cutting-edge technology and sound biblical scholarship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link}
                className="group feature-card p-8 rounded-2xl hover-lift transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Studies Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Prophetic Studies
            </h2>
            <p className="text-xl text-gray-600">
              Deep dives into key prophecies with SDA theological insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialStudies.map((study, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-yellow-400 font-semibold text-sm mb-2">
                          {study.chapter}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    <Link 
                      to="/studies"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Study Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Learning Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Learn Through Interaction
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Engage with scripture through interactive activities, 3D models, 
                and immersive experiences that bring ancient prophecies to life.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-lg">Interactive 3D prophetic imagery</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-lg">Multilingual support</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-lg">SDA doctrinal accuracy</span>
                </div>
              </div>

              <Link 
                to="/activities"
                className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Try Learning Activities <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="activity-card p-6 rounded-xl text-center text-gray-900">
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Bible Bees</h3>
                <p className="text-sm text-gray-600">Fast-paced quiz challenges</p>
              </div>
              <div className="activity-card p-6 rounded-xl text-center text-gray-900">
                <Search className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Where's That Found</h3>
                <p className="text-sm text-gray-600">Locate verses and events</p>
              </div>
              <div className="activity-card p-6 rounded-xl text-center text-gray-900">
                <Layers className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Build the Chapter</h3>
                <p className="text-sm text-gray-600">Arrange verses correctly</p>
              </div>
              <div className="activity-card p-6 rounded-xl text-center text-gray-900">
                <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">When Did That Happen</h3>
                <p className="text-sm text-gray-600">Match events with chronology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Scripture */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Access to Sacred Text
            </h2>
            <p className="text-xl text-gray-600">
              Jump directly to any chapter in Daniel or Revelation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Daniel Chapters */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <Book className="w-8 h-8" />
                Book of Daniel
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((chapter) => (
                  <Link
                    key={chapter}
                    to={`/scripture?book=daniel&chapter=${chapter}`}
                    className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-600 hover:to-blue-700 rounded-lg flex items-center justify-center font-semibold text-blue-900 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {chapter}
                  </Link>
                ))}
              </div>
            </div>

            {/* Revelation Chapters */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8" />
                Book of Revelation
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 22 }, (_, i) => i + 1).map((chapter) => (
                  <Link
                    key={chapter}
                    to={`/scripture?book=revelation&chapter=${chapter}`}
                    className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-600 hover:to-purple-700 rounded-lg flex items-center justify-center font-semibold text-purple-900 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {chapter}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Begin Your Prophetic Journey
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Discover the profound connections between Daniel and Revelation through interactive study, 
            visual learning, and community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/scripture"
              className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Book className="w-5 h-5" />
              Start Scripture Study
            </Link>
            <Link 
              to="/timeline"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Explore Timeline
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Support This Ministry
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Help us continue developing this free educational platform for the Seventh-day Adventist community. 
            Your donations support ongoing development, hosting, and new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* PayPal Donation Button */}
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=Z2T57WZMGV9UQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Donate via PayPal
            </a>

            {/* Stripe Payment Link Button */}
            <a
              href="https://buy.stripe.com/eVq9AUaZD7aoeUE3MU4Vy00"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Donate via Stripe
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            All donations go directly to platform development and maintenance
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;