import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {

  return (
    <>
        {/* This is making empty space while navigating to Calculator Page */}
        <div className='h-screen w-full bg-offwhite/95 text-black '>
            <p className='text-center pt-60 uppercase font-bold text-5xl text-zinc-300'><span className='text-blue-500 text-6xl'>Estimate</span> <br /> Your Monthly Payments Effortlessly!</p>
            <p className="text-lg text-center text-gray-600 mb-10">
            Use our smart loan calculator to find out your monthly payments, interest, and the best loan option tailored just for you.
            </p>
            <div className="flex justify-center gap-6">
                <Link to={'/Calculator'} className="px-6 py-3 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition">
                Try Calculator
                </Link>
                <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded cursor-pointer hover:bg-gray-400 transition">
                Learn More
                </button>
            </div>
      </div>
    </>
  )
}

export default HeroSection