import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { IoTrendingUpOutline } from 'react-icons/io5';

const BlogArticleSection = () => {
  // const blogs = [
  //   { id: 1, title: "Blog 1", date: "2025-02-01", content: "This is the content of Blog 1." },
  //   { id: 2, title: "Blog 2", date: "2025-02-02", content: "This is the content of Blog 2." },
  //   { id: 3, title: "Blog 3", date: "2025-02-03", content: "This is the content of Blog 3." },
  //   { id: 4, title: "Blog 4", date: "2025-02-04", content: "This is the content of Blog 4." },
  //   { id: 5, title: "Blog 5", date: "2025-02-05", content: "This is the content of Blog 5." },
  //   { id: 6, title: "Blog 6", date: "2025-02-06", content: "This is the content of Blog 6." },
  //   { id: 7, title: "Blog 7", date: "2025-02-07", content: "This is the content of Blog 7." },
  //   { id: 8, title: "Blog 8", date: "2025-02-08", content: "This is the content of Blog 8." },
  //   { id: 9, title: "Blog 9", date: "2025-02-09", content: "This is the content of Blog 9." },
  //   { id: 10, title: "Blog 10", date: "2025-02-10", content: "This is the content of Blog 10." },
  // ];

  const blogs = [
    {
      id: 1,
      title: "How a Student Visa Can Boost Your Career Opportunities",
      date: "Mar 25, 2020",
      category: "University",
      description: "Doubling my 9-5 salary several times in my career is something I never thought could happen.",
      quote: "You can develop side-businesses, side-hustles, and hobbies that can supplement your 9-5 income.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuijY6PBz7YdTv2IwsQB2iJmBkx29awwpUSA&s"
    },
    {
      id: 2,
      title: "How Stanford International helped me secure a temporary residence visa",
      date: "Mar 25, 2020",
      category: "Temporary Residence",
      description: "Understanding Flexbox is essential for modern web development and layout design.",
      quote: "Mastering Flexbox allows you to create responsive and flexible layouts easily.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_Up-17RyznF2bYNYUrhlhH8Xr1DAvLkxg&s"
    },
    {
      id: 3,
      title: "Mastering Graduate Visa: A Step-by-Step Guide to Success",
      date: "Mar 25, 2020",
      category: "Graduate Visa",
      description: "CSS Grid Layout offers a powerful way to build complex layouts with ease.",
      quote: "Learning Grid Layout will help you structure pages efficiently and cleanly.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&s"
    }
    
  ];

  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="pt-32 bg-bgSecondary py-8">

      <div className="container mx-auto">
        <section className='flex flex-col md:flex-row-reverse px-4 justify-between items-center mb-6'>
          <div data-aos="fade-right" className=" text-secondary lg:text-end max-md:text-center">
            <h2 className="lg:text-lg text-md text-red-400">Article and Blogs</h2>
            <span className='text-secondary block max-md:text-lg lg:text-2xl font-bold'>
              Get Every Single<br /> Article And Blogs
            </span>
          </div>
          <Link
            to={'/blogs-details'}
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-button underline hover:text-green-500 text-black font-bold w-fit flex items-end gap-1 transition duration-300"
          >
            Browse All<IoTrendingUpOutline size={24} />
          </Link>
        </section>
        <div data-aos="fade-up" className="flex flex-wrap gap-4 items-center justify-center px-5">
          {currentPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-white px-4 py-4 rounded-lg shadow-lg cursor-pointer max-w-[480px] max-md:max-w-[345px] hover:shadow-md transition"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image}
                alt="Blog Image"
                className="w-full h-30 lg:h-80 object-cover rounded-sm shadow-sm mb-6"
              />
              <h2 className="max-md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-500">{blog.description.substring(0, 50)}...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArticleSection;
