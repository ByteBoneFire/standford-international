import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollSection from './components/ScrollSection';
import ServiceSection from './components/ServiceSection';
import TeamSection from './components/TeamSection';
import FounderTestimony from './components/FounderTestimony';
import ClientsTestimony from './components/ClientsTestimony';
import BlogArticleSection from './components/blogPage/BlogArticleSection';
import NewsletterSignupSection from './components/NewsletterSignupSection';
import FooterSection from './components/FooterSection';
import RightsReservedSection from './components/RightsReservedSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Home from './components/homePage/Home';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar fixed at the top */}
        <Navbar />

        {/* Main content with padding to prevent overlap */}
        <main className="flex-1 mt-16 h-[calc(100vh-8rem)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<BlogArticleSection />} />
            
          </Routes>
        </main>

        {/* Footer fixed at the bottom */}
        <footer className="mt-auto w-full">
          <FooterSection />
          <RightsReservedSection />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
