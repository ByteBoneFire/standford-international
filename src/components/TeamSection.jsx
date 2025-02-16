import React from 'react';

function TeamSection() {
<<<<<<< HEAD
  return (
    <section className="team-section py-16 bg-bgPrimary">
=======
  const teamData = [
    {
      name: 'John Doe',
      title: 'CEO',
      image:'assets/college/college 5.png'
    },
    {
      name: 'Jane Smith',
      title: 'CTO',
      image:'assets/college/college 4.png'
    },
    {
      name: 'Mike Johnson',
      title: 'Marketing Manager',
      image:'assets/college/college 6.png'
    },
  ];
  return (
    <section className="team-section py-16 bg-pink-100">
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
      <div className="container mx-auto text-center">
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-primary mb-4">
          Meet Our Team
        </h2>
        <p data-aos="fade-up" className="text-gray-700 mb-8">
          Experience Team Members
        </p>
        <div className="flex justify-center space-x-4">
<<<<<<< HEAD
=======

        </div>
        <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamData.map((member, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-64 object-cover"
              src={member.image || 'https://via.placeholder.com/300'} // Placeholder for missing images
              alt={member.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{member.name}</div>
              <p className="text-gray-700 text-base">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* <div className="flex justify-center space-x-4">
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
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
<<<<<<< HEAD
        </div>
=======
        </div> */}
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
      </div>
    </section>
  );
}

export default TeamSection;
