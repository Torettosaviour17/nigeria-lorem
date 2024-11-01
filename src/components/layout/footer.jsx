// import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-9">
      <div className="w-full md:items-center mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <img
            src={logo} 
            alt="Nigeria 2.0 Logo"
            className="mb-4"
          />
          <p className="text-[14px] text-gray-600 pr-12">
            This platform enables both young and old to voice their opinions and expose government corruption.
          </p>
        </div>

        {/* Middle Left section with Quick Links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-[16px] font-semibold mb-2">QUICK LINKS</h3>
          <ul>
            <li><a href="#home" className=" text-gray-700 hover:underline">Home</a></li>
            <li><a href="#health" className="text-gray-700 hover:underline">Health</a></li>
            <li><a href="#sport" className="text-gray-700 hover:underline">Sport</a></li>
            <li><a href="#politics" className="text-gray-700 hover:underline">Politics</a></li>
          </ul>
        </div>

        {/* Middle Right section with Social Media */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 ">
          <h3 className="text-[16px] font-semibold mb-2">SOCIAL MEDIA</h3>
          <ul>
            <li><a href="https://facebook.com" className="text-gray-700 hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" className="text-gray-700 hover:underline">Twitter</a></li>
            <li><a href="https://linkedin.com" className="text-gray-700 hover:underline">LinkedIn</a></li>
          </ul>
        </div>

        {/* Right section with Email Subscription */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="px-2 py-1 border md:w-[70%] border-gray-300 rounded-l mb-2 md:mb-0 md:rounded-l-none "
            />
            <button className="bg-red-600 text-[10px] md:w-[25%] text-white px-4 py-1 rounded md:rounded-l-none">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <div className="border-t mt-6 pt-4 text-center text-gray-600 text-sm">
        &copy; Nigeria 2.0 2020. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
