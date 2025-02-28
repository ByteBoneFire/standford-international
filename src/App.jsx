import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogArticleSection from './components/blogPage/BlogArticleSection';
import FooterSection from './components/FooterSection';
import RightsReservedSection from './components/RightsReservedSection';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/homePage';
import Contact from './components/Contact';
import Services from './components/Services';
import BlogPost from './components/blogPage/BlogPost';
import BlogDetails from './components/blogPage/BlogDetails';

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
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Navbar fixed at the top */}
        <Navbar />

        {/* Main content with padding to prevent overlap */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<BlogArticleSection />} />
            <Route path="/blogs-details" element={<BlogPost />} />
            {/* <Route path="/" element={<BlogList />} /> */}
            <Route path="/blog/:id" element={<BlogDetails />} />

            
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
