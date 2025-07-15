import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/ai" className="hover:text-blue-400">AI</Link></li>
            <li><Link to="/calculator" className="hover:text-blue-400">Calculator</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaPhone className="mr-2" /> +1 (555) 123-4567
            </li>
            <li className="flex items-center">
              <FaTwitter className="mr-2" />
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">@yourhandle</a>
            </li>
            <li className="flex items-center">
              <FaFacebookF className="mr-2" />
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">facebook.com/yourpage</a>
            </li>
          </ul>
        </div>

        {/* Optional Extra Column (Brand or Logo) */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Loan Mate</h3>
          <p className="text-gray-400">Estimate your loan payments smarter and faster.</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Loan Mate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
