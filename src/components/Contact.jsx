import React from 'react';
import NewsletterSignupSection from './homePage/NewsletterSignupSection';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import address from '/assets/address.png';

function Contact() {
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 mt-6">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Info Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
                <FaLocationDot className="text-primary text-2xl" />
                <div>
                  <p className="font-semibold text-lg">Visit us</p>
                  <span className="block text-gray-600">34 Madison Street, NY, USA</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
                <FaPhoneAlt className="text-primary text-2xl" />
                <div>
                  <p className="font-semibold text-lg">Call us</p>
                  <span className="block text-gray-600">(123) 456-7890</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
                <MdEmail className="text-primary text-2xl" />
                <div>
                  <p className="font-semibold text-lg">Email us</p>
                  <span className="block text-gray-600">contact@example.com</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div>
              <form className="bg-white p-6 shadow-md rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700">First Name</label>
                    <input type="text" placeholder="John" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                    <input type="text" placeholder="Doe" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Email</label>
                  <input type="email" placeholder="you@example.com" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="123-456-7890" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows="4" placeholder="Your message..." className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-primary focus:border-primary"></textarea>
                </div>
                <button className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition">Send</button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <img src={address} alt="Location" className="w-full h-80 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      
      <NewsletterSignupSection />
    </>
  );
}

export default Contact;







// import React from 'react';
// import NewsletterSignupSection from './homePage/NewsletterSignupSection';
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import address from '/assets/address.png'


// function Contact() {
//   return (
//     <>
//     <section className="contact bg-bgSecondary py-24">  
//       <div className="container mx-auto my-auto">
//       <div className='flex justify-around gap-4'>
//         <div className='flex items-center gap-4'>
//           <FaLocationDot/>
//           <div>
//             <p> Visit us</p>
//             <span>34 Madison Street </span>
//             <span>ny, usa </span>
//           </div>
//         </div>
//         <div className='flex items-center gap-2'>
//           <FaPhoneAlt/>
//           <div>
//             <p> Visit us</p>
//             <span>34 Madison Street </span>
//             <span>ny, usa </span>
//           </div>
//         </div>
//         <div className='flex items-center gap-2'>
//           <MdEmail/>
//           <div>
//             <p> Visit us</p>
//             <span>34 Madison Street </span>
//             <span>ny, usa </span>
//           </div>
//         </div>
//       </div>
//         <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary text-center mb-12">
//           Contact Us
//         </h2>
//         <form data-aos="fade-up" className="w-full max-w-lg mx-auto">
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
//                 First Name
//               </label>
//               <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="First Name" />
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
//                 Last Name
//               </label>
//               <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full px-3">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                 Email
//               </label>
//               <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="youremail@example.com" />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full px-3">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                 Phone Number
//               </label>
//               <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="tel" placeholder="XXX-XXX-XXXX" />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full px-3">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                 Message
//               </label>
//               <textarea rows={6} className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Message" />
//             </div>
//           </div>
//           <div className="md:flex md:items-center">
//             <div className="md:w-full">
//               <button className="shadow bg-primary w-full hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                 Send
//               </button>
//             </div>
//             {/* <div className="md:w-2/3"></div> */}
//           </div>
//         </form>

//         <div>
//         <img
//           src={address}
//           alt="location Image"
//           className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
//         />

//         </div>
//       </div>
//     </section>
//       <NewsletterSignupSection />
//     </>
//   );
// }

// export default Contact;
