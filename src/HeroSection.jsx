import React from 'react';
import { Link } from 'react-router-dom';
import CalculatorPage from './CalculatorPage';
import Services from './components/Services';
import ContactPage from './components/ContactPage';

const HeroSection = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen w-full bg-gray-50 text-black flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-3xl mt-40 sm:mt-52">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase text-zinc-700">
            <span className="text-blue-600 text-6xl block">Estimate</span>
            Your Monthly Payments Effortlessly!
          </h1>

          <p className="text-lg text-gray-600 mt-6 mb-10">
            Use our smart loan calculator to find your monthly payments, interest,
            and the best loan option tailored just for you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/Calculator"
              className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            >
              Try Calculator
            </Link>
            <a
              href="#services"
              className="px-6 py-3 bg-gray-300 text-gray-800 rounded shadow hover:bg-gray-400 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border border-gray-200 my-6" />

      {/* Calculator */}
      <section id="calculator">
        <CalculatorPage />
      </section>

      <hr className="border border-gray-200 my-6" />

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      <hr className="border border-gray-200 my-6" />

      {/* Contact */}
      <section id="contact">
        <ContactPage />
      </section>
    </>
  );
};

export default HeroSection;
