import React from 'react';
import logo from '/assets/logo.png';


const page = () => {
    return (
      <section className="footer-section py-8 bg-bgSecondary">
        <div className="container mx-auto px-4 text-secondary">
          <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-4">
          <div className='max-md:col-span-2'>
          <div className='flex items-start mb-4'>
              <img className='object-contain' src={logo} width={60} height={60}/>
              <h3 className="text-xl font-semibold">Stanford International Consultancy</h3>
            </div>
              <p className="mt-2">This is the best consultancy in the world</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">COMPANY</h3>
              <ul className='m-2 space-y-2'>
                <li><a href="/about" className="hover:text-blue-500 transition-colors hover:underline">About</a></li>
                <li><a href="/services" className="hover:text-blue-500 transition-colors hover:underline">Feature</a></li>
                <li><a href="/contact" className="hover:text-blue-500 transition-colors hover:underline">Works</a></li>
                <li><a href="/contact" className="hover:text-blue-500 transition-colors hover:underline">Careers</a></li>
  
  
              </ul>
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-4">HELP</h3>
              <ul className='m-2 space-y-2'>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Customer Support</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Delivery Details</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Privacy Policy</a></li>
  
  
              </ul>
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-4">RESOURCES</h3>
              <ul className='m-2 space-y-2'>
                <li><a href="/blogs" className="hover:text-blue-500 transition-colors hover:underline">Free Ebooks</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Development Details</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">How to Blog</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Privacy Policy</a></li>


              </ul>
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-4">LINK</h3>
              <ul className='m-2 space-y-2'>
                <li><a href="/blogs" className="hover:text-blue-500 transition-colors hover:underline">Customer Support</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Youtube Playlist</a></li>
              </ul>
            </div>


            {/* <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="">123 Main Street</p>
              <p className="">City, State 12345</p>
              <p className="">Email: info@example.com</p>
            </div> */}
          </div>
        </div>
      </section>    
  
 )
}


export default page
