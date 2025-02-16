import React from 'react';

const servicesData = [
  {
    title: 'Business Consulting',
    description: 'We offer expert advice to help you grow your business.',
  },
  {
    title: 'Marketing Strategy',
    description: 'We develop effective marketing strategies to reach your target audience.',
  },
  {
    title: 'Financial Planning',
    description: 'We provide financial planning services to help you achieve your goals.',
  },
];

function Services() {
  return (
    <section className="services bg-gray-100 py-24">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="service-item bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
