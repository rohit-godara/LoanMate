import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const CalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTerm, setLoanTerm] = useState(36); // in months

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm);

    let monthly = 0;
    if (calculatedInterest === 0) {
      monthly = principal / payments;
    } else {
      const x = Math.pow(1 + calculatedInterest, payments);
      monthly = (principal * x * calculatedInterest) / (x - 1);
    }

    const total = monthly * payments;
    const interest = total - principal;

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment(total.toFixed(2));
    setTotalInterest(interest.toFixed(2));
  };

  // Run calculation whenever input changes
  React.useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const data = [
    { name: 'Principal Amount', value: Number(loanAmount) },
    { name: 'Interest Amount', value: Number(totalInterest) },
  ];

  const COLORS = ['#4C1D95', '#65A30D']; // Purple, Green

  return (
    <div className="min-h-screen bg-grey/95 text-gray-800 flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-500 mb-2">Loan Calculator</h1>
      <div className="h-1 w-20 bg-green-500 mb-4 rounded-full"></div>
      <p className="max-w-xl text-center text-gray-600 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio sem, tempor egestas libero at, fermentum posuere quam.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Left: Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md text-white">
          {/* Loan Amount */}
          <div className="mb-6 text-black">
            <label className="block font-semibold mb-2">Loan Amount:</label>
            <div className="flex items-center space-x-2">
              <span className="bg-white px-2 py-1 rounded text-black">₹</span>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <input
              type="range"
              min="1000"
              max="1000000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full mt-2"
            />
          </div>

          {/* Interest Rate */}
          <div className="mb-6 text-black">
            <label className="block font-semibold mb-2">Interest Rate :</label>
            <div className="flex items-center space-x-2">
              <span className="bg-white px-2 py-1 rounded text-black">%</span>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full mt-2"
            />
          </div>

          {/* Loan Term */}
          <div className='text-black'>
            <label className="block font-semibold mb-2">Loan Tenure :</label>
            <div className="flex items-center space-x-2">
              <span className="bg-white px-2 py-1 rounded text-black">Months</span>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <input
              type="range"
              min="6"
              max="360"
              step="6"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full mt-2"
            />
          </div>
        </div>

        {/* Center: EMI Details */}
        <div className="p-6 rounded-lg shadow-md text-black bg-white">
          <h2 className="text-xl font-bold text-center py-2 rounded mb-4">Your EMI Details</h2>
          <div className="space-y-4 text-center text-blue-500 text-lg font-semibold">
            <div>
              <p className='text-black'>Loan EMI</p><br />
              <span className="text-3xl">₹{monthlyPayment}</span>
            </div>
            <div>
              <p className='text-black'>Total Interest Payable</p><br />
              <span className="text-3xl">₹{totalInterest}</span>
            </div>
            <div>
              <p className='text-black'>Total Payment</p><br />
              <span className="text-3xl">₹{totalPayment}</span>
            </div>
          </div>
        </div>

        {/* Right: Donut Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center text-white">
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
