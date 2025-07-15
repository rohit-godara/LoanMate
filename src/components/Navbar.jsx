import React from 'react';
import { Link } from 'react-router-dom';
import { SiMoneygram } from "react-icons/si";


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-left size-">
        <SiMoneygram className="text-4xl text-white" />

        </div>

        <div className="flex items-center">
          <span className="text-3xl font-style: italic flex items-center justify-between">Loan Mate</span>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400 transition-colors duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/ai" className="hover:text-blue-400 transition-colors duration-200">
              AI
            </Link>
          </li>
          <li>
            <Link
              to="/calculator"
              className="px-4 py-1 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-200"
            >
              Calculator
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
