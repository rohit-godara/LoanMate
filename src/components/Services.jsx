import React from 'react';
import { FaHome, FaCar, FaUser, FaUniversity, FaCreditCard, FaCoins } from 'react-icons/fa';

const services = [
  { icon: <FaHome size={24} />, title: 'Home Loan' },
  { icon: <FaCar size={24} />, title: 'Car Loan' },
  { icon: <FaUser size={24} />, title: 'Personal Loan' },
  { icon: <FaCoins size={24} />, title: 'Gold Loan' },
  { icon: <FaUniversity size={24} />, title: 'Education Loan' },
  { icon: <FaCreditCard size={24} />, title: 'Credit Card Issue' }
];

const Services = () => {
  return (
    <section className="bg-grey text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">Our Services</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio sem, tempor egestas libero at,
          fermentum posuere quam.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 text-white p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-center text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio sem.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
