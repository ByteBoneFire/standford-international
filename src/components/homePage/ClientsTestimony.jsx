import React from "react";
import { MdStar } from "react-icons/md";

function ClientsTestimony() {
  return (
    <section className="clients-testimony py-16 bg-bgPrimary">
      <div className="container mx-auto">
        <h2
          data-aos="fade-up"
          className="text-2xl text-center font-semibold text-secondary mb-4"
        >
          Clients Testimony
        </h2>
        <p data-aos="fade-up" className="text-center text-gray-700 mb-8">
          Check What's Our Client Say About Us
        </p>
        <div className="flex gap-8 flex-wrap justify-center">
          <div
            data-aos="fade-up"
            className="bg-white min-w-[345px] w-80 rounded-lg shadow-md p-6 space-y-2"
          >
            <div className="flex">
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
            </div>
            <p className="font-semibold">"Awesome Experience!"</p>
            <p className="text-gray-700 text-xs">
              The education system in Australia is widely recognized worldwide for its strong reputation, practical, and efficient teaching approaches.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white min-w-[345px] w-80 rounded-lg shadow-md p-6 space-y-2"
          >
            <div className="flex">
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
            </div>
            <p className="font-semibold">"Awesome Experience!"</p>
            <p className="text-gray-700 text-xs">
              The education system in Australia is widely recognized worldwide for its strong reputation, practical, and efficient teaching approaches.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white min-w-[345px] w-80 rounded-lg shadow-md p-6 space-y-2"
          >
            <div className="flex">
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
              <MdStar className="text-yellow-500" size={20} />
            </div>
            <p className="font-semibold">"Awesome Experience!"</p>
            <p className="tracking-4 leading-4 text-gray-700 text-xs">
              The education system in Australia is widely recognized worldwide for its strong reputation, practical, and efficient teaching approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsTestimony;
