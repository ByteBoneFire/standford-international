import React from 'react';

function TeamSection() {
  return (
    <section className="team-section py-16 bg-bgPrimary">
      <div className="container mx-auto text-center">
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-primary mb-4">
          Meet Our Team
        </h2>
        <p data-aos="fade-up" className="text-gray-700 mb-8">
          Experience Team Members
        </p>
        <div className="flex justify-center space-x-4">
          <img
            data-aos="fade-up"
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Team Member 1"
            className="rounded-full shadow-md"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Team Member 2"
            className="rounded-full shadow-md"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="400"
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Team Member 3"
            className="rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
