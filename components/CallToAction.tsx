import React from 'react';

const CallToAction: React.FC = () => {
  const bgImage = "/images/photographer.jpg";

  return (
    <section className="relative h-[400px] sm:h-[600px] bg-gray-500 text-white flex flex-col justify-end overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"
    style={{ backgroundImage: `url('${bgImage}')` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-4 text-center sm:text-left pb-8">
    <p className="text-xs sm:text-sm uppercase font-semibold tracking-widest mb-2 sm:mb-4">
      INSTANTLY GET THE BEST
    </p>
    <h2 className="font-display 
               text-4xl sm:text-6xl md:text-[100px] lg:text-[160px] 
               leading-none 
               tracking-[0.4em] sm:tracking-tight lg:tracking-tighter">
  PHOTOGRAPHER
</h2>
  </div>
</section>
  );
};

export default CallToAction;