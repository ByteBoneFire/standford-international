import React from 'react'

const BlogList = () => {
  return (
    <div>BlogList</div>
  )
}

export default BlogList

// import React from "react";
// import { useNavigate } from "react-router-dom";

// // const blogPostList = [
// //   { id: 1, title: "Student visa", date: "Mar 25, 2020", category: "University", description: "Doubling my 9-5 salary several times...", quote: "You can develop side-businesses...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuijY6PBz7YdTv2IwsQB2iJmBkx29awwpUSA&s" },
// //   { id: 2, title: "How Stanford International helped me secure a temporary residence visa", date: "Mar 25, 2020", category: "Temporary Residence", description: "Understanding Flexbox is essential...", quote: "Mastering Flexbox allows you to create...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_Up-17RyznF2bYNYUrhlhH8Xr1DAvLkxg&s" },
// //   { id: 3, title: "Mastering in getting graduate visa", date: "Mar 25, 2020", category: "Graduate Visa", description: "CSS Grid Layout offers a powerful way...", quote: "Learning Grid Layout will help you...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&s" }
// // ];

// const blogPostList = [
//     { id:1,
//       title: "Student visa ",
//       date: "Mar 25, 2020",
//       category: "University",
//       description: "Doubling my 9-5 salary several times in my career is something I never thought could happen.",
//       quote: "You can develop side-businesses, side-hustles, and hobbies that can supplement your 9-5 income.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuijY6PBz7YdTv2IwsQB2iJmBkx29awwpUSA&s"
//     },
//     {
//       id:2,
//       title: "How Stanford International helped me secure a temporary residence visa",
//       date: "Mar 25, 2020",
//       category: "Temporary Residence",
//       description: "Understanding Flexbox is essential for modern web development and layout design.",
//       quote: "Mastering Flexbox allows you to create responsive and flexible layouts easily.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_Up-17RyznF2bYNYUrhlhH8Xr1DAvLkxg&s"
//     },
//     {
//       id:3,
//       title: "Mastering in getting graduate visa",
//       date: "Mar 25, 2020",
//       category: "Graduate Visa",
//       description: "CSS Grid Layout offers a powerful way to build complex layouts with ease.",
//       quote: "Learning Grid Layout will help you structure pages efficiently and cleanly.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&s"
//     },
//     {
//      id:4,
//       title: "University as a pathway to a successful career",
//       date: "Jan 15, 2025",
//       category: "University",
//       description: "AI is transforming web design with tools that enhance the user experience and streamline development.",
//       quote: "AI tools are reshaping the design process, making it more efficient and personalized.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgY3MJjoOgWaWxGiH2vFdTLyC-VzthYCBMO6H9GQsqrw&s"
//     },
//     {
//         id:5,
//       title: "Role of graduate visa in my career",
//       date: "Feb 10, 2025",
//       category: "Graduate Visa",
//       description: "Design systems are essential for ensuring consistency and scalability in large projects.",
//       quote: "A solid design system can dramatically reduce design debt and improve team collaboration.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s"
//     }
//    ];

// const BlogList = () => {
//   const navigate = useNavigate();

//   const handleClick = (id) => {
//     navigate(`/blog/${id}`);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogPostList.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
//             onClick={() => handleClick(post.id)}
//           >
//             <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
//             <h2 className="text-xl font-semibold">{post.title}</h2>
//             <p className="text-sm text-gray-500">{post.date} • {post.category}</p>
//             <p className="text-gray-700 mt-2">{post.description.slice(0, 100)}...</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogList;
