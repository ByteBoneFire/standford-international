import React from 'react';

const serviceData = [
<<<<<<< HEAD
  { title: 'Career Counseling', description: 'Providing Best Services', link: '#' },
  { title: 'Migration', description: 'Providing Best Services', link: '#' },
  { title: 'Health Insurance', description: 'Providing Best Services', link: '#' },
=======
  { title: 'Career Counseling', description: 'Providing Best Services',title :'Career Counselling', link: '#' },
  { title: 'Migration', description: 'Providing Best Services',title:'Migration', link: '#' },
  { title: 'Health Insurance', description: 'Providing Best Services',Title: 'Health Insurance', link: '#' },
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
];

function ServiceSection() {
  return (
<<<<<<< HEAD
    <section className="px-20 service-section py-12 bg-brand">
=======
    <section className="service-section py-12 bg-secondary">
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-primary text-center mb-8">
          Providing Best Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {serviceData.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
<<<<<<< HEAD
              className="flex flex-col justify-between bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href={service.link} className=" mt-2 text-button hover:underline">
=======
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p >{service.title}</p>
              <p className="text-gray-600"> {service.description} </p>
              <a href={service.link} className="text-blue-500 hover:underline">
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
