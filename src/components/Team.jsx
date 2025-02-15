import React from 'react';

const teamData = [
  {
    name: 'John Doe',
    title: 'CEO',
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
  },
  {
    name: 'Mike Johnson',
    title: 'Marketing Manager',
  },
];

function Team() {
  return (
    <section className="team bg-gray-100 py-24">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="team-member bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{member.name}</h3>
              <p className="text-secondary">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
