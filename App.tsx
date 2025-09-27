import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-transparent text-slate-300 font-['Inter',_sans-serif] leading-relaxed">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;