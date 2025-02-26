import React from 'react';
import NewsletterSignupSection from './homePage/NewsletterSignupSection';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import address from '.././assets/address.jpg'


function Contact() {
  return (
    <>
    <section className="contact bg-bgSecondary py-24">  
      <div className="container mx-auto my-auto">
      <div className='flex justify-around gap-4'>
        <div className='flex items-center gap-4'>
          <FaLocationDot/>
          <div>
            <p> Visit us</p>
            <span>34 Madison Street </span>
            <span>ny, usa </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <FaPhoneAlt/>
          <div>
            <p> Visit us</p>
            <span>34 Madison Street </span>
            <span>ny, usa </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <MdEmail/>
          <div>
            <p> Visit us</p>
            <span>34 Madison Street </span>
            <span>ny, usa </span>
          </div>
        </div>
      </div>
        <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary text-center mb-12">
          Contact Us
        </h2>
        <form data-aos="fade-up" className="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="First Name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Email
              </label>
              <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="youremail@example.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Phone Number
              </label>
              <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="tel" placeholder="XXX-XXX-XXXX" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea rows={6} className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Message" />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <button className="shadow bg-primary w-full hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Send
              </button>
            </div>
            {/* <div className="md:w-2/3"></div> */}
          </div>
        </form>

        <div>
        <img
          // src={address}
          alt="location Image"
          className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
        />

        </div>
      </div>
    </section>
      <NewsletterSignupSection />
    </>
  );
}

export default Contact;
