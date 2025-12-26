import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { ProgressProvider } from './components/ui/ProgressTracker';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ScriptureNavigator from './pages/ScriptureNavigator';
import ThreeDModels from './pages/ThreeDModels';
import Timeline from './pages/Timeline';
import SymbolismGuide from './pages/SymbolismGuide';
import Activities from './pages/Activities';
import Community from './pages/Community';
import SpecialStudies from './pages/SpecialStudies';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scripture" element={<ScriptureNavigator />} />
                <Route path="/models" element={<ThreeDModels />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/symbolism" element={<SymbolismGuide />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/community" element={<Community />} />
                <Route path="/studies" element={<SpecialStudies />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ProgressProvider>
    </ErrorBoundary>
  );
}

export default App;