import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//icons
import { HiMenu, HiX } from "react-icons/hi";
import { IoTrendingUpOutline } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if current route is home
  const isHome = location.pathname === '/';

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      //check if hero-section is scrolled
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //toggle menu for mobile view
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 px-4 left-0 w-full z-20 ${
        isHome ? 'bg-bgSecondary' :'bg-transparent'
      } transition-colors duration-300`}
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 relative z-30">
        <div className="flex items-center">
          <img
            src="assets/logo.png"
            alt="Company Logo"
            className="rounded-full mr-2"
            loading="lazy"
            width={50}
            height={50}
          />
          <Link
            to="/"
            className={`max-sm:w-[250px] md:w-[280px] max-sm:text-md md:text-xl font-semibold uppercase ${
              isHome ? (isScrolled ? "text-black" : "text-white") : "text-black"
            }`}
          >
            Stanford International Consultancy
          </Link>
        </div>
        {/* for desktop view */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLinks isScrolled={isScrolled} currentPath={location.pathname} />
        </div>

        {/* for mobile view */}
        <button
          className="lg:hidden text-black p-2 relative z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <HiX size={24} />
          ) : (
            <HiMenu size={24} color={isScrolled ? "black" : "white"} />
          )}
        </button>
        {/* for mobile view */}
        <div
          className={`
          lg:hidden fixed top-0 left-0 w-full h-auto bg-gray-100
          transform transition-transform duration-300 ease-in-out z-40
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        >
          <div className="flex flex-col items-center pt-24 pb-4 space-y-6">
            <NavLinks mobile currentPath={location.pathname} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile, isScrolled }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const linkClass = `hover:text-blue-500 uppercase tracking-wider font-semibold ${
    mobile ? "text-lg text-black" : isHome ? (isScrolled ? "text-black" : "text-white") : "text-black"
  }`;
  const buttonClass = `${(!isHome || (isScrolled && !mobile)) ?'bg-button': 'border-button border text-white  bg-button/10'} hover:bg-green-600 transition duration-300 text-black font-bold py-3 px-5 rounded-lg ${
    mobile ? "w-48 text-center mt-4" : "ml-12"
  }`;

  return (
    <>
      <Link to="/" className={linkClass}>
        Home
      </Link>
      <Link to="/about" className={linkClass}>
        About
      </Link>
      <Link to="/services" className={linkClass}>
        Services
      </Link>
      <Link to="/blogs" className={linkClass}>
        Blogs
      </Link>
      <Link to="/contact" className={linkClass}>
        Contact
      </Link>
      <Link to="/contact" className={`${buttonClass} flex items-end gap-1`}>
        Get Consulting <IoTrendingUpOutline size={24} />
      </Link>
    </>
  );
}

export default Navbar;
