import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  
  useScrollReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div data-aos><Hero /></div>
        <div data-aos><About /></div>
        <div data-aos><Skills /></div>
        <div data-aos><Projects /></div>
        <div data-aos><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
