import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 w-full max-w-md border-t-8 border-purple-500">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-4">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base mb-6">
          Login to your Loan Mate account
        </p>

        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-purple-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
