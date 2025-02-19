import React from 'react';
import { FaInstagram, FaXTwitter, FaLinkedin, FaTiktok, FaFacebook } from 'react-icons/fa6';

function RightsReservedSection() {
  return (
    <section className="rights-reserved-section py-4 bg-bgPrimary text-secondary text-center">
      <div className="container mx-auto">
        <div className="flex justify-center gap-6 mb-4">
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
        </div>
        <p>&copy; 2023 All rights reserved. <span className='text-brand'>Stanford International.&nbsp;</span><span>Powered by &nbsp;</span><span className='italic underline text-brand'>ByteBoneFire</span></p>
      </div>
    </section>
  );
}

export default RightsReservedSection;
