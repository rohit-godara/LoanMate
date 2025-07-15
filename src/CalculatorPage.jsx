import React, { useState } from 'react';

const CalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(1); // Default 1 year
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateLoan = () => {
    // Convert annual interest rate to monthly and decimal format
    const principal = loanAmount;
    const calculatedInterest = interestRate / 100 / 12;
    const payments = loanTerm * 12;

    // Monthly payment formula
    const x = Math.pow(1 + calculatedInterest, payments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isNaN(monthly) || (!principal || !calculatedInterest || !payments)) {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
      return;
    }

    const total = monthly * payments;
    const interest = total - principal;

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment(total.toFixed(2));
    setTotalInterest(interest.toFixed(2));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  return (
    <>
      <div className="h-screen w-full bg-black/95 text-white flex flex-col justify-center items-center">
        <h2 className="text-center text-4xl font-bold mb-8 pt-10">Loan Calculator</h2>

        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
          <div className="space-y-4">
            {/* Loan Amount Input */}
            <div>
              <label className="block text-lg">Loan Amount (INR)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white"
                placeholder="Enter loan amount"
              />
            </div>

            {/* Interest Rate Input */}
            <div>
              <label className="block text-lg">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white"
                placeholder="Enter interest rate"
              />
            </div>

            {/* Loan Term Input */}
            <div>
              <label className="block text-lg">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white"
                placeholder="Enter loan term in years"
              />
            </div>

            {/* Calculate Button */}
            <div className="flex justify-center">
              <button
                onClick={calculateLoan}
                className="w-full py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
              >
                Calculate Payment
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 space-y-4">
              {monthlyPayment > 0 && (
                <>
                  <div className="text-lg">
                    <span className="font-semibold">Monthly Payment: </span> {formatCurrency(monthlyPayment)}
                  </div>
                  <div className="text-lg">
                    <span className="font-semibold">Total Payment: </span> {formatCurrency(totalPayment)}
                  </div>
                  <div className="text-lg">
                    <span className="font-semibold">Total Interest: </span> {formatCurrency(totalInterest)}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
