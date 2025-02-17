import React, { useState } from 'react';
import TeamsDetails  from '../utils/teamsDetails';

function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);


  // Calculate the number of slides needed (TeamsDetails.length / 3, rounded up)
  const totalSlides = Math.ceil(TeamsDetails.length / 3);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="team-section py-16 bg-bgPrimary">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-1xl lg:text-2xl font-bold text-red-500 mb-3">
          Meet Our Teams
        </h2>
        <p data-aos="fade-up" className="text-3xl lg:text-5xl font-bold text-Secondary mb-12">
          Experience <br /> Team Members
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Group team members in sets of 3 */}
              {[...Array(totalSlides)].map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6">
                  {TeamsDetails.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                    <div data-aos="fade-up" key={index} className="w-1/3 px-4">
                      <div className="mx-auto">
                        <div style={{
                          position: 'relative',
                          paddingBottom: 'calc(4 / 3 * 100%)',
                          marginBottom: '.5rem'
                        }}>
                          <img
                            style={{
                              position: 'absolute',
                              height: '90%',
                              width: '100%',
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              objectFit: 'cover'
                            }}
                            src={member.image || 'https://via.placeholder.com/300x400'}
                            alt={member.name}
                            className="rounded-lg"
                          />
                        </div>
                        <div className="text-left mt-[-5px] lg:mt-[-40px]">
                          <h3 className="font-bold text-red-600 text-3xl mb-1">{member.name}</h3>
                          <p className="text-red-400 font-bold text-lg">{member.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation - now shows one dot per group of 3 */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-red-600 w-6' 
                    : 'bg-gray-300 hover:bg-red-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
