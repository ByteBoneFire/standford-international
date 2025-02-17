import React, { useState } from 'react';
import TeamsDetails from '../utils/teamsDetails';

function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);


  // Calculate the number of slides needed (TeamsDetails.length / 3, rounded up)
  const totalSlides = Math.ceil(TeamsDetails.length / 3);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="team-section py-8 bg-bgPrimary">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-1xl lg:text-2xl font-bold text-red-500 mb-2">
          Meet Our Teams
        </h2>
        <p data-aos="fade-up" className="text-3xl lg:text-4xl font-bold text-Secondary mb-8">
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
                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 justify-center">
                  {TeamsDetails.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                    <div data-aos="fade-up" key={index} className="w-1/3 lg:w-1/5 px-4">
                      <div className="mx-auto my-auto text-center group perspective-1000">
                        <div 
                          className="relative transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
                          style={{
                            position: 'relative',
                            paddingBottom: 'calc(4 / 3 * 100%)',
                            marginBottom: '.5rem',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          <img
                            style={{
                              position: 'absolute',
                              height: '100%',
                              width: '100%',
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              objectFit: 'cover',
                              backfaceVisibility: 'hidden',
                            }}
                            src={member.image || 'https://via.placeholder.com/300x400'}
                            alt={member.name}
                            className="rounded-lg transition-transform duration-300 ease-out"
                          />
                          <div 
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                          />
                        </div>
                        <div className="text-left mt-[-5px]">
                          <h3 className="font-bold text-red-600 text-md lg:text-xl mb-1">{member.name}</h3>
                          <p className="text-red-400 lg:font-bold text-sm lg:text-md">{member.title}</p>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-red-600 w-6'
                    : 'bg-gray-300 hover:bg-red-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* decoration pic */}
        <img
          src='assets/DecorPic/decorpic1.png'
          alt={''}
            className=" absolute h-full w-screen top-0 left-120 right-0 bottom-0 object-fit -z-10 rounded-lg"
        />
      </div>
        </div>
    </section>
  );
}

export default TeamSection;
