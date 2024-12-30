import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Demo from './pages/Demo';
import About from './pages/About';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import SupportPlans from './pages/SupportPlans';
import GlowingCursor from './components/GlowingCursor';
import VoiceflowChat from './components/VoiceflowChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <GlowingCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/support-plans" element={<SupportPlans />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <VoiceflowChat projectID="YOUR_PROJECT_ID" />
      </div>
    </Router>
  );
}

export default App;