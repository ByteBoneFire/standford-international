import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollSection from './components/ScrollSection';
import ServiceSection from './components/ServiceSection';
import TeamSection from './components/TeamSection';
import FounderTestimony from './components/FounderTestimony';
import ClientsTestimony from './components/ClientsTestimony';
import BlogArticleSection from './components/BlogArticleSection';
import NewsletterSignupSection from './components/NewsletterSignupSection';
import FooterSection from './components/FooterSection';
import RightsReservedSection from './components/RightsReservedSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

const RoutingService = () => {

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
            <div className="App">
                <Routes>
                    <Route path='/' element={<Hero />}> </Route>
                    <Route path='/about' element={<About />}> </Route>
                </Routes>
                <Navbar />
                {/* <Hero /> */}
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
    )
}

export default RoutingService