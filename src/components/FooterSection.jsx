import React from 'react';
import logo from '/assets/logo.png';

const footerData = [
  {
    title: "COMPANY",
    links: [
      { name: "About", url: "/about" },
      { name: "Feature", url: "/services" },
      { name: "Works", url: "/contact" },
      { name: "Careers", url: "/contact" }
    ]
  },
  {
    title: "HELP",
    links: [
      { name: "Customer Support", url: "#" },
      { name: "Delivery Details", url: "#" },
      { name: "Terms & Conditions", url: "#" },
      { name: "Privacy Policy", url: "#" }
    ]
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Free Ebooks", url: "/blogs" },
      { name: "Development Details", url: "#" },
      { name: "How to Blog", url: "#" },
      { name: "Privacy Policy", url: "#" }
    ]
  },
  {
    title: "LINK",
    links: [
      { name: "Customer Support", url: "/blogs" },
      { name: "FAQ", url: "#" },
      { name: "Terms & Conditions", url: "#" },
      { name: "Youtube Playlist", url: "#" }
    ]
  }
];

const Footer = () => {
  return (
    <section className="footer-section py-8 bg-bgSecondary text-black">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <div className='flex items-start mb-4'>
              <img className='object-contain' src={logo} width={60} height={60} alt="Logo" />
              <h3 className="text-xl font-semibold ml-2">Stanford International Consultancy</h3>
            </div>
            <p className="mt-2 text-sm">This is the best consultancy in the world</p>
          </div>
          {footerData.map((section, index) => (
            <div key={index} className="text-sm">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} className="hover:text-secondary transition-colors hover:underline">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;







// import React from 'react';
// import logo from '/assets/logo.png';


// const page = () => {
//     return (
//       <section className="footer-section py-8 bg-bgSecondary">
//         <div className="container mx-auto px-4 text-secondary">
//           <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-4">
//           <div className='max-md:col-span-2'>
//           <div className='flex items-start mb-4'>
//               <img className='object-contain' src={logo} width={60} height={60}/>
//               <h3 className="text-xl font-semibold">Stanford International Consultancy</h3>
//             </div>
//               <p className="mt-2">This is the best consultancy in the world</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">COMPANY</h3>
//               <ul className='m-2 space-y-2'>
//                 <li><a href="/about" className="hover:text-blue-500 transition-colors hover:underline">About</a></li>
//                 <li><a href="/services" className="hover:text-blue-500 transition-colors hover:underline">Feature</a></li>
//                 <li><a href="/contact" className="hover:text-blue-500 transition-colors hover:underline">Works</a></li>
//                 <li><a href="/contact" className="hover:text-blue-500 transition-colors hover:underline">Careers</a></li>
  
  
//               </ul>
//             </div>


//             <div>
//               <h3 className="text-xl font-semibold mb-4">HELP</h3>
//               <ul className='m-2 space-y-2'>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Customer Support</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Delivery Details</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Terms & Conditions</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Privacy Policy</a></li>
  
  
//               </ul>
//             </div>


//             <div>
//               <h3 className="text-xl font-semibold mb-4">RESOURCES</h3>
//               <ul className='m-2 space-y-2'>
//                 <li><a href="/blogs" className="hover:text-blue-500 transition-colors hover:underline">Free Ebooks</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Development Details</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">How to Blog</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Privacy Policy</a></li>


//               </ul>
//             </div>


//             <div>
//               <h3 className="text-xl font-semibold mb-4">LINK</h3>
//               <ul className='m-2 space-y-2'>
//                 <li><a href="/blogs" className="hover:text-blue-500 transition-colors hover:underline">Customer Support</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">FAQ</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Terms & Conditions</a></li>
//                 <li><a href="#" className="hover:text-blue-500 transition-colors hover:underline">Youtube Playlist</a></li>
//               </ul>
//             </div>


//             {/* <div>
//               <h3 className="text-xl font-semibold mb-4">Contact</h3>
//               <p className="">123 Main Street</p>
//               <p className="">City, State 12345</p>
//               <p className="">Email: info@example.com</p>
//             </div> */}
//           </div>
//         </div>
//       </section>    
  
//  )
// }


// export default page
