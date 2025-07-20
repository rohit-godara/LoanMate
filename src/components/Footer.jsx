import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition-colors duration-200">Services</Link>
            </li>
            <li>
              <Link to="/calculator" className="hover:text-blue-400 transition-colors duration-200">Calculator</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <FaPhone className="mr-3 text-blue-400" /> 
              <span>+91 7461006900</span>
            </li>
            <li className="flex items-center">
              <FaTwitter className="mr-3 text-blue-400" />
              <a href="https://twitter.com/loanmate" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                @loanmate
              </a>
            </li>
            <li className="flex items-center">
              <FaFacebookF className="mr-3 text-blue-400" />
              <a href="https://facebook.com/loanmate" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                facebook.com/loanmate
              </a>
            </li>
          </ul>
        </div>

        {/* Brand / Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Loan Mate</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Estimate your loan payments smarter and faster.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Loan Mate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
