import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiMoneygram } from "react-icons/si";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-3">
          <SiMoneygram className="text-3xl text-purple-700" />
          <span className="text-2xl font-extrabold text-purple-800">Loan Mate</span>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-purple-700 focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
          <li><Link to="/calculator" className="hover:text-purple-700">Calculator</Link></li>
          <li><Link to="/services" className="hover:text-purple-700">Services</Link></li>
          <li><Link to="/contact" className="hover:text-purple-700">Contact Us</Link></li>
          <li>
            <Link
              to="/login"
              className="bg-purple-700 text-white px-4 py-1 rounded-full hover:bg-purple-800 transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

    
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 bg-white shadow-md py-4 rounded-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-purple-700">Home</Link>
          <Link to="/calculator" onClick={() => setMenuOpen(false)} className="block hover:text-purple-700">Calculator</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block hover:text-purple-700">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-purple-700">Contact Us</Link>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-purple-700 text-white px-4 py-1 rounded-full hover:bg-purple-800 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
