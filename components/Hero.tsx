import React from 'react';

const Hero: React.FC = () => {
  const bgImage = "/images/hero.jpg";
  const bgVideo = "/images/vid.mp4"
  const logo  = "/images/logo.PNG"
  const artistImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEgzQdG17ci_cI0mr49hsgdZpypqfp4kAewcYhQBd-lsc0U-rm164xqef_L6A4CzefZgsAV_4aAZKHo2TtO019hcAEw7VWWFsmq30UcyrvoyywrEaGFJMeWMyowPuEhsTHJF24PDZVmEGhvTXzTlCocdd4-wxtSrsnqfEnCVYGVhcYCWwpLyqUBY-ZFbPCrid4I5uefe43TM0cOGy6kEvBqMQn03RgJzpnq-ttMtt2asiSgdAXsCUUvSBawvAuNXn9GNeUgWBgHU";

  return (
    <header className="
    relative 
    h-screen 
    min-h-[500px] 
    bg-gray-500 
    text-white 
    overflow-hidden
    sm:min-h-[450px]
    md:min-h-[500px]
    lg:min-h-[600px]
  ">
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105" 
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div> */}
      
      <video
  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
  src={bgVideo}
  autoPlay
  loop
  muted
  playsInline/>

      <div className="relative z-10 flex flex-col h-full px-4 sm:px-8 md:px-16 lg:px-24">
        <nav className="flex justify-between items-center py-4 sm:py-8 w-full gap-3 sm:gap-6 md:gap-8">
          <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-10 sm:h-12 md:h-14 lg:h-16 bg-cover bg-center bg-no-repeat flex-shrink-0" 
               style={{ backgroundImage: `url('${logo}')` }}></div>
          
          {/* Navigation - Single Row for all screens */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-14 text-[11px] sm:text-xs md:text-sm lg:text-base uppercase font-semibold tracking-wider md:tracking-widest ml-auto">
            <a href="#portfolio" className="hover:text-gray-300 transition-colors whitespace-nowrap">Portfolio</a>
            <a href="#about" className="hover:text-gray-300 transition-colors whitespace-nowrap">About Us</a>
            <a href="#contact" className="flex items-center gap-1 sm:gap-1.5 md:gap-2 hover:text-gray-300 transition-colors group whitespace-nowrap">
              Let's Talk
              <span className="material-icons group-hover:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_forward</span>
            </a>
          </div>
        </nav>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center pt-4 sm:pt-8">
          <div className="flex flex-col justify-center items-start space-y-8 animate-fade-in-up">
            {/* Left column reserved for future content */}
          </div>

          <div className="relative flex flex-col justify-end h-full pb-28 sm:pb-16 md:pb-24 text-right px-2 sm:px-0">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight drop-shadow-lg">
              THE BEST FOR <br />
              ALL YOUR <br />
              PHOTOGRAPHY <br />
              NEEDS
            </h1>
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm max-w-sm ml-auto text-white/80 leading-relaxed">
              CHOOSE US TO IMMORTALIZE YOUR PRECIOUS MOMENTS IN PRICELESS AND IMMERSIVE WORKS OF VISUAL ART
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

