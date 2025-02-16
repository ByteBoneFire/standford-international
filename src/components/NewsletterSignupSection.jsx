import React from 'react';

function NewsletterSignupSection() {
  return (
    <section className="newsletter-signup-section px-20 py-16 bg-bgPrimary">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center  container mx-auto text-center">
        <p data-aos="fade-up" className="text-gray-700 text-lg ">Stay up to date with our latest news and updates.</p>
        <form data-aos="fade-up" className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md py-2 px-4 text-gray-700"
          />
          <button className="bg-button text-black py-2 px-4 rounded-md ml-2">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignupSection;
