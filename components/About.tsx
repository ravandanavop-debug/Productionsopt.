import React from 'react';

const About: React.FC = () => {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFaKjXWlve6yG9G7b4um08Znf83fuLN7WtSu-iC6HnQKqScchTCJ5cZXvzdpIBQmRFUtj1iVYhCRWYcti0Zh4NfOLmyRQRkudz5utXcvRzHsOnwX5Dtirtlvzps0boqNR6Yq4M8jKVn6boqnivo4e1ya-AoVC0pLPU7fPB59rNlnF7RrGteHt2KZCe7bdjUeaWD4MkGVN8Av5h-d3Qk3bqvqwN9umdpHAyWml-6Ti6XeEUIp3NiIMibUkNAXHo1KoRAjoZbvwqlLE",
      alt: "Photographer with a vintage camera",
      margin: "mt-0"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDu4ZjH4k6PyHgjBVTaZDA3XG5rJzvIvdZzjasdLV6tgn9a4gQjzNTLRaTq8o08iR-BKZNkugX7MwkYn6qQoX8YioxJ8WiYhqL__YNABtgB3OIhy8Xf6D51jadilDOgg39nW_xs2_QBnXlcxsc7Jr252fNKv8L2fGlibkYzZABHZd5RQJLvSeNqi_Z-q2VtxPLWkFLyoiYgQIYHuDLfmZdOzwhiQHD5Phxr-MIB6KO47X4wEGWDlNiLvYiTe1RibztSYQKyloF9go",
      alt: "Photographer taking a self-portrait",
      margin: "mt-0 md:mt-16"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD95BAjOHZ-8UYi9tMkINftbb6nMhQ6oQNZeYHCo4XAWYA_d9M_Jw50QicIGWct_5fZ1sCVZBh1Lm7csQ8gaXHcIfn0GS0Vj1zNGPrjObUqyofOy9U5AleYVQVYia-2J7cPRvp0dfQLEf8aJyZMJu4vh7-KqP9dONK3zLepwTYvZ8p3Raw3dTEB6jvz2OaoBXYN80fwBzocuEM1AQFxWdEsyn4DuDWWBQ20WAKeI6mOminb2r2ePDSxaqCqJK_ACm89E_OkowguBMU",
      alt: "Photographer looking through viewfinder",
      margin: "mt-0"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdlX-zdX_h8PvhbGLmqxmZY5DmvYQrUfN18YcbiU24obORng2E6Wwy7dEQ3deDDaBlvObHNphDtPfd5uk6Zqg2ZUd1z9BcralskUMQ0dsZISdgoO6f04vjKjMDsYaz1LyNeKNIydunBPHuJhB1YRjmyNyirV9uj3nm6O1G_7d5M4PZdgvSzHpsrXsjBYUBWat2psUf__5_3d4m_e--bb9JEsrI2FXuErThy4RDssz_hVUSrDoAvBy5zWvp-_tr6BN00WmY5VOEGIQ",
      alt: "Videographer with professional rig",
      margin: "mt-0 md:mt-16"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
          A DEDICATED TEAM OF PHOTOGRAPHERS, CAPTURING PRECIOUS MOMENTS WITH EVERY CLICK
        </h2>
        <p className="mt-6 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          With our expertise and artistic vision, we are committed to presenting a unique story every time our shutter closes. We believe that beauty lies in the small details.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {images.map((img, idx) => (
          <div key={idx} className={`relative overflow-hidden group rounded-lg ${img.margin}`}>
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;