import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dialog from './pages/Dialog';
import Cartoon from './pages/Cartoon';
import Shop from './pages/Shop';
import './styles/App.css';
import frog from '../src/assets/background/frog.jpg';
import christmas from '../src/assets/background/christmas.jpg';
import halloween from '../src/assets/background/halloween.jpg';

function App() {
  const [theme, setTheme] = useState('frog'); // Default theme

  // Function to handle theme changes
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update theme state
    const background = {
      frog,
      christmas,
      halloween,
    }[newTheme];

    // Update global background styles
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  };

  // Set the default theme when the app loads
  useEffect(() => {
    handleThemeChange('frog');
  }, []);

  return (
    <Router>
      {/* Navigation bar */}
      <Navbar onThemeChange={handleThemeChange} />
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the Dialog page */}
        <Route path="/dialog" element={<Dialog />} />
        {/* Route for the Cartoon page */}
        <Route path="/cartoon" element={<Cartoon />} />
        {/* Route for the Shop page */}
        <Route path="/shop" element={<Shop />} />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
