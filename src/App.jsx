import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useTiltEffect } from './hooks/useTiltEffect';

function App() {
  useScrollReveal();
  useTiltEffect();

  // Load non-critical CSS asynchronously after initial render
  useEffect(() => {
    import('../src/styles.scss');
  }, []);

  return (
    <div id="top">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;