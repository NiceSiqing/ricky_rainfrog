import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  const [theme, setTheme] = useState('frog'); // 默认主题

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // 保存主题到 localStorage
    const background = {
      frog,
      christmas,
      halloween,
    }[newTheme];

    // 更新全局背景图片
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'frog';
    handleThemeChange(savedTheme); // 初始化时加载保存的主题
  }, []);

  return (
    <Router>
      <Navbar onThemeChange={handleThemeChange} theme={theme} />
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
