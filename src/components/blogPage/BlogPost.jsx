import React from 'react'

const BlogPost = () => {
  return (
    <div>BlogPost</div>
  )
}

export default BlogPost


// import React, { useState } from "react";


// const blogPostList = [
//  {
//    title: "Student visa ",
//    date: "Mar 25, 2020",
//    category: "University",
//    description: "Doubling my 9-5 salary several times in my career is something I never thought could happen.",
//    quote: "You can develop side-businesses, side-hustles, and hobbies that can supplement your 9-5 income.",
//    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuijY6PBz7YdTv2IwsQB2iJmBkx29awwpUSA&s"
//  },
//  {
//    title: "How Stanford International helped me secure a temporary residence visa",
//    date: "Mar 25, 2020",
//    category: "Temporary Residence",
//    description: "Understanding Flexbox is essential for modern web development and layout design.",
//    quote: "Mastering Flexbox allows you to create responsive and flexible layouts easily.",
//    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_Up-17RyznF2bYNYUrhlhH8Xr1DAvLkxg&s"
//  },
//  {
//    title: "Mastering in getting graduate visa",
//    date: "Mar 25, 2020",
//    category: "Graduate Visa",
//    description: "CSS Grid Layout offers a powerful way to build complex layouts with ease.",
//    quote: "Learning Grid Layout will help you structure pages efficiently and cleanly.",
//    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&s"
//  },
//  {
//    title: "University as a pathway to a successful career",
//    date: "Jan 15, 2025",
//    category: "University",
//    description: "AI is transforming web design with tools that enhance the user experience and streamline development.",
//    quote: "AI tools are reshaping the design process, making it more efficient and personalized.",
//    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgY3MJjoOgWaWxGiH2vFdTLyC-VzthYCBMO6H9GQsqrw&s"
//  },
//  {
//    title: "Role of graduate visa in my career",
//    date: "Feb 10, 2025",
//    category: "Graduate Visa",
//    description: "Design systems are essential for ensuring consistency and scalability in large projects.",
//    quote: "A solid design system can dramatically reduce design debt and improve team collaboration.",
//    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s"
//  }
// ];


// const BlogPost = () => {
//  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
//  const [searchTerm, setSearchTerm] = useState("");
//  const [selectedCategory, setSelectedCategory] = useState("All");


//  const selectedPost = blogPostList[selectedPostIndex];


//  // Filter posts based on search term and selected category
//  const filteredPosts = blogPostList.filter(post => {
//    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
//    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
//    return matchesSearch && matchesCategory;
//  });


//  // Function to count posts in each category
//  const getCategoryPostCount = (category) => {
//    return blogPostList.filter(post => post.category === category).length;
//  };


//  const handleCategoryClick = (category) => {
//    setSelectedCategory(category);
//  };


//  return (
//    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-10">
//      <div className="flex-1">
//        <h1 className="text-4xl font-bold mb-4 text-gray-900">{selectedPost.title}</h1>
//        <p className="text-gray-600 mb-6 text-sm">{selectedPost.date} • {selectedPost.category} • David Jones</p>
//        <img
//          src={selectedPost.image}
//          alt="Blog Image"
//          className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
//        />
//        <p className="text-gray-700 leading-relaxed mb-6">{selectedPost.description}</p>
//        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 bg-gray-50 p-4 rounded-lg shadow-md">
//          "{selectedPost.quote}"
//        </blockquote>
//      </div>
//      <div className="w-full md:w-1/3">
//        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
//          <input
//            type="text"
//            placeholder="Search blog..."
//            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//            value={searchTerm}
//            onChange={(e) => setSearchTerm(e.target.value)}
//          />
//        </div>
//        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
//          <h2 className="text-lg font-semibold mb-4 text-gray-900">Recent Posts</h2>
//          <ul className="text-sm text-gray-600 space-y-3">
//            {filteredPosts.map((post, index) => (
//              <li
//                key={index}
//                className="cursor-pointer text-blue-500 hover:underline"
//                onClick={() => setSelectedPostIndex(blogPostList.indexOf(post))}
//              >
//                <span>{post.title}</span>
//                <br/>
//                <span className="text-gray-500 text-xs">{post.date}</span>
//              </li>
//            ))}
//          </ul>
//        </div>
//        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//          <h2 className="text-lg font-semibold mb-4 text-gray-900">Categories</h2>
//          <ul className="text-sm text-gray-600 space-y-3">
//            <li
//              className="cursor-pointer hover:text-blue-500"
//              onClick={() => handleCategoryClick("All")}
//            >
//              All ({blogPostList.length})
//            </li>
//            <li
//              className="cursor-pointer hover:text-blue-500"
//              onClick={() => handleCategoryClick("University")}
//            >
//              University ({getCategoryPostCount("University")})
//            </li>
//            <li
//              className="cursor-pointer hover:text-blue-500"
//              onClick={() => handleCategoryClick("Temporary Residence")}
//            >
//              Temporary Residence ({getCategoryPostCount("Temporary Residence")})
//            </li>
//            <li
//              className="cursor-pointer hover:text-blue-500"
//              onClick={() => handleCategoryClick("Graduate Visa")}
//            >
//              Graduate Visa ({getCategoryPostCount("Graduate Visa")})
//            </li>
//          </ul>
//        </div>
//      </div>
//    </div>
//  );
// };


// export default BlogPost;