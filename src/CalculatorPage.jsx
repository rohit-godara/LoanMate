import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const CalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTerm, setLoanTerm] = useState(36);

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

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const data = [
    { name: 'Principal Amount', value: Number(loanAmount) },
    { name: 'Interest Amount', value: Number(totalInterest) },
  ];

  const COLORS = ['#4C1D95', '#65A30D'];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-2">Loan Calculator</h1>
      <div className="h-1 w-20 bg-green-500 mb-4 rounded-full"></div>
      <p className="max-w-xl text-center text-gray-600 mb-10">
        Estimate your EMI and understand the breakdown of your loan repayment over time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Loan Details</h2>

          {/* Loan Amount */}
          <div className="mb-6">
            <label className="block font-semibold text-sm text-gray-700 mb-1">Loan Amount</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">₹</span>
              <input
                type="number"
                value={loanAmount}
                min="1000"
                step="1000"
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
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
          <div className="mb-6">
            <label className="block font-semibold text-sm text-gray-700 mb-1">Interest Rate</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">%</span>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
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
          <div>
            <label className="block font-semibold text-sm text-gray-700 mb-1">Loan Tenure</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Months</span>
              <input
                type="number"
                min="6"
                max="360"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
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

        {/* EMI Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-purple-700 mb-4">Your EMI Details</h2>
          <div className="space-y-6 text-lg font-semibold">
            <div>
              <p className="text-gray-700 mb-1">Loan EMI</p>
              <span className="text-2xl text-green-600">₹{monthlyPayment}</span>
            </div>
            <div>
              <p className="text-gray-700 mb-1">Total Interest Payable</p>
              <span className="text-2xl text-red-500">₹{totalInterest}</span>
            </div>
            <div>
              <p className="text-gray-700 mb-1">Total Payment</p>
              <span className="text-2xl text-blue-600">₹{totalPayment}</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
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
