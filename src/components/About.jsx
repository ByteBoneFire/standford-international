import React from 'react';
function About() {
  return (
      <section className="about w-full min-h-4/5 bg-bgSecondary py-24">
        <div className="container mx-auto my-auto">
          <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary text-center mb-12">
            About Us
          </h2>
          <p data-aos="fade-up" className="text-secondary text-center text-lg">
            We are a consulting agency dedicated to helping businesses succeed.
          </p>
        </div>
      </section>
     
  );
}

export default About;
