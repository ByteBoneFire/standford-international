import React from 'react';

function FounderTestimony() {
  const stats = [
    { value: "100k+", label: "Happy Customers" },
    { value: "500+", label: "On going Projects" },
    { value: "10+", label: "Years of Experience" }
  ];

  return (
    <section className="founder-testimony py-8 bg-bgSecondary">
      <div className="relative container mx-auto lg:w-4/5">
        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4'>
          {/* Quote and Stats Container */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            <blockquote data-aos="fade-down" className="text-xl lg:text-2xl text-black-700 font-bold mb-3  font-sans leading-relaxed">
              <span className="text-black">"</span>
              Conveniently Co-ordinate value-added opportunity without proactive niches.
              Stop Waiting And Start Living Your Australian Dream Today with
              <span className='text-brand'> Stanford International</span>
              <span className="text-black">"</span>
            </blockquote>
            
            <div data-aos="fade-right" className=" text-right text-gray-600 mb-6">
              <span className='font-semibold text-black'>- Kim Berly Hansen</span>
              <span className='text-gray-500'>, Founder & CEO</span>
            </div>

            {/* Stats Grid */}
            <div data-aos="fade-up" className="grid grid-cols-4 gap-1">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Container */}
          <div className="hidden md:inline-block lg:inline-block w-full lg:w-1/5 h-[300px]">
            <img
              data-aos="fade-left"
              data-aos-delay="400"
              src='assets/Teams/Team1.jpg'
              alt="Founder"
              className="w-full h-full rounded-lg object-[50%_20%] object-cover"
            />
          </div>
        </div>

        {/* Background Decoration Image */}
        <img
          data-aos="fade-up"
          data-aos-delay="500"
          src='assets/DecorPic/decorpic1.png'
          alt=""
          className="absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover -z-10 rounded-lg opacity-50"
        />
      </div>
    </section>
  );
}

export default FounderTestimony;
