import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dialog from './pages/Dialog';
import Cartoon from './pages/Cartoon';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/cartoon" element={<Cartoon />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
