import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const location = useLocation();
  const { service, filter: initialFilter, sortAsc, filteredProjects = [] } = location.state || {};

  // Initialize filter state
  const [filter, setFilter] = useState(initialFilter || "All");

  // Find the first matching project based on the selected filter
  const selectedService =
    filter === "All" ? service : filteredProjects.find((p) => p.category === filter);

  return (
    <div className="p-6 mt-8">
      <h1 className="text-2xl font-bold">
        {selectedService ? selectedService.title : "No service found!"}
      </h1>

      {selectedService ? (
        <>
          <p className="text-gray-600">Service ID: {selectedService.id}</p>
          <p className="text-gray-500 mt-4">
            This page contains details about {selectedService.title}.
          </p>
          <p>{selectedService.description || "No description available."}</p>
        </>
      ) : (
        <p className="text-red-500 mt-4">No matching service found for the selected category.</p>
      )}

      {/* Filter & Sort Controls */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-6">
          <select
            className="p-2 border rounded-lg"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="All">All Categories</option>
            {["Temporary Residence/ Graduate Visa", "Covid Visa", "Parent Visa", "Student Visa", "Partner Visa"].map(
              (category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;









// import React from "react";
// import { useLocation } from "react-router-dom";

// const ServiceDetails = () => {
//   const location = useLocation();
//   const { service, filter, sortAsc, filteredProjects } = location.state || {}; // Get passed service data
// console.log(service,'service')
// console.log(filteredProjects,'filteredProjects')
//   if (!service) {
//     return <p>No service found!</p>;
//   }

//   return (
//     <div className="p-6 mt-8">
//       <h1 className="text-2xl font-bold">{service.title}</h1>
//       <p className="text-gray-600">Service ID: {service.id}</p>
//       <p className="text-gray-500 mt-4">
//         This page contains details about {service.title}.
//       </p>
//       <p> {service.description} </p>
//        {/* Show filter & sort options if passed */}
//        <div className="mt-6">
//             {/* Filter & Sort Controls */}
//       <div className="flex justify-between items-center mb-6">
//         <select
//           className="p-2 border rounded-lg"
//           onChange={(e) => setFilter(e.target.value)}
//           value={filter}
//         >
//           <option value="All">All Categories</option>
//           {["Temporary Residence/ Graduate Visa", "Covid Visa", "Parent Visa", "Student Visa","Partner Visa"].map((category, i) => (
//             <option key={i} value={category}>{category}</option>
//           ))}
//         </select>
//         <button
//           className="px-4 py-2 bg-black text-white rounded-lg"
//           onClick={() => setSortAsc(!sortAsc)}
//         >
//           {sortAsc ? "Sort: Newest First" : "Sort: Oldest First"}
//         </button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetails;

