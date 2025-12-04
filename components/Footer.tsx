import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-8">
          <h2 className="font-display text-6xl leading-none tracking-wider">
            PH<br />OTO<br />NO
          </h2>
          <div className="flex space-x-2">
            <a href="#" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold hover:bg-primary hover:text-white transition-colors">Ok</a>
            <a href="#" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.196h3.312z"></path></svg>
            </a>
          </div>
          <div className="flex space-x-2">
            <a href="#" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.5 4.5 0 0 0 16.03 2c-2.88 0-4.96 2.67-4.21 5.37-4.1-.2-7.74-2.17-10.18-5.17-.42.72-.66 1.56-.66 2.47 0 1.68.86 3.17 2.16 4.04-.79-.02-1.54-.24-2.2-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.11-.82.17-1.25.17-.31 0-.61-.03-.91-.09.62 1.92 2.41 3.32 4.54 3.36-1.66 1.3-3.76 2.08-6.03 2.08-.39 0-.78-.02-1.16-.07 2.14 1.38 4.69 2.19 7.44 2.19 8.91 0 13.79-7.39 13.79-13.79 0-.21 0-.42-.01-.63.94-.68 1.76-1.54 2.42-2.51z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm4-2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm3.893-1.607a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0z" fillRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        <div>
          <nav className="flex flex-col space-y-3 text-sm">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#" className="hover:text-primary transition-colors">Service</a>
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <div className="text-sm space-y-2 text-gray-300">
            <p>+1 (999) 888-77-66</p>
            <p>hello@photono.com</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Location</h3>
          <div className="text-sm space-y-2 text-gray-300">
            <p>483920, Moscow,</p>
            <p>Myasnitskaya 22/2/5, Office 4</p>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center gap-6 text-sm text-gray-400">
        <p>© 2021 — Copyright All Rights reserved</p>
        <div className="flex items-center space-x-4">
          <span>Languages</span>
          <a href="#" className="hover:text-white transition-colors">En</a>
          <a href="#" className="hover:text-white transition-colors">Es</a>
          <a href="#" className="hover:text-white transition-colors">Fr</a>
          <a href="#" className="hover:text-white transition-colors">De</a>
          <a href="#" className="hover:text-white transition-colors">Ru</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;