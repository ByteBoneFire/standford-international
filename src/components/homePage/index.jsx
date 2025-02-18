import React from 'react'
import ServiceSection from './ServiceSection'
import TeamSection from './TeamSection'
import FounderTestimony from './FounderTestimony'
import ClientsTestimony from './ClientsTestimony'
import BlogArticleSection from '../blogPage/BlogArticleSection'
import NewsletterSignupSection from './NewsletterSignupSection'
import Hero from './Hero'
import ScrollSection from './ScrollSection'
import BlogList from './BlogList'

const Home = () => {
    return (
        <div>
            <Hero/>
            <ScrollSection />
            <ServiceSection />
            <TeamSection />
            <FounderTestimony />
            <ClientsTestimony />
            {/* <BlogArticleSection /> */}
            <BlogList/>
            <NewsletterSignupSection />
        </div>
    )
}

export default Home