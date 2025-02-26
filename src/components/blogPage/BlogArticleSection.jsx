// import React from 'react';
// import { Link } from 'react-router-dom';

// const blogs = [
//   {
//     id: 1,
//     title: "Student visa",
//     date: "Mar 25, 2020",
//     category: "University",
//     description: "Doubling my 9-5 salary several times in my career is something I never thought could happen.",
//     quote: "You can develop side-businesses, side-hustles, and hobbies that can supplement your 9-5 income.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuijY6PBz7YdTv2IwsQB2iJmBkx29awwpUSA&s"
//   },
//   {
//     id: 2,
//     title: "How Stanford International helped me secure a temporary residence visa",
//     date: "Mar 25, 2020",
//     category: "Temporary Residence",
//     description: "Understanding Flexbox is essential for modern web development and layout design.",
//     quote: "Mastering Flexbox allows you to create responsive and flexible layouts easily.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_Up-17RyznF2bYNYUrhlhH8Xr1DAvLkxg&s"
//   },
// ];

// const BlogArticleSection = () => {
//   return (
//     <div>
//       <h1>Blog List</h1>
//       <ul>
//         {blogs.map(blog => (
//           <li key={blog.id}>
//             <h3>{blog.title}</h3>
//             <img src={blog.image} alt={blog.title} width="100" />
//             <p>{blog.description}</p>
//             <Link to={`/blog/${blog.id}`}>Read more</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BlogArticleSection;








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
     title: "Student visa ",
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
     title: "Mastering in getting graduate visa",
     date: "Mar 25, 2020",
     category: "Graduate Visa",
     description: "CSS Grid Layout offers a powerful way to build complex layouts with ease.",
     quote: "Learning Grid Layout will help you structure pages efficiently and cleanly.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&s"
   },
   {
     id: 4,
     title: "University as a pathway to a successful career",
     date: "Jan 15, 2025",
     category: "University",
     description: "AI is transforming web design with tools that enhance the user experience and streamline development.",
     quote: "AI tools are reshaping the design process, making it more efficient and personalized.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgY3MJjoOgWaWxGiH2vFdTLyC-VzthYCBMO6H9GQsqrw&s"
   },
   {
     id: 5,
     title: "Role of graduate visa in my career",
     date: "Feb 10, 2025",
     category: "Graduate Visa",
     description: "Design systems are essential for ensuring consistency and scalability in large projects.",
     quote: "A solid design system can dramatically reduce design debt and improve team collaboration.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s"
   },
   {
     id: 6,
     title: "Role of graduate visa in my career",
     date: "Feb 10, 2025",
     category: "Graduate Visa",
     description: "Design systems are essential for ensuring consistency and scalability in large projects.",
     quote: "A solid design system can dramatically reduce design debt and improve team collaboration.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s"
   },
   {
     id: 7,
     title: "Role of graduate visa in my career",
     date: "Feb 10, 2025",
     category: "Graduate Visa",
     description: "Design systems are essential for ensuring consistency and scalability in large projects.",
     quote: "A solid design system can dramatically reduce design debt and improve team collaboration.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s"
   },
   {
     id: 8,
     title: "Role of graduate visa in my career",
     date: "Feb 10, 2025",
     category: "Graduate Visa",
     description: "Design systems are essential for ensuring consistency and scalability in large projects.",
     quote: "A solid design system can dramatically reduce design debt and improve team collaboration.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s"
   },
   {
     id: 9,
     title: "Role of graduate visa in my career",
     date: "Feb 10, 2025",
     category: "Graduate Visa",
     description: "Design systems are essential for ensuring consistency and scalability in large projects.",
     quote: "A solid design system can dramatically reduce design debt and improve team collaboration.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s"
   }
 ];


 const postsPerPage = 8;
 const [currentPage, setCurrentPage] = useState(1);
 const navigate = useNavigate();


 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);


 const paginate = (pageNumber) => setCurrentPage(pageNumber);


 return (
   <section className=" bg-bgSecondary py-8">


     <div className="container mx-auto">
       <section className='flex flex-col md:flex-row-reverse justify-between items-center mb-6'>
         <div data-aos="fade-right" className=" text-secondary text-end">
           <h2 className="text-lg text-red-400">Article and Blogs</h2>
           <span className='text-secondary  block text-2xl font-bold'>
             Get Every Single<br /> Article And Blogs
           </span>
         </div>
         <Link
           to={'/blogs-details'}
           data-aos="fade-left"
           data-aos-delay="400"
           className="bg-button hover:bg-green-500 text-black font-bold px-5 py-2 rounded-lg w-fit flex items-end gap-1 transition duration-300"
         >
           Browse All<IoTrendingUpOutline size={24} />
         </Link>
       </section>
       <div className="container mx-auto px-1 py-6 max-w-8xl">
       <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {currentPosts.map((blog) => (
           <div
             key={blog.id}
             className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
            //  onClick={() => navigate(`/blog/${blog.id}`)}
           >
            <Link to={`/blog/${blog.id}`}>  

             <img
               src={blog.image}
               alt="Blog Image"
               className="w-full h-40 object-cover rounded-lg shadow-lg mb-6"
             />
             <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
             {/* <p className="text-gray-700">{blog.description.substring(0, 50)}...</p> */}
             <p className="text-gray-700">{blog.description}</p>

             </Link>
           </div>
         ))}
       </div>
     </div>
     </div>


     <div className="flex justify-center mt-6">
       <button
         onClick={() => paginate(currentPage - 1)}
         disabled={currentPage === 1}
         className="px-4 py-2 mx-2 bg-gray-300 rounded-md text-gray-700"
       >
         Previous
       </button>


       {[...Array(Math.ceil(blogs.length / postsPerPage))].map((_, index) => (
         <button
           key={index}
           onClick={() => paginate(index + 1)}
           className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
             } rounded-md`}
         >
           {index + 1}
         </button>
       ))}


       <button
         onClick={() => paginate(currentPage + 1)}
         disabled={currentPage === Math.ceil(blogs.length / postsPerPage)}
         className="px-4 py-2 mx-2 bg-gray-300 rounded-md text-gray-700"
       >
         Next
       </button>
     </div>
   </section>
 );
};


export default BlogArticleSection;


















