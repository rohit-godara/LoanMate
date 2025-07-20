// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { SiMoneygram } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="bg-white text-black px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <SiMoneygram className="text-3xl text-purple-700" />
          <span className="text-2xl font-extrabold text-purple-800">Loan Mate</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-medium items-center">
          <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
          <li><Link to="/calculator" className="hover:text-purple-700">Calculator</Link></li>
          <li><Link to="/services" className="hover:text-purple-700">Services</Link></li>
          <li><Link to="/contact" className="hover:text-purple-700">Contact Us</Link></li>
          <li>
            <Link
              to="/login"
              className="bg-purple-700 text-white px-4 py-1 rounded-full hover:bg-purple-800"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
