import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoTrendingUpOutline } from "react-icons/io5";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "How a Student Visa Can Boost Your Career Opportunities",
      date: "Mar 25, 2020",
      category: "University",
      description:
        "Doubling my 9-5 salary several times in my career is something I never thought could happen.",
      quote:
        "You can develop side-businesses, side-hustles, and hobbies that can supplement your 9-5 income.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuijY6PBz7YdTv2IwsQB2iJmBkx29awwpUSA&s",
    },
    {
      id: 2,
      title:
        "How Stanford International helped me secure a temporary residence visa",
      date: "Mar 25, 2020",
      category: "Temporary Residence",
      description:
        "Understanding Flexbox is essential for modern web development and layout design.",
      quote:
        "Mastering Flexbox allows you to create responsive and flexible layouts easily.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_Up-17RyznF2bYNYUrhlhH8Xr1DAvLkxg&s",
    },
    {
      id: 3,
      title: "Mastering in getting graduate visa",
      date: "Mar 25, 2020",
      category: "Graduate Visa",
      description:
        "CSS Grid Layout offers a powerful way to build complex layouts with ease.",
      quote:
        "Learning Grid Layout will help you structure pages efficiently and cleanly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&s",
    },
    {
      id: 4,
      title: "University as a pathway to a successful career",
      date: "Jan 15, 2025",
      category: "University",
      description:
        "AI is transforming web design with tools that enhance the user experience and streamline development.",
      quote:
        "AI tools are reshaping the design process, making it more efficient and personalized.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgY3MJjoOgWaWxGiH2vFdTLyC-VzthYCBMO6H9GQsqrw&s",
    },
    {
      id: 5,
      title: "Role of graduate visa in my career",
      date: "Feb 10, 2025",
      category: "Graduate Visa",
      description:
        "Design systems are essential for ensuring consistency and scalability in large projects.",
      quote:
        "A solid design system can dramatically reduce design debt and improve team collaboration.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s",
    },
  ];

  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="px-4 bg-bgSecondary py-8">
      <div className="container mx-auto">
        <section className="flex flex-col md:flex-row-reverse justify-between items-center mb-6">
          <div
            data-aos="fade-right"
            className=" text-secondary max-md:text-center lg:text-end"
          >
            <h2 className="text-lg text-red-400">Article and Blogs</h2>
            <span className="text-secondary  block text-2xl font-bold">
              Get Every Single
              <br /> Article And Blogs
            </span>
          </div>
          <Link
            to={"/blogs-details"}
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-button underline hover:text-green-500 text-black font-bold flex items-end gap-1 transition duration-300"
          >
            Browse All
            <IoTrendingUpOutline size={24} />
          </Link>
        </section>
        {/* <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max--2xl">
          {currentPosts.slice(0,3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image}
                alt="Blog Image"
                className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.description.substring(0, 50)}...</p>
            </div>
          ))}
        </div> */}

        {/* <div className="container mx-auto px-2 py-6"> */}
        <div className="container mx-auto px-2 py-6 max-w-6xl">
          {" "}
          {/* Adjusted width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Increased gap for equal spacing */}
            {currentPosts.slice(0, 3).map((blog, index) => (
              <div
                key={blog.id}
                data-aos="fade-up"
                data-aos-delay={blog.id * 100}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                {" "}
                {/* Flex for equal spacing */}
                <img
                  src={blog.image}
                  alt="Blog Image"
                  className="w-full h-30 object-cover rounded-lg shadow-lg mb-6"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 flex-grow">{blog.description}</p>{" "}
                {/* flex-grow for equal height */}
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
