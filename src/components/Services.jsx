import React, { useState } from "react";

export default function Services() {
  const allServices = [
    { title: "Business Advice", highlighted: false },
    { title: "Startup Business", highlighted: true },
    { title: "Financial Advice", highlighted: false },
    { title: "Risk Management", highlighted: false },
    { title: "Business Advice", highlighted: false },
    { title: "Startup Business", highlighted: true },
    { title: "Financial Advice", highlighted: false },
    { title: "Risk Management", highlighted: false },
    { title: "Business Advice", highlighted: false },
    { title: "Financial Advice", highlighted: false },
    { title: "Financial Advice", highlighted: false },
    { title: "Risk Management", highlighted: false },
  ];

  const allProjects = [
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQgm6xksZ4a_wGPHmlHWno8xbC4XGbOCsgXzGHNkGgA&s", title: "Business Strategy", date: "April 30, 2023", category: "Business", link: "#" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuijY6PBz7YdTv2IwsQB2iJmBkx29awwpUSA&s"
      , title: "Business Strategy", date: "April 30, 2023", category: "Business", link: "#" },
    { image: "/mnt/data/image.png", title: "Business Strategy", date: "April 30, 2023", category: "Business", link: "#" },


    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_Up-17RyznF2bYNYUrhlhH8Xr1DAvLkxg&s", title: "Startup Growth", date: "March 10, 2023", category: "Startup", link: "#" },
    { image: "/mnt/data/image.png", title: "Investment Planning", date: "February 5, 2023", category: "Finance", link: "#" },
    { image: "/mnt/data/image.png", title: "Risk Assessment", date: "January 20, 2023", category: "Risk", link: "#" },
  ];

  const [filter, setFilter] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  const sortedProjects = [...filteredProjects].sort((a, b) =>
    sortAsc ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Services Section */}
      <h2 className="text-orange-500 text-sm font-semibold">We Provide The Best Service For Consulting</h2>
      <h1 className="text-3xl font-bold mt-2 mb-6">We Provide The Best Service For Consulting</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allServices.map((service, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg relative flex flex-col justify-between ${
              service.highlighted ? "bg-yellow-200" : "bg-white"
            } shadow-sm hover:shadow-lg transition-shadow`}
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-500 text-sm">
              Deliver personalized support with shared screens and a Support Bot.
            </p>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                service.highlighted ? "bg-white text-black" : "bg-black text-white"
              } absolute bottom-4 right-4`}
            >
              →
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-red-500 text-sm font-semibold">Reasons Why We are Best</h2>
          <h1 className="text-3xl font-bold mt-2 mb-4">Best Business Consulting Agency</h1>
          {["Process Excellence", "Strategic Planning", "Experience Design", "AI Solutions"].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">✔</div>
              <div>
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="text-gray-500 text-sm">We bring the best industry practices.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="/mnt/data/image.png" alt="Consulting Meeting" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <h2 className="text-orange-500 text-sm font-semibold mt-12">Project & Case Studies</h2>
      <h1 className="text-3xl font-bold mt-2 mb-6">Let's Look At Our Global Projects</h1>

      {/* Filter & Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <select
          className="p-2 border rounded-lg"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="All">All Categories</option>
          {["Business", "Startup", "Finance", "Risk"].map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>
        <button
          className="px-4 py-2 bg-black text-white rounded-lg"
          onClick={() => setSortAsc(!sortAsc)}
        >
          {sortAsc ? "Sort: Newest First" : "Sort: Oldest First"}
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.date} • {project.category}</p>
              <a href={project.link} className="text-black font-bold mt-4 block">Read more →</a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-black text-white rounded-full">All Recent Projects →</button>
      </div>
    </div>
  );
}











// import React from "react";

// export default function Services() {
//   const services = [
//     { title: "Business Advice", highlighted: false },
//     { title: "Startup Business", highlighted: true },
//     { title: "Financial Advice", highlighted: false },
//     { title: "Risk Management", highlighted: false },
//     { title: "Business Advice", highlighted: false },
//     { title: "Financial Advice", highlighted: false },
//     { title: "Financial Advice", highlighted: false },
//     { title: "Risk Management", highlighted: false },
//   ];
//   const projects = [
//     { image: "/mnt/data/image.png", title: "Why your client needs a responsive website", date: "April 30, 2023", category: "Business", link: "#" },
//     { image: "/mnt/data/image.png", title: "Why your client needs a responsive website", date: "April 30, 2023", category: "Startup", link: "#" },
//     { image: "/mnt/data/image.png", title: "Why your client needs a responsive website", date: "April 30, 2023", category: "Finance", link: "#" },
//     { image: "/mnt/data/image.png", title: "Why your client needs a responsive website", date: "April 30, 2023", category: "Risk", link: "#" },
//   ];
//   return (
//     <>
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h2 className="text-orange-500 text-sm font-semibold">Our Services</h2>
//       <h1 className="text-3xl font-bold mt-2 mb-4">We Provide The Best Service For Consulting</h1>
//       <p className="text-gray-500 max-w-xl mb-8">
//         Lorem ipsum dolor sit amet elit, sed do tempor incididunt ut dolore magna aliqua.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`p-6 border rounded-lg relative flex flex-col justify-between ${
//               service.highlighted ? "bg-yellow-200" : "bg-white"
//             } shadow-sm hover:shadow-lg transition-shadow`}
//           >
//             <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
//             <p className="text-gray-500 text-sm mb-6">
//               Deliver faster, more personalized support with shared screens and a Support Bot
//             </p>
//             <div
//               className={`w-10 h-10 flex items-center justify-center rounded-full ${
//                 service.highlighted ? "bg-white text-black" : "bg-black text-white"
//               } absolute bottom-4 right-4`}
//             >
//               →
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//      <div className="max-w-6xl mx-auto px-6 py-12">
//      <h2 className="text-orange-500 text-sm font-semibold">Why Choose Us</h2>
//      <h1 className="text-3xl font-bold mt-2 mb-4">Reasons Why We are Best Business Consulting Agency</h1>
//      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//        <div>
//          {[
//            "Process Excellence",
//            "Strategic Planning",
//            "Experience Design",
//            "Artificial Intelligence",
//          ].map((item, index) => (
//            <div key={index} className="flex items-center space-x-4 mb-6">
//              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">✔</div>
//              <div>
//                <h3 className="text-lg font-semibold">{item}</h3>
//                <p className="text-gray-500 text-sm">Dominion fowie in there light she does lights.</p>
//              </div>
//            </div>
//          ))}
//        </div>
//        <div className="relative">
//          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//            <img src="/mnt/data/image.png" alt="Consulting Meeting" className="rounded-lg" />
//          </div>
//        </div>
//      </div>
//    </div>

//    <div className="max-w-6xl mx-auto px-6 py-12">
//       <h2 className="text-orange-500 text-sm font-semibold">Why Choose Us</h2>
//       <h1 className="text-3xl font-bold mt-2 mb-4">Reasons Why We are Best Business Consulting Agency</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <div>
//           {["Process Excellence", "Strategic Planning", "Experience Design", "Artificial Intelligence"].map((item, index) => (
//             <div key={index} className="flex items-center space-x-4 mb-6">
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">✔</div>
//               <div>
//                 <h3 className="text-lg font-semibold">{item}</h3>
//                 <p className="text-gray-500 text-sm">Dominion fowie in there light she does lights.</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="relative">
//           <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//             <img src="/mnt/data/image.png" alt="Consulting Meeting" className="rounded-lg" />
//           </div>
//         </div>
//       </div>
//       <h2 className="text-red-500 text-sm font-semibold mt-12">Project & Case Studies</h2>
//       <h1 className="text-3xl font-bold mt-2 mb-6">Let's Looks Our Global Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-500 text-sm">{project.date} • {project.category}</p>
//               <a href={project.link} className="text-black font-bold mt-4 block">Read more →</a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <button className="px-6 py-2 bg-black text-white rounded-full">All Recent Projects →</button>
//       </div>
//     </div>
//    </>
//   );
// }




// import React from "react";

// const Services = () => {
//   return (
//     <div className="font-sans text-gray-900">
//       {/* Hero Section */}
//       <section className="text-center py-12 px-4 md:px-12">
//         <h1 className="text-3xl md:text-4xl font-bold">We Provide The Best Service For Consulting</h1>
//         <p className="text-gray-500 mt-2 text-sm md:text-base">Helping businesses thrive with expert solutions</p>
//       </section>

//       {/* Services Section */}
//       <section className="py-12 px-4 md:px-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {[1, 2, 3, 4].map((_, i) => (
//             <div key={i} className={`p-6 border rounded-lg shadow-sm ${i === 1 ? 'bg-yellow-100' : 'bg-white'}`}>
//               <h3 className="font-bold text-lg md:text-xl">Service {i + 1}</h3>
//               <p className="text-gray-500 mt-2 text-sm md:text-base">Brief description of the service.</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Reasons Section */}
//       <section className="py-12 px-4 md:px-12 bg-gray-100">
//         <h2 className="text-2xl md:text-3xl font-bold text-center">Reasons Why We Are Best Business Consulting Agency</h2>
//         <ul className="mt-6 space-y-2 text-sm md:text-base">
//           {["Experience", "Expert Team", "Innovative Solutions", "Customer Focused"].map((reason, i) => (
//             <li key={i} className="flex items-center gap-2">
//               <span className="w-4 h-4 bg-black rounded-full"></span>
//               {reason}
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Projects Section */}
//       <section className="py-12 px-4 md:px-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-center">Let's Look Our Global Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//           {[1, 2, 3, 4].map((_, i) => (
//             <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <div className="h-40 bg-gray-300"></div>
//               <div className="p-4">
//                 <h3 className="font-bold text-lg md:text-xl">Project {i + 1}</h3>
//                 <p className="text-gray-500 text-sm md:text-base">Short description of the project.</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 bg-gray-200">
//         <p className="text-gray-600 text-sm md:text-base">&copy; 2025 Consulting Agency. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Services;



// import React from 'react';
// const servicesData = [
//   {
//     title: 'Business Consulting',
//     description: 'We offer expert advice to help you grow your business.',
//   },
//   {
//     title: 'Marketing Strategy',
//     description: 'We develop effective marketing strategies to reach your target audience.',
//   },
//   {
//     title: 'Financial Planning',
//     description: 'We provide financial planning services to help you achieve your goals.',
//   },
// ];

// function Services() {
//     return (
//     <section className="services bg-gray-100 py-24">
//       <div className="container mx-auto">
//         <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary text-center mb-12">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//               className="service-item bg-white rounded-lg shadow-md p-8"
//             >
//               <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
//               <p className="text-secondary">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
