import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-center py-4'>
      <h1 className='text-4xl font-bold absolute left-1/2 transform -translate-x-1/2'>
        Loan Mate
      </h1>
      <div className='absolute right-4'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-2xl cursor-pointer'>Login</button>
        <button className='px-4 py-2 border text-white rounded-2xl ml-2 cursor-pointer'>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;