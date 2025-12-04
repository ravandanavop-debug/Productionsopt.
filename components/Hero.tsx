import React from 'react';

const Hero: React.FC = () => {
  const bgImage = "/images/hero.jpg";
  const bgVideo = "/images/vid.mp4"
  const logo  = "/images/logo.PNG"
  const artistImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEgzQdG17ci_cI0mr49hsgdZpypqfp4kAewcYhQBd-lsc0U-rm164xqef_L6A4CzefZgsAV_4aAZKHo2TtO019hcAEw7VWWFsmq30UcyrvoyywrEaGFJMeWMyowPuEhsTHJF24PDZVmEGhvTXzTlCocdd4-wxtSrsnqfEnCVYGVhcYCWwpLyqUBY-ZFbPCrid4I5uefe43TM0cOGy6kEvBqMQn03RgJzpnq-ttMtt2asiSgdAXsCUUvSBawvAuNXn9GNeUgWBgHU";

  return (
    <header className="relative h-screen min-h-[900px] bg-gray-500 text-white overflow-hidden">
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
        <nav className="flex justify-between items-center py-8">
          <div className="w-48 h-12 bg-cover bg-center bg-no-repeat flex-shrink-0" 
               style={{ backgroundImage: `url('${logo}')` }}></div>
          <div className="hidden md:flex items-center space-x-12 text-sm uppercase font-semibold tracking-widest">
            <a href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About Us</a>
            <div className="w-24"></div>
            <a href="#contact" className="flex items-center gap-2 hover:text-gray-300 transition-colors group">
              Let's Talk
              <span className="material-icons text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </nav>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center items-start space-y-8 animate-fade-in-up">
            {/* <ul className="font-display text-3xl sm:text-4xl lg:text-5xl space-y-2 tracking-wide text-white/80">
              <li className="hover:text-white transition-colors cursor-default">NATURAL</li>
              <li className="hover:text-white transition-colors cursor-default">PRODUCT</li>
              <li className="hover:text-white transition-colors cursor-default">WEDDING</li>
              <li className="hover:text-white transition-colors cursor-default">PREWEDDING</li>
            </ul> */}
            
            {/* <div className="relative w-40 h-48 sm:w-48 sm:h-56 group cursor-pointer overflow-hidden rounded-sm">
              <img 
                src={artistImage} 
                alt="Portrait of a female artist" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[2px] transition-opacity duration-300 group-hover:bg-black/30">
                <span className="font-display text-3xl text-white">ARTIST</span>
              </div>
            </div> */}

            {/* <ul className="font-display text-3xl sm:text-4xl lg:text-5xl space-y-2 tracking-wide text-white/80">
              <li className="hover:text-white transition-colors cursor-default">VIDEOGRAPHY</li>
              <li className="hover:text-white transition-colors cursor-default">EVENT</li>
              <li className="hover:text-white transition-colors cursor-default">PORTRAIT</li>
            </ul> */}

            {/* <div className="flex items-center space-x-6 pt-4">
              <button className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-icons">arrow_back</span>
              </button>
              <div className="flex items-center space-x-2">
                <span className="w-8 h-1 bg-white"></span>
                <span className="w-8 h-1 bg-white/30"></span>
                <span className="w-8 h-1 bg-white/30"></span>
              </div>
              <button className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-icons">arrow_forward</span>
              </button>
            </div> */}
          </div>

          <div className="relative flex flex-col justify-end h-full pb-24 text-right">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight drop-shadow-lg">
              THE BEST FOR <br />
              ALL YOUR <br />
              PHOTOGRAPHY <br />
              NEEDS
            </h1>
            <p className="mt-8 text-sm max-w-sm ml-auto text-white/80 leading-relaxed">
              CHOOSE US TO IMMORTALIZE YOUR PRECIOUS MOMENTS IN PRICELESS AND IMMERSIVE WORKS OF VISUAL ART
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;