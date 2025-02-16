import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
import ScrollSection from './components/ScrollSection';
import ServiceSection from './components/ServiceSection';
import TeamSection from './components/TeamSection';
import FounderTestimony from './components/FounderTestimony';
import ClientsTestimony from './components/ClientsTestimony';
<<<<<<< HEAD
import BlogArticleSection from './components/BlogArticleSection';
=======
import BlogArticleSection from './components/blogPage/BlogArticleSection';
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
import NewsletterSignupSection from './components/NewsletterSignupSection';
import FooterSection from './components/FooterSection';
import RightsReservedSection from './components/RightsReservedSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
<<<<<<< HEAD
=======
import About from './components/About';
import Home from './components/homePage/Home';
import Contact from './components/Contact';
import Services from './components/Services';
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d

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
<<<<<<< HEAD
      <div className="App">
        <Navbar />
        <Hero />
        <ScrollSection />
        <ServiceSection />
        <TeamSection />
        <FounderTestimony />
        <ClientsTestimony />
        <BlogArticleSection />
        <NewsletterSignupSection />
        <FooterSection />
        <RightsReservedSection />
      </div>
    </BrowserRouter>
=======
      <div className="flex flex-col min-h-screen">
        {/* Navbar fixed at the top */}
        <Navbar />

        {/* Main content with padding to prevent overlap */}
        <main className="flex-1 mt-16 p-4 h-[calc(100vh-8rem)] overflow-auto">
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

    // <BrowserRouter>
    //   <div 
    //   // className="App"
    //   >
    //     <Navbar />
    //     <main className="content">
    //     <Routes>
    //       <Route path ='/' element={<Home/>}> </Route>
    //       <Route path ='/about' element={<About/>}> </Route>
    //       <Route path ='/contact' element={<Contact/>}> </Route>

    //     {/* 
        
    //     <ServiceSection />
    //     <TeamSection />
    //     <FounderTestimony />
    //     <ClientsTestimony />
    //     <BlogArticleSection />
    //     <NewsletterSignupSection /> */}
    //     </Routes>
    //     </main>
    //     {/* <Hero /> */}
    //     <FooterSection />
    //     <RightsReservedSection />
    //   </div>
    // </BrowserRouter>
>>>>>>> 362b24ec9600fcc5a5bee34800bd824aaa006d4d
  );
}

export default App;
