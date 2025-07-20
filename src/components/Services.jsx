import React from 'react';
import { FaHome, FaCar, FaUser, FaUniversity, FaCreditCard, FaCoins } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome size={24} />,
    title: 'Home Loan',
    description: 'Lowest home loan rate at 7.35% p.a.',
    link: 'https://bankofmaharashtra.in/personal-banking/loans/home-loan'
  },
  {
    icon: <FaCar size={24} />,
    title: 'Car Loan',
    description: 'Vehicle loans from IOB at 8.85% p.a.',
    link: 'https://www.iob.in/Vehicle-loans'
  },
  {
    icon: <FaUser size={24} />,
    title: 'Personal Loan',
    description: 'Personal loans via IOB starting at 10.5% p.a.',
    link: 'https://www.iob.in'
  },
  {
    icon: <FaCoins size={24} />,
    title: 'Gold Loan',
    description: 'Competitive gold loan options from major PSBs',
    link: 'https://sbi.co.in/web/personal-banking/loans/gold-loan'
  },
  {
    icon: <FaUniversity size={24} />,
    title: 'Education Loan',
    description: 'Explore Star Vidya Loan from Bank of India',
    link: 'https://bankofindia.co.in/education-loan'
  },
  {
    icon: <FaCreditCard size={24} />,
    title: 'Credit Card Issue',
    description: 'IOB credit cards with low annual fees',
    link: 'https://www.iob.in/CreditCard'
  }
];

const Services = () => (
  <section className="bg-grey text-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">Our Services</h2>
      <p className="text-gray-400 mb-10 max-w-2xl">
        Explore our loan and credit solutions with some of the lowest interest rates in India.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition block"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 text-white p-4 rounded-full">
                {s.icon}
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold text-black mb-2">{s.title}</h3>
            <p className="text-gray-400 text-center">{s.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
