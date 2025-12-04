import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Collections from './components/Collections';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto relative">
      <Hero />
      <About />
      <Services />
      <Team />
      <Collections />
      <CallToAction />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;