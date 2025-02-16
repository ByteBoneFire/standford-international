import React from 'react';
import { IoIosAirplane, IoMdBook, IoIosHeart   } from "react-icons/io";

const serviceData = [
  { 
    icon: <IoMdBook />, 
    title: 'Career Counseling', 
    description: 'Whether you\'re entering the workforce or looking to pivot in your career, we provide personalized advice and strategic guidance to support your journey.', 
    link: '#' 
  },
  { 
    icon: <IoIosAirplane />, 
    title: 'Migration', 
    description: 'From visa applications to settling into your new home, we provide expert advice and support to ensure a smooth transition and help you start your new life abroad with confidence.', 
    link: '#' 
  },
  { 
    icon: <IoIosHeart />, 
    title: 'Health Insurance', 
    description: 'Protect your health and future with our tailored health insurance plans. We guide you through the process of selecting the perfect health insurance policy to secure your peace of mind.', 
    link: '#' 
  },
];


function ServiceSection() {
  return (
    <section className="service-section py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-primary text-center mb-8">
          Providing Best Services
        </h2>
        <div className="flex flex-wrap mx-auto justify-center gap-8">
          {serviceData.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
              className="w-[320px] flex flex-col justify-between bg-white rounded-lg shadow-md px-10 py-6"
            >
             
              <h3 className="flex items-center gap-2 text-xl font-semibold text-secondary mb-2"> {service.icon} {service.title}</h3>
              <p >{service.title}</p>
              <p className="text-gray-600 mt-2"> {service.description} </p>           
              <button className="bg-gray-100 w-36 hover:bg-green-500 transition duration-300 text-black font-bold mt-4 py-2 px-4 rounded border border-green-600 border-opacity-50">
                <a href={service.link} 
                // className="text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
