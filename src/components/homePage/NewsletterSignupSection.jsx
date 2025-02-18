import React from 'react';

function NewsletterSignupSection() {
  return (
    <section className="newsletter-signup-section lg:px-20 py-16 bg-bgPrimary">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center container mx-auto text-center">
        <p data-aos="fade-right" className="text-gray-900 max-md:text-xl lg:text-2xl font-bold">Get Updates On Our Latest News By Subscribing To Our Newsletter.</p>
        <form data-aos="fade-left" className="mt-4 flex items-center justify-center">
          <input
            type="email"
            placeholder="johndoe@example.com"
            className="rounded-md py-2 px-4 text-gray-700"
          />
          <button className="bg-button text-black py-2 px-4 rounded-md ml-2">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignupSection;
