import React from 'react';
import { FaInstagram, FaXTwitter, FaLinkedin, FaTiktok, FaFacebook } from 'react-icons/fa6';

const reserveSectionIcon = [
  {id:1, icons :FaInstagram, href : "https://instagram.com/" },
  {id:2, icons :FaXTwitter, href: "https://x.com/" },
  {id:2, icons :FaLinkedin, href :"https://linkedin.com/company/" },
  {id:2, icons :FaTiktok , href: "https://tiktok.com/@stanfordinternational"},
  {id:2, icons :FaFacebook, href: "https://facebook.com/stanfordinternational" },
]

function RightsReservedSection() {
   
  return (
    <section className="rights-reserved-section py-4 bg-bgPrimary text-center">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; 2025 All rights reserved. <span className='text-brand hover:text-secondary cursor-pointer'>Stanford International.&nbsp;</span><span>Powered by &nbsp;</span><span className='italic underline text-brand'>ByteBoneFire</span></p>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          {
            reserveSectionIcon.map((item, index)=>{
              return(
                <>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    <item.icons size={24} />
                  </a>
                </>
              )
            })

          }
          
        </div>
        {/* <div className="flex justify-center gap-6 mb-4">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            <FaXTwitter size={24} />
          </a>
          <a href="https://linkedin.com/company/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://tiktok.com/@stanfordinternational" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            <FaTiktok size={24} />
          </a>
          <a href="https://facebook.com/stanfordinternational" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            <FaFacebook size={24} />
          </a>
        </div> */}

      </div>
    </section>
  );
}

export default RightsReservedSection;
