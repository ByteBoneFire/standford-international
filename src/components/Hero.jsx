import React, { useEffect } from 'react';
import {MdStar,MdStarHalf } from "react-icons/md";
import { Link } from 'react-router-dom';
import {IoTrendingUpOutline} from "react-icons/io5";
import Typewriter from 'typewriter-effect/dist/core'

function Hero() {

  useEffect(()=>{
    new Typewriter('#career-writer',{
      strings: ['Manage Your Career'],
      autoStart: true,
      loop: true
    })
  },[])

  return (
    <section className="hero-section h-screen relative">
      {/* Blurred background div */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/assets/hero_section.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)',
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content container - no blur */}
      <div className="container mx-auto text-start relative z-10 px-20 flex flex-col justify-center h-full">
        <h1 data-aos="fade-up" className="text-5xl font-bold text-white mb-3">
          Get An Easy Way To <br /> <span id='career-writer'>Manage Your Career</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-200 mb-8">
          Helping students achieve their dreams through expert guidance.
        </p>
        <div data-aos="fade-up" data-aos-delay="300" className="flex mb-8 items-center">
          <img
            src="assets/logo.png"
            alt="Company Logo"
            className="rounded-full mr-[-30px]"
            width={60}
            height={60}
            loading='lazy'
          />
          <img
            src="assets/logo.png"
            alt="Company Logo"
            className="rounded-full mr-[-30px]"
            width={60}
            height={60}
            loading='lazy'
          />
          <img
            src="assets/logo.png"
            alt="Company Logo"
            className="rounded-full "
            width={60}
            height={60}
            loading='lazy'
          />
          <p className="text-3xl ml-3 mt-3 w-32 font-semibold text-black leading-none">
           100K+<br/>
            <span className="text-sm">Happy Students</span>
          </p>

          <h6 className="text-6xl mt-3   text-black ">|</h6>

          <p className="text-4xl mt-3 ml-9 w-64  font-semibold container text-black leading-none">
           4.5/5 <span className="text-sm text-black-300">Rating</span> <br />
           <span className='flex'>
             <MdStar className='text-yellow-500' size={20}/>
             <MdStar className='text-yellow-500' size={20}/>
             <MdStar className='text-yellow-500' size={20}/>
             <MdStar className='text-yellow-500' size={20}/>
             <MdStarHalf className='text-yellow-500' size={20}/>
           </span>
          </p>
        </div>
        <Link
          to={'/about'}
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-button hover:bg-green-500 text-black font-bold py-3 px-5 rounded-lg w-fit flex items-end gap-1"
        >
          Learn More <IoTrendingUpOutline size={24}/>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
