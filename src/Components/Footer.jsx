import React from 'react';

function Footer() {
  return (
    <div className="bg-cyan-800 text-white">
      <div className="flex justify-between items-start py-8 px-16 border-b border-cyan-600">
        <div className="w-1/3">
          <h3 className="font-bold text-2xl mb-3">About Us</h3>
          <p className="text-sm font-light leading-relaxed">
            Vespa Delivery brings fresh and delicious meals straight to your doorstep. 
            Our focus is on speed, quality, and customer satisfaction to make every order 
            a delightful experience!
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="font-bold text-2xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 transition duration-200 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 transition duration-200 cursor-pointer">Menu</li>
            <li className="hover:text-cyan-400 transition duration-200 cursor-pointer">About Us</li>
            <li className="hover:text-cyan-400 transition duration-200 cursor-pointer">Contact Us</li>
            <li className="hover:text-cyan-400 transition duration-200 cursor-pointer">FAQs</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="font-bold text-2xl mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-cyan-400 transition duration-200">
              <img src="/LOGO/facebook.png" className='h-12'/>
              <i className=""></i> Facebook
            </a>
            <a href="#" className="hover:text-cyan-400 transition duration-200 ml-2">
              <img src="/LOGO/instagram.png" className='h-12'/>
              <i className="pl-2"></i> Instagram
            </a>
            <a href="#" className="hover:text-cyan-400 transition duration-200">
              <img src="/LOGO/twitter.png" className='h-12'/>
              <i className="pl-4"></i> Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm bg-cyan-900">
        <p>© 2025 Vespa Delivery. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
