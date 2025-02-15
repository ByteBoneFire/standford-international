import React from 'react';

const featuresData = [
  {
    title: 'Innovative Solutions',
    description: 'We provide cutting-edge solutions tailored to your business needs.',
  },
  {
    title: 'Expert Team',
    description: 'Our team of experts is dedicated to helping you achieve your goals.',
  },
  {
    title: 'Proven Results',
    description: 'We have a track record of delivering results for our clients.',
  },
];

function Features() {
  return (
    <section className="features py-24">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="feature-item bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
