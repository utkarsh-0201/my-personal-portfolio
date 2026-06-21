import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Codebase from './components/Codebase';
import Contact from './components/Contact';
import NewsletterModal from './components/NewsletterModal';

function App() {
  const [theme, setTheme] = useState('dark');
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero onOpenNewsletter={() => setNewsletterOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Codebase />
        <Contact />
      </main>

      <footer className="footer bg-custom-black py-8">
        <div className="container footer-container">
          <div className="footer-brand">
            <h3 className="logo">Utkarsh<span>Singh</span></h3>
            <p>Senior Software Engineer (Python) | Platform Security Professional</p>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Utkarsh Singh. All rights reserved.</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/utkarsh-0201" target="_blank" rel="noreferrer">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/utkarsh-singh-00290a110/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span>•</span>
            <a href="mailto:utkrshsingh.29@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <NewsletterModal isOpen={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
    </>
  );
}

export default App;
