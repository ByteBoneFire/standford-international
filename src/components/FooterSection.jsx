import React from 'react';

function FooterSection() {
  return (
    <section className="footer-section py-8 bg-bgSecondary">
      <div className="container mx-auto px-4 text-secondary">
        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-xl font-semibold ">Company</h3>
            <ul>
              <li><a href="/about" className=" hover:underline">About Us</a></li>
              <li><a href="/services" className=" hover:underline">Services</a></li>
              <li><a href="/contact" className=" hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold ">Quick Links</h3>
            <ul>
              <li><a href="/blogs" className=" hover:underline">Blog</a></li>
              <li><a href="#" className=" hover:underline">FAQ</a></li>
              <li><a href="#" className=" hover:underline">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold ">Help</h3>
            <ul>
              <li><a href="#" className=" hover:underline">Support</a></li>
              <li><a href="#" className=" hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold ">Contact</h3>
            <p className="">123 Main Street</p>
            <p className="">City, State 12345</p>
            <p className="">Email: info@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
