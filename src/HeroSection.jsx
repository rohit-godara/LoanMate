import React from 'react';
import { Link } from 'react-router-dom';
import CalculatorPage from './CalculatorPage';
import Services from './components/Services';
import ContactPage from './components/ContactPage';

const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-offwhite/95 text-black">
        <div className="text-center pt-60 uppercase font-bold text-5xl text-zinc-300">
          <span className="text-blue-500 text-6xl">Estimate</span>
          <br />
          <span className="text-emerald-400 text-4xl">Your Monthly Payments Effortlessly!</span>
        </div>

        <p className="text-lg text-center text-gray-600 mb-10 mt-4">
          Use our smart loan calculator to find out your monthly payments, interest, and the best loan option tailored just for you.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to={'/Calculator'}
            className="px-6 py-3 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition"
          >
            Try Calculator
          </Link>
          <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded cursor-pointer hover:bg-gray-400 transition">
            Learn More
          </button>
        </div>
      </div>

      <hr className="border border-gray-300 shadow-md my-6" />
      <CalculatorPage />
      <hr className="border border-gray-300 shadow-md my-6" />
      <Services />
      <hr className="border border-gray-300 shadow-md my-6" />
      <ContactPage />
    </>
  );
};

export default HeroSection;
