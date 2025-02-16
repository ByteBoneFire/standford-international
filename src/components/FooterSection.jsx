import React from 'react';

function FooterSection() {
  return (
<<<<<<< HEAD
    <section className="footer-section px-20 py-8 bg-brand">
=======
    <section className="footer-section py-8 bg-blue-400">
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <ul>
<<<<<<< HEAD
              <li><a href="#" className="text-gray-200 hover:underline">About Us</a></li>
              <li><a href="#" className="text-gray-200 hover:underline">Services</a></li>
              <li><a href="#" className="text-gray-200 hover:underline">Contact</a></li>
=======
              <li><a href="/about" className="text-gray-200 hover:underline">About Us</a></li>
              <li><a href="/services" className="text-gray-200 hover:underline">Services</a></li>
              <li><a href="/contact" className="text-gray-200 hover:underline">Contact</a></li>
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul>
<<<<<<< HEAD
              <li><a href="#" className="text-gray-200 hover:underline">Blog</a></li>
=======
              <li><a href="/blogs" className="text-gray-200 hover:underline">Blog</a></li>
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
              <li><a href="#" className="text-gray-200 hover:underline">FAQ</a></li>
              <li><a href="#" className="text-gray-200 hover:underline">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Help</h3>
            <ul>
              <li><a href="#" className="text-gray-200 hover:underline">Support</a></li>
              <li><a href="#" className="text-gray-200 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <p className="text-gray-200">123 Main Street</p>
            <p className="text-gray-200">City, State 12345</p>
            <p className="text-gray-200">Email: info@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
