import React from 'react';
import { IoIosAirplane, IoMdBook, IoIosHeart   } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoTrendingUpOutline } from 'react-icons/io5';

const serviceData = [
  { 
    icon: <IoMdBook size={40} />, 
    title: 'Career Counseling', 
    description: 'Whether you\'re entering the workforce or looking to pivot in your career, we provide personalized advice and strategic guidance to support your journey.', 
    link: '#' 
  },
  { 
    icon: <IoIosAirplane size={40} />, 
    title: 'Migration', 
    description: 'From visa applications to settling into your new home, we provide expert advice and support to ensure a smooth transition and help you start your new life abroad with confidence.', 
    link: '#' 
  },
  { 
    icon: <IoIosHeart size={40} />, 
    title: 'Health Insurance', 
    description: 'Protect your health and future with our tailored health insurance plans. We guide you through the process of selecting the perfect health insurance policy to secure your peace of mind.', 
    link: '#' 
  },
];


function ServiceSection() {
  return (
    <section className="service-section py-12 bg-bgSecondary">
      <div className="container mx-auto">
        <section className='px-4 flex flex-col md:flex-row justify-between items-center mb-6'>
          <h2 data-aos="fade-right" className="text-3xl font-bold text-secondary">
            Providing Best Services
            <span className='text-gray-500 text-sm hidden md:block'>
              We offer a range of services to help you achieve your goals.
            </span>
          </h2>
          <Link
          to={'/services'}
          data-aos="fade-left"
          data-aos-delay="400"
          className="bg-button hover:bg-green-500 text-black font-bold px-5 py-2 rounded-lg w-fit flex items-end gap-1 transition duration-300"
        >
          View All Services <IoTrendingUpOutline size={24}/>
        </Link>
        </section>
        <div className="flex flex-wrap mx-auto justify-center gap-8">
          {serviceData.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
              className="w-[320px] flex flex-col justify-between bg-white rounded-lg shadow-md px-10 py-6"
            >
             
              <h3 className="flex items-center gap-2 text-xl font-semibold text-secondary mb-2"> {service.icon} {service.title}</h3>
              <p className='ml-2' >{service.title}</p>
              <p className="text-gray-600 mt-4 text-balance items-start"> {service.description} </p>           
              <button className="bg-gray-100 w-36 hover:bg-green-500 transition duration-300 text-black font-bold mt-4 py-2 px-4 rounded border border-green-600 border-opacity-50">
                <a href={service.link} 
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
