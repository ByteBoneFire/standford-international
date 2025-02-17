import React from 'react';
import { FcRating } from "react-icons/fc";

function ClientsTestimony() {
  return (
    <section className="clients-testimony py-16 bg-bgPrimary">
      <div className="container mx-auto text-center">
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-secondary mb-4">
          Clients Testimony
        </h2>
        <p data-aos="fade-up" className="text-gray-700 mb-8">
          Check What's Our Client Say About Us
        </p>
        <div className="flex justify-center space-x-4">
          <div data-aos="fade-up" className="bg-white rounded-lg shadow-md p-6 w-1/4">
          <div className='flex justify-center space-x-2'> 
              <FcRating/>
              <FcRating/>
              <FcRating/>
              <FcRating/>
            </div>
            <p>"Awesome Experience!"
            </p>
            <p className="text-gray-700 text-xs">The education system in Australia is widely recognized worldwide for its strong reputation, characterized by innovative, practical, and efficient teaching approaches.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-lg shadow-md p-6 w-1/4">
            <p className="text-gray-700">"Great Service!"</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="bg-white rounded-lg shadow-md p-6 w-1/4">
            <p className="text-gray-700">"Highly Recommend!"</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsTestimony;
