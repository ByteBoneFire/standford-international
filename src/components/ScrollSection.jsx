import React from 'react';
import  collegeImages  from '../utils/collegeImages';

function ScrollSection() {

  return (
    <section className="scroll-section flex flex-col items-center py-10 bg-bgPrimary h-auto overflow-x-hidden">
      <h2 data-aos="fade-down" className="max-sm:text-md md:text-3xl font-semibold text-black mb-6">
        We Collaborate With <span className='text-green-500'>30+</span> Leading Colleges
      </h2>
    
      <div className="flex flex-col items-center gap-12 overflow-hidden">
        {/* First row scrolling left */}
        <div className="flex animate-scroll-left">
          {[...collegeImages, ...collegeImages].map((image, index) => (
            <div key={`${image.id}-${index}`} className="flex-shrink-0 w-60 h-32 mx-6 bg-white rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
                loading='lazy'
              />
            </div>
          ))}
        </div>

        {/* Second row scrolling right */}
        <div className="flex animate-scroll-right">
          {[...collegeImages, ...collegeImages].map((image, index) => (
            <div key={`${image.id}-${index}`} className="flex-shrink-0 w-60 h-32 mx-6 bg-white rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-30%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-30%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}
      </style>

    </section>
  );
}

export default ScrollSection;
