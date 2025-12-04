import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: "COMPLETE SERVICE", desc: "Get your preferred photographer for every moment" },
    { title: "UNLIMITED EDITING", desc: "Awesome editing to get the best photo possible" },
    { title: "FIXED RATE", desc: "Easily booking photographer with fixed hourly rate" },
    { title: "SECURED PAYMENT", desc: "Payment to photographer only once photo delivered" },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
            WHY CHOOSE US
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We create visual stories that provide unique experiences. With our dedication to exploring the beauty in every moment, we offer more than just images—we capture the emotion, intimacy, and uniqueness that makes every moment worthwhile.
          </p>
        </div>
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div key={idx} className="group">
              <h4 className="font-display text-4xl sm:text-5xl tracking-tight transition-colors group-hover:text-primary dark:group-hover:text-primary">
                {service.title}
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;