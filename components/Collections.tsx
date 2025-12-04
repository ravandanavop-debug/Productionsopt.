import React from 'react';

const Collections: React.FC = () => {
  const items = [
    { id: "One", title: "FASHION PHOTOGRAPHY", desc: "Our creative lenses create stunning fashion portraits" },
    { id: "Two", title: "PREWEDDING PHOTOGRAPHY", desc: "We create beautiful memories that reflect your unique love story" },
    { id: "Three", title: "PORTRAIT PHOTOGRAPHY", desc: "We create portraits that depict meaningful expressions" },
    { id: "Four", title: "MATERNITY PHOTOGRAPHY", desc: "We celebrate the miracle of pregnancy with a touch of tenderness" },
    { id: "Five", title: "WHAT DO YOU WANT?", desc: "Let me know what you need" },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 space-y-6 sm:space-y-0">
        <h2 className="font-display text-4xl sm:text-6xl md:text-[160px] lg:text-[200px] leading-none tracking-tighter">
          COLLECTION
        </h2>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
            <span className="material-icons">arrow_back</span>
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-6 sm:space-y-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 dark:border-gray-800 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center group cursor-pointer hover:border-black dark:hover:border-white transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-16 w-full">
              <div className="w-full sm:w-24">
                {idx === 0 && (
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                    WHY CHOOSE US
                  </h3>
                )}
                <span className="text-gray-600 dark:text-gray-400 font-mono group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item.id}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-display text-xl sm:text-3xl tracking-tight group-hover:translate-x-2 sm:group-hover:translate-x-4 transition-transform duration-300">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
            <button className="mt-4 sm:mt-0 text-black dark:text-white transform group-hover:-rotate-45 transition-transform duration-300">
              <span className="material-icons text-2xl sm:text-3xl">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;